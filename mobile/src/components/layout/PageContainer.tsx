/**
 * PageContainer - Standard page wrapper with padding and scroll support
 *
 * Combines SafeArea with optional scroll view and consistent padding.
 * Handles bottom nav clearance automatically.
 *
 * @module components/layout/PageContainer
 */

import React, { ReactNode } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ViewStyle,
  StyleProp,
  RefreshControl,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Edge } from 'react-native-safe-area-context';
import { SafeArea } from './SafeArea';
import { COLORS, LAYOUT } from '../../constants';

// =============================================================================
// Types
// =============================================================================

export interface PageContainerProps {
  /** Content to render inside the page */
  children: ReactNode;
  /** Whether content should be scrollable (default: true) */
  scrollable?: boolean;
  /** Whether to apply horizontal padding (default: true) */
  padded?: boolean;
  /** Additional styles for the content container */
  style?: StyleProp<ViewStyle>;
  /** Header component to render above scrollable content */
  header?: ReactNode;
  /** Footer component to render below scrollable content (before bottom nav space) */
  footer?: ReactNode;
  /** Whether to add bottom padding for bottom nav clearance (default: true) */
  hasBottomNav?: boolean;
  /** Safe area edges to apply (default: top, left, right - bottom handled by nav clearance) */
  edges?: Edge[];
  /** Background color override */
  backgroundColor?: string;
  /** Enable pull-to-refresh functionality */
  refreshing?: boolean;
  /** Callback when pull-to-refresh is triggered */
  onRefresh?: () => void;
  /** Whether to avoid keyboard (useful for forms) */
  keyboardAvoiding?: boolean;
  /** Content container style for ScrollView */
  contentContainerStyle?: StyleProp<ViewStyle>;
}

// =============================================================================
// Component
// =============================================================================

/**
 * PageContainer provides a consistent page wrapper with:
 * - Safe area handling (notch, status bar)
 * - Optional scrolling with pull-to-refresh
 * - Consistent horizontal padding
 * - Bottom nav clearance
 * - Keyboard avoiding behavior
 *
 * @example
 * // Basic scrollable page
 * <PageContainer>
 *   <Text>Page content here</Text>
 * </PageContainer>
 *
 * @example
 * // Non-scrollable page with custom edges
 * <PageContainer scrollable={false} edges={['top']}>
 *   <Text>Fixed content</Text>
 * </PageContainer>
 *
 * @example
 * // Page with pull-to-refresh
 * <PageContainer
 *   refreshing={isRefreshing}
 *   onRefresh={handleRefresh}
 * >
 *   <Text>Pull down to refresh</Text>
 * </PageContainer>
 */
export function PageContainer({
  children,
  scrollable = true,
  padded = true,
  style,
  header,
  footer,
  hasBottomNav = true,
  edges = ['top', 'left', 'right'],
  backgroundColor = COLORS.BG_APP,
  refreshing,
  onRefresh,
  keyboardAvoiding = false,
  contentContainerStyle,
}: PageContainerProps) {
  // Build content container style
  const contentStyle: ViewStyle[] = [
    styles.content,
    padded && styles.padded,
    hasBottomNav && styles.bottomNavClearance,
    style as ViewStyle,
  ].filter(Boolean) as ViewStyle[];

  // Build scroll content container style
  const scrollContentStyle: ViewStyle[] = [
    styles.scrollContent,
    padded && styles.padded,
    hasBottomNav && styles.bottomNavClearance,
    contentContainerStyle as ViewStyle,
  ].filter(Boolean) as ViewStyle[];

  // Render content based on scrollable prop
  const renderContent = () => {
    if (scrollable) {
      return (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={scrollContentStyle}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          refreshControl={
            onRefresh ? (
              <RefreshControl
                refreshing={refreshing ?? false}
                onRefresh={onRefresh}
                tintColor={COLORS.PRIMARY}
                colors={[COLORS.PRIMARY]}
              />
            ) : undefined
          }
        >
          {children}
        </ScrollView>
      );
    }

    return <View style={contentStyle}>{children}</View>;
  };

  // Wrap with keyboard avoiding if needed
  const renderWithKeyboardAvoiding = (content: ReactNode) => {
    if (keyboardAvoiding) {
      return (
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
          {content}
        </KeyboardAvoidingView>
      );
    }
    return content;
  };

  return (
    <SafeArea edges={edges} backgroundColor={backgroundColor}>
      {header}
      {renderWithKeyboardAvoiding(
        <>
          {renderContent()}
          {footer}
        </>
      )}
    </SafeArea>
  );
}

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
  },
  padded: {
    paddingHorizontal: LAYOUT.PAGE_PADDING_X,
  },
  bottomNavClearance: {
    // Bottom nav height + margin + extra padding
    paddingBottom: LAYOUT.BOTTOM_NAV_HEIGHT + LAYOUT.BOTTOM_NAV_MARGIN + 16,
  },
});

export default PageContainer;
