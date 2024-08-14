import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [amount, setAmount] = useState('');

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Integrate with Stripe or other payment gateway
    try {
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });
      const data = await response.json();
      console.log('Payment processed:', data);
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={handleChange} placeholder="Amount" required />
      <button type="submit">Pay Rent</button>
    </form>
  );
};

export default Payment;
