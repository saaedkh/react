// src/components/Products.js

import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/storeContext';
import ProductCard from './ProductCard';
import './products.css';

const Products = observer(() => {
  const store = useStore();

  const handleAddToCart = (product) => {
    store.addToCart(product);
  };

  return (
    <div className="products-container">
      <div className="products-grid">
        {store.products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
});

export default Products;
