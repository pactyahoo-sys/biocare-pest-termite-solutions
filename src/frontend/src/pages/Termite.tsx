import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Building2,
  CheckCircle2,
  ClipboardList,
  Droplets,
  FileText,
  Home,
  Hospital,
  Hotel,
} from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Site Inspection",
    desc: "Our technician checks soil condition, moisture, drainage, and nearby vegetation.",
  },
  {
    icon: Droplets,
    title: "2. Soil Treatment",
    desc: "IS-approved termiticide applied around the foundation, plinth, and under the slab before concrete casting.",
  },
  {
    icon: FileText,
    title: "3. Documentation",
    desc: "You receive a treatment certificate showing treated area, date, and protection period — typically 10 years.",
  },
];

const idealFor = [
  { icon: Home, label: "Individual Houses & Villas" },
  { icon: Building2, label: "Apartments & Commercial Complexes" },
  { icon: Hotel, label: "Hotels & Resorts" },
  { icon: Hospital, label: "Hospitals & Offices" },
];

const ecoAddons = [
  "Physical barriers (mesh, sealing)",
  "Monitoring traps and non-chemical inspection methods",
  "Reduced chemical load with smart application",
];

export default function Termite() {
  return (
    <>
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/generated/termite-treatment.dim_800x500.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-primary/30 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              New Construction Protection
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
              Termite Pre-Construction Treatment
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Thiruvananthapuram — Protect your new building from termites with
              professional pre-construction treatment.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 rounded-lg"
              data-ocid="termite.primary_button"
            >
              <Link to="/contact">Get Free Inspection</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl text-center text-foreground mb-10"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                data-ocid={`termite.item.${i + 1}`}
              >
                <Card className="h-full border-border shadow-card text-center">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-accent px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-center text-foreground mb-8">
            Ideal For
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {idealFor.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-xs"
                data-ocid={`termite.item.${i + 4}`}
              >
                <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-sm text-foreground">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Eco-Friendly Add-ons
            </h2>
            <ul className="space-y-3">
              {ecoAddons.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Locations We Serve
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We serve Thiruvananthapuram city and nearby suburbs including all
              major residential areas, townships, and construction zones.
            </p>
            <div className="mt-6">
              <Button
                asChild
                className="bg-primary text-white hover:bg-primary/90"
                data-ocid="termite.primary_button"
              >
                <Link to="/contact">Book Free Inspection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
