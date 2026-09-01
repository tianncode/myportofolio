import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#A1A1AA]">
          &copy; 2026 Rizqia Akbar
        </p>
        <div className="flex items-center gap-4 text-sm text-[#A1A1AA]">
          <span>Built with</span>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <SiNextdotjs className="w-4 h-4" />
              Next.js
            </span>
            <span className="inline-flex items-center gap-1.5">
              <SiTailwindcss className="w-4 h-4" />
              Tailwind
            </span>
            <span className="inline-flex items-center gap-1.5">
              <TbBrandFramerMotion className="w-4 h-4" />
              Motion
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
