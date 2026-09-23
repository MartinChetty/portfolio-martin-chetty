"use client";

import { Box, Braces, Cloud, GitBranch, Network, Terminal } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { currentLearning } from "@/content/currentLearning";
import type { LearningArea } from "@/content/types";

function LearningIcon({ id }: { id: string }) {
  switch (id) {
    case "linux-administration":
      return <Terminal aria-hidden="true" size={18} />;
    case "docker":
      return <Box aria-hidden="true" size={18} />;
    case "aws":
      return <Cloud aria-hidden="true" size={18} />;
    case "fastapi":
      return <Braces aria-hidden="true" size={18} />;
    case "devops":
      return <GitBranch aria-hidden="true" size={18} />;
    case "network-automation":
      return <Network aria-hidden="true" size={18} />;
    default:
      return <Braces aria-hidden="true" size={18} />;
  }
}

function LearningEntry({
  area,
  index,
  total,
}: {
  area: LearningArea;
  index: number;
  total: string;
}) {
  const entryNumber = String(index + 1).padStart(2, "0");

  return (
    <li>
      <Card
        className={`group relative h-full overflow-hidden rounded-none p-5 transition-[border-color,background-color,box-shadow,transform] duration-300 focus-within:border-[var(--brand)] hover:-translate-y-0.5 motion-reduce:transform-none sm:p-6 lg:p-7 ${area.featured ? "border-[color-mix(in_srgb,var(--brand)_48%,var(--border))] bg-[linear-gradient(110deg,color-mix(in_srgb,var(--brand)_10%,transparent),color-mix(in_srgb,var(--surface)_55%,transparent)_55%,transparent)] shadow-[0_0_42px_color-mix(in_srgb,var(--brand)_7%,transparent)]" : "bg-[color-mix(in_srgb,var(--surface)_38%,transparent)] hover:border-[color-mix(in_srgb,var(--brand)_40%,var(--border))]"}`}
        variant="outlined"
      >
        <div aria-hidden="true" className="engineering-grid absolute inset-0 opacity-25" />

        <article
          aria-labelledby={`${area.id}-title`}
          className="relative flex h-full flex-col outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--canvas)]"
        >
          <div className="flex items-start justify-between gap-4">
            <span
              className={`font-mono text-xs tracking-[0.14em] ${area.featured ? "text-[var(--brand)]" : "text-[var(--text-muted)]"}`}
            >
              {entryNumber} / {total}
            </span>
            <span className="font-mono text-[0.6rem] tracking-[0.16em] text-[var(--brand)] uppercase">
              Learning
            </span>
          </div>

          <div className="mt-8 flex flex-1 items-start gap-4">
            <span
              aria-hidden="true"
              className={`flex size-11 shrink-0 items-center justify-center border ${area.featured ? "border-[color-mix(in_srgb,var(--brand)_55%,var(--border))] bg-[var(--brand-subtle)] text-[var(--brand)]" : "border-[var(--border-strong)] bg-[var(--surface-subtle)] text-[var(--text-muted)]"}`}
            >
              <LearningIcon id={area.id} />
            </span>
            <div className="min-w-0">
              <h3
                className="text-xl leading-tight font-semibold tracking-[-0.035em] text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--brand-strong)] sm:text-2xl"
                id={`${area.id}-title`}
              >
                {area.label}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
                {area.focus}
              </p>
            </div>
          </div>
        </article>
      </Card>
    </li>
  );
}

export function CurrentLearning() {
  const total = String(currentLearning.length).padStart(2, "0");

  return (
    <Section
      id="learning"
      aria-labelledby="learning-title"
      className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[var(--canvas)]"
      spacing="relaxed"
    >
      <div aria-hidden="true" className="engineering-grid absolute inset-0 opacity-20" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-12rem] left-[-10rem] size-[28rem] rounded-full bg-[var(--brand)]/7 blur-3xl"
      />

      <Container className="relative" size="wide">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionTitle id="learning-title" eyebrow="Current learning">
              What I&apos;m learning next.
            </SectionTitle>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
              Continuing to build practical depth across Linux, cloud, backend services, DevOps, and
              network automation.
            </p>
          </div>
          <Badge variant="neutral">{currentLearning.length} learning areas</Badge>
        </div>

        <ol className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {currentLearning.map((area, index) => (
            <LearningEntry area={area} index={index} key={area.id} total={total} />
          ))}
        </ol>
      </Container>
    </Section>
  );
}
