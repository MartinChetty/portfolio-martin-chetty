"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";
import { currentLearning } from "@/content/currentLearning";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
} as const;

const credentialHighlights = profile.specialties.filter((specialty) =>
  ["Java", "Python", "CCNA", "Generative AI", "Network Automation"].includes(specialty),
);

const focusAreas = currentLearning.filter(({ id }) =>
  [
    "software-automation",
    "data-center-infrastructure",
    "cloud-technologies",
    "ai-driven-automation",
  ].includes(id),
);

function HeroBackplane() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full overflow-visible text-[var(--brand)]"
      fill="none"
      viewBox="0 0 500 620"
    >
      <defs>
        <linearGradient id="hero-network-line" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="var(--brand)" stopOpacity="0" />
          <stop offset="0.5" stopColor="var(--brand)" stopOpacity="0.72" />
          <stop offset="1" stopColor="var(--brand)" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <path d="M10 116H55L75 96M2 456H48L74 478" stroke="url(#hero-network-line)" strokeWidth="1" />
      <path
        d="M490 156H447L425 180M498 482H452L426 454"
        stroke="url(#hero-network-line)"
        strokeWidth="1"
      />
      <path
        d="M75 96V72M425 180V150M74 478V510M426 454V500"
        stroke="var(--brand)"
        strokeOpacity="0.34"
      />
      <circle cx="10" cy="116" fill="var(--brand)" fillOpacity="0.9" r="3" />
      <circle cx="2" cy="456" fill="var(--brand)" fillOpacity="0.45" r="2" />
      <circle cx="490" cy="156" fill="var(--brand)" fillOpacity="0.7" r="2.5" />
      <circle cx="498" cy="482" fill="var(--brand)" fillOpacity="0.42" r="3" />
      <circle
        cx="75"
        cy="72"
        fill="var(--canvas)"
        r="3.5"
        stroke="var(--brand)"
        strokeOpacity="0.62"
      />
      <circle
        cx="425"
        cy="150"
        fill="var(--canvas)"
        r="3.5"
        stroke="var(--brand)"
        strokeOpacity="0.62"
      />
      <circle
        cx="74"
        cy="510"
        fill="var(--canvas)"
        r="3.5"
        stroke="var(--brand)"
        strokeOpacity="0.62"
      />
      <circle
        cx="426"
        cy="500"
        fill="var(--canvas)"
        r="3.5"
        stroke="var(--brand)"
        strokeOpacity="0.62"
      />
    </svg>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const motionInitial = reduceMotion ? false : { opacity: 0, y: 18 };
  const motionAnimate = reduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[var(--canvas)]"
      id="about"
    >
      <div
        aria-hidden="true"
        className="engineering-grid pointer-events-none absolute inset-0 opacity-25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-18rem] right-[-10rem] size-[38rem] rounded-full bg-[var(--brand)]/8 blur-[120px]"
      />

      <Container
        className="relative grid min-h-[calc(100svh-5rem)] items-center gap-10 py-10 sm:gap-14 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(23rem,0.72fr)] lg:gap-16 lg:py-16"
        size="wide"
      >
        <motion.div
          animate={motionAnimate}
          className="relative z-10 max-w-2xl"
          initial={motionInitial}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 font-mono text-[0.64rem] font-semibold tracking-[0.18em] text-[var(--brand)] uppercase">
            <span className="size-1.5 rounded-full bg-[var(--brand)] shadow-[0_0_14px_var(--brand)]" />
            Available for meaningful systems
            <span className="text-[var(--text-muted)]">/</span>
            <span className="text-[var(--text-muted)]">{profile.location}</span>
          </div>

          <div className="mt-8 sm:mt-10">
            <p className="font-mono text-sm font-semibold tracking-[0.16em] text-[var(--text-muted)] uppercase">
              {profile.name}
            </p>
            <p className="mt-3 text-base font-medium text-[var(--text)] sm:text-lg">
              {profile.role} <span className="text-[var(--brand)]">@</span> {profile.organization}
            </p>
          </div>

          <h1
            className="mt-8 max-w-[10ch] text-[clamp(3.25rem,6.4vw,5.7rem)] leading-[0.93] font-semibold tracking-[-0.065em] text-[var(--text)] sm:mt-9"
            id="hero-title"
          >
            I build
            <span className="block bg-gradient-to-r from-[var(--brand)] via-cyan-300 to-[var(--brand-strong)] bg-clip-text text-transparent">
              intelligent
            </span>
            <span className="block text-[var(--text-muted)]">systems.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[var(--text-muted)] sm:mt-8 sm:text-lg sm:leading-8">
            Software automation, AI engineering, network automation, and infrastructure.
          </p>

          <div className="mt-7 flex flex-wrap gap-2 sm:mt-8">
            {credentialHighlights.map((highlight) => (
              <Badge className="bg-[var(--surface-subtle)]" key={highlight} variant="neutral">
                {highlight}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 sm:mt-9 sm:flex-row sm:items-center">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[var(--brand)] bg-[var(--brand)] px-5 text-sm font-semibold text-[var(--on-brand)] shadow-[0_10px_30px_color-mix(in_srgb,var(--brand)_18%,transparent)] transition-[background-color,border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-[var(--brand-strong)] hover:bg-[var(--brand-strong)] hover:shadow-[0_14px_34px_color-mix(in_srgb,var(--brand)_24%,transparent)] focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--canvas)] focus-visible:outline-none motion-reduce:transform-none"
              href="#projects"
            >
              View Projects
              <ArrowUpRight size={16} />
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[color-mix(in_srgb,var(--surface)_78%,transparent)] px-5 text-sm font-semibold text-[var(--text)] backdrop-blur-md transition-[background-color,border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-[var(--brand)] hover:bg-[var(--surface-subtle)] focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--canvas)] focus-visible:outline-none motion-reduce:transform-none"
              download
              href="/documents/resume.pdf"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--border)] pt-5 sm:mt-9">
            <span className="font-mono text-[0.62rem] tracking-[0.16em] text-[var(--text-muted)] uppercase">
              Connect
            </span>
            {socials.map((social) => {
              const Icon = socialIcons[social.platform];

              return (
                <a
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--brand)] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:outline-none"
                  href={social.href}
                  key={social.platform}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon size={15} />
                  {social.label}
                  <ArrowUpRight size={13} />
                </a>
              );
            })}
          </div>

          <div className="mt-7 grid max-w-xl grid-cols-2 gap-x-4 gap-y-2 border-t border-[var(--border)] pt-5">
            {focusAreas.map((area) => (
              <div
                className="flex items-center gap-2 text-sm text-[var(--text-muted)]"
                key={area.id}
              >
                <span className="size-1.5 rounded-full bg-[var(--brand)]" />
                {area.label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={motionAnimate}
          className="relative mx-auto w-full max-w-[31rem] lg:justify-self-end"
          initial={motionInitial}
          transition={{ delay: reduceMotion ? 0 : 0.12, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 z-0 hidden sm:block"
          >
            <HeroBackplane />
          </div>

          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-between font-mono text-[0.62rem] font-semibold tracking-[0.17em] text-[var(--text-muted)] uppercase">
              <span className="text-[var(--brand)]">Portrait / 01</span>
              <span>Martin Chetty</span>
            </div>

            <div className="relative aspect-[0.82] overflow-hidden rounded-[1.35rem] border border-[color-mix(in_srgb,var(--brand)_42%,var(--border))] bg-[#d8e3e7] shadow-[0_30px_90px_color-mix(in_srgb,var(--brand)_10%,transparent)]">
              <Image
                alt="Martin Chetty"
                className="object-cover object-top mix-blend-multiply"
                fill
                priority
                sizes="(max-width: 1023px) 92vw, 38vw"
                src="/images/profile/martin-chetty.jpg"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--canvas)]/72 via-[var(--canvas)]/16 to-transparent"
              />
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-3 font-mono text-[0.58rem] tracking-[0.15em] text-[var(--text-muted)] uppercase">
              <span>Software automation</span>
              <span className="text-[var(--brand)]">Cisco Systems</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
