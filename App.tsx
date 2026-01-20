import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from './src/hooks/useFonts';
import { colors, typography, spacing, layout, shadows } from './src/theme';

// Keep splash screen visible while fonts load
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded, fontError } = useFonts();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Show loading state while fonts load
  if (!fontsLoaded && !fontError) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']} onLayout={onLayoutRootView}>
        <StatusBar style="light" />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GroceryCalc</Text>
        </View>

        {/* Main Content Area */}
        <View style={styles.content}>
          <View style={styles.emptyState}>
            <View style={styles.emptyIconContainer}>
              <Text style={styles.emptyIcon}>🛒</Text>
            </View>
            <Text style={styles.emptyTitle}>Ready to shop!</Text>
            <Text style={styles.emptySubtitle}>
              Add items to start tracking{'\n'}your grocery total
            </Text>
          </View>
        </View>

        {/* Total Bar */}
        <View style={styles.totalBar}>
          <View style={styles.totalContent}>
            <View style={styles.itemCount}>
              <Text style={styles.itemCountLabel}>ITEMS</Text>
              <Text style={styles.itemCountValue}>0</Text>
            </View>
            <View style={styles.totalAmount}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>₱0.00</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Header - Bold sage green with display font
  header: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    paddingHorizontal: layout.screenPadding,
    ...shadows.primary,
  },
  headerTitle: {
    ...typography.display.medium,
    color: colors.textInverse,
    textAlign: 'center',
  },

  // Content area
  content: {
    flex: 1,
    paddingHorizontal: layout.screenPadding,
  },

  // Empty State - Warm, inviting
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 60,
  },
  emptyIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xxl,
    ...shadows.md,
  },
  emptyIcon: {
    fontSize: 48,
  },
  emptyTitle: {
    ...typography.display.small,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  emptySubtitle: {
    ...typography.body.medium,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },

  // Total Bar - Elevated, prominent
  totalBar: {
    backgroundColor: colors.surface,
    paddingVertical: spacing.xl,
    paddingHorizontal: layout.screenPadding,
    borderTopLeftRadius: spacing.xxl,
    borderTopRightRadius: spacing.xxl,
    ...shadows.lg,
  },
  totalContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  itemCount: {
    alignItems: 'flex-start',
  },
  itemCountLabel: {
    ...typography.label.small,
    color: colors.textMuted,
    marginBottom: spacing.xs,
  },
  itemCountValue: {
    ...typography.display.small,
    color: colors.textSecondary,
  },
  totalAmount: {
    alignItems: 'flex-end',
  },
  totalLabel: {
    ...typography.label.medium,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  totalValue: {
    ...typography.price.large,
    color: colors.text,
  },
});
