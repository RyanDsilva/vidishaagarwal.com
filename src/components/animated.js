"use client";

import { motion } from "framer-motion";

export default function Animated({ inital, animate, transition, children }) {
  return (
    <motion.div initial={inital} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
}
