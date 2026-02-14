import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">
              Jawa Natural Wealth
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your reliable Indonesian tuna export partner. Specializing in frozen tuna supply for global seafood markets.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Tuna Products", path: "/products" },
                { label: "Quality & Handling", path: "/quality" },
                { label: "Export Process", path: "/export-process" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Products</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>Frozen Whole Round Tuna</p>
              <p>Frozen Tuna Loin</p>
              <p>Frozen Tuna Steak</p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
                <span>Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gold shrink-0" />
                <span>export@jawanaturalwealth.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gold shrink-0" />
                <span>+62 XXX XXXX XXXX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} PT. Jawa Natural Wealth. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
