
## 1. Purpose & How To Use

### Rules for adding new UI
- **Tokens first**: if a value, class, or pattern appears more than once, it must be tokenized here.
- **No raw hex in components** unless it already exists in code. Use existing tokens, CSS vars, or Tailwind semantic classes.
- **No new colors**: only use `var(--chart-*)`, `var(--primary)`, `var(--foreground)`, `var(--background)`, `#F8F9FC`, and Tailwind palette classes already used.
- **One-offs must be explicit**: use `oneOff.*` and justify why it is unique.
- **Normalize gently**:
  - If multiple values serve the same intent, pick one canonical token based on frequency, then map the others as `alias.*` or `deprecated.*`. (Inferred policy, evidence-driven)
- **Conflicts**:
  - If screenshots and code disagree, prefer the value used more consistently across the code paths for these screens, then document the conflict and the chosen resolution in the Decision Log.

---

## 2. Brand & Product Identity

### App personality (Observed/Inferred)
- **Friendly** (pastel gradients, rounded surfaces)
- **Soft** (large radii, gentle shadows)
- **Guided** (step pills, badges, onboarding flow)
- **Mobile-first** (`max-w-md`, bottom nav, mobile layout)

### Target usage context 
- **Consumer mobile companion app for expats in Korea** (“guide to living in Korea”, city selection, community posts, events)
- **Not an enterprise admin UI** (no dense tables, no navy top bar, no data-dense grid)

### UX goals (Observed/Inferred)
- **Clarity over density** (large headings, generous spacing)
- **Approachable choices** (big selectable cards with icons)
- **Quick wayfinding** (“Explore Guides” hubs + bottom nav)

### Information density policy
- **Dense** is **not observed** in the provided screens.
- What is observed:
  - Primary headers use **very large** sizes (`text-4xl`)
  - Cards use **large padding** (`p-5`, `p-6`)
  - Lists are short and spaced (`space-y-3`, `gap-4`)

**To Decide**
- Table row heights, toolbar density, and “max controls per row” are not present in evidence.

### Do / Don’t (enforceable, tied to evidence)
**Do**
1. Use **rounded, large-radius** cards (`rounded-3xl`, `rounded-2xl`, `rounded-[2rem]`).
2. Use **soft shadows** (`shadow-sm`, `shadow-md`, `shadow-lg`, plus the two custom shadow values).
3. Use **gradient accents** only via `var(--chart-*)` and the listed Tailwind gradients already used.
4. Use **pill badges** (`rounded-full`, `px-3 py-1.5`, `text-xs`) for steps and context.
5. Use **selection cards** with a top-right selection indicator for single-choice steps.
6. Keep main screens in a **mobile container** pattern: `max-w-md mx-auto`.

**Don’t**
1. Don’t introduce new hex colors beyond `#F8F9FC` already used.
2. Don’t add new gradient stops outside the existing `var(--chart-*)` set or the existing Tailwind `from-*/to-*` combinations already used.
3. Don’t add small/sharp radii (no `rounded-sm` or square cards) in these flows.
4. Don’t use heavy borders; borders are **soft**: `border-gray-100`, `border-gray-200`, `border-white/60`, or translucent white borders on gradients.
5. Don’t rely on color alone for selection; keep the **check indicator** plus border change for selected state.
6. Don’t remove sticky header behavior on the dashboard: `sticky top-0 z-10` is part of the shell.

---

## 3. Design Principles

1. **Soft-first surfaces**: rounded cards, gentle borders, light shadows.
2. **Guided progression**: steps are explicit via a top-right pill and section badges.
3. **Gradient as emphasis, not default**: gradients highlight hero/info cards and a few accent tiles.
4. **Big headline hierarchy**: key questions and titles are large and bold.
5. **Tap-friendly choices**: primary interactions are large cards and large buttons.

---

## 4. Tokens

> **Evidence note:** Several colors are referenced as CSS variables (`var(--chart-1..5)`, `var(--primary)`, `var(--foreground)`, `var(--background)`), but their concrete values are not included in the provided code. Tokens below preserve them as authoritative variables.

### 4.1 Color Tokens

| token_name | value (hex/rgba) | usage | evidence |
|---|---:|---|---|
| color.bg.app | `#F8F9FC` | app background on onboarding + dashboard container | Code (all screens) |
| color.bg.surface | `bg-white` | cards, header, buttons, surfaces | Code + Screenshots |
| color.bg.surfaceMuted | `bg-gray-50` / `bg-gray-100` | secondary surfaces (header language pill, icons) | Code |
| color.bg.nav | `bg-white` | dashboard top header | Code + Screenshot |
| color.bg.navHover | `hover:bg-gray-100` / `hover:bg-gray-200` | hover on header buttons | Code |
| color.border.default | `border-gray-100` | subtle card borders | Code |
| color.border.strong | `border-gray-200` / `border-2 border-gray-200` | inputs + secondary buttons | Code |
| color.border.onGradient | `border-white/60`, `border-white/50`, `border-white/30`, `border-white/20` | borders on gradient cards, frosted elements | Code + Screenshots |
| color.text.primary | `text-gray-900` | headings, titles | Code |
| color.text.secondary | `text-gray-600` / `text-gray-700` | body text and secondary labels | Code |
| color.text.muted | `text-gray-500` / `text-gray-400` | placeholders, metadata | Code |
| color.text.onAccent | `text-white` / `text-white/90` / `text-white/80` | text on gradient hero/info cards | Code + Screenshots |
| color.brand.primary | `var(--primary)` | link-like actions + active tab color | Code (dashboard) |
| color.brand.gradientStart | `var(--chart-1)` | primary gradient start (logos, CTA, hero cards) | Code + Screenshots |
| color.brand.gradientEnd | `var(--chart-2)` | primary gradient end (logos, CTA) | Code + Screenshots |
| color.accent.infoGradientEnd | `var(--chart-5)` | gradient end for hero/info cards | Code + Screenshots |
| color.accent.expert | `var(--chart-4)` | expert teaser chip background + icon tile | Code + Screenshots |
| color.focus.border | `var(--chart-1)` | input focus border, selected card border | Code |
| color.state.success.dot | `bg-green-400` | presence dot on avatar | Code + Screenshot |
| color.state.danger.dot | `bg-red-500` | notification dot | Code + Screenshot |
| color.icon.star | `text-yellow-400` | likes star icon | Code + Screenshot |
| color.fab.bg | `var(--foreground)` | floating search button background | Code + Screenshot |
| color.fab.fg | `var(--background)` | floating search button icon color | Code + Screenshot |

#### Allowed opacity variants
Use only the opacity values actually present in code:
- `/10`, `/20`, `/25`, `/30`, `/50`, `/60`, `/80`, `/90`
Examples in use: `bg-white/90`, `bg-white/30`, `bg-white/20`, `bg-white/10`, `border-white/60`, `text-white/90`.

#### Gradient usage
- Primary gradient source: `from-[var(--chart-1)] to-[var(--chart-2)]`
- Info/hero gradients: `from-[var(--chart-1)] to-[var(--chart-5)]`
- Feature/choice cards use Tailwind gradients (Observed in code):
  - `from-blue-100 to-cyan-100`, `from-blue-100 to-indigo-100`
  - `from-purple-100 to-pink-100`
  - `from-orange-100 to-amber-100`
  - `from-green-100 to-emerald-100`
  - `from-rose-100 to-pink-100`
  - `from-cyan-100 to-teal-100`
- Event tiles use `from-*-200 to-*-200` gradients 

**Normalization decision (Inferred, based on usage frequency)**
- Canonical brand accent for selection/focus is `var(--chart-1)` because it is used for:
  - selected card border
  - selected check indicator background
  - input focus border
  - several badges/icons 
- `var(--primary)` is treated as a “link/active” semantic token distinct from chart variables because it is used in navigation and links, not in gradients.

**To Decide**
- Actual color values for `--chart-*`, `--primary`, `--foreground`, `--background` are not in evidence.

---

### 4.2 Typography Tokens

> Font family is set as `font-sans` across screens. Exact font stack is not included.

| token_name | size | lineHeight | weight | usage | evidence |
|---|---|---|---|---|---|
| type.family.sans | `font-sans` | — | — | all screens | Code |
| type.display.h1 | `text-4xl` | `leading-tight` | `font-bold` | onboarding main question/title | Code + Screenshots |
| type.title.lg | `text-2xl` | default | `font-bold` | app name, hero card titles | Code + Screenshots |
| type.title.md | `text-xl` | default | `font-bold` | dashboard section headers, “My Plan” | Code + Screenshot |
| type.title.sm | `text-lg` | default | `font-bold` | feature titles, cards | Code + Screenshots |
| type.body.base | `text-base` | `leading-relaxed` | regular | onboarding paragraph | Code + Screenshots |
| type.body.sm | `text-sm` | `leading-relaxed` | regular/medium | card descriptions, UI text | Code + Screenshots |
| type.body.xs | `text-xs` | default | medium/semibold | pills, meta, helper text | Code + Screenshots |
| type.label.micro | `text-[10px]` | default | medium/bold | bottom nav labels, date chip | Code + Screenshot |

#### Prescriptive typography rules
- Use **`text-4xl font-bold leading-tight`** only for the primary question/title on onboarding steps.
- Use **`text-base text-gray-600 leading-relaxed`** for onboarding explanatory paragraphs.
- Use **`text-xs`** for step pills and inline badges; use **`text-[10px]`** only for bottom navigation labels and small chips.
- Use **bold titles** on cards (`font-bold`) and keep descriptions lighter (`text-gray-600`).

**To Decide**
- Exact font stack for `font-sans`.
- Whether to use tabular numbers for percentages and progress.

---

### 4.3 Spacing + Layout Scale

> Evidence is expressed in Tailwind spacing classes. Pixel mapping depends on Tailwind config, which is not included.

| token_name | px | tailwind mapping | usage examples | evidence |
|---|---:|---|---|---|
| space.pageX | To Decide | `px-6` | main horizontal padding | Code |
| space.pageYTop | To Decide | `pt-12` | top padding under safe area | Code |
| space.section.gapLg | To Decide | `space-y-8` | dashboard vertical rhythm | Code |
| space.card.padLg | To Decide | `p-6` | gradient cards, feature cards | Code |
| space.card.padMd | To Decide | `p-5` | selection cards | Code |
| space.card.padSm | To Decide | `p-4` | list cards, smaller tiles | Code |
| space.grid.gap | To Decide | `gap-4` | grids (city/situation/hubs) | Code |
| space.stack.gapSm | To Decide | `space-y-3` | button stacks, lists | Code |
| space.bottomNav.inset | To Decide | `bottom-6 left-6 right-6` | floating nav placement | Code |
| layout.container | — | `max-w-md mx-auto` | width constraint | Code |

#### Layout rules
- Screen container: `max-w-md mx-auto` for all provided screens.
- Main scroll areas: `flex-1 overflow-y-auto` with `scrollbar-hide`.
- Dashboard reserves bottom space: `pb-24` to avoid overlap with floating bottom nav.

**To Decide**
- Breakpoints and desktop behavior are not present.

---

### 4.4 Radius Tokens

| token_name | px | usage | evidence |
|---|---:|---|---|
| radius.pill | To Decide | `rounded-full` for pills and dots | Code + Screenshots |
| radius.lg | To Decide | `rounded-2xl` for buttons, inputs, inner tiles | Code |
| radius.xl | To Decide | `rounded-3xl` for most cards | Code + Screenshots |
| radius.2xl | `2rem` | `rounded-[2rem]` for hero/info cards and bottom nav container | Code + Screenshots |

**Default radius choice**
- Default card radius is `rounded-3xl`.
- Use `rounded-2xl` for inputs/buttons and inner blocks.
- Use `rounded-[2rem]` only for “hero” emphasis (gradient hero/info cards) and the floating bottom nav shell.

---

### 4.5 Borders & Dividers

#### Border thickness
- Default: `border` (thin)
- Strong: `border-2` (inputs, secondary buttons, selection cards)

#### Allowed border colors
- `border-gray-100`
- `border-gray-200`
- `border-white/60`, `border-white/50`, `border-white/30`, `border-white/20`, `border-white/10`
- Selection/focus: `border-[var(--chart-1)]`

**Divider usage**
- No explicit divider components observed. Use borders on cards instead.

---

### 4.6 Elevation / Shadow Tokens

| token_name | values | usage | evidence |
|---|---|---|---|
| elevation.nav | `shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]` | dashboard sticky header | Code |
| elevation.floatingNav | `shadow-[0_8px_30px_rgb(0,0,0,0.12)]` | floating bottom nav shell | Code |
| elevation.sm | `shadow-sm` | most cards, pills, icon tiles | Code |
| elevation.md | `shadow-md` | selected cards, icon tiles, indicators | Code |
| elevation.lg | `shadow-lg` | gradient hero/info cards, primary CTA | Code |
| elevation.xl | `shadow-xl` | hover state on primary CTA | Code |

**To Decide**
- Concrete box-shadow values for Tailwind `shadow-sm/md/lg/xl` are not present.

---

### 4.7 Motion Tokens

| token_name | values | usage | evidence |
|---|---|---|---|
| motion.ease.standard | `[0.22, 1, 0.36, 1]` | card/list entrance easing | Code |
| motion.duration.500 | `0.5s` | many item entrances | Code |
| motion.duration.600 | `0.6s` | header + sections | Code |
| motion.duration.700 | `0.7s` | hero entrance | Code |
| motion.duration.800 | `0.8s` | hero card entrance | Code |
| motion.duration.1000 | `1.0s` | progress bar fill | Code |
| motion.hover.lift | `scale: 1.02`, `y: -4` | selectable cards | Code |
| motion.tap.press | `scale: 0.98` (or `0.95` on hub cards) | presses | Code |
| motion.hover.shadow | `shadow-sm -> shadow-md/lg` | hover emphasis | Code |

**Not observed**
- Page transitions between routes.
- Reduced motion handling.

---

## 5. Layout Scaffolding (Shared Shell)

### App Shell
- Container: `flex flex-col h-full w-full max-w-md mx-auto bg-[#F8F9FC]`
- Header patterns:
  - Onboarding: non-sticky header, spacing `pt-12 pb-6` with logo left and step/language pill right.
  - Dashboard: sticky header `bg-white sticky top-0 z-10` with soft shadow.

### Main content
- Scroll container: `flex-1 overflow-y-auto`
- Dashboard content padding: `px-6 py-6` with `space-y-8`

### Cards
- Default card:
  - `bg-white`
  - `rounded-3xl`
  - `shadow-sm`
  - soft border: `border border-gray-100`
- Hero/info gradient card:
  - `rounded-[2rem]`
  - `bg-gradient-to-br from-[var(--chart-1)] to-[var(--chart-5)]`
  - overlay shapes: white/10 + black/10 blurred circles

### Tables
No table UI in the provided evidence.

#### Diagram
```

[Header]

- Left: avatar/logo + greeting/title
    
- Right: language pill + notifications  
    [Main Scroll]  
    [Hero Gradient Card (Plan/Info)]  
    [Grid of Hub Cards]  
    [Community Post List Cards]  
    [Horizontal Events Cards]  
    [Expert Teaser Card]  
    [Floating Bottom Navigation]  
    [Tab icons] [Center FAB] [Tab icons]
    

```

---

## 6. Components (Inventory + Specs)

> Only components present in evidence are specified. Anything else is marked Not observed.

### 6.1 TopNav (Dashboard Header)
**Responsibilities**
- Persistent greeting + user identity
- Language toggle
- Notification button with dot

**Structure**
- `header px-6 pt-12 pb-4 bg-white sticky top-0 z-10 elevation.nav`

**Props**
- `userInitial`, `userName`
- `language`, `onToggleLanguage`
- `hasNotifications`

**States**
- Notification dot shown: `bg-red-500 w-2 h-2`
- Avatar presence dot: `bg-green-400 w-4 h-4`

**Accessibility (To Decide)**
- No explicit aria-labels are present in code.

---

### 6.2 PageHeader (Onboarding Header)
**Responsibilities**
- Brand mark + app name
- Step indicator pill

**Recipe**
- Left cluster: gradient logo tile `w-10 h-10 rounded-2xl bg-gradient-to-tr from-[var(--chart-1)] to-[var(--chart-2)]`
- Right cluster: pill `px-3 py-1.5 rounded-full bg-white text-xs text-gray-500 shadow-sm`

---

### 6.3 Card / CardHeader / CardBody
**Card (default)**
- `p-4` or `p-5`
- `rounded-3xl`
- `bg-white`
- `shadow-sm`
- `border border-gray-100`

**Card (gradient hero/info)**
- `p-6 rounded-[2rem] bg-gradient-to-br from-[var(--chart-1)] to-[var(--chart-5)] text-white shadow-lg`
- overlay blur shapes (two absolutely positioned circles)

**Usage rules**
- Use gradient cards for “hero” emphasis and explanatory info blocks.
- Use white cards for list items and secondary content.

---

### 6.4 MetricCard / StatCard (Plan Hero)
**Observed name**: plan hero card (“My Plan” with progress + checklist).
**Responsibilities**
- Show current stage, title, progress percent, and next checklist items.

**Internal pieces (Observed)**
- Stage pill: `px-3 py-1 rounded-full bg-white/20 backdrop-blur-md`
- Progress ring badge: `w-12 h-12 rounded-full bg-white/20`
- Checklist item:
  - completed: `bg-white text-[var(--primary)] border-white` + `line-through`
  - incomplete: `border-white/50`

---

### 6.5 Button
**Primary button**
- `w-full py-4 rounded-2xl`
- `bg-gradient-to-r from-[var(--chart-1)] to-[var(--chart-2)]`
- `text-white font-bold text-base shadow-lg`
- includes right icon (ArrowRight)

**Primary disabled**
- `bg-gray-200 text-gray-400 cursor-not-allowed`

**Secondary button**
- `w-full py-4 rounded-2xl bg-white`
- `text-gray-700 font-semibold text-base`
- `border-2 border-gray-200 shadow-sm`
- hover: `hover:bg-gray-50`

**Icon button**
- notification: `w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100`

**Usage rules**
- Use primary only for the single main action on the screen.
- Keep stacked buttons spaced with `space-y-3`.

---

### 6.6 Input (Search)
**Observed**
- `pl-12 pr-4 py-3.5 rounded-2xl bg-white border-2 border-gray-200`
- focus: `focus:border-[var(--chart-1)] focus:outline-none`
- leading icon absolutely positioned: `left-4 top-1/2`

**Usage rules**
- Always provide a leading icon for search inputs on selection screens.
- Focus is indicated by border color change, not by a ring.

---

### 6.7 Select (filters)
**Not observed**

---

### 6.8 Table
**Not observed**

---

### 6.9 Badge / StatusPill
**Observed pills**
- Context badge: `inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm`
- Step pill: `px-3 py-1.5 rounded-full bg-white text-xs text-gray-500 shadow-sm`
- Stage pill (on gradient): translucent white pill

**Usage rules**
- Use `text-xs` with `font-semibold` or `font-medium`.
- Use icons at 12–14px (`lucide-react size={12|14}`).

---

### 6.10 Avatar

- Circular avatar: `w-10 h-10 rounded-full`
- gradient fill: `from-[var(--chart-1)] to-[var(--chart-2)]`
- inner border: `border-2 border-white`
- optional dot: presence `bg-green-400` at bottom-right

---

### 6.11 Tooltip
**Not observed**

---

### 6.12 NotificationDot

- `w-2 h-2 bg-red-500 rounded-full border border-white` positioned on icon button

---

### 6.13 EmptyState / UnderConstruction
**Observed**
- “No cities found” text-only empty state:
  - `text-center py-8`
  - `text-gray-500 text-sm`

---

### 6.14 ChartContainer
**Not observed**
(Gradients and progress bar exist, but no charts in evidence.)

---

### 6.15 List items
#### CommunityPostCard
- `p-4 rounded-3xl bg-white shadow-sm border border-gray-100 flex gap-4`
- avatar emoji at left, title, meta row, and actions (likes/comments)

#### EventCard
- Horizontal scroll card:
  - `min-w-[200px] p-4 rounded-3xl bg-white border border-gray-100 shadow-sm`
  - image placeholder `h-24 rounded-2xl` with gradient background
  - date chip: `bg-white/90 text-[10px] font-bold rounded-lg`

---

### 6.16 BottomNav + FAB
**Bottom nav shell**
- `bg-white/90 backdrop-blur-lg rounded-[2rem] p-2 border border-white/50`
- strong shadow: `elevation.floatingNav`
- positioned as floating: `absolute bottom-6 left-6 right-6`

**NavIcon**
- label: `text-[10px] font-medium`
- active: `text-[var(--primary)]` + background chip `bg-[var(--primary)]/10`

**Center FAB**
- `w-14 h-14 rounded-full bg-[var(--foreground)] text-[var(--background)]`
- border: `border-4 border-[#F8F9FC]`
- lifted: `relative -top-6`
- hover: `hover:scale-105`

---

## 7. Iconography & Imagery

### Icons
- Library: `lucide-react`
- Style: stroke icons (default lucide)
- Sizes used: 10, 12, 14, 18, 20, 24, 28, 32
- Icon tiles often sit in rounded containers:
  - `w-14 h-14 rounded-2xl` for selection cards
  - `p-3 rounded-full` for hub cards

### Imagery
- Event “image” uses gradient blocks, not photos
- Decorative blur circles used on gradient hero/info cards

---

## 8. Accessibility & Interaction Rules

### Focus
- Inputs: focus indicated via `focus:border-[var(--chart-1)]` and `focus:outline-none`.

**To Decide**
- A consistent focus ring token and focus-visible styling for buttons/links is not defined.

### Keyboard behavior (To Decide)
- No explicit keyboard handling patterns observed in code.

### Minimum clickable area
- Primary/secondary buttons: `py-4` suggests large tap targets (Observed)
- Nav icons appear smaller; center FAB is large.

**To Decide**
- Exact minimum target sizes and exceptions.

### Contrast
- Text uses gray-900/700/600 on very light backgrounds and white on gradients.
- No contrast ratios measured.

### Tooltip behavior
- Not observed.

### Forms and labels
- Search input uses placeholder text; no explicit label element observed.

**To Decide**
- Label strategy (visible vs visually hidden) for inputs across the app.

---

## 9. Responsive Rules (Mobile → Desktop)

- The screens are constrained to `max-w-md` and designed for mobile layout.

**To Decide**
- Breakpoints (`sm/md/lg`) and layout changes are not present in evidence.
- Nav collapse behavior beyond mobile is not present.

---

## 10. Data + Types Foundation (Observed-First)

### Observed types (Code)
- `Language = 'EN' | 'KR'`
- Onboarding domain types: `City`, `Situation`, `LanguageCard`, `FeatureCard`
- Dashboard types: `ChecklistItem`, `CommunityPost`, `CategoryHub`

### Status patterns
- Checklist item completion:
  - `completed: boolean`
  - UI mapping: completed shows filled circle + check icon + line-through

**To Decide**
- Shared formatting utilities for money/dates/numbers are not present.
- A consistent domain model file structure is not present.

---

## 11. Logging + Analytics Scaffolding

If analytics is added later:
- Event naming: `module.action.subject` (example: `onboarding.select.language`)
- Include metadata: `language`, `cityId`, `situationId`, `screen`
- Don’t include message content from community posts in events.

---

## 12. Componentization Rules (Enforce Consistency)

**When to create a reusable component (Observed/Inferred)**
- If a pattern repeats across onboarding screens (badge pill, step pill, selection card, primary/secondary buttons), it belongs in `ui/`.

**Naming conventions**
- `ui/` for primitives: `Button`, `Pill`, `Card`, `Input`, `BottomNav`
- `modules/` for feature sections: `PlanHero`, `CommunityBuzz`, `EventsRail`

**Styling rules**
- No raw hex except `#F8F9FC` already used.
- Prefer `var(--chart-*)`, `var(--primary)`, and Tailwind palette classes already present.
- Avoid one-off radius values unless they become tokens (example: `rounded-[2rem]` is tokenized as `radius.2xl`).

---

## 13. Golden Examples (Pseudo-Structure Only)

### KPI / Plan hero section (Observed)
```

[SectionHeader: "My Plan" + sublabel + link]  
[GradientHeroCard]  
[StagePill]  
[Title]  
[PercentBadge]  
[ChecklistPreview]  
[ProgressMetaRow]  
[ProgressBar]

```

### Choice grid (City/Situation)
```

[BadgePill]  
[H1 Title]  
[Body Text]  
[Optional SearchInput]  
[Grid 2 columns]  
[SelectableCard + top-right indicator]

```

### Community list
```

[SectionHeader + meta]  
[List]  
[PostCard]  
[Avatar]  
[Title]  
[MetaRow: user • location]  
[ActionsRow: likes, comments]  
[SecondaryButton: "View All Posts"]

```

### Events rail
```

[SectionHeader + link]  
[HorizontalScroll]  
[EventCard]  
[GradientImageBlock + DateChip]  
[Title]  
[LocationRow]

```

### Bottom navigation with FAB
```

[FloatingNavShell]  
[NavIcon] [NavIcon] [FAB] [NavIcon] [NavIcon]

```

---

## 14. Decision Log

1. **App background token is `color.bg.app = #F8F9FC`**  
2. **Hero/info gradients use `from var(--chart-1) to var(--chart-5)`**  
3. **Primary CTA gradient uses `from var(--chart-1) to var(--chart-2)`**  
4. **Selected state uses `border var(--chart-1)` and filled check indicator**   
5. **Default card radius is `rounded-3xl`**  
6. **Hero radius tokenized as `radius.2xl = rounded-[2rem]`**   
7. **Sticky dashboard header elevation is `elevation.nav` with custom shadow value**  
8. **Floating bottom nav elevation is `elevation.floatingNav` with custom shadow value**  
9. **Focus styling is border-based (no ring token defined)**  
10. **`var(--primary)` is treated as link/active semantic distinct from `var(--chart-*)`**  
11. **Exact values for CSS vars (`--chart-*`, `--primary`, `--foreground`, `--background`) are missing**  
12. **No tables/charts are included in the evidence set**  
```

---
## To Decide (missing evidence)

1. Actual values for `--chart-1..5`, `--primary`, `--foreground`, `--background`.
    
2. Font stack backing `font-sans`.
    
3. Focus-visible ring strategy for buttons/links (current evidence only shows input border focus).
    
4. Breakpoints and desktop behavior (only `max-w-md` is shown).
    
5. Any table/chart system (not present in evidence).
    
