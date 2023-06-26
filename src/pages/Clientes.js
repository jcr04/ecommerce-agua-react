import React, { useState } from 'react';
import axios from 'axios';

const Clients = ({ addCollaborator }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCollaborator(formData); // Chama a função addCollaborator passando os dados do formulário
      setFormData({ name: '', email: '', phone: '' }); // Limpa o estado do formulário após adicionar o colaborador
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Página de Clientes</h1>
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
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <button type="submit">Adicionar Colaborador</button>
      </form>
    </div>
  );
};

export default Clients;
