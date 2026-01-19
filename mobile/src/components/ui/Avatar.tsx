/**
 * Avatar Component
 * 
 * User avatar with image support, initials fallback, and size variants
 * Following style-guide.md patterns
 */

import React from 'react';
import { View, Text, Image, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '@/constants';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  /** Image source URI */
  image?: string;
  /** Initials to show when no image (1-2 characters) */
  initials?: string;
  /** Size variant */
  size?: AvatarSize;
  /** Show online status indicator */
  showStatus?: boolean;
  /** Online/offline status */
  status?: 'online' | 'offline' | 'away';
  /** Custom background color (used when no image) */
  backgroundColor?: string;
  /** Use gradient background */
  useGradient?: boolean;
  /** Custom container style */
  style?: ViewStyle;
}

/**
 * Avatar component for user representation.
 * 
 * @example
 * ```tsx
 * // With image
 * <Avatar image="https://example.com/photo.jpg" size="lg" />
 * 
 * // With initials and status
 * <Avatar initials="JD" size="md" showStatus status="online" />
 * ```
 */
export function Avatar({
  image,
  initials,
  size = 'md',
  showStatus = false,
  status = 'offline',
  backgroundColor,
  useGradient = false,
  style,
}: AvatarProps) {
  const getSizeConfig = () => {
    switch (size) {
      case 'xs':
        return {
          container: 24,
          fontSize: 10,
          statusDot: 6,
          statusOffset: -1,
        };
      case 'sm':
        return {
          container: 32,
          fontSize: 12,
          statusDot: 8,
          statusOffset: -1,
        };
      case 'md':
        return {
          container: 40,
          fontSize: 14,
          statusDot: 10,
          statusOffset: -2,
        };
      case 'lg':
        return {
          container: 56,
          fontSize: 18,
          statusDot: 12,
          statusOffset: -2,
        };
      case 'xl':
        return {
          container: 80,
          fontSize: 24,
          statusDot: 16,
          statusOffset: -2,
        };
      default:
        return {
          container: 40,
          fontSize: 14,
          statusDot: 10,
          statusOffset: -2,
        };
    }
  };

  const sizeConfig = getSizeConfig();

  const getStatusColor = () => {
    switch (status) {
      case 'online':
        return COLORS.SUCCESS;
      case 'away':
        return COLORS.WARNING;
      case 'offline':
      default:
        return COLORS.TEXT_MUTED;
    }
  };

  // Get initials from name if not provided
  const displayInitials = initials?.slice(0, 2).toUpperCase() || '?';

  // Render with image
  if (image) {
    return (
      <View style={[styles.container, style]}>
        <Image
          source={{ uri: image }}
          style={[
            styles.image,
            {
              width: sizeConfig.container,
              height: sizeConfig.container,
              borderRadius: sizeConfig.container / 2,
            },
          ]}
        />
        {showStatus && (
          <View
            style={[
              styles.statusDot,
              {
                width: sizeConfig.statusDot,
                height: sizeConfig.statusDot,
                borderRadius: sizeConfig.statusDot / 2,
                bottom: sizeConfig.statusOffset,
                right: sizeConfig.statusOffset,
                backgroundColor: getStatusColor(),
              },
            ]}
          />
        )}
      </View>
    );
  }

  // Render with initials (gradient or solid background)
  const containerStyle = {
    width: sizeConfig.container,
    height: sizeConfig.container,
    borderRadius: sizeConfig.container / 2,
  };

  if (useGradient) {
    return (
      <View style={[styles.container, style]}>
        <LinearGradient
          colors={[COLORS.PRIMARY, COLORS.SECONDARY]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.initialsContainer, containerStyle]}
        >
          <Text
            style={[styles.initialsText, { fontSize: sizeConfig.fontSize }]}
          >
            {displayInitials}
          </Text>
        </LinearGradient>
        {showStatus && (
          <View
            style={[
              styles.statusDot,
              {
                width: sizeConfig.statusDot,
                height: sizeConfig.statusDot,
                borderRadius: sizeConfig.statusDot / 2,
                bottom: sizeConfig.statusOffset,
                right: sizeConfig.statusOffset,
                backgroundColor: getStatusColor(),
              },
            ]}
          />
        )}
      </View>
    );
  }

  // Solid background
  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.initialsContainer,
          containerStyle,
          { backgroundColor: backgroundColor || COLORS.PRIMARY },
        ]}
      >
        <Text style={[styles.initialsText, { fontSize: sizeConfig.fontSize }]}>
          {displayInitials}
        </Text>
      </View>
      {showStatus && (
        <View
          style={[
            styles.statusDot,
            {
              width: sizeConfig.statusDot,
              height: sizeConfig.statusDot,
              borderRadius: sizeConfig.statusDot / 2,
              bottom: sizeConfig.statusOffset,
              right: sizeConfig.statusOffset,
              backgroundColor: getStatusColor(),
            },
          ]}
        />
      )}
    </View>
  );
}

/**
 * Avatar Group - Stack of avatars with overlap
 */
export function AvatarGroup({
  avatars,
  max = 4,
  size = 'sm',
  style,
}: {
  avatars: Array<{ image?: string; initials?: string }>;
  max?: number;
  size?: AvatarSize;
  style?: ViewStyle;
}) {
  const visibleAvatars = avatars.slice(0, max);
  const extraCount = avatars.length - max;

  const getSizeConfig = () => {
    switch (size) {
      case 'xs':
        return { container: 24, overlap: -8 };
      case 'sm':
        return { container: 32, overlap: -10 };
      case 'md':
        return { container: 40, overlap: -12 };
      case 'lg':
        return { container: 56, overlap: -16 };
      default:
        return { container: 32, overlap: -10 };
    }
  };

  const config = getSizeConfig();

  return (
    <View style={[styles.groupContainer, style]}>
      {visibleAvatars.map((avatar, index) => (
        <View
          key={index}
          style={[
            styles.groupAvatarWrapper,
            index > 0 && { marginLeft: config.overlap },
            { zIndex: visibleAvatars.length - index },
          ]}
        >
          <Avatar
            image={avatar.image}
            initials={avatar.initials}
            size={size}
            useGradient={!avatar.image}
          />
        </View>
      ))}
      {extraCount > 0 && (
        <View
          style={[
            styles.extraCount,
            {
              width: config.container,
              height: config.container,
              borderRadius: config.container / 2,
              marginLeft: config.overlap,
            },
          ]}
        >
          <Text style={styles.extraCountText}>+{extraCount}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    backgroundColor: COLORS.BG_SURFACE_MUTED,
  },
  initialsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initialsText: {
    color: COLORS.TEXT_ON_ACCENT,
    fontWeight: 'bold',
  },
  statusDot: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: COLORS.BG_SURFACE,
  },

  // Avatar Group
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupAvatarWrapper: {
    borderWidth: 2,
    borderColor: COLORS.BG_SURFACE,
    borderRadius: 100,
  },
  extraCount: {
    backgroundColor: COLORS.BG_SURFACE_MUTED,
    borderWidth: 2,
    borderColor: COLORS.BG_SURFACE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  extraCountText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.TEXT_SECONDARY,
  },
});

export default Avatar;
