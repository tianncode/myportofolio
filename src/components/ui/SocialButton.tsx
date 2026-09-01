"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SocialButtonProps {
  href: string;
  icon: ReactNode;
  label?: string;
}

export default function SocialButton({ href, icon, label }: SocialButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "rounded-[14px] border border-white/10 bg-white/[0.04]",
        "hover:bg-white/[0.08]",
        "px-4 py-3 text-white transition-colors"
      )}
      aria-label={label || "Social link"}
    >
      {icon}
      {label && <span className="text-sm">{label}</span>}
    </motion.a>
  );
}
