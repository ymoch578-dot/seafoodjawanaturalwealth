import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroContact from "@/assets/hero-contact.jpg";

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
    <main className="pt-20">
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src={heroContact} alt="Business partnership" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">Contact Us</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Request a Quotation
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Share your requirements and our export team will respond with product availability,
            pricing, and shipment details within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Inquiry Form</h2>
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
                      <option value="squid">Frozen Squid</option>
                      <option value="shrimp">Frozen Shrimp</option>
                      <option value="crab">Frozen Crab</option>
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
                  className="bg-gold text-gold-foreground px-8 py-3.5 rounded font-semibold hover:bg-gold-dark transition-colors text-base"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Direct Contact</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="text-ocean mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Location</p>
                    <p className="text-muted-foreground text-sm">Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-ocean mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Email</p>
                    <p className="text-muted-foreground text-sm">admin@seafood.jawanaturalwealth.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-ocean mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Phone / WhatsApp</p>
                    <p className="text-muted-foreground text-sm">0851 8543 3397</p>
                    <p className="text-muted-foreground text-sm">0851 8543 3398</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-secondary rounded-lg p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">Response Guarantee</h3>
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
