import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Modal from "./Modal";

function Root() {
  return (
    <>
      <div className="max-w-full md:max-w-[73%] mx-auto px-2 md:px-0 pt-6">
        <ul className="flex justify-between">
          <li>
            <NavLink
              className="font-semibold text-[#000] text-2xl md:text-3xl"
              to={"first"}
            >
              First
            </NavLink>
          </li>
          <li>
            <NavLink
              className="font-semibold text-[#000] text-2xl md:text-3xl"
              to={"second"}
            >
              Second
            </NavLink>
          </li>
          <li>
            <NavLink
              className="font-semibold text-[#000] text-2xl md:text-3xl"
              to={"third"}
            >
              third
            </NavLink>
          </li>
          <li>
            <NavLink
              className="font-semibold text-[#000] text-2xl md:text-3xl"
              to={"fourth"}
            >
              fourth
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Root;
