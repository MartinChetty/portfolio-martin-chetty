import type { HTMLAttributes } from "react";

type HeadingLevel = "h1" | "h2" | "h3";
type TitleAlignment = "left" | "center";

export interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  readonly as?: HeadingLevel;
  readonly eyebrow?: string;
  readonly align?: TitleAlignment;
}

const alignmentClasses: Record<TitleAlignment, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
};

export function SectionTitle({
  align = "left",
  as: Heading = "h2",
  className = "",
  eyebrow,
  ...props
}: SectionTitleProps) {
  const titleClassName = `text-3xl font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-4xl ${className}`;

  return (
    <div className={`flex flex-col gap-2 ${alignmentClasses[align]}`}>
      {eyebrow ? (
        <p className="font-mono text-[0.68rem] font-semibold tracking-[0.18em] text-[var(--brand)] uppercase">
          {eyebrow}
        </p>
      ) : null}
      {Heading === "h1" ? <h1 {...props} className={titleClassName} /> : null}
      {Heading === "h2" ? <h2 {...props} className={titleClassName} /> : null}
      {Heading === "h3" ? <h3 {...props} className={titleClassName} /> : null}
    </div>
  );
}
