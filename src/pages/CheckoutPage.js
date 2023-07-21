import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import '../styles/CheckOut.css'

const CheckoutPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedProductIds = Array.from(queryParams.getAll('productId')); // Obter os IDs dos produtos selecionados

  const [selectedProducts, setSelectedProducts] = useState([]); // Array para armazenar os detalhes dos produtos selecionados
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [installments, setInstallments] = useState(1);

  useEffect(() => {
    // Simule a busca dos detalhes dos produtos com base nos IDs
    const fetchSelectedProducts = async () => {
      const products = await Promise.all(
        selectedProductIds.map(async (productId) => {
          try {
            const response = await fetch(`http://localhost:3001/products/${productId}`);
            const productData = await response.json();

            // Substitua esta lógica pela busca dos detalhes do produto a partir do ID,
            // incluindo o preço obtido do JSON da sua aplicação
            const product = {
              id: productData.id,
              name: productData.name,
              price: productData.price, // Preço obtido do JSON da aplicação
            };

            return product;
          } catch (error) {
            console.error(`Erro ao buscar detalhes do produto ${productId}`, error);
            return null;
          }
        })
      );

      setSelectedProducts(products.filter((product) => product !== null));
    };

    fetchSelectedProducts();
  }, [selectedProductIds]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = selectedProducts.reduce((sum, product) => {
        return sum + product.price;
      }, 0);
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [selectedProducts]);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleInstallmentsChange = (event) => {
    setInstallments(Number(event.target.value));
  };

  const handleCheckout = (paymentData) => {
    // Processar o pagamento com base nos dados fornecidos
    console.log(paymentData);

    if (paymentMethod) {
      alert(`Pagamento realizado com sucesso usando ${paymentMethod}!`);
    }
  };

  const handlePaymentSubmit = (paymentData) => {
    // Processar o pagamento com os dados fornecidos
    console.log(paymentData);
  };

  return (
    <div className='CheckoutPage'>
      <div className='borda'>
      <h2>Checkout</h2>
      <p>Preço Total: {totalPrice}</p>
      <h3>Produtos selecionados:</h3>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
      <h3>Método de Pagamento:</h3>
      <div>
        <label>
          <input
            type="radio"
            value="pix"
            checked={paymentMethod === 'pix'}
            onChange={handlePaymentMethodChange}
          />
          Pix
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="credit_card"
            checked={paymentMethod === 'credit_card'}
            onChange={handlePaymentMethodChange}
          />
          Cartão de Crédito
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="debit_card"
            checked={paymentMethod === 'debit_card'}
            onChange={handlePaymentMethodChange}
          />
          Cartão de Débito
        </label>
      </div>
      {paymentMethod === 'credit_card' && (
        <div>
          <label>
            Parcelas:
            <input
              type="number"
              value={installments}
              onChange={handleInstallmentsChange}
            />
          </label>
        </div>
      )}
      {paymentMethod && (
        <div>
          <h3>Forma de Pagamento:</h3>
          <PaymentForm paymentMethod={paymentMethod} onSubmit={handlePaymentSubmit} />
        </div>
      )}
      <button onClick={handleCheckout}>Finalizar Compra</button>
      </div>
    </div>

  );
};

export default CheckoutPage;
