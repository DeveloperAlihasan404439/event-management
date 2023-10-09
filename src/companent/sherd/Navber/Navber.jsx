import { useContext, useState,useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../pages/CreateContext/CreateContext";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
const Navber = () => {
  const [open, setOpen] = useState(true);
  const { logOutUser, user } = useContext(AuthContext);
  const nav = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact"> Contact Us</NavLink>
      <NavLink to="/galari">Social Galary</NavLink>
      {
        user?<NavLink to="/services">Services</NavLink>:''
      }
    </>
  );
  return (
    <div className="fixed z-30 w-[100%] bg-[#1e1919a8] border-b-2 border-[#1721319f]">
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
                    {open ? (
                      <GiHamburgerMenu className="text-white text-2xl" />
                    ) : (
                      <AiOutlineClose className="text-white text-2xl" />
                    )}
                  </label>
                </div>
                <div className="drawer-side mt-16">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu p-4 w-[80%] min-h-full bg-base-200 text-base-content text-xl">
                    {nav}
                    <h1 className="border-2 border-b w-full border-orange-500"></h1>
                    {
                    user?
                    <>
                    <img
                      
                      src={user.photoURL}
                      alt=""
                      className="w-[40px] rounded-[50%] text-white"
                    />
                    <h1 className="text-2xl">{user.displayName}</h1>
                    <h1 className="text-sm">{user.email}</h1>
                    <hr />
                    <NavLink onClick={logOutUser}>Log Out</NavLink>
                    
                    </>
                  :<>
                    <NavLink to="/registor">Registor</NavLink>
                    <NavLink to="/login">Login</NavLink>
                  </>
                  }
                  </ul>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex gap-3 items-center lg:flex-row-reverse">
                <h1 className="text-3xl font-mono text-white">Fieta</h1>
                <img
                  src="https://i.ibb.co/2hJ4c8X/Feista-removebg-preview.png"
                  alt=""
                  className="w-[50px] rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal flex gap-5 text-2xl font-medium text-white">
              {nav}
            </ul>
          </div>
          <div className="hidden lg:w-full lg:block ">
            <div className ="flex justify-end">

            <Menu>
              <MenuButton colorscheme="pink">
                <div className="border-2 p-1 rounded-[50%] border-orange-500">
                  {
                    user?
                    <img
                      
                      src={user.photoURL}
                      alt=""
                      className="w-[40px] rounded-[50%] text-white"
                    />
                    :<img
                      src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                      alt=""
                      className="w-[40px] rounded-[50%] text-white"
                    />
                  }
                </div>
              </MenuButton>
              <MenuList>
                <div className={`bg-white  ${user?'w-full':'w-[150px]'} p-4 text-xl rounded-lg`}>

                    
                  {
                    user?
                    <>
                    <MenuItem>{user.displayName}</MenuItem>
                    <MenuItem>{user.email}</MenuItem>
                    <MenuDivider />
                  <MenuItem>
                    <NavLink onClick={logOutUser}>Log Out</NavLink>
                  </MenuItem>
                    
                    </>
                  :<>
                  <MenuItem>
                    <NavLink to="/registor">Registor</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/login">Login</NavLink>
                  </MenuItem>
                  </>
                  }
                </div>
              </MenuList>
            </Menu>
            </div>
            {/* {user ? (
              <div onClick={()=>setUsers(!users)} className="flex gap-4 items-center">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-[50px] rounded-[50%]"
                />
              </div>
            ) : (
              <img onClick={()=>setUsers(!users)}
                src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                alt=""
                className="w-[50px] rounded-[50%] text-white"
              />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
