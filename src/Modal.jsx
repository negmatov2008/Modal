import { useEffect, useRef } from "react";

function Modal() {
  let modal = useRef();
  //   useEffect(() => {
  //     modal.current.showModal();
  //   });
  const openmodal = () => {
    modal.current.showModal();
  };
  return (
    <div>
      <button onClick={openmodal} className="btn bg">
        open modal
      </button>
      <dialog ref={modal} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Welcom to the first modal</p>
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

export default Modal;
