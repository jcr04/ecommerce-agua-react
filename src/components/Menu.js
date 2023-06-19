import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ProductList from '../pages/ProductList';
import CartPage from '../pages/CartPage';
import Collaborators from '../pages/Collaborators';

const Menu = () => {
  const menuItems = [
    { path: '/', label: 'Water.inc' },
    { path: '/produtos', label: 'Produtos' },
    { path: '/carrinho', label: 'Carrinho' },
    { path: '/colaboradores', label: 'Colaboradores' },
  ];

  return (
    <div>
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

      <Switch>
        <Route path="/produtos" component={ProductList} />
        <Route path="/carrinho" component={CartPage} />
        <Route path="/colaboradores" component={Collaborators} />
      </Switch>
    </div>
  );
};

export default Menu;
