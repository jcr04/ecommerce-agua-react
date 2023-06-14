import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Water.inc</Link>
      </div>
      <div className="menu-buttons">
        <Link to="/produtos">Produtos</Link>
        <Link to="/carrinho">Carrinho</Link>
        <Link to="/colaboradores">Colaboradores</Link>
      </div>
    </nav>
  );
};

export default Menu;
