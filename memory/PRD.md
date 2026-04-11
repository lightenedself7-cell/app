# Lightened Self - Spiritual Healing Website

## Original Problem Statement
User requested multiple UI/UX fixes across sessions:
1. Remove background watermark logo with opacity
2. Remove arrow key icons from dropdown menus
3. Fix navigation scroll-to-section for all nav items
4. Embed Zoho Booking directly in modals
5. Add loading shimmer while Zoho widget loads
6. Fix footer Quick Links and Services to be clickable with correct routing
7. Make "Lightened Self" and logo link to homepage hero section

## Architecture
- **Frontend**: React (CRA with Craco) + Tailwind CSS + shadcn/ui
- **Backend**: FastAPI + MongoDB
- **Booking**: Zoho Bookings (embedded via portal-embed + nimbuspop embed script)

## What's Been Implemented (Jan 2026)
- [x] Removed background watermark overlay
- [x] Removed ChevronDown arrow icons from dropdowns
- [x] Fixed nav scroll-to-section with navbar offset
- [x] Embedded Zoho Booking widget in modals
- [x] Added shimmer loading skeleton for Zoho widget
- [x] Fixed footer Quick Links routing (Work With Me, Tools, Contact, Client Portal)
- [x] Fixed footer Services routing (1:1 Virtual, Mentorship, Couple Healing, Aura Cleansing)
- [x] Made footer "Lightened Self" clickable → homepage
- [x] Made navbar logo scroll to hero on click
- [x] All tests passed (100% across 4 iterations)

## Zoho Booking URL Map (portal-embed format)
- Energy Healing: #/13534000000039166
- Intuitive Reading: #/13534000000039185
- Guided Meditation: #/13534000000039202
- Couple Healing: #/13534000000039219
- 1:1 Mentoring: #/13534000000039236
- Inner Transformation: #/13534000000039259

## Prioritized Backlog
- P1: Email confirmation on booking (needs Zoho SMTP credentials)
- P2: SEO optimization
