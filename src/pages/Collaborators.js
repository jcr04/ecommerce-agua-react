import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Clientes from './Clientes';

const Collaborators = () => {
  const [collaborators, setCollaborators] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [setSortedBy] = useState(null);
  const [editingCollaboratorId, setEditingCollaboratorId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    fetchCollaborators();
  }, []);

  const fetchCollaborators = async () => {
    try {
      const response = await axios.get('http://localhost:3002/colaboradores');
      setCollaborators(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addCollaborator = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3002/colaboradores', formData);
      const newCollaborator = response.data;
      setCollaborators([...collaborators, newCollaborator]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCollaborator = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/colaboradores/${id}`);
      fetchCollaborators();
    } catch (error) {
      console.error(error);
    }
  };

  const editCollaborator = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3002/colaboradores/${id}`);
      const collaborator = response.data;
      setEditingCollaboratorId(collaborator.id);
      setEditFormData({
        name: collaborator.name,
        email: collaborator.email,
        phone: collaborator.phone,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const cancelEdit = () => {
    setEditingCollaboratorId(null);
    setEditFormData({ name: '', email: '', phone: '' });
  };

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const submitEditForm = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3002/colaboradores/${editingCollaboratorId}`, editFormData);
      fetchCollaborators();
      cancelEdit();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);
    // Fazer a requisição GET com o parâmetro de pesquisa
    try {
      const response = await axios.get(`http://localhost:3002/colaboradores?search=${e.target.value}`);
      setCollaborators(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSort = async (key) => {
    setSortedBy(key);
    // Fazer a requisição GET com o parâmetro de ordenação
    try {
      const response = await axios.get(`http://localhost:3002/colaboradores?sort=${key}`);
      setCollaborators(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="collaborators-container">
      <h1>Página de Colaboradores</h1>

      {/* Pesquisa */}
      <input
        type="text"
        placeholder="Pesquisar por nome"
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Tabela de colaboradores */}
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Nome</th>
            <th onClick={() => handleSort('email')}>Email</th>
            <th onClick={() => handleSort('phone')}>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {collaborators.map((collaborator) => (
            <tr key={collaborator.id}>
              <td>{collaborator.name}</td>
              <td>{collaborator.email}</td>
              <td>{collaborator.phone}</td>
              <td>
                <button onClick={() => deleteCollaborator(collaborator.id)}>Excluir</button>
                {!editingCollaboratorId || editingCollaboratorId !== collaborator.id ? (
                  <button onClick={() => editCollaborator(collaborator.id)}>Editar</button>
                ) : (
                  <button onClick={cancelEdit}>Cancelar</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Formulário de adição */}
      <Clientes addCollaborator={addCollaborator} />

      {/* Formulário de edição */}
      {editingCollaboratorId && (
        <form onSubmit={submitEditForm}>
          <h2>Editar Colaborador</h2>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={editFormData.name}
              onChange={handleEditChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={editFormData.email}
              onChange={handleEditChange}
              required
            />
          </label>
          <label>
            Telefone:
            <input
              type="text"
              name="phone"
              value={editFormData.phone}
              onChange={handleEditChange}
              required
            />
          </label>
          <button type="submit">Salvar</button>
        </form>
      )}
    </div>
  );
};

export default Collaborators;
