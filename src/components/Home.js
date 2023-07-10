import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../pages/ProductList';
import CartPage from '../pages/CartPage';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.length === 0 ? (
        <p>Carregando produtos...</p>
      ) : (
        <>
          <ProductList products={products} handleAddToCart={handleAddToCart} />
          <CartPage cartItems={cartItems} />
        </>
      )}
    </div>
  );
};

export default Home;