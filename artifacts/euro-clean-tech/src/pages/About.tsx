import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Target, Heart, Award, Users, Droplets, BadgeCheck, Clock, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Helmet>
        <title>About Euro Clean Tech – Professional Tank Cleaning Company Coimbatore</title>
        <meta name="description" content="Euro Clean Tech has been providing safe, eco-friendly, chemical-free water tank cleaning services in Coimbatore since 2010. Learn about our mission and team." />
        <link rel="canonical" href="https://www.eurocleantech.in/about" />
      </Helmet>

      {/* HERO SECTION */}
      <section className="pt-36 lg:pt-48 pb-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Text */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Story</span>
                <div className="h-1 w-1/2 bg-secondary mt-1 rounded-full"></div>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-black text-foreground mb-8 leading-[1.1]">
                Pioneering <span className="text-primary">Hygiene Solutions</span> since 2010.
              </h1>

              <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-medium">
                <p>
                  Established in Coimbatore, Euro Clean Tech was born out of a critical necessity: the realization that traditional, manual water tank cleaning methods were unscientific, unsafe, and largely ineffective.
                </p>
                <p>
                  For over a decade, we have revolutionized the industry by introducing a mechanized, 7-step process that guarantees 100% bacteria-free water storage without the use of harmful chemicals.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "No Harmful Chemicals",
                  "Imported German Equipment",
                  "Experienced Technicians",
                  "100% Satisfaction Guarantee"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <span className="font-bold text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Achievement Showcase */}
            <div className="relative">
              {/* Background accent */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/8 to-secondary/8 rounded-[48px] transform rotate-1"></div>

              <div className="relative bg-white rounded-[40px] shadow-2xl border border-border/30 p-8 overflow-hidden">
                {/* Top ribbon */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full">
                    <BadgeCheck className="w-5 h-5" />
                    <span className="text-sm font-bold tracking-wide uppercase">ISO Certified Process</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-bold tracking-wide uppercase">Since 2010</span>
                  </div>
                </div>

                {/* Big stat */}
                <div className="bg-gradient-to-br from-primary to-blue-400 rounded-[28px] p-8 text-white mb-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  <Droplets className="w-10 h-10 text-white/60 mb-4" />
                  <div className="text-6xl font-black font-display leading-none">10,000+</div>
                  <div className="text-white/80 font-semibold mt-2 text-lg">Tanks Cleaned & Certified</div>
                </div>

                {/* Stat grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: <Clock className="w-5 h-5" />, value: "15+", label: "Years" },
                    { icon: <Users className="w-5 h-5" />, value: "50+", label: "Experts" },
                    { icon: <MapPin className="w-5 h-5" />, value: "4", label: "Cities" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-muted/50 rounded-2xl p-4 text-center border border-border/40 hover:bg-white hover:shadow-md transition-all duration-200">
                      <div className="text-primary flex justify-center mb-1">{stat.icon}</div>
                      <div className="text-2xl font-black font-display text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Trust line */}
                <div className="flex items-center gap-3 bg-secondary/5 border border-secondary/20 rounded-2xl px-5 py-4">
                  <ShieldCheck className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <div className="font-bold text-foreground text-sm">100% Chemical-Free Guarantee</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Safe for families, children & pets</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KEY NUMBERS */}
      <section className="bg-foreground py-16 border-y-8 border-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
            {[
              { number: "15+", label: "Years in Business" },
              { number: "10,000+", label: "Projects Completed" },
              { number: "50+", label: "Expert Technicians" },
              { number: "4", label: "Major Cities Served" },
            ].map((stat, i) => (
              <div key={i} className="px-4">
                <div className="text-4xl md:text-5xl font-black font-display text-white mb-2">{stat.number}</div>
                <div className="text-accent font-bold text-sm uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

            {/* Mission */}
            <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-xl border border-border/50 hover:shadow-2xl transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
              <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8 relative z-10">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-display font-black mb-6 text-foreground relative z-10">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                To provide scientific, mechanized hygiene solutions that ensure access to pure, safe water storage for every household and industry, while maintaining environmental sustainability and utilizing zero harmful chemicals.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-primary to-secondary p-10 md:p-14 rounded-[40px] shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center text-white mb-8 relative z-10 backdrop-blur-sm">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-display font-black mb-6 relative z-10">Our Vision</h3>
              <p className="text-white/90 text-lg leading-relaxed relative z-10">
                To be South India's most trusted and technologically advanced hygiene services brand, expanding our footprint while continually innovating our cleaning processes for absolute perfection.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Core Values</span>
            <div className="h-1 w-1/2 bg-secondary mt-1 rounded-full mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-16">What Drives Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: "Safety First",
                desc: "We prioritize the health of our customers by strictly avoiding harmful chemicals in our cleaning processes."
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Quality Excellence",
                desc: "We never compromise on the quality of our equipment, ensuring every job meets ISO standards."
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Customer Centric",
                desc: "Building long-term relationships through transparency, reliability, and 100% satisfaction guarantees."
              }
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-muted/40 border border-border/50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
