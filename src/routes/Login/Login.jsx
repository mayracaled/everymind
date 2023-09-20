import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';



const Login = () => {
    const [ocupacao, setOcupacao] = useState("Candidato");

    return (
    <>
        <div style={{ width: '20%', height: '100%', backgroundColor: 'gray', padding: '20px', position: 'fixed', left:0, top:0 }}>

        <div>

            {/* <img src="path_to_your_image" alt="Logo" style={{ width: '100%', marginBottom: '20px' }} /> */}

            <h2>Login</h2>

        
            <input type="text" placeholder="Digite seu email" style={{ width: '100%', marginBottom: '10px' }} />

            <label>Selecione sua ocupação</label>

            <select style={{ width: '100%', marginBottom: '10px' }} onChange={(e) => setOcupacao(e.target.value)}>
                <option value="Candidato">Candidato</option>
                <option value="Empresa">Empresa</option>
            </select>

            
            <input type="Senha" placeholder="Digite sua senha" style={{ width: '100%', marginBottom: '10px' }} />
        
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            
            <button style={{ flex: 1, marginRight: '5px' }}><NavLink
                
                to='/RecuperarSenha'

           >Esqueci Minha Senha </NavLink></button>
            
            
            <button style={{ flex: 1, marginRight: '5px' }}><NavLink
                
                 to={ocupacao == "Candidato" ? '/Candidato' : '/Empresa'}

            >Login</NavLink></button>


            <button style={{ flex: 1, marginRight: '5px' }}><NavLink
                
                to={ocupacao == "Candidato" ? '/CadastroUsuario' : '/CadastroEmpresa'}

           >Cadastre-se</NavLink></button>
       
       
       
        </div>
        </div>
        
    </>
  );
};

export default Login;
