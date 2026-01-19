/**
 * Types - Mobile-specific TypeScript types
 * 
 * Note: Shared types are in packages/shared/types
 * This file contains mobile-only types like:
 * - Navigation prop types
 * - Component prop types
 * - Screen-specific state types
 */

// Re-export shared types for convenience
// Note: In Phase 4, uncomment when path aliases work
// export * from '@girugi/shared/types';

// Navigation state types
export interface NavigationState {
  isAuthenticated: boolean;
  hasCompletedOnboarding: boolean;
}

// Onboarding step tracking
export type OnboardingStep =
  | 'welcome'
  | 'language'
  | 'city'
  | 'situation'
  | 'dietary'
  | 'interests'
  | 'notifications'
  | 'planReady'
  | 'verification';

export interface OnboardingState {
  currentStep: OnboardingStep;
  completedSteps: OnboardingStep[];
  skippedSteps: OnboardingStep[];
}

// Screen prop types will be added as screens are created
export {};
