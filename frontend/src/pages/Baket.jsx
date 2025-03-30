import React, { useState } from 'react';
import './Basket.css';

const Basket = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Product Name', quantity: 1 },
    { id: 2, name: 'Product Name', quantity: 1 },
    { id: 3, name: 'Product Name', quantity: 1 },
  ]);

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="basket-container">
      <h2>Basket</h2>
      <div className="basket-items">
        {items.map((item) => (
          <div key={item.id} className="basket-item">
            <p>{item.name} - Quantity: {item.quantity}</p>
            <button className="remove-btn" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Basket;
