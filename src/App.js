import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Colaboradores from './pages/Collaborators';
import Menu from './components/Menu';
import './App.css'

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <BrowserRouter>
      <Menu /> {/* Adicione o componente Menu aqui */}
      <Switch>
        <Route exact path="/">
          <Home handleAddToCart={handleAddToCart} />
        </Route>
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart">
          <Cart cartItems={cartItems} />
        </Route>
        <Route path="/checkout">
          <Checkout cartItems={cartItems} />
        </Route>
        <Route path="/colaboradores" component={Colaboradores} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
