import React from "react";
// import Poppins from google fonts

const Navbar = () => {
  return (
    <div className="navbar justify-between bg-white md:bg-transparent lg:px-10 lg:pt-10 px-6">
      <div className="flex sporting items-center text-xl">
        <span className="bg-[#6765F0] text-white rounded-[10px]  px-[6px] py-[4px]">
          <h1>Gym</h1>
        </span>
        <h1 className="text-[#6765F0] mx-1">baran</h1>
      </div>
      <div className="navbar-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="absolute top-10 right-0 menu menu-compact dropdown-content navFont mt-3 p-2 shadow-lg bg-base-100 rounded-box w-[175px]  gap-5 text-base"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Programs</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <button className="drop-shadow-2xl rounded-[10px] px-8 py-3 bg-[#264373] text-white">Log in</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal gap-10 text-base font-semibold">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Programs</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>About us</a>
          </li>
          <li>
            <button className="drop-shadow-2xl rounded-[10px] px-8 py-3 bg-[#264373] text-white">Log in</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
