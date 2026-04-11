import requests
import sys
from datetime import datetime, timedelta

class BookingAPITester:
    def __init__(self, base_url="https://timeslot-debug.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/api/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if response.content:
                    try:
                        json_response = response.json()
                        print(f"Response: {json_response}")
                        return True, json_response
                    except:
                        print(f"Response: {response.text[:200]}")
                        return True, {}
                return True, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text[:200]}")
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_services_endpoint(self):
        """Test services endpoint"""
        return self.run_test(
            "Get Services",
            "GET",
            "services",
            200
        )

    def test_create_checkout_session(self):
        """Test creating a checkout session"""
        tomorrow = (datetime.now() + timedelta(days=1)).strftime('%Y-%m-%d')
        
        success, response = self.run_test(
            "Create Checkout Session",
            "POST",
            "create-checkout-session",
            200,
            data={
                "name": "Test User",
                "email": "test@example.com",
                "phone": "123-456-7890",
                "date": tomorrow,
                "time": "2:00 PM",
                "service_id": "energy-healing-session",
                "notes": "Test booking",
                "origin_url": "https://timeslot-debug.preview.emergentagent.com"
            }
        )
        return success, response

    def test_contact_submission(self):
        """Test contact form submission"""
        return self.run_test(
            "Contact Submission",
            "POST",
            "contact",
            200,
            data={
                "name": "Test User",
                "email": "test@example.com",
                "interested_in": "Energy Healing",
                "message": "Test message"
            }
        )

def main():
    # Setup
    tester = BookingAPITester()
    
    print("🚀 Starting Backend API Tests...")
    print(f"Testing against: {tester.base_url}")

    # Test services endpoint
    services_success, services_data = tester.test_services_endpoint()
    if services_success and services_data:
        print(f"Available services: {list(services_data.keys())}")

    # Test checkout session creation
    checkout_success, checkout_data = tester.test_create_checkout_session()
    if checkout_success and checkout_data:
        print(f"Checkout session created: {checkout_data.get('session_id', 'No session ID')}")

    # Test contact submission
    contact_success, contact_data = tester.test_contact_submission()

    # Print results
    print(f"\n📊 Backend Tests Summary:")
    print(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if tester.tests_passed == tester.tests_run:
        print("✅ All backend tests passed!")
        return 0
    else:
        print("❌ Some backend tests failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main())