import CTASection from "@/components/CTASection";
import { Target, Eye, Users, Network } from "lucide-react";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">About Us</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl">
            Built on Indonesia's Tuna Supply Strength
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl text-lg leading-relaxed">
            PT. Jawa Natural Wealth was established in 2024 to connect Indonesia's abundant tuna resources
            with international markets through an integrated, quality-focused export supply approach.
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
                  Indonesia is one of the world's largest tuna-producing nations, home to vast fishing
                  grounds across the Pacific and Indian Oceans. PT. Jawa Natural Wealth was founded to
                  channel this natural abundance into a reliable export supply for international buyers.
                </p>
                <p>
                  We coordinate directly with established fishing communities and processing partners
                  across key Indonesian ports. This integrated sourcing network allows us to maintain
                  consistent supply volumes, enforce quality standards at every stage, and deliver frozen
                  tuna products that meet the specifications of importers, processors, and distributors worldwide.
                </p>
                <p>
                  As a young company, we bring fresh energy and a modern approach to export coordination —
                  combining local expertise with transparent, buyer-focused communication.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {[
                { icon: Eye, title: "Our Vision", text: "To Position Indonesia As A Premier Origin For Export-Grade Frozen Tuna By Building Long-Term Partnerships Based On Consistency, Quality, And Trust." },
                { icon: Target, title: "Our Mission", text: "" },
              ].map((item) => (

                <div key={item.title} className="bg-secondary rounded-lg p-8">
                  <item.icon className="text-ocean mb-3" size={28} strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  {item.text ? (
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  ) : (
                    <ul className="text-muted-foreground leading-relaxed space-y-3 list-disc list-inside">
                      <li>To maintain consistent product quality through strict quality control and monitoring at every stage of the supply chain.</li>
                      <li>To establish reliable partnerships with fishermen, processors, and logistics providers to ensure stable supply continuity.</li>
                      <li>To implement integrated supply coordination for efficient sourcing, processing, and distribution.</li>
                      <li>To comply with international seafood standards and regulatory requirements in global markets.</li>
                      <li>To continuously improve operational processes to meet evolving market expectations.</li>
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supply Network */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Integrated Supply Network
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our strength lies in coordinating every link of the supply chain — from catch to container.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Fishing Communities", desc: "Established relationships with experienced fishing crews across Indonesia's key tuna ports." },
              { icon: Network, title: "Processing Partners", desc: "Coordination with vetted processing facilities for grading, cutting, and blast freezing." },
              { title: "Cold Storage", desc: "Temperature-monitored storage at port facilities maintaining frozen integrity before shipment.", icon: Target },
              { title: "Logistics", desc: "Managed container loading and coordination with international shipping lines for reliable delivery.", icon: Eye },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-6 border border-border">
                <item.icon className="text-ocean mb-3" size={24} strokeWidth={1.5} />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default About;
