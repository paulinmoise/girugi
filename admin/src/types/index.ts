// Admin-specific Types

/**
 * Admin user roles
 */
export type AdminRole = 'admin' | 'super_admin';

/**
 * Admin user session
 */
export interface AdminUser {
  id: string;
  email: string;
  role: AdminRole;
  name?: string;
}

/**
 * Navigation item for sidebar
 */
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  badge?: number;
}

/**
 * Queue item statuses
 */
export type QueueStatus = 'pending' | 'in_review' | 'completed' | 'dismissed';

/**
 * Verification submission for admin review
 */
export interface VerificationSubmission {
  id: string;
  userId: string;
  userEmail: string;
  documentType: 'passport' | 'arc' | 'drivers_license';
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  rejectionReason?: string;
}

/**
 * Report for admin review
 */
export interface Report {
  id: string;
  reporterId: string;
  targetType: 'user' | 'listing' | 'review' | 'event' | 'plan' | 'message';
  targetId: string;
  reason: string;
  notes?: string;
  status: 'pending' | 'action_taken' | 'dismissed';
  createdAt: string;
  resolvedAt?: string;
  resolvedBy?: string;
  action?: 'remove_content' | 'restrict_user' | 'ban_user' | 'dismiss';
}

/**
 * Listing suggestion for admin approval
 */
export interface ListingSuggestion {
  id: string;
  suggesterId: string;
  name: string;
  address: string;
  category: string;
  dietaryTags: string[];
  notes?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

/**
 * Audit log entry
 */
export interface AuditLogEntry {
  id: string;
  actorId: string;
  actorEmail: string;
  action: string;
  targetType: string;
  targetId: string;
  reason?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
}

/**
 * Feature flag for kill switches
 */
export interface FeatureFlag {
  id: string;
  name: string;
  enabled: boolean;
  lastChangedAt: string;
  lastChangedBy: string;
  reason?: string;
}
