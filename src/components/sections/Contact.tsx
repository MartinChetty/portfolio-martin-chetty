"use client";

import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { contactLocation } from "@/content/contact";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";

const linkedIn = socials.find((social) => social.platform === "linkedin");
const github = socials.find((social) => social.platform === "github");

const contactLinkClassName =
  "group flex min-h-20 items-center justify-between gap-4 border-b border-[var(--border)] px-5 py-4 transition-[background-color,border-color] duration-300 last:border-b-0 hover:bg-[color-mix(in_srgb,var(--brand)_5%,transparent)] focus-visible:bg-[color-mix(in_srgb,var(--brand)_7%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus)] sm:px-6";

export function Contact() {
  return (
    <Section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[var(--canvas)]"
      spacing="relaxed"
    >
      <div aria-hidden="true" className="engineering-grid absolute inset-0 opacity-25" />
      <div
        aria-hidden="true"
        className="ambient-drift pointer-events-none absolute top-1/4 -right-48 size-[40rem] rounded-full bg-[var(--brand)]/10 blur-[120px]"
      />

      <Container className="relative" size="wide">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.68fr)] lg:items-center lg:gap-20">
          <div className="max-w-3xl">
            <SectionTitle id="contact-title" eyebrow="Contact">
              Let&apos;s build something useful.
            </SectionTitle>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
              Open to conversations around software engineering, AI, automation, cloud, and network
              automation.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[var(--brand)] bg-[var(--brand)] px-5 text-base font-medium text-[var(--on-brand)] shadow-[0_10px_30px_color-mix(in_srgb,var(--brand)_18%,transparent)] transition-[background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-strong)] hover:bg-[var(--brand-strong)] hover:shadow-[0_14px_34px_color-mix(in_srgb,var(--brand)_24%,transparent)] focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--canvas)] focus-visible:outline-none motion-reduce:transform-none"
                href={`mailto:${profile.email}`}
              >
                Get in touch
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
              {github ? (
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[color-mix(in_srgb,var(--surface)_78%,transparent)] px-5 text-base font-medium text-[var(--text)] backdrop-blur-md transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)] hover:bg-[var(--surface-subtle)] focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--canvas)] focus-visible:outline-none motion-reduce:transform-none"
                  href={github.href}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  View GitHub
                  <ArrowUpRight aria-hidden="true" size={17} />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          </div>

          <Card
            aria-labelledby="contact-details-title"
            className="rounded-none p-0 shadow-[0_20px_70px_color-mix(in_srgb,#000_12%,transparent)]"
            variant="outlined"
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4 sm:px-6">
              <p
                className="font-mono text-[0.62rem] tracking-[0.16em] text-[var(--brand)] uppercase"
                id="contact-details-title"
              >
                Direct contact
              </p>
              <span className="font-mono text-[0.58rem] tracking-[0.14em] text-[var(--text-muted)] uppercase">
                04 channels
              </span>
            </div>

            <div>
              <a
                aria-label={`Email ${profile.email}`}
                className={contactLinkClassName}
                href={`mailto:${profile.email}`}
              >
                <span className="flex min-w-0 items-center gap-4">
                  <Mail aria-hidden="true" className="shrink-0 text-[var(--brand)]" size={18} />
                  <span className="min-w-0">
                    <span className="block font-mono text-[0.58rem] tracking-[0.16em] text-[var(--text-muted)] uppercase">
                      Email
                    </span>
                    <span className="mt-1 block truncate text-sm font-medium text-[var(--text)] sm:text-base">
                      {profile.email}
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="shrink-0 text-[var(--brand)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={17}
                />
              </a>

              <div className="flex min-h-20 items-center gap-4 border-b border-[var(--border)] px-5 py-4 sm:px-6">
                <MapPin aria-hidden="true" className="shrink-0 text-[var(--brand)]" size={18} />
                <span>
                  <span className="block font-mono text-[0.58rem] tracking-[0.16em] text-[var(--text-muted)] uppercase">
                    Location
                  </span>
                  <span className="mt-1 block text-sm font-medium text-[var(--text)] sm:text-base">
                    {contactLocation}
                  </span>
                </span>
              </div>

              {linkedIn ? (
                <a
                  aria-label="LinkedIn, Martin Chetty (opens in a new tab)"
                  className={contactLinkClassName}
                  href={linkedIn.href}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <span className="flex items-center gap-4">
                    <FaLinkedin
                      aria-hidden="true"
                      className="shrink-0 text-[var(--brand)]"
                      size={18}
                    />
                    <span>
                      <span className="block font-mono text-[0.58rem] tracking-[0.16em] text-[var(--text-muted)] uppercase">
                        LinkedIn
                      </span>
                      <span className="mt-1 block text-sm font-medium text-[var(--text)] sm:text-base">
                        {profile.name}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="text-[var(--brand)]" size={17} />
                </a>
              ) : null}

              {github ? (
                <a
                  aria-label="GitHub, MartinChetty (opens in a new tab)"
                  className={contactLinkClassName}
                  href={github.href}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <span className="flex items-center gap-4">
                    <FaGithub
                      aria-hidden="true"
                      className="shrink-0 text-[var(--brand)]"
                      size={18}
                    />
                    <span>
                      <span className="block font-mono text-[0.58rem] tracking-[0.16em] text-[var(--text-muted)] uppercase">
                        GitHub
                      </span>
                      <span className="mt-1 block text-sm font-medium text-[var(--text)] sm:text-base">
                        {github.handle}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="text-[var(--brand)]" size={17} />
                </a>
              ) : null}
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
