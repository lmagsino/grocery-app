/**
 * Core data models for the Grocery Calculator app
 */

export interface GroceryItem {
  id: string;
  name: string;        // Optional in UI, but stored as empty string if not provided
  price: number;       // In Philippine Peso (PHP)
  barcode?: string;    // Optional, from scanner
  createdAt: Date;
}

export interface ShoppingTrip {
  id: string;
  date: Date;
  items: GroceryItem[];
  total: number;
}

export interface AppState {
  currentItems: GroceryItem[];
  history: ShoppingTrip[];
}

// Navigation types
export type RootStackParamList = {
  Home: undefined;
  Scanner: undefined;
  History: undefined;
  TripDetail: { tripId: string };
};

// Form types
export interface ItemFormData {
  name: string;
  price: string;  // String for input handling, converted to number
}

// API response types
export interface OpenFoodFactsProduct {
  product_name?: string;
  brands?: string;
  image_url?: string;
}

export interface OpenFoodFactsResponse {
  status: number;
  product?: OpenFoodFactsProduct;
}
