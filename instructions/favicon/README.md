# Favicon Assets

## Status: PLACEHOLDER - Assets Needed

This folder should contain favicons for the admin web console.

## Required Files

| File | Purpose | Size |
|------|---------|------|
| `favicon.ico` | Legacy browsers | 16x16, 32x32 multi-res |
| `favicon-16x16.png` | Standard favicon | 16x16 |
| `favicon-32x32.png` | Retina favicon | 32x32 |
| `apple-touch-icon.png` | iOS home screen | 180x180 |
| `android-chrome-192x192.png` | Android PWA | 192x192 |
| `android-chrome-512x512.png` | Android PWA splash | 512x512 |
| `site.webmanifest` | PWA manifest | JSON |

## Mobile App Icons

For Expo/React Native, icons are configured in:
- `mobile/app.json` → `expo.icon`
- `mobile/assets/icon.png` (1024x1024)
- `mobile/assets/adaptive-icon.png` (Android adaptive)

**Note**: Mobile app icons already have placeholders in `mobile/assets/`

## Generation Tool

Use [RealFaviconGenerator](https://realfavicongenerator.net/) or similar:
1. Upload the logo icon (512x512 PNG minimum)
2. Configure for all platforms
3. Download and extract to this folder

## Temporary Setup

Until official favicons are created:
1. Admin console will use Next.js default favicon
2. Mobile will use Expo placeholder icons

## Action Items

- [ ] Create favicon from final logo
- [ ] Generate all required sizes
- [ ] Update `admin/src/app/favicon.ico`
- [ ] Update `mobile/assets/` icons
- [ ] Create and configure `site.webmanifest`
