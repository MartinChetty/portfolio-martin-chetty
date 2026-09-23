import type { HTMLAttributes } from "react";

type CardVariant = "default" | "subtle" | "outlined";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  readonly variant?: CardVariant;
}

const variantClasses: Record<CardVariant, string> = {
  default:
    "border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_70px_color-mix(in_srgb,#000_12%,transparent)]",
  subtle: "border-transparent bg-[var(--surface-subtle)]",
  outlined: "border-[var(--border)] bg-transparent",
};

export function Card({ className = "", variant = "default", ...props }: CardProps) {
  return (
    <div
      {...props}
      className={`rounded-2xl border p-5 sm:p-6 ${variantClasses[variant]} ${className}`}
    />
  );
}
