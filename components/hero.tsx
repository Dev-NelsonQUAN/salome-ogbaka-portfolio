'use client'

import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/70 text-slate-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-125 h-125 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-100 h-100 bg-slate-800/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Legal Counsel & Published Author</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight text-slate-100">
                Building Legal <span className="text-amber-400">Foundations</span>
                <br />
                for African Entrepreneurs
              </h1>

              <p className="text-md md:text-lg text-slate-300 max-w-xl leading-relaxed">
                Empowering startups, founders, and growing businesses with clear, bulletproof corporate governance, contract protection, and regulatory compliance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
              href="https://wa.me/2348132727759"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 md:py-3.5 rounded-md bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20 active:scale-95 text-sm gap-2 group"
              >
                <span>Start a Conversation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#book"
                className="inline-flex items-center justify-center px-7 py-3 md:py-3.5 rounded-md border border-slate-700 text-slate-200 hover:text-amber-400 hover:border-amber-500/40 bg-slate-900/50 backdrop-blur-sm transition-all text-sm font-medium gap-2"
              >
                <span>Get Her Published Book</span>
                <BookOpen size={18} className="text-amber-400" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">500+</div>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">Entrepreneurs Guided</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">10+</div>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">CAC</div>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">Accredited Agent</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-4/5 rounded-2xl bg-slate-900 border border-slate-800/80 p-2 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent z-10" />
              
              <div className="w-full h-full rounded-xl bg-slate-950 border border-slate-800/50 flex flex-col items-center justify-center p-6 text-center relative z-0">
                <div className="w-32 h-32 rounded-full border-2 border-amber-500/30 bg-slate-900 flex items-center justify-center mb-4 shadow-inner">
                  <span className="font-serif text-3xl font-bold text-amber-400">HS</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-100">Happiness Salome, Esq.</h3>
                <p className="text-xs text-slate-400 mt-1">Legal Practitioner & Corporate Consultant</p>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20 text-center">
                <span className="text-xs text-amber-400 font-medium tracking-wide bg-slate-900/90 border border-amber-500/20 px-3 py-1.5 rounded-full backdrop-blur-md">
                  Corporate & Business Law Specialist
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}