import React, { useState } from "react";
import { Button } from "../Button";
import "./style.css";

export const BigCard = () => {
  const [cardState, setCardState] = useState("em andamento");

  const handleButtonClick = () => {
    if (cardState === "em andamento") {
      setCardState("aguardando");
    } else if (cardState === "aguardando") {
      setCardState("finalizado");
    } else {
      setCardState("em andamento");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="user">
          <div className="stack">
            <div className="name-rand">Cielo</div>
            <div className="role-rand">Junior</div>
          </div>
          <Button
            className="button-instance"
            color="inherit"
            labelClassName="button-2"
            size="m"
            state="enabled"
            text={
              cardState === "em andamento"
                ? "Em Andamento"
                : cardState === "aguardando"
                ? "Aguardando"
                : "Finalizado"
            }
            variant="contained"
            background="none"
            onClick={handleButtonClick}
          />
          <div className="icon-button-wrapper"></div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
