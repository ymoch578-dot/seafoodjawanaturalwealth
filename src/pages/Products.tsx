import { Link } from "react-router-dom";
import tunaWhole from "@/assets/tuna-whole.jpg";
import tunaLoin from "@/assets/tuna-loin.jpg";
import tunaSteak from "@/assets/tuna-steak.png";
import squidImg from "@/assets/squid.png";
import shrimpImg from "@/assets/shrimp.png";
import crabImg from "@/assets/crab.png";
import heroProducts from "@/assets/hero-products.jpg";
import CTASection from "@/components/CTASection";
import ctaProducts from "@/assets/cta-products.jpg";

const products = [
  {
    name: "Frozen Whole Round Tuna",
    image: tunaWhole,
    subtitle: "Premium Export-Ready Whole Tuna for High-Volume Processing",
    description: "Frozen Whole Round Tuna sourced from fresh catches and blast-frozen immediately to preserve natural freshness, texture, and nutritional quality. Handled under strict cold chain control from landing to storage.",
    benefits: ["Consistent size grading and visual quality", "Rapid freezing for maximum freshness retention", "Suitable for industrial processing and canning"],
    quality: ["Inspected before freezing", "Blast-frozen and stored at export standard temperatures", "Controlled handling throughout supply chain"],
    idealFor: "Processors • Canneries • Bulk seafood importers",
  },
  {
    name: "Frozen Tuna Loin",
    image: tunaLoin,
    subtitle: "Premium Trimmed Tuna Loins with Export-Grade Quality",
    description: "Carefully hand-trimmed loins processed under temperature-controlled conditions and vacuum-packed to preserve color, texture, and freshness.",
    benefits: ["Clean, uniform cuts", "Extended shelf life", "Reduced processing loss"],
    quality: ["Hand-trimmed selection", "Vacuum-sealed & blast-frozen", "Multi-stage quality inspection"],
    idealFor: "Wholesalers • Processors • Foodservice distributors",
  },
  {
    name: "Frozen Tuna Steak",
    image: tunaSteak,
    subtitle: "Uniform Portion-Cut Tuna for Foodservice & Retail",
    description: "Precision-cut tuna steaks individually wrapped and frozen to maintain texture, flavor, and easy handling.",
    benefits: ["Consistent portion size", "Minimal waste", "Ready for quick distribution"],
    quality: ["Portion-controlled slicing", "Rapid freezing process", "Export-standard hygiene"],
    idealFor: "Restaurants • Distributors • Retail suppliers",
  },
  {
    name: "Frozen Squid",
    image: squidImg,
    subtitle: "Cleaned & Size-Graded Squid for Reliable Bulk Supply",
    description: "Freshly harvested squid cleaned, sorted, and blast-frozen to maintain firmness and natural taste.",
    benefits: ["Uniform sizing", "Strong texture after thawing", "Flexible packaging formats"],
    quality: ["Thorough cleaning", "Size grading", "Cold chain controlled freezing"],
    idealFor: "Processors • Wholesalers • Foodservice buyers",
  },
  {
    name: "Frozen Shrimp",
    image: shrimpImg,
    subtitle: "Premium IQF & Block Frozen Shrimp for Global Markets",
    description: "Carefully processed shrimp graded by size and frozen immediately to preserve sweetness and freshness.",
    benefits: ["Accurate size grading", "Multiple processing options", "Consistent supply quality"],
    quality: ["Hygienic handling", "IQF or block freezing", "Export-grade inspection"],
    idealFor: "Importers • Distributors • Food manufacturers",
  },
  {
    name: "Frozen Crab",
    image: crabImg,
    subtitle: "High-Quality Frozen Crab with Freshness Locked In",
    description: "Fresh crabs inspected and blast-frozen shortly after harvest to maintain natural flavor and texture.",
    benefits: ["Consistent quality control", "Flexible product forms", "Strong frozen integrity"],
    quality: ["Pre-freeze inspection", "Rapid freezing", "Cold chain maintained"],
    idealFor: "Foodservice distributors • Processors • Seafood retailers",
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
            Frozen Seafood for Global Markets
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Covering the needs of importers, processors, distributors, and
            foodservice operators. All sourced from Indonesian waters and handled to export standards.
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
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <h2 className="font-display text-3xl font-bold text-foreground mb-1">{product.name}</h2>
                <p className="text-ocean font-semibold text-sm mb-4">{product.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

                <div className="mb-4">
                  <p className="font-semibold text-foreground text-sm mb-2">Why Buyers Choose This Product:</p>
                  <ul className="space-y-1">
                    {product.benefits.map((b) => (
                      <li key={b} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-ocean mt-0.5">•</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-foreground text-sm mb-2">Processing & Quality:</p>
                  <ul className="space-y-1">
                    {product.quality.map((q) => (
                      <li key={q} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-ocean mt-0.5">✔</span> {q}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm"><span className="font-semibold text-foreground">Ideal For: </span><span className="text-muted-foreground">{product.idealFor}</span></p>

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
