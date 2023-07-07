import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const PaymentForm = ({ paymentMethod, onSubmit }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [pixKey, setPixKey] = useState('');
  const [description, setDescription] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeValue, setQRCodeValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (paymentMethod === 'pix') {
      const qrCodeValue = Math.floor(Math.random() * 1000000).toString();
      setQRCodeValue(qrCodeValue);
      setShowQRCode(true);
    }

    const paymentData = {
      cardNumber,
      expiryDate,
      securityCode,
      pixKey,
      description,
    };

    onSubmit(paymentData);
  };

  return (
    <form onSubmit={handleSubmit}>
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

      {showQRCode && (
        <div>
          <QRCode value={qrCodeValue} />
        </div>
      )}

      <button type="submit">Pagar</button>
    </form>
  );
};

export default PaymentForm;
