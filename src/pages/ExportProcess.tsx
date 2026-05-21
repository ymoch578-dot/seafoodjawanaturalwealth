import CTASection from "@/components/CTASection";
import ctaExport from "@/assets/cta-export.jpg";
import heroExport from "@/assets/hero-export.jpg";


const processSteps = [
  {
    step: "01",
    title: "Inquiry & Specification",
    description: "You share your product requirements — species, cut, volume, packaging format, and delivery timeline. Availability is confirmed and a formal quotation is issued based on agreed specifications.",
  },
  {
    step: "02",
    title: "Raw Material Sourcing",
    description: "Raw materials are sourced from established Indonesian fishing ports and aquaculture regions through long-term supply relationships. Supply allocation is secured according to confirmed volume requirements.",
  },
  {
    step: "03",
    title: "Processing & Freezing",
    description: "Seafood is graded and processed to the agreed product format. Products are blast-frozen, packed according to export standards, and stored under controlled temperature conditions.",
  },
  {
    step: "04",
    title: "Quality Verification",
    description: "Each batch undergoes structured quality control including:",
    bullets: [
      "Visual grading",
      "Core temperature verification",
      "Weight accuracy confirmation",
      "Packaging integrity inspection",
    ],
    extra: "Only compliant batches proceed to export release.",
  },
  {
    step: "05",
    title: "Export Documentation",
    description: "All required export documentation — including health certificate, certificate of origin, packing list, commercial invoice, bill of lading, and customs clearance forms — is prepared in accordance with destination country regulations.",
  },
  {
    step: "06",
    title: "Container Loading & Shipment",
    description: "Products are loaded into temperature-controlled reefer containers. Shipment is arranged through established international shipping lines, with tracking provided until arrival at destination port.",
  },
];

const ExportProcess = () => {
  return (
    <main>
      {/* Bento Hero */}
      <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-12 gap-3 lg:gap-4 auto-rows-[110px] lg:auto-rows-[140px]">
            <div className="col-span-12 lg:col-span-7 row-span-3 flex flex-col justify-center px-2 lg:px-4">
              <p className="text-ocean font-medium tracking-[0.25em] uppercase text-xs mb-5">Export Process</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.05] text-foreground mb-6">
                From <em className="text-ocean italic font-normal">inquiry</em> to delivery.
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-xl">
                A structured export workflow designed to ensure operational clarity, product integrity, and on-time shipment to your destination port.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 row-span-5 relative group flex items-center justify-center">
              <img src={heroExport} alt="Container ship export" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-6 lg:col-span-3 row-span-2 rounded-2xl bg-secondary p-6 flex flex-col justify-between">
              <p className="text-[10px] tracking-[0.3em] uppercase text-ocean">Workflow</p>
              <p className="font-display text-4xl lg:text-5xl text-foreground leading-none">06</p>
            </div>
            <div className="col-span-6 lg:col-span-4 row-span-2 rounded-2xl bg-primary text-primary-foreground p-6 flex flex-col justify-between">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold">Response</p>
              <p className="font-display text-xl lg:text-2xl leading-tight">Quotation within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps — Bento */}
      <section className="py-24 bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-ocean font-medium tracking-[0.25em] uppercase text-xs mb-3">Six-Step Workflow</p>
              <h2 className="font-display text-3xl lg:text-5xl text-foreground leading-tight">
                Structured for <em className="text-ocean italic font-normal">clarity.</em>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-base lg:text-lg leading-relaxed">
              Each step is defined, traceable, and verified before shipment release.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
            {processSteps.map((item, i) => {
              const accent = i % 3 === 0 ? "bg-primary text-primary-foreground" : "bg-card border border-border";
              const spans = ["lg:col-span-5", "lg:col-span-7", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4", "lg:col-span-12"];
              return (
                <div key={item.step} className={`col-span-12 ${spans[i]} ${accent} rounded-2xl p-8 lg:p-10 transition-colors`}>
                  <div className="flex items-baseline justify-between mb-5">
                    <span className={`font-display text-5xl lg:text-6xl leading-none ${i % 3 === 0 ? "text-gold" : "text-ocean"}`}>{item.step}</span>
                    <span className={`text-xs tracking-widest font-mono ${i % 3 === 0 ? "text-primary-foreground/50" : "text-muted-foreground/60"}`}>STEP</span>
                  </div>
                  <h3 className={`font-display text-2xl mb-3 leading-tight ${i % 3 === 0 ? "" : "text-foreground"}`}>{item.title}</h3>
                  <p className={`leading-relaxed text-sm ${i % 3 === 0 ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{item.description}</p>
                  {item.bullets && (
                    <ul className="mt-3 space-y-1.5">
                      {item.bullets.map((b) => (
                        <li key={b} className={`text-sm flex items-start gap-2 ${i % 3 === 0 ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                          <span className="text-gold mt-0.5">•</span> {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.extra && (
                    <p className={`leading-relaxed text-sm mt-3 italic ${i % 3 === 0 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{item.extra}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title="Start Your Export Inquiry" subtitle="Tell us what you need — species, volume, and destination. We'll respond with availability and pricing within 24 hours." secondaryLabel="Request Seafood Quotation" backgroundImage={ctaExport} />
    </main>
  );
};

export default ExportProcess;
