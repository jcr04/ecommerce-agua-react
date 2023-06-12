import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, handleAddToCart }) => {
  return (
    <div>
      <h2>Produtos Disponíveis</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>R${product.price.toFixed(2)}</span>
            <Link to={`/product/${product.id}`}>Ver detalhes</Link>
            <button onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
