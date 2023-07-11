import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import Collaborators from './pages/Collaborators';
import Clientes from './pages/Clientes';
import Profile from './pages/Profile';
import AdminPage from './pages/AdminPage';
import Menu from './components/Menu';
import Header from './components/Header';
import CheckoutPage from './pages/CheckoutPage';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/produtos" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/colaboradores" component={Collaborators} />
        <Route path="/clientes" component={Clientes} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
