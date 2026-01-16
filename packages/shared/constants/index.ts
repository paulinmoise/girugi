// Application-wide constants for Girugi

// Supported languages
export const SUPPORTED_LANGUAGES = ['en', 'ko'] as const;

// Default language
export const DEFAULT_LANGUAGE = 'en';

// Rate limits (per PRD requirements)
export const RATE_LIMITS = {
  OTP_REQUEST_COOLDOWN_MS: 60000, // 1 minute between OTP requests
  OTP_MAX_ATTEMPTS: 5, // Max wrong OTP attempts before lockout
  OTP_LOCKOUT_DURATION_MS: 900000, // 15 minutes lockout
  REVIEW_SUBMIT_COOLDOWN_MS: 300000, // 5 minutes between reviews
  LISTING_SUGGEST_COOLDOWN_MS: 86400000, // 24 hours between suggestions
  REPORT_DAILY_LIMIT: 10, // Max reports per day
  MESSAGE_BURST_LIMIT: 10, // Max messages in burst window
  MESSAGE_BURST_WINDOW_MS: 60000, // 1 minute burst window
} as const;

// Verification document types (from PRD)
export const VERIFICATION_DOC_TYPES = [
  'passport',
  'arc', // Alien Registration Card
  'drivers_license',
] as const;

// Dietary options for filters
export const DIETARY_OPTIONS = [
  'vegetarian',
  'vegan',
  'halal',
  'kosher',
  'gluten_free',
  'dairy_free',
  'nut_free',
  'pescatarian',
] as const;

// Cities (initial launch cities)
export const SUPPORTED_CITIES = [
  'seoul',
  'busan',
  'incheon',
  'daegu',
  'daejeon',
  'gwangju',
  'ulsan',
  'sejong',
] as const;

// First 7 Tasks - task identifiers
export const FIRST_7_TASKS = [
  'get_phone_number',
  'register_arc',
  'open_bank_account',
  'get_transit_card',
  'register_health_insurance',
  'find_housing',
  'learn_emergency_numbers',
] as const;

// Feature flags for kill switches (per PRD)
export const FEATURE_FLAGS = {
  DAILY_FRIEND_ENABLED: 'daily_friend_enabled',
  HELP_ME_ENABLED: 'help_me_enabled',
  VOICE_VIDEO_HELP_ME: 'voice_video_help_me', // Phase 2
} as const;
