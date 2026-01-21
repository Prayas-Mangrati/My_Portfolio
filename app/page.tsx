"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Loader from "./Loader";
import AnimatedSection from "./AnimatedSection";
import SmoothScroll from "./SmoothScroll";
import ProjectCard from "./ProjectCard";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* APP ALWAYS MOUNTED */}
      <SmoothScroll>
        {/* ================= HOME ================= */}
        <AnimatedSection>
          <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center text-center gap-6"
          >
            {/* background glow */}
            <div className="absolute -z-10 w-72 h-72 rounded-full 
              bg-gradient-to-r from-[#7F5DFF]/20 to-[#58C7FF]/20 
              blur-3xl" />

            <h1
              className="text-6xl font-bold font-[var(--font-space)]
              bg-gradient-to-r from-[#7F5DFF] to-[#58C7FF]
              bg-clip-text text-transparent"
            >
              Hi, I’m Prayas
            </h1>

            <p className="text-lg text-gray-400 max-w-xl">
              Aspiring Software Developer · Full Stack Developer · Problem Solver
            </p>

            {/* role pills */}
            <div className="flex gap-3 pt-4 flex-wrap justify-center">
              {["Software Engineer", "Problem Solver", "Java • MERN"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-4 py-1.5 rounded-full text-sm
                    border border-white/15 text-gray-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
            <a
  href="/resume"
  target="_blank"
  className="mt-4 inline-flex items-center gap-2
  px-6 py-2 rounded-full
  border border-white/20
  hover:border-white/40
  transition"
>
  View Resume
</a>

            {/* section divider */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2
              w-[60%] h-px
              bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </section>
        </AnimatedSection>

        {/* ================= ABOUT ================= */}
        <AnimatedSection>
          <section
            id="about"
            className="relative min-h-screen flex items-center justify-center"
          >
            <div
              className="max-w-2xl text-center space-y-6
              bg-white/5 backdrop-blur-md
              border border-white/10
              rounded-2xl p-8"
            >
              <h2
                className="text-4xl font-semibold font-[var(--font-space)]
                bg-gradient-to-r from-[#7F5DFF] to-[#58C7FF]
                bg-clip-text text-transparent"
              >
                About Me
              </h2>

              <p className="text-gray-400">
                I am a Computer Science undergraduate with a strong interest in
                software development and problem solving.
              </p>

              <p className="text-gray-400">
                I am a fast learner who adapts quickly to new technologies and
                enjoys building practical, scalable projects.
              </p>

              <p className="text-gray-400">
                My goal is to grow into a reliable and skilled software engineer
                contributing to impactful products.
              </p>
              {/* Tech Stack */}
<div className="pt-4">
  <p className="text-sm-400 mb-3">
    <b>Tech Stack</b>
  </p>

  <div className="flex flex-wrap justify-center gap-3">
    {[
      "Java",
      "C",
      "C++",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "HTML",
      "CSS",
      "Bootstrap",
      "Git",
    ].map((tech) => (
      <span
        key={tech}
        className="px-4 py-1.5 rounded-full text-sm
        border border-white/15
        text-gray-300
        hover:border-white/30
        transition"
      >
        {tech}
      </span>
    ))}
  </div>
</div>

            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2
              w-[60%] h-px
              bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </section>
        </AnimatedSection>

        {/* ================= PROJECTS ================= */}
        <AnimatedSection>
          <section
            id="projects"
            className="relative min-h-screen flex flex-col items-center justify-center gap-10 px-6"
          >
            {/* soft focus zone */}
            <div className="absolute inset-0 -z-10
              bg-gradient-to-b from-transparent via-white/5 to-transparent" />

            <h2
              className="text-4xl font-semibold font-[var(--font-space)]
              bg-gradient-to-r from-[#7F5DFF] to-[#58C7FF]
              bg-clip-text text-transparent"
            >
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="Campus Connect"
                description="A platform to manage college events, announcements, and student engagement."
                tech={["React", "Node.js", "MongoDB", "Express"]}
                github="https://github.com/Prayas-Mangrati/Campus-Connect.git"
                live="https://campus-connect-frontend-byzd.onrender.com"
              />
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2
              w-[60%] h-px
              bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </section>
        </AnimatedSection>

        {/* ================= CONTACT ================= */}
        <AnimatedSection>
          <section
            id="contact"
            className="relative min-h-screen flex flex-col items-center justify-center text-center gap-6"
          >
            <h2
              className="text-4xl font-semibold font-[var(--font-space)]
              bg-gradient-to-r from-[#7F5DFF] to-[#58C7FF]
              bg-clip-text text-transparent"
            >
              Let’s Connect
            </h2>

            <p className="text-gray-400 max-w-md">
              I’m open to internships, entry-level roles, and collaborative
              projects.
            </p>

            <div className="flex gap-6 pt-4">
              {[
                {
                  label: "Email",
                  href: "mailto:prayasmangrato4515@gmail.com",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/Prayas-Mangrati",
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/prayas-mangrati",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-5 py-2 rounded-full
                  border border-white/15
                  hover:border-white/30
                  transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
  href="/resume"
  target="_blank"
  className="mt-4 inline-flex items-center gap-2
  px-6 py-2 rounded-full
  border border-white/20
  hover:border-white/40
  transition"
>
  View Resume
</a>

          </section>
        </AnimatedSection>
      </SmoothScroll>

      {/* LOADER */}
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
    </>
  );
}
