import { Link } from "react-router-dom";
import { Anchor, Snowflake, Ship, ShieldCheck, Globe, Handshake, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-squid-pangasius.jpg";
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
                A reliable Indonesian seafood exporter — handling a range of frozen Indonesian species under strict cold chain integrity from origin to your destination port.
              </p>
            </div>

            {/* Featured Hero Image */}
            <div className="col-span-12 lg:col-span-5 row-span-3 lg:row-span-5 relative overflow-hidden rounded-2xl group">
              <img src={heroImg} alt="Frozen squid and pangasius fillet" width={1024} height={1536} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-2">Featured Products</p>
                <p className="text-primary-foreground font-display text-2xl lg:text-3xl leading-tight">Squid &amp; Pangasius Fillet</p>
              </div>
            </div>

            {/* Stat / CTA tile */}
            <div className="col-span-12 lg:col-span-7 row-span-2 rounded-2xl bg-primary text-primary-foreground p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
              <div>
                <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-2">Export-Grade · Cold Chain Verified</p>
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

      {/* Product Range Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <p className="text-ocean font-bold tracking-[0.25em] uppercase text-xs mb-4">Featured Products</p>
              <h2 className="font-display text-3xl lg:text-5xl text-foreground leading-tight">
                Squid and <em className="text-ocean italic font-normal">Pangasius Fillet.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 text-muted-foreground text-base lg:text-lg leading-relaxed">
              <p className="mb-6">
                Our featured products are frozen squid and pangasius fillet, supported by a diverse range of Indonesian seafood handled under the same controlled production systems, cold chain integrity, and export-grade quality standards.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-navy-light transition-colors text-sm tracking-wide"
              >
                View Full Product Range
                <ArrowUpRight size={16} />
              </Link>
            </div>
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
                Reliable Seafood Supply for <em className="text-gold italic font-normal">Global Markets</em>
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed text-base lg:text-lg max-w-lg">
                We work directly with established Indonesian fishing and aquaculture regions — applying disciplined cold-chain handling so that every shipment leaves our port at consistent export quality.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-3 gap-3">
              {[gurameImg, bandengImg, pangasiusImg].map((img, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-navy-light/30 flex items-center justify-center p-3">
                  <img src={img} alt="" className="w-full h-full object-cover" />
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
