import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, Check, ChevronDown } from "lucide-react";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "zh-CN", label: "中文", flag: "🇨🇳" },
  { code: "th", label: "ไทย", flag: "🇹🇭" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Quality & Handling", path: "/quality" },
  { label: "Export Process", path: "/export-process" },
  { label: "Contact", path: "/contact" },
];

const setCookie = (name: string, value: string, days: number) => {
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
};

const triggerGoogleTranslate = (langCode: string, retries = 10): Promise<boolean> => {
  return new Promise((resolve) => {
    const attempt = (remaining: number) => {
      const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change'));
        resolve(true);
      } else if (remaining > 0) {
        setTimeout(() => attempt(remaining - 1), 300);
      } else {
        // Fallback: set cookie and reload
        setCookie('googtrans', `/en/${langCode}`, 365);
        setCookie('googtrans', `/en/${langCode}`, 365);
        window.location.reload();
        resolve(false);
      }
    };
    attempt(retries);
  });
};

const getActiveLang = (): string => {
  const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
  return match ? match[1] : "en";
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("en");
  const [translating, setTranslating] = useState(false);
  const location = useLocation();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveLang(getActiveLang());
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setLangOpen(false);
    setMobileLangOpen(false);
    setIsOpen(false);
  }, [location.pathname]);

  const handleLangSelect = useCallback(async (code: string) => {
    if (code === activeLang) {
      setLangOpen(false);
      setMobileLangOpen(false);
      return;
    }
    setTranslating(true);
    setActiveLang(code);
    await triggerGoogleTranslate(code);
    setTranslating(false);
    setLangOpen(false);
    setMobileLangOpen(false);
  }, [activeLang]);

  const activeLanguage = languages.find((l) => l.code === activeLang) || languages[0];

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
          <div className="hidden lg:flex items-center gap-6">
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
                className="flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-3.5 py-2 rounded-lg text-sm font-medium hover:border-gold hover:text-gold transition-all"
              >
                <Globe size={15} />
                <span>{activeLanguage.flag}</span>
                <span className="hidden xl:inline">{activeLanguage.label}</span>
                <ChevronDown size={14} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-card border border-border rounded-xl shadow-2xl py-2 z-50 animate-fade-in">
                  <p className="px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Select Language
                  </p>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangSelect(lang.code)}
                      disabled={translating}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-3 ${
                        activeLang === lang.code
                          ? "text-gold bg-accent/50 font-semibold"
                          : "text-foreground hover:bg-accent"
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="flex-1">{lang.label}</span>
                      {activeLang === lang.code && <Check size={15} className="text-gold" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => { setMobileLangOpen(!mobileLangOpen); setIsOpen(false); }}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm transition-all ${
                mobileLangOpen 
                  ? "bg-gold/20 text-gold border border-gold/30" 
                  : "text-primary-foreground border border-transparent"
              }`}
            >
              <Globe size={18} />
              <span className="text-xs">{activeLanguage.flag}</span>
            </button>
            <button
              onClick={() => { setIsOpen(!isOpen); setMobileLangOpen(false); }}
              className="text-primary-foreground p-1.5"
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
            <p className="text-primary-foreground/50 text-xs font-semibold uppercase tracking-wider mb-3">
              Select Language
            </p>
            <div className="grid grid-cols-2 gap-0.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLangSelect(lang.code)}
                  disabled={translating}
                  className={`text-left px-3 py-2.5 text-sm rounded-lg transition-all flex items-center gap-2.5 ${
                    activeLang === lang.code
                      ? "text-gold bg-gold/10 font-semibold"
                      : "text-primary-foreground/80 hover:text-gold hover:bg-primary-foreground/5"
                  }`}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span className="flex-1">{lang.label}</span>
                  {activeLang === lang.code && <Check size={14} className="text-gold" />}
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
