import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "@tanstack/react-router";
import {
  Bug,
  Building2,
  CheckCircle2,
  Leaf,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  const { t } = useLanguage();

  const sections = [
    {
      id: "general",
      icon: Bug,
      title: t.generalTitle,
      subtitle: t.generalSubtitle,
      description: t.generalDesc,
      bullets: t.generalBullets,
      serviceTypes: t.generalServiceTypes as string[] | null,
      cta: null as null | { label: string; href: string },
    },
    {
      id: "termite",
      icon: Building2,
      title: t.termiteTitle,
      subtitle: t.termiteSubtitleShort,
      description: t.termiteDesc,
      bullets: t.termiteBullets,
      serviceTypes: null as null | string[],
      cta: { label: t.fullDetails, href: "/termite" },
    },
    {
      id: "hotel",
      icon: UtensilsCrossed,
      title: t.hotelTitle,
      subtitle: t.hotelSubtitle,
      description: t.hotelDesc,
      bullets: t.hotelBullets,
      serviceTypes: t.hotelServiceTypes as string[] | null,
      cta: { label: t.fullDetailsPricing, href: "/hotel-restaurant" },
    },
    {
      id: "ecocare",
      icon: Leaf,
      title: t.ecocareTitle,
      subtitle: t.ecocareSubtitle,
      description: t.ecocareDesc,
      bullets: t.ecocareBullets,
      serviceTypes: t.ecocareServiceTypes as string[] | null,
      cta: null as null | { label: string; href: string },
    },
  ];

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
              {t.servicesPageTitle}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.servicesPageSubtitle}
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
                            ? t.whyChooseEcocare
                            : t.serviceTypes}
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
            {t.servicesReadyTitle}
          </h2>
          <p className="text-muted-foreground mb-6">{t.servicesReadyDesc}</p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-white hover:bg-primary/90"
            data-ocid="services.primary_button"
          >
            <Link to="/contact">{t.bookFreeInspection}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
