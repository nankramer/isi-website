import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig, navigation } from "@/lib/config";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-300">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />

      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Logo size={92} variant="dark" />
            </div>
            <p className="text-sm leading-relaxed text-earth-400 mb-4">
              Revitalising African kingships and building self-sustaining rural
              economies rooted in indigenous governance and Ubuntu.
            </p>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold/80">
              Abantu • Ubuntu • Isintu
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-body font-semibold tracking-[0.15em] uppercase text-gold mb-5">
              Navigate
            </h4>
            <nav className="flex flex-col gap-2.5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-earth-400 hover:text-gold transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Focus Areas */}
          <div>
            <h4 className="text-sm font-body font-semibold tracking-[0.15em] uppercase text-gold mb-5">
              Focus Areas
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-earth-400">
              <span>Traditional Leadership</span>
              <span>Rural Economic Development</span>
              <span>Township Economy</span>
              <span>SMME & Co-op Incubation</span>
              <span>Informal Mining Formalisation</span>
              <span>The Rural Fund</span>
              <span>National GBV Centres</span>
              <span>Ubuntu Data Bank</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-body font-semibold tracking-[0.15em] uppercase text-gold mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-sm text-earth-400 hover:text-gold transition-colors"
              >
                <Mail size={15} className="text-gold/60 shrink-0" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2.5 text-sm text-earth-400 hover:text-gold transition-colors"
              >
                <Phone size={15} className="text-gold/60 shrink-0" />
                {siteConfig.phone}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-earth-400">
                <MapPin size={15} className="text-gold/60 shrink-0 mt-0.5" />
                {siteConfig.address}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-earth-800">
        <div className="max-w-7xl mx-auto section-padding py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-earth-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-earth-500">
            NPC Section 21 • Reg: {siteConfig.regNumber} • NPO: {siteConfig.npoNumber} • PBO: {siteConfig.pboNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
