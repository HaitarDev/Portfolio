"use client";

import { motion } from "framer-motion";

function NameHeading() {
  return (
    <h1 className="name-animation text-white flex flex-col font-bold text-5xl lg:text-7xl leading-10">
      <motion.span
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ mass: 100, bounce: 2, damping: 0, ease: "circIn" }}
        className="name-animation"
      >
        HAITAR
      </motion.span>
      <span>ABDELMOGHITH</span>
    </h1>
  );
}

export default NameHeading;
