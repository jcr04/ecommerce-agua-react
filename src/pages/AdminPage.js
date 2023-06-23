import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [editando, setEditando] = useState(false);
  const [colaboradorEditado, setColaboradorEditado] = useState(null);

  // Simulação de busca dos colaboradores da sua API
  useEffect(() => {
    const fetchColaboradores = async () => {
      try {
        const response = await fetch('http://localhost:3002/colaboradores');
        const data = await response.json();
        setColaboradores(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchColaboradores();
  }, []);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleCargoChange = (event) => {
    setCargo(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (editando) {
      try {
        const response = await fetch(`http://localhost:3002/colaboradores/${colaboradorEditado.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome: nome,
            cargo: cargo,
          }),
        });
        const data = await response.json();
        setColaboradorEditado(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await fetch('http://localhost:3002/colaboradores', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome: nome,
            cargo: cargo,
          }),
        });
        const data = await response.json();
        setColaboradores([...colaboradores, data]);
      } catch (error) {
        console.log(error);
      }
    }

    setNome('');
    setCargo('');
    setEditando(false);
    setColaboradorEditado(null);
  };

  const handleEdit = (colaborador) => {
    setNome(colaborador.nome);
    setCargo(colaborador.cargo);
    setEditando(true);
    setColaboradorEditado(colaborador);
  };

  const handleDelete = async (colaborador) => {
    try {
      await fetch(`http://localhost:3002/colaboradores/${colaborador.id}`, {
        method: 'DELETE',
      });
      setColaboradores(colaboradores.filter((c) => c.id !== colaborador.id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Página de Administração</h2>

      <h3>Colaboradores</h3>
      <ul>
        {colaboradores.map((colaborador) => (
          <li key={colaborador.id}>
            {colaborador.nome} - {colaborador.cargo}
            <button onClick={() => handleEdit(colaborador)}>Editar</button>
            <button onClick={() => handleDelete(colaborador)}>Excluir</button>
          </li>
        ))}
      </ul>

      <h3>{editando ? 'Editar Colaborador' : 'Adicionar Colaborador'}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={handleNomeChange} />
        </label>
        <label>
          Cargo:
          <input type="text" value={cargo} onChange={handleCargoChange} />
        </label>
        <button type="submit">{editando ? 'Salvar' : 'Adicionar'}</button>
      </form>
    </div>
  );
};

export default AdminPage;
