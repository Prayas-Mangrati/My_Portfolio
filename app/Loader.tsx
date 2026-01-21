"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6
      bg-black text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
    >
      {/* Text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "linear" }}
        className="text-3xl font-semibold tracking-wide"
      >
        <i>Welcome to my Portfolio</i>
      </motion.h1>
      <hr></hr>

      {/* Dotted circular loader */}
      <motion.div
        className="w-10 h-10 rounded-full border-2 border-dotted
        border-[#58C7FF] border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}
