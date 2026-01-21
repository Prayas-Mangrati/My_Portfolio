"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative rounded-2xl
border border-white/10
bg-bgSecondary
p-6 w-full max-w-md
hover:shadow-[0_0_35px_rgba(127,93,255,0.18)]
transition"
    >
      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">
        {description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm
bg-gradient-to-r from-[#7F5DFF] to-[#58C7FF]
bg-clip-text text-transparent hover:opacity-80 transition"
          >
            <Github size={18} />
            Code
          </a>
        )}

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
          >
            <ExternalLink size={18} />
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
