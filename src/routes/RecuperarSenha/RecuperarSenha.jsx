import React from 'react';

const RecuperarSenha = () => {
  const containerStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100%',
    width: '25%',
    backgroundColor: 'gray',
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h2>Recuperar a senha</h2>
        <label>Email</label>
        <input type="text" placeholder="Digite aqui seu email" style={{ width: '100%', marginBottom: '10px' }} />
      </div>
      <div>
        <button>Recuperar</button>
      </div>
    </div>
  );
};

export default RecuperarSenha;