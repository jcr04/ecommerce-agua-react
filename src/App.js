// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
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
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home handleAddToCart={handleAddToCart} />}/>
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />}/>
        <Route path="/checkout" element={<CheckoutPage />}/>
        <Route path="/collaborators" component={Collaborators} />
        <Route path="/clientes" element={<Clientes addCollaborator={addCollaborator}/>}/>
        <Route path="/profile/:id" element={<Profile/>} />
        <Route path="/admin" element={<AdminPage/>} />
    </Routes>
    <Footer/>
    </Router>
  );
};

export default App;
