import type {
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

import styles from "./button.module.scss";

interface ButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`${styles.button} ${className}`.trim()}
      {...props}
    >
      <span className={styles.label}>{children}</span>

      <span
        className={styles.icon}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 10H15M10 5L15 10L10 15"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}