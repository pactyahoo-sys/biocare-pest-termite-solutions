import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Leaf } from "lucide-react";
import { motion } from "motion/react";

const services = [
  "Cockroach and ant control in kitchens and storerooms",
  "Fly and mosquito control in dining areas and outdoor spaces",
  "Lizard and spider management in guest rooms and corridors",
  "Rodent (rat) control around service areas and drains",
  "Bed bug treatment for hotel rooms, mattresses, and upholstery",
];

const pricing = [
  {
    size: "Small",
    desc: "10–40 rooms / 40–80 seats",
    price: "₹8,000–₹15,000/month",
  },
  {
    size: "Medium",
    desc: "40–100 rooms / 80–150 seats",
    price: "₹15,000–₹25,000/month",
  },
  {
    size: "Large",
    desc: "100+ rooms, multiple outlets",
    price: "₹25,000–₹50,000+/month",
  },
];

const ecoPoints = [
  "Use of neem-based / botanical sprays and low-toxicity methods",
  "Approx. 10–20% extra cost vs standard chemical package",
  "Preferred for kitchens and guest-sensitive areas",
];

export default function HotelRestaurant() {
  return (
    <>
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hotel-restaurant-pest.dim_800x500.jpg')",
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
              Hospitality Specialists
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
              Hotel &amp; Restaurant Pest Control
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Keep your hotel or restaurant clean, safe, and audit-ready with
              our professional pest-control AMC in Thiruvananthapuram.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 rounded-lg"
              data-ocid="hotel.primary_button"
            >
              <Link to="/contact">Get a Custom Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Services Include
            </h2>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li
                  key={s}
                  className="flex items-start gap-3"
                  data-ocid={`hotel.item.${i + 1}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-14 bg-accent px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-6"
          >
            Monthly AMC Pricing (Example Ranges)
          </motion.h2>
          <Card className="border-border shadow-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/5">
                  <TableHead className="font-heading font-semibold text-foreground">
                    Size
                  </TableHead>
                  <TableHead className="font-heading font-semibold text-foreground">
                    Property
                  </TableHead>
                  <TableHead className="font-heading font-semibold text-foreground">
                    Monthly AMC
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricing.map((row, i) => (
                  <TableRow key={row.size} data-ocid={`hotel.item.${i + 6}`}>
                    <TableCell className="font-semibold">{row.size}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {row.desc}
                    </TableCell>
                    <TableCell className="text-primary font-semibold">
                      {row.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
          <p className="text-sm text-muted-foreground mt-3">
            * Prices are indicative. Contact us for a customised quotation.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border shadow-card">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="font-heading text-xl">
                EcoCare Option for Hospitality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {ecoPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  asChild
                  className="bg-primary text-white hover:bg-primary/90"
                  data-ocid="hotel.primary_button"
                >
                  <Link to="/contact">
                    Call for Custom Quote &amp; Free Inspection
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
