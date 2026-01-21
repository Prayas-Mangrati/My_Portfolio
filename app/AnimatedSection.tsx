"use client";

import { motion } from "framer-motion";

export default function AnimatedSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "linear" }}
  viewport={{ amount: 0.3 }}
  whileHover={{ y: -4 }}
  className="min-h-screen flex items-center justify-center px-6"
>
  <div className="w-full max-w-5xl">
    {children}
  </div>
</motion.section>
  );
}
