import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/storeContext';
import { useNavigate } from 'react-router-dom';
//componets/cart/Cart.jsx
const Cart = observer(() => {
  const store = useStore();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul>
        {store.cartItems.map((item) => (
          <li key={item.id} className="mb-4 flex justify-between items-center">
            <span>
              {item.name} - ${item.price} x {item.quantity}
            </span>
            <button
              onClick={() => store.removeFromCart(item)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-bold mt-4">Total: ${store.cartTotal}</h3>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={store.clearCart}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Clear Cart
        </button>
        <button
          onClick={handleCheckout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Checkout with PayPal Or Credit Card
        </button>
      </div>
    </div>
  );
});

export default Cart;
