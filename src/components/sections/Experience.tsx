"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { experiences } from "@/content/experience";
import type { Experience as ExperienceRecord } from "@/content/types";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatExperienceDate(value: ExperienceRecord["startDate"] | "present") {
  if (value === "present") {
    return "Present";
  }

  const [year, month] = value.split("-");

  return `${monthNames[Number(month) - 1]} ${year}`;
}

function formatExperienceRange(experience: ExperienceRecord) {
  return `${formatExperienceDate(experience.startDate)} – ${formatExperienceDate(experience.endDate)}`;
}

export function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      aria-labelledby="experience-title"
      className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[var(--canvas)]"
      id="experience"
      spacing="relaxed"
    >
      <div
        aria-hidden="true"
        className="engineering-grid pointer-events-none absolute inset-0 opacity-35"
      />
      <Container className="relative" size="wide">
        <div className="max-w-2xl">
          <SectionTitle eyebrow="Career timeline" id="experience-title">
            Experience that compounds.
          </SectionTitle>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
            A progression across software automation, machine learning, and the infrastructure
            systems that make modern products possible.
          </p>
        </div>

        <ol className="mt-14 space-y-5 sm:mt-16 sm:space-y-8">
          {experiences.map((experience, index) => {
            const isCurrent = experience.endDate === "present";
            const [summary, ...details] = experience.highlights;
            const roleContext =
              experience.id === "cisco-systems-software-automation-trainee"
                ? "Firepower Developer / SBGE InfraOps"
                : null;

            return (
              <motion.li
                className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4 sm:grid-cols-[1.5rem_minmax(0,1fr)] sm:gap-x-6"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                key={experience.id}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.08,
                  duration: reduceMotion ? 0 : 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ amount: 0.18, once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="relative flex justify-center">
                  <span
                    aria-hidden="true"
                    className={`relative z-10 mt-7 size-3 rounded-full border-2 border-[var(--canvas)] ${
                      isCurrent
                        ? "bg-[var(--brand)] shadow-[0_0_0_5px_var(--brand-subtle),0_0_22px_var(--brand)]"
                        : "bg-[var(--surface-subtle)] ring-1 ring-[var(--border-strong)]"
                    }`}
                  />
                  {index < experiences.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-10 bottom-[-2.5rem] w-px bg-gradient-to-b from-[var(--border-strong)] to-[var(--border)] sm:bottom-[-4rem]"
                    />
                  ) : null}
                </div>

                <article
                  className={
                    isCurrent
                      ? "relative overflow-hidden rounded-[1.75rem] border border-[color-mix(in_srgb,var(--brand)_34%,var(--border))] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand)_9%,var(--surface)),var(--surface)_58%)] p-6 shadow-[0_24px_80px_color-mix(in_srgb,#000_16%,transparent)] sm:p-8"
                      : "relative border-b border-[var(--border)] pb-8 sm:pb-10"
                  }
                >
                  {isCurrent ? (
                    <div
                      aria-hidden="true"
                      className="absolute -top-24 -right-20 size-64 rounded-full bg-[var(--brand)]/10 blur-3xl"
                    />
                  ) : null}

                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                    <div>
                      <p className="font-mono text-[0.68rem] font-semibold tracking-[0.15em] text-[var(--brand)] uppercase">
                        {experience.organization}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.045em] text-[var(--text)] sm:text-3xl">
                        {experience.role}
                      </h3>
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end sm:pt-1">
                      <time
                        className="font-mono text-[0.68rem] tracking-[0.1em] text-[var(--text-muted)] uppercase"
                        dateTime={experience.startDate}
                      >
                        {formatExperienceRange(experience)}
                      </time>
                      {isCurrent ? <Badge variant="brand">Current role</Badge> : null}
                    </div>
                  </div>

                  <p className="relative mt-6 max-w-3xl text-base leading-8 text-[var(--text)] sm:text-lg">
                    {summary}
                  </p>

                  {roleContext ? (
                    <p className="relative mt-3 font-mono text-[0.65rem] tracking-[0.14em] text-[var(--brand)] uppercase">
                      {roleContext}
                    </p>
                  ) : null}

                  {details.length > 0 ? (
                    <details className="group relative mt-6 border-t border-[var(--border)] pt-4">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                        <span>
                          View {details.length} more{" "}
                          {details.length === 1 ? "highlight" : "highlights"}
                        </span>
                        <ChevronDown
                          aria-hidden="true"
                          className="transition-transform duration-200 group-open:rotate-180"
                          size={17}
                        />
                      </summary>
                      <ul className="mt-4 grid gap-3 border-l border-[var(--border-strong)] pl-4 text-sm leading-7 text-[var(--text-muted)] sm:pl-5">
                        {details.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </details>
                  ) : null}
                </article>
              </motion.li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
