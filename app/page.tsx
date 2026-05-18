"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Loader from "./Loader";
import AnimatedSection from "./AnimatedSection";
import SmoothScroll from "./SmoothScroll";
import ProjectCard from "./ProjectCard";

const techStack = [
  { name: "Java", level: 95 },
  { name: "C", level: 80 },
  { name: "SQL", level: 80 },
  { name: "C++", level: 90 },
  { name: "JavaScript", level: 94 },
  { name: "TypeScript", level: 75 },
  { name: "Next.js", level: 80 },
  { name: "React", level: 91 },
  { name: "Tailwind CSS", level: 93 },
  { name: "Node.js", level: 88 },
  { name: "Express", level: 86 },
  { name: "MongoDB", level: 83 },
  { name: "REST APIs", level: 85 },
  { name: "GitHub", level: 92 },
  { name: "HTML", level: 96 },
  { name: "CSS", level: 95 },
  { name: "Bootstrap", level: 82 },
  { name: "Git", level: 90 },
];

function TechProgressCard({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  return (
    <motion.div
      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay }}
      viewport={{ amount: 0.3, once: true }}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-xs text-gray-400">{level}%</span>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#7F5DFF] via-[#58C7FF] to-[#7F5DFF]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.1, delay: delay + 0.1, ease: "easeOut" }}
          viewport={{ amount: 0.3, once: true }}
        />
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [profileMissing, setProfileMissing] = useState(false);

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
            className="relative min-h-screen flex flex-col items-center justify-center gap-10 text-center md:flex-row md:justify-between md:text-left"
          >
            <div className="relative flex h-56 w-56 items-center justify-center md:h-72 md:w-72 md:flex-shrink-0">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7F5DFF] via-[#58C7FF] to-[#7F5DFF] opacity-70 blur-xl"
                animate={{ rotate: 360, scale: [1, 1.03, 1] }}
                transition={{
                  rotate: { repeat: Infinity, duration: 10, ease: "linear" },
                  scale: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                }}
              />

              <div className="absolute inset-[8px] overflow-hidden rounded-full border border-white/10 bg-[#090b13] shadow-2xl shadow-[#58C7FF]/10">
                {!profileMissing ? (
                  <Image
                    src="/profile_pic.jpeg"
                    alt="Prayas profile photo"
                    fill
                    sizes="(max-width: 768px) 224px, 288px"
                    className="object-cover object-[50%_18%] scale-[0.92]"
                    loading="eager"
                    onError={() => setProfileMissing(true)}
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-white/6 to-white/0 px-6 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl font-semibold text-white">
                      P
                    </div>
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
                      Profile photo unavailable
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="max-w-2xl space-y-6">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-gray-400">
                  Portfolio
                </p>
                <h1 className="text-5xl font-bold font-[var(--font-space)] text-white md:text-7xl">
                  Hi, I’m{" "}
                  <span className="bg-gradient-to-r from-[#7F5DFF] to-[#58C7FF] bg-clip-text text-transparent">
                    Prayas
                  </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-xl">
                  Aspiring Software Developer · Full Stack Developer · Problem Solver
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                {["Software Engineer", "Problem Solver", "Java • MERN"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-4 py-1.5 rounded-full text-sm border border-white/15 text-gray-300"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-center md:justify-start pt-2">
                <a
                  href="/resume"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2 transition hover:border-white/40"
                >
                  View Resume
                </a>
              </div>
            </div>

            {/* section divider */}
            <div className="absolute bottom-0 left-1/2 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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
                I am a B.Tech Computer Science and Engineering student passionate about software development and problem-solving. Currently, I am improving my skills in Java, Data Structures & Algorithms, and web development through continuous learning and hands-on practice.
              </p>

              <p className="text-gray-400">
               I regularly solve coding problems on LeetCode to strengthen my logical thinking and problem-solving abilities. Alongside this, I enjoy building projects and exploring new technologies to expand my knowledge in the tech field.
              </p>

              <p className="text-gray-400">
                My goal is to become a skilled software engineer and contribute to impactful real-world projects. I am always eager to learn, grow, and connect with like-minded people in the tech community.
              </p>

            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2
              w-[60%] h-px
              bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </section>
        </AnimatedSection>

        {/* ================= TECH STACK ================= */}
        <AnimatedSection>
          <section
            id="tech"
            className="relative min-h-screen scroll-mt-12 flex flex-col items-center justify-start gap-10 px-6 pt-12 text-center"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

            <div className="max-w-2xl space-y-4">
              <h2
                className="text-4xl font-semibold font-[var(--font-space)]
                bg-gradient-to-r from-[#7F5DFF] to-[#58C7FF]
                bg-clip-text text-transparent"
              >
                Tech Stack
              </h2>
              <p className="text-gray-400">
                A separate view of the tools and languages I work with. More to Come...
              </p>
            </div>

            <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {techStack.map((tech, index) => (
                <TechProgressCard
                  key={tech.name}
                  name={tech.name}
                  level={tech.level}
                  delay={index * 0.05}
                />
              ))}
            </div>

            <div className="absolute bottom-0 left-1/2 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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

              <ProjectCard
                title="VoiceNav+"
                description="A voice-driven Chrome extension that enables hands-free browser navigation and AI-assisted browsing using speech recognition and text-to-speech."
                tech={[
                  "JavaScript",
                  "Chrome Extensions API",
                  "Web Speech API",
                  "Node.js",
                  "Express",
                  "Groq LLM"
                ]}
                github="https://github.com/Prayas-Mangrati/Voice-Nav-Extension"
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
      <AnimatePresence initial={false} mode="wait">
        {loading ? <Loader key="loader" /> : null}
      </AnimatePresence>
    </>
  );
}
