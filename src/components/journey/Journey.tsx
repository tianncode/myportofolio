"use client";

import { ArrowDown } from "lucide-react";
import { journey } from "@/data/education";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-[120px] pb-[120px]">
        <ScrollReveal delay={0.05}>
          <SectionTitle
            badge="Journey"
            title="My Programming Journey"
            subtitle="From learning the fundamentals to building real-world full-stack applications."
          />
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {journey.map((event, i) => {
            const isNow = event.year === "Now";
            const isLast = i === journey.length - 1;

            return (
              <ScrollReveal
                key={`${event.year ?? "no-year"}-${i}`}
                delay={i * 0.08}
                direction={i % 2 === 0 ? "left" : "right"}
                className="relative"
              >
                <div className="flex items-start gap-8">
                  {/* Year / Stage */}
                  {event.year ? (
                    <div className="shrink-0 w-24 pt-1">
                      <span
                        className={
                          isNow
                            ? "text-xl font-bold text-blue-400"
                            : "text-3xl font-bold text-white/80"
                        }
                      >
                        {event.year}
                      </span>
                    </div>
                  ) : (
                    <div className="shrink-0 w-24 pt-1" />
                  )}

                  {/* Timeline */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className={
                        isNow
                          ? "w-3 h-3 rounded-full bg-green-500 ring-4 ring-green-500/20 animate-pulse"
                          : "w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20"
                      }
                    />

                    {!isLast && (
                      <>
                        <div className="w-px h-16 bg-gradient-to-b from-blue-500/40 to-transparent" />

                        <ArrowDown className="w-4 h-4 text-blue-400/60 -mt-1" />
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-16 pt-0">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {event.title}
                    </h3>

                    <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-md">
                      {event.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
