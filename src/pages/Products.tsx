import { Link } from "react-router-dom";
import tunaWhole from "@/assets/tuna-whole.jpg";
import tunaLoin from "@/assets/tuna-loin.jpg";
import tunaSteak from "@/assets/tuna-steak.png";
import squidImg from "@/assets/squid.png";
import shrimpImg from "@/assets/shrimp.png";
import crabImg from "@/assets/crab.png";
import heroProducts from "@/assets/hero-products.jpg";
import CTASection from "@/components/CTASection";

const products = [
  {
    name: "Frozen Whole Round Tuna",
    image: tunaWhole,
    description:
      "Whole tuna frozen intact, preserving freshness from catch. Sourced from Indonesian longline and handline fisheries, each fish undergoes visual and physical inspection before blast freezing. Available in Yellowfin, Skipjack, and Bigeye species with size ranges from 1.5 kg to 50+ kg. Each fish is gutted, gilled, and blast-frozen at -40°C within hours of landing, then stored at -18°C or below. Individually polybagged and packed in woven bags or cartons in standard export pallet configuration with 3-5% net weight glazing.",
  },
  {
    name: "Frozen Tuna Loin",
    image: tunaLoin,
    description:
      "Premium hand-trimmed loins, cut from graded whole tuna. Suitable for further processing, sashimi-grade distribution, or retail-ready portioning by the buyer. Available in Yellowfin and Bigeye species with loin weights of 2-8 kg per piece. Skinless, boneless trimming is performed under temperature-controlled conditions, then vacuum-packed and blast-frozen immediately. Each loin is vacuum-sealed and packed in insulated cartons (10 kg standard), with CO-treated or natural color options and custom weight specifications available.",
  },
  {
    name: "Frozen Tuna Steak",
    image: tunaSteak,
    description:
      "Portion-cut steaks for foodservice and retail markets. Each steak is uniformly sliced from inspected loins, individually wrapped, and quick-frozen (IQF) for ease of handling and distribution. Available in Yellowfin and Skipjack species with standard 2-3 cm thickness. Offered in skin-on or skinless options with custom portion sizes (150g, 200g, 250g). Packed in retail-ready or bulk carton configurations to suit your market requirements.",
  },
  {
    name: "Frozen Squid",
    image: squidImg,
    description:
      "Whole frozen squid sourced from Indonesian coastal waters. Cleaned and graded for consistent sizing, suitable for processors, distributors, and foodservice operators worldwide. Available in Loligo and Todarodes species with size ranges of 8-30 cm. Offered as whole cleaned or tube & tentacle options. Each batch is blast-frozen at -40°C and stored at -18°C or below to maintain texture and freshness. Available in block-frozen or IQF options, packed in PE bags inside cartons (10 kg standard).",
  },
  {
    name: "Frozen Shrimp",
    image: shrimpImg,
    description:
      "Premium frozen shrimp from Indonesian aquaculture and wild catch. Carefully processed, graded, and frozen to preserve natural flavor and texture for global markets. Available in Vannamei and Black Tiger species with size ranges from 16/20 to 71/90 count per kg. Offered in head-on, headless, peeled & deveined (PD), or PDTO options. IQF processed and blast-frozen immediately after grading, packed in 1 kg retail or 10 kg bulk packaging with block-frozen options also available.",
  },
  {
    name: "Frozen Crab",
    image: crabImg,
    description:
      "Whole frozen crab sourced from Indonesian waters. Each crab is inspected for quality and freshness before blast freezing, ideal for processors and foodservice distribution. Available in Blue Swimming Crab and Mud Crab species with size ranges of 100-500g per piece. Offered as whole, half-cut, or crab meat options. Live crabs are processed and blast-frozen within hours of catch, stored at -18°C or below. Individually wrapped or bulk packed in insulated cartons with custom weight grades available.",
  },
];

const Products = () => {
  return (
    <main className="pt-20">
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src={heroProducts} alt="Seafood processing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
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
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">{product.name}</h2>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>

                <Link
                  to="/contact"
                  className="inline-block mt-8 bg-gold text-gold-foreground px-6 py-3 rounded font-semibold hover:bg-gold-dark transition-colors text-sm"
                >
                  Inquire About This Product
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </main>
  );
};

export default Products;
