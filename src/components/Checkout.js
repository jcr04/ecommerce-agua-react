import React, { useState } from 'react';

const Checkout = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const handleCheckout = () => {
    // Simulação de chamada assíncrona para finalizar a compra
    setTimeout(() => {
      setPurchaseCompleted(true);
    }, 2000);
  };

  return (
    <div>
      <h2>Finalizar Compra</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>R${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p>Total: R${totalPrice.toFixed(2)}</p>
          {purchaseCompleted ? (
            <p>Compra finalizada com sucesso!</p>
          ) : (
            <button onClick={handleCheckout}>Finalizar Compra</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkout;