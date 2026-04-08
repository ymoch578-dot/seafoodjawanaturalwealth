import { Link } from "react-router-dom";
import tunaWhole from "@/assets/frozen-whole-tuna.png";
import shrimpImg from "@/assets/shrimp.png";
import bandengImg from "@/assets/ikan-bandeng.png";
import catfishImg from "@/assets/catfish.png";
import pangasiusImg from "@/assets/pangasius-fillet.png";
import gurameImg from "@/assets/gurame.png";
import heroProducts from "@/assets/hero-products.jpg";
import CTASection from "@/components/CTASection";
import ctaProducts from "@/assets/cta-products.jpg";

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
];

const Products = () => {
  return (
    <main className="pt-20">
      <section className="relative py-20 min-h-[50vh] md:min-h-0 flex items-center">
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
          className={`py-12 md:py-20 ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className={`${index % 2 !== 0 ? "lg:order-2" : ""} flex`}>
                <div className="w-full rounded-lg overflow-hidden shadow-lg bg-white">
                  <img src={product.image} alt={product.name} className="w-full h-auto" />
                </div>
              </div>
              <div className={`${index % 2 !== 0 ? "lg:order-1" : ""} flex flex-col justify-center`}>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">{product.name}</h2>
                <p className="text-ocean font-semibold text-sm mb-3 md:mb-4">{product.subtitle}</p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6">{product.description}</p>

                <div className="mb-3 md:mb-4">
                  <p className="font-semibold text-foreground text-sm mb-2">Key Product Advantages:</p>
                  <ul className="space-y-1">
                    {product.benefits.map((b) => (
                      <li key={b} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-ocean mt-0.5 shrink-0">•</span> <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-3 md:mb-4">
                  <p className="font-semibold text-foreground text-sm mb-2">Processing & Quality Control:</p>
                  <ul className="space-y-1">
                    {product.quality.map((q) => (
                      <li key={q} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-ocean mt-0.5 shrink-0">✔</span> <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm"><span className="font-semibold text-foreground">Recommended For: </span><span className="text-muted-foreground">{product.idealFor}</span></p>

                <Link
                  to="/contact"
                  className="inline-block mt-4 md:mt-6 bg-gold text-gold-foreground px-6 py-3 rounded font-semibold hover:bg-gold-dark transition-colors text-sm"
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
