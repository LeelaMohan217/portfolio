import React from "react";
import { HiDownload, HiEye } from "react-icons/hi";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="border-b border-neutral-900 py-10 px-4">
      {/* Section Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center text-4xl text-white"
      >
        Resume
      </motion.h1>

      {/* Responsive Centered Box */}
      <div className="flex justify-center">
        <div className="w-full max-w-3xl bg-neutral-900/30 border border-neutral-800 rounded-2xl shadow-lg backdrop-blur-md p-6 sm:p-8 text-center">
          {/* Description */}
          <p className="text-base text-purple-200 mb-6 sm:mb-8 px-2 sm:px-8 leading-relaxed">
            Here's my latest resume — you can choose to view it in a new tab or
            download a copy for later reference.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/Anuradha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl border border-purple-700 text-purple-300 hover:bg-purple-900 hover:text-white transition duration-300"
            >
              <HiEye className="text-lg" />
              <span>View Resume</span>
            </a>

            <a
              href="/Anuradha_Resume.pdf"
              download
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl border border-purple-700 text-purple-300 hover:bg-purple-900 hover:text-white transition duration-300"
            >
              <HiDownload className="text-lg" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
