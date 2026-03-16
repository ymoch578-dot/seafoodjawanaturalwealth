import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "zh-CN", label: "中文", flag: "🇨🇳" },
  { code: "th", label: "ไทย", flag: "🇹🇭" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
];

const triggerGoogleTranslate = (langCode: string) => {
  const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event('change'));
  }
};

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Quality & Handling", path: "/quality" },
  { label: "Export Process", path: "/export-process" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const location = useLocation();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLangSelect = (code: string) => {
    triggerGoogleTranslate(code);
    setLangOpen(false);
    setMobileLangOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-navy-light/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl lg:text-2xl font-bold text-primary-foreground tracking-tight">
              Seafood Supplier Indonesia
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-gold"
                    : "text-primary-foreground/80 hover:text-gold-light"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Language Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 bg-gold text-gold-foreground px-4 py-2.5 rounded text-sm font-semibold hover:bg-gold-dark transition-colors"
              >
                <Globe size={16} />
                Language
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangSelect(lang.code)}
                      className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-accent transition-colors flex items-center gap-3"
                    >
                      <span className="text-base">{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => { setMobileLangOpen(!mobileLangOpen); setIsOpen(false); }}
              className="text-primary-foreground"
            >
              <Globe size={22} />
            </button>
            <button
              onClick={() => { setIsOpen(!isOpen); setMobileLangOpen(false); }}
              className="text-primary-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2.5 text-sm font-medium ${
                  location.pathname === item.path
                    ? "text-gold"
                    : "text-primary-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}

        {/* Mobile language menu */}
        {mobileLangOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <p className="text-primary-foreground/60 text-xs font-semibold uppercase tracking-wider mb-2">Select Language</p>
            <div className="grid grid-cols-2 gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLangSelect(lang.code)}
                  className="text-left px-3 py-2.5 text-sm text-primary-foreground/80 hover:text-gold transition-colors flex items-center gap-2"
                >
                  <span>{lang.flag}</span>
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
