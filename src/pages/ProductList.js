import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../Imgs/ÁguaMineral500ml.jpeg';
import img2 from '../Imgs/ÁguaMineral1L.png';
import img3 from '../Imgs/ÁguaMineral5L.png';
import img4 from '../Imgs/ÁguaMineralcomgás500mL.png';
import img5 from '../Imgs/ÁguaMineralcomgás1L.png';
import img6 from '../Imgs/ÁguaMineralcomgás2L.jpeg'
import img7 from '../Imgs/ÁguaMineralcomgás5L.jpg';
import img8 from '../Imgs/GalãodeÁgua20L.jpg';
import '../styles/ProductList.css'



const ProductList = ({ products, handleAddToCart }) => {
  const imagens = [
    '../Imgs/ÁguaMineral500ml.jpeg',
    '../Imgs/ÁguaMineral1L.png',
    '../Imgs/ÁguaMineral5L.png',
    
  ];

  return (
    <div className='dv-produtos'>
      <h2>Produtos Disponíveis</h2>
      <ul>
        {products.map((product) => (
          
          <li key={product.id} className='Lista-li'>
            
             <span> <img src={img1} /></span>
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
