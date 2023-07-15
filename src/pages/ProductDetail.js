import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductDetail.css'

const ProductDetail = ({ match }) => {
  const productId = match.params.id;

  // Exemplo de dados de produto (pode ser substituído por dados reais obtidos de uma API)
  const products = [
    {
      id: 1,
      image: " https://samsclub.vtexassets.com/arquivos/ids/157287/Agua-Mineral-Natural-sem-Gas-Crystal-500ml-com-12-Unidades.jpg",
      name: 'Água Mineral 500ml',
      price: 2.5,
      description: 'Água mineral de alta qualidade em garrafa de 500ml.',
    },
    {
      id: 2,
      image:" https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/25458/medium/agua-mineral-cristal-sem-gas-1l_89541.png",
      name: 'Água Mineral 1L',
      price: 4.5,
      description: 'Água mineral de alta qualidade em garrafa de 1L.',
    },
    {
      id: 3,
      image:"https://ibassets.com.br/ib.item.image.large/l-fc674c495de844e0877669fe177283a1.JPEG",
      name: 'Água Mineral 5L',
      price: 10.0,
      description: 'Água mineral de alta qualidade em garrafa de 5L.',
    },
    {
      id: 4,
      image:" https://s.cornershopapp.com/product-images/1266384.png?versionId=9Ae7TQdEQhoDsfedY4LjpeLpVggzWV0C",
      name: 'Água Mineral com Gás 500ml',
      price: 3.0,
      description: 'Água mineral com gas natural e açúcar refrigerante em garrafa de 500ml',
    },
    {
      id: 5,
      image:" https://tezeio.vtexassets.com/arquivos/ids/1174269-800-800?v=638247445519070000&width=800&height=800&aspect=true",
      name: 'Água Mineral com Gás 1l',
      price: 5.0,
      description: 'Água mineral com gas natural e açúcar refrigerante em garrafa de 1l',
    },
    {
      id: 6,
      image:"https://cdn.awsli.com.br/600x450/1628/1628171/produto/94794131/074a1a51c7.jpg",
      name: 'Água Mineral com Gás 2l',
      price: 7.0,
      description: 'Água mineral com gas natural e açúcar refrigerante em garrafa de 2l',
    },
    {
      id: 7,
      image:" https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/7894900530056/img_500_1.png",
      name: 'Água Mineral com Gás 5l',
      price: 15.0,
      description: 'Água mineral com gas natural e açúcar refrigerante em garrafa de 5l',
    },
    {
      id: 8,
      image:" https://yata-apix-02f4140a-8337-46f5-9aa6-0ab234828d5d.s3-object.locaweb.com.br/fe71f64f7c9a4d55be1249f22a526e1f.jpg",
      name: 'Galão de agua 20L',
      price: 20.0,
      description: 'Galão de Água mineral de 20L',
    },
    {
     id : 9 , 
     name : " Água inga- 20l - 08 Und " ,
     price:  22.0 ,
    image : " https://supermercadobarbosa.loji.com.br/storage/uploads/TECJ5EabA24HvJp2pXvmbOHLHTpL6nu75gjhysVK.jpg ",
    description: 'Galão de Água mineral de 20L'
   },{
     id : 10 ,
      name : " ÁGUA MINERAL BIOLEVE SEM GÁS 510 ML " ,
      price : 1.20 , 
      image : " https://covabra.vtexassets.com/arquivos/ids/156286/59611.jpg" ,
      description: 'ÁGUA MINERAL BIOLEVE SEM GÁS 510 ML'
   }
    
  ];

  const product = products.find((product) => product.id === parseInt(productId));

  const [addedToCart, setAddedToCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = () => {
    setCartItems([...cartItems, product]);
    setAddedToCart(true);
  };

  return (
    <div className='dv-1'>
      <div className='dv-img'>
      <h2>Detalhes do Produto</h2>
      <img src={product.image}/>
      </div>
      <div className='detalhes'>
      <p className='id'>ID: {product.id}</p>
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
    </div>
  );
};

export default ProductDetail;