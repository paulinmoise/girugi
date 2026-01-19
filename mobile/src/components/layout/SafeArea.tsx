/**
 * SafeArea - Safe area wrapper handling notch/home indicator
 *
 * Wraps content in SafeAreaView from react-native-safe-area-context
 * with configurable edges and consistent app background.
 *
 * @module components/layout/SafeArea
 */

import React, { ReactNode } from 'react';
import { StyleSheet, ViewStyle, StyleProp } from 'react-native';
import {
  SafeAreaView,
  Edge,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { COLORS } from '../../constants';

// =============================================================================
// Types
// =============================================================================

export interface SafeAreaProps {
  /** Content to render inside the safe area */
  children: ReactNode;
  /** Which edges to apply safe area insets to */
  edges?: Edge[];
  /** Additional styles to apply to the container */
  style?: StyleProp<ViewStyle>;
  /** Background color override (defaults to app background) */
  backgroundColor?: string;
}

// =============================================================================
// Component
// =============================================================================

/**
 * SafeArea wraps content with safe area insets to handle notches,
 * home indicators, and status bars across iOS and Android devices.
 *
 * @example
 * // Full safe area (default - all edges)
 * <SafeArea>
 *   <Text>Content protected from notch and home indicator</Text>
 * </SafeArea>
 *
 * @example
 * // Custom edges (e.g., for screens with bottom nav)
 * <SafeArea edges={['top', 'left', 'right']}>
 *   <Text>Only top/sides protected, bottom handled elsewhere</Text>
 * </SafeArea>
 */
export function SafeArea({
  children,
  edges = ['top', 'bottom', 'left', 'right'],
  style,
  backgroundColor = COLORS.BG_APP,
}: SafeAreaProps) {
  return (
    <SafeAreaView
      edges={edges}
      style={[styles.container, { backgroundColor }, style]}
    >
      {children}
    </SafeAreaView>
  );
}

// =============================================================================
// Hook: useSafeInsets
// =============================================================================

/**
 * Custom hook to access safe area insets directly.
 * Useful when you need manual control over inset values.
 *
 * @example
 * const { top, bottom } = useSafeInsets();
 * const paddingTop = top + 16; // Add extra padding on top
 */
export function useSafeInsets() {
  return useSafeAreaInsets();
}

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SafeArea;
