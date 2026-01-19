# Girugi Style Guide

> **Source**: design.md, girugi-PRD.md  
> **Purpose**: Design system reference for consistent UI implementation  
> **Applies to**: Mobile (Expo RN), Admin (Next.js)

---

## Table of Contents

1. [Design Principles](#1-design-principles)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Radius & Shadows](#5-radius--shadows)
6. [Components](#6-components)
7. [Motion & Animation](#7-motion--animation)
8. [Accessibility](#8-accessibility)
9. [Responsive Behavior](#9-responsive-behavior)
10. [Componentization Rules](#10-componentization-rules)
11. [Analytics & Logging](#11-analytics--logging)

---

## 1. Design Principles

### Core Principles

| # | Principle | What It Means |
|---|-----------|---------------|
| 1 | **Soft-first surfaces** | Rounded cards, gentle borders, light shadows |
| 2 | **Guided progression** | Steps are explicit via pills and badges |
| 3 | **Gradient as emphasis** | Gradients highlight hero/info cards, not everywhere |
| 4 | **Big headline hierarchy** | Key questions and titles are large and bold |
| 5 | **Tap-friendly choices** | Primary interactions are large cards and buttons |
| 6 | **Safety is visible** | Block/report always accessible, boundaries clear |
| 7 | **Bilingual parity** | Both languages work; fallback is graceful |

### App Personality

- **Friendly**: Pastel gradients, rounded surfaces
- **Soft**: Large radii, gentle shadows
- **Guided**: Step pills, badges, clear progression
- **Mobile-first**: Bottom nav, thumb-friendly targets

### Do / Don't

**Do:**
- Use rounded, large-radius cards (`rounded-3xl`, `rounded-2xl`)
- Use soft shadows (`shadow-sm`, `shadow-md`)
- Use gradient accents only for emphasis (heroes, CTAs)
- Use pill badges for steps and context
- Keep main screens in mobile container (`max-w-md mx-auto`)

**Don't:**
- Introduce new hex colors beyond the defined palette
- Use small/sharp radii (no `rounded-sm`, square cards)
- Use heavy borders; borders should be soft
- Rely on color alone for selection states
- Remove sticky header behavior

---

## 2. Color System

### CSS Variables (To Be Defined)

These variables need concrete values in the app's global CSS:

```css
:root {
  /* Brand gradients */
  --chart-1: #57B8FF;  /* Primary accent blue */
  --chart-2: #2EC971;  /* Success green */
  --chart-3: #DD9D18;  /* Warning amber */
  --chart-4: #9B59B6;  /* Expert/premium purple */
  --chart-5: #3498DB;  /* Info blue */
  
  /* Semantic */
  --primary: #57B8FF;
  --foreground: #1a1a1a;
  --background: #ffffff;
}
```

### Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `color.bg.app` | `#F8F9FC` | App background |
| `color.bg.surface` | `bg-white` | Cards, surfaces |
| `color.bg.surfaceMuted` | `bg-gray-50` / `bg-gray-100` | Secondary surfaces |
| `color.bg.nav` | `bg-white` | Header background |
| `color.border.default` | `border-gray-100` | Subtle borders |
| `color.border.strong` | `border-gray-200` | Inputs, secondary buttons |
| `color.border.onGradient` | `border-white/60` | Borders on gradient cards |
| `color.text.primary` | `text-gray-900` | Headings, titles |
| `color.text.secondary` | `text-gray-600` | Body text |
| `color.text.muted` | `text-gray-500` | Placeholders, meta |
| `color.text.onAccent` | `text-white` | Text on gradients |

### Gradient Definitions

| Name | Definition | Usage |
|------|------------|-------|
| Primary CTA | `from-[var(--chart-1)] to-[var(--chart-2)]` | Main buttons, logo |
| Hero/Info | `from-[var(--chart-1)] to-[var(--chart-5)]` | Info cards, plan hero |
| Feature cards | `from-blue-100 to-cyan-100` | Selection cards |
| Success | `from-green-100 to-emerald-100` | Success states |
| Warning | `from-orange-100 to-amber-100` | Warning states |

### Allowed Opacity Values

Only use these opacity variants:
- `/10`, `/20`, `/25`, `/30`, `/50`, `/60`, `/80`, `/90`

Examples: `bg-white/90`, `border-white/60`, `text-white/90`

### Semantic Colors

| Purpose | Color | Usage |
|---------|-------|-------|
| Success | `bg-green-400`, `text-green-600` | Checkmarks, completion |
| Warning | `bg-yellow-400`, `text-amber-600` | Alerts, cautions |
| Danger | `bg-red-500`, `text-red-600` | Errors, blocks |
| Info | `text-blue-600` | Links, info text |

---

## 3. Typography

### Font Family

```css
font-family: font-sans; /* System fonts: SF Pro (iOS), Roboto (Android) */
```

### Type Scale

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `type.display.h1` | `text-4xl` | `font-bold` | `leading-tight` | Onboarding titles |
| `type.title.lg` | `text-2xl` | `font-bold` | default | App name, hero titles |
| `type.title.md` | `text-xl` | `font-bold` | default | Section headers |
| `type.title.sm` | `text-lg` | `font-bold` | default | Card titles |
| `type.body.base` | `text-base` | regular | `leading-relaxed` | Paragraphs |
| `type.body.sm` | `text-sm` | regular | `leading-relaxed` | Card descriptions |
| `type.body.xs` | `text-xs` | medium | default | Pills, meta, helpers |
| `type.label.micro` | `text-[10px]` | medium/bold | default | Nav labels, date chips |

### Typography Rules

1. Use `text-4xl font-bold leading-tight` only for primary onboarding questions
2. Use `text-base text-gray-600 leading-relaxed` for explanatory paragraphs
3. Use `text-xs` for pills and badges
4. Use `text-[10px]` only for bottom nav labels
5. Use `font-bold` for card titles, lighter weights for descriptions

---

## 4. Spacing & Layout

### Spacing Scale

| Token | Tailwind | Usage |
|-------|----------|-------|
| `space.pageX` | `px-6` | Page horizontal padding |
| `space.pageYTop` | `pt-12` | Top padding (safe area) |
| `space.section.gap` | `space-y-8` | Dashboard vertical rhythm |
| `space.card.padLg` | `p-6` | Hero/gradient cards |
| `space.card.padMd` | `p-5` | Selection cards |
| `space.card.padSm` | `p-4` | List cards |
| `space.grid.gap` | `gap-4` | Grid items |
| `space.stack.gap` | `space-y-3` | Button stacks |

### Layout Patterns

**App Container:**
```jsx
<div className="flex flex-col h-full w-full max-w-md mx-auto bg-[#F8F9FC]">
```

**Page with Header:**
```jsx
<header className="px-6 pt-12 pb-4 bg-white sticky top-0 z-10">
<main className="flex-1 overflow-y-auto px-6 py-6 space-y-8 pb-24">
```

**Bottom Nav Clearance:**
```jsx
<main className="pb-24"> {/* Space for floating nav */}
```

---

## 5. Radius & Shadows

### Radius Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `radius.pill` | `rounded-full` | Pills, dots, avatars |
| `radius.lg` | `rounded-2xl` | Buttons, inputs |
| `radius.xl` | `rounded-3xl` | Most cards |
| `radius.2xl` | `rounded-[2rem]` | Hero cards, bottom nav |

### Shadow Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `elevation.nav` | `shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]` | Sticky header |
| `elevation.floatingNav` | `shadow-[0_8px_30px_rgb(0,0,0,0.12)]` | Bottom nav |
| `elevation.sm` | `shadow-sm` | Cards, pills |
| `elevation.md` | `shadow-md` | Selected cards |
| `elevation.lg` | `shadow-lg` | Hero cards, primary CTA |

### Border Styles

| Style | Classes | Usage |
|-------|---------|-------|
| Subtle | `border border-gray-100` | Default cards |
| Strong | `border-2 border-gray-200` | Inputs, secondary buttons |
| On gradient | `border border-white/60` | Gradient card overlays |
| Selected | `border-2 border-[var(--chart-1)]` | Selected cards |

---

## 6. Components

### 6.1 Buttons

**Primary Button:**
```jsx
<button className="
  w-full py-4 rounded-2xl
  bg-gradient-to-r from-[var(--chart-1)] to-[var(--chart-2)]
  text-white font-bold text-base
  shadow-lg hover:shadow-xl
  flex items-center justify-center gap-2
">
  Button Text <ArrowRight size={18} />
</button>
```

**Primary Disabled:**
```jsx
<button className="
  w-full py-4 rounded-2xl
  bg-gray-200 text-gray-400
  cursor-not-allowed
">
```

**Secondary Button:**
```jsx
<button className="
  w-full py-4 rounded-2xl
  bg-white text-gray-700
  font-semibold text-base
  border-2 border-gray-200
  shadow-sm hover:bg-gray-50
">
```

**Icon Button:**
```jsx
<button className="
  w-10 h-10 rounded-full
  bg-gray-50 hover:bg-gray-100
  flex items-center justify-center
">
  <Icon size={20} />
</button>
```

### 6.2 Cards

**Default Card:**
```jsx
<div className="
  p-4 rounded-3xl
  bg-white shadow-sm
  border border-gray-100
">
```

**Selection Card:**
```jsx
<div className={`
  p-5 rounded-3xl
  bg-gradient-to-br from-blue-100 to-cyan-100
  border-2
  ${selected ? 'border-[var(--chart-1)]' : 'border-transparent'}
  cursor-pointer
  transition-all hover:scale-[1.02]
`}>
  {/* Top-right check indicator when selected */}
  {selected && (
    <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[var(--chart-1)] flex items-center justify-center">
      <Check size={14} className="text-white" />
    </div>
  )}
```

**Hero/Gradient Card:**
```jsx
<div className="
  relative p-6 rounded-[2rem]
  bg-gradient-to-br from-[var(--chart-1)] to-[var(--chart-5)]
  text-white shadow-lg
  overflow-hidden
">
  {/* Decorative blur circles */}
  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
  <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-black/10 blur-2xl" />
  
  {/* Content */}
  <div className="relative z-10">
```

### 6.3 Inputs

**Text Input:**
```jsx
<div className="relative">
  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
  <input
    type="text"
    className="
      w-full pl-12 pr-4 py-3.5 rounded-2xl
      bg-white border-2 border-gray-200
      text-gray-900 placeholder:text-gray-400
      focus:border-[var(--chart-1)] focus:outline-none
    "
    placeholder="Search..."
  />
</div>
```

**OTP Input:**
```jsx
<div className="flex gap-2 justify-center">
  {[0,1,2,3,4,5].map(i => (
    <input
      key={i}
      type="text"
      maxLength={1}
      className="
        w-12 h-14 text-center text-2xl font-bold
        rounded-xl border-2 border-gray-200
        focus:border-[var(--chart-1)] focus:outline-none
      "
    />
  ))}
</div>
```

### 6.4 Badges & Pills

**Step Pill:**
```jsx
<span className="
  px-3 py-1.5 rounded-full
  bg-white text-gray-500
  text-xs font-medium
  shadow-sm
">
  Step 2 of 9
</span>
```

**Status Badge:**
```jsx
<span className="
  inline-flex items-center gap-1.5
  px-3 py-1.5 rounded-full
  bg-green-100 text-green-700
  text-xs font-medium
">
  <Check size={12} /> Verified
</span>
```

**Category Chip:**
```jsx
<button className={`
  px-4 py-2 rounded-full
  text-sm font-medium
  transition-colors
  ${active
    ? 'bg-[var(--chart-1)] text-white'
    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
  }
`}>
  Restaurants
</button>
```

### 6.5 Bottom Navigation

```jsx
<nav className="
  fixed bottom-6 left-6 right-6
  bg-white/90 backdrop-blur-lg
  rounded-[2rem] p-2
  border border-white/50
  shadow-[0_8px_30px_rgb(0,0,0,0.12)]
  flex items-center justify-around
">
  {/* Nav items */}
  <NavItem icon={Home} label="Home" active />
  <NavItem icon={BookOpen} label="Guides" />
  
  {/* Center FAB */}
  <button className="
    relative -top-6
    w-14 h-14 rounded-full
    bg-[var(--foreground)] text-[var(--background)]
    border-4 border-[#F8F9FC]
    flex items-center justify-center
    hover:scale-105 transition-transform
  ">
    <Search size={24} />
  </button>
  
  <NavItem icon={Calendar} label="Events" />
  <NavItem icon={Users} label="Community" />
</nav>
```

### 6.6 Empty States

```jsx
<div className="text-center py-12">
  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
    <SearchX size={32} className="text-gray-400" />
  </div>
  <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
  <p className="text-sm text-gray-500 mb-6">Try adjusting your filters</p>
  <button className="text-[var(--primary)] font-medium">Clear filters</button>
</div>
```

---

## 7. Motion & Animation

### Easing & Duration

| Token | Value | Usage |
|-------|-------|-------|
| `motion.ease.standard` | `[0.22, 1, 0.36, 1]` | Most animations |
| `motion.duration.fast` | `0.2s` | Micro-interactions |
| `motion.duration.normal` | `0.3s` | State changes |
| `motion.duration.slow` | `0.5s` | Page elements |

### Common Animations

**Card Hover:**
```jsx
className="transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-md"
```

**Button Press:**
```jsx
className="active:scale-[0.98] transition-transform"
```

**Fade In:**
```jsx
// Using framer-motion or similar
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
```

**Stagger Children:**
```jsx
// Container
variants={{
  show: { transition: { staggerChildren: 0.1 } }
}}

// Children
variants={{
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}}
```

---

## 8. Accessibility

### Requirements

| Requirement | Implementation |
|-------------|----------------|
| Touch targets | Minimum 44x44px (buttons use `py-4` = 16px padding) |
| Color contrast | Gray-900 on white, white on gradients |
| Focus states | `focus:border-[var(--chart-1)] focus:outline-none` |
| Dynamic type | Support system font scaling |
| Screen reader | Add `aria-label` to icon-only buttons |

### Focus Styles

```jsx
// For inputs
className="focus:border-[var(--chart-1)] focus:outline-none focus:ring-2 focus:ring-[var(--chart-1)]/20"

// For buttons
className="focus:outline-none focus:ring-2 focus:ring-[var(--chart-1)] focus:ring-offset-2"
```

### ARIA Guidelines

```jsx
// Icon button
<button aria-label="Open notifications">
  <Bell size={20} />
</button>

// Selected state
<div role="button" aria-selected={selected}>

// Loading state
<button aria-busy={loading} disabled={loading}>
  {loading ? <Spinner /> : 'Submit'}
</button>
```

### Bilingual Handling

```jsx
// When translation is missing, show fallback with badge
{hasTranslation ? (
  <p>{content[language]}</p>
) : (
  <div>
    <p>{content[fallbackLanguage]}</p>
    <span className="text-xs text-amber-600 mt-1">
      Translation pending / 번역 준비 중
    </span>
  </div>
)}
```

---

## 9. Responsive Behavior

### Mobile (Default)

- Container: `max-w-md mx-auto`
- Single column layouts
- Bottom navigation
- Large touch targets

### Tablet (Admin Console)

```css
@media (min-width: 768px) {
  /* Two-column layouts */
  /* Side navigation */
  /* Larger cards */
}
```

### Desktop (Admin Console)

```css
@media (min-width: 1024px) {
  /* Three-column layouts */
  /* Full navigation sidebar */
  /* Data tables */
}
```

### Breakpoint Usage

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Default | <640px | Mobile app |
| `sm` | 640px+ | Small tablets |
| `md` | 768px+ | Tablets, admin |
| `lg` | 1024px+ | Desktop admin |

---

## 10. Componentization Rules

### When to Create a Component

Create a reusable component when:
1. Pattern repeats 3+ times
2. Has multiple states (loading, error, selected)
3. Contains complex interaction logic
4. Needs consistent styling across screens

### Folder Structure

```
mobile/src/
  components/
    ui/           # Primitives
      Button.tsx
      Card.tsx
      Input.tsx
      Badge.tsx
    features/     # Feature-specific
      onboarding/
      home/
      guides/
    layout/       # Shell components
      Header.tsx
      BottomNav.tsx
      PageContainer.tsx
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `PrimaryButton.tsx` |
| Hooks | camelCase with `use` | `useAuth.ts` |
| Utils | camelCase | `formatDate.ts` |
| Constants | SCREAMING_SNAKE | `RATE_LIMITS` |
| Types | PascalCase | `UserPreferences` |

### Component Template

```tsx
// components/ui/Button.tsx
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

export function Button({
  children,
  variant = 'primary',
  disabled = false,
  loading = false,
  onPress,
}: ButtonProps) {
  // Implementation
}
```

### Props Patterns

```tsx
// Extend native props
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

// Compound components
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
</Card>
```

---

## 11. Analytics & Logging

### Event Naming Convention

```
{category}_{action}_{subject}
```

Examples:
- `auth_otp_requested`
- `onboard_step_completed`
- `guide_link_clicked`

### Log Categories

| Prefix | Category | When to Use |
|--------|----------|-------------|
| `[AUTH]` | Authentication | Login, logout, session |
| `[NAV]` | Navigation | Screen changes |
| `[DATA]` | Data operations | CRUD actions |
| `[ERROR]` | Errors | Caught exceptions |
| `[PERF]` | Performance | Timing, renders |

### Development Logging

```tsx
// Dev-only logging helper
const log = {
  auth: (msg: string, data?: any) => {
    if (__DEV__) console.log('[AUTH]', msg, data);
  },
  nav: (msg: string, data?: any) => {
    if (__DEV__) console.log('[NAV]', msg, data);
  },
  error: (msg: string, error?: any) => {
    if (__DEV__) console.error('[ERROR]', msg, error);
    // Always report to error tracking in prod
  },
};
```

### Analytics Event Table

| Event | Properties | Trigger |
|-------|------------|---------|
| `auth_otp_requested` | `{ method: 'email' }` | OTP send button |
| `onboard_step_viewed` | `{ step: number, name: string }` | Screen mount |
| `onboard_completed` | `{ duration_ms: number }` | Final step done |
| `guide_opened` | `{ guide_id, locale }` | Guide detail view |
| `listing_saved` | `{ listing_id }` | Save button |
| `rsvp_set` | `{ event_id, status }` | RSVP change |
| `error_occurred` | `{ code, screen }` | Error boundary |

### Privacy Rules

Never include in analytics:
- Message content
- Email addresses
- Verification document info
- Exact location
- User-entered text that may contain PII

---

## Quick Reference

### Most Used Classes

```
/* Container */
max-w-md mx-auto bg-[#F8F9FC]

/* Card */
p-4 rounded-3xl bg-white shadow-sm border border-gray-100

/* Primary button */
w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--chart-1)] to-[var(--chart-2)] text-white font-bold

/* Input */
w-full px-4 py-3.5 rounded-2xl bg-white border-2 border-gray-200 focus:border-[var(--chart-1)]

/* Heading */
text-4xl font-bold text-gray-900 leading-tight

/* Body */
text-base text-gray-600 leading-relaxed

/* Pill */
px-3 py-1.5 rounded-full bg-white text-xs text-gray-500 shadow-sm
```

### Color Palette Summary

```
App BG:     #F8F9FC
Surface:    white
Accent 1:   var(--chart-1) / #57B8FF
Accent 2:   var(--chart-2) / #2EC971
Text:       gray-900, gray-600, gray-500
Borders:    gray-100, gray-200
Success:    green-400, green-600
Warning:    yellow-400, amber-600
Danger:     red-500, red-600
```
