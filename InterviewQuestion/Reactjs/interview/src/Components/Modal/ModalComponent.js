import React, { useState } from "react";

const Modal = ({ isOpen, isClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="modal-backdrop"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          role="dialog"
          className="modal-content"
          style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: "10px",
            width: "300px",
            textAlign: "center",
          }}
        >
          {children}
          <button onClick={isClose}>close</button>
        </div>
      </div>
    </>
  );
};

const ModalComponent = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <div>
      <h1>ModalComponent</h1>
      <button onClick={() => setIsModal(true)}>Open Modal</button>
      <Modal isOpen={isModal} isClose={() => setIsModal(false)}>
        <h2>This is custom modal</h2>
        <p>Hello</p>
      </Modal>
    </div>
  );
};

export default ModalComponent;
