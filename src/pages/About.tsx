import CTASection from "@/components/CTASection";
import ctaAbout from "@/assets/cta-about.jpg";
import { Target, Eye, Users, Network } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";

const framework = [
  { icon: Users, title: "Sourcing & Supply", desc: "Tuna harvested from major Indonesian fishing regions and Shrimp sourced from established aquaculture operations." },
  { icon: Network, title: "Processing", desc: "Grading, sorting, and blast-freezing conducted under defined quality standards for both Tuna and Shrimp products." },
  { icon: Target, title: "Cold Storage", desc: "Temperature-controlled storage maintaining -18°C or below prior to shipment." },
  { icon: Eye, title: "Export & Logistics", desc: "Containerized reefer shipment handled under structured export procedures aligned with international requirements." },
];

const missionPoints = [
  "Deliver premium-quality seafood products that consistently meet and exceed international standards.",
  "Build enduring, trust-based partnerships with supply networks, buyers, and strategic stakeholders worldwide.",
  "Ensure operational excellence through consistent quality control, timely delivery, and transparent business practices.",
  "Expand our global footprint by developing diversified and sustainable market channels.",
  "Enhance supply chain efficiency through continuous improvement and strategic integration.",
  "Support and promote responsible, ethical, and sustainable fishing practices for long-term industry growth.",
];

const About = () => {
  return (
    <main>
      {/* Bento Hero */}
      <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-12 gap-3 lg:gap-4 auto-rows-[110px] lg:auto-rows-[140px]">
            <div className="col-span-12 lg:col-span-7 row-span-3 flex flex-col justify-center px-2 lg:px-4">
              <p className="text-ocean font-medium tracking-[0.25em] uppercase text-xs mb-5">About Us</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.05] text-foreground mb-6">
                Built on Indonesia's <em className="text-ocean italic font-normal">Seafood Strength.</em>
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-xl">
                <span className="notranslate">PT. Jawa Natural Wealth</span> was established in 2024 as a seafood exporter, operating under structured quality and supply management standards to connect Indonesia's seafood resources with international markets.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-5 row-span-5 relative overflow-hidden rounded-2xl group">
              <img src={heroAbout} alt="Indonesian fishing boats" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-2">Origin</p>
                <p className="text-primary-foreground font-display text-2xl lg:text-3xl leading-tight">Indonesian fisheries, structured for global supply.</p>
              </div>
            </div>

            <div className="col-span-6 lg:col-span-3 row-span-2 rounded-2xl bg-secondary p-6 flex flex-col justify-between">
              <p className="text-[10px] tracking-[0.3em] uppercase text-ocean">Established</p>
              <p className="font-display text-4xl lg:text-5xl text-foreground leading-none">2024</p>
            </div>
            <div className="col-span-6 lg:col-span-4 row-span-2 rounded-2xl bg-primary text-primary-foreground p-6 flex flex-col justify-between">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold">Core Focus</p>
              <p className="font-display text-xl lg:text-2xl leading-tight">Tuna · Vannamei Shrimp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story + Vision + Mission — Bento */}
      <section className="py-24 bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <p className="text-ocean font-medium tracking-[0.25em] uppercase text-xs mb-4">Our Story</p>
              <h2 className="font-display text-3xl lg:text-5xl text-foreground leading-tight">
                A modern Indonesian <em className="text-ocean italic font-normal">seafood exporter.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-muted-foreground text-base lg:text-lg leading-relaxed lg:pt-4">
              <p>
                Indonesia is one of the world's largest seafood-producing nations, with vast fishing grounds and aquaculture resources. <span className="notranslate">PT. Jawa Natural Wealth</span> was founded as a strategic exporter — specializing in tuna and shrimp — bridging Indonesia's seafood resources with international buyer specifications.
              </p>
              <p>
                Our operations emphasize structured quality control, cold chain management, and export readiness to ensure product consistency from landing to international shipment.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
            <div className="lg:col-span-5 bg-card border border-border rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-5">
                <Eye className="text-ocean" size={28} strokeWidth={1.5} />
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">01 · Vision</span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-4 leading-tight">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the premier strategic partner in Indonesia's seafood industry, connecting sustainable sources to global markets with world class standards of quality, reliability, and professionalism.
              </p>
            </div>
            <div className="lg:col-span-7 bg-primary text-primary-foreground rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-5">
                <Target className="text-gold" size={28} strokeWidth={1.5} />
                <span className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/60">02 · Mission</span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl mb-6 leading-tight">Our Mission</h3>
              <ol className="space-y-3">
                {missionPoints.map((p, i) => (
                  <li key={i} className="flex gap-4 text-primary-foreground/80 text-sm lg:text-base leading-relaxed">
                    <span className="text-gold font-mono text-xs tracking-wider shrink-0 pt-1">0{i + 1}</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Framework */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-ocean font-medium tracking-[0.25em] uppercase text-xs mb-3">How We Operate</p>
              <h2 className="font-display text-3xl lg:text-5xl text-foreground leading-tight">
                Operational <em className="text-ocean italic font-normal">Framework</em>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-base lg:text-lg leading-relaxed">
              Specializing in Tuna and Shrimp, our strength lies in structured control across every export stage — from initial handling to container shipment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {framework.map((item, idx) => (
              <div key={item.title} className="bg-card p-8 lg:p-10 hover:bg-secondary/50 transition-colors">
                <div className="flex items-start justify-between mb-6">
                  <item.icon className="text-ocean" size={26} strokeWidth={1.5} />
                  <span className="text-xs text-muted-foreground/60 tracking-widest font-mono">0{idx + 1}</span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-3 leading-tight">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
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
