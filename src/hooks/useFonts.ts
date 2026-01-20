import { useFonts as useExpoFonts } from 'expo-font';
import {
  Fraunces_400Regular,
  Fraunces_500Medium,
  Fraunces_600SemiBold,
  Fraunces_400Regular_Italic,
} from '@expo-google-fonts/fraunces';
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_600SemiBold,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';

/**
 * Custom hook to load app fonts
 * Returns loading state for splash screen management
 */
export function useFonts() {
  const [fontsLoaded, fontError] = useExpoFonts({
    // Fraunces - Display font with organic, warm character
    'Fraunces': Fraunces_400Regular,
    'Fraunces-Medium': Fraunces_500Medium,
    'Fraunces-SemiBold': Fraunces_600SemiBold,
    'Fraunces-Italic': Fraunces_400Regular_Italic,

    // DM Sans - Clean, friendly body font
    'DMSans-Regular': DMSans_400Regular,
    'DMSans-Medium': DMSans_500Medium,
    'DMSans-SemiBold': DMSans_600SemiBold,
    'DMSans-Bold': DMSans_700Bold,
  });

  return {
    fontsLoaded,
    fontError,
  };
}
