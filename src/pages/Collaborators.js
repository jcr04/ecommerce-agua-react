import React, { useState } from 'react';
import axios from 'axios';

const Colaboradores = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.phone) {
      try {
        const response = await axios.post('http://localhost:3002/colaboradores', formData);
        console.log(response.data); // Exibe a resposta da API no console
        setFormData({ name: '', email: '', phone: '' });
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  return (
    <div className="form-container">
      <h1>Página de Colaboradores</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Telefone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Colaboradores;
