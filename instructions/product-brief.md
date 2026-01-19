# Girugi Product Brief

> **Last Updated**: January 2026  
> **Source**: girugi-PRD.md  
> **Status**: Phase 1 MVP Definition

---

## 1. Problem Statement

### The Core Problem

Foreigners living in Korea face significant daily friction:

1. **Confusion**: They don't know what tasks are essential or in what order to do them
2. **Language barriers**: Critical information is often Korean-only
3. **Scattered resources**: Advice is spread across blogs, group chats, and forums that are outdated or inconsistent
4. **Discovery gaps**: Finding foreigner-friendly places (especially for dietary restrictions) is unreliable
5. **Unsafe community spaces**: Existing group chats expose users to scams, harassment, and information overload
6. **Missed deadlines**: Visa renewals, registrations, and paperwork get forgotten

### Why It Matters

- New arrivals feel overwhelmed and make costly mistakes
- Settled residents waste time searching for reliable information
- Community support channels are risky (scams, harassment, no moderation)
- There's no single trusted source for "living in Korea" guidance

---

## 2. Solution Summary

**Girugi** is a bilingual (English/Korean) Korea-life hub that provides:

| Feature | What It Does | Why It Matters |
|---------|--------------|----------------|
| **First 7 Tasks** | Curated checklist of essential setup tasks | Gives new arrivals immediate direction |
| **Guides + Checklists** | Step-by-step guides with progress tracking | Trustworthy, structured information |
| **Discover Directory** | Places filtered by dietary needs | Foreigner-aware discovery |
| **Events + RSVP** | Local events with reminders | Follow-through on plans |
| **Daily Friend** | Same-day friendship plans (verification-gated) | Safe social connection |
| **Help Me** | Emergency translation support (text-first) | Urgent help when stuck |

### Key Differentiators

1. **Structure over noise**: Guides and checklists, not endless feeds
2. **Safety-first community**: Verification gates, no dating, no open group chats
3. **Bilingual parity**: Both languages work; missing translations show with a badge
4. **Follow-through**: Reminders, RSVPs, and progress tracking

---

## 3. Target Users (Personas)

### Primary Personas

#### 1. New Arrival Nadia
- **Situation**: Just moved to Korea (0-3 months)
- **Goals**: Complete essential setup without mistakes
- **Pain points**: Doesn't know what matters first; language anxiety
- **Triggers**: Visa/ARC steps, banking, first hospital visit
- **Concerns**: "Is this trustworthy? Will this expose my info?"

#### 2. Student Sam
- **Situation**: University student in Korea
- **Goals**: Find budget-friendly places and events, safe community
- **Pain points**: Info scattered across Korean-heavy posts
- **Triggers**: Semester start, club activities, visa paperwork
- **Concerns**: "Is this spammy? Will people be weird?"

#### 3. Working Professional Priya
- **Situation**: Full-time job in Korea (3+ months)
- **Goals**: Solve problems fast; plan weekends efficiently
- **Pain points**: No time for long onboarding or research
- **Triggers**: Weekend plans, last-minute needs, holidays
- **Concerns**: "I won't fill out a long setup process"

#### 4. Settled Resident Rafael
- **Situation**: Living in Korea 1+ years
- **Goals**: Discover new places, attend events, help others
- **Pain points**: Tired of noisy group chats
- **Triggers**: New neighborhood, dietary changes
- **Concerns**: "Is the community safe and clean?"

### Secondary Personas

#### 5. Volunteer Vina
- **Situation**: Bilingual resident who wants to help
- **Goals**: Help with translation safely, with bounded time commitment
- **Pain points**: Harassment risk, exposure risk
- **Triggers**: Available time windows
- **Concerns**: "Will my identity be protected?"

#### 6. Admin/Operator Moses (Founder)
- **Situation**: Running the platform solo initially
- **Goals**: Keep users safe with limited time
- **Pain points**: Moderation overload, verification backlog
- **Triggers**: Report spikes, suspicious activity
- **Concerns**: "If ops is heavy, we can't scale"

---

## 4. MVP Scope (Phase 1)

### In Scope

| Category | Features |
|----------|----------|
| **Auth** | Email OTP sign-in, session persistence |
| **Onboarding** | 9-screen flow (language, city, situation, dietary, interests, notifications, verification) |
| **Home** | Dashboard with First 7 Tasks, recommended guide, top picks, events |
| **Guides** | Browse, search, detail view with "last reviewed" date |
| **Checklists** | Progress tracking per task (not started / in progress / done) |
| **Discover** | Browse/search listings, dietary filters, save places |
| **Reviews** | Create reviews with rating + text, moderation |
| **Events** | Browse events, RSVP (Yes/Maybe/No), reminders |
| **Daily Friend** | Verification-gated friendship plans with restricted 1:1 chat |
| **Help Me** | Text-first translation requests with volunteer routing |
| **Safety** | Block/report everywhere, admin moderation queues |
| **Admin** | Verification queue, reports queue, listing approvals, audit logs, kill switches |

### Out of Scope (Hard Rules)

- **No dating** or romantic matching
- **No open group chats** (only 1:1 after matching)
- **No voice/video** in Help Me (Phase 2)
- **No exact location sharing** (coarse city/area only)
- **No unmoderated public messaging**

### Phase 2 (Future - Pro Features)

- Offline survival packs
- Smart deadline reminders (ARC renewal, visa dates)
- Legal help routing
- Emergency translation toolkit
- Advanced dietary filters
- Priority support

---

## 5. Success Metrics

### North Star Metric

> **% of new users who complete First 7 Tasks within 7 days**

This measures whether users find immediate value and stick with the app.

### Supporting Metrics

| Category | Metric | Why It Matters |
|----------|--------|----------------|
| **Activation** | Onboarding completion rate | Users reach "Plan Ready" |
| **Activation** | Start Task #1 click rate | Users take first action |
| **Engagement** | Tasks completed per user | Progress momentum |
| **Engagement** | Places/events saved | Personal investment |
| **Retention** | D1/D7 return rate | Users come back |
| **Safety** | Report-to-action time | Trust in moderation |
| **Safety** | Report rate per 1,000 users | Platform health |
| **Community** | Daily Friend match rate | Feature adoption |
| **Community** | Help Me completion rate | Feature effectiveness |

### What We Don't Track (Privacy)

- Message content (never in analytics)
- Verification document metadata
- Exact user location
- Query text that may contain PII

---

## 6. Competitive Landscape

| Alternative | Strengths | Weaknesses | Girugi Differentiator |
|-------------|-----------|------------|----------------------|
| **Blogs/Forums** | Lots of information | Stale, inconsistent, hard to follow | Structured guides + "last reviewed" |
| **Group Chats** | Fast replies | Noisy, risky, scams/harassment | Verification gates + moderation |
| **Maps/Listing Apps** | Broad coverage | Not foreigner-aware | Dietary filters + trust controls |
| **Event Sites** | Many events | Fragmented, Korean-heavy | Personalization + reminders |

---

## 7. Risks and Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Verification doc exposure** | Medium | High | Strict access controls, audit logs, retention policy |
| **Harassment in 1:1 chat** | Medium | High | No unsolicited messaging, block/report visible, rate limits |
| **Scams/impersonation** | Medium | High | Verification gates, trust signals, moderation queue |
| **Outdated guides cause confusion** | High | Medium | "Last reviewed" dates, report inaccurate button |
| **Help Me volunteer shortage** | High | Medium | Clear "no volunteers available" state, bounded tools |
| **Translation gaps reduce trust** | High | Medium | Parity fallback badge (show other language + badge) |
| **Spam reviews/listings** | Medium | Medium | Rate limits, approval queues |
| **Weaponized reporting** | Medium | Medium | Rate limits, admin review, audit logs |

---

## 8. Technical Context

### Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Mobile App** | Expo React Native | iOS/Android user app |
| **Admin Console** | Next.js | Moderation, content management |
| **Backend** | Convex | Database, functions, realtime, file storage |
| **Push Notifications** | Expo Notifications | Task/event reminders |
| **Email** | Loops | Verification status, operational emails |
| **Payments (Phase 2)** | RevenueCat | Pro subscriptions |

### Architecture Principles

1. **Safety-first by design**: Gates, defaults, auditability
2. **Server-side enforcement**: Never trust client for security
3. **Coarse location only**: No exact addresses in public contexts
4. **Generic notifications**: No sensitive content by default
5. **Fail safely**: Clear empty states, no silent failures

---

## 9. Analytics Event Categories

Events follow `snake_case` naming with these prefixes:

| Prefix | Category | Example |
|--------|----------|---------|
| `auth_` | Authentication | `auth_otp_requested`, `auth_otp_verified` |
| `onboard_` | Onboarding | `onboard_step_viewed`, `onboard_completed` |
| `first7_` | First 7 Tasks | `first7_task_started`, `first7_completed` |
| `guide_` | Guides | `guide_opened`, `guide_link_clicked` |
| `discover_` | Discover | `discover_search`, `listing_saved` |
| `event_` | Events | `event_rsvp_set`, `event_reminder_set` |
| `daily_friend_` | Daily Friend | `daily_friend_plan_created`, `match_created` |
| `help_` | Help Me | `help_request_created`, `help_session_completed` |
| `safety_` | Safety | `block_used`, `report_submitted` |
| `admin_` | Admin | `admin_action_taken`, `kill_switch_toggled` |

---

## 10. Open Questions

These items need decisions before or during development:

| Question | Impact | Default Assumption |
|----------|--------|-------------------|
| Exact CSS variable color values (`--chart-1` etc.) | Visual consistency | Use blues/greens from design.md |
| Font family for `font-sans` | Typography | System fonts (SF Pro/Roboto) |
| Desktop breakpoints | Admin console layout | Mobile-first, responsive at 768px+ |
| Verification doc retention period | Legal/privacy | 30-90 days after rejection/deletion |
| Message retention period | Storage/privacy | 90 days |
| Volunteer incentive structure | Community growth | Points/badges (no cash Phase 1) |

---

## 11. Glossary

| Term | Definition |
|------|------------|
| **ARC** | Alien Registration Card - ID for foreigners in Korea |
| **Daily Friend** | Same-day friendship plan matching (not dating) |
| **Help Me** | Emergency translation request workflow |
| **Verification** | Identity check required for community features |
| **Coarse location** | City/area level only (no exact address) |
| **Kill switch** | Admin control to disable high-risk features instantly |
| **First 7 Tasks** | Curated checklist for new arrivals |
| **Bilingual parity** | EN/KR experiences feel equivalent |

---

## Next Steps

1. Review this brief with stakeholders
2. Confirm open questions
3. Provide brand assets (logo, colors)
4. Begin Phase 0 setup (see tasks.md)
