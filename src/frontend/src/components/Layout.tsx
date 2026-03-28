import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/services" as const, label: "Services" },
  { to: "/termite" as const, label: "Termite" },
  { to: "/hotel-restaurant" as const, label: "Hotel & Restaurant" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

function NavItem({
  to,
  label,
  onClick,
}: { to: string; label: string; onClick?: () => void }) {
  const { location } = useRouterState();
  const isActive =
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActive
          ? "text-primary bg-accent"
          : "text-foreground hover:text-primary hover:bg-accent",
      )}
      data-ocid="nav.link"
    >
      {label}
    </Link>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleLang, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-2 flex-shrink-0"
              data-ocid="nav.link"
            >
              <img
                src="/assets/uploads/file_0000000037f471fab29858c58ee8145d-019d34ee-1fed-7273-9bcc-2c0514d1fc9c-1.png"
                alt="BioCare BPTS Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <NavItem key={link.to} to={link.to} label={link.label} />
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+918838510443"
                className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                data-ocid="nav.link"
              >
                <Phone className="w-4 h-4" />
                <span>+91 88385 10443</span>
              </a>
              <button
                type="button"
                onClick={toggleLang}
                className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
                aria-label="Toggle language"
                data-ocid="nav.toggle"
              >
                {t.langToggle}
              </button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white px-4 pb-4">
            {navLinks.map((link) => (
              <div key={link.to} className="mt-1">
                <NavItem
                  to={link.to}
                  label={link.label}
                  onClick={() => setMobileOpen(false)}
                />
              </div>
            ))}
            <div className="flex items-center justify-between mt-2 px-3">
              <a
                href="tel:+918838510443"
                className="flex items-center gap-2 py-2 text-sm font-semibold text-primary"
              >
                <Phone className="w-4 h-4" /> +91 88385 10443
              </a>
              <button
                type="button"
                onClick={toggleLang}
                className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
                aria-label="Toggle language"
                data-ocid="nav.toggle"
              >
                {t.langToggle}
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-brand-dark text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img
                  src="/assets/uploads/file_0000000037f471fab29858c58ee8145d-019d34ee-1fed-7273-9bcc-2c0514d1fc9c-1.png"
                  alt="BioCare BPTS Logo"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Professional Pest Control &amp; Termite Pre-Construction
                Treatment in Thiruvananthapuram, Kerala.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-white mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                      data-ocid="nav.link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-white mb-3">
                Services
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>General Pest Control</li>
                <li>Termite Pre-Construction</li>
                <li>Hotel &amp; Restaurant AMC</li>
                <li>EcoCare Eco-Friendly</li>
                <li>Rodent &amp; Bed Bug Control</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-white mb-3">
                Contact Info
              </h3>
              <div className="space-y-2 text-sm text-white/70">
                <p>
                  Puliarakonnam-Moonnammoodu Road,
                  <br />
                  Thiruvananthapuram, Kerala – 695013
                </p>
                <p>
                  <a
                    href="tel:+918838510443"
                    className="hover:text-white transition-colors"
                  >
                    📞 +91 88385 10443
                  </a>
                </p>
                <p>
                  <a
                    href="https://wa.me/919952258863"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    💬 WhatsApp: +91 99522 58863
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:pactyahoo@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    ✉️ pactyahoo@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/50">
            <p>
              © {new Date().getFullYear()} BioCare Pest &amp; Termite Solutions.
              Licensed &amp; Certified in Kerala.
            </p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>

      {/* Floating action buttons */}
      <div className="fixed bottom-6 right-5 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/919952258863"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-13 h-13 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          style={{ background: "#25D366", width: "52px", height: "52px" }}
          data-ocid="nav.link"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
        <a
          href="tel:+918838510443"
          aria-label="Call us"
          className="w-13 h-13 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          style={{ background: "#007bff", width: "52px", height: "52px" }}
          data-ocid="nav.link"
        >
          <Phone className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
}
