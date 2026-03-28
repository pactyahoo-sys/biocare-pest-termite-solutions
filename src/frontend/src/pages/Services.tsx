import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Bug,
  Building2,
  CheckCircle2,
  Leaf,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "motion/react";

const sections = [
  {
    id: "general",
    icon: Bug,
    title: "General Pest Control",
    subtitle: "Home & Commercial Pest Control",
    description: "We control common pests including:",
    bullets: [
      "Cockroaches",
      "Ants",
      "Spiders",
      "Bed bugs",
      "Lizards",
      "Rodents (rats and mice)",
      "Mosquitoes and flies",
    ],
    serviceTypes: [
      "One-time complete pest treatment",
      "Monthly or quarterly AMC for homes, offices, and commercial buildings",
      "Eco-friendly / low-toxicity options available for hotels, restaurants, and family homes",
    ],
    cta: null as null | { label: string; href: string },
  },
  {
    id: "termite",
    icon: Building2,
    title: "Termite Pre-Construction Treatment",
    subtitle: "For New Construction Sites",
    description:
      "Professional termite pre-construction treatment for new buildings, done before the concrete slab is cast to protect for up to 10 years.",
    bullets: [
      "Soil treatment around foundation, plinth, and under the slab using IS-approved termiticides",
      "Detailed treatment certificate for builders, banks, and loan applications",
      "Suitable for individual houses, villas, apartments, hotels, and commercial complexes",
      "Optional eco-friendly barrier and monitoring methods in our EcoCare package",
    ],
    serviceTypes: null as null | string[],
    cta: { label: "Full Details", href: "/termite" },
  },
  {
    id: "hotel",
    icon: UtensilsCrossed,
    title: "Hotel & Restaurant Pest Control",
    subtitle: "Specialised Hospitality Services",
    description: "We cover:",
    bullets: [
      "Kitchens, storage areas, and food-preparation zones",
      "Dining halls, guest rooms, bathrooms, and lobbies",
      "Drains, utility areas, and outdoor spaces",
      "Regular inspection and treatment to meet hygiene and audit standards",
    ],
    serviceTypes: [
      "Monthly pest control AMC for hotels and restaurants",
      "Quarterly or bi-monthly inspection and treatment plans",
      "Eco-friendly / low-chemical options for sensitive kitchen and guest areas",
    ],
    cta: { label: "Full Details & Pricing", href: "/hotel-restaurant" },
  },
  {
    id: "ecocare",
    icon: Leaf,
    title: "EcoCare – Eco-Friendly Pest Control",
    subtitle: "Low-Toxicity Treatment Options",
    description: "Techniques include:",
    bullets: [
      "Neem-based and botanical insecticide sprays",
      "Silica / diatomaceous earth (DE) dust for ant and cockroach areas",
      "Sticky traps, pheromone traps, and monitoring devices",
      "Non-chemical measures such as sealing, sanitation, and exclusion",
    ],
    serviceTypes: [
      "Less chemical exposure for guests, staff, and families",
      "Suitable for children's areas, hospitals, and kitchens",
      "Can be combined with minimal chemical treatment for maximum effectiveness",
    ],
    cta: null as null | { label: string; href: string },
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-accent py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-4">
              Our Pest &amp; Termite Control Services
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete pest and termite protection for homes, hotels,
              restaurants, offices, hospitals, and new construction sites.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-10">
          {sections.map((sec, i) => (
            <motion.div
              key={sec.id}
              id={sec.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-ocid={`services.item.${i + 1}`}
            >
              <Card className="overflow-hidden border-border shadow-card">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 p-6 border-b border-border bg-accent/30">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <sec.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-xl text-foreground">
                        {sec.title}
                      </h2>
                      <p className="text-sm text-primary font-medium">
                        {sec.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-muted-foreground mb-3">
                        {sec.description}
                      </p>
                      <ul className="space-y-2">
                        {sec.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      {!sec.serviceTypes && sec.cta && (
                        <Button
                          asChild
                          className="mt-4"
                          variant="outline"
                          size="sm"
                        >
                          <Link to={sec.cta.href}>{sec.cta.label}</Link>
                        </Button>
                      )}
                    </div>
                    {sec.serviceTypes && (
                      <div>
                        <p className="text-muted-foreground mb-3 font-medium">
                          {sec.id === "ecocare"
                            ? "Why choose EcoCare?"
                            : "Service types:"}
                        </p>
                        <ul className="space-y-2">
                          {sec.serviceTypes.map((st) => (
                            <li
                              key={st}
                              className="flex items-start gap-2 text-sm"
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{st}</span>
                            </li>
                          ))}
                        </ul>
                        {sec.cta && (
                          <Button
                            asChild
                            className="mt-4"
                            variant="outline"
                            size="sm"
                          >
                            <Link to={sec.cta.href}>{sec.cta.label}</Link>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-accent">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-3">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contact us for a free site inspection and quotation within 24 hours.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-white hover:bg-primary/90"
            data-ocid="services.primary_button"
          >
            <Link to="/contact">Book Free Inspection</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
