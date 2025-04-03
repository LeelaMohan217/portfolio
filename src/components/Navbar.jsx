import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <p className="mx-2 font-bold text-2xl bg-gradient-to-r from-pink-300 via-slate-50 to-purple-500 bg-clip-text tracking-tight text-transparent">
            My Portfolio
          </p>
          {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        </div>
        <div className="flex m-8 items-center justify-center gap-4 text-2xl text-white">
          <FaLinkedin />
          <FaGithub />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
