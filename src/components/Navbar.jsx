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
        {/* Social Icons with Links */}
        <div className="flex m-8 items-center justify-center gap-4 text-2xl text-white">
          <a
            href="https://www.linkedin.com/in/anuradha-thotakura/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AnuradhaThotakura"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
