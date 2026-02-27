import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200 rounded-full cursor-pointer";

  const variants = {
    primary:
      "bg-foreground text-background hover:opacity-80",
    secondary:
      "border border-foreground/20 text-foreground hover:border-foreground/40",
    ghost:
      "text-foreground/70 hover:text-foreground",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}
