import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';

const Profile = () => {
  const { user, updateUser, deleteUser } = useContext(UserContext);
  const [editing, setEditing] = useState(false);
  const [fullName, setFullName] = useState(user.fullName);
  const [birthDate, setBirthDate] = useState(user.birthDate);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      fullName,
      birthDate,
      address,
      phone,
    };
    updateUser(updatedUser);
    setEditing(false);
  };

  const handleCancel = () => {
    setFullName(user.fullName);
    setBirthDate(user.birthDate);
    setAddress(user.address);
    setPhone(user.phone);
    setEditing(false);
  };

  const handlePasswordSave = () => {
    // Verificar se a senha atual está correta
    if (password === user.password) {
      // Verificar se a nova senha e a confirmação coincidem
      if (newPassword === confirmPassword) {
        // Atualizar a senha do usuário
        const updatedUser = {
          ...user,
          password: newPassword,
        };
        updateUser(updatedUser);
        setPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        alert('A nova senha e a confirmação de senha não coincidem.');
      }
    } else {
      alert('Senha atual incorreta.');
    }
  };

  const handleDeleteConfirmation = () => {
    setShowDeleteConfirmation(true);
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
  };

  const handleDelete = () => {
    deleteUser(user.id);
    // Redirecionar o usuário para a página inicial ou fazer alguma ação após a exclusão
  };

  return (
    <div className="Profile">
      <h2>Perfil do Usuário</h2>
      <div>
        <h3>Informações Pessoais</h3>
        {!editing ? (
          <div>
            <p>Nome completo: {user.fullName}</p>
            <p>Data de Nascimento: {user.birthDate}</p>
            <p>Endereço: {user.address}</p>
            <p>Telefone: {user.phone}</p>
            <button onClick={handleEdit}>Editar</button>
          </div>
        ) : (
          <div>
            <label>
              Nome completo:
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </label>
            <label>
              Data de Nascimento:
              <input type="text" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
            </label>
            <label>
              Endereço:
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>
            <label>
              Telefone:
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <button onClick={handleSave}>Salvar</button>
            <button onClick={handleCancel}>Cancelar</button>
          </div>
        )}
      </div>
      <div>
        <h3>Alterar Senha</h3>
        <label>
          Senha atual:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Nova senha:
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </label>
        <label>
          Confirmar nova senha:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <button onClick={handlePasswordSave}>Salvar Senha</button>
      </div>
      <div>
        <h3>Histórico de Compras</h3>
        {/* Exibir o histórico de compras do usuário */}
      </div>
      <div>
        <h3>Excluir Conta</h3>
        {!showDeleteConfirmation ? (
          <div>
            <p>Tem certeza de que deseja excluir sua conta?</p>
            <button onClick={handleDeleteConfirmation}>Excluir</button>
          </div>
        ) : (
          <div>
            <p>Essa ação é irreversível. Deseja continuar?</p>
            <button onClick={handleDelete}>Sim, excluir</button>
            <button onClick={handleDeleteCancel}>Cancelar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
