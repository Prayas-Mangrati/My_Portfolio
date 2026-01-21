"use client";

import { Home, User, Briefcase, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];


export default function BottomNav() {
  const pathname = usePathname();

if (pathname === "/resume") return null;

  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-neutral-900/80 backdrop-blur-md px-6 py-3 rounded-full flex gap-6 z-50">
      {sections.map(({ id, label, icon: Icon }) => (
  <button
    key={id}
    onClick={() =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
    className={`flex flex-col items-center gap-1 transition ${
      active === id
  ? "scale-110 text-white"
  : "text-gray-400"

    }`}
  >
    <Icon size={20} />
    <span
  className={`text-xs ${
    active === id
      ? "bg-gradient-to-r from-[#7F5DFF] to-[#58C7FF] bg-clip-text text-transparent"
      : ""
  }`}
>
  {label}
</span>
  </button>
))}
    </nav>
  );
}
