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

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-950 leading-tight">
              Building Bulletproof Legal Foundations for Nigerian Ventures
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
              <strong className="text-slate-900">Salome Happiness Ogbaka, Esq.</strong> specializes in corporate governance, startup structuring, and regulatory filings to ensure long-term investor readiness.
            </p>
          </div>

        </div>

        {/* Bottom 3-Card Grid */}
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


// 'use client'

// import { Linkedin, CheckCircle2, Award, Scale, ArrowUpRight } from 'lucide-react'

// export function About() {
//   return (
//     <section id="about" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 relative overflow-hidden">
//       {/* Delicate background accent dots */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px]" />
//       <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* Left Column: Floating Frame Image */}
//           <div className="md:col-span-5 relative">
//             <div className="relative mx-auto max-w-md aspect-4/5 rounded-3xl bg-slate-950 p-3 shadow-2xl overflow-hidden group">
//               <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-800">
//                 <img
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2oWA26443snHzIHhL5KyymrHyKPq8R.png"
//                   alt="Salome Happiness Ogbaka, Esq."
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
//                 />
//               </div>

//               <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 border border-amber-500/30 backdrop-blur-md rounded-2xl p-4 text-center shadow-2xl">
//                 <p className="font-serif text-base font-bold text-amber-400">Salome Happiness Ogbaka, Esq.</p>
//                 <p className="text-[11px] text-slate-400 uppercase tracking-widest mt-0.5 font-medium">CAC Accredited Legal Agent</p>
//               </div>
//             </div>

//             {/* Accent backdrop ornament */}
//             <div className="absolute -bottom-6 -left-6 w-full h-full rounded-3xl border-2 border-amber-500/20 -z-10 hidden sm:block" />
//           </div>

//           {/* Right Column: Editorial Typography */}
//           <div className="md:col-span-7 space-y-8">
//             <div className="space-y-4">
//               <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold tracking-wide">
//                 <Scale size={14} className="text-amber-600" />
//                 <span>Legal Practitioner & Author</span>
//               </div>

//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-950 leading-tight">
//                 Empowering Founders Through <br />
//                 <span className="text-amber-600">Legal Clarity & Structure</span>
//               </h2>

//               <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
//                 <strong className="text-slate-900 font-semibold">Salome Happiness Ogbaka, Esq.</strong> is a dedicated legal practitioner and CAC-accredited agent who helps Nigerian founders build legally compliant, investor-ready, and scalable enterprises.
//               </p>
//             </div>

//             {/* Core Focus Items */}
//             <div className="space-y-3">
//               {[
//                 'Business formation & corporate registration',
//                 'CAC Accreditation, regulatory compliance & filings',
//                 'Startup legal structure optimization & founder alignment',
//                 'SME scalability, contract drafting & risk management',
//               ].map((highlight, idx) => (
//                 <div key={idx} className="flex items-center gap-3">
//                   <div className="p-1 rounded-full bg-amber-500/10 text-amber-600 shrink-0">
//                     <CheckCircle2 size={16} />
//                   </div>
//                   <span className="text-slate-700 text-sm font-medium">{highlight}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Feature Cards in Clean White Glass */}
//             <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
//               <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500/40 transition-colors">
//                 <div className="flex items-center gap-2 text-amber-600 mb-1">
//                   <Award size={18} />
//                   <span className="font-serif font-bold text-sm text-slate-900">CAC Accredited</span>
//                 </div>
//                 <p className="text-xs text-slate-500">Direct registration & compliance oversight.</p>
//               </div>

//               <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500/40 transition-colors">
//                 <div className="flex items-center gap-2 text-amber-600 mb-1">
//                   <Scale size={18} />
//                   <span className="font-serif font-bold text-sm text-slate-900">Corporate Legal</span>
//                 </div>
//                 <p className="text-xs text-slate-500">Protecting ventures from inception to scale.</p>
//               </div>
//             </div>

//             {/* Button */}
//             <div>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 text-white hover:bg-slate-800 transition-all text-sm font-medium shadow-md group"
//               >
//                 <Linkedin size={18} className="text-amber-400 group-hover:scale-110 transition-transform" />
//                 <span>Connect on LinkedIn</span>
//                 <ArrowUpRight size={16} className="text-slate-400 group-hover:text-white transition-colors" />
//               </a>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }


// 'use client'

// import { Linkedin, CheckCircle2, Award, Scale } from 'lucide-react'

// export function About() {
//   return (
//     <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 relative overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none z-0">
//         <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="grid md:grid-cols-12 gap-12 items-center">
          
//           <div className="md:col-span-5 relative flex justify-center">
//             <div className="relative w-full max-w-md aspect-square rounded-2xl bg-slate-900 border border-slate-800/80 p-3 shadow-2xl overflow-hidden group">
//               <div className="absolute inset-0 bg-linear-to-tr from-amber-500/10 via-transparent to-transparent opacity-60" />
              
//               <div className="relative w-full h-full rounded-xl overflow-hidden border border-amber-500/20">
//                 <img
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2oWA26443snHzIHhL5KyymrHyKPq8R.png"
//                   alt="Salome Happiness Ogbaka, Esq."
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>

//               <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 border border-amber-500/30 backdrop-blur-md rounded-xl p-3 text-center shadow-lg">
//                 <p className="font-serif text-sm font-bold text-amber-400">Salome Happiness Ogbaka, Esq.</p>
//                 <p className="text-[11px] text-slate-400 uppercase tracking-widest mt-0.5">CAC Accredited Legal Agent</p>
//               </div>
//             </div>
//           </div>

//           <div className="md:col-span-7 space-y-8">
//             <div className="space-y-4">
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide">
//                 <Scale size={14} />
//                 <span>Legal Practitioner & Author</span>
//               </div>

//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-100 leading-tight">
//                 Empowering Founders Through <br />
//                 <span className="text-amber-400">Legal Clarity & Structure</span>
//               </h2>

//               <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
//                 <strong className="text-slate-100 font-medium">Salome Happiness Ogbaka, Esq.</strong> is a dedicated legal practitioner and CAC-accredited agent who helps Nigerian founders and business owners build legally compliant, investor-ready, and scalable enterprises.
//               </p>
//             </div>

//             <div className="space-y-3 pt-2">
//               <p className="font-serif text-xs font-bold text-slate-400 uppercase tracking-widest">Core Focus Areas:</p>
//               {[
//                 'Specializes in business formation & corporate registration',
//                 'CAC Accreditation, regulatory compliance & filings',
//                 'Startup legal structure optimization & founder alignment',
//                 'SME scalability, contract drafting & risk management',
//               ].map((highlight, idx) => (
//                 <div key={idx} className="flex items-start gap-3">
//                   <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
//                   <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{highlight}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
//               <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
//                 <div className="flex items-center gap-2 text-amber-400 mb-1">
//                   <Award size={18} />
//                   <span className="font-serif font-bold text-sm">CAC Accredited</span>
//                 </div>
//                 <p className="text-xs text-slate-400">Direct registration & compliance oversight.</p>
//               </div>

//               <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
//                 <div className="flex items-center gap-2 text-amber-400 mb-1">
//                   <Scale size={18} />
//                   <span className="font-serif font-bold text-sm">Corporate Legal</span>
//                 </div>
//                 <p className="text-xs text-slate-400">Protecting ventures from inception to scale.</p>
//               </div>
//             </div>

//             <div className="pt-2">
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-slate-700 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 bg-slate-900/50 backdrop-blur-sm transition-all text-sm font-medium"
//               >
//                 <Linkedin size={18} className="text-amber-400" />
//                 <span>Connect on LinkedIn</span>
//               </a>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// // 'use client'

// // import { Linkedin } from 'lucide-react'

// // export function About() {
// //   return (
// //     <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-6xl mx-auto">
// //         <div className="grid md:grid-cols-2 gap-12 items-center">
// //           {/* Left - Image */}
// //           <div className="relative">
// //             <div className="w-full aspect-square rounded-2xl glass overflow-hidden border-2 border-primary/30">
// //               <div className="w-full h-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
// //                 <img
// //                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2oWA26443snHzIHhL5KyymrHyKPq8R.png"
// //                   alt="Salome Happiness Ogbaka"
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right - Content */}
// //           <div className="space-y-8">
// //             <div className="space-y-4">
// //               <h2 className="text-4xl md:text-5xl font-bold">
// //                 <span className="gradient-text">About the Author</span>
// //               </h2>
// //               <p className="text-lg text-white/70 leading-relaxed">
// //                 Salome Happiness Ogbaka, Esq. is a legal practitioner and CAC-accredited agent who helps Nigerian founders and business owners build legally compliant and scalable businesses. She is passionate about simplifying business law for founders, startups, and SMEs.
// //               </p>
// //             </div>

// //             {/* Highlights */}
// //             <div className="space-y-4">
// //               {[
// //                 'Specializes in business formation & registration',
// //                 'CAC Accreditation & Compliance expertise',
// //                 'Startup legal structure optimization',
// //                 'SME scalability & growth consulting',
// //               ].map((highlight, idx) => (
// //                 <div key={idx} className="flex items-start gap-4">
// //                   <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
// //                   <p className="text-white/80 leading-relaxed">{highlight}</p>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Social Links */}
// //             <div className="flex items-center gap-4 pt-4">
// //               <a
// //                 href="https://linkedin.com"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-primary hover:bg-white/15 transition-colors"
// //               >
// //                 <Linkedin size={20} />
// //                 Follow for Insights
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }
