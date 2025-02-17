import ReactDOM from "react-dom";
import "./modal.css";

export default function Modal({ children, isSaleModal }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: isSaleModal ? "#ff4500" : "#555",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>,

    document.body
  );
}
