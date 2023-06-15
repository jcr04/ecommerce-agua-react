import React from 'react';

const CartPage = () => {
  return (
    <div className="cart-container">
      <h2>Carrinho de Compras</h2>
      <div className="cart-items">
        {/* Itens do carrinho serão adicionados aqui dinamicamente */}
      </div>
      <div className="cart-summary">
        <p>Total: R$ <span id="cart-total">0.00</span></p>
        <button id="checkout-button">Finalizar Compra</button>
      </div>
    </div>
  );
};

export default CartPage;
