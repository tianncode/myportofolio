"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  badge,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
      className={cn("mb-16", className)}
    >
      {badge && (
        <span
          className="inline-block rounded-[999px] border border-white/[0.08] bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400 mb-4"
        >
          {badge}
        </span>
      )}
      <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[#A1A1AA] max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
