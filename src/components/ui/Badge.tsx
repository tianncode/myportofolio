import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[999px] border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm text-white",
        className
      )}
    >
      {children}
    </span>
  );
}
