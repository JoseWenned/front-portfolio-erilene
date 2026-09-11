import type { HTMLAttributes, ReactNode } from "react";
import styles from "./section.module.scss";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Section({children, className, ...props}: SectionProps) {
  const classes = [styles.section, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
}