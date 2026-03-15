import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Droplet, ArrowDownToLine, ArrowUpToLine, Factory, Home, Sparkles, Box, Wind } from "lucide-react";

const SERVICES = [
  {
    id: "water-tank",
    title: "General Water Tank Cleaning",
    icon: <Droplet className="w-8 h-8" />,
    desc: "Complete 7-step scientific cleaning for standard residential water tanks using high-pressure jets and UV sterilization.",
  },
  {
    id: "underground",
    title: "Underground Sump Cleaning",
    icon: <ArrowDownToLine className="w-8 h-8" />,
    desc: "Specialized dewatering and sludge removal for deep underground sumps where dirt and heavy metals accumulate.",
  },
  {
    id: "overhead",
    title: "Overhead Tank Cleaning",
    icon: <ArrowUpToLine className="w-8 h-8" />,
    desc: "Safe access and thorough cleaning of terrace-mounted syntax or concrete tanks exposed to sunlight and algae.",
  },
  {
    id: "industrial",
    title: "Industrial Tank Cleaning",
    icon: <Factory className="w-8 h-8" />,
    desc: "Heavy-duty cleaning for massive industrial reservoirs, ensuring compliance with manufacturing safety standards.",
  },
  {
    id: "housekeeping",
    title: "Mechanized Housekeeping",
    icon: <Home className="w-8 h-8" />,
    desc: "Professional deep cleaning services for apartments, villas, and commercial spaces using advanced machinery.",
  },
  {
    id: "floor",
    title: "Floor Scrubbing & Polishing",
    icon: <Sparkles className="w-8 h-8" />,
    desc: "Restoring the shine to marble, granite, and mosaic floors using industrial grade scrubbers and safe chemicals.",
  },
  {
    id: "carpet",
    title: "Carpet Shampooing",
    icon: <Box className="w-8 h-8" />,
    desc: "Deep dirt extraction and shampooing for office and residential carpets to remove allergens and stains.",
  },
  {
    id: "upholstery",
    title: "Sofa & Upholstery Cleaning",
    icon: <Wind className="w-8 h-8" />,
    desc: "Dry and wet vacuum cleaning for fabric sofas, dining chairs, and mattresses to extend their lifespan.",
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Our Services" 
        description="Comprehensive mechanized cleaning solutions for residential and industrial needs."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-border/50 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 flex flex-col"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {service.desc}
                </p>
                <Button asChild variant="outline" className="w-full mt-auto group-hover:bg-primary group-hover:text-white transition-all">
                  <Link href="/contact">Book Service</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="py-16 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure which service you need?</h2>
          <p className="text-muted-foreground mb-8">Our experts can inspect your premises and recommend the best cleaning plan.</p>
          <Button asChild size="lg" className="rounded-xl shadow-lg shadow-primary/20">
            <Link href="/contact">Get Free Inspection</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
