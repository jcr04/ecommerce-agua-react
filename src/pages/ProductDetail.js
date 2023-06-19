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
    {
      id: 3,
      name: 'Água Mineral 5L',
      price: 10.0,
      description: 'Água mineral de alta qualidade em garrafa de 5L.',
    },
    {
      id: 4,
      name: 'Água Mineral com Gás 500ml',
      price: 3.0,
      description: 'Água mineral com gas natural e açúcar refrigerante em garrafa de 500ml',
    },
    {
      id: 5,
      name: 'Água Mineral com Gás 1l',
      price: 5.0,
      description: 'Água mineral com gas natural e açúcar refrigerante em garrafa de 1l',
    },
    {
      id: 6,
      name: 'Água Mineral com Gás 2l',
      price: 7.0,
      description: 'Água mineral com gas natural e açúcar refrigerante em garrafa de 2l',
    },
    {
      id: 7,
      name: 'Água Mineral com Gás 5l',
      price: 15.0,
      description: 'Água mineral com gas natural e açúcar refrigerante em garrafa de 5l',
    },
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