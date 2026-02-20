import CTASection from "@/components/CTASection";
import ctaQuality from "@/assets/cta-quality.jpg";
import { ThermometerSnowflake, Search, FileText, CheckCircle } from "lucide-react";
import heroQuality from "@/assets/hero-quality.jpg";

const steps = [
  {
    icon: Search,
    title: "Incoming Raw Material Inspection",
    description: "Each batch undergoes visual, physical, and organoleptic evaluation upon arrival at the processing facility.",
    extra: "Only raw materials that meet grading specifications proceed to processing. Non-conforming batches are rejected prior to production.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Cold Chain Management",
    description: "Temperature control begins immediately after catch. Fish are rapidly chilled, transferred under monitored cold chain conditions to the processing facility, blast-frozen at -40°C, and stored at -18°C or below until container loading.",
    extra: "Continuous temperature monitoring ensures cold chain integrity throughout storage and export preparation.",
  },
  {
    icon: CheckCircle,
    title: "Pre-Shipment Quality Verification",
    description: "Before container loading, final inspection includes:",
    bullets: [
      "Core product temperature verification",
      "Packaging integrity check",
      "Net weight confirmation",
      "Visual grading compliance",
    ],
    extra: "Only products meeting all export criteria are released for shipment.",
  },
  {
    icon: FileText,
    title: "Export Document",
    description: "All required export document — including health certificates, certificates of origin, packing lists, commercial invoices, and customs clearance documents — is prepared and managed in accordance with destination country requirements to ensure smooth import clearance.",
  },
];

const Quality = () => {
  return (
    <main className="pt-20">
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src={heroQuality} alt="Quality inspection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Quality & Handling</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
            Integrated Quality Control System
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Every stage of handling — from landing to container loading — is managed under controlled inspection protocols to ensure product integrity meets international market standards.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-0">
              {steps.map((step, i) => (
                <div key={step.title} className="relative flex gap-6 pb-12 last:pb-0">
                  {i < steps.length - 1 && (
                    <div className="absolute left-5 top-12 w-px h-[calc(100%-2rem)] bg-border" />
                  )}
                  <div className="w-10 h-10 rounded-full bg-ocean flex items-center justify-center shrink-0">
                    <step.icon size={18} className="text-ocean-foreground" />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    {step.bullets && (
                      <ul className="mt-2 space-y-1">
                        {step.bullets.map((b) => (
                          <li key={b} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-ocean mt-0.5">•</span> {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    {step.extra && (
                      <p className="text-muted-foreground leading-relaxed mt-2">{step.extra}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Commitments */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src={heroQuality} alt="Quality commitments" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/60" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-12">Our Quality Commitments</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { value: "-18°C", label: "Minimum storage temperature" },
              { value: "100%", label: "Batch inspection rate" },
              { value: "24h", label: "Maximum catch-to-freeze window" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-lg p-8 border border-border">
                <p className="font-display text-3xl font-bold text-ocean mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Quality Questions?" subtitle="Our team is ready to discuss specifications, handling processes, and documentation requirements." backgroundImage={ctaQuality} />
    </main>
  );
};

export default Quality;
