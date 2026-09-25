'use client'

import { Linkedin, CheckCircle2, Award, Scale, ArrowUpRight, ShieldCheck, FileText } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div className="grid md:grid-cols-12 gap-8 items-center border-b border-slate-200 pb-12">
          
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-linear-to-tr from-amber-500 via-amber-300 to-slate-900 shadow-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2oWA26443snHzIHhL5KyymrHyKPq8R.png"
                alt="Salome Happiness Ogbaka, Esq."
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
              <Scale size={14} className="text-amber-600" />
              <span>Legal Practitioner & CAC Agent</span>
            </div>

            <h2 className="text-2xl md:text-5xl font-serif font-bold text-slate-950 leading-tight">
              Building Bulletproof Legal Foundations for Nigerian Ventures
            </h2>

            <p className="text-md md:text-lg text-slate-600 max-w-2xl">
              <strong className="text-slate-900">Salome Happiness Ogbaka, Esq.</strong> specializes in corporate governance, startup structuring, and regulatory filings to ensure long-term investor readiness.
            </p>
          </div>

        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Award size={20} />
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900">CAC Accreditation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">Direct business registrations, post-incorporation filings, and compliance management.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900">Founder Protection</h3>
            <p className="text-xs text-slate-600 leading-relaxed">Founder agreements, equity split terms, and risk-mitigation contract drafting.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <FileText size={20} />
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900">Corporate Governance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">Preparing SMEs and high-growth startups for venture backing and scale.</p>
          </div>
        </div>

      </div>
    </section>
  )
}