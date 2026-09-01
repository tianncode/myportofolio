"use client";

import { motion } from "framer-motion";
import { Mail, FileDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactLinks = [
  {
    label: "Email",
    href: profile.email,
    icon: Mail,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: FaLinkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-[120px] pb-[120px]">
        <ScrollReveal delay={0.05}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight mb-6">
              {"Let\u2019s work together"}
            </h2>
            <p className="text-lg text-[#A1A1AA] mb-12 max-w-xl mx-auto">
              {"Have a project in mind or looking for an intern? I\u2019d love to hear from you."}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center gap-3 rounded-[16px] border border-white/[0.08] bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] px-6 py-4 text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A1A1AA]" />
                  </motion.a>
                );
              })}
            </div>

            <motion.a
              href={profile.cv}
              download
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-3 rounded-[16px] bg-blue-600 hover:bg-blue-500 px-8 py-4 text-white font-medium transition-colors"
            >
              <FileDown className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
