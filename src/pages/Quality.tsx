import CTASection from "@/components/CTASection";
import ctaQuality from "@/assets/cta-quality.jpg";
import heroQuality from "@/assets/hero-quality.jpg";
import { ThermometerSnowflake, Search, FileText, CheckCircle } from "lucide-react";


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
    title: "Export Documentation",
    description: "All required export documentation — including health certificates, certificates of origin, packing lists, commercial invoices, and customs clearance documents — is prepared and managed in accordance with destination country requirements to ensure smooth import clearance.",
  },
];

const Quality = () => {
  return (
    <main>
      {/* Bento Hero */}
      <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-12 gap-3 lg:gap-4 auto-rows-[110px] lg:auto-rows-[140px]">
            <div className="col-span-12 lg:col-span-7 row-span-3 flex flex-col justify-center px-2 lg:px-4">
              <p className="text-ocean font-medium tracking-[0.25em] uppercase text-xs mb-5">Quality &amp; Handling</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.05] text-foreground mb-6">
                Integrated <em className="text-ocean italic font-normal">Quality Control</em> System.
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-xl">
                Every stage of handling — from landing to container loading — is managed under controlled inspection protocols to ensure product integrity meets international market standards.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 row-span-5 relative group flex items-center justify-center">
              <img src={heroQuality} alt="Quality inspection" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-6 lg:col-span-3 row-span-2 rounded-2xl bg-secondary p-6 flex flex-col justify-between">
              <p className="text-[10px] tracking-[0.3em] uppercase text-ocean">Freezing</p>
              <p className="font-display text-3xl lg:text-4xl text-foreground leading-none">-40°C<span className="text-sm text-muted-foreground"> blast</span></p>
            </div>
            <div className="col-span-6 lg:col-span-4 row-span-2 rounded-2xl bg-primary text-primary-foreground p-6 flex flex-col justify-between">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold">Stages</p>
              <p className="font-display text-xl lg:text-2xl leading-tight">4-step inspection &amp; release</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento process grid */}
      <section className="py-24 bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-ocean font-medium tracking-[0.25em] uppercase text-xs mb-3">Inspection Protocol</p>
              <h2 className="font-display text-3xl lg:text-5xl text-foreground leading-tight">
                From landing to <em className="text-ocean italic font-normal">container loading.</em>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-base lg:text-lg leading-relaxed">
              Each stage operates under defined criteria — only batches meeting all conditions advance to the next step.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
            {steps.map((step, i) => {
              const span = i === 1 ? "lg:col-span-7" : i === 0 ? "lg:col-span-5" : i === 2 ? "lg:col-span-6" : "lg:col-span-6";
              return (
                <div key={step.title} className={`col-span-12 ${span} bg-card border border-border rounded-2xl p-8 lg:p-10 hover:border-ocean/40 transition-colors`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-ocean/10 flex items-center justify-center">
                      <step.icon size={20} className="text-ocean" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs text-muted-foreground/60 tracking-widest font-mono">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-3 leading-tight">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                  {step.bullets && (
                    <ul className="mt-3 space-y-1.5">
                      {step.bullets.map((b) => (
                        <li key={b} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-gold mt-0.5">•</span> {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {step.extra && (
                    <p className="text-muted-foreground leading-relaxed mt-3 text-sm italic">{step.extra}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title="Quality Questions?" subtitle="Our team is ready to discuss specifications, handling processes, and documentation requirements." backgroundImage={ctaQuality} />
    </main>
  );
};

export default Quality;
