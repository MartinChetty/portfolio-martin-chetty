import { FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";

const linkedIn = socials.find((social) => social.platform === "linkedin");
const github = socials.find((social) => social.platform === "github");
const footerLinkClassName =
  "inline-flex min-h-9 items-center gap-2 rounded-lg px-2 text-sm text-[var(--text-muted)] transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[var(--surface-subtle)] hover:text-[var(--brand)] focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:outline-none motion-reduce:transform-none";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--canvas)]" role="contentinfo">
      <Container className="py-7 sm:py-8" size="wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold tracking-[-0.02em] text-[var(--text)]">
              {profile.name}
            </p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {profile.role} · AI · Automation · Infrastructure
            </p>
          </div>

          <nav aria-label="Footer links" className="flex flex-wrap items-center gap-1">
            {linkedIn ? (
              <a
                aria-label="LinkedIn (opens in a new tab)"
                className={footerLinkClassName}
                href={linkedIn.href}
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaLinkedin aria-hidden="true" size={15} />
                LinkedIn
              </a>
            ) : null}
            {github ? (
              <a
                aria-label="GitHub (opens in a new tab)"
                className={footerLinkClassName}
                href={github.href}
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaGithub aria-hidden="true" size={15} />
                GitHub
              </a>
            ) : null}
            <a className={footerLinkClassName} download href="/documents/resume.pdf">
              <FileText aria-hidden="true" size={15} />
              Resume
            </a>
          </nav>
        </div>

        <div className="mt-6 border-t border-[var(--border)] pt-4">
          <p className="font-mono text-[0.62rem] tracking-[0.12em] text-[var(--text-muted)] uppercase">
            © 2026 {profile.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
