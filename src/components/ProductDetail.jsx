// src/components/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/storeContext'; // Adjust import according to your store setup

const ProductDetail = observer(() => {
  const { id } = useParams(); // Get the product ID from the URL
  const store = useStore();

  const product = store.products.find(p => p.id === parseInt(id));

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full max-w-md mb-4" />
      <p className="text-lg mb-4">{product.description || 'No description available.'}</p>
      <p className="text-xl font-semibold mb-4">Price: ${product.price}</p>
      <button
        onClick={() => store.addToCart(product)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
});

export default ProductDetail;
