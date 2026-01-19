/**
 * Navigation - Navigation configuration and types
 * 
 * Contains:
 * - RootNavigator (auth vs main)
 * - TabNavigator (Home, Guides, Discover, Events, Community)
 * - Stack navigators per tab
 * - Navigation types and param lists
 * 
 * Full navigation will be configured in Phase 3: Task 3.1
 */

// Navigation types
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  Onboarding: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Guides: undefined;
  Discover: undefined;
  Events: undefined;
  Community: undefined;
};

// Placeholder for navigator exports
export {};
