import { Award, CheckCircle2, Clock, ShieldCheck, Star } from "lucide-react";
import { motion } from "motion/react";

const trustItems = [
  {
    icon: ShieldCheck,
    label: "Licensed & Trained Technicians",
    text: "Our pest control technicians are fully licensed, trained, and insured to carry out all treatments safely.",
  },
  {
    icon: Award,
    label: "IS-Approved Chemicals",
    text: "We use only IS-approved and government-recommended chemicals for all pest and termite treatments.",
  },
  {
    icon: Star,
    label: "Transparent Pricing",
    text: "Clear documentation and transparent pricing with no hidden charges — we explain everything upfront.",
  },
  {
    icon: Clock,
    label: "Quick Response",
    text: "Free inspection within 24 hours in Thiruvananthapuram and nearby areas. We value your time.",
  },
];

const servicesList = [
  "General pest control for homes and commercial properties",
  "Termite pre-construction treatment for new buildings",
  "Hotel and restaurant pest-control AMC",
  "EcoCare eco-friendly low-toxicity treatments",
  "Rodent, cockroach, ant, bed bug, lizard, and mosquito control",
];

export default function About() {
  return (
    <>
      <section className="bg-accent py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-4">
              About BioCare Pest &amp; Termite Solutions
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Based in Thiruvananthapuram (Trivandrum), Kerala. We specialise in
              protecting homes, hotels, restaurants, offices, hospitals, and new
              construction sites from pests and termites.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide safe, effective, and affordable pest and termite
                control services using modern techniques, trained technicians,
                and both chemical and eco-friendly options — giving our clients
                peace of mind and a pest-free environment.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Services We Offer
              </h2>
              <ul className="space-y-2">
                {servicesList.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-2xl sm:text-3xl text-center text-foreground mb-10"
          >
            Why Trust BioCare?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-xs text-center"
                data-ocid={`about.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
