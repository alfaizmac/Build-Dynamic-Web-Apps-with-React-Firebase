export default function Modal(props, handleCLose) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {props.children}
        <button onClick={handleCLose}>close</button>
      </div>
    </div>
  );
}
