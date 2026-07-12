import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  secondaryLabel?: string;
  backgroundImage?: string;
}

const CTASection = ({
  title = "Ready to Partner With Us?",
  subtitle = "Let's discuss your seafood requirements. Our team responds within 24 hours with availability and pricing.",
  secondaryLabel = "Request Seafood Quotation",
  backgroundImage,
}: CTASectionProps) => {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-12 gap-3 lg:gap-4 auto-rows-[110px] lg:auto-rows-[140px]">
          <div className="col-span-12 lg:col-span-7 row-span-3 rounded-2xl bg-primary text-primary-foreground p-8 lg:p-12 flex flex-col justify-center">
            <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">Get In Touch</p>
            <h2 className="font-display text-3xl lg:text-5xl leading-[1.05] mb-5">{title}</h2>
            <p className="text-primary-foreground/70 max-w-xl text-base lg:text-lg leading-relaxed mb-7">{subtitle}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gold-light transition-colors w-fit"
            >
              {secondaryLabel}
              <ArrowUpRight size={16} strokeWidth={2.2} />
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-5 row-span-3 relative overflow-hidden rounded-2xl group">
            {backgroundImage ? (
              <>
                <img src={backgroundImage} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/10 to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-ocean to-primary" />
            )}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-1">Indonesian Origin</p>
              <p className="text-primary-foreground font-display text-xl lg:text-2xl leading-tight">Reliable supply, delivered worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
