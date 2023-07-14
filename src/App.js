// App.js
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import CheckoutPage from './pages/CheckoutPage';
import Collaborators from './pages/Collaborators';
import Clientes from './pages/Clientes';
import Profile from './pages/Profile';
import AdminPage from './pages/AdminPage';
import Menu from './components/Menu';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const addCollaborator = async (formData) => {
    // Lógica para adicionar colaborador
    // ...
  };

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home handleAddToCart={handleAddToCart} />
        </Route>
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart">
          <Cart cartItems={cartItems} />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route path="/collaborators" component={Collaborators} />
        <Route path="/clientes">
          <Clientes addCollaborator={addCollaborator} /> {/* Passe a função addCollaborator como propriedade */}
          <Route path="/profile/:id" component={Profile} />
        </Route>
        <Route path="/admin" component={AdminPage} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
