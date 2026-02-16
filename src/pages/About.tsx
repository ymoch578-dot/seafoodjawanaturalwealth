import CTASection from "@/components/CTASection";
import { Target, Eye, Users, Network } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src={heroAbout} alt="Indonesian fishing boats" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">About Us</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
            Built on Indonesia's Tuna Supply Strength
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
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
              ].map(() => null)}

              <div className="bg-secondary rounded-lg p-8">
                <Eye className="text-ocean mb-3" size={28} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To Become A Trusted Global Supplier Of Export-Ready Seafood Products By Delivering Consistent Quality, Reliable Supply, And Long-Term Partnership Value.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-8">
                <Target className="text-ocean mb-3" size={28} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                <ol className="text-muted-foreground leading-relaxed space-y-4 list-none">
                  <li>
                    <span className="font-semibold text-foreground">1. To Supply High-Quality Export-Ready Seafood</span><br />
                    Ensuring every product meets international quality, safety, and freshness standards.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">2. To Maintain Consistent And Reliable Supply Chains</span><br />
                    Supporting buyers with stable volume, timely fulfillment, and transparent sourcing.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">3. To Offer Professional Trade Support</span><br />
                    Including packaging flexibility, export documentation readiness, and responsive service.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">4. To Continuously Improve Processing And Quality Control</span><br />
                    To meet evolving market requirements and buyer specifications.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">5. To Build Long-Term Business Partnerships</span><br />
                    Based on trust, performance, and mutual growth.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Network */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src={heroAbout} alt="Supply network" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/90" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
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
