"use client";

import { Award, BrainCircuit, Cloud, Code2, ExternalLink, Network, TestTube2 } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { certifications } from "@/content/certifications";
import { verifiedBadges } from "@/content/verifiedBadges";
import type { Certification } from "@/content/types";

function CategoryIcon({ category }: { category: string }) {
  switch (category) {
    case "Networking":
      return <Network aria-hidden="true" size={17} />;
    case "AI / Generative AI":
    case "Generative AI":
    case "AI":
      return <BrainCircuit aria-hidden="true" size={17} />;
    case "Software Automation / Testing":
      return <TestTube2 aria-hidden="true" size={17} />;
    case "Software Development":
      return <Code2 aria-hidden="true" size={17} />;
    case "Cloud / AI":
      return <Cloud aria-hidden="true" size={17} />;
    default:
      return <Award aria-hidden="true" size={17} />;
  }
}

function formatOrganizations(organizations: readonly string[]) {
  return organizations.join(" · ");
}

function CredentialMeta({ certification }: { certification: Certification }) {
  return (
    <div className="mt-6 flex flex-col gap-5 border-t border-[var(--border)] pt-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
      <div className="flex flex-wrap gap-x-8 gap-y-4">
        <div>
          <p className="font-mono text-[0.58rem] tracking-[0.16em] text-[var(--text-muted)] uppercase">
            Provider
          </p>
          <p className="mt-2 text-sm font-medium text-[var(--text)]">{certification.provider}</p>
        </div>

        {certification.issuedBy?.length ? (
          <div>
            <p className="font-mono text-[0.58rem] tracking-[0.16em] text-[var(--text-muted)] uppercase">
              Issued by
            </p>
            <p className="mt-2 max-w-xs text-sm text-[var(--text)]">
              {formatOrganizations(certification.issuedBy)}
            </p>
          </div>
        ) : null}

        {certification.note ? (
          <div>
            <p className="font-mono text-[0.58rem] tracking-[0.16em] text-[var(--text-muted)] uppercase">
              Context
            </p>
            <p className="mt-2 text-sm text-[var(--text)]">{certification.note}</p>
          </div>
        ) : null}
      </div>

      {certification.credentialUrl ? (
        <a
          className="inline-flex min-h-10 shrink-0 items-center gap-2 self-start text-sm font-medium text-[var(--brand)] transition-colors hover:text-[var(--brand-strong)] focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--canvas)] focus-visible:outline-none sm:self-auto"
          href={certification.credentialUrl}
          aria-label={`${certification.name} credential (opens in a new tab)`}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Credential
          <ExternalLink aria-hidden="true" size={15} />
        </a>
      ) : null}
    </div>
  );
}

function CertificationEntry({
  certification,
  index,
}: {
  certification: Certification;
  index: number;
}) {
  const entryNumber = String(index + 1).padStart(2, "0");
  const total = String(certifications.length).padStart(2, "0");

  return (
    <li
      className={`group relative h-full border border-[var(--border)] p-5 transition-[border-color,background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--brand)_44%,var(--border))] hover:bg-[color-mix(in_srgb,var(--surface)_78%,transparent)] sm:p-6 lg:p-7 ${certification.featured ? "border-[color-mix(in_srgb,var(--brand)_48%,var(--border))] bg-[linear-gradient(110deg,color-mix(in_srgb,var(--brand)_10%,transparent),color-mix(in_srgb,var(--surface)_55%,transparent)_55%,transparent)] shadow-[0_0_42px_color-mix(in_srgb,var(--brand)_7%,transparent)] md:col-span-2" : "bg-[color-mix(in_srgb,var(--surface)_38%,transparent)]"}`}
    >
      <article
        aria-labelledby={`${certification.id}-title`}
        className="relative flex h-full flex-col"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className={`flex size-10 items-center justify-center border ${certification.featured ? "border-[color-mix(in_srgb,var(--brand)_55%,var(--border))] bg-[var(--brand-subtle)] text-[var(--brand)]" : "border-[var(--border-strong)] bg-[var(--surface-subtle)] text-[var(--text-muted)]"}`}
            >
              <CategoryIcon category={certification.category} />
            </span>
            <span className="font-mono text-[0.62rem] tracking-[0.16em] text-[var(--text-muted)] uppercase">
              {certification.category}
            </span>
          </div>

          <span
            className={`font-mono text-xs tracking-[0.14em] ${certification.featured ? "text-[var(--brand)]" : "text-[var(--text-muted)]"}`}
          >
            {entryNumber} / {total}
          </span>
        </div>

        <div className="mt-7 flex-1">
          <h3
            className="max-w-3xl text-xl leading-tight font-semibold tracking-[-0.035em] text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--brand-strong)] sm:text-2xl"
            id={`${certification.id}-title`}
          >
            {certification.name}
          </h3>
          {certification.featured ? (
            <p className="mt-3 font-mono text-[0.6rem] tracking-[0.16em] text-[var(--brand)] uppercase">
              Industry certification
            </p>
          ) : null}
        </div>

        <CredentialMeta certification={certification} />
      </article>
    </li>
  );
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      aria-labelledby="certifications-title"
      className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[var(--canvas)]"
      spacing="relaxed"
    >
      <div aria-hidden="true" className="engineering-grid absolute inset-0 opacity-25" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-32 size-[28rem] rounded-full bg-[var(--brand)]/8 blur-3xl"
      />

      <Container className="relative" size="wide">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionTitle id="certifications-title" eyebrow="Certifications">
              Proof of continued learning.
            </SectionTitle>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
              Credentials that support my engineering foundation across networking, AI, cloud,
              automation, and software development.
            </p>
          </div>
          <Badge variant="neutral">{certifications.length} credentials</Badge>
        </div>

        <ol className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <CertificationEntry
              certification={certification}
              index={index}
              key={certification.id}
            />
          ))}
        </ol>

        <div
          aria-labelledby="verified-badges-title"
          className="mt-12 border-t border-[var(--border)] pt-8 sm:mt-14"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div>
              <h3
                className="text-xl font-semibold tracking-[-0.035em] text-[var(--text)] sm:text-2xl"
                id="verified-badges-title"
              >
                Verified Cisco Badges
              </h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
                External credentials verified through Credly.
              </p>
            </div>
            <Badge variant="neutral">{verifiedBadges.length} verified badges</Badge>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {verifiedBadges.map((badge, index) => (
              <li key={badge.id}>
                <a
                  aria-label={`${badge.name} by ${badge.issuer} (opens in a new tab)`}
                  className="group flex h-full min-h-32 flex-col justify-between border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_38%,transparent)] p-4 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--brand)_44%,var(--border))] hover:bg-[color-mix(in_srgb,var(--surface)_78%,transparent)] focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--canvas)] focus-visible:outline-none motion-reduce:transform-none sm:p-5"
                  href={badge.credentialUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex h-28 items-center justify-center sm:h-32">
                    <Image
                      alt={badge.imageAlt}
                      className="size-28 object-contain sm:size-32"
                      height={128}
                      src={badge.imageSrc}
                      width={128}
                    />
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-[0.6rem] tracking-[0.14em] text-[var(--brand)]">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(verifiedBadges.length).padStart(2, "0")}
                    </span>
                    <ExternalLink
                      aria-hidden="true"
                      className="shrink-0 text-[var(--brand)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      size={15}
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-sm leading-6 font-semibold text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--brand-strong)]">
                      {badge.name}
                    </p>
                    <p className="mt-2 font-mono text-[0.58rem] tracking-[0.14em] text-[var(--text-muted)] uppercase">
                      Issuer · {badge.issuer}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
