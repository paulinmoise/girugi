# Girugi Development Tasks

> **Strategy**: Frontend-first with mock data, then Convex backend migration  
> **Agents**: 2 (Mobile + Admin working in parallel)  
> **Status Legend**: [ ] Not started | [~] In progress | [x] Done

---

## Agent Assignments

### Agent A: Mobile App (Expo React Native)

**Owns:**
- `mobile/src/**` - All mobile source code
- `mobile/assets/**` - Mobile assets

**Focus:**
- User-facing screens
- Onboarding flow
- Navigation
- Mobile UI components

### Agent B: Admin Console (Next.js)

**Owns:**
- `admin/src/**` - All admin source code
- `admin/public/**` - Admin assets

**Focus:**
- Moderation queues
- Admin dashboard
- Content management
- Web UI components

### Shared (Coordinated - See Rules Below)

- `convex/**` - Backend functions
- `packages/shared/**` - Types, constants, validation
- Root config files

---

## Conflict Avoidance Rules

### 1. Shared Files Policy

**Never edit simultaneously:**
- `packages/shared/types/index.ts`
- `packages/shared/constants/index.ts`
- `convex/schema.ts`
- Any file in `convex/*.ts`

**Protocol:**
1. Check if file is being edited (look for recent changes)
2. Add to shared queue if needed
3. One agent edits, other waits
4. Signal completion via task status

### 2. Creating New Files

**Safe to create independently:**
- Agent A: Any file in `mobile/src/**`
- Agent B: Any file in `admin/src/**`

**For shared packages:**
1. Create in own workspace first (mock)
2. Coordinate merge during integration phase

### 3. Branch/PR Naming (Conceptual)

Even without git, track logically:
- `mobile/feature-{name}` - Agent A features
- `admin/feature-{name}` - Agent B features
- `shared/feature-{name}` - Coordinated changes

### 4. Integration Checkpoints

Sync points where both agents pause and verify:
- End of Phase 1 (shared components ready)
- End of Phase 2 (all pages built)
- End of Phase 3 (navigation working)
- End of Phase 4 (backend connected)

---

## Phase 0: Project Setup & Decisions

**Owner**: Either agent (coordinate)  
**Duration**: 1-2 hours

### Task 0.1: Mobile Project Structure

**Owner**: Agent A  
**Status**: [x] **COMPLETED** (January 16, 2026)

**Create:**
```
mobile/src/
  components/
    ui/           # Shared UI components
    features/     # Feature-specific components
    layout/       # Layout components
  screens/        # Screen components
  navigation/     # Navigation config
  hooks/          # Custom hooks
  services/       # API/data services (mock first)
  utils/          # Utilities
  types/          # Mobile-specific types
  constants/      # Mobile-specific constants
  i18n/           # Translations
```

**Acceptance Criteria:**
- [x] Folders created with index.ts exports
- [x] Basic App.tsx updated with navigation shell
- [x] No lint errors

**Completion Summary:**
- Created full folder structure under `mobile/src/` with 11 directories
- Added React Navigation (v7) with bottom tab navigator (5 tabs: Home, Guides, Discover, Events, Community)
- Added path aliases (`@/*`) in tsconfig.json for cleaner imports
- Added constants (COLORS, LAYOUT, SCREENS) and i18n structure
- Preserved Convex connection with status indicator for dev verification

**Files Created:**
- `mobile/src/components/ui/index.ts`
- `mobile/src/components/features/index.ts`
- `mobile/src/components/layout/index.ts`
- `mobile/src/components/index.ts`
- `mobile/src/screens/index.ts`
- `mobile/src/navigation/index.ts`
- `mobile/src/hooks/index.ts`
- `mobile/src/services/index.ts`
- `mobile/src/utils/index.ts`
- `mobile/src/types/index.ts`
- `mobile/src/constants/index.ts`
- `mobile/src/i18n/index.ts`
- `mobile/src/i18n/types.ts`

**Files Modified:**
- `mobile/package.json` - Added React Navigation dependencies
- `mobile/App.tsx` - Added NavigationContainer with Tab Navigator
- `mobile/tsconfig.json` - Added path aliases

**How to Verify:**
1. `cd mobile && npm install`
2. `npx tsc --noEmit` (should pass with no errors)
3. `npm start` (Expo should launch, tabs should be visible)

**Do NOT edit:**
- `packages/shared/**`
- `convex/**`

---

### Task 0.2: Admin Project Structure

**Owner**: Agent B  
**Status**: [x] **COMPLETED** (January 19, 2026)

**Create:**
```
admin/src/
  components/
    ui/           # Shared UI components
    features/     # Feature-specific components
    layout/       # Layout components
  app/            # Next.js app router pages
    (auth)/       # Auth routes
    (dashboard)/  # Dashboard routes
  hooks/          # Custom hooks
  services/       # API/data services (mock first)
  utils/          # Utilities
  types/          # Admin-specific types
  lib/            # Third-party integrations
```

**Acceptance Criteria:**
- [x] Folders created with index.ts exports
- [x] Root layout.tsx updated with admin shell (metadata, structure)
- [x] Tailwind configured with design tokens (CSS variables from style-guide.md)
- [x] No lint errors (verified with `npx tsc --noEmit`)

**Completion Summary:**
- Created full folder structure under `admin/src/` with 7 directories (components/ui, components/features, components/layout, hooks, services, utils, types, lib)
- Added design tokens in `globals.css` matching `style-guide.md` (chart colors, semantic colors, text, borders)
- Updated `layout.tsx` with Girugi Admin metadata and proper structure
- Created (auth) route group with login page placeholder
- Created (dashboard) route group with layout (sidebar + topbar) and 6 placeholder pages
- Added admin-specific types in `types/index.ts` (AdminUser, Report, VerificationSubmission, etc.)

**Files Created:**
- `admin/src/components/ui/index.ts`
- `admin/src/components/features/index.ts`
- `admin/src/components/layout/index.ts`
- `admin/src/components/index.ts`
- `admin/src/hooks/index.ts`
- `admin/src/services/index.ts`
- `admin/src/utils/index.ts`
- `admin/src/types/index.ts`
- `admin/src/lib/index.ts`
- `admin/src/app/(auth)/layout.tsx`
- `admin/src/app/(auth)/login/page.tsx`
- `admin/src/app/(dashboard)/layout.tsx`
- `admin/src/app/(dashboard)/page.tsx`
- `admin/src/app/(dashboard)/verifications/page.tsx`
- `admin/src/app/(dashboard)/reports/page.tsx`
- `admin/src/app/(dashboard)/listings/page.tsx`
- `admin/src/app/(dashboard)/settings/page.tsx`
- `admin/src/app/(dashboard)/audit/page.tsx`

**Files Modified:**
- `admin/src/app/globals.css` - Added design tokens
- `admin/src/app/layout.tsx` - Updated metadata and structure

**How to Verify:**
1. `cd admin && npx tsc --noEmit` (should pass with no errors)
2. `cd admin && npm run dev` (Note: requires fixing npm workspace config first)
3. Navigate to `http://localhost:3000` to see dashboard
4. Navigate to `http://localhost:3000/login` to see auth page

**Do NOT edit:**
- `packages/shared/**`
- `convex/**`

---

### Task 0.3: Design Tokens Setup

**Owner**: Agent B (admin has Tailwind)  
**Status**: [x] **COMPLETED** (January 19, 2026)

**Edit**: `admin/src/app/globals.css`

**Add:**
```css
:root {
  --chart-1: #57B8FF;
  --chart-2: #2EC971;
  --chart-3: #DD9D18;
  --chart-4: #9B59B6;
  --chart-5: #3498DB;
  --primary: #57B8FF;
  --foreground: #1a1a1a;
  --background: #ffffff;
}
```

**Acceptance Criteria:**
- [x] CSS variables defined
- [x] Colors match style-guide.md
- [x] Verified in browser dev tools

**Completion Summary:**
- Design tokens were implemented as part of Task 0.2 (Admin Project Structure)
- All required CSS variables from style-guide.md are present in `globals.css`
- Additional tokens added beyond requirements: app-bg, surface colors, border colors, text colors, status colors
- Dark mode support included
- Accessibility focus styles added
- Custom scrollbar styling for admin console

**Files Modified:**
- `admin/src/app/globals.css` (already modified in Task 0.2)

**How to Verify:**
1. `cd admin && npm run dev -- -p 3050`
2. Open `http://localhost:3050` in browser
3. Open browser DevTools → Elements → select `:root`
4. Verify CSS variables are present:
   - `--chart-1: #57B8FF`
   - `--chart-2: #2EC971`
   - `--chart-3: #DD9D18`
   - `--chart-4: #9B59B6`
   - `--chart-5: #3498DB`
   - `--primary: #57B8FF`
   - `--foreground: #1a1a1a`
   - `--background: #ffffff`

---

### Task 0.4: Mock Data Strategy Setup

**Owner**: Both (coordinate)  
**Status**: [x] **COMPLETED** (January 19, 2026)

**Create**: `packages/shared/mocks/index.ts`

```typescript
// Mock data factory functions
export const mockUsers = [...];
export const mockGuides = [...];
export const mockListings = [...];
export const mockEvents = [...];
```

**Acceptance Criteria:**
- [x] Mock data types match schema
- [x] Sufficient variety for UI testing
- [x] Both agents can import

**Completion Summary:**
- Created comprehensive mock data module in `packages/shared/mocks/`
- Created mock types for all entities (guides, listings, events, etc.) in `mocks/types.ts`
- Created mock data files organized by domain:
  - `mocks/data/users.ts` - 10 users (admin, new, active, verified, volunteer, settled, restricted, banned, pending), preferences, task statuses
  - `mocks/data/guides.ts` - 6 bilingual guides covering First 7 Tasks topics (phone, ARC, bank, hospital, emergency, transit)
  - `mocks/data/listings.ts` - 10 listings (restaurants, cafes, grocery, healthcare, shopping) with dietary tags, 8 reviews
  - `mocks/data/events.ts` - 10 events (language exchange, food, tech, outdoors, social, culture, volunteer, music) with RSVPs
  - `mocks/data/admin.ts` - Verification submissions (8), reports (7), audit logs (10), feature flags (3), Daily Friend plans (5), Help Me requests (5)
- Added helper functions for common queries (by city, category, dietary, search, etc.)
- Exported all mocks from `packages/shared/index.ts`

**Files Created:**
- `packages/shared/mocks/types.ts` - Mock entity type definitions
- `packages/shared/mocks/data/users.ts` - User, preferences, task status mocks
- `packages/shared/mocks/data/guides.ts` - Guide mocks with bilingual content
- `packages/shared/mocks/data/listings.ts` - Listing and review mocks
- `packages/shared/mocks/data/events.ts` - Event and RSVP mocks
- `packages/shared/mocks/data/admin.ts` - Admin queue and community feature mocks
- `packages/shared/mocks/index.ts` - Main module re-exports

**Files Modified:**
- `packages/shared/index.ts` - Added mocks export

**How to Verify:**
1. `cd packages/shared && npx tsc --noEmit` (should pass with no errors)
2. Import mocks in mobile or admin: `import { mockUsers, mockGuides } from '@girugi/shared/mocks'`
3. Check mock counts: `console.log(mockDataCounts)` shows 10 users, 6 guides, 10 listings, 10 events

**Integration Notes:**
- Agent A and B coordinate on this file
- One creates, other reviews
- Mock types in `mocks/types.ts` are temporary; will be migrated to `types/index.ts` in Task 1.5

---

## Phase 1: Design System & Shared UI Foundation

**Duration**: 4-6 hours  
**Mode**: Coordinated (minimize conflicts)

### Task 1.1: Mobile UI Components

**Owner**: Agent A  
**Status**: [x] **COMPLETED** (January 19, 2026)

**Create** in `mobile/src/components/ui/`:

| Component | Priority | Props |
|-----------|----------|-------|
| `Button.tsx` | P0 | variant, disabled, loading, onPress |
| `Card.tsx` | P0 | children, variant (default/gradient) |
| `Input.tsx` | P0 | label, error, leading icon |
| `Badge.tsx` | P1 | variant, children |
| `Avatar.tsx` | P1 | initials, image, size |
| `Spinner.tsx` | P1 | size, color |

**Acceptance Criteria:**
- [x] Each component matches style-guide.md
- [x] TypeScript props defined
- [x] Works with React Native
- [x] Tested in isolation (tsc passes, no lint errors)

**Completion Summary:**
- Created 6 UI components following style-guide.md design system
- Button: Primary (gradient), Secondary (bordered), Ghost variants with disabled/loading states
- Card: Default (white surface), Gradient (hero cards), Muted variants with HeroCard and SelectionCard exports
- Input: Text input with label, error, helper text, leading/trailing icons; OtpInput for verification codes
- Badge: 7 variants (default, primary, success, warning, danger, info, muted); StepBadge, StatusBadge, TranslationBadge
- Avatar: Image/initials support, 5 sizes (xs-xl), status indicator, AvatarGroup for stacking
- Spinner: Size/color variants; LoadingOverlay, LoadingState, Skeleton, CardSkeleton, ListItemSkeleton

**Files Created:**
- `mobile/src/components/ui/Button.tsx`
- `mobile/src/components/ui/Card.tsx`
- `mobile/src/components/ui/Input.tsx`
- `mobile/src/components/ui/Badge.tsx`
- `mobile/src/components/ui/Avatar.tsx`
- `mobile/src/components/ui/Spinner.tsx`
- `mobile/src/components/ui/index.ts` (updated with exports)

**Files Modified:**
- `mobile/package.json` - Added expo-linear-gradient dependency

**How to Verify:**
1. `cd mobile && npx tsc --noEmit` (should pass with no errors)
2. Import components: `import { Button, Card, Input } from '@/components/ui'`
3. Use in screens with various props to test variants

**Do NOT edit:**
- Any admin files
- Shared packages (use local types first)

---

### Task 1.2: Admin UI Components

**Owner**: Agent B  
**Status**: [ ]

**Create** in `admin/src/components/ui/`:

| Component | Priority | Props |
|-----------|----------|-------|
| `Button.tsx` | P0 | variant, disabled, loading, onClick |
| `Card.tsx` | P0 | children, variant |
| `Input.tsx` | P0 | label, error, leading icon |
| `Badge.tsx` | P1 | variant, children |
| `Table.tsx` | P1 | columns, data, actions |
| `Modal.tsx` | P1 | open, onClose, title |

**Acceptance Criteria:**
- [ ] Each component matches style-guide.md
- [ ] Uses Tailwind classes
- [ ] TypeScript props defined
- [ ] Accessible (keyboard nav, focus states)

**Do NOT edit:**
- Any mobile files
- Shared packages

---

### Task 1.3: Mobile Layout Components

**Owner**: Agent A  
**Status**: [ ]

**Create** in `mobile/src/components/layout/`:

| Component | Purpose |
|-----------|---------|
| `PageContainer.tsx` | Standard page wrapper |
| `Header.tsx` | Screen headers |
| `BottomNav.tsx` | Main navigation |
| `SafeArea.tsx` | Safe area wrapper |

**Acceptance Criteria:**
- [ ] BottomNav matches design (floating, FAB center)
- [ ] Header supports sticky behavior
- [ ] SafeArea handles notch/home indicator

---

### Task 1.4: Admin Layout Components

**Owner**: Agent B  
**Status**: [ ]

**Create** in `admin/src/components/layout/`:

| Component | Purpose |
|-----------|---------|
| `DashboardLayout.tsx` | Main admin shell |
| `Sidebar.tsx` | Navigation sidebar |
| `TopBar.tsx` | Top header bar |
| `PageHeader.tsx` | Page title + actions |

**Acceptance Criteria:**
- [ ] Responsive (sidebar collapses on mobile)
- [ ] Navigation items for all admin sections
- [ ] User menu with logout

---

### Task 1.5: Shared Types Extension

**Owner**: Agent A (then Agent B reviews)  
**Status**: [ ]

**Edit**: `packages/shared/types/index.ts`

**Add types for:**
```typescript
// Guides
export interface Guide { ... }

// Listings
export interface Listing { ... }

// Events
export interface Event { ... }

// Reviews
export interface Review { ... }

// Daily Friend
export interface DailyFriendPlan { ... }

// Help Me
export interface HelpRequest { ... }

// Reports
export interface Report { ... }
```

**Acceptance Criteria:**
- [ ] Types match PRD requirements
- [ ] Types align with Convex schema structure
- [ ] Both agents can use without conflicts

**Integration Notes:**
- Agent A creates
- Agent B reviews before using
- Resolve conflicts before Phase 2

---

## Phase 2: Page Builds (Parallel)

**Duration**: 8-12 hours  
**Mode**: Fully parallel (separate files)

### Mobile Pages (Agent A)

#### Task 2.1: Auth Screens

**Owner**: Agent A  
**Status**: [ ]

**Create:**
- `mobile/src/screens/auth/EmailScreen.tsx`
- `mobile/src/screens/auth/OtpScreen.tsx`
- `mobile/src/services/authService.ts` (mock)

**Acceptance Criteria:**
- [ ] Email validation working
- [ ] OTP input (6 digits, auto-advance)
- [ ] Mock auth flow completes
- [ ] Error states shown (invalid, rate limit)
- [ ] Loading states

---

#### Task 2.2: Onboarding Screens

**Owner**: Agent A  
**Status**: [ ]

**Create:**
- `mobile/src/screens/onboarding/WelcomeScreen.tsx`
- `mobile/src/screens/onboarding/LanguageScreen.tsx`
- `mobile/src/screens/onboarding/CityScreen.tsx`
- `mobile/src/screens/onboarding/SituationScreen.tsx`
- `mobile/src/screens/onboarding/DietaryScreen.tsx`
- `mobile/src/screens/onboarding/InterestsScreen.tsx`
- `mobile/src/screens/onboarding/NotificationsScreen.tsx`
- `mobile/src/screens/onboarding/PlanReadyScreen.tsx`
- `mobile/src/screens/onboarding/VerificationScreen.tsx`

**Acceptance Criteria:**
- [ ] All 9 screens match PRD copy
- [ ] Selection cards work correctly
- [ ] Progress saves locally
- [ ] Skip options work
- [ ] Navigation between screens

---

#### Task 2.3: Home Dashboard

**Owner**: Agent A  
**Status**: [ ]

**Create:**
- `mobile/src/screens/home/HomeScreen.tsx`
- `mobile/src/components/features/home/First7TasksCard.tsx`
- `mobile/src/components/features/home/RecommendedGuide.tsx`
- `mobile/src/components/features/home/TopPicks.tsx`
- `mobile/src/components/features/home/EventsThisWeek.tsx`

**Acceptance Criteria:**
- [ ] Shows First 7 Tasks progress
- [ ] Pulls from mock data
- [ ] Empty states for missing content
- [ ] Tapping items navigates correctly

---

#### Task 2.4: Guides Hub

**Owner**: Agent A  
**Status**: [ ]

**Create:**
- `mobile/src/screens/guides/GuidesScreen.tsx`
- `mobile/src/screens/guides/GuideDetailScreen.tsx`
- `mobile/src/components/features/guides/GuideCard.tsx`
- `mobile/src/components/features/guides/CategoryChips.tsx`

**Acceptance Criteria:**
- [ ] Search filters guides
- [ ] Category chips filter
- [ ] Guide detail shows all sections
- [ ] "Last reviewed" date shown
- [ ] Report inaccurate button works

---

#### Task 2.5: Discover Hub

**Owner**: Agent A  
**Status**: [ ]

**Create:**
- `mobile/src/screens/discover/DiscoverScreen.tsx`
- `mobile/src/screens/discover/ListingDetailScreen.tsx`
- `mobile/src/components/features/discover/ListingCard.tsx`
- `mobile/src/components/features/discover/DietaryFilters.tsx`
- `mobile/src/components/features/discover/ReviewCard.tsx`

**Acceptance Criteria:**
- [ ] Dietary filters apply globally
- [ ] Save/unsave listings
- [ ] Reviews display correctly
- [ ] Write review flow works

---

#### Task 2.6: Events Hub

**Owner**: Agent A  
**Status**: [ ]

**Create:**
- `mobile/src/screens/events/EventsScreen.tsx`
- `mobile/src/screens/events/EventDetailScreen.tsx`
- `mobile/src/components/features/events/EventCard.tsx`
- `mobile/src/components/features/events/RsvpButtons.tsx`

**Acceptance Criteria:**
- [ ] Events filtered by city/interests
- [ ] RSVP buttons work
- [ ] Reminder toggle shown
- [ ] Horizontal scroll on home
- [ ] Date/time formatting

---

#### Task 2.7: Settings Screen

**Owner**: Agent A  
**Status**: [ ]

**Create:**
- `mobile/src/screens/settings/SettingsScreen.tsx`
- `mobile/src/screens/settings/PreferencesScreen.tsx`
- `mobile/src/screens/settings/NotificationSettingsScreen.tsx`

**Acceptance Criteria:**
- [ ] All preference sections shown
- [ ] Edit preferences works
- [ ] Verification status shown
- [ ] Logout works

---

### Admin Pages (Agent B)

#### Task 2.8: Admin Auth

**Owner**: Agent B  
**Status**: [ ]

**Create:**
- `admin/src/app/(auth)/login/page.tsx`
- `admin/src/services/adminAuthService.ts` (mock)

**Acceptance Criteria:**
- [ ] Email + password login (mock)
- [ ] Admin role check
- [ ] Redirect to dashboard on success
- [ ] Error states

---

#### Task 2.9: Admin Dashboard

**Owner**: Agent B  
**Status**: [ ]

**Create:**
- `admin/src/app/(dashboard)/page.tsx`
- `admin/src/components/features/dashboard/StatsCard.tsx`
- `admin/src/components/features/dashboard/QuickActions.tsx`

**Acceptance Criteria:**
- [ ] Shows pending counts (verifications, reports, listings)
- [ ] Quick links to queues
- [ ] Feature flag status visible

---

#### Task 2.10: Verification Queue

**Owner**: Agent B  
**Status**: [ ]

**Create:**
- `admin/src/app/(dashboard)/verifications/page.tsx`
- `admin/src/app/(dashboard)/verifications/[id]/page.tsx`
- `admin/src/components/features/verifications/VerificationTable.tsx`
- `admin/src/components/features/verifications/VerificationDetail.tsx`

**Acceptance Criteria:**
- [ ] List pending verifications
- [ ] View submission detail
- [ ] Approve/Reject with reason
- [ ] Status updates (mock)

---

#### Task 2.11: Reports Queue

**Owner**: Agent B  
**Status**: [ ]

**Create:**
- `admin/src/app/(dashboard)/reports/page.tsx`
- `admin/src/app/(dashboard)/reports/[id]/page.tsx`
- `admin/src/components/features/reports/ReportsTable.tsx`
- `admin/src/components/features/reports/ReportDetail.tsx`

**Acceptance Criteria:**
- [ ] List reports by status
- [ ] View report context
- [ ] Take action (remove, restrict, ban, dismiss)
- [ ] Reason required

---

#### Task 2.12: Listing Approvals

**Owner**: Agent B  
**Status**: [ ]

**Create:**
- `admin/src/app/(dashboard)/listings/page.tsx`
- `admin/src/components/features/listings/ListingApprovalTable.tsx`

**Acceptance Criteria:**
- [ ] List pending suggestions
- [ ] Approve/Reject actions
- [ ] Preview listing details

---

#### Task 2.13: Kill Switches

**Owner**: Agent B  
**Status**: [ ]

**Create:**
- `admin/src/app/(dashboard)/settings/page.tsx`
- `admin/src/components/features/settings/FeatureToggle.tsx`

**Acceptance Criteria:**
- [ ] Toggle Daily Friend on/off
- [ ] Toggle Help Me on/off
- [ ] Reason required for changes
- [ ] Shows last changed info

---

#### Task 2.14: Audit Logs

**Owner**: Agent B  
**Status**: [ ]

**Create:**
- `admin/src/app/(dashboard)/audit/page.tsx`
- `admin/src/components/features/audit/AuditLogTable.tsx`

**Acceptance Criteria:**
- [ ] List all admin actions
- [ ] Filter by action type, admin, date
- [ ] Shows full context

---

## Phase 3: Integration & Polish

**Duration**: 4-6 hours  
**Mode**: Coordinated

### Task 3.1: Mobile Navigation

**Owner**: Agent A  
**Status**: [ ]

**Edit**: `mobile/src/navigation/`

**Create:**
- Root navigator (auth vs main)
- Tab navigator (Home, Guides, Discover, Events, Community)
- Stack navigators per tab

**Acceptance Criteria:**
- [ ] All screens accessible
- [ ] Back navigation works
- [ ] Deep linking structure defined
- [ ] Tab bar shows correctly

---

### Task 3.2: Admin Navigation

**Owner**: Agent B  
**Status**: [ ]

**Edit**: `admin/src/components/layout/Sidebar.tsx`

**Connect:**
- Dashboard → All queue pages
- Settings → Feature flags
- Audit → Audit logs

**Acceptance Criteria:**
- [ ] All pages accessible from sidebar
- [ ] Active state shows correctly
- [ ] Mobile menu works

---

### Task 3.3: Mobile Polish Pass

**Owner**: Agent A  
**Status**: [ ]

**Check:**
- [ ] All loading states have skeletons
- [ ] All error states show user-friendly messages
- [ ] All empty states have appropriate messaging
- [ ] Keyboard dismisses correctly
- [ ] Scroll behavior is smooth

---

### Task 3.4: Admin Polish Pass

**Owner**: Agent B  
**Status**: [ ]

**Check:**
- [ ] Tables have loading states
- [ ] Forms validate before submit
- [ ] Modals focus correctly
- [ ] Responsive on tablet/mobile

---

### Task 3.5: Accessibility Pass

**Owner**: Both  
**Status**: [ ]

**Mobile (Agent A):**
- [ ] All buttons have accessible labels
- [ ] Screen reader can navigate
- [ ] Touch targets are 44px+

**Admin (Agent B):**
- [ ] Keyboard navigation works
- [ ] Focus visible on all interactive elements
- [ ] Color contrast passes

---

### Task 3.6: Cross-Reference Check

**Owner**: Both  
**Status**: [ ]

**Verify:**
- [ ] Types match between mobile and admin
- [ ] Mock data structure is consistent
- [ ] API service signatures align
- [ ] Status enums are identical

---

## Phase 4: Convex Backend Integration

**Duration**: 6-8 hours  
**Mode**: Sequential (schema first, then parallel)

### Task 4.1: Schema Extension

**Owner**: Agent B (Admin needs it first)  
**Status**: [ ]

**Edit**: `convex/schema.ts`

**Add tables:**
```typescript
// Guides
guides: defineTable({ ... })

// Listings  
listings: defineTable({ ... })

// Events
events: defineTable({ ... })

// Reviews
reviews: defineTable({ ... })

// Daily Friend
dailyFriendPlans: defineTable({ ... })

// Help Me
helpRequests: defineTable({ ... })
helpSessions: defineTable({ ... })

// Reports/Blocks
reports: defineTable({ ... })
blocks: defineTable({ ... })

// Research data
featureSuggestions: defineTable({ ... })
priceVotes: defineTable({ ... })
```

**Acceptance Criteria:**
- [ ] All tables have appropriate indexes
- [ ] Matches PRD data model
- [ ] Schema deploys successfully

---

### Task 4.2: Auth Functions

**Owner**: Agent A  
**Status**: [ ]

**Create**: `convex/auth.ts`

**Functions:**
- `requestOtp` - Send OTP email
- `verifyOtp` - Verify and create session
- `getSession` - Get current session
- `logout` - Clear session

**Acceptance Criteria:**
- [ ] Rate limiting implemented
- [ ] OTP expiration (10 min)
- [ ] Session storage works
- [ ] Mobile auth flow connects

---

### Task 4.3: User Functions

**Owner**: Agent A  
**Status**: [ ]

**Create**: `convex/users.ts`, `convex/preferences.ts`

**Functions:**
- `getUser` - Get current user
- `updatePreferences` - Save preferences
- `getOnboardingStatus` - Check completion

**Acceptance Criteria:**
- [ ] User creation on first login
- [ ] Preferences save correctly
- [ ] Mobile connects successfully

---

### Task 4.4: Content Functions

**Owner**: Agent B  
**Status**: [ ]

**Create**: `convex/guides.ts`, `convex/listings.ts`, `convex/events.ts`

**Functions:**
- `listGuides`, `getGuide`
- `listListings`, `getListing`, `suggestListing`
- `listEvents`, `getEvent`
- `createReview`, `listReviews`

**Acceptance Criteria:**
- [ ] Pagination works
- [ ] Filters work (dietary, city, category)
- [ ] Admin can manage content

---

### Task 4.5: Admin Functions

**Owner**: Agent B  
**Status**: [ ]

**Create**: `convex/admin.ts`, `convex/moderation.ts`

**Functions:**
- `listPendingVerifications`, `reviewVerification`
- `listReports`, `takeAction`
- `listPendingSuggestions`, `approveListing`
- `setFeatureFlag`, `getFeatureFlags`
- `getAuditLogs`

**Acceptance Criteria:**
- [ ] RBAC enforced (admin only)
- [ ] Audit logs created for all actions
- [ ] Kill switches work immediately

---

### Task 4.6: Mobile Backend Connection

**Owner**: Agent A  
**Status**: [ ]

**Replace mock services with Convex:**
- [ ] Auth service → Convex auth
- [ ] Guides service → Convex queries
- [ ] Listings service → Convex queries
- [ ] Events service → Convex queries

**Acceptance Criteria:**
- [ ] All screens load real data
- [ ] Mutations work (save, RSVP, review)
- [ ] Offline behavior graceful

---

### Task 4.7: Admin Backend Connection

**Owner**: Agent B  
**Status**: [ ]

**Replace mock services with Convex:**
- [ ] Admin auth → Convex
- [ ] Queues → Convex queries
- [ ] Actions → Convex mutations

**Acceptance Criteria:**
- [ ] All queues load real data
- [ ] Actions persist correctly
- [ ] Audit logs appear

---

## Phase 5: Analytics, Security & Production

**Duration**: 4-6 hours  
**Mode**: Parallel then coordinated

### Task 5.1: Mobile Analytics

**Owner**: Agent A  
**Status**: [ ]

**Create**: `mobile/src/services/analytics.ts`

**Implement events:**
- Auth events
- Onboarding funnel
- Feature usage
- Error tracking

**Acceptance Criteria:**
- [ ] Events fire on correct triggers
- [ ] No PII in payloads
- [ ] Dev logging works

---

### Task 5.2: Admin Analytics

**Owner**: Agent B  
**Status**: [ ]

**Create**: `admin/src/services/analytics.ts`

**Implement events:**
- Admin actions
- Queue interactions
- Session timing

**Acceptance Criteria:**
- [ ] Admin actions tracked
- [ ] Performance metrics captured

---

### Task 5.3: Security Audit - Mobile

**Owner**: Agent A  
**Status**: [ ]

**Checklist:**
- [ ] No secrets in client code
- [ ] Secure storage for tokens
- [ ] Input validation on all forms
- [ ] No raw user input in analytics
- [ ] Rate limit errors handled gracefully

---

### Task 5.4: Security Audit - Admin

**Owner**: Agent B  
**Status**: [ ]

**Checklist:**
- [ ] Admin routes protected
- [ ] RBAC enforced server-side
- [ ] File upload restrictions
- [ ] XSS prevention (no dangerouslySetInnerHTML)
- [ ] CSRF tokens if applicable

---

### Task 5.5: Security Audit - Backend

**Owner**: Agent B  
**Status**: [ ]

**Checklist:**
- [ ] All mutations check auth
- [ ] All admin functions check role
- [ ] Rate limits in place
- [ ] Verification docs access logged
- [ ] No PII in logs

---

### Task 5.6: Log Cleanup

**Owner**: Both  
**Status**: [ ]

**Remove before production:**
- [ ] Console.log statements (keep error logging)
- [ ] Mock data files (or feature flag)
- [ ] Test accounts
- [ ] Debug flags

---

### Task 5.7: Final Integration Test

**Owner**: Both  
**Status**: [ ]

**End-to-end flows:**
- [ ] New user: signup → onboarding → First 7 Tasks
- [ ] Returning user: login → home → browse → save
- [ ] Admin: login → review verification → approve
- [ ] Admin: view report → take action
- [ ] Admin: toggle kill switch

---

## Security Gates

**Gate 1 (End of Phase 2):**
- [ ] No hardcoded credentials
- [ ] No exposed API keys
- [ ] Input validation on all forms

**Gate 2 (End of Phase 4):**
- [ ] Server-side auth enforced
- [ ] RBAC implemented correctly
- [ ] Rate limits active
- [ ] Audit logging working

**Gate 3 (Before Launch):**
- [ ] Dependency audit (npm audit)
- [ ] No console errors in production
- [ ] Error boundaries in place
- [ ] Analytics privacy verified

---

## Convex Data Model Reference

### Tables with Indexes

```typescript
// Users
users: defineTable({...})
  .index("by_email", ["email"])

// Preferences  
preferences: defineTable({...})
  .index("by_user", ["userId"])

// Task Status
taskStatus: defineTable({...})
  .index("by_user", ["userId"])
  .index("by_user_task", ["userId", "taskId"])

// Guides
guides: defineTable({...})
  .index("by_category", ["category"])
  .index("by_language", ["language"])

// Listings
listings: defineTable({...})
  .index("by_city", ["city"])
  .index("by_category", ["category"])
  .index("by_dietary", ["dietaryTags"])

// Events
events: defineTable({...})
  .index("by_city_date", ["city", "date"])
  .index("by_category", ["category"])

// Verification
verificationSubmissions: defineTable({...})
  .index("by_user", ["userId"])
  .index("by_status", ["status"])

// Reports
reports: defineTable({...})
  .index("by_status", ["status"])
  .index("by_target", ["targetType", "targetId"])

// Audit Logs
auditLogs: defineTable({...})
  .index("by_actor", ["actorId"])
  .index("by_time", ["createdAt"])
```

---

## Storage Strategy

### Verification Documents

- **Storage**: Convex File Storage
- **Access**: Admin role only
- **Audit**: Every access logged
- **Retention**: 30-90 days after rejection/deletion (TBD)

### User Uploads (Future)

- **Profile photos**: Public bucket
- **Review photos**: Public bucket
- **Size limit**: 5MB per file
- **Formats**: JPEG, PNG, WebP

---

## Rate Limits Reference

From `packages/shared/constants/index.ts`:

| Action | Limit | Window |
|--------|-------|--------|
| OTP requests | 1 | 60 seconds |
| Wrong OTP | 5 | Per session |
| Reviews | 1 | 5 minutes |
| Listing suggestions | 1 | 24 hours |
| Reports | 10 | 24 hours |
| Messages | 10 | 1 minute |
| Daily Friend plans | 3 | 24 hours |

---

## Progress Tracker

| Phase | Agent A | Agent B | Status |
|-------|---------|---------|--------|
| Phase 0 | [x] Task 0.1 Done | [x] Task 0.2 Done, [x] Task 0.3 Done, [x] Task 0.4 Done | **COMPLETED** |
| Phase 1 | [x] Task 1.1 Done | [ ] Task 1.2, [ ] Task 1.4 | In Progress |
| Phase 2 | [ ] | [ ] | Not started |
| Phase 3 | [ ] | [ ] | Not started |
| Phase 4 | [ ] | [ ] | Not started |
| Phase 5 | [ ] | [ ] | Not started |

**Update this table as you complete phases.**

### Completed Tasks Log

| Task | Completed | Agent | Notes |
|------|-----------|-------|-------|
| Task 0.1: Mobile Project Structure | 2026-01-16 | A | Folder structure + navigation shell |
| Task 0.2: Admin Project Structure | 2026-01-19 | B | Folder structure + admin shell + design tokens |
| Task 0.3: Design Tokens Setup | 2026-01-19 | B | Completed as part of Task 0.2; all style-guide.md tokens present |
| Task 0.4: Mock Data Strategy Setup | 2026-01-19 | Both | Comprehensive mock data for users, guides, listings, events, admin queues, community features |
| Task 1.1: Mobile UI Components | 2026-01-19 | A | Button, Card, Input, Badge, Avatar, Spinner + variants; expo-linear-gradient added |

---

## Next Actions

1. ~~Start Phase 0 (both agents)~~ ✓
2. ~~Create folder structures~~ ✓ (Tasks 0.1, 0.2)
3. ~~Setup design tokens~~ ✓ (Task 0.3)
4. ~~Create mock data~~ ✓ (Task 0.4)
5. ~~Mobile UI Components~~ ✓ (Task 1.1)
6. **Continue Phase 1** (Task 1.2 Admin UI Components, Task 1.3 Mobile Layout, Task 1.4 Admin Layout, Task 1.5 Shared Types)
