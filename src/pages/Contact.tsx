import { useState } from "react";
import { MapPin, Mail, Phone, Send, FileText, Package, Ship, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroContact from "@/assets/hero-contact-fishery.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    volume: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Received",
      description: "Thank you for your inquiry. Our export team will respond within 24 hours.",
    });
    setForm({ name: "", company: "", email: "", phone: "", country: "", product: "", volume: "", message: "" });
  };

  const inputClass =
    "w-full px-4 py-3 rounded border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ocean/40 focus:border-ocean transition-colors";

  return (
    <main>
      {/* Bento Hero */}
      <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-12 gap-3 lg:gap-4 auto-rows-[110px] lg:auto-rows-[140px]">
            <div className="col-span-12 lg:col-span-7 row-span-3 flex flex-col justify-center px-2 lg:px-4">
              <p className="text-ocean font-medium tracking-[0.25em] uppercase text-xs mb-5">Contact Us</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.05] text-foreground mb-6">
                Request a <em className="text-ocean italic font-normal">Quotation.</em>
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-xl">
                Share your requirements and our export team will respond with product availability, pricing, and shipment details within 24 hours.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 row-span-5 relative overflow-hidden rounded-2xl group">
              <img src={heroContact} alt="Business partnership" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-2">24-Hour Response</p>
                <p className="text-primary-foreground font-display text-2xl lg:text-3xl leading-tight">Built for serious international buyers.</p>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-3 row-span-2 rounded-2xl bg-secondary p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-ocean/10 blur-xl" aria-hidden />
              <div className="flex items-center justify-between relative">
                <Mail className="text-ocean" size={20} />
                <span className="text-[9px] tracking-[0.3em] uppercase text-ocean/70 font-medium">Email</span>
              </div>
              <div className="space-y-1 relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-ocean animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Online now</span>
                </div>
                <p className="font-display text-xs lg:text-sm text-foreground leading-tight break-all">admin@seafood.jawanaturalwealth.com</p>
                <p className="font-display text-xs lg:text-sm text-foreground leading-tight break-all">salesseafoodjnw@gmail.com</p>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-4 row-span-2 rounded-2xl bg-primary text-primary-foreground p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gold/10 blur-2xl" aria-hidden />
              <div className="absolute right-4 top-4 flex items-center gap-1.5 text-[9px] tracking-[0.3em] uppercase text-gold/80">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                WhatsApp Ready
              </div>
              <div className="flex items-center justify-between relative">
                <Phone className="text-gold" size={20} />
              </div>
              <div className="space-y-1 relative">
                <p className="font-display text-lg lg:text-2xl leading-tight">+62 851-8863-2609</p>
                <p className="font-display text-lg lg:text-2xl leading-tight">+62 851-8543-3397</p>
                <p className="font-display text-lg lg:text-2xl leading-tight">+62 851-9657-2911</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Journey — fills the middle section */}
      <section className="py-16 lg:py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
            <p className="text-ocean font-medium tracking-[0.25em] uppercase text-xs mb-3">What to Expect</p>
            <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4 leading-tight">From inquiry to shipment.</h2>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
              A clear, transparent export process designed for serious international buyers.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: Send, label: "Submit Inquiry", desc: "Share your product needs and volume", color: "ocean" },
              { icon: FileText, label: "Receive Quotation", desc: "Pricing, availability, and terms within 24h", color: "gold" },
              { icon: Package, label: "Quality Check", desc: "Sampling and inspection before dispatch", color: "ocean" },
              { icon: Ship, label: "Export Shipment", desc: "Cold-chain logistics to your port", color: "gold" },
            ].map((step, i) => (
              <div
                key={step.label}
                className="relative bg-card border border-border rounded-2xl p-6 lg:p-8 text-center group hover:border-ocean/40 transition-colors"
              >
                <div className={`absolute top-4 right-4 text-${step.color}/10 text-5xl font-display font-bold leading-none`} aria-hidden>
                  0{i + 1}
                </div>
                <div className={`w-12 h-12 rounded-xl bg-${step.color}/10 flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className={`text-${step.color}`} size={22} />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{step.label}</h3>
                <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">{step.desc}</p>

                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" aria-hidden />
                )}
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-12 lg:mt-16 flex flex-wrap items-center justify-center gap-4 lg:gap-6">
            {[
              "HACCP Certified",
              "Cold Chain Guaranteed",
              "Export Documentation",
              "Traceable Sourcing",
            ].map((badge) => (
              <div
                key={badge}
                className="inline-flex items-center gap-2 bg-secondary/60 border border-border rounded-full px-4 py-2 text-xs text-muted-foreground"
              >
                <CheckCircle className="text-ocean" size={14} />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Contact details */}
      <section className="py-24 bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-8 bg-card border border-border rounded-2xl p-8 lg:p-12">
              <p className="text-ocean font-medium tracking-[0.25em] uppercase text-xs mb-3">Inquiry Form</p>
              <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-8 leading-tight">Tell us about your requirements.</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required className={inputClass} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Company Name *</label>
                    <input name="company" value={form.company} onChange={handleChange} required className={inputClass} placeholder="Your company" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required className={inputClass} placeholder="email@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone / WhatsApp</label>
                    <input name="phone" value={form.phone} onChange={handleChange} className={inputClass} placeholder="+62 XXX XXXX XXXX" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Country *</label>
                    <input name="country" value={form.country} onChange={handleChange} required className={inputClass} placeholder="Destination country" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Product Interest *</label>
                    <select name="product" value={form.product} onChange={handleChange} required className={inputClass}>
                      <option value="">Select product</option>
                      <option value="whole">Frozen Whole Round Tuna</option>
                      <option value="loin">Frozen Tuna Loin</option>
                      <option value="steak">Frozen Tuna Steak</option>
                      <option value="shrimp">Frozen Vannamei Shrimp</option>
                      <option value="catfish">Frozen Catfish</option>
                      <option value="milkfish">Frozen Milkfish (Bandeng)</option>
                      <option value="pangasius">Frozen Pangasius Fillet</option>
                      <option value="gurame">Frozen Gurame (Giant Gourami)</option>
                      <option value="squid">Frozen Squid</option>
                      <option value="multiple">Multiple Products</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Estimated Volume (per shipment)</label>
                  <input name="volume" value={form.volume} onChange={handleChange} className={inputClass} placeholder="e.g., 1 container / 20 MT per month" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message / Additional Requirements</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} className={inputClass} placeholder="Species preference, packaging needs, delivery timeline..." />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-navy-light transition-colors text-base"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs mb-3">Direct Contact</p>
                <h2 className="font-display text-2xl lg:text-3xl mb-7 leading-tight">Reach our export desk.</h2>
                <div className="space-y-5">
                <div className="flex items-start gap-3">
                    <MapPin className="text-gold mt-1 shrink-0" size={18} />
                  <div>
                      <p className="font-semibold text-sm mb-0.5">Head Office</p>
                      <p className="text-primary-foreground/70 text-sm">Gresik Regency, East Java Province, Indonesia</p>
                      <p className="font-semibold text-sm mb-0.5 mt-3">Marketing Administration Office</p>
                      <p className="text-primary-foreground/70 text-sm">Malang Regency, East Java Province, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                    <Mail className="text-gold mt-1 shrink-0" size={18} />
                  <div>
                      <p className="font-semibold text-sm mb-0.5">Email</p>
                      <p className="text-primary-foreground/70 text-sm break-all">admin@seafood.jawanaturalwealth.com</p>
                      <p className="text-primary-foreground/70 text-sm break-all">salesseafoodjnw@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                    <Phone className="text-gold mt-1 shrink-0" size={18} />
                  <div>
                      <p className="font-semibold text-sm mb-0.5">Phone / WhatsApp</p>
                      <p className="text-primary-foreground/70 text-sm">+62 851-8863-2609</p>
                      <p className="text-primary-foreground/70 text-sm">+62 851-8543-3397</p>
                      <p className="text-primary-foreground/70 text-sm">+62 851-9657-2911</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <p className="text-[10px] tracking-[0.3em] uppercase text-ocean mb-3">Response Guarantee</p>
                <h3 className="font-display text-xl text-foreground mb-3 leading-tight">Replies within 24 hours.</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All inquiries receive a response within 24 hours on business days. We provide
                  product availability, indicative pricing, and shipment timeline in our initial reply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
