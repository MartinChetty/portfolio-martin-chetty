"use client";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { education } from "@/content/education";
import type { Education as EducationRecord } from "@/content/types";

function formatResult(result: EducationRecord["result"]) {
  const [, score] = result.split(":");

  return score ? score.trim().replace("/", " / ") : result;
}

function formatPeriod(record: EducationRecord) {
  return `${record.startYear} – ${record.endYear}`;
}

function EducationEntry({
  record,
  index,
  total,
}: {
  record: EducationRecord;
  index: number;
  total: string;
}) {
  const entryNumber = String(index + 1).padStart(2, "0");

  return (
    <li>
      <Card
        className={`group relative overflow-hidden rounded-none p-5 transition-[border-color,background-color,box-shadow,transform] duration-300 focus-within:border-[var(--brand)] hover:-translate-y-0.5 sm:p-6 lg:p-7 ${record.featured ? "border-[color-mix(in_srgb,var(--brand)_48%,var(--border))] bg-[linear-gradient(110deg,color-mix(in_srgb,var(--brand)_10%,transparent),color-mix(in_srgb,var(--surface)_55%,transparent)_55%,transparent)] shadow-[0_0_42px_color-mix(in_srgb,var(--brand)_7%,transparent)]" : "bg-[color-mix(in_srgb,var(--surface)_38%,transparent)] hover:border-[color-mix(in_srgb,var(--brand)_40%,var(--border))]"}`}
        variant="outlined"
      >
        <article
          aria-labelledby={`${record.id}-title`}
          className="relative flex h-full flex-col outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--canvas)]"
        >
          <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span
                  className={`font-mono text-xs tracking-[0.14em] ${record.featured ? "text-[var(--brand)]" : "text-[var(--text-muted)]"}`}
                >
                  {entryNumber} / {total}
                </span>
                <span className="font-mono text-[0.62rem] tracking-[0.16em] text-[var(--brand)] uppercase">
                  {record.label}
                </span>
              </div>

              <h3
                id={`${record.id}-title`}
                className="mt-6 max-w-4xl text-xl leading-tight font-semibold tracking-[-0.035em] text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--brand-strong)] sm:text-2xl lg:text-[1.75rem]"
              >
                {record.qualification}
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-muted)] sm:text-lg">
                {record.institution}
              </p>
            </div>

            <div className="grid shrink-0 grid-cols-2 gap-6 border-t border-[var(--border)] pt-5 sm:min-w-48 sm:grid-cols-1 sm:gap-5 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6">
              <div>
                <p className="font-mono text-[0.58rem] tracking-[0.16em] text-[var(--text-muted)] uppercase">
                  Period
                </p>
                <p className="mt-2 font-mono text-sm tracking-[0.04em] whitespace-nowrap text-[var(--text)]">
                  {formatPeriod(record)}
                </p>
              </div>
              <div>
                <p className="font-mono text-[0.58rem] tracking-[0.16em] text-[var(--text-muted)] uppercase">
                  CGPA
                </p>
                <p className="mt-2 text-xl font-semibold tracking-[-0.03em] whitespace-nowrap text-[var(--text)]">
                  {formatResult(record.result)}
                </p>
              </div>
            </div>
          </div>
        </article>
      </Card>
    </li>
  );
}

export function Education() {
  const total = String(education.length).padStart(2, "0");

  return (
    <Section
      id="education"
      aria-labelledby="education-title"
      className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[var(--canvas)]"
      spacing="relaxed"
    >
      <div aria-hidden="true" className="engineering-grid absolute inset-0 opacity-20" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12rem] bottom-[-10rem] size-[30rem] rounded-full bg-[var(--brand)]/7 blur-3xl"
      />

      <Container className="relative" size="wide">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionTitle id="education-title" eyebrow="Education">
              Where I built the foundation.
            </SectionTitle>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
              A concise academic record spanning school, intermediate study, and computer science
              engineering.
            </p>
          </div>
          <Badge variant="neutral">{education.length} academic records</Badge>
        </div>

        <ol className="mt-12 grid gap-4 sm:mt-14 sm:gap-5">
          {education.map((record, index) => (
            <EducationEntry index={index} key={record.id} record={record} total={total} />
          ))}
        </ol>
      </Container>
    </Section>
  );
}
