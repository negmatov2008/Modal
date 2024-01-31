import React from "react";
import { useEffect, useRef } from "react";
function Modal4() {
  let modal = useRef();
  const openmodal = () => {
    modal.current.showModal();
  };
  return (
    <div>
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Welcom to the fourth modal!</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
}

export default Modal4;
