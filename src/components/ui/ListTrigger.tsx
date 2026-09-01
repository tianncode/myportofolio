"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

interface ListTriggerProps<T> {
  title: string;
  description: string;
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  detailLabel?: string;
}

export default function ListTrigger<T>({
  title,
  description,
  items,
  renderItem,
  detailLabel = "Items",
}: ListTriggerProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-6 text-left transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.04]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A1A1AA]">
                {items.length}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#A1A1AA]">
                {title}
              </span>
            </div>
            <h3 className="text-2xl font-medium text-white">{title}</h3>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[#A1A1AA] transition-colors group-hover:text-white">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#A1A1AA]">
          {description}
        </p>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0a0a0a] p-4 shadow-2xl sm:p-6"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA]">
                    {title}
                  </p>
                  <h3 className="mt-2 text-2xl font-medium text-white">
                    {items.length} {detailLabel}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close panel"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[#A1A1AA] transition-colors hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-[70vh] space-y-0 overflow-y-auto pr-1">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-white/10 py-4 first:pt-0 last:border-b-0 last:pb-0"
                  >
                    {renderItem(item, index)}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
