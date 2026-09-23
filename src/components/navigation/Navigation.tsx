"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navigationItems } from "@/content/navigation";
import { socials } from "@/content/socials";

import { ScrollProgress } from "./ScrollProgress";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "./useActiveSection";

const github = socials.find((social) => social.platform === "github");
const linkedin = socials.find((social) => social.platform === "linkedin");
const iconLinkClassName =
  "inline-flex size-9 items-center justify-center rounded-lg text-[var(--text-muted)] transition-[background-color,color,transform] hover:-translate-y-0.5 hover:bg-[var(--surface-subtle)] hover:text-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--canvas)] focus-visible:outline-none motion-reduce:transform-none";

function navigationLinkClassName(isActive: boolean, isMobile = false) {
  const sizeClassName = isMobile
    ? "w-full px-4 py-3 text-xl sm:text-2xl"
    : "px-3 py-2 text-[0.68rem] tracking-[0.14em] uppercase";
  const stateClassName = isActive
    ? "text-[var(--text)]"
    : "text-[var(--text-muted)] hover:text-[var(--text)]";

  return `relative inline-flex items-center rounded-full font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--canvas)] focus-visible:outline-none ${sizeClassName} ${stateClassName}`;
}

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileDialogRef = useRef<HTMLDivElement>(null);
  const activeSection = useActiveSection(navigationItems);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    function updateScrollState() {
      setIsScrolled(window.scrollY > 12);
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const dialog = mobileDialogRef.current;
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const firstFocusable = dialog?.querySelector<HTMLElement>(focusableSelector);

    firstFocusable?.focus();

    function handleDialogKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !dialog) {
        return;
      }

      const focusableElements = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector));
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        event.preventDefault();
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    window.addEventListener("keydown", handleDialogKeydown);

    return () => window.removeEventListener("keydown", handleDialogKeydown);
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <ScrollProgress />
      <a
        className="sr-only fixed top-4 left-4 z-[70] rounded-lg bg-[var(--brand)] px-4 py-2 font-medium text-[var(--on-brand)] focus:not-sr-only"
        href="#main-content"
      >
        Skip to main content
      </a>
      <header
        className="sticky top-0 z-50 px-3 transition-[padding] duration-300 sm:px-5"
        data-scrolled={isScrolled}
      >
        <Container className="py-3" size="wide">
          <div className="glass-panel flex min-h-14 items-center justify-between gap-3 rounded-2xl px-2 sm:px-3">
            <a
              aria-label="Martin Chetty, back to top"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl px-2 py-1.5 text-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:outline-none"
              href="#main-content"
              onClick={closeMenu}
            >
              <span className="relative inline-flex size-8 items-center justify-center rounded-lg border border-[color-mix(in_srgb,var(--brand)_48%,transparent)] bg-[var(--brand-subtle)] font-mono text-xs font-semibold text-[var(--brand-strong)]">
                MC
                <span
                  aria-hidden="true"
                  className="absolute -top-1 -right-1 size-2 rounded-full bg-[var(--brand)] shadow-[0_0_16px_var(--brand)]"
                />
              </span>
              <span className="hidden text-left sm:block">
                <span className="block text-sm leading-none font-semibold tracking-[-0.02em]">
                  Martin Chetty
                </span>
                <span className="mt-1 block font-mono text-[0.58rem] tracking-[0.12em] text-[var(--text-muted)] uppercase">
                  AI · Automation · Infra
                </span>
              </span>
            </a>

            <nav aria-label="Primary navigation" className="hidden items-center gap-1 xl:flex">
              {navigationItems.map((item) => {
                const sectionId = item.href.slice(1);
                const isActive = activeSection === sectionId;

                return (
                  <a
                    aria-current={isActive ? "location" : undefined}
                    className={navigationLinkClassName(isActive)}
                    href={item.href}
                    key={item.href}
                    onClick={closeMenu}
                  >
                    {isActive ? (
                      <motion.span
                        aria-hidden="true"
                        className="absolute inset-0 -z-0 rounded-full bg-[var(--brand-subtle)]"
                        layoutId="desktop-active-navigation"
                        transition={{ duration: reduceMotion ? 0 : 0.2 }}
                      />
                    ) : null}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-0.5">
              <div className="hidden items-center gap-0.5 border-r border-[var(--border)] pr-2 xl:flex">
                {github ? (
                  <a
                    aria-label="GitHub profile (opens in a new tab)"
                    className={iconLinkClassName}
                    href={github.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaGithub aria-hidden="true" size={16} />
                  </a>
                ) : null}
                {linkedin ? (
                  <a
                    aria-label="LinkedIn profile (opens in a new tab)"
                    className={iconLinkClassName}
                    href={linkedin.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaLinkedin aria-hidden="true" size={16} />
                  </a>
                ) : null}
                <a
                  aria-label="Download resume PDF"
                  className={iconLinkClassName}
                  download
                  href="/documents/resume.pdf"
                >
                  <FileText aria-hidden="true" size={16} />
                </a>
              </div>
              <ThemeToggle />
              <button
                aria-controls="mobile-navigation"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="inline-flex size-9 items-center justify-center rounded-lg text-[var(--text)] transition-colors hover:bg-[var(--surface-subtle)] focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--canvas)] focus-visible:outline-none xl:hidden"
                onClick={() => setIsMenuOpen((open) => !open)}
                ref={menuButtonRef}
                type="button"
              >
                {isMenuOpen ? (
                  <X aria-hidden="true" size={19} />
                ) : (
                  <Menu aria-hidden="true" size={19} />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            animate={{ opacity: 1 }}
            aria-label="Mobile navigation"
            aria-modal="true"
            className="fixed inset-0 z-[65] overflow-y-auto bg-[color-mix(in_srgb,var(--canvas)_74%,transparent)] px-4 pt-20 pb-4 backdrop-blur-md xl:hidden"
            exit={{ opacity: 0 }}
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0 }}
            ref={mobileDialogRef}
            role="dialog"
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
          >
            <Container size="wide">
              <div className="glass-panel relative max-h-[calc(100svh-6rem)] overflow-y-auto rounded-3xl p-4 sm:p-6">
                <Button
                  aria-label="Close navigation menu"
                  className="absolute top-4 right-4 size-9 min-h-0 p-0"
                  onClick={() => {
                    setIsMenuOpen(false);
                    menuButtonRef.current?.focus();
                  }}
                  variant="ghost"
                >
                  <X aria-hidden="true" size={19} />
                </Button>
                <div className="pt-10">
                  <p className="mb-4 px-4 font-mono text-[0.65rem] tracking-[0.18em] text-[var(--brand)] uppercase">
                    Navigate the system
                  </p>
                  <nav aria-label="Mobile navigation">
                    <ul className="grid gap-1">
                      {navigationItems.map((item, index) => {
                        const sectionId = item.href.slice(1);
                        const isActive = activeSection === sectionId;

                        return (
                          <motion.li
                            animate={{ opacity: 1, x: 0 }}
                            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                            key={item.href}
                            transition={{
                              delay: reduceMotion ? 0 : 0.04 * index,
                              duration: reduceMotion ? 0 : 0.2,
                              ease: "easeOut",
                            }}
                          >
                            <a
                              aria-current={isActive ? "location" : undefined}
                              className={navigationLinkClassName(isActive, true)}
                              href={item.href}
                              onClick={closeMenu}
                            >
                              {isActive ? (
                                <motion.span
                                  aria-hidden="true"
                                  className="absolute inset-0 rounded-2xl bg-[var(--brand-subtle)]"
                                  layoutId="mobile-active-navigation"
                                />
                              ) : null}
                              <span className="relative z-10">{item.label}</span>
                            </a>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </nav>
                  <div className="mt-6 flex items-center gap-1 border-t border-[var(--border)] pt-5">
                    {github ? (
                      <a
                        aria-label="GitHub profile (opens in a new tab)"
                        className={iconLinkClassName}
                        href={github.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <FaGithub aria-hidden="true" size={17} />
                      </a>
                    ) : null}
                    {linkedin ? (
                      <a
                        aria-label="LinkedIn profile (opens in a new tab)"
                        className={iconLinkClassName}
                        href={linkedin.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <FaLinkedin aria-hidden="true" size={17} />
                      </a>
                    ) : null}
                    <a
                      aria-label="Download resume PDF"
                      className={iconLinkClassName}
                      download
                      href="/documents/resume.pdf"
                    >
                      <FileText aria-hidden="true" size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
