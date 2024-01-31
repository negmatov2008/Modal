import React from "react";
import { useEffect, useRef } from "react";
function Modal3() {
  let modal = useRef();
  const openmodal = () => {
    modal.current.showModal();
  };
  return (
    <div>
      <button
        className="btn"
        onClick={openmodal}
      >
        open modal
      </button>
      <dialog ref={modal} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Welcom to the third modal</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal3;
