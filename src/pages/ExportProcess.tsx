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
    description: "Raw materials are sourced from established Indonesian tuna ports through long-term relationships with fishing communities. Supply allocation is secured according to confirmed volume requirements.",
  },
  {
    step: "03",
    title: "Processing & Freezing",
    description: "Tuna is graded and processed to the agreed product format (whole round, loin, or steak). Products are blast-frozen, packed according to export standards, and stored under controlled temperature conditions.",
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
    <main className="pt-20">
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src={heroExport} alt="Export logistics" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Export Process</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
            From Inquiry to Delivery
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            A structured export workflow designed to ensure operational clarity, product integrity, and on-time shipment.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-ocean/30 transition-all">
                <span className="font-display text-4xl font-bold text-primary">{item.step}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                {item.bullets && (
                  <ul className="mt-2 space-y-1">
                    {item.bullets.map((b) => (
                      <li key={b} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-ocean mt-0.5">•</span> {b}
                      </li>
                    ))}
                  </ul>
                )}
                {item.extra && (
                  <p className="text-muted-foreground leading-relaxed text-sm mt-2">{item.extra}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Start Your Export Inquiry" subtitle="Tell us what you need — species, volume, and destination. We'll respond with availability and pricing within 24 hours." backgroundImage={ctaExport} />
    </main>
  );
};

export default ExportProcess;
