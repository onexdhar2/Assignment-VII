import React from "react";
import { Link, NavLink } from "react-router";


const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "bg-[#244D3F] p-3 border rounded-xl text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/timeline"} className={({ isActive }) =>
          isActive ? "bg-[#244D3F] p-3 border rounded-xl text-white" : ""
        }>
          Timeline
        </NavLink>
      </li>
      <li>
        <NavLink to={"/stats"} className={({ isActive }) =>
          isActive ? "bg-[#244D3F] p-3 border rounded-xl text-white" : ""
        }>
          Stats
        </NavLink>
      </li>
      <li>
        <NavLink to={"/page to read"}>Page to read</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold">KeenKeeper</a>
        </div>
        <div>
          <ul className="flex gap-8">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
