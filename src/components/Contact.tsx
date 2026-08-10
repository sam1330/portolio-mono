"use client";

import { useEffect, useState } from "react";
import ArrowUpRightIcon from "./Icons/ArrowUpRightIcon";
import GitHubIcon from "./Icons/GitHubIcon";
import LinkedInIcon from "./Icons/LinkedInIcon";
import MailIcon from "./Icons/MailIcon";

const EMAIL = "samtrabajo13@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/samuel-martinez-b742811b4/";
const GITHUB = "https://github.com/sam1330";

const cardClasses =
  "group relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/[0.07]";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full flex justify-center bg-black text-white px-5 md:px-0 pb-16"
    >
      <div className="w-full md:w-3/4 flex flex-col">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <div className="pt-16 md:pt-24">
          <p className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-stone-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </p>

          <h1 className="text-5xl md:text-6xl font-light leading-[1.2] md:leading-[5rem] mb-6">
            Let&apos;s build something{" "}
            <span className="font-semibold">together</span>
          </h1>

          <p className="text-stone-500 text-lg max-w-2xl mb-12">
            Whether it&apos;s an AI system you want taken from prototype to
            production, a full-stack product, or just a conversation about
            agents and LLMs — my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClasses}
          >
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 group-hover:bg-[#0A66C2]">
                <LinkedInIcon size={22} />
              </span>
              <ArrowUpRightIcon className="text-stone-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-stone-500 mb-2">
                LinkedIn
              </p>
              <p className="text-xl font-semibold">Samuel Martinez</p>
              <p className="text-stone-500">Let&apos;s connect</p>
            </div>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className={cardClasses}
          >
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 group-hover:bg-blue-600">
                <MailIcon size={22} />
              </span>
              <ArrowUpRightIcon className="text-stone-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-stone-500 mb-2">
                Email
              </p>
              <p className="text-xl font-semibold break-all">{EMAIL}</p>
              <p className="text-stone-500">Usually replies within a day</p>
            </div>
          </a>

          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClasses}
          >
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                <GitHubIcon size={22} />
              </span>
              <ArrowUpRightIcon className="text-stone-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-stone-500 mb-2">
                GitHub
              </p>
              <p className="text-xl font-semibold">@sam1330</p>
              <p className="text-stone-500">Code &amp; side projects</p>
            </div>
          </a>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4">
          <button
            type="button"
            onClick={copyEmail}
            className="self-start rounded-full border border-white/20 px-5 py-2 text-sm text-stone-300 transition-colors duration-300 hover:border-white hover:text-white"
          >
            {copied ? "Copied to clipboard ✓" : "Copy email address"}
          </button>
          <p className="text-sm text-stone-500">
            Based in LATAM — available remotely across US &amp; EU time zones.
          </p>
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/10 pt-8 text-sm text-stone-500">
          <p>
            © {new Date().getFullYear()} Samuel Martinez — Full Stack &amp; AI
            Engineer
          </p>
          <div className="flex items-center gap-5">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors duration-300 hover:text-white"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors duration-300 hover:text-white"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="transition-colors duration-300 hover:text-white"
            >
              <MailIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
