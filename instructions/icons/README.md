# Icon Set

## Status: PLACEHOLDER - Using Lucide React

This folder documents the icon strategy for Girugi.

## Primary Icon Library

**Lucide React** - Already referenced in design.md

```bash
# Mobile (Expo)
npm install lucide-react-native

# Admin (Next.js)
npm install lucide-react
```

## Icon Usage Guidelines

### Sizes (from design.md)

| Context | Size | Example |
|---------|------|---------|
| Micro (nav labels) | 10-12px | Bottom nav icons |
| Small (inline) | 14px | Badge icons, list items |
| Medium (buttons) | 18-20px | Button icons, card actions |
| Large (cards) | 24px | Card leading icons |
| XL (feature tiles) | 28-32px | Hub category icons |

### Icon Tiles

For category/feature icons, wrap in styled containers:
- `w-14 h-14 rounded-2xl` for selection cards
- `p-3 rounded-full` for hub cards

### Required Icons by Feature

#### Navigation
- `Home`, `BookOpen` (Guides), `Compass` (Discover), `Calendar` (Events), `Users` (Community)
- `Search` (FAB), `Bell` (Notifications), `Settings`

#### Onboarding
- `Globe` (Language), `MapPin` (City), `Briefcase` (Situation)
- `Utensils` (Dietary), `Heart` (Interests), `Bell` (Notifications)

#### Actions
- `Check`, `Plus`, `ArrowRight`, `ChevronRight`
- `Star`, `Bookmark`, `Share`, `MoreHorizontal`

#### Safety
- `Shield`, `AlertTriangle`, `Flag` (Report), `Ban` (Block)
- `Eye`, `EyeOff`, `Lock`

## Custom Icons

If custom icons are needed:
- Place SVG files in this folder
- Follow Lucide naming convention (PascalCase)
- Match stroke width (2px default)
- Use currentColor for fills

## Action Items

- [ ] Confirm Lucide covers all needed icons
- [ ] Identify any custom icon needs
- [ ] Create custom icons if needed
