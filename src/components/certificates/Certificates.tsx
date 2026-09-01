"use client";

import CertificatesTrigger from "@/components/certificates/CertificatesTrigger";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Certificates() {
  return (
    <section id="certificates" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Certificates"
          title="Certifications"
          subtitle="A snapshot of the learning milestones that shaped my technical foundation."
        />

        <CertificatesTrigger />
      </div>
    </section>
  );
}
