import React from "react";
import "./modal.css";

export default function Modal() {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>10% off your first purchase!</h2>
        <p>User your discount now!</p>
      </div>
    </div>
  );
}
