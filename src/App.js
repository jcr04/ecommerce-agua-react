import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './styles.css';


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <BrowserRouter>
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
      </Switch>
    </BrowserRouter>
  );
};

export default App;
