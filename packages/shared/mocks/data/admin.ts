/**
 * Mock Admin Data
 *
 * Provides realistic admin-related data for testing:
 * - Verification submissions
 * - Reports
 * - Audit logs
 * - Feature flags
 */

import {
  MockVerificationSubmission,
  MockReport,
  MockAuditLog,
  MockFeatureFlag,
  MockDailyFriendPlan,
  MockHelpRequest,
} from '../types';
import { FEATURE_FLAGS } from '../../constants';

// ============================================
// Base timestamp helpers
// ============================================

const now = Date.now();
const day = 24 * 60 * 60 * 1000;
const hour = 60 * 60 * 1000;
const minute = 60 * 1000;

// ============================================
// Mock Verification Submissions
// ============================================

export const mockVerificationSubmissions: MockVerificationSubmission[] = [
  // Pending submissions (for admin queue)
  {
    _id: 'verify_001',
    userId: 'user_pending_001',
    userEmail: 'pending.verify@example.com',
    documentType: 'passport',
    fileId: 'file_passport_001',
    status: 'pending',
    createdAt: now - 2 * day,
  },
  {
    _id: 'verify_002',
    userId: 'user_new_001',
    userEmail: 'nadia.new@example.com',
    documentType: 'arc',
    fileId: 'file_arc_001',
    status: 'pending',
    createdAt: now - 1 * day,
  },
  {
    _id: 'verify_003',
    userId: 'user_active_001',
    userEmail: 'sam.student@university.edu',
    documentType: 'drivers_license',
    fileId: 'file_dl_001',
    status: 'pending',
    createdAt: now - 6 * hour,
  },

  // Verified submissions
  {
    _id: 'verify_004',
    userId: 'user_verified_001',
    userEmail: 'priya.pro@company.com',
    documentType: 'arc',
    fileId: 'file_arc_002',
    status: 'verified',
    reviewedBy: 'user_admin_001',
    reviewedAt: now - 25 * day,
    createdAt: now - 26 * day,
  },
  {
    _id: 'verify_005',
    userId: 'user_volunteer_001',
    userEmail: 'vina.volunteer@gmail.com',
    documentType: 'passport',
    fileId: 'file_passport_002',
    status: 'verified',
    reviewedBy: 'user_admin_001',
    reviewedAt: now - 55 * day,
    createdAt: now - 56 * day,
  },
  {
    _id: 'verify_006',
    userId: 'user_settled_001',
    userEmail: 'rafael.resident@mail.com',
    documentType: 'arc',
    fileId: 'file_arc_003',
    status: 'verified',
    reviewedBy: 'user_admin_001',
    reviewedAt: now - 100 * day,
    createdAt: now - 102 * day,
  },
  {
    _id: 'verify_007',
    userId: 'user_verified_002',
    userEmail: 'alex.verified@example.com',
    documentType: 'passport',
    fileId: 'file_passport_003',
    status: 'verified',
    reviewedBy: 'user_admin_001',
    reviewedAt: now - 40 * day,
    createdAt: now - 42 * day,
  },

  // Rejected submission
  {
    _id: 'verify_008',
    userId: 'user_restricted_001',
    userEmail: 'restricted.user@example.com',
    documentType: 'passport',
    fileId: 'file_passport_004',
    status: 'rejected',
    rejectionReason: 'unreadable_image',
    reviewedBy: 'user_admin_001',
    reviewedAt: now - 30 * day,
    createdAt: now - 32 * day,
  },
];

// ============================================
// Mock Reports
// ============================================

export const mockReports: MockReport[] = [
  // Pending reports (for admin queue)
  {
    _id: 'report_001',
    reporterId: 'user_verified_001',
    reporterEmail: 'priya.pro@company.com',
    targetType: 'user',
    targetId: 'user_restricted_001',
    reason: 'harassment',
    notes: 'Sent multiple unwanted messages after I said I wasn\'t interested.',
    status: 'pending',
    createdAt: now - 1 * day,
  },
  {
    _id: 'report_002',
    reporterId: 'user_active_001',
    reporterEmail: 'sam.student@university.edu',
    targetType: 'review',
    targetId: 'review_008',
    reason: 'scam_spam',
    notes: 'This review seems fake - includes promotional links.',
    status: 'pending',
    createdAt: now - 2 * hour,
  },
  {
    _id: 'report_003',
    reporterId: 'user_settled_001',
    reporterEmail: 'rafael.resident@mail.com',
    targetType: 'listing',
    targetId: 'listing_009',
    reason: 'other',
    notes: 'This restaurant has been closed for months.',
    status: 'pending',
    createdAt: now - 4 * hour,
  },

  // Resolved reports - action taken
  {
    _id: 'report_004',
    reporterId: 'user_volunteer_001',
    reporterEmail: 'vina.volunteer@gmail.com',
    targetType: 'message',
    targetId: 'msg_deleted_001',
    reason: 'inappropriate_content',
    notes: 'Sent explicit content without consent.',
    status: 'action_taken',
    action: 'ban_user',
    resolvedBy: 'user_admin_001',
    resolvedAt: now - 15 * day,
    createdAt: now - 16 * day,
  },
  {
    _id: 'report_005',
    reporterId: 'user_verified_002',
    reporterEmail: 'alex.verified@example.com',
    targetType: 'user',
    targetId: 'user_scammer_001',
    reason: 'scam_spam',
    notes: 'Tried to get me to send money for a "job opportunity".',
    status: 'action_taken',
    action: 'ban_user',
    resolvedBy: 'user_admin_001',
    resolvedAt: now - 20 * day,
    createdAt: now - 21 * day,
  },

  // Dismissed reports
  {
    _id: 'report_006',
    reporterId: 'user_new_001',
    reporterEmail: 'nadia.new@example.com',
    targetType: 'listing',
    targetId: 'listing_004',
    reason: 'other',
    notes: 'The wait time was too long.',
    status: 'dismissed',
    action: 'dismiss',
    resolvedBy: 'user_admin_001',
    resolvedAt: now - 10 * day,
    createdAt: now - 11 * day,
  },

  // Safety concern report
  {
    _id: 'report_007',
    reporterId: 'user_verified_001',
    reporterEmail: 'priya.pro@company.com',
    targetType: 'daily_friend_plan',
    targetId: 'plan_flagged_001',
    reason: 'safety_concern',
    notes: 'The person asked to meet at a very remote location late at night.',
    status: 'pending',
    createdAt: now - 30 * minute,
  },
];

// ============================================
// Mock Audit Logs
// ============================================

export const mockAuditLogs: MockAuditLog[] = [
  // Recent admin actions
  {
    _id: 'audit_001',
    actorId: 'user_admin_001',
    actorEmail: 'admin@girugi.app',
    action: 'verification_approved',
    targetType: 'verification',
    targetId: 'verify_007',
    metadata: { documentType: 'passport' },
    createdAt: now - 40 * day,
  },
  {
    _id: 'audit_002',
    actorId: 'user_admin_001',
    actorEmail: 'admin@girugi.app',
    action: 'report_resolved',
    targetType: 'report',
    targetId: 'report_004',
    metadata: { action: 'ban_user', reason: 'inappropriate_content' },
    createdAt: now - 15 * day,
  },
  {
    _id: 'audit_003',
    actorId: 'user_admin_001',
    actorEmail: 'admin@girugi.app',
    action: 'report_resolved',
    targetType: 'report',
    targetId: 'report_005',
    metadata: { action: 'ban_user', reason: 'scam_spam' },
    createdAt: now - 20 * day,
  },
  {
    _id: 'audit_004',
    actorId: 'user_admin_001',
    actorEmail: 'admin@girugi.app',
    action: 'report_dismissed',
    targetType: 'report',
    targetId: 'report_006',
    metadata: { reason: 'Not a valid report - subjective complaint' },
    createdAt: now - 10 * day,
  },
  {
    _id: 'audit_005',
    actorId: 'user_admin_001',
    actorEmail: 'admin@girugi.app',
    action: 'verification_rejected',
    targetType: 'verification',
    targetId: 'verify_008',
    metadata: { reason: 'unreadable_image' },
    createdAt: now - 30 * day,
  },
  {
    _id: 'audit_006',
    actorId: 'user_admin_001',
    actorEmail: 'admin@girugi.app',
    action: 'user_restricted',
    targetType: 'user',
    targetId: 'user_restricted_001',
    metadata: { reason: 'Multiple harassment reports' },
    createdAt: now - 28 * day,
  },
  {
    _id: 'audit_007',
    actorId: 'user_admin_001',
    actorEmail: 'admin@girugi.app',
    action: 'feature_flag_toggled',
    targetType: 'feature_flag',
    targetId: 'daily_friend_enabled',
    metadata: { enabled: true, reason: 'Feature launch after testing' },
    createdAt: now - 60 * day,
  },
  {
    _id: 'audit_008',
    actorId: 'user_admin_001',
    actorEmail: 'admin@girugi.app',
    action: 'listing_approved',
    targetType: 'listing',
    targetId: 'listing_008',
    metadata: { name: 'Haeundae Wave Coffee' },
    createdAt: now - 80 * day,
  },
  {
    _id: 'audit_009',
    actorId: 'user_admin_001',
    actorEmail: 'admin@girugi.app',
    action: 'verification_approved',
    targetType: 'verification',
    targetId: 'verify_004',
    metadata: { documentType: 'arc' },
    createdAt: now - 25 * day,
  },
  {
    _id: 'audit_010',
    actorId: 'user_admin_001',
    actorEmail: 'admin@girugi.app',
    action: 'user_banned',
    targetType: 'user',
    targetId: 'user_banned_001',
    metadata: { reason: 'Repeated policy violations' },
    createdAt: now - 50 * day,
  },
];

// ============================================
// Mock Feature Flags
// ============================================

export const mockFeatureFlags: MockFeatureFlag[] = [
  {
    _id: 'flag_001',
    feature: FEATURE_FLAGS.DAILY_FRIEND_ENABLED,
    enabled: true,
    updatedBy: 'user_admin_001',
    updatedAt: now - 60 * day,
    reason: 'Feature launch after successful testing',
  },
  {
    _id: 'flag_002',
    feature: FEATURE_FLAGS.HELP_ME_ENABLED,
    enabled: true,
    updatedBy: 'user_admin_001',
    updatedAt: now - 45 * day,
    reason: 'Enabling Help Me feature with volunteer pool ready',
  },
  {
    _id: 'flag_003',
    feature: FEATURE_FLAGS.VOICE_VIDEO_HELP_ME,
    enabled: false,
    updatedBy: 'user_admin_001',
    updatedAt: now - 90 * day,
    reason: 'Phase 2 feature - not yet implemented',
  },
];

// ============================================
// Mock Daily Friend Plans
// ============================================

export const mockDailyFriendPlans: MockDailyFriendPlan[] = [
  // Active plans
  {
    _id: 'plan_001',
    creatorId: 'user_verified_001',
    activity: 'coffee',
    timeWindow: 'afternoon',
    city: 'seoul',
    area: 'Gangnam',
    description: 'Looking for someone to grab coffee and practice Korean with!',
    status: 'active',
    createdAt: now - 2 * hour,
    expiresAt: now + 8 * hour,
  },
  {
    _id: 'plan_002',
    creatorId: 'user_settled_001',
    activity: 'walk',
    timeWindow: 'evening',
    city: 'seoul',
    area: 'Han River',
    description: 'Evening walk along the Han River. Just want some company!',
    status: 'active',
    createdAt: now - 4 * hour,
    expiresAt: now + 6 * hour,
  },

  // Matched plan
  {
    _id: 'plan_003',
    creatorId: 'user_verified_002',
    activity: 'meal',
    timeWindow: 'evening',
    city: 'seoul',
    area: 'Hongdae',
    description: 'Looking for a dinner buddy to try a new Korean BBQ place.',
    status: 'matched',
    matchedUserId: 'user_verified_001',
    matchedAt: now - 1 * hour,
    createdAt: now - 3 * hour,
    expiresAt: now + 5 * hour,
  },

  // Completed plan
  {
    _id: 'plan_004',
    creatorId: 'user_volunteer_001',
    activity: 'language_exchange',
    timeWindow: 'morning',
    city: 'busan',
    area: 'Seomyeon',
    description: 'Morning language exchange over breakfast.',
    status: 'completed',
    matchedUserId: 'user_settled_001',
    matchedAt: now - 1 * day - 5 * hour,
    completedAt: now - 1 * day,
    createdAt: now - 1 * day - 6 * hour,
    expiresAt: now - 1 * day + 4 * hour,
  },

  // Expired plan
  {
    _id: 'plan_005',
    creatorId: 'user_verified_001',
    activity: 'study',
    timeWindow: 'afternoon',
    city: 'seoul',
    area: 'Gangnam',
    description: 'Study session at a cafe. Working on Korean.',
    status: 'expired',
    createdAt: now - 2 * day,
    expiresAt: now - 1 * day - 12 * hour,
  },
];

// ============================================
// Mock Help Requests
// ============================================

export const mockHelpRequests: MockHelpRequest[] = [
  // Active session
  {
    _id: 'help_001',
    requesterId: 'user_new_001',
    category: 'hospital',
    languageDirection: 'ko_to_en',
    urgency: 'urgent',
    notes: 'At the hospital, doctor is explaining something but I don\'t understand.',
    status: 'active',
    volunteerId: 'user_volunteer_001',
    acceptedAt: now - 10 * minute,
    createdAt: now - 15 * minute,
    expiresAt: now + 45 * minute,
  },

  // Pending request (waiting for volunteer)
  {
    _id: 'help_002',
    requesterId: 'user_active_001',
    category: 'bank',
    languageDirection: 'ko_to_en',
    urgency: 'normal',
    notes: 'Need help understanding a bank form.',
    status: 'pending',
    createdAt: now - 5 * minute,
    expiresAt: now + 25 * minute,
  },

  // Completed sessions
  {
    _id: 'help_003',
    requesterId: 'user_verified_001',
    category: 'immigration',
    languageDirection: 'ko_to_en',
    urgency: 'normal',
    notes: 'Help with visa extension application form.',
    status: 'completed',
    volunteerId: 'user_volunteer_001',
    acceptedAt: now - 2 * day - 2 * hour,
    completedAt: now - 2 * day - 1 * hour,
    createdAt: now - 2 * day - 3 * hour,
    expiresAt: now - 2 * day,
  },
  {
    _id: 'help_004',
    requesterId: 'user_settled_001',
    category: 'shopping',
    languageDirection: 'en_to_ko',
    urgency: 'normal',
    notes: 'Need to negotiate with a furniture store.',
    status: 'completed',
    volunteerId: 'user_volunteer_001',
    acceptedAt: now - 5 * day - 3 * hour,
    completedAt: now - 5 * day - 2 * hour,
    createdAt: now - 5 * day - 4 * hour,
    expiresAt: now - 5 * day,
  },

  // Expired (no volunteer available)
  {
    _id: 'help_005',
    requesterId: 'user_new_001',
    category: 'emergency',
    languageDirection: 'ko_to_en',
    urgency: 'urgent',
    notes: 'Was an emergency but resolved now.',
    status: 'expired',
    createdAt: now - 3 * day,
    expiresAt: now - 3 * day + 30 * minute,
  },
];

// ============================================
// Helper functions
// ============================================

/**
 * Get pending verification submissions
 */
export function getMockPendingVerifications(): MockVerificationSubmission[] {
  return mockVerificationSubmissions.filter((v) => v.status === 'pending');
}

/**
 * Get verification submission by ID
 */
export function getMockVerificationById(id: string): MockVerificationSubmission | undefined {
  return mockVerificationSubmissions.find((v) => v._id === id);
}

/**
 * Get pending reports
 */
export function getMockPendingReports(): MockReport[] {
  return mockReports.filter((r) => r.status === 'pending');
}

/**
 * Get report by ID
 */
export function getMockReportById(id: string): MockReport | undefined {
  return mockReports.find((r) => r._id === id);
}

/**
 * Get audit logs (sorted by time, newest first)
 */
export function getMockAuditLogs(limit: number = 50): MockAuditLog[] {
  return [...mockAuditLogs].sort((a, b) => b.createdAt - a.createdAt).slice(0, limit);
}

/**
 * Get feature flags
 */
export function getMockFeatureFlags(): MockFeatureFlag[] {
  return mockFeatureFlags;
}

/**
 * Check if a feature is enabled
 */
export function isMockFeatureEnabled(featureName: string): boolean {
  const flag = mockFeatureFlags.find((f) => f.feature === featureName);
  return flag?.enabled ?? false;
}

/**
 * Get active Daily Friend plans
 */
export function getMockActivePlans(): MockDailyFriendPlan[] {
  return mockDailyFriendPlans.filter((p) => p.status === 'active');
}

/**
 * Get pending Help Me requests
 */
export function getMockPendingHelpRequests(): MockHelpRequest[] {
  return mockHelpRequests.filter((r) => r.status === 'pending');
}

/**
 * Get active Help Me sessions
 */
export function getMockActiveHelpSessions(): MockHelpRequest[] {
  return mockHelpRequests.filter((r) => r.status === 'active');
}

// ============================================
// Admin Dashboard Stats
// ============================================

export interface AdminDashboardStats {
  pendingVerifications: number;
  pendingReports: number;
  pendingListings: number;
  activeUsers24h: number;
  totalUsers: number;
  verifiedUsers: number;
}

/**
 * Get mock admin dashboard stats
 */
export function getMockAdminStats(): AdminDashboardStats {
  return {
    pendingVerifications: getMockPendingVerifications().length,
    pendingReports: getMockPendingReports().length,
    pendingListings: 1, // listing_009 is pending
    activeUsers24h: 156, // Mock number
    totalUsers: 1247, // Mock number
    verifiedUsers: 423, // Mock number
  };
}
