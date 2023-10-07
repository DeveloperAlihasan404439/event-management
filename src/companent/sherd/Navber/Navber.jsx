import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Navber = () => {
  const [open, setOpen] = useState(true);
  const nav = (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to={`/services`}>Service</NavLink>
      <NavLink to='/registor'>Registor</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/logout'>Log Out</NavLink>
    </>
  );
  return (
    <div className="fixed z-20 w-[100%] bg-[#1e1919a8] border-b-2 border-[#1721319f]">
      <div className="w-11/12 mx-auto ">
          <div className="navbar gap-4">
            <div className="flex justify-between w-full">
              <div className="dropdown  lg:hidden">
                <div className="drawer drawer-start">
                  <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div
                    onClick={() => setOpen(!open)}
                    className="drawer-content text-xl"
                  >
                    <label htmlFor="my-drawer-4">
                      {open ? <GiHamburgerMenu className="text-white text-2xl"/> : <AiOutlineClose className="text-white text-2xl"/>}
                    </label>
                  </div>
                  <div className="drawer-side mt-16">
                    <label
                      htmlFor="my-drawer-4"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-[80%] min-h-full bg-base-200 text-base-content ">
                      {/* Sidebar content here */}
                      {nav}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://i.ibb.co/2hJ4c8X/Feista-removebg-preview.png"
                    alt=""
                    className="w-[50px] rounded-lg"
                  />
                  <h1 className="text-3xl font-mono text-white">Fieta</h1>
                </div>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal flex gap-5 text-2xl font-medium text-white">
                {nav}
              </ul>
            </div>
            <div className="lg:w-full flex justify-end">
              <a className="btn">Button</a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navber;
