import React from 'react';

const Profile = ({ client }) => {
  return (
    <div>
      <h1>Perfil do Cliente</h1>
      <p><strong>Nome:</strong> {client.name}</p>
      <p><strong>Email:</strong> {client.email}</p>
      <p><strong>Telefone:</strong> {client.phone}</p>
    </div>
  );
};

export default Profile;
