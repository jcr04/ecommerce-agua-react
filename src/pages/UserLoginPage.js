import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../UserContext';

const UserLoginPage = () => {
  const history = useHistory();
  const { login } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('http://localhost:3002/colaboradores');
      const collaborators = response.data.colaboradores;

      const user = collaborators.find(
        (collaborator) => collaborator.name === username && collaborator.email === password
      );

      if (user) {
        login(user);
        history.push('/profile');
      } else {
        alert('Usuário ou senha inválidos');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h2>Login de Usuário</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Usuário:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Senha:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default UserLoginPage;
