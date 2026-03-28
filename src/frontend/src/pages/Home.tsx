import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Bug,
  Building2,
  CheckCircle2,
  ChevronRight,
  Leaf,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Bug,
    title: "General Pest Control",
    description:
      "Cockroaches, ants, spiders, bed bugs, lizards, rodents, mosquitoes and flies for homes and commercial properties.",
    href: "/services",
  },
  {
    icon: Building2,
    title: "Termite Pre-Construction",
    description:
      "IS-approved soil treatment before concrete casting — protects your building for up to 10 years with certificate.",
    href: "/termite",
  },
  {
    icon: UtensilsCrossed,
    title: "Hotel & Restaurant",
    description:
      "Specialised pest control AMC for kitchens, guest rooms, dining areas, and drains.",
    href: "/hotel-restaurant",
  },
  {
    icon: Leaf,
    title: "EcoCare – Eco-Friendly",
    description:
      "Neem-based sprays, DE dust, pheromone traps, and non-chemical exclusion methods for sensitive areas.",
    href: "/services",
  },
];

const features = [
  {
    icon: ShieldCheck,
    label: "Safe & Effective",
    text: "Proven treatments safe for kitchens, guest rooms, and sensitive areas.",
  },
  {
    icon: Award,
    label: "10-Year Certificate",
    text: "Termite pre-construction with IS-approved termiticides and 10-year protection certificate.",
  },
  {
    icon: Leaf,
    label: "Chemical & Eco Options",
    text: "Both standard chemical and eco-friendly low-toxicity treatments available.",
  },
  {
    icon: Users,
    label: "Licensed Technicians",
    text: "Fully trained, licensed, and insured pest control professionals.",
  },
];

export default function Home() {
  return (
    <>
      <section
        className="relative min-h-[600px] lg:min-h-[680px] flex items-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-pest-control.dim_1400x700.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-primary/20 border border-white/30 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                Thiruvananthapuram, Kerala
              </span>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
                Welcome to BioCare Pest &amp; Termite Solutions
              </h1>
              <p className="text-white/85 text-lg mb-6 leading-relaxed">
                Professional pest control and termite pre-construction treatment
                for homes, hotels, restaurants, offices, hospitals, and
                construction sites across Thiruvananthapuram.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Safe and effective pest control for kitchens, guest rooms, and sensitive areas",
                  "Termite pre-construction soil treatment with 10-year protection certificate",
                  "Chemical and eco-friendly low-toxicity options available",
                  "Licensed and trained technicians, fully equipped and insured",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-white/85 text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mb-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg"
                  data-ocid="hero.primary_button"
                >
                  <Link to="/contact">Request a Free Inspection</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white bg-white/10 hover:bg-white/20 rounded-lg"
                  data-ocid="hero.secondary_button"
                >
                  <a
                    href="https://wa.me/919952258863"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
              <p className="text-white/70 text-sm">
                📞{" "}
                <a
                  href="tel:+918838510443"
                  className="underline hover:text-white"
                >
                  +91 8838510443
                </a>
                {" | Get a FREE site inspection and quotation within 24 hours."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-3">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Complete pest and termite protection for homes, businesses, and
              new construction sites.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`services.item.${i + 1}`}
              >
                <Card className="h-full border-border shadow-card hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4">
                      <svc.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1 leading-relaxed">
                      {svc.description}
                    </p>
                    <Link
                      to={svc.href}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Learn More <ChevronRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-2xl sm:text-3xl text-center text-foreground mb-10"
          >
            Why Choose BioCare?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <feat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {feat.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feat.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-14">
                <h2 className="font-heading font-bold text-3xl text-white mb-4">
                  Get a Free Site Inspection Today
                </h2>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Our technician will visit within 24 hours and provide a
                  detailed quotation and treatment plan — completely free.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 rounded-lg font-semibold"
                    data-ocid="cta.primary_button"
                  >
                    <Link to="/contact">Book Free Inspection</Link>
                  </Button>
                  <a
                    href="tel:+918838510443"
                    className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg border-2 border-white text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                    data-ocid="cta.secondary_button"
                  >
                    <Phone className="w-4 h-4" /> Call +91 8838510443
                  </a>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <img
                  src="/assets/generated/hotel-restaurant-pest.dim_800x500.jpg"
                  alt="Pest control service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
