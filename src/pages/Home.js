import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';

const Home = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.example.com/products');
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>E-Commerce de Água</h1>
      {products.length === 0 ? (
        <p>Carregando produtos...</p>
      ) : (
        <ProductList products={products} handleAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

export default Home;
