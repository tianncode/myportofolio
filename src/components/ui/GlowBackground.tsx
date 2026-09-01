"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowBackgroundProps {
  className?: string;
}

export default function GlowBackground({ className }: GlowBackgroundProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden="true"
    >
      <motion.div
        className="absolute -top-16 right-0 h-[420px] w-[420px] rounded-full bg-white/[0.02] blur-[120px]"
        style={{ y }}
      />
    </div>
  );
}
