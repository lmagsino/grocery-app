import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import { useRef } from 'react';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';
import { GroceryItem } from '../types';
import { formatPeso } from '../utils/formatCurrency';

interface ItemCardProps {
  item: GroceryItem;
  onEdit?: (item: GroceryItem) => void;
  onDelete?: (id: string) => void;
}

/**
 * Receipt-style item card with distinctive typography
 * Features item name (or placeholder), price in Fraunces font, and delete action
 */
export function ItemCard({ item, onEdit, onDelete }: ItemCardProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handleDelete = () => {
    onDelete?.(item.id);
  };

  const displayName = item.name || 'Unnamed item';
  const isUnnamed = !item.name;

  return (
    <Animated.View style={[styles.container, { transform: [{ scale: scaleAnim }] }]}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => onEdit?.(item)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
      >
        <View style={styles.leftSection}>
          <Text style={[styles.name, isUnnamed && styles.nameUnnamed]} numberOfLines={1}>
            {displayName}
          </Text>
          {item.barcode && (
            <Text style={styles.barcode}>Scanned item</Text>
          )}
        </View>

        <View style={styles.rightSection}>
          <Text style={styles.price}>{formatPeso(item.price)}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={handleDelete}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Text style={styles.deleteIcon}>✕</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    ...shadows.md,
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.lg,
  },

  leftSection: {
    flex: 1,
    marginRight: spacing.md,
  },
  name: {
    ...typography.body.large,
    fontFamily: 'DMSans-Medium',
    color: colors.text,
  },
  nameUnnamed: {
    color: colors.textMuted,
    fontStyle: 'italic',
  },
  barcode: {
    ...typography.body.tiny,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },

  rightSection: {
    alignItems: 'flex-end',
  },
  price: {
    ...typography.price.medium,
    color: colors.text,
  },

  deleteButton: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderLeftWidth: 1,
    borderLeftColor: colors.borderLight,
  },
  deleteIcon: {
    fontSize: 16,
    color: colors.textMuted,
  },
});
