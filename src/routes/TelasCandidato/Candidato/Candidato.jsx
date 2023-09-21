import React from "react";
import { NavLink } from "react-router-dom";
const Candidato = () => {
  const containerStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    height: "100%",
    width: "15%",
    backgroundColor: "#ffffff",
    padding: "20px",
    boxShadow: "2px 0 10px -1px rgba(0, 0, 0, 0.5)",
  };

  const buttonStyle = {
    width: "100%",
    marginBottom: "10px",
    backgroundColor: "transparent",
    color: "#637381",
    display: "flex",
    outline: "none",
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      <div>
        {/* <img
          src="path_to_image1"
          alt="Image 1"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <img
          src="path_to_image2"
          alt="Image 2"
          style={{ width: "100%", marginBottom: "10px" }}
        /> */}
        <div>
          <img
            src="https://c.animaapp.com/RLL3gMW3/img/image-11-1@2x.png"
            style={{
              width: "100%",
              marginBottom: "20px",
              height: "100px",
              border: "none",
            }}
          />
        </div>
        <button
          style={{
            flex: 1,
            marginRight: "5px",
            backgroundColor: " rgba(0, 255, 149, 0.148)",
            color: "#000000",
            outline: "none",
            display: "flex",
            width: "100%",
          }}
        >
          <NavLink to="/Candidato/Perfil">Perfil</NavLink>
        </button>
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
