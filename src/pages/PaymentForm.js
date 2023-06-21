import React, { useState } from 'react';

const PaymentForm = ({ paymentMethod, onSubmit }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [boletoNumber, setBoletoNumber] = useState('');
  const [pixKey, setPixKey] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar os dados do formulário antes de enviar

    const paymentData = {
      cardNumber,
      expiryDate,
      securityCode,
      boletoNumber,
      pixKey,
      description,
    };

    onSubmit(paymentData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {paymentMethod === 'boleto' && (
        <div>
          <h4>Boleto Payment Details:</h4>
          {/* Adicione os detalhes específicos para o pagamento por boleto aqui */}
          <p>Imprimir boleto ou pegar código de barras</p>
          <div>
            <label>
              Número do Boleto:
              <input
                type="text"
                value={boletoNumber}
                onChange={(event) => setBoletoNumber(event.target.value)}
                required
              />
            </label>
          </div>
        </div>
      )}

      {paymentMethod === 'pix' && (
        <div>
          <h4>Pix Payment Details:</h4>
          {/* Adicione os detalhes específicos para o pagamento por pix aqui */}
          <p>Chave Pix da empresa: 98983307627</p>
          <div>
            <label>
              Pix Key:
              <input
                type="text"
                value={pixKey}
                onChange={(event) => setPixKey(event.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Descrição:
              <input
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </label>
          </div>
        </div>
      )}

      {paymentMethod !== 'boleto' && paymentMethod !== 'pix' && (
        <div>
          <div>
            <label>
              Número do Cartão:
              <input
                type="text"
                value={cardNumber}
                onChange={(event) => setCardNumber(event.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Data de Validade:
              <input
                type="text"
                value={expiryDate}
                onChange={(event) => setExpiryDate(event.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Código de Segurança:
              <input
                type="text"
                value={securityCode}
                onChange={(event) => setSecurityCode(event.target.value)}
                required
              />
            </label>
          </div>
        </div>
      )}

      <button type="submit">Pagar</button>
    </form>
  );
};

export default PaymentForm;
