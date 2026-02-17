import { Link } from "react-router-dom";
import { Anchor, Snowflake, Ship, ShieldCheck, Globe } from "lucide-react";
import heroImg from "@/assets/hero-ocean.jpg";
import tunaWhole from "@/assets/tuna-whole.jpg";
import tunaLoin from "@/assets/tuna-loin.jpg";
import tunaSteak from "@/assets/tuna-steak.png";
import CTASection from "@/components/CTASection";
import ctaHome from "@/assets/cta-home.jpg";

const valueProps = [
  {
    icon: Anchor,
    title: "Indonesian Origin",
    description: "Direct sourcing from Indonesia's prolific tuna fishing grounds across the archipelago.",
  },
  {
    icon: Snowflake,
    title: "Cold Chain Integrity",
    description: "Temperature-controlled handling from catch to container, maintaining -18°C throughout.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Controlled",
    description: "Multi-point inspection at every stage of the supply chain before export clearance.",
  },
  {
    icon: Ship,
    title: "Reliable Shipment",
    description: "Ready to coordinate container shipments with established shipping partners.",
  },
  {
    icon: Globe,
    title: "Global Supply",
    description: "Prepared to support international buyers across key global markets.",
  },
];

const products = [
  {
    name: "Frozen Whole Round Tuna",
    desc: "Whole tuna, blast-frozen onboard or at port facilities. Ideal for processors and large-volume buyers.",
    image: tunaWhole,
  },
  {
    name: "Frozen Tuna Loin",
    desc: "Hand-cut premium loins, vacuum-packed and frozen. Ready for further processing or direct distribution.",
    image: tunaLoin,
  },
  {
    name: "Frozen Tuna Steak",
    desc: "Portion-cut steaks, individually packed. Convenient for foodservice and retail distribution channels.",
    image: tunaSteak,
  },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Indonesian ocean waters" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/70 via-navy/50 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-32">
          <div className="max-w-2xl mx-auto">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in">
              PT. Jawa Natural Wealth — Indonesia
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
              Reliable Export-Ready Tuna Supplier
            </h1>
            <p className="text-primary-foreground/80 text-lg lg:text-xl leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              We supply premium frozen tuna — whole round, loin, and steak — sourced from Indonesia's
              richest fishing waters. Quality-controlled and export-ready for your market.
            </p>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Source Tuna From Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              An integrated supply network built for reliability, quality, and transparency — from Indonesian waters to your port.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.slice(0, 3).map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-ocean/30 transition-all group text-center"
              >
                <item.icon className="text-ocean mb-4 mx-auto" size={32} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
            {valueProps.slice(3).map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-ocean/30 transition-all group text-center"
              >
                <item.icon className="text-ocean mb-4 mx-auto" size={32} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Tuna Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Three core product lines, all sourced from Indonesian tuna fisheries and processed to export standards.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{product.desc}</p>
                  <Link
                    to="/contact"
                    className="text-ocean font-semibold text-sm hover:text-ocean-dark transition-colors"
                  >
                    Request Pricing →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection backgroundImage={ctaHome} />
    </main>
  );
};

export default Index;
