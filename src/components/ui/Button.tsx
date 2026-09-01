"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-[16px] px-6 py-3 text-sm font-medium transition-colors cursor-pointer";
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white border border-blue-500/20",
    secondary:
      "bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.08]",
    ghost: "bg-transparent hover:bg-white/[0.04] text-[#A1A1AA]",
  };

  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      href={href}
      onClick={onClick}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </Comp>
  );
}
