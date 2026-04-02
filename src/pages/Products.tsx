import { Link } from "react-router-dom";
import tunaWhole from "@/assets/frozen-whole-tuna.png";
import tunaLoin from "@/assets/tuna-loin.jpg";
import tunaSteak from "@/assets/tuna-steak.png";
import squidImg from "@/assets/squid.png";
import shrimpImg from "@/assets/shrimp.png";
import bandengImg from "@/assets/ikan-bandeng.png";
import grouperImg from "@/assets/ikan-kerapu.png";
import snapperImg from "@/assets/ikan-kakap-merah.png";
import kembungImg from "@/assets/ikan-kembung.png";
import heroProducts from "@/assets/hero-products.jpg";
import CTASection from "@/components/CTASection";
import ctaProducts from "@/assets/cta-products.jpg";

const products = [
  {
    name: "Frozen Tuna Products",
    image: tunaWhole,
    subtitle: "Whole Round, Loin & Steak — Export-Grade Tuna from Indonesia",
    description: "A complete range of frozen tuna products — whole round tuna, hand-trimmed loins, and precision-cut steaks — all processed under strict temperature control and blast-frozen to preserve texture, color, and nutritional integrity for international distribution.",
    benefits: ["Available in whole round, loin, and steak specifications", "Consistent grading, trimming, and portion sizing standards", "Vacuum-packed and blast-frozen for extended shelf life", "Suitable for industrial processing, foodservice, and retail"],
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
    name: "Frozen Squid",
    image: squidImg,
    subtitle: "Size-Graded Frozen Squid for Bulk Supply",
    description: "Squid processed through cleaning, grading, and rapid freezing systems to maintain texture integrity and product consistency.",
    benefits: ["Uniform sizing", "Maintains firmness after thawing", "Flexible export packaging options"],
    quality: ["Thorough cleaning system", "Size grading classification", "Managed cold chain freezing"],
    idealFor: "Processors • Wholesalers • Foodservice buyers",
  },
  {
    name: "Frozen Milkfish (Bandeng)",
    image: bandengImg,
    contain: true,
    subtitle: "Export-Grade Whole Frozen Milkfish from Indonesia",
    description: "Milkfish (Bandeng) sourced from Indonesian aquaculture farms, carefully cleaned and blast-frozen to preserve its tender texture, mild flavor, and nutritional value for international distribution.",
    benefits: ["Tender texture and mild flavor profile", "Consistent sizing and grading", "Versatile for multiple culinary preparations"],
    quality: ["Farm-to-freezer traceability", "Rapid blast freezing system", "Export-compliant hygiene and packaging standards"],
    idealFor: "Seafood importers • Foodservice distributors • Retail chains",
  },
  {
    name: "Frozen Grouper",
    image: grouperImg,
    contain: true,
    subtitle: "Premium Whole Frozen Grouper for Export Markets",
    description: "Grouper sourced from Indonesian waters, inspected and blast-frozen to preserve firm texture, natural flavor, and export-grade quality standards.",
    benefits: ["Firm texture retained after thawing", "Consistent grading and sizing", "Versatile for multiple culinary applications"],
    quality: ["Pre-freezing freshness inspection", "Blast freezing under controlled temperatures", "Export-compliant cold chain management"],
    idealFor: "Seafood importers • Restaurants • Premium retailers",
  },
  {
    name: "Frozen Red Snapper",
    image: snapperImg,
    contain: true,
    subtitle: "Export-Grade Whole Frozen Red Snapper",
    description: "Red snapper processed under hygienic conditions and rapidly frozen to maintain vibrant color, firm flesh, and superior taste for international distribution.",
    benefits: ["Vibrant natural color preservation", "Consistent size calibration", "High market demand across regions"],
    quality: ["Hygienic handling protocols", "Rapid freezing technology", "Multi-point quality inspection"],
    idealFor: "Wholesalers • Foodservice operators • Retail distributors",
  },
  {
    name: "Frozen Mackerel",
    image: kembungImg,
    contain: true,
    subtitle: "Export-Standard Whole Frozen Mackerel",
    description: "Indian mackerel (Ikan Kembung) processed under hygienic conditions and rapidly frozen to maintain freshness, firm texture, and rich omega-3 content for global market supply.",
    benefits: ["Rich in omega-3 fatty acids", "Consistent size grading", "High demand across Asian and Middle Eastern markets"],
    quality: ["Hygienic handling and processing", "Rapid blast freezing technology", "Export-standard packaging and cold chain compliance"],
    idealFor: "Bulk importers • Wholesale distributors • Food manufacturers",
  },
];

const Products = () => {
  return (
    <main className="pt-20">
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src={heroProducts} alt="Seafood processing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Our Products</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
            Premium Frozen Seafood for Global Distribution
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Export-grade frozen seafood — specializing in Tuna and Shrimp — processed under controlled production systems in Indonesia, ready for importers, processors, and foodservice operators worldwide.
          </p>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-base leading-relaxed mt-3">
            All products are processed under strict temperature control and managed cold chain systems to meet international export requirements.
          </p>
        </div>
      </section>

      {products.map((product, index) => (
        <section
          key={product.name}
          className={`py-20 ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <img src={product.image} alt={product.name} className={`w-full h-full ${product.contain ? "object-contain" : "object-cover"}`} />
                </div>
              </div>
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <h2 className="font-display text-3xl font-bold text-foreground mb-1">{product.name}</h2>
                <p className="text-ocean font-semibold text-sm mb-4">{product.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

                <div className="mb-4">
                  <p className="font-semibold text-foreground text-sm mb-2">Key Product Advantages:</p>
                  <ul className="space-y-1">
                    {product.benefits.map((b) => (
                      <li key={b} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-ocean mt-0.5">•</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-foreground text-sm mb-2">Processing & Quality Control:</p>
                  <ul className="space-y-1">
                    {product.quality.map((q) => (
                      <li key={q} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-ocean mt-0.5">✔</span> {q}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm"><span className="font-semibold text-foreground">Recommended For: </span><span className="text-muted-foreground">{product.idealFor}</span></p>

                <Link
                  to="/contact"
                  className="inline-block mt-6 bg-gold text-gold-foreground px-6 py-3 rounded font-semibold hover:bg-gold-dark transition-colors text-sm"
                >
                  Inquire About This Product
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection backgroundImage={ctaProducts} />
    </main>
  );
};

export default Products;
