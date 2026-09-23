"use client";

import type { ComponentType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Braces, Cloud, Cpu, GitBranch, Network } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { skillGroups } from "@/content/skills";
import type { SkillGroup } from "@/content/types";

type IconComponent = ComponentType<{ className?: string; size?: number }>;

interface CapabilityDomain {
  readonly id: string;
  readonly label: string;
  readonly index: string;
  readonly description: string;
  readonly groupIds: readonly string[];
  readonly icon: IconComponent;
}

const capabilityDomains: readonly CapabilityDomain[] = [
  {
    id: "ai",
    label: "AI Engineering",
    index: "01",
    description: "Models, orchestration, retrieval",
    groupIds: ["ai-and-generative-ai"],
    icon: Cpu,
  },
  {
    id: "software",
    label: "Software",
    index: "02",
    description: "Languages, foundations, web & data",
    groupIds: ["programming-languages", "web-and-databases", "core-computer-science"],
    icon: Braces,
  },
  {
    id: "networking",
    label: "Networking",
    index: "03",
    description: "Networks and infrastructure",
    groupIds: ["networking-and-infrastructure"],
    icon: Network,
  },
  {
    id: "cloud",
    label: "Cloud",
    index: "04",
    description: "Cloud platforms and environments",
    groupIds: ["cloud-and-platforms"],
    icon: Cloud,
  },
  {
    id: "devops",
    label: "DevOps / Tools",
    index: "05",
    description: "Development workflow and tooling",
    groupIds: ["tools-and-technologies"],
    icon: GitBranch,
  },
];

function getSkillGroup(id: string): SkillGroup {
  const group = skillGroups.find((candidate) => candidate.id === id);

  if (!group) {
    throw new Error(`Missing skill group: ${id}`);
  }

  return group;
}

function StackNode({ reducedMotion }: { reducedMotion: boolean | null }) {
  return (
    <motion.div
      animate={
        reducedMotion
          ? undefined
          : {
              boxShadow: [
                "0 0 34px color-mix(in srgb, var(--brand) 8%, transparent)",
                "0 0 54px color-mix(in srgb, var(--brand) 17%, transparent)",
                "0 0 34px color-mix(in srgb, var(--brand) 8%, transparent)",
              ],
            }
      }
      className="relative flex min-h-32 w-full max-w-xs items-center justify-center border border-[color-mix(in_srgb,var(--brand)_52%,var(--border))] bg-[color-mix(in_srgb,var(--canvas)_88%,var(--brand-subtle))] px-7 py-6 text-center shadow-[0_0_50px_color-mix(in_srgb,var(--brand)_12%,transparent)]"
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <span aria-hidden="true" className="absolute -top-px left-6 h-px w-16 bg-[var(--brand)]" />
      <span
        aria-hidden="true"
        className="absolute -right-px bottom-6 h-16 w-px bg-[var(--brand)]"
      />
      <span
        aria-hidden="true"
        className="absolute right-6 -bottom-px h-px w-16 bg-[var(--brand)]"
      />
      <span aria-hidden="true" className="absolute top-6 -left-px h-16 w-px bg-[var(--brand)]" />
      <span>
        <span className="block font-mono text-[0.62rem] tracking-[0.2em] text-[var(--brand)] uppercase">
          Martin&apos;s
        </span>
        <span className="mt-2 block text-xl font-semibold tracking-[-0.04em] text-[var(--text)]">
          Engineering Stack
        </span>
        <span className="mt-3 block font-mono text-[0.58rem] tracking-[0.14em] text-[var(--text-muted)] uppercase">
          Connected capabilities
        </span>
      </span>
    </motion.div>
  );
}

function DomainPanel({ domain }: { domain: CapabilityDomain }) {
  const Icon = domain.icon;
  const groups = domain.groupIds.map(getSkillGroup);
  const skillCount = groups.reduce((total, group) => total + group.skills.length, 0);
  const layoutClass =
    domain.id === "ai"
      ? "sm:col-span-2 lg:col-span-7"
      : domain.id === "software"
        ? "sm:col-span-2 lg:col-span-5"
        : "lg:col-span-4";

  return (
    <motion.article
      aria-labelledby={`${domain.id}-skills-title`}
      className={`h-full ${layoutClass}`}
    >
      <Card
        className="relative h-full overflow-hidden border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_58%,transparent)] p-5 transition-[border-color,background-color,box-shadow] duration-300 hover:border-[color-mix(in_srgb,var(--brand)_44%,var(--border))] hover:bg-[var(--surface)] sm:p-6"
        variant="outlined"
      >
        <div aria-hidden="true" className="engineering-grid absolute inset-0 opacity-25" />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center border border-[color-mix(in_srgb,var(--brand)_40%,var(--border))] bg-[var(--brand-subtle)] text-[var(--brand)]">
                <Icon aria-hidden="true" size={17} />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[0.62rem] tracking-[0.16em] text-[var(--text-muted)] uppercase">
                    {domain.index}
                  </span>
                  <h3
                    className="text-base font-semibold tracking-[-0.02em] text-[var(--text)] sm:text-lg"
                    id={`${domain.id}-skills-title`}
                  >
                    {domain.label}
                  </h3>
                </div>
                <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">
                  {domain.description}
                </p>
              </div>
            </div>
            <Badge className="shrink-0" variant="neutral">
              {skillCount} documented
            </Badge>
          </div>

          <div className="mt-6 grid gap-5">
            {groups.map((group) => (
              <div key={group.id}>
                {groups.length > 1 ? (
                  <p className="mb-2 font-mono text-[0.6rem] tracking-[0.16em] text-[var(--brand)] uppercase">
                    {group.label}
                  </p>
                ) : null}
                <div className="grid gap-x-6 sm:grid-cols-2">
                  {group.skills.map((skill, skillIndex) => (
                    <div
                      className="flex min-h-10 items-center gap-3 border-t border-[var(--border)] py-2 text-sm text-[var(--text-muted)]"
                      key={skill}
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono text-[0.58rem] text-[var(--brand)]/80"
                      >
                        {String(skillIndex + 1).padStart(2, "0")}
                      </span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

export function Skills() {
  const reducedMotion = useReducedMotion();

  return (
    <Section
      id="skills"
      aria-labelledby="skills-title"
      className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[var(--canvas)]"
      spacing="relaxed"
    >
      <div aria-hidden="true" className="engineering-grid absolute inset-0 opacity-30" />
      <div
        aria-hidden="true"
        className="ambient-drift pointer-events-none absolute top-24 -right-40 size-[34rem] rounded-full bg-[var(--brand)]/10 blur-3xl"
      />

      <Container className="relative" size="wide">
        <div className="max-w-2xl">
          <SectionTitle id="skills-title" eyebrow="Engineering stack">
            How I build.
          </SectionTitle>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
            AI, software, infrastructure, networking, cloud, and development tooling connected as
            one working stack.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden border-y border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_36%,transparent)] px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
          <div aria-hidden="true" className="engineering-grid absolute inset-0 opacity-35" />
          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6">
            <div className="flex w-full items-center gap-3 font-mono text-[0.6rem] tracking-[0.18em] text-[var(--text-muted)] uppercase">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--brand)]/50" />
              <span className="text-[var(--brand)]">Capability map / 05 domains</span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--brand)]/50" />
            </div>

            <div className="flex w-full items-center justify-center gap-3 sm:gap-8">
              <span aria-hidden="true" className="h-px flex-1 bg-[var(--border-strong)]" />
              <StackNode reducedMotion={reducedMotion} />
              <span aria-hidden="true" className="h-px flex-1 bg-[var(--border-strong)]" />
            </div>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-[0.58rem] tracking-[0.12em] text-[var(--text-muted)] uppercase sm:gap-x-6">
              {capabilityDomains.map((domain) => (
                <span className="flex items-center gap-2" key={domain.id}>
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-[var(--brand)]" />
                  {domain.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {capabilityDomains.map((domain) => (
            <DomainPanel domain={domain} key={domain.id} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
