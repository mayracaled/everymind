import React from "react";
import { Button } from "../Button";

import "./style.css";

export const BigCard = ({}) => {
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
            text="Em andamento"
            variant="contained"
            background="none"
          />

          <div className="icon-button-wrapper"></div>
        </div>
      </div>{" "}
    </div>
  );
};

export default BigCard;
