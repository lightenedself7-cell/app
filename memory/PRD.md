# Lightened Self - Spiritual Healing Website

## Original Problem Statement
User requested multiple UI/UX fixes:
1. Remove background watermark logo with opacity (doesn't look nice)
2. Remove arrow key icons from "Work with Me" and "Tools" dropdown menus (keep hover behavior)
3. Fix navigation scroll-to-section for all "Work with Me" items (wrong section / no scroll)
4. Embed Zoho Booking directly in modals instead of navigating to external pages

## Architecture
- **Frontend**: React (CRA with Craco) + Tailwind CSS + shadcn/ui
- **Backend**: FastAPI + MongoDB
- **Booking**: Zoho Bookings (embedded via portal-embed + nimbuspop embed script)
- **UI Components**: Radix UI NavigationMenu for dropdowns

## Core Requirements (Static)
- Spiritual healing services website for "Lightened Self"
- Navigation with dropdown menus for "Work with Me" and "Tools"
- Service pages with inline Zoho booking (embedded widget)
- Contact form with MongoDB storage

## What's Been Implemented (Jan 2026)
### Session 1 - UI Fixes
- [x] Removed background watermark overlay from App.js
- [x] Removed ChevronDown arrow icons from NavigationMenuTrigger and Navigation.js
- [x] Added `id` attributes to WorkWithMePage.js service sections (virtual, mentorship, couple)
- [x] Updated Navigation.js handleNavClick with scrollToHash function (80px navbar offset)
- [x] Fixed Contact button scroll behavior for both desktop and mobile

### Session 2 - Zoho Booking Embed
- [x] Created ZohoBookingEmbed.js component (dynamic script loading + Bookings.inlineEmbed())
- [x] Updated ServicesGrid.js to open booking modal with embedded Zoho widget
- [x] Updated WorkWithMePage.js to open booking modal with embedded Zoho widget
- [x] All URLs use portal-embed format for iframe compatibility
- [x] All tests passed (100% success across both sessions)

## Zoho Booking URL Map
- Energy Healing Session: portal-embed#/13534000000039166
- Intuitive Reading: portal-embed#/13534000000039185
- Guided Meditation: portal-embed#/13534000000039202
- Couple Healing Journey: portal-embed#/13534000000039219
- 1:1 Mentoring: portal-embed#/13534000000039236
- Inner Transformation Workshop: portal-embed#/13534000000039259

## User Personas
- **Clients**: People seeking energy healing, mentorship, couple healing sessions
- **Site Owner**: Spiritual healer offering virtual sessions and programs

## Prioritized Backlog
- P1: Email confirmation on booking (from connect@lightenedself.com) - needs Zoho SMTP app password
- P2: Additional service pages and content
- P3: SEO optimization

## Next Tasks
- Email confirmation integration when user is ready to provide Zoho SMTP credentials
- Consider adding loading spinner while Zoho widget loads (~10s)
