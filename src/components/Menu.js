import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const menuItems = [
    { path: '/', label: 'Water.inc' },
    { path: '/produtos', label: 'Produtos' },
    { path: '/carrinho', label: 'Carrinho' },
    { path: '/colaboradores', label: 'Colaboradores' },
  ];

  return (
    <nav>
      <div className="logo">
        <Link to={menuItems[0].path}>{menuItems[0].label}</Link>
      </div>
      <div className="menu-buttons">
        {menuItems.slice(1).map((item) => (
          <Link key={item.label} to={item.path}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Menu;
