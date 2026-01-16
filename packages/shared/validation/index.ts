// Validation utilities for Girugi
// These will be expanded with Zod schemas as features are implemented

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate OTP format (6 digits)
 */
export function isValidOtp(otp: string): boolean {
  return /^\d{6}$/.test(otp);
}

/**
 * Check if string contains potential PII patterns (phone numbers, addresses)
 * Used for content filtering in public fields
 */
export function containsPotentialPII(text: string): boolean {
  // Korean phone number patterns
  const koreanPhoneRegex = /01[0-9]-?\d{3,4}-?\d{4}/;
  // International phone patterns
  const intlPhoneRegex = /\+\d{1,3}[\s-]?\d{6,14}/;
  
  return koreanPhoneRegex.test(text) || intlPhoneRegex.test(text);
}
