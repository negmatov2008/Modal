import React from "react";
import Modal from "../Modal";

function First() {
  return (
    <div className="max-w-[300px] mx-auto p-6 mt-[100px] flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl text-[#000] font-bold">The first modal</h1>
      <Modal />
    </div>
  );
}

export default First;
