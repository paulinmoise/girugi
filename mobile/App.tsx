import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { ConvexProvider, ConvexReactClient, useQuery } from 'convex/react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { api } from '../convex/_generated/api';

// Import constants
import { COLORS, LAYOUT } from './src/constants';

// Initialize Convex client
const convex = new ConvexReactClient(
  process.env.EXPO_PUBLIC_CONVEX_URL as string
);

// Navigation types (will move to src/navigation in Phase 3)
type MainTabParamList = {
  Home: undefined;
  Guides: undefined;
  Discover: undefined;
  Events: undefined;
  Community: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

// =============================================================================
// Placeholder Screens (will be replaced in Phase 2)
// =============================================================================

function PlaceholderScreen({ title, color }: { title: string; color: string }) {
  return (
    <View style={[styles.screenContainer, { backgroundColor: COLORS.BG_APP }]}>
      <View style={[styles.placeholderIcon, { backgroundColor: color }]}>
        <Text style={styles.placeholderIconText}>{title[0]}</Text>
      </View>
      <Text style={styles.screenTitle}>{title}</Text>
      <Text style={styles.screenSubtitle}>Coming in Phase 2</Text>
    </View>
  );
}

function HomeScreen() {
  return <PlaceholderScreen title="Home" color={COLORS.PRIMARY} />;
}

function GuidesScreen() {
  return <PlaceholderScreen title="Guides" color={COLORS.INFO} />;
}

function DiscoverScreen() {
  return <PlaceholderScreen title="Discover" color={COLORS.SECONDARY} />;
}

function EventsScreen() {
  return <PlaceholderScreen title="Events" color={COLORS.WARNING} />;
}

function CommunityScreen() {
  return <PlaceholderScreen title="Community" color={COLORS.EXPERT} />;
}

// =============================================================================
// Dev Component: Convex Status (keep for development verification)
// =============================================================================

function ConvexStatus() {
  const ping = useQuery(api.test.ping);

  if (ping === undefined) {
    return (
      <View style={styles.statusContainer}>
        <ActivityIndicator size="small" color={COLORS.PRIMARY} />
        <Text style={styles.statusText}>Connecting to Convex...</Text>
      </View>
    );
  }

  return (
    <View style={styles.statusContainer}>
      <View style={[styles.statusDot, { backgroundColor: COLORS.SUCCESS }]} />
      <Text style={styles.statusText}>Convex: {ping.status}</Text>
    </View>
  );
}

// =============================================================================
// Home Screen with Convex Status (for dev)
// =============================================================================

function HomeScreenWithStatus() {
  return (
    <View style={[styles.screenContainer, { backgroundColor: COLORS.BG_APP }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <Text style={styles.logoText}>G</Text>
          </View>
          <Text style={styles.appName}>Girugi</Text>
        </View>
        <ConvexStatus />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.welcomeTitle}>Welcome to Girugi</Text>
        <Text style={styles.welcomeSubtitle}>
          Your bilingual Korea life hub
        </Text>

        {/* Feature preview cards */}
        <View style={styles.featureGrid}>
          <FeatureCard
            title="First 7 Tasks"
            description="Essential setup checklist"
            color={COLORS.PRIMARY}
          />
          <FeatureCard
            title="Guides"
            description="Step-by-step help"
            color={COLORS.INFO}
          />
          <FeatureCard
            title="Discover"
            description="Foreigner-friendly places"
            color={COLORS.SECONDARY}
          />
          <FeatureCard
            title="Events"
            description="Community meetups"
            color={COLORS.WARNING}
          />
        </View>

        <Text style={styles.devNote}>
          📱 Navigation shell ready{'\n'}
          🔧 Screens will be added in Phase 2
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

function FeatureCard({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: string;
}) {
  return (
    <View style={styles.featureCard}>
      <View style={[styles.featureIcon, { backgroundColor: color }]}>
        <Text style={styles.featureIconText}>{title[0]}</Text>
      </View>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  );
}

// =============================================================================
// Tab Navigator
// =============================================================================

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.TEXT_MUTED,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenWithStatus}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Guides"
        component={GuidesScreen}
        options={{
          tabBarLabel: 'Guides',
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarLabel: 'Discover',
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarLabel: 'Events',
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarLabel: 'Community',
        }}
      />
    </Tab.Navigator>
  );
}

// =============================================================================
// Root App Component
// =============================================================================

export default function App() {
  return (
    <SafeAreaProvider>
      <ConvexProvider client={convex}>
        <NavigationContainer>
          <MainTabs />
        </NavigationContainer>
      </ConvexProvider>
    </SafeAreaProvider>
  );
}

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create({
  // Screen containers
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: LAYOUT.PAGE_PADDING_X,
  },

  // Placeholder screen
  placeholderIcon: {
    width: 80,
    height: 80,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  placeholderIconText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.TEXT_ON_ACCENT,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 8,
  },
  screenSubtitle: {
    fontSize: 14,
    color: COLORS.TEXT_MUTED,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: LAYOUT.PAGE_PADDING_TOP,
    paddingBottom: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.PRIMARY,
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

  // Convex status
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: COLORS.BG_SURFACE,
    borderRadius: 20,
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    color: COLORS.TEXT_SECONDARY,
  },

  // Content
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 8,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    marginBottom: 32,
    textAlign: 'center',
  },

  // Feature grid
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: LAYOUT.GRID_GAP,
    justifyContent: 'center',
    marginBottom: 32,
  },
  featureCard: {
    width: 150,
    padding: LAYOUT.CARD_PADDING_SM,
    backgroundColor: COLORS.BG_SURFACE,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  featureIconText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.TEXT_ON_ACCENT,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 4,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 12,
    color: COLORS.TEXT_MUTED,
    textAlign: 'center',
  },

  // Dev note
  devNote: {
    fontSize: 12,
    color: COLORS.TEXT_MUTED,
    textAlign: 'center',
    lineHeight: 20,
    backgroundColor: COLORS.BG_SURFACE_MUTED,
    padding: 12,
    borderRadius: 8,
  },

  // Tab bar
  tabBar: {
    backgroundColor: COLORS.BG_SURFACE,
    borderTopWidth: 1,
    borderTopColor: COLORS.BORDER_DEFAULT,
    paddingTop: 8,
    paddingBottom: 8,
    height: LAYOUT.BOTTOM_NAV_HEIGHT,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: '500',
  },
});
