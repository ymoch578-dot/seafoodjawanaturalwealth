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
      "Whole tuna frozen intact, preserving freshness from catch. Sourced from Indonesian longline and handline fisheries, each fish undergoes visual and physical inspection before blast freezing.",
  },
  {
    name: "Frozen Tuna Loin",
    image: tunaLoin,
    description:
      "Premium hand-trimmed loins, cut from graded whole tuna. Suitable for further processing, sashimi-grade distribution, or retail-ready portioning by the buyer.",
  },
  {
    name: "Frozen Tuna Steak",
    image: tunaSteak,
    description:
      "Portion-cut steaks for foodservice and retail markets. Each steak is uniformly sliced, individually wrapped, and frozen for ease of handling and distribution.",
  },
  {
    name: "Frozen Squid",
    image: squidImg,
    description:
      "Whole frozen squid sourced from Indonesian coastal waters. Cleaned and graded for consistent sizing, suitable for processors, distributors, and foodservice operators worldwide.",
  },
  {
    name: "Frozen Shrimp",
    image: shrimpImg,
    description:
      "Premium frozen shrimp from Indonesian aquaculture and wild catch. Carefully processed, graded, and frozen to preserve natural flavor and texture for global markets.",
  },
  {
    name: "Frozen Crab",
    image: crabImg,
    description:
      "Whole frozen crab sourced from Indonesian waters. Each crab is inspected for quality and freshness before blast freezing, ideal for processors and foodservice distribution.",
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
