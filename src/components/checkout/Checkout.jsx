import React, { useEffect } from 'react';
import { useStore } from '../../stores/storeContext';
//componets/checkout/Checkout.jsx
const Checkout = () => {
  const store = useStore();

  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: store.cartTotal.toString(), // Total price as a string
            },
          }],
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then((details) => {
          alert(`Transaction completed by ${details.payer.name.given_name}`);
          store.clearCart(); // Clear the cart after successful checkout
        });
      },
    }).render('#paypal-button-container');
  }, [store.cartTotal]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div id="paypal-button-container"></div>
    </div>
  );
};

export default Checkout;
