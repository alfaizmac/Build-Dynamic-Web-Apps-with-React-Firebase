import React from "react";
import "./modal.css";

export default function Modal({ children, handleCLose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={handleCLose}>close</button>
      </div>
    </div>
  );
}
