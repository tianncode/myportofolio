"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const pillItem = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PillGrid({ items }: { items: string[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2, margin: "-40px" }}
      className="flex flex-wrap gap-2"
    >
      {items.map((label) => (
        <motion.span
          key={label}
          variants={pillItem}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.06)" }}
          className="cursor-default rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs text-[#A1A1AA] transition-colors"
        >
          {label}
        </motion.span>
      ))}
    </motion.div>
  );
}
