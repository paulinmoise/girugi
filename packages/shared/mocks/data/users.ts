/**
 * Mock Users Data
 *
 * Provides realistic user data for UI testing.
 * Includes variety: new users, verified users, volunteers, admins.
 */

import { MockUser, MockPreferences, MockTaskStatus } from '../types';
import { FIRST_7_TASKS, SUPPORTED_CITIES, DIETARY_OPTIONS } from '../../constants';

// ============================================
// Base timestamp helpers
// ============================================

const now = Date.now();
const day = 24 * 60 * 60 * 1000;
const hour = 60 * 60 * 1000;

// ============================================
// Mock Users (variety of roles and statuses)
// ============================================

export const mockUsers: MockUser[] = [
  // Admin user (founder)
  {
    _id: 'user_admin_001',
    email: 'admin@girugi.app',
    roles: ['admin'],
    status: 'active',
    createdAt: now - 90 * day,
  },

  // New arrival - just signed up, incomplete onboarding
  {
    _id: 'user_new_001',
    email: 'nadia.new@example.com',
    roles: ['user'],
    status: 'active',
    createdAt: now - 2 * day,
  },

  // Active user - completed onboarding, working on tasks
  {
    _id: 'user_active_001',
    email: 'sam.student@university.edu',
    roles: ['user'],
    status: 'active',
    createdAt: now - 14 * day,
  },

  // Verified user - can access Daily Friend
  {
    _id: 'user_verified_001',
    email: 'priya.pro@company.com',
    roles: ['user', 'verified'],
    status: 'active',
    createdAt: now - 30 * day,
  },

  // Volunteer - verified and helps with Help Me
  {
    _id: 'user_volunteer_001',
    email: 'vina.volunteer@gmail.com',
    roles: ['user', 'verified', 'volunteer'],
    status: 'active',
    createdAt: now - 60 * day,
  },

  // Settled resident - long-term user
  {
    _id: 'user_settled_001',
    email: 'rafael.resident@mail.com',
    roles: ['user', 'verified'],
    status: 'active',
    createdAt: now - 120 * day,
  },

  // Restricted user - for testing moderation states
  {
    _id: 'user_restricted_001',
    email: 'restricted.user@example.com',
    roles: ['user'],
    status: 'restricted',
    createdAt: now - 45 * day,
  },

  // Banned user - for testing moderation states
  {
    _id: 'user_banned_001',
    email: 'banned.user@example.com',
    roles: ['user'],
    status: 'banned',
    createdAt: now - 60 * day,
  },

  // Pending verification user
  {
    _id: 'user_pending_001',
    email: 'pending.verify@example.com',
    roles: ['user'],
    status: 'active',
    createdAt: now - 7 * day,
  },

  // Another verified user for Daily Friend matching
  {
    _id: 'user_verified_002',
    email: 'alex.verified@example.com',
    roles: ['user', 'verified'],
    status: 'active',
    createdAt: now - 45 * day,
  },
];

// ============================================
// Mock Preferences (matching users)
// ============================================

export const mockPreferences: MockPreferences[] = [
  // Admin preferences
  {
    _id: 'pref_001',
    userId: 'user_admin_001',
    language: 'en',
    city: 'seoul',
    notificationPrefs: {
      pushEnabled: true,
      emailEnabled: true,
      taskReminders: true,
      eventReminders: true,
      genericContent: true,
    },
  },

  // New user - minimal preferences
  {
    _id: 'pref_002',
    userId: 'user_new_001',
    language: 'en',
    city: undefined, // Not yet selected
  },

  // Student - full preferences
  {
    _id: 'pref_003',
    userId: 'user_active_001',
    language: 'en',
    city: 'seoul',
    dietary: ['vegetarian'],
    interests: ['language_exchange', 'study', 'coffee'],
    notificationPrefs: {
      pushEnabled: true,
      emailEnabled: false,
      taskReminders: true,
      eventReminders: true,
      genericContent: true,
    },
  },

  // Working pro - Korean preferred
  {
    _id: 'pref_004',
    userId: 'user_verified_001',
    language: 'ko',
    city: 'seoul',
    dietary: ['halal'],
    interests: ['food', 'tech'],
    notificationPrefs: {
      pushEnabled: true,
      emailEnabled: true,
      taskReminders: true,
      eventReminders: true,
      genericContent: false, // Wants detailed notifications
    },
  },

  // Volunteer
  {
    _id: 'pref_005',
    userId: 'user_volunteer_001',
    language: 'en',
    city: 'busan',
    dietary: [],
    interests: ['volunteer', 'language_exchange'],
    notificationPrefs: {
      pushEnabled: true,
      emailEnabled: true,
      taskReminders: false,
      eventReminders: true,
      genericContent: true,
    },
  },

  // Settled resident
  {
    _id: 'pref_006',
    userId: 'user_settled_001',
    language: 'en',
    city: 'seoul',
    dietary: ['vegan'],
    interests: ['food', 'outdoors', 'culture'],
    notificationPrefs: {
      pushEnabled: true,
      emailEnabled: false,
      taskReminders: false,
      eventReminders: true,
      genericContent: true,
    },
  },

  // Verified user 2
  {
    _id: 'pref_007',
    userId: 'user_verified_002',
    language: 'en',
    city: 'seoul',
    dietary: ['gluten_free'],
    interests: ['coffee', 'study'],
    notificationPrefs: {
      pushEnabled: true,
      emailEnabled: true,
      taskReminders: true,
      eventReminders: true,
      genericContent: true,
    },
  },
];

// ============================================
// Mock Task Status (First 7 Tasks progress)
// ============================================

export const mockTaskStatuses: MockTaskStatus[] = [
  // New user - no progress
  ...FIRST_7_TASKS.map((taskId, index) => ({
    _id: `task_new_${index}`,
    userId: 'user_new_001',
    taskId,
    status: 'not_started' as const,
    updatedAt: now - 2 * day,
  })),

  // Active student - partial progress (3/7 done)
  {
    _id: 'task_active_001',
    userId: 'user_active_001',
    taskId: 'get_phone_number',
    status: 'done',
    notes: 'Got KT prepaid SIM at the airport',
    updatedAt: now - 10 * day,
  },
  {
    _id: 'task_active_002',
    userId: 'user_active_001',
    taskId: 'register_arc',
    status: 'done',
    updatedAt: now - 7 * day,
  },
  {
    _id: 'task_active_003',
    userId: 'user_active_001',
    taskId: 'open_bank_account',
    status: 'in_progress',
    notes: 'Appointment at Shinhan next week',
    updatedAt: now - 1 * day,
  },
  {
    _id: 'task_active_004',
    userId: 'user_active_001',
    taskId: 'get_transit_card',
    status: 'done',
    updatedAt: now - 12 * day,
  },
  {
    _id: 'task_active_005',
    userId: 'user_active_001',
    taskId: 'register_health_insurance',
    status: 'not_started',
    updatedAt: now - 14 * day,
  },
  {
    _id: 'task_active_006',
    userId: 'user_active_001',
    taskId: 'find_housing',
    status: 'not_started',
    updatedAt: now - 14 * day,
  },
  {
    _id: 'task_active_007',
    userId: 'user_active_001',
    taskId: 'learn_emergency_numbers',
    status: 'not_started',
    updatedAt: now - 14 * day,
  },

  // Settled resident - all tasks complete
  ...FIRST_7_TASKS.map((taskId, index) => ({
    _id: `task_settled_${index}`,
    userId: 'user_settled_001',
    taskId,
    status: 'done' as const,
    updatedAt: now - (100 + index) * day,
  })),
];

// ============================================
// Helper functions
// ============================================

/**
 * Get a mock user by ID
 */
export function getMockUserById(id: string): MockUser | undefined {
  return mockUsers.find((user) => user._id === id);
}

/**
 * Get mock preferences by user ID
 */
export function getMockPreferencesByUserId(userId: string): MockPreferences | undefined {
  return mockPreferences.find((pref) => pref.userId === userId);
}

/**
 * Get mock task statuses by user ID
 */
export function getMockTaskStatusesByUserId(userId: string): MockTaskStatus[] {
  return mockTaskStatuses.filter((task) => task.userId === userId);
}

/**
 * Calculate First 7 Tasks progress for a user
 */
export function getFirst7TasksProgress(userId: string): {
  completed: number;
  total: number;
  percentage: number;
} {
  const userTasks = getMockTaskStatusesByUserId(userId);
  const completed = userTasks.filter((t) => t.status === 'done').length;
  const total = FIRST_7_TASKS.length;
  return {
    completed,
    total,
    percentage: Math.round((completed / total) * 100),
  };
}
