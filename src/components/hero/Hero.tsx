"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";

export default function Hero() {
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 } as const,
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-[96px] pt-[120px]">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl border-l border-white/10 pl-6"
        >
          <motion.div variants={item} className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-[#71717A]">
            <span>Portfolio</span>
            <span className="text-[#52525B]">—</span>
            <span>2026</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[6rem]"
          >
            <span className="block text-[#A1A1AA]">Hi, I&rsquo;m</span>
            <span className="relative mt-1 block inline-flex items-center gap-3">
              <span className="inline-block h-px w-10 bg-white/25 sm:w-14" />
              <span className="text-white">{profile.name}</span>
            </span>
            <span className="mt-2 block text-[#A1A1AA]">{profile.role}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[#A1A1AA] sm:text-lg"
          >
            {profile.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-white/10 bg-transparent px-5 py-2.5 text-sm text-white hover:border-white/20 hover:bg-white/[0.04]"
            >
              <span>Explore My Work</span>
              <ArrowDown className="h-4 w-4" />
            </Button>

            <motion.a
              href="#contact"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#D4D4D8] transition-colors hover:text-white"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
