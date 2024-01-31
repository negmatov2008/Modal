import React from "react";
import { useEffect, useRef } from "react";

function Modal2() {
  let modal = useRef();
  const openmodal = () => {
    modal.current.showModal();
  };
  return (
    <>
      <button className="btn" onClick={openmodal}>
        open modal
      </button>
      <dialog ref={modal} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Welcom to the second modal</p>
        </div>
      </dialog>
    </>
  );
}

export default Modal2;
