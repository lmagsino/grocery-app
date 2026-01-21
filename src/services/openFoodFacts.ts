import { OpenFoodFactsResponse } from '../types';

const API_BASE_URL = 'https://world.openfoodfacts.org/api/v2/product';

/**
 * Fetches product information from Open Food Facts API
 * @param barcode - The product barcode
 * @returns Product name if found, null otherwise
 */
export async function lookupBarcode(barcode: string): Promise<string | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/${barcode}.json`, {
      headers: {
        'User-Agent': 'GroceryCalc-iOS/1.0',
      },
    });

    if (!response.ok) {
      console.log(`API returned status ${response.status}`);
      return null;
    }

    const data: OpenFoodFactsResponse = await response.json();

    if (data.status === 1 && data.product?.product_name) {
      // Return the product name, optionally with brand
      const name = data.product.product_name;
      const brand = data.product.brands;

      if (brand) {
        return `${name} (${brand})`;
      }
      return name;
    }

    return null;
  } catch (error) {
    console.error('Error looking up barcode:', error);
    return null;
  }
}
