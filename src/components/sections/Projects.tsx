"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  Bot,
  ChevronDown,
  ExternalLink,
  FileText,
  Globe2,
  Mail,
  Map,
  PencilLine,
  RefreshCw,
  Search,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { useState } from "react";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/content/projects";
import type { Project } from "@/content/types";

type ProjectVisualKind = "document" | "agent" | "travel" | "email";

const visualKinds: Record<string, ProjectVisualKind> = {
  "ai-document-qa-system": "document",
  "agentic-chatbot": "agent",
  "ai-india-travel-planner": "travel",
  "ai-email-agent": "email",
};

function ProjectVisual({
  kind,
  featured = false,
}: {
  kind: ProjectVisualKind;
  featured?: boolean;
}) {
  if (kind === "document") {
    return (
      <div
        aria-hidden="true"
        className={`relative overflow-hidden rounded-[1.35rem] border border-[color-mix(in_srgb,var(--brand)_28%,var(--border))] bg-[var(--canvas)] ${featured ? "min-h-72 sm:min-h-80" : "min-h-48"}`}
      >
        <div className="engineering-grid absolute inset-0 opacity-60" />
        <div className="absolute top-5 right-5 left-5 flex items-center justify-between font-mono text-[0.58rem] tracking-[0.16em] text-[var(--text-muted)] uppercase">
          <span className="text-[var(--brand)]">Retrieval pipeline</span>
          <span>RAG / 01</span>
        </div>
        <div className="absolute inset-x-5 top-1/2 grid -translate-y-1/2 grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 sm:inset-x-8 sm:gap-3">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex size-12 items-center justify-center rounded-xl border border-[color-mix(in_srgb,var(--brand)_35%,var(--border))] bg-[var(--brand-subtle)] text-[var(--brand)] shadow-[0_0_28px_color-mix(in_srgb,var(--brand)_12%,transparent)] sm:size-14">
              <FileText size={20} />
            </div>
            <span className="font-mono text-[0.55rem] tracking-[0.12em] text-[var(--text-muted)] uppercase">
              Documents
            </span>
          </div>
          <ArrowDown className="-rotate-90 text-[var(--brand)]" size={15} />
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex size-12 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface-subtle)] text-[var(--text)] sm:size-14">
              <Search size={20} />
            </div>
            <span className="font-mono text-[0.55rem] tracking-[0.12em] text-[var(--text-muted)] uppercase">
              Vector search
            </span>
          </div>
          <ArrowDown className="-rotate-90 text-[var(--brand)]" size={15} />
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex size-12 items-center justify-center rounded-xl border border-[color-mix(in_srgb,var(--brand)_35%,var(--border))] bg-[var(--brand-subtle)] text-[var(--brand-strong)] sm:size-14">
              <Sparkles size={20} />
            </div>
            <span className="font-mono text-[0.55rem] tracking-[0.12em] text-[var(--text-muted)] uppercase">
              Answer + context
            </span>
          </div>
        </div>
        <div className="absolute right-5 bottom-5 left-5 h-px bg-gradient-to-r from-transparent via-[var(--brand)]/50 to-transparent" />
      </div>
    );
  }

  if (kind === "agent") {
    return (
      <div
        aria-hidden="true"
        className="relative min-h-48 overflow-hidden rounded-[1.35rem] border border-[var(--border)] bg-[var(--canvas)] p-4"
      >
        <div className="engineering-grid absolute inset-0 opacity-45" />
        <div className="relative flex h-full min-h-36 items-center justify-center">
          <svg
            className="absolute inset-0 h-full w-full text-[var(--brand)]/45"
            fill="none"
            viewBox="0 0 360 210"
          >
            <path
              d="M180 104L76 57M180 104L284 57M180 104L286 157M180 104L74 157"
              stroke="currentColor"
              strokeDasharray="4 7"
            />
          </svg>
          <div className="relative flex size-20 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--brand)_48%,var(--border))] bg-[var(--brand-subtle)] text-[var(--brand)] shadow-[0_0_38px_color-mix(in_srgb,var(--brand)_16%,transparent)]">
            <Bot size={28} />
          </div>
          {[
            { icon: Search, label: "Search", position: "top-3 left-4" },
            { icon: Sparkles, label: "Summarize", position: "top-3 right-4" },
            { icon: Globe2, label: "Web", position: "bottom-3 right-5" },
            { icon: Bot, label: "Reason", position: "bottom-3 left-5" },
          ].map(({ icon: Icon, label, position }) => (
            <div
              className={`absolute ${position} flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 font-mono text-[0.55rem] tracking-[0.1em] text-[var(--text-muted)] uppercase`}
              key={label}
            >
              <Icon className="text-[var(--brand)]" size={12} />
              {label}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "travel") {
    return (
      <div
        aria-hidden="true"
        className="relative min-h-48 overflow-hidden rounded-[1.35rem] border border-[var(--border)] bg-[var(--canvas)] p-4"
      >
        <div className="engineering-grid absolute inset-0 opacity-45" />
        <div className="relative flex min-h-36 items-center justify-center">
          <svg
            className="absolute inset-0 h-full w-full text-[var(--brand)]/55"
            fill="none"
            viewBox="0 0 360 210"
          >
            <path
              d="M50 150C93 128 93 61 158 80C202 93 203 145 257 130C285 122 300 84 320 59"
              stroke="currentColor"
              strokeDasharray="4 7"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="150" fill="var(--brand)" r="4" />
            <circle
              cx="158"
              cy="80"
              fill="var(--canvas)"
              r="5"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="257"
              cy="130"
              fill="var(--canvas)"
              r="5"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="320" cy="59" fill="var(--brand)" r="4" />
          </svg>
          <div className="relative rounded-2xl border border-[color-mix(in_srgb,var(--brand)_35%,var(--border))] bg-[var(--brand-subtle)] px-5 py-4 text-center shadow-[0_0_30px_color-mix(in_srgb,var(--brand)_10%,transparent)]">
            <Map className="mx-auto text-[var(--brand)]" size={22} />
            <p className="mt-2 font-mono text-[0.58rem] tracking-[0.14em] text-[var(--text)] uppercase">
              Personalized route
            </p>
          </div>
          <div className="absolute top-2 left-3 flex items-center gap-1.5 font-mono text-[0.55rem] tracking-[0.12em] text-[var(--text-muted)] uppercase">
            <span className="size-1.5 rounded-full bg-[var(--brand)]" />
            Itinerary
          </div>
          <div className="absolute right-3 bottom-2 flex items-center gap-1.5 font-mono text-[0.55rem] tracking-[0.12em] text-[var(--text-muted)] uppercase">
            <span className="size-1.5 rounded-full bg-[var(--brand)]" />
            Hotels
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="relative min-h-48 overflow-hidden rounded-[1.35rem] border border-[var(--border)] bg-[var(--canvas)] p-4"
    >
      <div className="engineering-grid absolute inset-0 opacity-45" />
      <div className="relative flex min-h-36 flex-col justify-center gap-3">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl border border-[color-mix(in_srgb,var(--brand)_35%,var(--border))] bg-[var(--brand-subtle)] text-[var(--brand)]">
            <Mail size={19} />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-[var(--brand)]/60 to-transparent" />
          <div className="flex size-11 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface-subtle)] text-[var(--text)]">
            <Sparkles size={19} />
          </div>
        </div>
        <div className="grid grid-cols-3 items-center gap-2 font-mono text-[0.55rem] tracking-[0.12em] text-[var(--text-muted)] uppercase">
          <span>Draft</span>
          <span className="text-center text-[var(--brand)]">Refine</span>
          <span className="text-right">Response</span>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text-muted)]">
          <PencilLine className="shrink-0 text-[var(--brand)]" size={15} />
          <span className="truncate">Professional email workflow</span>
          <RefreshCw className="ml-auto shrink-0 text-[var(--text-muted)]" size={14} />
        </div>
      </div>
    </div>
  );
}

function ProjectPanel({
  detailsOpen,
  index,
  onToggleDetails,
  project,
  reduceMotion,
}: {
  detailsOpen: boolean;
  index: number;
  onToggleDetails: () => void;
  project: Project;
  reduceMotion: boolean | null;
}) {
  const featured = index === 0;
  const visualKind = visualKinds[project.id];
  const summary = project.highlights[0];
  const detailsId = `${project.id}-details`;
  const detailsTriggerId = `${project.id}-details-trigger`;

  return (
    <motion.article
      aria-labelledby={`${project.id}-title`}
      className={featured ? "lg:col-span-12" : "lg:col-span-4"}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      transition={{
        delay: reduceMotion ? 0 : Math.min(index * 0.06, 0.18),
        duration: reduceMotion ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ amount: 0.12, once: true }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Card
        className={`group h-full overflow-hidden transition-[border-color,box-shadow,background-color] duration-300 ${
          featured
            ? "border-[color-mix(in_srgb,var(--brand)_34%,var(--border))] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand)_8%,var(--surface)),var(--surface)_58%)] p-5 shadow-[0_24px_80px_color-mix(in_srgb,#000_14%,transparent)] sm:p-7"
            : "border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_58%,transparent)] p-4 hover:border-[var(--border-strong)] hover:bg-[var(--surface)] sm:p-5"
        }`}
        variant="outlined"
      >
        <div
          className={
            featured
              ? "grid items-stretch gap-7 lg:grid-cols-[minmax(0,0.88fr)_minmax(24rem,1.12fr)] lg:gap-10"
              : "flex flex-col"
          }
        >
          <div className="flex min-w-0 flex-col">
            <div className="flex items-start justify-between gap-4">
              <Badge variant={featured ? "brand" : "neutral"}>
                {featured ? "Featured system" : `Project 0${index + 1}`}
              </Badge>
              <span className="font-mono text-[0.6rem] tracking-[0.14em] text-[var(--text-muted)] uppercase">
                0{index + 1} / 04
              </span>
            </div>
            <h3
              className="mt-6 max-w-xl text-2xl font-semibold tracking-[-0.045em] text-[var(--text)] sm:text-3xl"
              id={`${project.id}-title`}
            >
              {project.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
              {project.description}
            </p>
            {featured ? (
              <p className="mt-5 border-l border-[var(--brand)]/60 pl-4 text-sm leading-7 text-[var(--text)]">
                {summary}
              </p>
            ) : null}
            <div className="mt-auto pt-7">
              <div className="flex flex-wrap gap-2">
                {(featured ? project.technologies : project.technologies.slice(0, 3)).map(
                  (technology) => (
                    <Pill key={technology}>{technology}</Pill>
                  ),
                )}
              </div>
              <ProjectLinks className="mt-5" links={project.links} />
            </div>
          </div>

          <div className={featured ? "flex min-h-full flex-col" : "mt-6"}>
            <ProjectVisual featured={featured} kind={visualKind} />
            {!featured ? (
              <p className="mt-5 text-sm leading-7 text-[var(--text-muted)]">{summary}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-7 border-t border-[var(--border)] pt-4">
          <button
            aria-controls={detailsId}
            aria-expanded={detailsOpen}
            className={`flex w-full cursor-pointer items-center justify-between gap-4 text-left text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:outline-none ${detailsOpen ? "text-[var(--brand)]" : "text-[var(--text-muted)] hover:text-[var(--text)]"}`}
            id={detailsTriggerId}
            onClick={onToggleDetails}
            type="button"
          >
            <span>Project details</span>
            <ChevronDownIcon expanded={detailsOpen} />
          </button>

          {featured ? (
            <AnimatePresence initial={false}>
              {detailsOpen ? (
                <motion.div
                  animate={{ height: "auto", opacity: 1 }}
                  aria-labelledby={detailsTriggerId}
                  className="overflow-hidden"
                  exit={{ height: 0, opacity: 0 }}
                  id={detailsId}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectDetailsContent project={project} />
                </motion.div>
              ) : null}
            </AnimatePresence>
          ) : (
            <AnimatePresence initial={false}>
              {detailsOpen ? (
                <motion.div
                  animate={{ height: "auto", opacity: 1 }}
                  aria-labelledby={detailsTriggerId}
                  className="overflow-hidden lg:hidden"
                  exit={{ height: 0, opacity: 0 }}
                  id={detailsId}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectDetailsContent project={project} />
                </motion.div>
              ) : null}
            </AnimatePresence>
          )}
        </div>
      </Card>
    </motion.article>
  );
}

function ProjectDetailsContent({ project }: { project: Project }) {
  return (
    <div className="mt-6 grid gap-x-8 gap-y-7 border-l border-[var(--border-strong)] pl-4 sm:pl-5 lg:grid-cols-2">
      <div className="lg:col-span-2">
        <ProjectDetailLabel>Problem</ProjectDetailLabel>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--text-muted)]">
          {project.details.problem}
        </p>
      </div>

      <div>
        <ProjectDetailLabel>Architecture / workflow</ProjectDetailLabel>
        <ol className="mt-3 grid gap-2.5">
          {project.details.architecture.map((step, stepIndex) => (
            <li
              className="flex items-start gap-3 text-sm leading-6 text-[var(--text-muted)]"
              key={step}
            >
              <span className="mt-0.5 min-w-5 font-mono text-[0.62rem] text-[var(--brand)]">
                {String(stepIndex + 1).padStart(2, "0")}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <ProjectDetailLabel>Key capabilities</ProjectDetailLabel>
        <ul className="mt-3 grid gap-2.5 text-sm leading-6 text-[var(--text-muted)]">
          {project.details.capabilities.map((capability) => (
            <li className="flex items-start gap-2.5" key={capability}>
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
              <span>{capability}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ProjectDetailLabel>Engineering focus</ProjectDetailLabel>
        <ul className="mt-3 grid gap-2.5 text-sm leading-6 text-[var(--text-muted)]">
          {project.details.engineeringFocus.map((focus) => (
            <li className="flex items-start gap-2.5" key={focus}>
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
              <span>{focus}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ProjectDetailLabel>Build notes</ProjectDetailLabel>
        <ul className="mt-3 grid gap-2.5 text-sm leading-6 text-[var(--text-muted)]">
          {project.highlights.map((highlight) => (
            <li className="flex items-start gap-2.5" key={highlight}>
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--border-strong)]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProjectDetailLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[0.62rem] font-semibold tracking-[0.14em] text-[var(--brand)] uppercase">
      {children}
    </p>
  );
}

function ProjectLinks({ className = "", links }: { className?: string; links?: Project["links"] }) {
  if (!links?.github && !links?.liveDemo) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.github ? (
        <a
          className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-[var(--border-strong)] px-3 text-xs font-semibold text-[var(--text)] transition-[background-color,border-color,color] hover:border-[var(--brand)] hover:bg-[var(--surface-subtle)] hover:text-[var(--brand)] focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:outline-none"
          href={links.github}
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub size={14} />
          View on GitHub
        </a>
      ) : null}
      {links.liveDemo ? (
        <a
          className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-[var(--border-strong)] px-3 text-xs font-semibold text-[var(--text)] transition-[background-color,border-color,color] hover:border-[var(--brand)] hover:bg-[var(--surface-subtle)] hover:text-[var(--brand)] focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:outline-none"
          href={links.liveDemo}
          rel="noreferrer"
          target="_blank"
        >
          <ExternalLink size={14} />
          Live Demo
        </a>
      ) : null}
    </div>
  );
}

function ChevronDownIcon({ expanded }: { expanded: boolean }) {
  return (
    <ChevronDown
      aria-hidden="true"
      className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
      size={17}
    />
  );
}

export function Projects() {
  const reduceMotion = useReducedMotion();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const selectedProject = projects.find(({ id }) => id === selectedProjectId);
  const selectedSecondaryProject =
    selectedProject?.id === projects[0]?.id ? undefined : selectedProject;

  function toggleProjectDetails(projectId: string) {
    setSelectedProjectId((currentProjectId) => (currentProjectId === projectId ? null : projectId));
  }

  return (
    <Section
      aria-labelledby="projects-title"
      className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[var(--canvas)]"
      id="projects"
      spacing="relaxed"
    >
      <div
        aria-hidden="true"
        className="engineering-grid pointer-events-none absolute inset-0 opacity-30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-[-16rem] size-[34rem] rounded-full bg-indigo-500/10 blur-[120px]"
      />
      <Container className="relative" size="wide">
        <div className="max-w-2xl">
          <SectionTitle eyebrow="Projects" id="projects-title">
            Systems I have built.
          </SectionTitle>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
            A selection of work exploring retrieval, agents, automation, and practical software
            engineering.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-12 lg:gap-6">
          {projects.map((project, index) => (
            <ProjectPanel
              detailsOpen={selectedProjectId === project.id}
              index={index}
              key={project.id}
              onToggleDetails={() => toggleProjectDetails(project.id)}
              project={project}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <AnimatePresence initial={false} mode="wait">
          {selectedSecondaryProject ? (
            <motion.div
              animate={{ height: "auto", opacity: 1 }}
              aria-labelledby="selected-project-details-title"
              className="hidden overflow-hidden lg:block"
              exit={{ height: 0, opacity: 0 }}
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              key={selectedSecondaryProject.id}
              transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card
                className="mt-6 border-[color-mix(in_srgb,var(--brand)_34%,var(--border))] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand)_6%,var(--surface)),var(--surface)_58%)] p-5 sm:p-7"
                id="selected-project-details"
                variant="outlined"
              >
                <div className="border-b border-[var(--border)] pb-5">
                  <p className="font-mono text-[0.62rem] font-semibold tracking-[0.16em] text-[var(--brand)] uppercase">
                    Project{" "}
                    {String(projects.indexOf(selectedSecondaryProject) + 1).padStart(2, "0")}{" "}
                    details
                  </p>
                  <h3
                    className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-3xl"
                    id="selected-project-details-title"
                  >
                    {selectedSecondaryProject.name}
                  </h3>
                </div>
                <ProjectDetailsContent project={selectedSecondaryProject} />
              </Card>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
