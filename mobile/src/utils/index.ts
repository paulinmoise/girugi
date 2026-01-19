/**
 * Utils - Utility functions
 * 
 * Will contain:
 * - formatDate - Date formatting with timezone support
 * - formatCurrency - KRW formatting
 * - validateEmail - Email validation
 * - storage - Secure storage helpers
 * - logger - Dev-only logging with categories
 * 
 * Utilities will be added as needed
 */

// Dev-only logger with categories (from style-guide.md)
export const log = {
  auth: (msg: string, data?: unknown) => {
    if (__DEV__) console.log('[AUTH]', msg, data);
  },
  nav: (msg: string, data?: unknown) => {
    if (__DEV__) console.log('[NAV]', msg, data);
  },
  data: (msg: string, data?: unknown) => {
    if (__DEV__) console.log('[DATA]', msg, data);
  },
  error: (msg: string, error?: unknown) => {
    // Always log errors, but format differently in prod
    if (__DEV__) {
      console.error('[ERROR]', msg, error);
    } else {
      // In production, would send to error tracking service
      console.error('[ERROR]', msg);
    }
  },
};
