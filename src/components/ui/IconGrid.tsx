"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IconGridItem {
  id: string | number;
  icon: ReactNode;
  label: string;
}

interface IconGridProps {
  items: IconGridItem[];
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const iconItem = {
  hidden: { opacity: 0, scale: 0.8, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function IconGrid({ items }: IconGridProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2, margin: "-40px" }}
      className="flex flex-wrap gap-x-6 gap-y-5"
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={iconItem}
          whileHover={{ y: -4, scale: 1.08 }}
          transition={{ duration: 0.2 }}
          className="group flex cursor-default flex-col items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center text-[#A1A1AA] transition-colors duration-200 group-hover:text-white">
            {item.icon}
          </div>
          <span className="text-xs text-[#71717A] transition-colors duration-200 group-hover:text-[#A1A1AA]">
            {item.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
