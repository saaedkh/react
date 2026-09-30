import React, { useState } from 'react';
import './ProductCard.css'; // Add your CSS file if needed

const ProductCard = ({ product, onAddToCart }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="product-card transition-transform transform hover:-translate-y-1 hover:scale-105 border rounded-lg p-4 bg-white shadow-lg dark:bg-gray-800 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover mb-4 rounded-lg transition-transform transform hover:scale-110"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        {product.name}
      </h2>
      <p className="text-lg text-red-500 dark:text-red-300">${product.price}</p>
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => onAddToCart(product)}
          className="bg-gray-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Add to Cart
        </button>
        <button
          onClick={toggleDescription}
          className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded transition-colors"
        >
          {showDescription ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      {showDescription && (
        <div className="description mt-4 text-gray-700 dark:text-gray-300">
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
