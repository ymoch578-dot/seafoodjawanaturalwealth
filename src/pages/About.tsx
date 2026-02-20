import CTASection from "@/components/CTASection";
import ctaAbout from "@/assets/cta-about.jpg";
import { Target, Eye, Users, Network } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src={heroAbout} alt="Indonesian fishing boats" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">About Us</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
            Built on Indonesia's Tuna Strength
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            PT. Jawa Natural Wealth was established in 2024 as a seafood export-focused company, operating under structured quality and supply management standards to serve international tuna markets.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Indonesia is one of the world's largest tuna-producing nations, with vast fishing grounds across the Pacific and Indian Oceans. PT. Jawa Natural Wealth was founded to develop a reliable, export-oriented seafood operation capable of meeting international buyer specifications.
                </p>
                <p>
                  Our operations emphasize structured quality control, cold chain management, and export readiness to ensure product consistency from landing to international shipment.
                </p>
                <p>
                  As a growing company, we apply a modern, performance-driven approach to seafood export — combining local industry knowledge with disciplined export execution.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-secondary rounded-lg p-8">
                <Eye className="text-ocean mb-3" size={28} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a trusted global supplier of export-grade seafood through consistent quality, disciplined operations, and reliable shipment performance.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-8">
                <Target className="text-ocean mb-3" size={28} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                <ol className="text-muted-foreground leading-relaxed space-y-4 list-none">
                  <li>
                    <span className="font-semibold text-foreground">1. Deliver Export-Grade Seafood Products</span><br />
                    Aligned with international standards.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">2. Operate Under Structured Supply And Quality Management Systems</span>
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">3. Provide Responsive And Professional Export Execution</span>
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">4. Strengthen Quality Control Processes</span><br />
                    To meet evolving market requirements.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">5. Build Sustainable, Long-Term Business Relationships</span><br />
                    Based on reliability and performance.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Framework */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src={heroAbout} alt="Supply network" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/60" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Operational Framework
            </h2>
            <p className="text-foreground max-w-2xl mx-auto text-lg">
              Our strength lies in maintaining structured control across the export process — from initial product handling to container shipment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Fishing Operations", desc: "Tuna harvested from major Indonesian fishing regions under established industry practices." },
              { icon: Network, title: "Processing", desc: "Grading, cutting, and blast-freezing conducted under defined quality standards." },
              { icon: Target, title: "Cold Storage", desc: "Temperature-controlled storage maintaining -18°C or below prior to shipment." },
              { icon: Eye, title: "Export & Logistics", desc: "Containerized reefer shipment handled under structured export procedures aligned with international requirements." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-6 border border-border text-center">
                <item.icon className="text-ocean mb-3 mx-auto" size={24} strokeWidth={1.5} />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection backgroundImage={ctaAbout} />
    </main>
  );
};

export default About;
