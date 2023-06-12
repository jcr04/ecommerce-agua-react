import React from 'react';

const ProductList = () => {
  // Exemplo de lista de produtos (pode ser substituído por dados reais obtidos de uma API)
  const products = [
    { id: 1, name: 'Água Mineral 500ml', price: 2.5 },
    { id: 2, name: 'Água Mineral 1L', price: 3.5 },
    { id: 3, name: 'Água Mineral 5L', price: 10.0 },
  ];

  return (
    <div>
      <h2>Produtos Disponíveis</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>R${product.price.toFixed(2)}</span>
            {/* Adicione um botão "Adicionar ao Carrinho" aqui */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
