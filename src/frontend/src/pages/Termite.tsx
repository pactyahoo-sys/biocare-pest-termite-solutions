import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
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

export default function Termite() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: ClipboardList,
      title: t.step1Title,
      desc: t.step1Desc,
    },
    {
      icon: Droplets,
      title: t.step2Title,
      desc: t.step2Desc,
    },
    {
      icon: FileText,
      title: t.step3Title,
      desc: t.step3Desc,
    },
  ];

  const idealForIcons = [Home, Building2, Hotel, Hospital];

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
              {t.termitePageBadge}
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
              {t.termitePageTitle}
            </h1>
            <p className="text-white/80 text-lg mb-8">
              {t.termitePageSubtitle}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 rounded-lg"
              data-ocid="termite.primary_button"
            >
              <Link to="/contact">{t.getFreeInspection}</Link>
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
            {t.howItWorks}
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
            {t.idealFor}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {t.idealForItems.map((label, i) => {
              const Icon = idealForIcons[i];
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-xs"
                  data-ocid={`termite.item.${i + 4}`}
                >
                  <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium text-sm text-foreground">
                    {label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              {t.ecoFriendlyAddons}
            </h2>
            <ul className="space-y-3">
              {t.ecoAddonItems.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              {t.locationsWeServe}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.locationsText}
            </p>
            <div className="mt-6">
              <Button
                asChild
                className="bg-primary text-white hover:bg-primary/90"
                data-ocid="termite.secondary_button"
              >
                <Link to="/contact">{t.bookFreeInspection}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
