import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly isLoading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-[var(--brand)] bg-[var(--brand)] text-[var(--on-brand)] shadow-[0_10px_30px_color-mix(in_srgb,var(--brand)_18%,transparent)] hover:border-[var(--brand-strong)] hover:bg-[var(--brand-strong)] hover:shadow-[0_14px_34px_color-mix(in_srgb,var(--brand)_24%,transparent)]",
  secondary:
    "border-[var(--border-strong)] bg-[color-mix(in_srgb,var(--surface)_78%,transparent)] text-[var(--text)] backdrop-blur-md hover:border-[var(--brand)] hover:bg-[var(--surface-subtle)]",
  ghost:
    "border-transparent bg-transparent text-[var(--text)] hover:border-[var(--border)] hover:bg-[var(--surface-subtle)]",
  danger:
    "border-[var(--danger)] bg-[var(--danger)] text-[var(--on-danger)] hover:border-[var(--danger-strong)] hover:bg-[var(--danger-strong)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-5 text-base",
};

export function Button({
  className = "",
  disabled,
  isLoading = false,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      aria-busy={isLoading || undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border font-medium transition-[background-color,border-color,color,box-shadow,transform] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--canvas)] focus-visible:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transform-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      disabled={disabled || isLoading}
      type={type}
    />
  );
}
