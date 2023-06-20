import React, { useEffect, useState } from 'react';

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
    }, []);

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
      };

    const handleInstallmentsChange = (event) => {
        setInstallments(Number(event.target.value));
      };  

      const handleCheckout = () => {
        // Processar o pagamento com base no método de pagamento selecionado
        // e redirecionar para a página de confirmação
    
        // Exemplo simplificado apenas para demonstração
        if (paymentMethod) {
          alert(`Pagamento realizado com sucesso usando ${paymentMethod}!`);
        }
      };
    
      return (
        <div>
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
                Installments:
                <input
                  type="number"
                  value={installments}
                  onChange={handleInstallmentsChange}
                />
              </label>
            </div>
          )}
          <button onClick={handleCheckout}>Finalizar Compra</button>
        </div>
      );
    };

export default CheckoutPage;
