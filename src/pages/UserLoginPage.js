import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../UserContext';

const UserLoginPage = () => {
  const history = useHistory();
  const { login } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Realize a validação dos dados de login
    if (username.trim() !== '' && password.trim() !== '') {
      const userData = {
        username,
        password,
      };

      login(userData);
      history.push('/');
    } else {
      alert('Por favor, preencha todos os campos');
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNewUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleRegistration = (event) => {
    event.preventDefault();

    // Realize a validação dos dados de cadastro
    if (newUsername.trim() !== '' && newPassword.trim() !== '') {
      // Adicione a lógica para salvar os dados do novo usuário no backend
      // Por exemplo, você pode fazer uma requisição POST para uma rota de cadastro no seu backend

      // Em seguida, redirecione o usuário para a página de login
      history.push('/login/user');
    } else {
      alert('Por favor, preencha todos os campos');
    }
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

      <h2>Cadastre-se</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label>
            Novo Usuário:
            <input type="text" value={newUsername} onChange={handleNewUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Nova Senha:
            <input type="password" value={newPassword} onChange={handleNewPasswordChange} />
          </label>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default UserLoginPage;
