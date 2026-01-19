/**
 * Badge Component
 * 
 * Pill-style badges for status indicators, step counters, and labels
 * Following style-guide.md patterns
 */

import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS } from '@/constants';

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'muted';

export interface BadgeProps {
  /** Badge content */
  children: React.ReactNode;
  /** Style variant */
  variant?: BadgeVariant;
  /** Size variant */
  size?: 'sm' | 'md';
  /** Optional icon before text */
  icon?: React.ReactNode;
  /** Custom container style */
  style?: ViewStyle;
  /** Custom text style */
  textStyle?: TextStyle;
}

/**
 * Badge component for status indicators and labels.
 * 
 * @example
 * ```tsx
 * <Badge variant="success" icon={<CheckIcon />}>
 *   Verified
 * </Badge>
 * 
 * <Badge variant="muted" size="sm">
 *   Step 2 of 9
 * </Badge>
 * ```
 */
export function Badge({
  children,
  variant = 'default',
  size = 'md',
  icon,
  style,
  textStyle,
}: BadgeProps) {
  const getVariantStyles = (): {
    container: ViewStyle;
    text: TextStyle;
  } => {
    switch (variant) {
      case 'primary':
        return {
          container: { backgroundColor: COLORS.PRIMARY },
          text: { color: COLORS.TEXT_ON_ACCENT },
        };
      case 'success':
        return {
          container: { backgroundColor: '#DCFCE7' }, // green-100
          text: { color: '#15803D' }, // green-700
        };
      case 'warning':
        return {
          container: { backgroundColor: '#FEF3C7' }, // amber-100
          text: { color: '#B45309' }, // amber-700
        };
      case 'danger':
        return {
          container: { backgroundColor: '#FEE2E2' }, // red-100
          text: { color: '#B91C1C' }, // red-700
        };
      case 'info':
        return {
          container: { backgroundColor: '#DBEAFE' }, // blue-100
          text: { color: '#1D4ED8' }, // blue-700
        };
      case 'muted':
        return {
          container: {
            backgroundColor: COLORS.BG_SURFACE,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 1,
          },
          text: { color: COLORS.TEXT_MUTED },
        };
      case 'default':
      default:
        return {
          container: { backgroundColor: COLORS.BG_SURFACE_MUTED },
          text: { color: COLORS.TEXT_SECONDARY },
        };
    }
  };

  const variantStyles = getVariantStyles();

  const sizeStyles = size === 'sm'
    ? { paddingVertical: 4, paddingHorizontal: 8, fontSize: 10 }
    : { paddingVertical: 6, paddingHorizontal: 12, fontSize: 12 };

  return (
    <View
      style={[
        styles.container,
        variantStyles.container,
        { paddingVertical: sizeStyles.paddingVertical, paddingHorizontal: sizeStyles.paddingHorizontal },
        style,
      ]}
    >
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text
        style={[
          styles.text,
          variantStyles.text,
          { fontSize: sizeStyles.fontSize },
          textStyle,
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

/**
 * Step Badge - For onboarding progress indication
 */
export function StepBadge({
  current,
  total,
  style,
}: {
  current: number;
  total: number;
  style?: ViewStyle;
}) {
  return (
    <Badge variant="muted" size="sm" style={style}>
      Step {current} of {total}
    </Badge>
  );
}

/**
 * Status Badge - Pre-configured for common status types
 */
export function StatusBadge({
  status,
  style,
}: {
  status: 'pending' | 'verified' | 'rejected' | 'active' | 'inactive';
  style?: ViewStyle;
}) {
  const statusConfig = {
    pending: { variant: 'warning' as const, label: 'Pending' },
    verified: { variant: 'success' as const, label: 'Verified' },
    rejected: { variant: 'danger' as const, label: 'Rejected' },
    active: { variant: 'success' as const, label: 'Active' },
    inactive: { variant: 'muted' as const, label: 'Inactive' },
  };

  const config = statusConfig[status];

  return (
    <Badge variant={config.variant} style={style}>
      {config.label}
    </Badge>
  );
}

/**
 * Translation Badge - Shows when content is in fallback language
 */
export function TranslationBadge({
  language = 'en',
  style,
}: {
  language?: 'en' | 'ko';
  style?: ViewStyle;
}) {
  const label = language === 'en'
    ? 'Translation pending / 번역 준비 중'
    : '번역 준비 중 / Translation pending';

  return (
    <Badge variant="warning" size="sm" style={style}>
      {label}
    </Badge>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100, // rounded-full
    alignSelf: 'flex-start',
  },
  iconContainer: {
    marginRight: 4,
  },
  text: {
    fontWeight: '500',
  },
});

export default Badge;
