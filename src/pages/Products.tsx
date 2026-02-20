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
    subtitle: "Export-Grade Whole Tuna for Industrial Processing",
    description: "Whole tuna processed from selected fresh landings and blast-frozen under controlled conditions to preserve texture, color, and nutritional integrity.",
    benefits: ["Consistent grading and visual standards", "Rapid freezing to maintain core freshness", "Suitable for industrial processing and canning applications"],
    quality: ["Pre-freezing inspection", "Blast freezing at export-standard temperatures", "Controlled cold storage and shipment handling"],
    idealFor: "Processing plants • Canneries • Bulk seafood importers",
  },
  {
    name: "Frozen Tuna Loin",
    image: tunaLoin,
    subtitle: "Premium Hand-Trimmed Tuna Loins",
    description: "Carefully processed tuna loins trimmed under temperature-controlled environments and vacuum-packed to maintain color stability and freshness during international shipment.",
    benefits: ["Uniform trimming standards", "Reduced yield loss", "Extended frozen shelf life"],
    quality: ["Controlled trimming environment", "Vacuum sealing & rapid freezing", "Multi-stage quality inspection"],
    idealFor: "Wholesalers • Processors • Foodservice distributors",
  },
  {
    name: "Frozen Tuna Steak",
    image: tunaSteak,
    subtitle: "Precision-Cut Tuna Portions",
    description: "Portion-controlled tuna steaks processed under hygienic conditions and individually wrapped before freezing to maintain structure and ease of distribution.",
    benefits: ["Accurate portion sizing", "Consistent presentation", "Distribution-ready format"],
    quality: ["Controlled slicing process", "Rapid freezing system", "Export-standard hygiene procedures"],
    idealFor: "Restaurants • Retail distributors • Foodservice suppliers",
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
    name: "Frozen Shrimp",
    image: shrimpImg,
    subtitle: "Export-Standard IQF & Block Frozen Shrimp",
    description: "Shrimp processed under hygienic handling systems, graded by size, and frozen immediately to preserve natural sweetness and product stability.",
    benefits: ["Accurate size calibration", "Multiple processing specifications available", "Consistent export-grade quality"],
    quality: ["Hygienic processing system", "IQF and block freezing technology", "Export inspection compliance"],
    idealFor: "Importers • Distributors • Food manufacturers",
  },
  {
    name: "Frozen Crab",
    image: crabImg,
    subtitle: "Frozen Crab Processed for International Markets",
    description: "Crabs inspected and rapidly frozen shortly after harvest to preserve natural flavor, structural integrity, and export quality standards.",
    benefits: ["Consistent inspection protocol", "Multiple product formats available", "Maintained frozen integrity during shipment"],
    quality: ["Pre-freezing inspection", "Rapid freezing system", "Controlled cold storage"],
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
            Premium Frozen Seafood for Global Distribution
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            We supply export-grade frozen seafood processed under controlled production systems in Indonesia, serving importers, processors, and foodservice operators worldwide.
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
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
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
