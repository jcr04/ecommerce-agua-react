import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Imgs/Logo.png';
import '../styles/Menu.css';

const Menu = () => {
  const menuItems = [
    { path: '/', label: 'Poseidon Delivery' },
    { path: '/produtos', label: 'Produtos' },
    { path: '/checkout', label: 'Checkout' },
    { path: '/colaboradores', label: 'Colaboradores' },
    { path: '/clientes', label: 'Clientes' },
    { path: '/login/user', label: 'Login' }, // Adicione o link para a página de login de usuário aqui
  ];

  return (
    <div className='Header-nav'>
      <nav>
        <div className="logo">
          <Link to={menuItems[0].path}><img src={logo} alt="Logo" /></Link>
        </div>
        <div className="menu-buttons">
          {menuItems.map((item) => (
            <Link key={item.label} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Menu;
