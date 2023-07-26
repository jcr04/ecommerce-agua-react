import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Cliente.css'

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
    <div className='clients-box'>
      <div className='borda-cliente'>
      <h1>Página de Clientes</h1>
      <form onSubmit={handleSubmit} className='form'>

        <label className='label'>
          Nome:
          <input className='input' type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />

        <label className='label'>
          Email:
          <input className='input' type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />

        <label className='label'>
          Telefone:
          <input className='input' type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <br />

        <button type="submit">Adicionar Colaborador</button>
      </form>

      {/* Lista de clientes */}
      <h2 className='clientes-secao-h2'>Clientes</h2>
      <ul>
        <li className='clientes-perfis'>
          <span>Cliente 1</span>
          <Link to="/profile/1">Ver Perfil</Link>
        </li>
        <li className='clientes-perfis'>
          <span>Cliente 2</span>
          <Link to="/profile/2">Ver Perfil</Link>
        </li>
        {/* Adicione mais clientes aqui */}
      </ul>
      </div>
    </div>
  );
};

export default Clients;
