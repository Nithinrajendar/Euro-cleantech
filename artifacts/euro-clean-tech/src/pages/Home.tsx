import { Helmet } from 'react-helmet-async';
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Phone, Droplets, ShieldCheck, Clock, MapPin, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Helmet>
        <title>Euro Clean Tech – Water Tank Cleaning in Coimbatore | Professional Tank Cleaning</title>
        <meta name="description" content="Euro Clean Tech offers professional water tank cleaning in Coimbatore. Chemical-free, 7-step mechanized process. Underground, overhead, industrial tank cleaning. Call 9655933484." />
        <meta property="og:title" content="Euro Clean Tech – Water Tank Cleaning in Coimbatore" />
        <meta property="og:description" content="Professional, chemical-free water tank cleaning with imported equipment. Serving Coimbatore, Tirupur, Trichy, Mettupalayam." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.eurocleantech.in/" />
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[95vh] flex flex-col justify-center pt-32 lg:pt-40 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 z-0 pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 flex-grow flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">

            {/* Left Content */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold mb-8 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-secondary" />
                <span className="text-sm">Trusted Since 2010 · Coimbatore's #1</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] text-foreground mb-6">
                Professional <br className="hidden md:block" />
                Water Tank Cleaning <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">in Coimbatore</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl font-medium">
                Mechanized, 7-step scientific cleaning process without harmful chemicals. Keep your family safe with our imported equipment and expert technicians.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Button asChild size="lg" className="h-14 px-8 text-lg rounded-2xl bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all">
                  <a href="tel:9655933484">
                    <Phone className="mr-2 w-5 h-5" /> Call Now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-2xl border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white shadow-lg shadow-[#25D366]/10 hover:-translate-y-1 transition-all">
                  <a href="https://wa.me/919655933484" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost" className="h-14 px-8 text-lg rounded-2xl text-foreground hover:bg-muted font-bold hover:-translate-y-1 transition-all">
                  <Link href="/contact">Get Free Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Improved Illustration */}
            <div className="relative flex justify-center items-center h-[520px] mt-10 lg:mt-0">

              {/* Soft background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-teal-50 rounded-[48px]"></div>

              {/* Tank Card */}
              <div className="relative z-10 w-64 md:w-72 h-80 md:h-[340px] rounded-[36px] bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col justify-end">

                {/* Upper tank wall — light */}
                <div className="absolute inset-0 bg-white"></div>

                {/* Water fill — blue to teal gradient */}
                <div className="relative w-full h-[62%] z-10 overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(180deg, #3b9eda 0%, #38bcd4 40%, #2ec4a9 75%, #29b89a 100%)"
                    }}
                  >
                    {/* Water surface shimmer */}
                    <div className="absolute top-0 left-0 right-0 h-3 bg-white/20" style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}></div>
                    <div className="absolute top-3 left-6 right-6 h-1 bg-white/10 rounded-full blur-sm"></div>

                    {/* Glow from probe tip */}
                    <div
                      className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-16 rounded-full"
                      style={{
                        background: "radial-gradient(ellipse at center, rgba(100,180,255,0.55) 0%, transparent 70%)"
                      }}
                    ></div>
                  </div>
                </div>

                {/* Cleaning Probe — dark rod with green cap + blue tip */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20" style={{ top: "-8px" }}>
                  {/* Green cap */}
                  <div
                    className="w-10 h-5 rounded-t-2xl rounded-b-md"
                    style={{ background: "linear-gradient(180deg, #34d399 0%, #059669 100%)" }}
                  ></div>
                  {/* Dark rod */}
                  <div
                    className="w-3 rounded-sm"
                    style={{
                      height: "200px",
                      background: "linear-gradient(180deg, #1e293b 0%, #334155 60%, #1e3a5f 100%)"
                    }}
                  ></div>
                  {/* Blue glowing tip / bulb */}
                  <div
                    className="w-6 h-6 rounded-full -mt-1 relative"
                    style={{
                      background: "radial-gradient(circle at 35% 35%, #93c5fd 0%, #3b82f6 50%, #1d4ed8 100%)",
                      boxShadow: "0 0 14px 6px rgba(59,130,246,0.5)"
                    }}
                  ></div>
                </div>

              </div>

              {/* Badge — No Chemicals (top-left) */}
              <div className="absolute top-8 left-0 md:-left-6 z-20 px-4 py-3 rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <span className="font-bold text-slate-800 text-sm">No Chemicals</span>
              </div>

              {/* Badge — ISO Certified (top-right) */}
              <div className="absolute top-2 right-0 md:-right-6 z-20 px-4 py-3 rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
                </div>
                <span className="font-bold text-slate-800 text-sm">ISO Certified</span>
              </div>

              {/* Badge — UV Sterilized (bottom-right) */}
              <div className="absolute bottom-16 right-0 md:-right-6 z-20 px-4 py-3 rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-blue-500" />
                </div>
                <span className="font-bold text-slate-800 text-sm">UV Sterilized</span>
              </div>

            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-px">
          <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-24 text-primary fill-current" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-primary pt-8 pb-16 relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "10k+", label: "Happy Customers" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Safe Chemicals" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black font-display text-white mb-2 tracking-tight">{stat.number}</div>
                <div className="text-sm md:text-base text-accent font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-muted/50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: CSS Illustration */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-[40px] bg-gradient-to-br from-primary to-secondary p-1 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYyMCIvPjwvc3ZnPg==')] opacity-30"></div>
              <div className="absolute inset-2 rounded-[32px] bg-white flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mb-6 shadow-inner">
                  <ShieldCheck className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-4">The Scientific Approach</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We don't just clean; we sanitize, sterilize, and secure your water source using advanced European methodologies.
                </p>
                <div className="mt-8 flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-primary/20"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Text & Bullets */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
                <div className="h-1 w-1/2 bg-secondary mt-1 rounded-full"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
                Health begins with <br/><span className="text-primary">pure water.</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <Droplets className="w-6 h-6 text-white" />,
                    title: "No Harmful Chemicals",
                    desc: "We use food-grade, safe cleaning agents that kill bacteria without leaving toxic residues in your drinking water."
                  },
                  {
                    icon: <ShieldCheck className="w-6 h-6 text-white" />,
                    title: "Imported Equipment",
                    desc: "High-pressure jets, industrial vacuums, and UV sterilizers ensure every corner of the tank is perfectly clean."
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-white" />,
                    title: "Trained Professionals",
                    desc: "Our technicians undergo rigorous training and follow a strict 7-step process for guaranteed results every time."
                  },
                  {
                    icon: <CheckCircle2 className="w-6 h-6 text-white" />,
                    title: "100% Satisfaction Guarantee",
                    desc: "We don't leave until your tank is visibly spotless and scientifically sterilized."
                  }
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-border shadow-sm hover:shadow-md"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="inline-block mb-4">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Services</span>
                <div className="h-1 w-1/2 bg-secondary mt-1 rounded-full"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Comprehensive Solutions</h2>
            </div>
            <Button asChild variant="outline" className="group rounded-full font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "01", title: "Underground Sump", icon: "⬇️", color: "bg-blue-50 text-blue-600 border-blue-200" },
              { id: "02", title: "Overhead Tank", icon: "⬆️", color: "bg-sky-50 text-sky-600 border-sky-200" },
              { id: "03", title: "Industrial Tanks", icon: "🏭", color: "bg-indigo-50 text-indigo-600 border-indigo-200" },
              { id: "04", title: "Housekeeping", icon: "✨", color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
            ].map((service, i) => (
              <Link key={i} href="/services">
                <Card className="h-full group border-0 bg-muted/30 hover:bg-white transition-all duration-300 shadow-none hover:shadow-xl hover:-translate-y-2 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  <CardContent className="p-8 relative">
                    <div className="text-6xl font-black font-display text-muted-foreground/10 absolute top-4 right-4 z-0 group-hover:text-primary/5 transition-colors">
                      {service.id}
                    </div>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 relative z-10 border shadow-sm ${service.color}`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-display text-foreground mb-4 relative z-10">{service.title}</h3>
                    <div className="flex items-center text-primary font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-foreground to-foreground z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Service Areas</span>
            <div className="h-1 w-full bg-accent mt-1 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">Serving Across Tamil Nadu</h2>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {["Coimbatore", "Tirupur", "Trichy", "Mettupalayam"].map((city) => (
              <div
                key={city}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 transition-colors"
              >
                <MapPin className="w-6 h-6 text-secondary" />
                <span className="text-xl font-bold font-display">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">Testimonials</span>
              <div className="h-1 w-1/2 bg-secondary mt-1 rounded-full mx-auto"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Loved by 10,000+ Homes</h2>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:px-0 gap-6 snap-x">
            {[
              { name: "Ramesh Kumar", loc: "Coimbatore", text: "Extremely professional service. The UV sterilization step gave us complete peace of mind." },
              { name: "Priya Senthil", loc: "Tirupur", text: "The water feels so much cleaner and safer now. Highly recommended!" },
              { name: "Manoj V.", loc: "Trichy", text: "Very neat work. The staff explained the 7-step process clearly before starting." }
            ].map((review, i) => (
              <Card key={i} className="min-w-[300px] md:min-w-0 snap-center border-border/50 shadow-lg hover:shadow-xl transition-shadow bg-muted/10">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-8 flex-grow italic text-lg">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-display text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground font-display">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.loc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="ghost" className="font-bold text-primary hover:bg-primary/5">
              <Link href="/testimonials">Read All Reviews <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-20 -translate-y-px">
          <svg viewBox="0 0 1440 120" className="w-full h-12 text-white fill-current rotate-180" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 drop-shadow-md">
            Ready for Pure, Clean Water?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto font-medium">
            Don't wait until your family gets sick. Schedule a professional tank cleaning today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-16 px-10 text-xl font-bold rounded-2xl bg-white text-primary hover:bg-white/90 shadow-2xl hover:-translate-y-1 transition-all border-0">
              <a href="tel:9655933484">
                <Phone className="mr-2 w-6 h-6" /> Call 9655933484
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-10 text-xl font-bold rounded-2xl border-2 border-white text-white hover:bg-white hover:text-primary shadow-xl hover:-translate-y-1 transition-all">
              <Link href="/contact">Book Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
