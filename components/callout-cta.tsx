'use client'

import { MessageCircle, Mail, ArrowRight } from 'lucide-react'

export function CalloutCTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/60 border border-amber-200 text-amber-900 text-xs font-semibold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span>Direct Access to Legal Counsel</span>
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-950 tracking-tight">
            Let&apos;s Build Your Legal Strategy.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about business registration, contracts, or ongoing legal support? Send a direct message to discuss your setup.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="https://wa.me/234"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-950 text-white font-semibold hover:bg-slate-800 transition-all text-sm shadow-lg group"
          >
            <MessageCircle size={18} className="text-amber-400" />
            <span>Chat on WhatsApp</span>
            <ArrowRight size={16} className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </a>

          <a
            href="mailto:hello@sholegal.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold hover:bg-slate-100 transition-colors text-sm shadow-sm"
          >
            <Mail size={18} className="text-slate-500" />
            <span>Email Consultation</span>
          </a>
        </div>

      </div>
    </section>
  )
}
