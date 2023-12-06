import React from "react";
import Modal from "react-modal";

function CustomModal({ open, close, style, children }) {
  return (
    <>
      <Modal isOpen={open} onRequestClose={close} style={style}>
        <div
          className={`border w-6 h-6 rounded-lg flex justify-center float-right bg-red-600 text-white`}
        >
          <button onClick={close}>X</button>
        </div>
        {children}
      </Modal>
    </>
  );
}

export default CustomModal;
