import { Link } from "react-router-dom";
import { Anchor, Snowflake, FileCheck, Ship, ShieldCheck, Globe } from "lucide-react";
import heroImg from "@/assets/hero-ocean.jpg";
import tunaWhole from "@/assets/tuna-whole.jpg";
import tunaLoin from "@/assets/tuna-loin.jpg";
import tunaSteak from "@/assets/tuna-steak.jpg";
import CTASection from "@/components/CTASection";

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
    icon: FileCheck,
    title: "Export Documentation",
    description: "Complete export paperwork including health certificates, packing lists, and customs documents.",
  },
  {
    icon: Ship,
    title: "Reliable Shipment",
    description: "Coordinated logistics with established shipping lines for on-time container delivery.",
  },
  {
    icon: Globe,
    title: "Global Supply",
    description: "Serving importers and distributors across Asia, Middle East, Europe, and the Americas.",
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
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Indonesian ocean waters" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-32">
          <div className="max-w-2xl">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in">
              PT. Jawa Natural Wealth — Indonesia
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
              Reliable Indonesian Tuna Export Partner
            </h1>
            <p className="text-primary-foreground/80 text-lg lg:text-xl leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              We supply premium frozen tuna — whole round, loin, and steak — sourced from Indonesia's
              richest fishing waters. Quality-controlled and export-ready for your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/contact"
                className="bg-gold text-gold-foreground px-8 py-4 rounded font-semibold hover:bg-gold-dark transition-colors text-base text-center"
              >
                Request Tuna Quotation
              </Link>
              <Link
                to="/products"
                className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded font-semibold hover:border-gold hover:text-gold transition-colors text-base text-center"
              >
                View Our Products
              </Link>
            </div>
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
            {valueProps.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-ocean/30 transition-all group"
              >
                <item.icon className="text-ocean mb-4" size={32} strokeWidth={1.5} />
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
      <CTASection />
    </main>
  );
};

export default Index;
