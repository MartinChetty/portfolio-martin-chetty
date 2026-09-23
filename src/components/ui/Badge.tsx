import type { HTMLAttributes } from "react";

type BadgeVariant = "neutral" | "brand" | "success" | "warning";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  readonly variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "border-[var(--border)] bg-[var(--surface-subtle)] text-[var(--text-muted)]",
  brand:
    "border-[color-mix(in_srgb,var(--brand)_34%,transparent)] bg-[var(--brand-subtle)] text-[var(--brand-strong)]",
  success:
    "border-[color-mix(in_srgb,var(--success)_34%,transparent)] bg-[var(--success-subtle)] text-[var(--success)]",
  warning:
    "border-[color-mix(in_srgb,var(--warning)_34%,transparent)] bg-[var(--warning-subtle)] text-[var(--warning)]",
};

export function Badge({ className = "", variant = "neutral", ...props }: BadgeProps) {
  return (
    <span
      {...props}
      className={`inline-flex min-h-6 items-center rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.12em] uppercase ${variantClasses[variant]} ${className}`}
    />
  );
}
