import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

const IconWithTooltip = ({ icon: Icon, href, tooltip }) => (
  <div className="relative group cursor-pointer">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition duration-300 transform hover:scale-110 hover:text-purple-800 text-white"
    >
      <Icon />
    </a>
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-100 z-10">
      <div className="px-3 py-1 text-sm rounded border border-purple-600 text-purple-600 bg-transparent backdrop-blur-md shadow-sm">
        {tooltip}
      </div>
    </div>
  </div>
);

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="mx-2 font-bold text-2xl bg-gradient-to-r from-pink-300 via-slate-50 to-purple-500 bg-clip-text tracking-tight text-transparent">
          My Portfolio
        </p>
      </div>

      <div className="flex m-8 items-center justify-center gap-6 text-2xl">
        <IconWithTooltip
          icon={HiOutlineDocumentText}
          href="/Anuradha_Resume.pdf"
          tooltip="Resume"
        />
        <IconWithTooltip
          icon={FaLinkedin}
          href="https://www.linkedin.com/in/anuradha-thotakura/"
          tooltip="LinkedIn"
        />
        <IconWithTooltip
          icon={FaGithub}
          href="https://github.com/AnuradhaThotakura"
          tooltip="GitHub"
        />
      </div>
    </nav>
  );
};

export default Navbar;
