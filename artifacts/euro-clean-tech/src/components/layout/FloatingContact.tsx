import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919655933484"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:scale-110 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_12px_40px_rgb(37,211,102,0.6)] group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}

export function MobileCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-primary z-40 border-t border-primary-foreground/10 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <div className="flex">
        <a
          href="tel:9655933484"
          className="flex-1 py-4 flex items-center justify-center gap-2 text-white font-semibold hover:bg-white/10 transition-colors border-r border-white/10"
        >
          Call Now
        </a>
        <a
          href="https://wa.me/919655933484"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-4 flex items-center justify-center gap-2 text-white font-semibold hover:bg-white/10 transition-colors bg-[#25D366]/90"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
