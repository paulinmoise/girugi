/**
 * Button Component
 * 
 * Primary and secondary button variants following style-guide.md
 * - Primary: Gradient background (chart-1 to chart-2), white text
 * - Secondary: White background, gray border, gray text
 * - Supports: disabled, loading states
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, LAYOUT, ANIMATION } from '@/constants';

export interface ButtonProps {
  /** Button text content */
  children: React.ReactNode;
  /** Button style variant */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Disabled state */
  disabled?: boolean;
  /** Loading state - shows spinner */
  loading?: boolean;
  /** Press handler */
  onPress?: () => void;
  /** Full width button */
  fullWidth?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Optional icon to show before text */
  icon?: React.ReactNode;
  /** Custom container style */
  style?: ViewStyle;
}

/**
 * Reusable button component with primary, secondary, and ghost variants.
 * 
 * @example
 * ```tsx
 * <Button variant="primary" onPress={handleSubmit}>
 *   Get Started
 * </Button>
 * 
 * <Button variant="secondary" loading>
 *   Loading...
 * </Button>
 * ```
 */
export function Button({
  children,
  variant = 'primary',
  disabled = false,
  loading = false,
  onPress,
  fullWidth = true,
  size = 'lg',
  icon,
  style,
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const getSizeStyles = (): { container: ViewStyle; text: TextStyle } => {
    switch (size) {
      case 'sm':
        return {
          container: { paddingVertical: 8, paddingHorizontal: 16 },
          text: { fontSize: 14 },
        };
      case 'md':
        return {
          container: { paddingVertical: 12, paddingHorizontal: 20 },
          text: { fontSize: 15 },
        };
      case 'lg':
      default:
        return {
          container: { paddingVertical: 16, paddingHorizontal: 24 },
          text: { fontSize: 16 },
        };
    }
  };

  const sizeStyles = getSizeStyles();

  // Primary button with gradient background
  if (variant === 'primary') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={isDisabled}
        activeOpacity={0.8}
        style={[
          styles.buttonBase,
          fullWidth && styles.fullWidth,
          isDisabled && styles.buttonDisabled,
          style,
        ]}
      >
        {isDisabled ? (
          <View
            style={[
              styles.primaryDisabledContainer,
              sizeStyles.container,
              styles.contentRow,
            ]}
          >
            {loading ? (
              <ActivityIndicator
                size="small"
                color={COLORS.TEXT_MUTED}
                style={styles.spinner}
              />
            ) : icon ? (
              <View style={styles.iconContainer}>{icon}</View>
            ) : null}
            <Text style={[styles.primaryDisabledText, sizeStyles.text]}>
              {children}
            </Text>
          </View>
        ) : (
          <LinearGradient
            colors={[COLORS.PRIMARY, COLORS.SECONDARY]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.gradientContainer, sizeStyles.container, styles.contentRow]}
          >
            {loading ? (
              <ActivityIndicator
                size="small"
                color={COLORS.TEXT_ON_ACCENT}
                style={styles.spinner}
              />
            ) : icon ? (
              <View style={styles.iconContainer}>{icon}</View>
            ) : null}
            <Text style={[styles.primaryText, sizeStyles.text]}>{children}</Text>
          </LinearGradient>
        )}
      </TouchableOpacity>
    );
  }

  // Secondary button with white background and border
  if (variant === 'secondary') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={isDisabled}
        activeOpacity={0.7}
        style={[
          styles.buttonBase,
          styles.secondaryContainer,
          sizeStyles.container,
          fullWidth && styles.fullWidth,
          isDisabled && styles.secondaryDisabled,
          style,
        ]}
      >
        <View style={styles.contentRow}>
          {loading ? (
            <ActivityIndicator
              size="small"
              color={isDisabled ? COLORS.TEXT_MUTED : COLORS.TEXT_SECONDARY}
              style={styles.spinner}
            />
          ) : icon ? (
            <View style={styles.iconContainer}>{icon}</View>
          ) : null}
          <Text
            style={[
              styles.secondaryText,
              sizeStyles.text,
              isDisabled && styles.secondaryTextDisabled,
            ]}
          >
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  // Ghost button (text only, no background)
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
      style={[
        styles.buttonBase,
        styles.ghostContainer,
        sizeStyles.container,
        fullWidth && styles.fullWidth,
        style,
      ]}
    >
      <View style={styles.contentRow}>
        {loading ? (
          <ActivityIndicator
            size="small"
            color={isDisabled ? COLORS.TEXT_MUTED : COLORS.PRIMARY}
            style={styles.spinner}
          />
        ) : icon ? (
          <View style={styles.iconContainer}>{icon}</View>
        ) : null}
        <Text
          style={[
            styles.ghostText,
            sizeStyles.text,
            isDisabled && styles.ghostTextDisabled,
          ]}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    borderRadius: 16, // rounded-2xl
    overflow: 'hidden',
  },
  fullWidth: {
    width: '100%',
  },
  buttonDisabled: {
    opacity: 1, // We handle disabled styling per variant
  },

  // Content layout
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: 8,
  },
  spinner: {
    marginRight: 8,
  },

  // Primary variant
  gradientContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  primaryText: {
    color: COLORS.TEXT_ON_ACCENT,
    fontWeight: 'bold',
  },
  primaryDisabledContainer: {
    backgroundColor: '#E5E7EB', // gray-200
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryDisabledText: {
    color: '#9CA3AF', // gray-400
    fontWeight: 'bold',
  },

  // Secondary variant
  secondaryContainer: {
    backgroundColor: COLORS.BG_SURFACE,
    borderWidth: 2,
    borderColor: COLORS.BORDER_STRONG,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  secondaryText: {
    color: COLORS.TEXT_SECONDARY,
    fontWeight: '600',
  },
  secondaryDisabled: {
    backgroundColor: COLORS.BG_SURFACE_MUTED,
    borderColor: COLORS.BORDER_DEFAULT,
  },
  secondaryTextDisabled: {
    color: COLORS.TEXT_MUTED,
  },

  // Ghost variant
  ghostContainer: {
    backgroundColor: 'transparent',
  },
  ghostText: {
    color: COLORS.PRIMARY,
    fontWeight: '600',
  },
  ghostTextDisabled: {
    color: COLORS.TEXT_MUTED,
  },
});

export default Button;
