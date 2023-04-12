import React, { useState } from "react";
import LogoImg from "../assets/udemy-logo.png";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { RxGlobe } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navOptions = ["Categories", "Udemy Business", "Teach on Udemy"];
  return (
    <>
      <div className="hidden h-20 pr-5 shadow-sm shadow-slate-300 xl:flex items-center justify-between pl-5">
        <img src={LogoImg} alt="" className="w-1/12" />
        <div className="text-md cursor-pointer">Categories</div>
        <div className="flex w-4/12 p-2 border border-gray-500 rounded-full gap-2 items-center">
          <AiOutlineSearch fontSize={"1.5rem"} />
          <input
            type="text"
            placeholder="Search for anything"
            className="focus:outline-none text-md w-full"
          />
        </div>
        <div className="text-md cursor-pointer">Udemy Business</div>
        <div className="text-md cursor-pointer">Teach on Udemy</div>
        <div className="cursor-pointer">
          <AiOutlineShoppingCart fontSize={"1.5rem"} />
        </div>
        <button className="p-1 px-3 border border-black active:bg-black active:text-white">Login</button>
        <button className="p-1 px-3 text-white border border-black bg-black active:bg-white active:text-black">
          Signup
        </button>
        <div className="p-1 border border-black cursor-pointer">
          <RxGlobe fontSize={"1.5rem"} />
        </div>
      </div>
      <div className="xl:hidden h-20 shadow-sm shadow-gray-400 flex justify-between px-5 sm:px-10 items-center">
        {!open ? (
          <RxHamburgerMenu onClick={() => setOpen(true)} fontSize={"1.5rem"} />
        ) : (
          <VscChromeClose onClick={() => setOpen(false)} fontSize={"1.5rem"} />
        )}
        <img src={LogoImg} alt="" className="h-3/4" />
      </div>
      {open && (
        <div className="max-w bg-gray-50 flex flex-col gap-2 py-5">
          {navOptions.map((option) => {
            return (
              <div className="py-1 px-5 sm:px-10 hover:bg-gray-100 cursor-pointer">
                {option}
              </div>
            );
          })}
          <div className="w-full mt-3 flex justify-evenly">
              <button className="p-1 px-3 text-white border border-black bg-black">
                Login
              </button>
            <button className="p-1 px-3 text-white border border-black bg-black">
              Signup
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
