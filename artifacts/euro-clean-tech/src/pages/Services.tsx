import { Helmet } from 'react-helmet-async';
import { Link } from "wouter";
import { Droplets, ArrowDownToLine, ArrowUpToLine, Factory, Home, Sparkles, Box, Wind, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    id: "water-tank",
    number: "01",
    title: "General Water Tank",
    icon: <Droplets className="w-10 h-10" />,
    desc: "Complete 7-step scientific cleaning for standard residential water tanks using high-pressure jets and UV sterilization.",
    color: "blue"
  },
  {
    id: "underground",
    number: "02",
    title: "Underground Sump",
    icon: <ArrowDownToLine className="w-10 h-10" />,
    desc: "Specialized dewatering and sludge removal for deep underground sumps where dirt and heavy metals accumulate.",
    color: "sky"
  },
  {
    id: "overhead",
    number: "03",
    title: "Overhead Tank",
    icon: <ArrowUpToLine className="w-10 h-10" />,
    desc: "Safe access and thorough cleaning of terrace-mounted syntax or concrete tanks exposed to sunlight and algae.",
    color: "indigo"
  },
  {
    id: "industrial",
    number: "04",
    title: "Industrial Tanks",
    icon: <Factory className="w-10 h-10" />,
    desc: "Heavy-duty cleaning for massive industrial reservoirs, ensuring compliance with manufacturing safety standards.",
    color: "slate"
  },
  {
    id: "housekeeping",
    number: "05",
    title: "Mechanized Housekeeping",
    icon: <Home className="w-10 h-10" />,
    desc: "Professional deep cleaning services for apartments, villas, and commercial spaces using advanced machinery.",
    color: "emerald"
  },
  {
    id: "floor",
    number: "06",
    title: "Floor Scrubbing & Polishing",
    icon: <Sparkles className="w-10 h-10" />,
    desc: "Restoring the shine to marble, granite, and mosaic floors using industrial grade scrubbers and safe chemicals.",
    color: "amber"
  },
  {
    id: "carpet",
    number: "07",
    title: "Carpet Shampooing",
    icon: <Box className="w-10 h-10" />,
    desc: "Deep dirt extraction and shampooing for office and residential carpets to remove allergens and stains.",
    color: "rose"
  },
  {
    id: "upholstery",
    number: "08",
    title: "Sofa & Upholstery",
    icon: <Wind className="w-10 h-10" />,
    desc: "Dry and wet vacuum cleaning for fabric sofas, dining chairs, and mattresses to extend their lifespan.",
    color: "violet"
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Helmet>
        <title>Services – Overhead & Underground Tank Cleaning | Euro Clean Tech Coimbatore</title>
        <meta name="description" content="Overhead tank cleaning, underground sump cleaning, industrial tank cleaning, housekeeping, floor & carpet cleaning in Coimbatore by Euro Clean Tech." />
        <link rel="canonical" href="https://www.eurocleantech.in/services" />
      </Helmet>

      {/* CUSTOM SECTION HEADER */}
      <section className="pt-40 pb-20 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <div className="inline-block mb-4">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Expertise</span>
            <div className="h-1 w-1/2 bg-secondary mt-1 rounded-full mx-auto"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-black text-foreground mb-6">
            Comprehensive Cleaning Solutions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From residential drinking water tanks to massive industrial reservoirs, we have the machinery, chemicals, and expertise to handle it all.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="group relative bg-white rounded-[32px] p-8 md:p-10 shadow-lg shadow-black/5 border border-border/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Accent Background Blob */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-${service.color}-100 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-${service.color}-50 text-${service.color}-600 flex items-center justify-center border border-${service.color}-200 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <span className="text-5xl font-black font-display text-muted/50 group-hover:text-primary/10 transition-colors">
                    {service.number}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold font-display text-foreground mb-4 relative z-10">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-10 flex-grow relative z-10 leading-relaxed">
                  {service.desc}
                </p>
                
                <Button asChild size="lg" className="w-full sm:w-auto self-start rounded-xl font-bold bg-muted text-foreground hover:bg-primary hover:text-white transition-colors relative z-10 shadow-none border-0">
                  <Link href="/contact">
                    Book Service <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="py-24 bg-gradient-to-br from-foreground to-foreground/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYyMCIvPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Not sure which service you need?</h2>
          <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
            Our experts can inspect your premises and recommend the best cleaning plan tailored to your setup.
          </p>
          <Button asChild size="lg" className="h-16 px-10 text-xl font-bold rounded-2xl bg-secondary hover:bg-secondary/90 text-white shadow-xl shadow-secondary/30 hover:-translate-y-1 transition-all border-0">
            <Link href="/contact">Get Free Inspection</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
