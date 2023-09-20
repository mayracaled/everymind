import React from 'react';

const CadastroEmpresa = () => {
  const containerStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100%',
    width: '25%',
    backgroundColor: '#gray',
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h2>Cadastro de Empresa</h2>
        <label>Nome Completo</label>
        <input type="text" placeholder="Digite o nome completo" style={{ width: '100%', marginBottom: '10px' }} />
        <label>CNPJ</label>
        <input type="text" placeholder="Digite o CNPJ" style={{ width: '100%', marginBottom: '10px' }} />
        <label>Email Corporativo</label>
        <input type="text" placeholder="Digite o email corporativo" style={{ width: '100%', marginBottom: '10px' }} />
        <label>Senha</label>
        <input type="password" placeholder="Digite a senha" style={{ width: '100%', marginBottom: '10px' }} />
      </div>
    </div>
  );
};

export default CadastroEmpresa;
