/**
 * Fresh Market Theme
 *
 * Design Direction: Warm, organic, artisanal grocery aesthetic
 * Following frontend-design plugin principles:
 * - Distinctive typography (Fraunces display + DM Sans body)
 * - Bold color with intentional accents
 * - Visual depth through shadows and subtle textures
 * - Cohesive, memorable aesthetic
 */

export const colors = {
  // Primary palette - Sage Green (used boldly, not timidly)
  primary: '#7A9E77',         // Deeper sage for more presence
  primaryDark: '#5C7D59',     // Rich forest for pressed states
  primaryLight: '#B5D4B2',    // Soft sage for backgrounds
  primaryMuted: '#E8F0E7',    // Whisper sage for subtle fills

  // Background colors - Warm, paper-like
  background: '#FBF7F1',      // Warm parchment
  backgroundAlt: '#F5EFE6',   // Slightly darker warm tone
  surface: '#FFFFFF',         // Clean white cards
  surfaceElevated: '#FFFFFE', // Barely warm white

  // Text colors - Rich, readable
  text: '#1A1D1A',            // Near-black with green undertone
  textSecondary: '#4A5249',   // Muted forest
  textMuted: '#8B958A',       // Soft sage gray
  textInverse: '#FFFDF9',     // Warm white

  // Accent colors - Coral (bold, not shy)
  accent: '#E85A4F',          // Vibrant tomato coral
  accentDark: '#C4433A',      // Deep coral for pressed
  accentLight: '#FDEAE8',     // Blush background
  accentMuted: '#F5C4C0',     // Soft coral

  // Secondary - Harvest gold for warmth
  secondary: '#E9B44C',       // Honey gold
  secondaryLight: '#FDF4DC',  // Cream gold

  // Tertiary - Earthy brown for grounding
  tertiary: '#8B7355',        // Warm brown
  tertiaryLight: '#F5EDE4',   // Light tan

  // Utility colors
  border: '#E5DED3',          // Warm gray border
  borderLight: '#F0EBE3',     // Lighter warm border
  divider: '#EBE5DB',         // Subtle divider

  // Semantic colors
  success: '#5B8A5A',         // Forest green
  warning: '#D4A03E',         // Amber
  error: '#C54B45',           // Muted red

  // Receipt style - Paper texture feel
  receiptBg: '#FFFCF7',       // Cream paper
  receiptDash: '#C9BFA8',     // Aged paper line
  receiptShadow: '#D4C9B8',   // Paper edge shadow
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 48,
} as const;

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  full: 9999,
} as const;

/**
 * Typography System
 *
 * Display: Fraunces - A variable display serif with organic, warm curves
 * Body: DM Sans - Clean, geometric sans-serif with friendly character
 *
 * This pairing creates contrast between expressive headers and readable body text
 */
export const fonts = {
  // Font family names (loaded via expo-font)
  display: 'Fraunces',           // For headers, totals, emphasis
  displayItalic: 'Fraunces-Italic',
  body: 'DMSans-Regular',        // For body text
  bodyMedium: 'DMSans-Medium',   // For labels
  bodySemiBold: 'DMSans-SemiBold', // For emphasis
  bodyBold: 'DMSans-Bold',       // For strong emphasis

  // Fallbacks before fonts load
  fallback: 'System',
} as const;

export const typography = {
  // Display styles (Fraunces) - for headers and emphasis
  display: {
    hero: {
      fontFamily: fonts.display,
      fontSize: 48,
      lineHeight: 52,
      fontWeight: '600' as const,
      letterSpacing: -1,
    },
    large: {
      fontFamily: fonts.display,
      fontSize: 32,
      lineHeight: 38,
      fontWeight: '600' as const,
      letterSpacing: -0.5,
    },
    medium: {
      fontFamily: fonts.display,
      fontSize: 24,
      lineHeight: 30,
      fontWeight: '500' as const,
      letterSpacing: -0.3,
    },
    small: {
      fontFamily: fonts.display,
      fontSize: 20,
      lineHeight: 26,
      fontWeight: '500' as const,
    },
  },

  // Body styles (DM Sans) - for readable text
  body: {
    large: {
      fontFamily: fonts.body,
      fontSize: 17,
      lineHeight: 24,
    },
    medium: {
      fontFamily: fonts.body,
      fontSize: 15,
      lineHeight: 22,
    },
    small: {
      fontFamily: fonts.body,
      fontSize: 13,
      lineHeight: 18,
    },
    tiny: {
      fontFamily: fonts.body,
      fontSize: 11,
      lineHeight: 14,
    },
  },

  // Label styles (DM Sans Medium/SemiBold) - for UI elements
  label: {
    large: {
      fontFamily: fonts.bodySemiBold,
      fontSize: 15,
      lineHeight: 20,
      letterSpacing: 0.3,
    },
    medium: {
      fontFamily: fonts.bodyMedium,
      fontSize: 13,
      lineHeight: 18,
      letterSpacing: 0.2,
    },
    small: {
      fontFamily: fonts.bodyMedium,
      fontSize: 11,
      lineHeight: 14,
      letterSpacing: 0.5,
      textTransform: 'uppercase' as const,
    },
  },

  // Price styles (Fraunces) - distinctive for monetary values
  price: {
    large: {
      fontFamily: fonts.display,
      fontSize: 36,
      lineHeight: 40,
      fontWeight: '600' as const,
      letterSpacing: -0.5,
    },
    medium: {
      fontFamily: fonts.display,
      fontSize: 20,
      lineHeight: 24,
      fontWeight: '500' as const,
    },
    small: {
      fontFamily: fonts.display,
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '500' as const,
    },
  },
} as const;

// Enhanced shadows for depth and dimension
export const shadows = {
  sm: {
    shadowColor: '#2D3436',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 1,
  },
  md: {
    shadowColor: '#2D3436',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  lg: {
    shadowColor: '#2D3436',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
  },
  xl: {
    shadowColor: '#2D3436',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  // Colored shadows for elevated accent elements
  accent: {
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  primary: {
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
} as const;

// Animation constants for micro-interactions
export const animation = {
  duration: {
    instant: 100,
    fast: 200,
    normal: 300,
    slow: 400,
    deliberate: 600,
  },
  spring: {
    gentle: { damping: 20, stiffness: 300 },
    bouncy: { damping: 12, stiffness: 400 },
    snappy: { damping: 20, stiffness: 500 },
  },
} as const;

// Layout constants
export const layout = {
  screenPadding: spacing.xl,
  cardPadding: spacing.lg,
  maxWidth: 428, // iPhone 14 Pro Max width
  headerHeight: 56,
  bottomBarHeight: 80,
  touchTarget: 44, // Minimum touch target size
} as const;

// Common style patterns
export const patterns = {
  // Card with subtle elevation
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    ...shadows.md,
  },

  // Elevated card for important items
  cardElevated: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    ...shadows.lg,
  },

  // Receipt-style card
  receiptCard: {
    backgroundColor: colors.receiptBg,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },

  // Primary action button
  buttonPrimary: {
    backgroundColor: colors.accent,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    ...shadows.accent,
  },

  // Secondary action button
  buttonSecondary: {
    backgroundColor: colors.primaryMuted,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
  },

  // Screen container
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
} as const;

const theme = {
  colors,
  spacing,
  borderRadius,
  fonts,
  typography,
  shadows,
  animation,
  layout,
  patterns,
};

export default theme;
