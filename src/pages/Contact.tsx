import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
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
            <div className="col-span-12 lg:col-span-5 row-span-5 relative group flex items-center justify-center">
              <img src={heroContact} alt="Business partnership" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-6 lg:col-span-3 row-span-2 rounded-2xl bg-secondary p-6 flex flex-col justify-between">
              <Mail className="text-ocean" size={20} />
              <div className="space-y-1">
                <p className="font-display text-xs lg:text-sm text-foreground leading-tight break-all">admin@seafood.jawanaturalwealth.com</p>
                <p className="font-display text-xs lg:text-sm text-foreground leading-tight break-all">sales_jawanaturalwealth@gmail.com</p>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-4 row-span-2 rounded-2xl bg-primary text-primary-foreground p-6 flex flex-col justify-between">
              <Phone className="text-gold" size={20} />
              <p className="font-display text-lg lg:text-2xl leading-tight">+62 851-8863-2609</p>
            </div>
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
                      <p className="font-semibold text-sm mb-0.5">Location</p>
                      <p className="text-primary-foreground/70 text-sm">Gresik Regency, East Java Province, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                    <Mail className="text-gold mt-1 shrink-0" size={18} />
                  <div>
                      <p className="font-semibold text-sm mb-0.5">Email</p>
                      <p className="text-primary-foreground/70 text-sm break-all">admin@seafood.jawanaturalwealth.com</p>
                      <p className="text-primary-foreground/70 text-sm break-all">sales_jawanaturalwealth@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                    <Phone className="text-gold mt-1 shrink-0" size={18} />
                  <div>
                      <p className="font-semibold text-sm mb-0.5">Phone / WhatsApp</p>
                      <p className="text-primary-foreground/70 text-sm">+62 851-8863-2609</p>
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
