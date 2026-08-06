"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LogoFull } from "./Logo";
import { navigation } from "@/lib/config";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white ${
        scrolled
          ? "shadow-sm border-b border-gold/10"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex items-center justify-between h-20">
          <Link href="/" aria-label="Home">
            <LogoFull />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-body font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-gold"
                    : "text-earth-600 hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/get-involved" className="btn-gold ml-4 text-xs py-2.5 px-6">
              Support Us
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-earth-900"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gold/10 shadow-lg">
          <nav className="flex flex-col py-4 section-padding">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 text-base font-body font-medium border-b border-stone last:border-0 ${
                  pathname === item.href ? "text-gold" : "text-earth-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/get-involved" className="btn-gold mt-4 justify-center text-xs">
              Support Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
