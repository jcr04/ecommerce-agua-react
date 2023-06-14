import React, { useState } from 'react';

const Colaboradores = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário para a API ou fazer o processamento necessário
    console.log(formData);
    // Limpar o formulário
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div>
      <h1>Página de Colaboradores</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Telefone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Colaboradores;
