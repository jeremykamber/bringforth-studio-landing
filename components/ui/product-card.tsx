import { ReactNode } from "react";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  description: string;
  icon?: ReactNode;
  status?: "live" | "coming soon";
  href?: string;
}

export function ProductCard({
  name,
  description,
  icon,
  status = "live",
  href,
}: ProductCardProps) {
  return (
    <Link
      href={href || "#"}
      className="group block p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.05] transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        {icon && (
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-foreground text-background">
            {icon}
          </div>
        )}
        {status && (
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full ${
              status === "live"
                ? "bg-green-500/10 text-green-600 dark:text-green-400"
                : "bg-foreground/10 text-foreground/60"
            }`}
          >
            {status === "live" ? "Live" : "Coming Soon"}
          </span>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:underline underline-offset-4">
        {name}
      </h3>
      <p className="text-foreground/60 text-sm leading-relaxed">
        {description}
      </p>
    </Link>
  );
}
