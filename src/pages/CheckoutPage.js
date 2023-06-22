import React, { useEffect, useState } from 'react';
import PaymentForm from './PaymentForm';

const CheckoutPage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [installments, setInstallments] = useState(1);

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
      <h2>Checkout</h2>
      <p>Total Price: {totalPrice}</p>
      <h3>Selected Products:</h3>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
      <h3>Payment Method:</h3>
      <div>
        <label>
          <input
            type="radio"
            value="boleto"
            checked={paymentMethod === 'boleto'}
            onChange={handlePaymentMethodChange}
          />
          Boleto
        </label>
      </div>
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
          Credit Card
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
          <h3>Payment Details:</h3>
          <PaymentForm paymentMethod={paymentMethod} onSubmit={handlePaymentSubmit} />
        </div>
      )}
      <button onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  );
};

export default CheckoutPage;
