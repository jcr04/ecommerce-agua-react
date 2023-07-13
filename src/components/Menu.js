import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ProductList from '../pages/ProductList';
import CartPage from '../pages/CartPage';
import Collaborators from '../pages/Collaborators';
import Clientes from '../pages/Clientes';
import logo from '../Imgs/Logo.png';
import '../styles/Menu.css';
import imgMenu from '../Imgs/menu.png';
import { useRef } from 'react';
import { useState } from 'react';

const Menu = () => {
  const meuElementoRef = useRef(null);
  const menuItems = [
    { path: '/', label: 'Poseidon Delivery' },
    { path: '/produtos', label: 'Produtos' },
    { path: '/checkout', label: 'Checkout' },
    { path: '/colaboradores', label: 'Colaboradores' },
    { path: '/clientes', label: 'Clientes' },
    { path: '/login/user', label: 'Login' }, // Adicione o link para a página de login de usuário aqui
  ];

  const btnMenu = () => {
    const meuElemento = meuElementoRef.current;

    if (meuElemento.classList.contains('minha-classe')) {
      meuElemento.classList.remove('minha-classe');
    } else {
      meuElemento.classList.add('minha-classe');
    }
  };

  return (
    <div className='Header-nav'>
      <nav>
        <div className="logo">
          <Link to={menuItems[0].path}><img src={logo} alt="Logo" /></Link>
        </div>
        <div className="menu-buttons" ref={meuElementoRef}>
          {menuItems.map((item) => (
            <Link key={item.label} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      <img className="imgMenu" src={imgMenu} onClick={btnMenu} />
      <Switch>
        <Route path="/produtos" component={ProductList} />
        <Route path="/carrinho" component={CartPage} />
        <Route path="/colaboradores" component={Collaborators} />
        <Route path="/clientes" component={Clientes} />
      </Switch>
    </div>
  );
};

export default Menu;
