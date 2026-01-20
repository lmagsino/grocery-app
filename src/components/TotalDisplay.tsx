import { StyleSheet, View, Text } from 'react-native';
import { colors, typography, spacing, layout, shadows, borderRadius } from '../theme';
import { formatPeso } from '../utils/formatCurrency';

interface TotalDisplayProps {
  itemCount: number;
  total: number;
}

/**
 * Elevated total bar with prominent price display
 * Features asymmetric layout: item count left, total right
 * Uses Fraunces display font for the total amount
 */
export function TotalDisplay({ itemCount, total }: TotalDisplayProps) {
  return (
    <View style={styles.container}>
      {/* Dashed receipt line */}
      <View style={styles.receiptLine}>
        {Array.from({ length: 30 }).map((_, i) => (
          <View key={i} style={styles.dash} />
        ))}
      </View>

      <View style={styles.content}>
        <View style={styles.itemCountSection}>
          <Text style={styles.itemCountLabel}>ITEMS</Text>
          <Text style={styles.itemCountValue}>{itemCount}</Text>
        </View>

        <View style={styles.totalSection}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>{formatPeso(total)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
    paddingHorizontal: layout.screenPadding,
    borderTopLeftRadius: borderRadius.xxl,
    borderTopRightRadius: borderRadius.xxl,
    ...shadows.lg,
  },

  receiptLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: spacing.lg,
    overflow: 'hidden',
  },
  dash: {
    width: 8,
    height: 2,
    backgroundColor: colors.receiptDash,
    marginHorizontal: 4,
    borderRadius: 1,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  itemCountSection: {
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

  totalSection: {
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
