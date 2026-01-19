/**
 * Card Component
 * 
 * Soft-first surface cards following style-guide.md
 * - Default: White background, subtle shadow, rounded-3xl
 * - Gradient: Colorful gradient background for hero/info cards
 */

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, LAYOUT } from '@/constants';

export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Card style variant */
  variant?: 'default' | 'gradient' | 'muted';
  /** Gradient colors (only for gradient variant) */
  gradientColors?: [string, string];
  /** Gradient direction */
  gradientDirection?: 'horizontal' | 'diagonal';
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Custom container style */
  style?: ViewStyle;
  /** Optional press handler (makes card touchable) */
  onPress?: () => void;
}

/**
 * Reusable card component with default and gradient variants.
 * 
 * @example
 * ```tsx
 * // Default white card
 * <Card padding="md">
 *   <Text>Card content</Text>
 * </Card>
 * 
 * // Gradient hero card
 * <Card variant="gradient" padding="lg">
 *   <Text>Hero content</Text>
 * </Card>
 * ```
 */
export function Card({
  children,
  variant = 'default',
  gradientColors,
  gradientDirection = 'diagonal',
  padding = 'md',
  style,
}: CardProps) {
  const getPaddingStyle = (): ViewStyle => {
    switch (padding) {
      case 'none':
        return { padding: 0 };
      case 'sm':
        return { padding: LAYOUT.CARD_PADDING_SM };
      case 'md':
        return { padding: LAYOUT.CARD_PADDING_MD };
      case 'lg':
        return { padding: LAYOUT.CARD_PADDING_LG };
      default:
        return { padding: LAYOUT.CARD_PADDING_MD };
    }
  };

  const paddingStyle = getPaddingStyle();

  // Gradient variant
  if (variant === 'gradient') {
    const colors = gradientColors || [COLORS.PRIMARY, COLORS.INFO];
    const gradientProps = gradientDirection === 'horizontal'
      ? { start: { x: 0, y: 0 }, end: { x: 1, y: 0 } }
      : { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } };

    return (
      <View style={[styles.cardBase, styles.gradientWrapper, style]}>
        <LinearGradient
          colors={colors}
          {...gradientProps}
          style={[styles.gradientContainer, paddingStyle]}
        >
          {/* Decorative blur circles for visual interest */}
          <View style={styles.decorativeCircleTop} />
          <View style={styles.decorativeCircleBottom} />
          {/* Content with z-index to appear above decorations */}
          <View style={styles.gradientContent}>{children}</View>
        </LinearGradient>
      </View>
    );
  }

  // Muted variant (subtle background)
  if (variant === 'muted') {
    return (
      <View style={[styles.cardBase, styles.mutedCard, paddingStyle, style]}>
        {children}
      </View>
    );
  }

  // Default white card
  return (
    <View style={[styles.cardBase, styles.defaultCard, paddingStyle, style]}>
      {children}
    </View>
  );
}

/**
 * Gradient Card with pre-configured hero styling
 * Commonly used for the First 7 Tasks hero card and plan summaries
 */
export function HeroCard({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) {
  return (
    <Card
      variant="gradient"
      gradientColors={[COLORS.PRIMARY, COLORS.INFO]}
      gradientDirection="diagonal"
      padding="lg"
      style={style}
    >
      {children}
    </Card>
  );
}

/**
 * Selection Card for onboarding choices
 * Shows selected state with border highlight
 */
export function SelectionCard({
  children,
  selected = false,
  onPress,
  gradientColors,
  style,
}: {
  children: React.ReactNode;
  selected?: boolean;
  onPress?: () => void;
  gradientColors?: [string, string];
  style?: ViewStyle;
}) {
  const colors = gradientColors || ['#DBEAFE', '#CFFAFE']; // blue-100 to cyan-100

  return (
    <View
      style={[
        styles.selectionCardWrapper,
        selected && styles.selectionCardSelected,
        style,
      ]}
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.selectionCardGradient, { padding: LAYOUT.CARD_PADDING_MD }]}
      >
        {children}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  // Base card styles
  cardBase: {
    borderRadius: 24, // rounded-3xl
    overflow: 'hidden',
  },

  // Default variant
  defaultCard: {
    backgroundColor: COLORS.BG_SURFACE,
    borderWidth: 1,
    borderColor: COLORS.BORDER_DEFAULT,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  // Muted variant
  mutedCard: {
    backgroundColor: COLORS.BG_SURFACE_MUTED,
    borderWidth: 1,
    borderColor: COLORS.BORDER_DEFAULT,
  },

  // Gradient variant
  gradientWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 4,
  },
  gradientContainer: {
    borderRadius: 24,
    position: 'relative',
    overflow: 'hidden',
  },
  gradientContent: {
    position: 'relative',
    zIndex: 10,
  },
  decorativeCircleTop: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  decorativeCircleBottom: {
    position: 'absolute',
    bottom: -40,
    left: -40,
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },

  // Selection card
  selectionCardWrapper: {
    borderRadius: 24,
    borderWidth: 2,
    borderColor: 'transparent',
    overflow: 'hidden',
  },
  selectionCardSelected: {
    borderColor: COLORS.PRIMARY,
  },
  selectionCardGradient: {
    borderRadius: 22, // Slightly smaller to account for border
  },
});

export default Card;
