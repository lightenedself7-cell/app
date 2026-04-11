# Lightened Self - Booking App PRD

## Original Problem Statement
User reported that the booking time slots were showing old/past times for the current day that had already passed. Requested:
1. Use Calgary timezone (Mountain Time - America/Edmonton)
2. Hide past time slots for the current day

## App Overview
A spiritual healing and wellness booking platform called "Lightened Self" with:
- Energy Healing Sessions ($120, 60 min)
- Intuitive Readings ($95, 45 min)
- Guided Meditations ($55, 30 min)
- Inner Transformation Workshops ($199, 120 min)
- 1:1 Spiritual Mentorship ($450, Monthly)
- Couple Healing Journey ($180, 90 min)

## Tech Stack
- **Frontend**: React 19 with Tailwind CSS, shadcn/ui components
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Payment**: Stripe integration
- **Email**: Resend integration

## What's Been Implemented (April 10, 2026)

### Bug Fix: Time Slot Timezone Filtering
**File Modified**: `/app/frontend/src/components/BookingModal.js`

**Changes Made**:
1. Added Calgary timezone constant (`America/Edmonton`)
2. Implemented `getCalgaryDateString()` - returns current date in Calgary timezone
3. Implemented `getCalgaryTime()` - returns current hours/minutes in Calgary timezone
4. Implemented `getAvailableTimeSlots(selectedDate)` - filters time slots:
   - For future dates: shows all slots (9 AM - 7 PM)
   - For today: hides past time slots based on current Calgary time
   - For past dates: shows no slots
5. Added "(Calgary Time)" label to time field
6. Added message when no time slots available for selected date
7. Date picker min value now uses Calgary timezone

## Core Requirements
- [x] Time slots respect Calgary timezone
- [x] Past time slots hidden for current day
- [x] Cannot select past dates
- [x] All time slots available for future dates

## P0/P1/P2 Features Remaining

### P0 (Critical)
- None - core booking flow works

### P1 (Important)
- Stripe webhook configuration for production
- Email delivery setup with verified domain

### P2 (Nice to Have)
- Add time slot availability checking against existing bookings
- Admin dashboard for managing bookings
- Recurring booking option for mentorship

## Next Tasks
1. Configure Stripe API keys in production environment
2. Set up Resend email with verified domain
3. Deploy to production
