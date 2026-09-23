'use client'

import { Building2, ShieldCheck, Briefcase, TrendingUp, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Business Registration',
    desc: 'CAC registration, name search, & incorporation paperwork.',
  },
  {
    icon: ShieldCheck,
    title: 'Legal Compliance',
    desc: 'Regulatory compliance frameworks & policy development.',
  },
  {
    icon: Briefcase,
    title: 'Startup Consulting',
    desc: 'Founder agreements, IP protection, & contract drafting.',
  },
  {
    icon: TrendingUp,
    title: 'SME Scaling',
    desc: 'Operations setup, employment law, & risk management.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-20 px-4 sm:px-6 lg:px-6 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto space-y-10">
        
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Practice Areas</span>
          <h2 className="text-3xl font-serif font-bold text-slate-950">Services Tailored For Growth</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="bg-white border border-slate-200 p-5 rounded-2xl flex flex-col justify-between space-y-4 hover:border-amber-500/50 hover:shadow-md transition-all">
                <div className="space-y-3">
                  <div className="p-2.5 w-fit rounded-xl bg-amber-500/10 text-amber-600">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-serif font-bold text-base text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>

                <a href="https://wa.me/234" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700 pt-2 border-t border-slate-100">
                  <span>Consult</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}