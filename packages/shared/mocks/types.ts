/**
 * Mock Data Types for Girugi
 *
 * These types define the shape of mock data used for UI development.
 * They align with the Convex schema structure and will be migrated to
 * packages/shared/types/index.ts in Task 1.5.
 *
 * Note: IDs use string format for mock data compatibility.
 * In production, these will be Convex ID types.
 */

import { Language, UserRole, UserStatus, VerificationStatus } from '../types';

// ============================================
// User & Preferences Mock Types
// ============================================

export interface MockUser {
  _id: string;
  email: string;
  roles: UserRole[];
  status: UserStatus;
  createdAt: number;
}

export interface MockPreferences {
  _id: string;
  userId: string;
  language: Language;
  city?: string;
  dietary?: string[];
  interests?: string[];
  notificationPrefs?: {
    pushEnabled: boolean;
    emailEnabled: boolean;
    taskReminders: boolean;
    eventReminders: boolean;
    genericContent: boolean;
  };
}

// ============================================
// Task Status Mock Types
// ============================================

export type TaskStatusValue = 'not_started' | 'in_progress' | 'done';

export interface MockTaskStatus {
  _id: string;
  userId: string;
  taskId: string;
  status: TaskStatusValue;
  notes?: string;
  updatedAt: number;
}

// ============================================
// Guide Mock Types (Phase 2 schema - defined here for mock data)
// ============================================

export type GuideCategory =
  | 'getting_started'
  | 'banking_finance'
  | 'healthcare'
  | 'housing'
  | 'transportation'
  | 'immigration'
  | 'daily_life'
  | 'emergency';

export interface GuideStep {
  order: number;
  title: { en: string; ko: string };
  content: { en: string; ko: string };
  tip?: { en: string; ko: string };
}

export interface MockGuide {
  _id: string;
  slug: string;
  category: GuideCategory;
  title: { en: string; ko: string };
  description: { en: string; ko: string };
  overview: { en: string; ko: string };
  whatYouNeed: { en: string[]; ko: string[] };
  steps: GuideStep[];
  commonMistakes?: { en: string[]; ko: string[] };
  externalLinks?: { label: string; url: string }[];
  relatedGuideIds?: string[];
  lastReviewedAt: number;
  publishedAt: number;
  updatedAt: number;
}

// ============================================
// Listing/Discover Mock Types (Phase 2 schema)
// ============================================

export type ListingCategory =
  | 'restaurant'
  | 'cafe'
  | 'grocery'
  | 'service'
  | 'healthcare'
  | 'shopping'
  | 'entertainment';

export type ListingStatus = 'approved' | 'pending' | 'rejected';

export interface MockListing {
  _id: string;
  name: { en: string; ko: string };
  category: ListingCategory;
  city: string;
  area: string; // Neighborhood/district (coarse location)
  address: { en: string; ko: string };
  dietaryTags: string[];
  description?: { en: string; ko: string };
  tips?: { en: string; ko: string };
  phone?: string;
  website?: string;
  hours?: string;
  priceRange?: 1 | 2 | 3 | 4; // $ to $$$$
  averageRating: number;
  reviewCount: number;
  status: ListingStatus;
  suggestedBy?: string; // userId if user-suggested
  createdAt: number;
  updatedAt: number;
}

// ============================================
// Review Mock Types
// ============================================

export interface MockReview {
  _id: string;
  listingId: string;
  userId: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text?: string;
  tags?: string[]; // e.g., "vegetarian-friendly", "good-english"
  status: 'visible' | 'hidden' | 'flagged';
  createdAt: number;
}

// ============================================
// Event Mock Types (Phase 2 schema)
// ============================================

export type EventCategory =
  | 'social'
  | 'language_exchange'
  | 'sports'
  | 'culture'
  | 'food'
  | 'tech'
  | 'music'
  | 'outdoors'
  | 'volunteer';

export type RSVPStatus = 'yes' | 'maybe' | 'no';

export interface MockEvent {
  _id: string;
  title: { en: string; ko: string };
  description: { en: string; ko: string };
  category: EventCategory;
  city: string;
  area: string;
  venue: { en: string; ko: string };
  date: number; // Unix timestamp
  endDate?: number;
  maxAttendees?: number;
  currentRsvpCount: number;
  imageUrl?: string;
  externalUrl?: string;
  createdBy: string;
  createdAt: number;
  updatedAt: number;
  isCanceled: boolean;
}

export interface MockRSVP {
  _id: string;
  eventId: string;
  userId: string;
  status: RSVPStatus;
  reminderSet: boolean;
  reminderTime?: number;
  createdAt: number;
  updatedAt: number;
}

// ============================================
// Verification Mock Types (for Admin)
// ============================================

export type VerificationDocType = 'passport' | 'arc' | 'drivers_license';
export type VerificationSubmissionStatus = 'pending' | 'verified' | 'rejected';

export interface MockVerificationSubmission {
  _id: string;
  userId: string;
  userEmail: string; // Denormalized for admin display
  documentType: VerificationDocType;
  fileId: string;
  status: VerificationSubmissionStatus;
  rejectionReason?: string;
  reviewedBy?: string;
  reviewedAt?: number;
  createdAt: number;
}

// ============================================
// Report Mock Types (for Admin)
// ============================================

export type ReportTargetType =
  | 'user'
  | 'listing'
  | 'review'
  | 'event'
  | 'daily_friend_plan'
  | 'message';

export type ReportReason =
  | 'harassment'
  | 'scam_spam'
  | 'inappropriate_content'
  | 'impersonation'
  | 'safety_concern'
  | 'other';

export type ReportStatus = 'pending' | 'action_taken' | 'dismissed';

export type AdminAction =
  | 'remove_content'
  | 'restrict_user'
  | 'ban_user'
  | 'dismiss';

export interface MockReport {
  _id: string;
  reporterId: string;
  reporterEmail: string;
  targetType: ReportTargetType;
  targetId: string;
  reason: ReportReason;
  notes?: string;
  status: ReportStatus;
  action?: AdminAction;
  resolvedBy?: string;
  resolvedAt?: number;
  createdAt: number;
}

// ============================================
// Audit Log Mock Types (for Admin)
// ============================================

export interface MockAuditLog {
  _id: string;
  actorId: string;
  actorEmail: string;
  action: string;
  targetType: string;
  targetId: string;
  metadata?: Record<string, unknown>;
  createdAt: number;
}

// ============================================
// Feature Flag Mock Types
// ============================================

export interface MockFeatureFlag {
  _id: string;
  feature: string;
  enabled: boolean;
  updatedBy: string;
  updatedAt: number;
  reason?: string;
}

// ============================================
// Daily Friend Mock Types (for Community feature)
// ============================================

export type DailyFriendActivity =
  | 'coffee'
  | 'meal'
  | 'walk'
  | 'study'
  | 'language_exchange'
  | 'gym'
  | 'explore';

export type TimeWindow = 'morning' | 'afternoon' | 'evening';

export type PlanStatus = 'active' | 'matched' | 'completed' | 'canceled' | 'expired';

export interface MockDailyFriendPlan {
  _id: string;
  creatorId: string;
  activity: DailyFriendActivity;
  timeWindow: TimeWindow;
  city: string;
  area: string;
  description?: string;
  status: PlanStatus;
  matchedUserId?: string;
  matchedAt?: number;
  completedAt?: number;
  createdAt: number;
  expiresAt: number;
}

// ============================================
// Help Me Mock Types
// ============================================

export type HelpCategory = 'hospital' | 'bank' | 'immigration' | 'shopping' | 'emergency' | 'other';
export type LanguageDirection = 'ko_to_en' | 'en_to_ko';
export type HelpUrgency = 'urgent' | 'normal';
export type HelpRequestStatus = 'pending' | 'routed' | 'active' | 'completed' | 'expired';

export interface MockHelpRequest {
  _id: string;
  requesterId: string;
  category: HelpCategory;
  languageDirection: LanguageDirection;
  urgency: HelpUrgency;
  notes?: string;
  status: HelpRequestStatus;
  volunteerId?: string;
  acceptedAt?: number;
  completedAt?: number;
  createdAt: number;
  expiresAt: number;
}
