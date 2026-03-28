import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/context/LanguageContext";
import { useSubmitForm } from "@/hooks/useQueries";
import { Loader2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const serviceOptions = [
  { id: "home-pest", label: "Home Pest Control" },
  { id: "hotel-pest", label: "Hotel / Restaurant Pest Control" },
  { id: "termite", label: "Termite Pre-Construction Treatment" },
  { id: "ecocare", label: "EcoCare Eco-Friendly Package" },
  { id: "other", label: "Other" },
];

export default function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const { mutate: submitForm, isPending } = useSubmitForm();

  function toggleService(label: string) {
    setSelectedServices((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label],
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }
    submitForm(
      { name, phone, address, services: selectedServices },
      {
        onSuccess: () => {
          setSubmitted(true);
          toast.success(
            "Your request has been submitted! We will contact you within 24 hours.",
          );
          const waText = `Name: ${name}%0APhone: ${phone}%0AAddress: ${address}%0AServices: ${selectedServices.join(", ")}`;
          window.open(`https://wa.me/919952258863?text=${waText}`, "_blank");
        },
        onError: () => {
          toast.error(
            "Submission failed. Please try again or call us directly.",
          );
        },
      },
    );
  }

  return (
    <>
      <section className="bg-accent py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-3">
              {t.contactBiocare}
            </h1>
            <p className="text-muted-foreground text-lg">
              We are ready to serve you in Thiruvananthapuram and nearby areas.
              Call or WhatsApp for a free inspection and quotation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                {t.getInTouch}
              </h2>
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+918838510443"
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-accent/30 hover:bg-accent transition-colors"
                  data-ocid="contact.link"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      Phone
                    </div>
                    <div className="text-primary font-semibold">
                      +91 8838510443
                    </div>
                  </div>
                </a>
                <a
                  href="https://wa.me/919952258863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-accent/30 hover:bg-accent transition-colors"
                  data-ocid="contact.link"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      WhatsApp
                    </div>
                    <div className="text-primary font-semibold">
                      +91 9952258863
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:pactyahoo@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-accent/30 hover:bg-accent transition-colors"
                  data-ocid="contact.link"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      Email
                    </div>
                    <div className="text-primary font-semibold">
                      pactyahoo@gmail.com
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-accent/30">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      Address
                    </div>
                    <div className="text-muted-foreground text-sm leading-relaxed">
                      Puliarakonnam-Moonnammoodu Road,
                      <br />
                      Thiruvananthapuram, Kerala – 695013
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Free Inspection Offer
                </h3>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>
                    • Call us or fill the form to request a free site
                    inspection.
                  </li>
                  <li>
                    • Our technician will visit within 24 hours (or next working
                    day).
                  </li>
                  <li>
                    • You will receive a detailed quotation and treatment plan.
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                {t.bookFreeInspection}
              </h2>
              {submitted ? (
                <div
                  className="rounded-xl bg-accent border border-primary/20 p-8 text-center"
                  data-ocid="contact.success_state"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    Request Received!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you! Our team will contact you within 24 hours for
                    your free inspection and quotation.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="contact.modal"
                >
                  <div>
                    <Label
                      htmlFor="name"
                      className="font-medium text-foreground mb-1.5 block"
                    >
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      required
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="font-medium text-foreground mb-1.5 block"
                    >
                      Phone <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXXXXXXX"
                      required
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="address"
                      className="font-medium text-foreground mb-1.5 block"
                    >
                      Address / Area
                    </Label>
                    <Input
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Area or city"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <Label className="font-medium text-foreground mb-2 block">
                      Service Required
                    </Label>
                    <div className="space-y-2">
                      {serviceOptions.map((opt, i) => (
                        <div key={opt.id} className="flex items-center gap-2">
                          <Checkbox
                            id={opt.id}
                            checked={selectedServices.includes(opt.label)}
                            onCheckedChange={() => toggleService(opt.label)}
                            data-ocid={`contact.checkbox.${i + 1}`}
                          />
                          <Label
                            htmlFor={opt.id}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {opt.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-white hover:bg-primary/90 rounded-lg"
                    disabled={isPending}
                    data-ocid="contact.submit_button"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                        Submitting...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Submitting will also open WhatsApp to send your enquiry
                    directly.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-white pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-4 text-center">
            Our Location
          </h2>
          <div className="rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=Thiruvananthapuram&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="BioCare Location Map"
            />
          </div>
        </div>
      </section>
    </>
  );
}
