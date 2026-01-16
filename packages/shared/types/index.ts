// User roles as defined in PRD
export type UserRole = 'user' | 'verified' | 'volunteer' | 'admin';

// User status
export type UserStatus = 'active' | 'restricted' | 'banned';

// Language options for bilingual support
export type Language = 'en' | 'ko';

// Base user type
export interface User {
  id: string;
  email: string;
  roles: UserRole[];
  status: UserStatus;
  createdAt: number;
}

// User preferences
export interface UserPreferences {
  userId: string;
  language: Language;
  city?: string;
  dietary?: string[];
  interests?: string[];
  notificationPrefs?: NotificationPreferences;
}

// Notification preferences
export interface NotificationPreferences {
  pushEnabled: boolean;
  emailEnabled: boolean;
  taskReminders: boolean;
  eventReminders: boolean;
  genericContent: boolean; // Privacy-safe generic notifications by default
}

// Verification status
export type VerificationStatus = 'none' | 'pending' | 'verified' | 'rejected';

// Verification rejection reasons (from PRD)
export type VerificationRejectionReason =
  | 'unreadable_image'
  | 'wrong_document_type'
  | 'expired_document'
  | 'missing_required_side'
  | 'info_mismatch'
  | 'suspected_tampering'
  | 'duplicate_submission'
  | 'other';
