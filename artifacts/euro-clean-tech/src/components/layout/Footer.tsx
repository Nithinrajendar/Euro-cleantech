import { Link } from "wouter";
import { Phone, Mail, MapPin, ChevronRight, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white/80 pt-16 pb-8 lg:pb-8 pb-24 border-t-4 border-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" fill="currentColor" opacity="0.2"/>
                  <path d="M12 6c0 0-5 4.5-5 8a5 5 0 0 0 10 0c0-3.5-5-8-5-8z" fill="currentColor"/>
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-base">Euro Clean</span>
                <span className="block text-secondary font-semibold text-xs tracking-widest uppercase">Tech</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Coimbatore's most trusted professional water tank cleaning and mechanized housekeeping service providers since 2010. Serving homes, apartments, and industries.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Cleaning Process", href: "/process" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-2 text-sm hover:text-secondary transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 text-secondary/50 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Water Tank Cleaning",
                "Underground Sump Cleaning",
                "Overhead Tank Cleaning",
                "Industrial Tank Cleaning",
                "Mechanized Housekeeping",
                "Floor Cleaning",
              ].map((service) => (
                <li key={service} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">
                  108, Pankaja Mill Road,<br />
                  Ramanathapuram,<br />
                  Coimbatore - 641045
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <div className="flex flex-col text-sm">
                  <a href="tel:9655933484" className="hover:text-secondary transition-colors">+91 96559 33484</a>
                  <a href="tel:04222324330" className="hover:text-secondary transition-colors">0422 - 2324330</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@eurocleantech.in" className="text-sm hover:text-secondary transition-colors">
                  info@eurocleantech.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} Euro Clean Tech. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
