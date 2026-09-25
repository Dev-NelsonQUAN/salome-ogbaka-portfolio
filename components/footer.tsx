"use client";

import { Linkedin, Mail, MessageCircle, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100 pt-16 pb-12 px-4 sm:px-6 lg:px-4 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          <div className="md:col-span-4 space-y-4">
            <div className="text-2xl font-serif font-bold tracking-tight">
              <span className="text-amber-500">SHO</span>
              <span className="text-white"> Legal</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Providing practical, transparent legal frameworks and corporate
              guidance for startups, SMEs, and ambitious founders across
              Nigeria.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:hello@sholegal.com"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
              href="https://wa.me/2348132727759"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="font-serif font-semibold text-white text-sm tracking-wide">
              Practice Areas
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Business Registration
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors"
                >
                  CAC & Corporate Filings
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Contract & Founder Agreements
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors"
                >
                  IP & Brand Protection
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Regulatory Compliance
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h3 className="font-serif font-semibold text-white text-sm tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-amber-400 transition-colors"
                >
                  About Happiness
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#book"
                  className="hover:text-amber-400 transition-colors"
                >
                  Legal Blueprint Book
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="font-serif font-semibold text-white text-sm tracking-wide">
              Direct Contact
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <a
                href="mailto:hello@sholegal.com"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail size={15} className="text-amber-500 shrink-0" />
                <span>hello@sholegal.com</span>
              </a>
              <a
                href="https://wa.me/2348132727759"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone size={15} className="text-amber-500 shrink-0" />
                <span>+234 (0) 800 000 0000</span>
              </a>
              <div className="flex items-start gap-2 pt-1 text-slate-400">
                <MapPin size={15} className="text-amber-500 shrink-0 mt-0.5" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} SHO Legal Services. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
