/**
 * Mock Data Module for Girugi
 *
 * This module provides comprehensive mock data for UI development
 * and testing of both the mobile app and admin console.
 *
 * Usage:
 * ```typescript
 * import { mockUsers, mockGuides, getMockListingsByCity } from '@girugi/shared/mocks';
 * ```
 *
 * The mock data is structured to match the Convex schema and supports:
 * - Various user states (new, active, verified, volunteer, admin)
 * - Bilingual content (EN/KO) for all public-facing data
 * - Different entity states (pending, active, completed, etc.)
 * - Admin queue scenarios (verifications, reports, listings)
 * - Community features (Daily Friend, Help Me)
 *
 * @module @girugi/shared/mocks
 */

// Re-export all types
export * from './types';

// Re-export all mock data and helpers
export * from './data/users';
export * from './data/guides';
export * from './data/listings';
export * from './data/events';
export * from './data/admin';

// ============================================
// Convenience aggregations
// ============================================

import { mockUsers, mockPreferences, mockTaskStatuses } from './data/users';
import { mockGuides } from './data/guides';
import { mockListings, mockReviews } from './data/listings';
import { mockEvents, mockRSVPs } from './data/events';
import {
  mockVerificationSubmissions,
  mockReports,
  mockAuditLogs,
  mockFeatureFlags,
  mockDailyFriendPlans,
  mockHelpRequests,
} from './data/admin';

/**
 * All mock data collections in one object.
 * Useful for seeding or bulk operations.
 */
export const allMockData = {
  // User data
  users: mockUsers,
  preferences: mockPreferences,
  taskStatuses: mockTaskStatuses,

  // Content
  guides: mockGuides,
  listings: mockListings,
  reviews: mockReviews,
  events: mockEvents,
  rsvps: mockRSVPs,

  // Admin / Safety
  verificationSubmissions: mockVerificationSubmissions,
  reports: mockReports,
  auditLogs: mockAuditLogs,
  featureFlags: mockFeatureFlags,

  // Community
  dailyFriendPlans: mockDailyFriendPlans,
  helpRequests: mockHelpRequests,
} as const;

/**
 * Mock data counts for quick reference
 */
export const mockDataCounts = {
  users: mockUsers.length,
  guides: mockGuides.length,
  listings: mockListings.length,
  events: mockEvents.length,
  reviews: mockReviews.length,
  verificationSubmissions: mockVerificationSubmissions.length,
  reports: mockReports.length,
  auditLogs: mockAuditLogs.length,
  dailyFriendPlans: mockDailyFriendPlans.length,
  helpRequests: mockHelpRequests.length,
} as const;
