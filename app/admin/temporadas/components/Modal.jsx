"use client";
import { motion } from "framer-motion";

export default function Modal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="absolute  w-5/6 h-5/6 rounded flex flex-col"
    >
      {children}
    </motion.div>
  );
}
