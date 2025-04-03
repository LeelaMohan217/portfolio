import React from "react";
import { SiMongodb } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <>
      <div className="border-b border-e-neutral-800 pb-24">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-4xl text-center"
        >
          Technologies
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconVariants(2.5)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiPython className="text-7xl text-blue-700" />
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMongodb className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(3.1)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiLinux className="text-7xl " />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiHtml5 className="text-7xl text-orange-700" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiCss3 className="text-7xl text-blue-800" />
          </motion.div>
          <motion.div
            variants={iconVariants(3.8)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiJavascript className="text-7xl text-yellow-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMysql className="text-7xl text-sky-700" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Technologies;
