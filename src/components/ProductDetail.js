import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = ({ match }) => {
  const productId = match.params.id;

  // Exemplo de dados de produto (pode ser substituído por dados reais obtidos de uma API)
  const products = [
    {
      id: 1,
      name: 'Água Mineral 500ml',
      price: 2.5,
      description: 'Água mineral de alta qualidade em garrafa de 500ml.',
    },
    {
      id: 2,
      name: 'Água Mineral 1L',
      price: 4.5,
      description: 'Água mineral de alta qualidade em garrafa de 1L.',
    },
    // Adicione as descrições dos outros produtos aqui
  ];

  const product = products.find((product) => product.id === parseInt(productId));

  const [addedToCart, setAddedToCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = () => {
    setCartItems([...cartItems, product]);
    setAddedToCart(true);
  };

  return (
    <div>
      <h2>Detalhes do Produto</h2>
      <p>ID: {product.id}</p>
      <p>Nome: {product.name}</p>
      <p>Preço: R${product.price.toFixed(2)}</p>
      <p>Descrição: {product.description}</p>
      {addedToCart ? (
        <p>Produto adicionado ao carrinho!</p>
      ) : (
        <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
      )}
      <br />
      <Link to="/">Voltar para a lista de produtos</Link>
    </div>
  );
};

export default ProductDetail;
