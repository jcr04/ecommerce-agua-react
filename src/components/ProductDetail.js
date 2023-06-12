import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = ({ match }) => {
  const productId = match.params.id;

  // Exemplo de dados de produto (pode ser substituído por dados reais obtidos de uma API)
  const product = {
    id: productId,
    name: 'Água Mineral 500ml',
    price: 2.5,
    description: 'Água mineral de alta qualidade em garrafa de 500ml.',
  };

  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    // Adicionar lógica para adicionar o item ao carrinho de compras
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
