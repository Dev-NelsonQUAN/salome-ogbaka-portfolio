"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Book", href: "#book" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-1 text-md sm:text-2xl font-serif tracking-wide font-bold">
            <span className="text-amber-600">Happiness</span>
            <span className="text-slate-900">Salome</span>
            <span className="text-amber-600 font-sans text-xs ml-1 font-semibold uppercase tracking-widest">
              .Legal
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-amber-600 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/2348132727759"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold transition-all shadow-sm active:scale-95 text-sm"
            >
              Chat on WhatsApp
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:text-amber-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white py-6 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-amber-600 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://wa.me/2348132727759"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full max-w-xs py-3 px-6 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold transition-colors text-sm shadow-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}