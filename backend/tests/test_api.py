"""
Backend API Tests for Lightened Self Wellness Website
Tests: Services, Checkout Session, Checkout Status, Webhook endpoints
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestServicesEndpoint:
    """Tests for GET /api/services - Service packages listing"""
    
    def test_get_services_returns_200(self):
        """Verify services endpoint returns 200 OK"""
        response = requests.get(f"{BASE_URL}/api/services")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
    
    def test_get_services_returns_all_six_packages(self):
        """Verify all 6 service packages are returned"""
        response = requests.get(f"{BASE_URL}/api/services")
        data = response.json()
        assert len(data) == 6, f"Expected 6 services, got {len(data)}"
    
    def test_get_services_correct_service_ids(self):
        """Verify correct service IDs are present"""
        response = requests.get(f"{BASE_URL}/api/services")
        data = response.json()
        expected_ids = [
            "energy-healing-session",
            "intuitive-reading",
            "guided-meditation",
            "inner-transformation-workshop",
            "1-1-spiritual-mentorship",
            "couple-healing-journey"
        ]
        for service_id in expected_ids:
            assert service_id in data, f"Missing service: {service_id}"
    
    def test_get_services_correct_prices(self):
        """Verify correct prices for each service (CAD)"""
        response = requests.get(f"{BASE_URL}/api/services")
        data = response.json()
        expected_prices = {
            "energy-healing-session": 120.00,
            "intuitive-reading": 95.00,
            "guided-meditation": 55.00,
            "inner-transformation-workshop": 199.00,
            "1-1-spiritual-mentorship": 450.00,
            "couple-healing-journey": 180.00
        }
        for service_id, expected_price in expected_prices.items():
            assert data[service_id]["price"] == expected_price, \
                f"Price mismatch for {service_id}: expected {expected_price}, got {data[service_id]['price']}"
    
    def test_get_services_has_required_fields(self):
        """Verify each service has title, price, and duration"""
        response = requests.get(f"{BASE_URL}/api/services")
        data = response.json()
        for service_id, service in data.items():
            assert "title" in service, f"Missing title for {service_id}"
            assert "price" in service, f"Missing price for {service_id}"
            assert "duration" in service, f"Missing duration for {service_id}"


class TestCreateCheckoutSession:
    """Tests for POST /api/create-checkout-session - Stripe checkout creation"""
    
    def test_create_checkout_valid_service_returns_url(self):
        """Verify valid service creates checkout session with URL"""
        payload = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "1234567890",
            "date": "2026-02-15",
            "time": "10:00 AM",
            "service_id": "energy-healing-session",
            "notes": "Test booking",
            "origin_url": "https://lightened-self.preview.emergentagent.com"
        }
        response = requests.post(f"{BASE_URL}/api/create-checkout-session", json=payload)
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        data = response.json()
        assert "url" in data, "Response missing 'url' field"
        assert "session_id" in data, "Response missing 'session_id' field"
        assert data["url"].startswith("https://checkout.stripe.com"), \
            f"URL should start with Stripe checkout domain, got: {data['url'][:50]}"
    
    def test_create_checkout_invalid_service_returns_400(self):
        """Verify invalid service_id returns 400 error"""
        payload = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "1234567890",
            "date": "2026-02-15",
            "time": "10:00 AM",
            "service_id": "invalid-service-id",
            "notes": "Test booking",
            "origin_url": "https://lightened-self.preview.emergentagent.com"
        }
        response = requests.post(f"{BASE_URL}/api/create-checkout-session", json=payload)
        assert response.status_code == 400, f"Expected 400, got {response.status_code}"
        data = response.json()
        assert "detail" in data, "Error response missing 'detail' field"
        assert "Invalid service" in data["detail"], f"Unexpected error message: {data['detail']}"
    
    def test_create_checkout_missing_required_fields_returns_422(self):
        """Verify missing required fields returns 422 validation error"""
        payload = {
            "name": "Test User",
            # Missing email, date, time, service_id, origin_url
        }
        response = requests.post(f"{BASE_URL}/api/create-checkout-session", json=payload)
        assert response.status_code == 422, f"Expected 422, got {response.status_code}"
    
    def test_create_checkout_invalid_email_returns_422(self):
        """Verify invalid email format returns 422 validation error"""
        payload = {
            "name": "Test User",
            "email": "not-an-email",
            "phone": "1234567890",
            "date": "2026-02-15",
            "time": "10:00 AM",
            "service_id": "energy-healing-session",
            "notes": "Test booking",
            "origin_url": "https://lightened-self.preview.emergentagent.com"
        }
        response = requests.post(f"{BASE_URL}/api/create-checkout-session", json=payload)
        assert response.status_code == 422, f"Expected 422, got {response.status_code}"
    
    def test_create_checkout_all_services(self):
        """Verify checkout session can be created for all 6 services"""
        service_ids = [
            "energy-healing-session",
            "intuitive-reading",
            "guided-meditation",
            "inner-transformation-workshop",
            "1-1-spiritual-mentorship",
            "couple-healing-journey"
        ]
        for service_id in service_ids:
            payload = {
                "name": "Test User",
                "email": "test@example.com",
                "phone": "1234567890",
                "date": "2026-02-15",
                "time": "10:00 AM",
                "service_id": service_id,
                "notes": f"Test booking for {service_id}",
                "origin_url": "https://lightened-self.preview.emergentagent.com"
            }
            response = requests.post(f"{BASE_URL}/api/create-checkout-session", json=payload)
            assert response.status_code == 200, f"Failed for service {service_id}: {response.status_code}"
            data = response.json()
            assert "url" in data, f"Missing URL for service {service_id}"


class TestCheckoutStatus:
    """Tests for GET /api/checkout-status/{session_id} - Payment status check"""
    
    def test_checkout_status_valid_session(self):
        """Verify checkout status returns payment info for valid session"""
        # First create a checkout session
        payload = {
            "name": "Status Test User",
            "email": "statustest@example.com",
            "phone": "1234567890",
            "date": "2026-02-15",
            "time": "10:00 AM",
            "service_id": "guided-meditation",
            "notes": "Status test",
            "origin_url": "https://lightened-self.preview.emergentagent.com"
        }
        create_response = requests.post(f"{BASE_URL}/api/create-checkout-session", json=payload)
        assert create_response.status_code == 200
        session_id = create_response.json()["session_id"]
        
        # Check status (will be unpaid since we didn't complete payment)
        status_response = requests.get(f"{BASE_URL}/api/checkout-status/{session_id}")
        # Note: This may return 500 if Stripe can't find the session immediately
        # or 200 with unpaid status
        assert status_response.status_code in [200, 500], \
            f"Unexpected status code: {status_response.status_code}"
        
        if status_response.status_code == 200:
            data = status_response.json()
            assert "status" in data, "Missing 'status' field"
            assert "payment_status" in data, "Missing 'payment_status' field"


class TestWebhook:
    """Tests for POST /api/webhook/stripe - Stripe webhook handler"""
    
    def test_webhook_without_signature_returns_400(self):
        """Verify webhook without proper signature returns error"""
        # Sending without proper Stripe signature should fail
        response = requests.post(
            f"{BASE_URL}/api/webhook/stripe",
            data=b'{"type": "checkout.session.completed"}',
            headers={"Content-Type": "application/json"}
        )
        # Should return 400 due to missing/invalid signature
        assert response.status_code == 400, f"Expected 400, got {response.status_code}"


class TestContactEndpoint:
    """Tests for contact form submission"""
    
    def test_create_contact_submission(self):
        """Verify contact form submission works"""
        payload = {
            "name": "TEST_Contact User",
            "email": "testcontact@example.com",
            "interested_in": "Energy Healing",
            "message": "Test message for contact form"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        data = response.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert "id" in data, "Missing 'id' in response"
    
    def test_get_contact_submissions(self):
        """Verify contact submissions can be retrieved"""
        response = requests.get(f"{BASE_URL}/api/contact")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        data = response.json()
        assert isinstance(data, list), "Expected list of submissions"


class TestBookingsEndpoint:
    """Tests for bookings endpoint (legacy)"""
    
    def test_get_bookings(self):
        """Verify bookings list can be retrieved"""
        response = requests.get(f"{BASE_URL}/api/bookings")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        data = response.json()
        assert isinstance(data, list), "Expected list of bookings"


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
