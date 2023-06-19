import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../pages/ProductList';

const Home = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Água Mineral 500ml", price: 2.5, image: "url-da-imagem" },
    { id: 2, name: "Água Mineral 1L", price: 4.5, image: "url-da-imagem" },
    { id: 3, name: "Água Mineral 5L", price: 10.0, image: "url-da-imagem" },
    { id: 4, name: "Água Mineral com gás 500mL", price: 3.0, image: "url-da-imagem" },
    { id: 5, name: "Água Mineral com gás 1L", price: 5.0, image: "url-da-imagem" },
    { id: 6, name: "Água Mineral com gás 2L", price: 7.0, image: "url-da-imagem" },
    { id: 7, name: "Água Mineral com gás 5L", price: 15.0, image: "url-da-imagem" },
  ]);

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
        <ProductList products={products} handleAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

export default Home;
