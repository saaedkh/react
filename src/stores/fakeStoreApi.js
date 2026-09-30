// src/stores/fakeStoreApi.js
export const fetchFakeStoreProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      return products;
    } catch (error) {
      console.error('Failed to fetch products from Fake Store API:', error);
      return [];
    }
  };
  