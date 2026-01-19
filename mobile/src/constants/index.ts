/**
 * Constants - Mobile-specific constants
 * 
 * Note: Shared constants are in packages/shared/constants
 * This file contains mobile-only constants like:
 * - Screen names
 * - Layout dimensions
 * - Animation timings
 * - Color tokens (for StyleSheet)
 */

// Screen names for navigation
export const SCREENS = {
  // Auth
  EMAIL: 'Email',
  OTP: 'Otp',
  
  // Onboarding
  WELCOME: 'Welcome',
  LANGUAGE: 'Language',
  CITY: 'City',
  SITUATION: 'Situation',
  DIETARY: 'Dietary',
  INTERESTS: 'Interests',
  NOTIFICATIONS: 'Notifications',
  PLAN_READY: 'PlanReady',
  VERIFICATION: 'Verification',
  
  // Main tabs
  HOME: 'Home',
  GUIDES: 'Guides',
  DISCOVER: 'Discover',
  EVENTS: 'Events',
  COMMUNITY: 'Community',
  
  // Detail screens
  GUIDE_DETAIL: 'GuideDetail',
  LISTING_DETAIL: 'ListingDetail',
  EVENT_DETAIL: 'EventDetail',
  SETTINGS: 'Settings',
} as const;

// Layout constants (per style-guide.md)
export const LAYOUT = {
  PAGE_PADDING_X: 24, // px-6 = 24px
  PAGE_PADDING_TOP: 48, // pt-12 = 48px
  SECTION_GAP: 32, // space-y-8 = 32px
  CARD_PADDING_LG: 24, // p-6
  CARD_PADDING_MD: 20, // p-5
  CARD_PADDING_SM: 16, // p-4
  GRID_GAP: 16, // gap-4
  BOTTOM_NAV_HEIGHT: 80,
  BOTTOM_NAV_MARGIN: 24, // bottom-6
} as const;

// Color tokens (per style-guide.md)
export const COLORS = {
  // Background
  BG_APP: '#F8F9FC',
  BG_SURFACE: '#FFFFFF',
  BG_SURFACE_MUTED: '#F9FAFB', // gray-50
  
  // Text
  TEXT_PRIMARY: '#111827', // gray-900
  TEXT_SECONDARY: '#4B5563', // gray-600
  TEXT_MUTED: '#6B7280', // gray-500
  TEXT_ON_ACCENT: '#FFFFFF',
  
  // Brand
  PRIMARY: '#57B8FF', // --chart-1
  SECONDARY: '#2EC971', // --chart-2
  WARNING: '#DD9D18', // --chart-3
  EXPERT: '#9B59B6', // --chart-4
  INFO: '#3498DB', // --chart-5
  
  // Semantic
  SUCCESS: '#34D399', // green-400
  DANGER: '#EF4444', // red-500
  
  // Borders
  BORDER_DEFAULT: '#F3F4F6', // gray-100
  BORDER_STRONG: '#E5E7EB', // gray-200
} as const;

// Animation timings (per style-guide.md)
export const ANIMATION = {
  DURATION_FAST: 200,
  DURATION_NORMAL: 300,
  DURATION_SLOW: 500,
} as const;
