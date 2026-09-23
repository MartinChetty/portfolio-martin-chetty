import type { HTMLAttributes } from "react";

type PillVariant = "default" | "accent";

export interface PillProps extends HTMLAttributes<HTMLSpanElement> {
  readonly variant?: PillVariant;
}

const variantClasses: Record<PillVariant, string> = {
  default:
    "border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] text-[var(--text-muted)]",
  accent:
    "border-[color-mix(in_srgb,var(--brand)_36%,transparent)] bg-[var(--brand-subtle)] text-[var(--brand-strong)]",
};

export function Pill({ className = "", variant = "default", ...props }: PillProps) {
  return (
    <span
      {...props}
      className={`inline-flex min-h-7 items-center rounded-full border px-3 py-1 text-xs font-medium tracking-[0.08em] ${variantClasses[variant]} ${className}`}
    />
  );
}
