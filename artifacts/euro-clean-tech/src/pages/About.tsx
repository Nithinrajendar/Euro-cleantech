import { PageHeader } from "@/components/ui/PageHeader";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="About Euro Clean Tech" 
        description="Pioneering scientific hygiene solutions in Tamil Nadu since 2010."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* about us team professional working */}
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=1000&fit=crop" 
                alt="Euro Clean Tech Team" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            
            <div>
              <h2 className="text-secondary font-bold tracking-wider uppercase mb-2">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Setting the Standard for Clean Water Storage
              </h3>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Established in Coimbatore, Euro Clean Tech was born out of a critical necessity: the realization that traditional, manual water tank cleaning methods were unscientific, unsafe, and largely ineffective.
                </p>
                <p>
                  For over a decade, we have revolutionized the industry by introducing a mechanized, 7-step process that guarantees 100% bacteria-free water storage without the use of harmful chemicals.
                </p>
                <p>
                  Today, we serve thousands of homes, apartments, hospitals, and industrial facilities across Coimbatore, Tirupur, Trichy, and Mettupalayam, backed by imported equipment and a highly trained workforce.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {[
                  "No Harmful Chemicals",
                  "Imported German Equipment",
                  "Experienced Technicians",
                  "Residential & Industrial",
                  "ISO Standard Process",
                  "100% Satisfaction Guarantee"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary shrink-0" />
                    <span className="font-semibold text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide scientific, mechanized hygiene solutions that ensure access to pure, safe water storage for every household and industry, while maintaining environmental sustainability and utilizing zero harmful chemicals.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-secondary p-10 rounded-3xl shadow-lg text-white">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To be South India's most trusted and technologically advanced hygiene services brand, expanding our footprint while continually innovating our cleaning processes for absolute perfection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
