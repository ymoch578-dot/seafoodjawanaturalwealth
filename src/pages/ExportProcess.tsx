import CTASection from "@/components/CTASection";
import ctaExport from "@/assets/cta-export.jpg";
import heroExport from "@/assets/hero-export.jpg";

const processSteps = [
  {
    step: "01",
    title: "Inquiry & Specification",
    description: "You share your product requirements — species, cut, volume, packaging preferences, and delivery timeline. We confirm availability and provide a quotation.",
  },
  {
    step: "02",
    title: "Sourcing & Coordination",
    description: "We activate our supply network across Indonesian tuna ports. Fish are sourced from established fishing communities and directed to coordinated processing points.",
  },
  {
    step: "03",
    title: "Processing & Freezing",
    description: "Tuna is graded, processed to your specification (whole round, loin, or steak), blast-frozen, and packed according to agreed packaging formats.",
  },
  {
    step: "04",
    title: "Quality Inspection",
    description: "Every batch undergoes multi-point quality checks — visual assessment, temperature verification, weight accuracy, and packaging integrity — before export clearance.",
  },
  {
    step: "05",
    title: "Document",
    description: "We prepare and coordinate all export documents: health certificate, certificate of origin, packing list, commercial invoice, bill of lading, and customs forms.",
  },
  {
    step: "06",
    title: "Container Loading & Shipment",
    description: "Product is loaded into reefer containers at controlled temperature. We coordinate with shipping lines and provide tracking until arrival at your destination port.",
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
            A transparent, step-by-step export process designed for clarity and confidence at every stage.
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
