import React, { useState } from 'react';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lógica de autenticação do administrador aqui
    // ...

    // Limpar campos de entrada após o envio
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login de Administrador</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Usuário:
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Senha:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
