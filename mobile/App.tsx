import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { ConvexProvider, ConvexReactClient, useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';

// Initialize Convex client
const convex = new ConvexReactClient(
  process.env.EXPO_PUBLIC_CONVEX_URL as string
);

// Test component to verify Convex connection
function ConvexStatus() {
  const ping = useQuery(api.test.ping);

  if (ping === undefined) {
    return <ActivityIndicator size="small" color="#0000ff" />;
  }

  return (
    <View style={styles.statusContainer}>
      <Text style={styles.statusText}>Convex Status: {ping.status}</Text>
      <Text style={styles.messageText}>{ping.message}</Text>
    </View>
  );
}

export default function App() {
  return (
    <ConvexProvider client={convex}>
      <View style={styles.container}>
        <Text style={styles.title}>Girugi</Text>
        <Text style={styles.subtitle}>Korea Life Hub for Foreigners</Text>
        <ConvexStatus />
        <StatusBar style="auto" />
      </View>
    </ConvexProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  statusContainer: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#28a745',
  },
  messageText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});
