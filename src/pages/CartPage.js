import React from 'react';
import { Link } from 'react-router-dom';

const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
};

const CartPage = ({ cartItems }) => {
  const handleCheckout = () => {
    // Redirecionar para a página de checkout com os produtos selecionados como parâmetros da URL
    const selectedProductIds = cartItems.map((item) => item.id);
    const queryParams = selectedProductIds.map((productId) => `productId=${productId}`).join('&');
    const url = `/checkout?${queryParams}`;
    window.location.href = url;
  };

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
        <Link to="/checkout">
          <button id="checkout-button" onClick={handleCheckout}>
            Finalizar Compra
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;