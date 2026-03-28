import { useLanguage } from "@/context/LanguageContext";
import { Award, CheckCircle2, Clock, ShieldCheck, Star } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const { t } = useLanguage();

  const trustItems = [
    {
      icon: ShieldCheck,
      label: t.licensedLabel,
      text: t.licensedText,
    },
    {
      icon: Award,
      label: t.approvedLabel,
      text: t.approvedText,
    },
    {
      icon: Star,
      label: t.transparentLabel,
      text: t.transparentText,
    },
    {
      icon: Clock,
      label: t.quickLabel,
      text: t.quickText,
    },
  ];

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
              {t.aboutTitle}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.aboutSubtitle}
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
                {t.ourMission}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.missionText}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                {t.servicesWeOffer}
              </h2>
              <ul className="space-y-2">
                {t.servicesListItems.map((s) => (
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

      {/* Team in Action Photo Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-2xl sm:text-3xl text-center text-foreground mb-8"
          >
            Our Team in Action
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src="/assets/uploads/file_00000000ee0c71fa898a59ab20d16d91-019d3506-6f0a-72d8-b0dc-d97c4593fced-1.png"
              alt="BPTS team providing professional pest control services"
              className="w-full h-auto object-cover"
            />
          </motion.div>
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
            {t.whyTrustBiocare}
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
