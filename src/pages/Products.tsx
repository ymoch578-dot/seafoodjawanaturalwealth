import { Link } from "react-router-dom";
import tunaWhole from "@/assets/tuna-whole.jpg";
import tunaLoin from "@/assets/tuna-loin.jpg";
import tunaSteak from "@/assets/tuna-steak.jpg";
import squidImg from "@/assets/squid.jpg";
import shrimpImg from "@/assets/shrimp.jpg";
import crabImg from "@/assets/crab.jpg";
import CTASection from "@/components/CTASection";

const products = [
  {
    name: "Frozen Whole Round Tuna",
    image: tunaWhole,
    description:
      "Whole tuna frozen intact, preserving freshness from catch. Sourced from Indonesian longline and handline fisheries, each fish undergoes visual and physical inspection before blast freezing.",
    handling: "Gutted, gilled, and blast-frozen at -40°C within hours of landing. Stored at -18°C or below.",
    packaging: [
      "Individually polybagged",
      "Packed in woven bags or cartons",
      "Standard export pallet configuration",
    ],
    specs: ["Species: Yellowfin, Skipjack, Bigeye", "Size range: 1.5 kg – 50+ kg (by species)", "Glazing: 3-5% net weight"],
  },
  {
    name: "Frozen Tuna Loin",
    image: tunaLoin,
    description:
      "Premium hand-trimmed loins, cut from graded whole tuna. Suitable for further processing, sashimi-grade distribution, or retail-ready portioning by the buyer.",
    handling: "Skinless, boneless trimming under temperature-controlled conditions. Vacuum-packed and blast-frozen immediately.",
    packaging: [
      "Vacuum-sealed individual loins",
      "Packed in insulated cartons (10 kg standard)",
      "Custom weight specifications available",
    ],
    specs: ["Species: Yellowfin, Bigeye", "Loin weight: 2-8 kg per piece", "CO-treated or natural color options"],
  },
  {
    name: "Frozen Tuna Steak",
    image: tunaSteak,
    description:
      "Portion-cut steaks for foodservice and retail markets. Each steak is uniformly sliced, individually wrapped, and frozen for ease of handling and distribution.",
    handling: "Precision-cut from inspected loins, individually quick-frozen (IQF) for separation and freshness retention.",
    packaging: [
      "Individually wrapped portions",
      "Retail-ready or bulk carton options",
      "Custom portion sizes (150g, 200g, 250g)",
    ],
    specs: ["Species: Yellowfin, Skipjack", "Steak thickness: 2-3 cm standard", "Skin-on or skinless options"],
  },
  {
    name: "Frozen Squid",
    image: squidImg,
    description:
      "Whole frozen squid sourced from Indonesian coastal waters. Cleaned and graded for consistent sizing, suitable for processors, distributors, and foodservice operators worldwide.",
    handling: "Cleaned, graded by size, and blast-frozen at -40°C. Stored at -18°C or below to maintain texture and freshness.",
    packaging: [
      "Block-frozen or IQF options",
      "Packed in PE bags inside cartons (10 kg standard)",
      "Custom sizing and packaging available",
    ],
    specs: ["Species: Loligo, Todarodes", "Size range: 8-30 cm", "Whole cleaned or tube & tentacle options"],
  },
  {
    name: "Frozen Shrimp",
    image: shrimpImg,
    description:
      "Premium frozen shrimp from Indonesian aquaculture and wild catch. Carefully processed, graded, and frozen to preserve natural flavor and texture for global markets.",
    handling: "Deveined, peeled or shell-on as required. IQF processed and blast-frozen immediately after grading.",
    packaging: [
      "IQF in PE bags inside cartons",
      "Block-frozen options available",
      "Standard 1 kg retail or 10 kg bulk packaging",
    ],
    specs: ["Species: Vannamei, Black Tiger", "Size range: 16/20 to 71/90 count per kg", "Head-on, headless, PD, or PDTO options"],
  },
  {
    name: "Frozen Crab",
    image: crabImg,
    description:
      "Whole frozen crab sourced from Indonesian waters. Each crab is inspected for quality and freshness before blast freezing, ideal for processors and foodservice distribution.",
    handling: "Live crabs are processed and blast-frozen within hours of catch. Stored at -18°C or below.",
    packaging: [
      "Individually wrapped or bulk packed",
      "Packed in insulated cartons",
      "Custom weight grades available",
    ],
    specs: ["Species: Blue Swimming Crab, Mud Crab", "Size range: 100-500g per piece", "Whole, half-cut, or crab meat options"],
  },
];

const Products = () => {
  return (
    <main className="pt-20">
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
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
                <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

                <div className="space-y-5">
                  <div>
                    <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Handling Method</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{product.handling}</p>
                  </div>

                  <div>
                    <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Packaging Options</h4>
                    <ul className="space-y-1">
                      {product.packaging.map((p) => (
                        <li key={p} className="text-muted-foreground text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-ocean shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Specifications</h4>
                    <ul className="space-y-1">
                      {product.specs.map((s) => (
                        <li key={s} className="text-muted-foreground text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

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
