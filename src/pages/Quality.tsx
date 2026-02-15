import CTASection from "@/components/CTASection";
import { ThermometerSnowflake, Search, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Incoming Inspection",
    description: "Every batch undergoes visual, physical, and organoleptic assessment upon arrival at processing coordination points. Fish that do not meet grade requirements are rejected before further handling.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Cold Chain Management",
    description: "Temperature monitoring begins at catch point. Fish are chilled immediately, transferred under cold chain to processing, blast-frozen at -40°C, and stored at -18°C or below until container loading.",
  },
  {
    icon: CheckCircle,
    title: "Pre-Shipment Quality Check",
    description: "Final inspection before loading covers product temperature, packaging integrity, weight accuracy, and visual condition. Only batches meeting all criteria are cleared for export.",
  },
  {
    icon: FileText,
    title: "Export Document",
    description: "We coordinate all required export paperwork: health certificates, certificates of origin, packing lists, commercial invoices, and customs documentation — ensuring smooth import clearance at destination.",
  },
];

const Quality = () => {
  return (
    <main className="pt-20">
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Quality & Handling</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
            Quality Control at Every Stage
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            From ocean to container, every step is monitored to ensure your tuna arrives in the condition
            your market demands.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-0">
              {steps.map((step, i) => (
                <div key={step.title} className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Timeline line */}
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Commitments */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-12">Our Quality Commitments</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "-18°C", label: "Storage Temperature" },
              { value: "100%", label: "Batch Inspection Rate" },
              { value: "24h", label: "Catch-to-Freeze Window" },
              
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-lg p-8 border border-border">
                <p className="font-display text-3xl font-bold text-ocean mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Quality Questions?" subtitle="Our team is ready to discuss specifications, handling processes, and documentation requirements." />
    </main>
  );
};

export default Quality;
