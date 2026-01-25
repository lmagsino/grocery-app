# GroceryCalc

A React Native (Expo) mobile app for iOS that helps users track grocery items and prices while shopping in the Philippines.

## Features

- **Manual Item Entry** - Add items with name and price in Philippine Peso (₱)
- **Barcode Scanning** - Scan product barcodes to auto-lookup names via Open Food Facts API
- **Running Total** - Real-time total that updates as you add/edit/delete items
- **Shopping History** - Save completed trips and view past purchases
- **Data Persistence** - Auto-saves your list across app restarts
- **Smooth Animations** - Polished UI with micro-interactions

## Screenshots

*Coming soon*

## Tech Stack

- **Framework**: React Native with Expo SDK 54
- **Language**: TypeScript
- **State Management**: React Context + Hooks
- **Storage**: AsyncStorage
- **Camera**: expo-camera
- **Animations**: react-native-reanimated
- **Typography**: Fraunces (display) + DM Sans (body)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI
- iOS Simulator or physical device

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/grocery-calculator.git
cd grocery-calculator

# Install dependencies
npm install

# Start the development server
npx expo start --ios
```

### Running on Device

1. Install [Expo Go](https://expo.dev/client) on your iOS device
2. Run `npx expo start`
3. Scan the QR code with your camera

## Project Structure

```
grocery-calculator/
├── App.tsx                    # Main entry point
├── app.json                   # Expo configuration
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── ItemCard.tsx
│   │   ├── TotalDisplay.tsx
│   │   ├── AddItemModal.tsx
│   │   ├── EmptyState.tsx
│   │   └── ActionButtons.tsx
│   ├── screens/               # Full-screen views
│   │   ├── ScannerScreen.tsx
│   │   ├── HistoryScreen.tsx
│   │   └── TripDetailScreen.tsx
│   ├── context/               # State management
│   │   └── GroceryContext.tsx
│   ├── hooks/                 # Custom hooks
│   │   ├── useFonts.ts
│   │   └── useStorage.ts
│   ├── services/              # API integrations
│   │   └── openFoodFacts.ts
│   ├── theme/                 # Design tokens
│   │   └── index.ts
│   ├── types/                 # TypeScript definitions
│   │   └── index.ts
│   └── utils/                 # Helper functions
│       └── formatCurrency.ts
├── assets/                    # App icons and images
└── scripts/                   # Build utilities
    └── generate-assets.js
```

## Design

The app follows a "Fresh Market" design aesthetic with:

- **Primary Color**: Sage Green (#7A9E77)
- **Background**: Warm Parchment (#FBF7F1)
- **Accent**: Coral (#E85A4F)
- **Typography**: Organic serif headers, clean sans-serif body

## Scripts

```bash
# Start development server
npx expo start

# Run on iOS simulator
npx expo start --ios

# Run on Android emulator
npx expo start --android

# Generate app icons
node scripts/generate-assets.js

# Type check
npx tsc --noEmit

# Build for production
npx expo export
```

## API

The app uses the [Open Food Facts API](https://world.openfoodfacts.org/) for barcode lookups. No API key required.

## License

MIT
