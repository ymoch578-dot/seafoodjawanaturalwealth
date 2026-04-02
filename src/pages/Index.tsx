import { Link } from "react-router-dom";
import { Anchor, Snowflake, Ship, ShieldCheck, Globe } from "lucide-react";
import heroImg from "@/assets/hero-ocean.jpg";
import tunaWhole from "@/assets/frozen-whole-tuna.png";

import shrimpImg from "@/assets/shrimp.png";
import CTASection from "@/components/CTASection";
import ctaHome from "@/assets/cta-home.jpg";

const valueProps = [
  {
    icon: Anchor,
    title: "Indonesian Origin",
    description: "Seafood sourced from Indonesia's major fishing and aquaculture regions, selected and processed to meet international buyer specifications.",
  },
  {
    icon: Snowflake,
    title: "Cold Chain Integrity",
    description: "Controlled temperature management from initial handling through freezing and container loading, maintaining product integrity at -18°C or below.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Multi-stage inspection procedures covering grading, processing, freezing, and pre-shipment verification before export clearance.",
  },
  {
    icon: Ship,
    title: "Reliable Shipment",
    description: "Structured export handling and containerized reefer shipment aligned with international logistics standards.",
  },
  {
    icon: Globe,
    title: "International Market Ready",
    description: "Your strategic partner connecting Indonesia's seafood to importers, processors, and distributors across key global markets.",
  },
];

const products = [
  {
    name: "Frozen Tuna Products",
    desc: "Whole round tuna, tuna loin, and tuna steak — processed under strict quality control from Indonesia's leading tuna fishing regions.",
    highlights: ["Whole Round", "Loin", "Steak"],
    image: tunaWhole,
  },
  {
    name: "Frozen Shrimp",
    desc: "Export-grade shrimp sourced from Indonesia's established aquaculture regions, frozen immediately to preserve natural sweetness and stability.",
    highlights: ["Size-Graded", "Blast Frozen", "Export Ready"],
    image: shrimpImg,
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
              <span className="notranslate">PT. Jawa Natural Wealth</span> — Indonesia
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
              Your Reliable Indonesian Seafood Supply Partner
            </h1>
            <p className="text-primary-foreground/80 text-lg lg:text-xl leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              We connect Indonesia's finest frozen seafood — specializing in tuna and shrimp — directly to international markets. Processed under strict quality standards and fully prepared to meet your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Partner With Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A structured export-focused partnership built on quality control, cold chain integrity, and reliable shipment performance — from source to your destination port.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {valueProps.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-ocean/30 transition-all group text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
              >
                <item.icon className="text-ocean mb-4 mx-auto" size={32} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview — Our Specialization */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">What We Export</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Specialization
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Two core product categories — Tuna and Shrimp — processed under strict export-grade handling standards for international seafood buyers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group border border-border hover:border-ocean/30"
              >
                <div className="aspect-[3/2] overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">{product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{product.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full bg-ocean/10 text-ocean border border-ocean/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-ocean font-semibold text-sm hover:text-ocean-dark transition-colors group/link"
                  >
                    Request Pricing
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-navy-light transition-colors text-sm tracking-wide"
            >
              View Full Product Range
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection backgroundImage={ctaHome} />
    </main>
  );
};

export default Index;
