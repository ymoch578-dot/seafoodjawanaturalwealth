import { Link } from "react-router-dom";
import tunaWhole from "@/assets/frozen-whole-tuna.png";
import shrimpImg from "@/assets/shrimp.png";
import bandengImg from "@/assets/ikan-bandeng.png";
import catfishImg from "@/assets/catfish.png";
import pangasiusImg from "@/assets/pangasius-fillet.png";
import gurameImg from "@/assets/gurame.png";
import squidImg from "@/assets/squid.png";
import heroProducts from "@/assets/hero-products.jpg";
import CTASection from "@/components/CTASection";
import ctaProducts from "@/assets/cta-products.jpg";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "Frozen Tuna Products",
    image: tunaWhole,
    subtitle: "Whole Round — Export-Grade Tuna from Indonesia",
    description: "Frozen whole round tuna processed under strict temperature control and blast-frozen to preserve texture, color, and nutritional integrity for international distribution. Available species include Baby Tuna, Yellowfin Tuna, Big Eye Tuna, and Skipjack Tuna, each selected based on buyer specifications and market requirements.",
    benefits: ["Available in whole round specification", "Species options: Baby Tuna, Yellowfin, Big Eye, and Skipjack", "Consistent grading and sizing standards", "Vacuum-packed and blast-frozen for extended shelf life", "Suitable for industrial processing, foodservice, and retail"],
    quality: ["Pre-freezing freshness inspection", "Controlled trimming and slicing environment", "Blast freezing at export-standard temperatures", "Multi-stage quality inspection and cold chain management"],
    idealFor: "Processing plants • Canneries • Wholesalers • Restaurants • Retail distributors",
  },
  {
    name: "Frozen Shrimp",
    image: shrimpImg,
    subtitle: "Export-Standard Frozen Shrimp from Indonesia",
    description: "Shrimp processed under hygienic handling systems, graded by size, and frozen immediately to preserve natural sweetness and product stability.",
    benefits: ["Accurate size calibration", "Multiple processing specifications available", "Consistent export-grade quality"],
    quality: ["Hygienic processing system", "Blast freezing and block freezing technology", "Export inspection compliance"],
    idealFor: "Importers • Distributors • Food manufacturers",
  },
  {
    name: "Frozen Catfish",
    image: catfishImg,
    contain: true,
    subtitle: "Export-Grade Frozen Catfish from Indonesian Aquaculture",
    description: "Catfish sourced from Indonesia's established freshwater aquaculture farms, processed under hygienic conditions and blast-frozen to maintain firm texture and mild flavor for international distribution.",
    benefits: ["Mild flavor suitable for diverse culinary applications", "Consistent sizing and grading", "Versatile product forms available", "Cost-effective protein source for bulk supply"],
    quality: ["Farm-to-freezer traceability", "Hygienic processing and handling", "Blast freezing under controlled temperatures", "Export-compliant packaging standards"],
    idealFor: "Seafood importers • Foodservice distributors • Food manufacturers",
  },
  {
    name: "Frozen Milkfish (Bandeng)",
    image: bandengImg,
    contain: true,
    subtitle: "Export-Grade Whole Frozen Milkfish from Indonesia",
    description: "Milkfish (Bandeng) sourced from Indonesian aquaculture farms, carefully cleaned and blast-frozen to preserve its tender texture, mild flavor, and nutritional value for international distribution. Available for both consumption-grade and fishing bait-grade specifications, catering to different market segments and buyer requirements.",
    benefits: ["Tender texture and mild flavor profile", "Available in consumption-grade and bait-grade specifications", "Consistent sizing and grading", "Versatile for multiple culinary preparations and fishing applications"],
    quality: ["Farm-to-freezer traceability", "Rapid blast freezing system", "Export-compliant hygiene and packaging standards"],
    idealFor: "Seafood importers • Foodservice distributors • Retail chains • Fishing bait suppliers",
  },
  {
    name: "Frozen Pangasius Fillet",
    image: pangasiusImg,
    contain: true,
    subtitle: "Export-Grade Pangasius Fillet from Indonesian Aquaculture",
    description: "Pangasius fillet sourced from Indonesia's freshwater aquaculture farms, carefully trimmed and blast-frozen to deliver consistent white flesh with mild flavor, ideal for international foodservice and retail markets.",
    benefits: ["Clean white flesh with mild, neutral flavor", "Consistent fillet sizing and trimming", "Cost-effective protein for high-volume supply", "Versatile for multiple culinary preparations"],
    quality: ["Farm-to-freezer traceability", "Hygienic filleting and trimming process", "Blast freezing under controlled temperatures", "Export-compliant packaging and labeling"],
    idealFor: "Seafood importers • Foodservice operators • Retail chains • Food manufacturers",
  },
  {
    name: "Frozen Gurame",
    image: gurameImg,
    contain: true,
    subtitle: "Export-Grade Whole Frozen Gurame (Giant Gourami)",
    description: "Gurame (Giant Gourami) sourced from Indonesian freshwater aquaculture, carefully cleaned and blast-frozen to preserve its firm texture, distinctive flavor, and premium quality for international distribution.",
    benefits: ["Firm texture and distinctive rich flavor", "Consistent sizing and grading", "High demand in Asian foodservice markets", "Premium positioning in seafood category"],
    quality: ["Farm-to-freezer traceability", "Hygienic handling and processing", "Rapid blast freezing technology", "Export-standard packaging and cold chain compliance"],
    idealFor: "Seafood importers • Asian restaurants • Premium retailers • Foodservice distributors",
  },
  {
    name: "Frozen Squid",
    image: squidImg,
    contain: true,
    subtitle: "Export-Grade Frozen Squid from Indonesian Fisheries",
    description: "Squid sourced from Indonesia's productive fishing grounds, carefully cleaned and blast-frozen to preserve its tender texture, natural sweetness, and quality for international distribution.",
    benefits: ["Tender texture and natural sweet flavor", "Consistent sizing and grading", "Versatile for multiple culinary applications", "Wide acceptance in global seafood markets"],
    quality: ["Sea-to-freezer traceability", "Hygienic cleaning and processing", "Rapid blast freezing technology", "Export-standard packaging and cold chain compliance"],
    idealFor: "Seafood importers • Foodservice distributors • Restaurants • Food manufacturers",
  },
];

const Products = () => {
  return (
    <main>
      {/* Bento Hero */}
      <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-12 gap-3 lg:gap-4 auto-rows-[110px] lg:auto-rows-[140px]">
            <div className="col-span-12 lg:col-span-7 row-span-3 flex flex-col justify-center px-2 lg:px-4">
              <p className="text-ocean font-bold tracking-[0.25em] uppercase text-xs mb-5">Our Products</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.05] text-foreground mb-6">
                Premium <em className="text-ocean italic font-normal">Frozen Seafood</em> for Global Distribution.
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-xl">
                Export-grade frozen seafood across multiple Indonesian species — processed under controlled production systems for importers, processors, and foodservice operators worldwide.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 row-span-5 relative overflow-hidden rounded-2xl group">
              <img src={heroProducts} alt="Seafood processing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-2">Cold Chain Verified</p>
                <p className="text-primary-foreground font-display text-2xl lg:text-3xl leading-tight">Strict temperature control, end-to-end.</p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 row-span-2 rounded-2xl bg-primary text-primary-foreground p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
              <div>
                <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-2">Export Standards</p>
                <p className="font-display text-2xl lg:text-3xl leading-tight">All species handled under the same quality system.</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-full font-semibold text-sm hover:bg-gold-light transition-colors whitespace-nowrap"
              >
                Request Seafood Quotation
                <ArrowUpRight size={16} strokeWidth={2.2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range — Uniform Grid */}
      <section className="py-24 bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-ocean font-bold tracking-[0.25em] uppercase text-xs mb-3">Product Range</p>
              <h2 className="font-display text-3xl lg:text-5xl text-foreground leading-tight">
                Frozen <em className="text-ocean italic font-normal">Indonesian seafood.</em>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-base lg:text-lg leading-relaxed">
              Every product is processed under the same export-grade handling, cold chain, and quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {products.map((product, idx) => (
              <article key={product.name} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-ocean/40 hover:shadow-xl transition-all duration-500 flex flex-col group">
                <div className="aspect-[4/3] overflow-hidden bg-secondary p-4 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className={`w-full h-full ${product.contain ? "object-contain" : "object-cover"} group-hover:scale-105 transition-transform duration-700`} />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground/60 mb-2 font-mono">{String(idx + 1).padStart(2, "0")}</p>
                  <h3 className="font-display text-2xl text-foreground mb-1 leading-tight">{product.name}</h3>
                  <p className="text-ocean text-xs font-medium mb-3">{product.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">{product.description}</p>
                  <div className="mb-4">
                    <p className="text-xs font-bold tracking-[0.25em] uppercase text-foreground mb-2">Highlights</p>
                    <ul className="space-y-1">
                      {product.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="text-muted-foreground text-xs flex items-start gap-2">
                          <span className="text-gold mt-0.5 shrink-0">•</span> <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-auto inline-flex items-center gap-2 text-foreground font-medium text-sm hover:text-ocean transition-colors border-b border-foreground/20 hover:border-ocean pb-1 w-fit"
                  >
                    Request Pricing
                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection backgroundImage={ctaProducts} />
    </main>
  );
};

export default Products;
