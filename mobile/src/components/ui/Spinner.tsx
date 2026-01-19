/**
 * Spinner Component
 * 
 * Loading indicator with size and color variants
 * Following style-guide.md patterns
 */

import React from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { COLORS } from '@/constants';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps {
  /** Size variant */
  size?: SpinnerSize;
  /** Custom color (defaults to PRIMARY) */
  color?: string;
  /** Optional label below spinner */
  label?: string;
  /** Container style */
  style?: ViewStyle;
}

/**
 * Loading spinner component.
 * 
 * @example
 * ```tsx
 * <Spinner size="lg" />
 * 
 * <Spinner size="md" label="Loading..." />
 * ```
 */
export function Spinner({
  size = 'md',
  color,
  label,
  style,
}: SpinnerProps) {
  const getActivityIndicatorSize = (): 'small' | 'large' => {
    return size === 'sm' ? 'small' : 'large';
  };

  const spinnerColor = color || COLORS.PRIMARY;

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator
        size={getActivityIndicatorSize()}
        color={spinnerColor}
      />
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
}

/**
 * Full screen loading overlay
 */
export function LoadingOverlay({
  visible,
  label,
}: {
  visible: boolean;
  label?: string;
}) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.overlayContent}>
        <Spinner size="lg" label={label} />
      </View>
    </View>
  );
}

/**
 * Inline loading state for content areas
 */
export function LoadingState({
  label = 'Loading...',
  style,
}: {
  label?: string;
  style?: ViewStyle;
}) {
  return (
    <View style={[styles.loadingState, style]}>
      <Spinner size="md" />
      <Text style={styles.loadingStateText}>{label}</Text>
    </View>
  );
}

/**
 * Skeleton loader for content placeholders
 */
export function Skeleton({
  width,
  height,
  borderRadius = 8,
  style,
}: {
  width?: number | `${number}%`;
  height?: number;
  borderRadius?: number;
  style?: ViewStyle;
}) {
  return (
    <View
      style={[
        styles.skeleton,
        {
          width: width ?? '100%',
          height: height ?? 16,
          borderRadius,
        },
        style,
      ]}
    />
  );
}

/**
 * Card skeleton for loading states
 */
export function CardSkeleton({ style }: { style?: ViewStyle }) {
  return (
    <View style={[styles.cardSkeleton, style]}>
      <View style={styles.cardSkeletonHeader}>
        <Skeleton width={48} height={48} borderRadius={12} />
        <View style={styles.cardSkeletonHeaderText}>
          <Skeleton width={120} height={16} borderRadius={4} />
          <Skeleton
            width={80}
            height={12}
            borderRadius={4}
            style={{ marginTop: 8 }}
          />
        </View>
      </View>
      <Skeleton height={12} borderRadius={4} style={{ marginTop: 16 }} />
      <Skeleton
        width="75%"
        height={12}
        borderRadius={4}
        style={{ marginTop: 8 }}
      />
    </View>
  );
}

/**
 * List item skeleton for loading states
 */
export function ListItemSkeleton({ style }: { style?: ViewStyle }) {
  return (
    <View style={[styles.listItemSkeleton, style]}>
      <Skeleton width={40} height={40} borderRadius={10} />
      <View style={styles.listItemSkeletonContent}>
        <Skeleton width="70%" height={14} borderRadius={4} />
        <Skeleton
          width="50%"
          height={12}
          borderRadius={4}
          style={{ marginTop: 6 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Basic spinner
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    marginTop: 12,
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'center',
  },

  // Overlay
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  overlayContent: {
    backgroundColor: COLORS.BG_SURFACE,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },

  // Loading state
  loadingState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  loadingStateText: {
    marginTop: 16,
    fontSize: 14,
    color: COLORS.TEXT_MUTED,
  },

  // Skeleton
  skeleton: {
    backgroundColor: COLORS.BORDER_DEFAULT,
    overflow: 'hidden',
  },

  // Card skeleton
  cardSkeleton: {
    backgroundColor: COLORS.BG_SURFACE,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.BORDER_DEFAULT,
  },
  cardSkeletonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardSkeletonHeaderText: {
    marginLeft: 12,
    flex: 1,
  },

  // List item skeleton
  listItemSkeleton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: COLORS.BG_SURFACE,
    borderRadius: 12,
  },
  listItemSkeletonContent: {
    marginLeft: 12,
    flex: 1,
  },
});

export default Spinner;
