import { Link } from "react-router-dom";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  backgroundImage?: string;
}

const CTASection = ({
  title = "Ready to Source Indonesian Tuna?",
  subtitle = "Get competitive pricing for your bulk tuna requirements. Our team responds within 24 hours.",
  primaryLabel = "Request Tuna Quotation",
  secondaryLabel = "Discuss Your Bulk Requirement",
  backgroundImage,
}: CTASectionProps) => {
  return (
    <section className="relative py-20">
      {backgroundImage ? (
        <div className="absolute inset-0">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-primary" />
      )}
      <div className="relative container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
          {title}
        </h2>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded font-semibold hover:border-gold hover:text-gold transition-colors text-base"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
