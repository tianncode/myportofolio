"use client";

import { useState } from "react";
import { isComingSoon } from "@/lib/utils";
import { GitBranch, ExternalLink, Clock } from "lucide-react";

type ProjectLinkButtonProps = {
  href?: string | null;
  type: "github" | "demo";
};

export function ProjectLinkButton({ href, type }: ProjectLinkButtonProps) {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const comingSoon = isComingSoon(href);

  const label = type === "github" ? "Code" : "Demo";
  const Icon = type === "github" ? GitBranch : ExternalLink;

  if (comingSoon) {
    return (
      <button
        type="button"
        onClick={() => setShowComingSoon(true)}
        title="Coming Soon"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-[#D4D4D8] transition-colors hover:border-white/20"
      >
        {showComingSoon ? (
          <>
            <Clock className="h-3.5 w-3.5" />
            Coming Soon
          </>
        ) : (
          <>
            <Icon className="h-3.5 w-3.5" />
            {label}
          </>
        )}
      </button>
    );
  }

  return (
    <a
      href={href!}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white transition-colors hover:border-white/20"
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </a>
  );
}