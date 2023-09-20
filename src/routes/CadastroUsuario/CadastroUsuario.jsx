import React from 'react';

const CadastroUsuario = () => {
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

        <h2>Cadastro de Usuário</h2>
        <label>Nome</label>
        <input type="text" placeholder="Digite seu nome" style={{ width: '100%', marginBottom: '10px' }} />
        <label>CPF</label>
        <input type="text" placeholder="Digite seu CPF" style={{ width: '100%', marginBottom: '10px' }} />
        <label>Telefone</label>
        <input type="text" placeholder="Digite seu telefone" style={{ width: '100%', marginBottom: '10px' }} />
        <label>Email</label>
        <input type="text" placeholder="Digite seu email" style={{ width: '100%', marginBottom: '10px' }} />
        <label>Ocupação</label>
        <select style={{ width: '100%', marginBottom: '10px' }}>
          <option value="PcD">PcD</option>
          <option value="PovosOriginarios">Povos Originários</option>
        </select>
        <label>Sexo</label>
        <select style={{ width: '100%', marginBottom: '10px' }}>
          <option value="Masc">Masc</option>
          <option value="Fem">Fem</option>
        </select>
        <label>Senha</label>
        <input type="password" placeholder="Digite sua senha" style={{ width: '100%', marginBottom: '10px' }} />

      </div>

    </div>

  );
};

export default CadastroUsuario;