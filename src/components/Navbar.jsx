import React, { useState } from "react";
import LogoImg from "../assets/udemy-logo.png";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { RxGlobe } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../redux/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const navOptions = [
    { name: "Categories", link: "/" },
    { name: "Popular Courses", link: "/" },
    { name: "Get started for Free", link: "/demo-form" },
  ];

  const logoutUser = () => {
    localStorage.clear();
    dispatch(resetUser());
    navigate("/login");
  };

  return (
    <>
      <div className="hidden h-20 pr-5 shadow-sm shadow-slate-300 xl:flex items-center justify-between pl-5">
        <img
          src={LogoImg}
          onClick={() => navigate("/")}
          alt=""
          className="cursor-pointer w-1/12"
        />
        <div onClick={() => navigate("/")} className="text-md cursor-pointer">
          Categories
        </div>
        <div className="flex w-4/12 p-2 border border-gray-500 rounded-full gap-2 items-center">
          <AiOutlineSearch fontSize={"1.5rem"} />
          <input
            type="text"
            placeholder="Search for anything"
            className="focus:outline-none text-md w-full"
          />
        </div>
        <div onClick={() => navigate("/")} className="text-md cursor-pointer">
          Popular Courses
        </div>
        <div
          onClick={() => navigate("/demo-form")}
          className="text-md cursor-pointer"
        >
          Get started for Free
        </div>
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <AiOutlineShoppingCart fontSize={"1.5rem"} />
        </div>
        {!user ? (
          <>
            <button
              onClick={() => navigate("/login")}
              className="p-1 px-3 border border-black active:bg-black active:text-white"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="p-1 px-3 text-white border border-black bg-black active:bg-white active:text-black"
            >
              Signup
            </button>
          </>
        ) : (
          <button
            onClick={() => logoutUser()}
            className="p-1 px-3 text-white border border-black bg-black active:bg-white active:text-black"
          >
            Logout
          </button>
        )}
        <div
          onClick={() => navigate("/")}
          className="p-1 border border-black cursor-pointer"
        >
          <RxGlobe fontSize={"1.5rem"} />
        </div>
      </div>
      <div className="xl:hidden h-20 shadow-sm shadow-gray-400 flex justify-between px-5 sm:px-10 items-center">
        {!open ? (
          <RxHamburgerMenu onClick={() => setOpen(true)} fontSize={"1.5rem"} />
        ) : (
          <VscChromeClose onClick={() => setOpen(false)} fontSize={"1.5rem"} />
        )}
        <img
          src={LogoImg}
          onClick={() => navigate("/")}
          alt=""
          className="cursor-pointer h-3/4"
        />
      </div>
      {open && (
        <div className="max-w bg-gray-50 flex flex-col gap-2 py-5">
          {navOptions.map((option, index) => {
            return (
              <div
                onClick={() => navigate(option.link)}
                key={index}
                className="py-1 px-5 sm:px-10 hover:bg-gray-100 cursor-pointer"
              >
                {option.name}
              </div>
            );
          })}
          {!user ? (
            <div className="w-full mt-3 flex justify-evenly">
              <button
                onClick={() => navigate("/login")}
                className="p-1 px-3 text-white border border-black bg-black"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="p-1 px-3 text-white border border-black bg-black"
              >
                Signup
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={() => logoutUser()}
                className="p-1 px-3 text-white border border-black bg-black"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
