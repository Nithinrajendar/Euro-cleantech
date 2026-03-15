import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-4"
      }`}
    >
      {/* Top Bar - Only visible on desktop when not scrolled much */}
      <div className={`hidden lg:flex items-center justify-between container mx-auto px-4 md:px-8 transition-all duration-300 ${
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-10 opacity-100 mb-2 border-b border-border/50"
      }`}>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-secondary" />
            <span>108, Pankaja Mill Rd, Coimbatore - 641045</span>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="tel:04222324330" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4 text-secondary" />
            <span>0422-2324330</span>
          </a>
          <a href="tel:9655933484" className="flex items-center gap-2 hover:text-primary transition-colors text-primary">
            <Phone className="w-4 h-4" />
            <span>+91 96559 33484</span>
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img 
            src={`${import.meta.env.BASE_URL}images/logo.png`} 
            alt="Euro Clean Tech Logo" 
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = location === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground/80 hover:text-primary hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="ml-4 pl-4 border-l border-border h-8 flex items-center">
            <Button asChild className="rounded-full shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white border-l-0">
            <div className="flex flex-col h-full mt-6">
              <div className="mb-8">
                <img 
                  src={`${import.meta.env.BASE_URL}images/logo.png`} 
                  alt="Euro Clean Tech Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = location === link.href;
                  return (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                        isActive 
                          ? "bg-primary text-white shadow-md" 
                          : "bg-muted/50 text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              
              <div className="mt-auto pb-8 pt-8 flex flex-col gap-4">
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <p className="text-sm font-semibold text-primary mb-2">Need immediate service?</p>
                  <a href="tel:9655933484" className="flex items-center gap-3 text-foreground font-bold text-lg">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    +91 96559 33484
                  </a>
                </div>
                <Button asChild size="lg" className="w-full rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/contact">Book Now</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
