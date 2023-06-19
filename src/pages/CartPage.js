import React from 'react';

const CartPage = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h2>Carrinho de Compras</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>R${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cart-summary">
        <p>Total: R$ <span id="cart-total">{calculateTotal(cartItems)}</span></p>
        <button id="checkout-button">Finalizar Compra</button>
      </div>
    </div>
  );
};

const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
};

export default CartPage;
