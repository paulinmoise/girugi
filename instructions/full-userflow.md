# Girugi User Flows

> **Source**: girugi-PRD.md, mermaid-code.md  
> **Purpose**: Complete user journeys with happy paths, edge cases, and error states

---

## Table of Contents

1. [Authentication Flow](#1-authentication-flow)
2. [Onboarding Flow](#2-onboarding-flow)
3. [Home Dashboard Flow](#3-home-dashboard-flow)
4. [First 7 Tasks Flow](#4-first-7-tasks-flow)
5. [Guides Flow](#5-guides-flow)
6. [Discover Flow](#6-discover-flow)
7. [Events Flow](#7-events-flow)
8. [Daily Friend Flow](#8-daily-friend-flow)
9. [Help Me Flow](#9-help-me-flow)
10. [Settings Flow](#10-settings-flow)
11. [Admin Flows](#11-admin-flows)
12. [Safety Flows](#12-safety-flows)

---

## 1. Authentication Flow

### Entry Points
- App launch (first time or session expired)
- Manual logout
- Session timeout

### Happy Path

```
1. User opens app
2. App checks for stored session
3. No valid session → Show email entry screen
4. User enters email address
5. User taps "Send code"
6. System sends 6-digit OTP via email
7. User enters OTP code
8. System verifies OTP
9. Session created and stored securely
10. User proceeds to onboarding or home (based on status)
```

### Screen: Enter Email

| Element | Behavior |
|---------|----------|
| Email input | Validates format on blur |
| "Send code" button | Disabled until valid email |
| Rate limit notice | Shows if user is rate-limited |

**Copy (EN)**: "Enter your email to sign in"  
**Copy (KR)**: "로그인을 위해 이메일을 입력하세요"

### Screen: Enter OTP

| Element | Behavior |
|---------|----------|
| 6-digit input | Auto-advances between digits |
| Resend timer | 60-second countdown before resend |
| "Verify" button | Disabled until 6 digits entered |

### Edge Cases

| Scenario | System Response | User Sees |
|----------|-----------------|-----------|
| Invalid email format | Prevent submission | "Please enter a valid email" |
| Rate limited (too many OTP requests) | Block for 60 seconds | "Too many attempts. Try again in 60s" |
| Wrong OTP entered | Increment attempt counter | "That code didn't work. Try again." |
| Max attempts (5 wrong codes) | Lock for 15 minutes | "Too many wrong codes. Try again in 15 minutes." |
| OTP expired (after 10 min) | Require new OTP | "Code expired. Request a new one." |
| Network offline | Queue retry | "You're offline. We'll retry when connected." |

### Error Codes

| Code | Meaning |
|------|---------|
| `ERR_AUTH_RATE_LIMIT` | Too many OTP requests |
| `ERR_INVALID_OTP` | Wrong code entered |
| `ERR_NETWORK_OFFLINE` | No connection |

### Data Changes

- On success: Create/update `users` record, store session token
- Analytics: `auth_otp_requested`, `auth_otp_verified`, `auth_otp_failed`

---

## 2. Onboarding Flow

### Entry Points
- First login (no onboarding completed)
- Browsing user attempts gated action

### Screen 1: Welcome

**Purpose**: Communicate value proposition

| Action | Result |
|--------|--------|
| "Get started" | Proceed to Screen 2 |
| "I'm just browsing" | Enter browsing mode (limited features) |

**Key Copy**:
- EN: "Live in Korea with less stress"
- KR: "한국 생활, 더 편하게 시작하세요"
- Microcopy: "No dating. No open group chats. Safety-first by design."

### Screen 2: Language Selection

**Purpose**: Set UI language preference

| Action | Result |
|--------|--------|
| Select EN or KR | Highlight selection |
| "Continue" | Save preference, proceed |
| "Skip" | Default to English, proceed |

**Note**: Language toggle remains visible in header for later changes.

### Screen 3: City Selection

**Purpose**: Personalize local content

| Element | Behavior |
|---------|----------|
| Search input | Filter city list as user types |
| City cards | Grid of supported cities |
| "Choose later" | Proceed with no city set |

**Supported Cities**: Seoul, Busan, Incheon, Daegu, Daejeon, Gwangju, Suwon

**Edge Case**: "Other / Not listed" → Show Korea-wide content

### Screen 4: Situation Selection

**Purpose**: Tailor First 7 Tasks ordering

| Options | Effect |
|---------|--------|
| Just arrived (0-3 months) | Prioritize setup tasks |
| Settled resident (3+ months) | Prioritize discovery |
| Student | Student-relevant ordering |
| Working professional | Work-relevant ordering |

**Skip allowed**: Default ordering applied

### Screen 5: Dietary Preferences

**Purpose**: Enable dietary filters

| Options (Multi-select chips) |
|------------------------------|
| Halal, Vegan, Vegetarian, Gluten-free |
| No pork, No beef, No restrictions |

**Behavior**: "No restrictions" clears other selections

### Screen 6: Interests

**Purpose**: Personalize events and Daily Friend

| Options (Max 3) |
|-----------------|
| Coffee, Food, Language exchange, Study |
| Hiking, Gym, Music, Museums, Tech meetups |

**Skip allowed**: Generic recommendations shown

### Screen 7: Notifications

**Purpose**: Request push permission with clear value

| Action | Result |
|--------|--------|
| "Turn on notifications" | Request OS permission |
| "Not now" | Skip, use in-app reminders only |

**If denied**: System falls back to in-app reminders, shows path to enable in Settings

### Screen 8: Plan Ready (Aha Moment)

**Purpose**: Show personalized plan, create momentum

| Displayed Cards |
|-----------------|
| First 7 Tasks (0/7) |
| Best guide to start now |
| Top picks near you (with dietary filters) |
| Events this week |

| Action | Result |
|--------|--------|
| "Start Task #1" | Go to first task detail |
| "Explore my city" | Go to Home dashboard |

### Screen 9: Verification + Research

**Sections**:

**A. Verification CTA**
- Explain why verification is needed (safety)
- "Verify now" → Go to verification flow
- "Later" → Continue to Home

**B. Pro Teaser**
- Show upcoming Pro features (read-only)
- Collect feature suggestion (optional text input)

**C. Price Vote**
- "$1 / $5 / $8 / $12 / More"
- Reassurance: "It's free right now"

### Browsing Mode

Users who skip onboarding can:
- ✅ View guides, listings, events
- ❌ Save places (prompts onboarding)
- ❌ RSVP to events (prompts onboarding)
- ❌ Access Daily Friend
- ❌ Create Help Me requests

**Prompt**: "Complete setup to unlock this feature"

### Edge Cases

| Scenario | Handling |
|----------|----------|
| App closed mid-onboarding | Resume from last completed step |
| Language switch mid-flow | Update UI immediately, keep progress |
| Offline during save | Queue saves, sync when online |
| User goes back | Allow navigation, preserve selections |

### Data Changes

- Create/update `preferences` record
- Initialize `taskStatus` for First 7 Tasks
- Store research inputs (feature suggestions, price votes)

---

## 3. Home Dashboard Flow

### Entry Points
- After onboarding completion
- Tab navigation from other screens
- App resume with valid session

### Layout (Top to Bottom)

1. **Header**: Avatar, greeting, language pill, notifications
2. **First 7 Tasks Card**: Progress + "Next task" CTA
3. **Best Guide**: Contextual recommendation
4. **Top Picks**: Dietary-filtered places
5. **Events This Week**: Upcoming events
6. **Safety Tips**: Lightweight tips card

### Interactions

| Element | Action | Result |
|---------|--------|--------|
| Notification bell | Tap | Go to notifications list |
| First 7 Tasks card | Tap | Go to tasks list |
| "Next task" button | Tap | Go to specific task |
| Guide card | Tap | Go to guide detail |
| Place card | Tap | Go to listing detail |
| Event card | Tap | Go to event detail |

### Edge Cases

| Scenario | Display |
|----------|---------|
| No city set | Show generic feed + "Set your city" prompt |
| No events this week | Show "No events" + nearby alternatives |
| All tasks complete | Show celebration state + "Explore more" |
| Offline | Show cached content + offline banner |

---

## 4. First 7 Tasks Flow

### Task List

| ID | Task | Description |
|----|------|-------------|
| 1 | Get phone number | Korean SIM/eSIM setup |
| 2 | Register ARC | Alien Registration Card |
| 3 | Open bank account | Korean bank basics |
| 4 | Get transit card | T-money/Cashbee |
| 5 | Register health insurance | NHIS enrollment |
| 6 | Find housing | Housing search guide |
| 7 | Learn emergency numbers | 119, 112, etc. |

### Task States

```
not_started → in_progress → done
```

### Task Detail Screen

| Section | Content |
|---------|---------|
| Title | Task name |
| Overview | Why this matters |
| Steps | Numbered checklist |
| What you need | Documents/requirements |
| Common mistakes | What to avoid |
| Links | Official resources |

### Interactions

| Action | Result |
|--------|--------|
| Mark step complete | Update progress, animate |
| Mark task done | Update status, show next task |
| Add note | Save private note to task |
| Set reminder | Schedule push notification |

### Edge Cases

| Scenario | Handling |
|----------|----------|
| Offline state change | Queue update, sync later |
| Task list updated (admin) | Merge gracefully, preserve progress |
| Conflict (edited on two devices) | Last-write-wins with timestamp |

---

## 5. Guides Flow

### Guides Hub

| Element | Behavior |
|---------|----------|
| Search bar | Filter guides by title/content |
| Category chips | Filter by topic |
| Guide cards | Show title, category, last reviewed |

### Guide Categories
- Getting Started
- Banking & Finance
- Healthcare
- Housing
- Transportation
- Immigration
- Daily Life
- Emergency

### Guide Detail Screen

| Section | Required |
|---------|----------|
| Title (bilingual) | Yes |
| Overview | Yes |
| What you need | Yes |
| Steps | Yes |
| Common mistakes | If applicable |
| Glossary | If applicable |
| Related guides | If available |
| Last reviewed date | Yes |

### Interactions

| Action | Result |
|--------|--------|
| Open related checklist | Navigate to checklist |
| "Report inaccurate" | Open report form |
| Share guide | Native share sheet |
| Tap external link | Open in browser with warning |

### Edge Cases

| Scenario | Handling |
|----------|----------|
| Translation missing | Show other language + "Translation pending" badge |
| Broken external link | Show warning, log for admin |
| Outdated (>90 days since review) | Show "May be outdated" badge |

---

## 6. Discover Flow

### Discover Hub

| Element | Behavior |
|---------|----------|
| Search bar | Search by name/keyword |
| Category chips | Restaurants, Cafes, Services, etc. |
| Dietary filter chips | Reflect user preferences |
| Results list | Cards with name, rating, tags |

### Listing Detail Screen

| Section | Content |
|---------|---------|
| Name | Bilingual name |
| Category | Restaurant, Cafe, etc. |
| Location | Address (area-level) + map placeholder |
| Dietary tags | Halal, Vegan, etc. |
| Tips | Foreigner-friendly notes |
| Reviews | User-submitted reviews |
| Actions | Save, Share, Report |

### Review Flow

```
1. Tap "Write review"
2. Select rating (1-5 stars)
3. Enter text (optional, 500 char limit)
4. Select tags (optional)
5. Submit
6. Review appears (or goes to moderation if flagged)
```

### Suggest Listing Flow

```
1. Tap "Suggest a place"
2. Fill form: name, address, category, dietary, notes
3. Submit
4. Goes to admin approval queue
5. User sees "Pending approval" status
```

### Edge Cases

| Scenario | Handling |
|----------|----------|
| No results | Show "No places found" + suggest listing CTA |
| No dietary match | Show nearest alternatives + filter toggle |
| Review rate limited | Show "Please wait before submitting another" |
| Listing suggestion rate limited | Show "One suggestion per day" |

---

## 7. Events Flow

### Events Hub

| Element | Behavior |
|---------|----------|
| City filter | Filter by location |
| Interest filters | Filter by category |
| Date range | This week, this month, etc. |
| Event cards | Title, date, location, image |

### Event Detail Screen

| Section | Content |
|---------|---------|
| Title | Event name |
| Date/Time | With timezone |
| Location | Venue name + area |
| Description | Event details |
| RSVP buttons | Yes / Maybe / No |
| Reminder toggle | Set push notification |
| Attendee count | Privacy-safe count (not names) |

### RSVP Flow

```
1. View event
2. Tap RSVP button (Yes/Maybe/No)
3. Selection saved
4. Appears in "My RSVPs"
5. Optional: Enable reminder
```

### Reminder Options
- 1 day before
- 2 hours before
- Custom time

### Edge Cases

| Scenario | Handling |
|----------|----------|
| Event canceled | Show "Canceled" badge, notify RSVPs |
| Event time changed | Update display, notify RSVPs |
| No events in city | Show "No events" + nearby cities |
| Push permission denied | Offer in-app reminders only |

---

## 8. Daily Friend Flow

### Entry Points
- Community tab
- Home prompt

### Verification Gate

**Unverified users see**:
- Preview of feature explanation
- "Verify to unlock" CTA
- Why verification matters

**Verified users see**:
- Full feature access

### Create Plan Flow

```
1. Tap "Create Plan"
2. Select activity type (Coffee, Meal, Walk, etc.)
3. Set time window (Morning, Afternoon, Evening)
4. Select area (coarse - Gangnam, Hongdae, etc.)
5. Add description (filtered for PII)
6. Review safety reminder
7. Submit plan
8. Plan visible to other verified users
```

### Browse & Respond Flow

```
1. Browse available plans
2. View plan details
3. Tap "I'm interested"
4. Plan creator reviews
5. Creator accepts → Match created
6. 1:1 chat unlocked
```

### Chat Rules

| Rule | Enforcement |
|------|-------------|
| Only matched users can chat | Server-side |
| No unsolicited messaging | UI prevents |
| Message rate limit | 10 per minute |
| Block/Report always visible | UI requirement |
| PII patterns filtered | Best-effort content filter |

### Post-Meet Feedback

```
After plan completion time:
1. Prompt appears
2. User rates experience (1-5)
3. Optional: Safety concerns
4. Feedback saved (private, not public)
```

### Edge Cases

| Scenario | Handling |
|----------|----------|
| Kill switch activated | Show "Temporarily unavailable" |
| User loses verified status | Revoke access, show re-verify prompt |
| Plan spam attempt | Rate limit (3 plans/day) |
| Harassment reported | Admin reviews, may restrict user |

---

## 9. Help Me Flow

### Create Request Flow

```
1. Tap Help Me CTA (persistent button)
2. Select category (Hospital, Bank, etc.)
3. Set language direction (KR→EN or EN→KR)
4. Set urgency (Urgent, Normal)
5. Add notes (optional)
6. Review consent for info sharing
7. Submit request
8. Wait for volunteer routing
```

### Routing Flow

```
1. System checks for online volunteers
2. If available: Route to first available
3. Volunteer sees request, accepts/declines
4. If accepted: Session starts
5. If no volunteers: Show safe fail state
```

### Safe Fail State

**When no volunteers available**:
- Clear message: "No volunteers available right now"
- Alternative resources (emergency numbers, translation apps)
- Option to try again later

### Session Flow

```
1. Text chat opens
2. User and volunteer exchange messages
3. Either party can end session
4. Block/Report always visible
5. On end: Rating prompt
6. Safety review option
```

### Volunteer Experience

| Capability | Description |
|------------|-------------|
| See request details | Category, urgency, notes |
| Accept/Decline | Before seeing requester identity |
| Text chat | Bounded session |
| End session | Triggers rating |
| Points (if confirmed) | After requester confirms completion |

### Edge Cases

| Scenario | Handling |
|----------|----------|
| Kill switch activated | Show "Temporarily unavailable" |
| Volunteer goes offline | Show "Helper disconnected" + retry |
| Request expires (no accept) | Notify user, offer retry |
| Harassment in session | Report flow, admin review |

---

## 10. Settings Flow

### Settings Sections

| Section | Options |
|---------|---------|
| **Account** | Email (read-only), Verification status |
| **Language** | EN / KR toggle |
| **Location** | City selection |
| **Dietary** | Preference chips |
| **Interests** | Interest chips |
| **Notifications** | Push toggle, detail level |
| **Privacy** | Data controls |
| **Support** | Help, Report bug, Feedback |
| **About** | Version, Terms, Privacy policy |
| **Danger Zone** | Logout, Delete account |

### Verification Status Display

| Status | Display | Action |
|--------|---------|--------|
| None | "Not verified" | "Start verification" |
| Pending | "Under review" | "Check status" |
| Verified | "Verified ✓" | Badge shown |
| Rejected | "Needs attention" | "View reason" + "Resubmit" |

### Notification Detail Levels

| Level | What notifications show |
|-------|------------------------|
| Generic (default) | "You have an update" |
| Detailed | "Event tomorrow: Coffee Meetup" |

### Edge Cases

| Scenario | Handling |
|----------|----------|
| Save fails (offline) | Queue change, show "Will save when online" |
| Language change | Reload UI immediately |
| Delete account | Confirmation modal, 7-day grace period |

---

## 11. Admin Flows

### Admin Console Access
- Separate Next.js web app
- Admin-only login (allowlist + MFA)
- Session timeout: 8-12 hours

### Dashboard

| Metric | Display |
|--------|---------|
| Pending verifications | Count + queue link |
| Open reports | Count + queue link |
| Pending listings | Count + queue link |
| Active users (24h) | Graph |
| Feature flags status | Quick toggles |

### Verification Queue Flow

```
1. View pending submissions list
2. Select submission
3. View uploaded document (access logged)
4. Decision: Approve / Reject
5. If reject: Select reason category
6. Confirm with required reason
7. User notified
8. Audit log entry created
```

### Reports Queue Flow

```
1. View reports list (sorted by priority)
2. Select report
3. View context (reported content, history)
4. Decision: Remove content / Restrict user / Ban / Dismiss
5. Enter reason (required)
6. Confirm action
7. Audit log entry created
```

### Kill Switch Flow

```
1. Navigate to Feature Flags
2. View current status (Daily Friend, Help Me)
3. Toggle to disable
4. Enter reason (required)
5. Confirm
6. Takes effect immediately
7. All active sessions see "Temporarily unavailable"
8. Audit log entry created
```

---

## 12. Safety Flows

### Block User Flow

```
1. Access via profile, chat, or report
2. Tap "Block"
3. Confirmation modal
4. Confirm
5. Immediate effect:
   - Close active chats
   - Hide from each other
   - Prevent future matching
6. No notification to blocked user
```

### Report Flow

```
1. Access via profile, content, chat, or listing
2. Tap "Report"
3. Select reason:
   - Harassment
   - Scam/Spam
   - Inappropriate content
   - Impersonation
   - Safety concern
   - Other
4. Add details (optional)
5. Submit
6. Report queued for admin
7. User sees "Report submitted"
```

### Rate Limit Enforcement

| Action | Limit | Window |
|--------|-------|--------|
| OTP requests | 1 per 60s | Per email |
| OTP wrong attempts | 5 | Per session |
| Reviews | 1 per 5 min | Per user |
| Listing suggestions | 1 per day | Per user |
| Reports | 10 per day | Per user |
| Daily Friend plans | 3 per day | Per user |
| Messages | 10 per minute | Per chat |

---

## State Transition Summary

### User States
```
new → onboarding → active → (restricted) → (banned)
```

### Verification States
```
none → pending → verified
              → rejected → pending (resubmit)
```

### Daily Friend Plan States
```
draft → active → matched → completed
                        → canceled
```

### Help Request States
```
created → routed → accepted → active → closed
                           → expired
```

### Report States
```
submitted → triaged → action_taken
                   → dismissed
```

---

## Analytics Events Summary

| Flow | Key Events |
|------|------------|
| Auth | `auth_otp_requested`, `auth_otp_verified`, `auth_rate_limited` |
| Onboarding | `onboard_started`, `onboard_step_completed`, `onboard_completed` |
| First 7 | `first7_task_started`, `first7_task_completed`, `first7_completed` |
| Guides | `guide_opened`, `guide_search`, `guide_report_inaccurate` |
| Discover | `listing_viewed`, `listing_saved`, `review_submitted` |
| Events | `event_viewed`, `rsvp_set`, `reminder_set` |
| Daily Friend | `plan_created`, `match_created`, `feedback_submitted` |
| Help Me | `request_created`, `session_started`, `session_completed` |
| Safety | `block_used`, `report_submitted` |
