'use client'

import { BookOpen, ArrowRight, CheckCircle2, ShoppingBag } from 'lucide-react'

export function Book() {
  return (
    <section id="book" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-0 w-112.5 h-112.5 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] bg-size-[20px_20px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="md:col-span-7 space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold tracking-wide">
                <BookOpen size={14} className="text-amber-600" />
                <span>Now Available</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-950 leading-tight">
                You Built a Business. <br />
                <span className="text-amber-600">Is It Legally Protected?</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Most Nigerian entrepreneurs register a business name and think they&apos;re fully covered. They&apos;re not. <strong className="text-slate-900 font-semibold">Legal Blueprint</strong> breaks down essential corporate governance and protection — written in plain, actionable English.
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-serif text-xs font-bold text-amber-600 uppercase tracking-widest">Inside The Book:</p>
              {[
                'The 7-step legal foundation checklist every founder needs',
                'How to structure your business for scale and tax efficiency',
                'Costly legal mistakes entrepreneurs make and how to avoid them',
                'Intellectual property, trademark, and brand protection',
                'Contracts, employment terms, and compliance essentials',
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm font-medium">{point}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.me/234?text=I%20want%20to%20order%20the%20Legal%20Blueprint%20book"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-950 text-white font-semibold hover:bg-slate-800 transition-all text-sm shadow-md gap-2 group"
              >
                <ShoppingBag size={18} className="text-amber-400" />
                <span>Get Your Copy Now</span>
                <ArrowRight size={16} className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="https://wa.me/234?text=I%20have%20a%20question%20about%20the%20Legal%20Blueprint%20book"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-semibold hover:bg-slate-100 transition-colors text-sm"
              >
                Inquire via WhatsApp
              </a>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <p className="text-slate-500 text-xs leading-relaxed">
                <strong className="text-slate-900">Official Release:</strong> Available for direct order in digital and physical print formats across Nigeria.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-sm aspect-3/4 rounded-2xl bg-slate-50 border border-slate-200 p-4 shadow-xl group hover:border-amber-500/40 transition-all">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg border border-slate-200">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DeICJfRjZ4FxUQNluQ3bjpkOwCWxwZ.png"
                  alt="Legal Blueprint for Nigerian Entrepreneurs"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-3 -right-3 bg-slate-950 text-white px-4 py-2 rounded-xl shadow-lg border border-amber-500/30 text-xs font-bold font-serif flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Out Now</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}