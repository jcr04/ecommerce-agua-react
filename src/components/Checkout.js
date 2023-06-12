import React from 'react';

const Checkout = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    // Adicionar lógica para finalizar a compra
    alert('Compra finalizada!');
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
          <button onClick={handleCheckout}>Finalizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
