import { Link } from "react-router-dom";
import { Anchor, Snowflake, Ship, ShieldCheck, Globe, Handshake, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-ocean.jpg";
import tunaWhole from "@/assets/frozen-whole-tuna.png";
import shrimpImg from "@/assets/shrimp.png";
import gurameImg from "@/assets/gurame.png";
import bandengImg from "@/assets/ikan-bandeng.png";
import pangasiusImg from "@/assets/pangasius-fillet.png";
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
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description: "Built on transparent communication, consistent supply commitment, and responsive support — fostering durable relationships with buyers worldwide.",
  },
];

const products = [
  {
    name: "Frozen Tuna Products",
    desc: "Whole round tuna, tuna loin, and tuna steak — processed under strict quality control from Indonesia's leading tuna fishing regions.",
    highlights: ["Yellowfin Tuna", "Baby Tuna", "Big Eye", "Skipjack"],
    image: tunaWhole,
  },
  {
    name: "Frozen Shrimp",
    desc: "Export-grade shrimp sourced from Indonesia's established aquaculture regions, frozen immediately to preserve natural sweetness and stability.",
    highlights: ["Size-Graded", "Export Ready"],
    image: shrimpImg,
  },
];

const Index = () => {
  return (
    <main>
      {/* Hero — Editorial Bento */}
      <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-12 gap-3 lg:gap-4 auto-rows-[110px] lg:auto-rows-[140px]">
            {/* Eyebrow + Headline */}
            <div className="col-span-12 lg:col-span-7 row-span-3 lg:row-span-3 flex flex-col justify-center px-2 lg:px-4">
              <p className="text-ocean font-medium tracking-[0.25em] uppercase text-xs mb-5 animate-fade-in">
                <span className="notranslate">PT. Jawa Natural Wealth</span> · Indonesia
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] xl:text-[76px] leading-[1.05] text-foreground mb-6 animate-fade-in-up">
                Indonesia's Finest <em className="text-ocean italic font-normal">Seafood</em>, Delivered Worldwide.
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                A reliable supply partner specializing in premium frozen tuna and vannamei shrimp — handled under strict cold chain integrity from origin to your destination port.
              </p>
            </div>

            {/* Featured Hero Image */}
            <div className="col-span-12 lg:col-span-5 row-span-3 lg:row-span-5 relative overflow-hidden rounded-2xl group">
              <img src={heroImg} alt="Indonesian seafood selection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-2">Signature Selection</p>
                <p className="text-primary-foreground font-display text-2xl lg:text-3xl leading-tight">From Indonesian waters, to your table.</p>
              </div>
            </div>

            {/* Stat / CTA tile */}
            <div className="col-span-12 lg:col-span-7 row-span-2 rounded-2xl bg-primary text-primary-foreground p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
              <div>
                <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-2">Export-Grade · Cold Chain Verified</p>
                <p className="font-display text-2xl lg:text-3xl leading-tight max-w-md">Connecting Indonesia's seafood to importers across global markets.</p>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-full font-semibold text-sm hover:bg-gold-light transition-colors whitespace-nowrap"
              >
                Explore Products
                <ArrowUpRight size={16} strokeWidth={2.2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <p className="text-ocean font-medium tracking-[0.25em] uppercase text-xs mb-4">Why Partner With Us</p>
              <h2 className="font-display text-3xl lg:text-5xl text-foreground leading-tight">
                Built on <em className="text-ocean italic font-normal">trust</em>, engineered for export.
              </h2>
            </div>
            <p className="lg:col-span-7 text-muted-foreground text-lg leading-relaxed lg:pt-4">
              A structured, export-focused partnership built on quality control, cold chain integrity, and reliable shipment performance — from Indonesian source to your destination port.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {valueProps.map((item, idx) => (
              <div
                key={item.title}
                className="bg-card p-8 lg:p-10 hover:bg-secondary/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-6">
                  <item.icon className="text-ocean" size={28} strokeWidth={1.5} />
                  <span className="text-xs text-muted-foreground/60 tracking-widest font-mono">0{idx + 1}</span>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3 leading-tight">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview — Our Specialization */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-ocean font-medium tracking-[0.25em] uppercase text-xs mb-3">What We Export</p>
              <h2 className="font-display text-3xl lg:text-5xl text-foreground leading-tight">
                Our <em className="text-ocean italic font-normal">Specialization</em>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-base lg:text-lg leading-relaxed">
              Two core product categories — Tuna and Shrimp — processed under strict export-grade handling standards for international buyers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-border hover:border-ocean/40"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <h3 className="font-display text-3xl text-foreground mb-3 leading-tight">{product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{product.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {product.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-ocean/10 text-ocean border border-ocean/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-foreground font-medium text-sm hover:text-ocean transition-colors group/link border-b border-foreground/20 hover:border-ocean pb-1"
                  >
                    Request Pricing
                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-navy-light transition-colors text-sm tracking-wide"
            >
              View Full Product Range
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Heritage Strip */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <p className="text-gold tracking-[0.3em] uppercase text-xs mb-5">Indonesian Origin</p>
              <h2 className="font-display text-3xl lg:text-5xl leading-tight mb-6">
                From archipelago waters to <em className="text-gold italic font-normal">global tables</em>.
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed text-base lg:text-lg max-w-lg">
                We work directly with established Indonesian fishing and aquaculture regions — applying disciplined cold-chain handling so that every shipment leaves our port at consistent export quality.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-3 gap-3">
              {[gurameImg, bandengImg, pangasiusImg].map((img, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-navy-light/30 flex items-center justify-center p-3">
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection backgroundImage={ctaHome} />
    </main>
  );
};

export default Index;
