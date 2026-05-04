import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#09090b] pt-20 pb-10 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo and Description */}
          <div className="flex flex-col gap-6 text-left">
            <a href="/">
          <img
            src="/update.png"
            alt="upDate"
            className="cursor-pointer h-8 w-auto inline-block"
          />
        </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building future-ready professionals with real corporate exposure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium text-sm tracking-wider uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-red-400 transition-colors">About Program</a></li>
              <li><a href="#skills" className="hover:text-red-400 transition-colors">Internship Benefits</a></li>
              <li><a href="#timeline" className="hover:text-red-400 transition-colors">How to Apply</a></li>
              <li><button onClick={() => document.dispatchEvent(new CustomEvent('open-apply-modal'))} className="hover:text-red-400 transition-colors text-white font-medium">Apply Now</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium text-sm tracking-wider uppercase mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500" />
                <a href="tel:+918109718211" className="hover:text-red-400 transition-colors">+91 8109718211</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-500" />
                <a href="mailto:internship@updats.in" className="hover:text-red-400 transition-colors">internship@updats.in</a>
              </li>
              <li className="flex flex-start items-center gap-3">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>Raipur, India</span>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="text-white font-medium text-sm tracking-wider uppercase mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">Get internship updates & offers.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-lg text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} upDate. All rights reserved.</p>
          <div className="flex gap-6 font-medium">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
