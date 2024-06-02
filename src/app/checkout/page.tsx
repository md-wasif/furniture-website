// pages/checkout.tsx
import CheckoutForm from '@/Components/CheckoutForm';
import React from 'react';


function CheckoutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">Checkout</h1>
        <CheckoutForm />
      </div>
    </div>
  );
};

export default CheckoutPage;
