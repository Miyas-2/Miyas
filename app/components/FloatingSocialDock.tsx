"use client";

import { useState, useEffect } from "react";
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  DownloadIcon,
} from "./Icons";

export default function FloatingSocialDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col transition-all duration-500 ${
        visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-4 pointer-events-none"
      }`}
      aria-label="Social links"
    >
      <div className="flex flex-col gap-2 bg-canvas/80 backdrop-blur-md border border-hairline rounded-[16px] p-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        <a
          href="https://github.com/Miyas-2"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-[10px] hover:bg-surface-card transition-colors"
          title="GitHub"
          id="dock-github"
        >
          <GitHubIcon className="w-[18px] h-[18px] text-ink" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-[10px] hover:bg-surface-card transition-colors"
          title="LinkedIn"
          id="dock-linkedin"
        >
          <LinkedInIcon className="w-[18px] h-[18px] text-ink" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-[10px] hover:bg-surface-card transition-colors"
          title="Instagram"
          id="dock-instagram"
        >
          <InstagramIcon className="w-[18px] h-[18px] text-ink" />
        </a>
        <div className="h-px bg-hairline mx-1" />
        <a
          href="/resume.pdf"
          download
          className="p-2.5 rounded-[10px] hover:bg-surface-card transition-colors"
          title="Download CV"
          id="dock-download-cv"
        >
          <DownloadIcon className="w-[18px] h-[18px] text-ink" />
        </a>
      </div>
    </div>
  );
}
