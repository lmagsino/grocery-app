import { StyleSheet, View, Text } from 'react-native';
import { colors, typography, spacing, shadows } from '../theme';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  icon?: string;
}

/**
 * Warm, inviting empty state with circular icon container
 * Uses display font for title, body font for subtitle
 */
export function EmptyState({
  title = 'Ready to shop!',
  subtitle = 'Add items to start tracking\nyour grocery total',
  icon = '🛒',
}: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
    paddingHorizontal: spacing.xxl,
  },

  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xxl,
    ...shadows.md,
  },
  icon: {
    fontSize: 56,
  },

  title: {
    ...typography.display.small,
    color: colors.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  subtitle: {
    ...typography.body.medium,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
});
