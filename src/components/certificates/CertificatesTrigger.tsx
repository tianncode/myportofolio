"use client";

import Image from "next/image";
import ListTrigger from "@/components/ui/ListTrigger";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { certificates } from "@/data/certificates";
import { Certificate } from "@/types/certificate";

export default function CertificatesTrigger() {
  return (
    <ScrollReveal delay={0.12}>
      <ListTrigger
        title="Certificates"
        description="Professional certifications and learning milestones that support my frontend and backend development work."
        items={certificates.slice(0, 1)}
        detailLabel="certificates"
        renderItem={(certificate: Certificate) => (
          <div className="grid gap-4 sm:grid-cols-[120px_1fr_auto] sm:items-center">
          <div className="relative h-20 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
            {certificate.image ? (
              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                className="object-cover"
                sizes="120px"
              />
            ) : null}
          </div>

          <div>
            <h4 className="text-lg font-medium text-white">{certificate.title}</h4>
            <p className="mt-1 text-sm text-[#A1A1AA]">
              {certificate.issuer} · {certificate.year}
            </p>
          </div>

          {(certificate.file || certificate.credentialUrl) && (
            <div className="flex items-center gap-2">
              {certificate.file && (
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-white transition-colors hover:border-white/20"
                >
                  View
                </a>
              )}

              {certificate.file && (
                <a
                  href={certificate.file}
                  download
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-white transition-colors hover:border-white/20"
                >
                  Download
                </a>
              )}

              {!certificate.file && certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-white transition-colors hover:border-white/20"
                >
                  Open
                </a>
              )}
            </div>
          )}
          </div>
        )}
      />
    </ScrollReveal>
  );
}
