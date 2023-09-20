import React from 'react';
import { NavLink } from 'react-router-dom';
const Candidato = () => {
  const containerStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100%',
    width: '25%',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  };

  const buttonStyle = {
    width: '100%',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <div>
        <img src="path_to_image1" alt="Image 1" style={{ width: '100%', marginBottom: '10px' }} />
        <img src="path_to_image2" alt="Image 2" style={{ width: '100%', marginBottom: '10px' }} />
        
        <button style={{ flex: 1, marginRight: '5px' }}><NavLink
                
                 to='/Candidato/Perfil'

        >pERFIL</NavLink></button>
        <button style={buttonStyle}>Minhas Vagas</button>
        <button style={buttonStyle}>Vagas Disponíveis</button>
        <button style={buttonStyle}>Testes</button>
        <button style={buttonStyle}>Entrevistas</button>
        <button style={buttonStyle}>Feedbacks</button>
      
      
      </div>
    </div>
  );
};

export default Candidato;
