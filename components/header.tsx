"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a
              href="#"
              className="text-xl sm:text-2xl font-serif tracking-wide font-bold"
            >
              <span className="text-amber-600">Happiness</span>
              <span className="text-slate-900 ml-2">Salome</span>
              <span className="text-amber-600 font-sans text-xs ml-1 font-semibold uppercase tracking-widest">
                .Legal
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#about"
              className="text-slate-600 hover:text-amber-600 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-slate-600 hover:text-amber-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#book"
              className="text-slate-600 hover:text-amber-600 transition-colors"
            >
              Book
            </a>
            <a
              href="#contact"
              className="text-slate-600 hover:text-amber-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/234"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-md bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 transition-all shadow-sm active:scale-95 text-sm"
            >
              Chat on WhatsApp
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 hover:text-amber-600 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-100 bg-white flex flex-col gap-3 text-sm font-medium">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-amber-600 px-2 py-1.5 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-amber-600 px-2 py-1.5 transition-colors"
            >
              Services
            </a>
            <a
              href="#book"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-amber-600 px-2 py-1.5 transition-colors"
            >
              Book
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-amber-600 px-2 py-1.5 transition-colors"
            >
              Contact
            </a>
            <a
              href="https://wa.me/234"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-5 py-2.5 rounded-md bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 transition-colors text-center shadow-sm"
            >
              Chat on WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

// "use client";

// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-amber-500/15 text-slate-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           <div className="flex items-center">
//             <a
//               href="#"
//               className="text-xl sm:text-2xl font-serif tracking-wide font-bold"
//             >
//               <span className="text-amber-400">Happiness</span>
//               <span className="text-slate-100 ml-2">Salome</span>
//               <span className="text-amber-500 font-sans text-xs ml-1 font-semibold uppercase tracking-widest">
//                 .Legal
//               </span>
//             </a>
//           </div>

//           <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
//             <a
//               href="#about"
//               className="text-slate-300 hover:text-amber-400 transition-colors"
//             >
//               About
//             </a>
//             <a
//               href="#services"
//               className="text-slate-300 hover:text-amber-400 transition-colors"
//             >
//               Services
//             </a>
//             <a
//               href="#book"
//               className="text-slate-300 hover:text-amber-400 transition-colors"
//             >
//               Book
//             </a>
//             <a
//               href="#contact"
//               className="text-slate-300 hover:text-amber-400 transition-colors"
//             >
//               Contact
//             </a>
//           </nav>

//           <div className="hidden md:flex items-center">
//             <a
//               href="https://wa.me/234"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-5 py-2.5 rounded-md bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 transition-all shadow-sm shadow-amber-500/20 active:scale-95 text-sm"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>

//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden text-slate-300 hover:text-amber-400 p-2 focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {mobileMenuOpen && (
//           <nav className="md:hidden py-4 border-t border-slate-800/80 flex flex-col gap-3 text-sm font-medium">
//             <a
//               href="#about"
//               onClick={() => setMobileMenuOpen(false)}
//               className="text-slate-300 hover:text-amber-400 px-2 py-1.5 transition-colors"
//             >
//               About
//             </a>
//             <a
//               href="#services"
//               onClick={() => setMobileMenuOpen(false)}
//               className="text-slate-300 hover:text-amber-400 px-2 py-1.5 transition-colors"
//             >
//               Services
//             </a>
//             <a
//               href="#book"
//               onClick={() => setMobileMenuOpen(false)}
//               className="text-slate-300 hover:text-amber-400 px-2 py-1.5 transition-colors"
//             >
//               Book
//             </a>
//             <a
//               href="#contact"
//               onClick={() => setMobileMenuOpen(false)}
//               className="text-slate-300 hover:text-amber-400 px-2 py-1.5 transition-colors"
//             >
//               Contact
//             </a>
//             <a
//               href="https://wa.me/234"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-2 px-5 py-2.5 rounded-md bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 transition-colors text-center shadow-sm shadow-amber-500/20"
//             >
//               Chat on WhatsApp
//             </a>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// }
