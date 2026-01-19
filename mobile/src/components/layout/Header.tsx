/**
 * Header - Sticky screen header with avatar, language toggle, notifications
 *
 * Provides consistent header styling across screens with support for:
 * - Logo + app name display
 * - User avatar with greeting
 * - Language toggle pill
 * - Notification bell with badge
 * - Custom left/right actions
 *
 * @module components/layout/Header
 */

import React, { ReactNode } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Globe, Bell, ChevronLeft } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Avatar } from '../ui/Avatar';
import { COLORS, LAYOUT } from '../../constants';

// =============================================================================
// Types
// =============================================================================

export type HeaderVariant = 'default' | 'transparent' | 'gradient';

export interface HeaderProps {
  /** Header title text */
  title?: string;
  /** Subtitle text (below title) */
  subtitle?: string;
  /** Variant style of the header */
  variant?: HeaderVariant;
  /** Show the Girugi logo + app name */
  showLogo?: boolean;
  /** Show user avatar with optional greeting */
  showAvatar?: boolean;
  /** User's name for greeting */
  userName?: string;
  /** User's avatar image URL */
  userAvatarUrl?: string;
  /** Show language toggle button */
  showLanguage?: boolean;
  /** Current language code */
  currentLanguage?: 'EN' | 'KR';
  /** Callback when language toggle is pressed */
  onLanguagePress?: () => void;
  /** Show notification bell */
  showNotifications?: boolean;
  /** Number of unread notifications */
  notificationCount?: number;
  /** Callback when notification bell is pressed */
  onNotificationPress?: () => void;
  /** Show back button on left */
  showBack?: boolean;
  /** Callback when back button is pressed */
  onBackPress?: () => void;
  /** Custom left action component */
  leftAction?: ReactNode;
  /** Custom right action component(s) */
  rightActions?: ReactNode;
  /** Whether to add safe area top padding (default: false - handled by PageContainer) */
  includeSafeArea?: boolean;
  /** Additional styles for the header container */
  style?: StyleProp<ViewStyle>;
}

// =============================================================================
// Sub-components
// =============================================================================

/**
 * Logo component with gradient background
 */
function Logo() {
  return (
    <View style={styles.logoContainer}>
      <LinearGradient
        colors={[COLORS.PRIMARY, COLORS.SECONDARY]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.logoIcon}
      >
        <Text style={styles.logoText}>G</Text>
      </LinearGradient>
      <Text style={styles.appName}>Girugi</Text>
    </View>
  );
}

/**
 * Language toggle pill button
 */
function LanguageToggle({
  language,
  onPress,
}: {
  language: 'EN' | 'KR';
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.languagePill}
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityLabel={`Current language: ${language}. Tap to switch.`}
      accessibilityRole="button"
    >
      <Globe size={12} color={COLORS.TEXT_SECONDARY} />
      <Text style={styles.languageText}>{language}</Text>
    </TouchableOpacity>
  );
}

/**
 * Notification bell with badge
 */
function NotificationBell({
  count = 0,
  onPress,
}: {
  count?: number;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.iconButton}
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityLabel={
        count > 0
          ? `${count} unread notifications. Tap to view.`
          : 'No new notifications. Tap to view.'
      }
      accessibilityRole="button"
    >
      <Bell size={20} color={COLORS.TEXT_SECONDARY} />
      {count > 0 && (
        <View style={styles.notificationBadge}>
          {count < 10 && (
            <Text style={styles.notificationCount}>{count}</Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

/**
 * Back button with chevron
 */
function BackButton({ onPress }: { onPress?: () => void }) {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityLabel="Go back"
      accessibilityRole="button"
    >
      <ChevronLeft size={24} color={COLORS.TEXT_PRIMARY} />
    </TouchableOpacity>
  );
}

/**
 * User greeting with avatar
 */
function UserGreeting({
  name,
  avatarUrl,
}: {
  name?: string;
  avatarUrl?: string;
}) {
  // Simple time-based greeting
  const hour = new Date().getHours();
  let greeting = 'Hello';
  if (hour < 12) greeting = 'Good Morning';
  else if (hour < 17) greeting = 'Good Afternoon';
  else greeting = 'Good Evening';

  return (
    <View style={styles.userGreeting}>
      <Avatar
        size="sm"
        name={name}
        imageUrl={avatarUrl}
        showStatus
        status="online"
      />
      <View style={styles.greetingText}>
        <Text style={styles.greetingLabel}>{greeting},</Text>
        <Text style={styles.userName}>{name || 'Guest'}</Text>
      </View>
    </View>
  );
}

// =============================================================================
// Main Component
// =============================================================================

/**
 * Header provides a consistent top navigation bar with various configurations.
 *
 * @example
 * // Home screen with logo, avatar, and notifications
 * <Header
 *   showLogo
 *   showAvatar
 *   userName="Sebastian"
 *   showLanguage
 *   currentLanguage="EN"
 *   onLanguagePress={toggleLanguage}
 *   showNotifications
 *   notificationCount={3}
 *   onNotificationPress={openNotifications}
 * />
 *
 * @example
 * // Detail screen with back button and title
 * <Header
 *   showBack
 *   onBackPress={goBack}
 *   title="Guide Details"
 * />
 *
 * @example
 * // Transparent header for onboarding
 * <Header
 *   variant="transparent"
 *   showLanguage
 *   currentLanguage="EN"
 *   onLanguagePress={toggleLanguage}
 * />
 */
export function Header({
  title,
  subtitle,
  variant = 'default',
  showLogo = false,
  showAvatar = false,
  userName,
  userAvatarUrl,
  showLanguage = false,
  currentLanguage = 'EN',
  onLanguagePress,
  showNotifications = false,
  notificationCount = 0,
  onNotificationPress,
  showBack = false,
  onBackPress,
  leftAction,
  rightActions,
  includeSafeArea = false,
  style,
}: HeaderProps) {
  const insets = useSafeAreaInsets();

  // Determine background style based on variant
  const containerStyle: ViewStyle[] = [
    styles.container,
    variant === 'default' && styles.containerDefault,
    variant === 'transparent' && styles.containerTransparent,
    includeSafeArea && { paddingTop: insets.top + 16 },
    style as ViewStyle,
  ].filter(Boolean) as ViewStyle[];

  // Render left section
  const renderLeft = () => {
    if (leftAction) return leftAction;
    if (showBack) return <BackButton onPress={onBackPress} />;
    if (showLogo) return <Logo />;
    if (showAvatar) {
      return <UserGreeting name={userName} avatarUrl={userAvatarUrl} />;
    }
    if (title) {
      return (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      );
    }
    return null;
  };

  // Render right section
  const renderRight = () => {
    if (rightActions) return rightActions;

    const actions: ReactNode[] = [];

    if (showLanguage) {
      actions.push(
        <LanguageToggle
          key="lang"
          language={currentLanguage}
          onPress={onLanguagePress}
        />
      );
    }

    if (showNotifications) {
      actions.push(
        <NotificationBell
          key="notif"
          count={notificationCount}
          onPress={onNotificationPress}
        />
      );
    }

    if (actions.length === 0) return null;

    return <View style={styles.rightActions}>{actions}</View>;
  };

  // Gradient variant
  if (variant === 'gradient') {
    return (
      <LinearGradient
        colors={[COLORS.PRIMARY, COLORS.INFO]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.container, styles.containerGradient, style]}
      >
        <View style={styles.content}>
          {renderLeft()}
          {renderRight()}
        </View>
      </LinearGradient>
    );
  }

  return (
    <View style={containerStyle}>
      <View style={styles.content}>
        {renderLeft()}
        {renderRight()}
      </View>
    </View>
  );
}

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: LAYOUT.PAGE_PADDING_X,
    paddingVertical: 16,
  },
  containerDefault: {
    backgroundColor: COLORS.BG_SURFACE,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  containerTransparent: {
    backgroundColor: 'transparent',
  },
  containerGradient: {
    // Gradient applied via LinearGradient
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // Logo
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.TEXT_ON_ACCENT,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
  },

  // User greeting
  userGreeting: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  greetingText: {
    flexDirection: 'column',
  },
  greetingLabel: {
    fontSize: 14,
    color: COLORS.TEXT_MUTED,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
  },

  // Title
  titleContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.TEXT_MUTED,
    marginTop: 2,
  },

  // Actions
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  // Language toggle
  languagePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: COLORS.BG_SURFACE_MUTED,
    borderRadius: 20,
  },
  languageText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.TEXT_SECONDARY,
  },

  // Icon button
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.BG_SURFACE_MUTED,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Notification badge
  notificationBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    minWidth: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.DANGER,
    borderWidth: 2,
    borderColor: COLORS.BG_SURFACE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationCount: {
    fontSize: 8,
    fontWeight: 'bold',
    color: COLORS.TEXT_ON_ACCENT,
  },

  // Back button
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
  },
});

export default Header;
