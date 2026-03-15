import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Droplets, Clock, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-water-bg.png`}
            alt="Pure clean water" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-medium mb-6">
                <ShieldCheck className="w-5 h-5" />
                <span>#1 Professional Tank Cleaning in Coimbatore</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-foreground mb-6">
                Pure Water Begins With a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Clean Tank.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Mechanized, 7-step scientific cleaning process without harmful chemicals. Keep your family safe with Euro Clean Tech's imported equipment and expert technicians.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="h-14 px-8 text-lg rounded-xl shadow-lg shadow-primary/25 hover:-translate-y-1 transition-transform">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl bg-white/50 backdrop-blur-sm border-2 border-primary/20 hover:bg-primary/5 hover:-translate-y-1 transition-transform">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>

              <div className="mt-12 flex items-center gap-6 text-sm font-medium text-foreground/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>ISO Certified Process</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Highlight Bar */}
      <section className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
            {[
              { number: "10k+", label: "Happy Customers" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Safe Chemicals" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-4"
              >
                <div className="text-3xl md:text-4xl font-bold font-display mb-2">{stat.number}</div>
                <div className="text-sm text-primary-foreground/80 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-bold tracking-wider uppercase mb-2">Why Euro Clean Tech?</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground">The Scientific Approach to Hygiene</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplets className="w-10 h-10 text-white" />,
                title: "No Harmful Chemicals",
                desc: "We use food-grade, safe cleaning agents that kill bacteria without leaving toxic residues in your drinking water."
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-white" />,
                title: "Imported Equipment",
                desc: "High-pressure jets, industrial vacuums, and UV sterilizers ensure every corner of the tank is perfectly clean."
              },
              {
                icon: <Clock className="w-10 h-10 text-white" />,
                title: "Trained Professionals",
                desc: "Our technicians undergo rigorous training and follow a strict 7-step process for guaranteed results every time."
              }
            ].map((feature, i) => (
              <Card key={i} className="border-0 shadow-lg shadow-black/5 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-md shadow-primary/20">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-secondary font-bold tracking-wider uppercase mb-2">Our Services</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground">Comprehensive Cleaning Solutions</h3>
            </div>
            <Button asChild variant="ghost" className="group text-primary hover:text-primary hover:bg-primary/5">
              <Link href="/services">
                View All Services 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Underground Sump", img: "photo-1542013936693-884638332954" },
              { title: "Overhead Tank", img: "photo-1605810230434-7631ac76ec81" },
              { title: "Industrial Tanks", img: "photo-1581093450021-4a7360e9a6b5" },
              { title: "Housekeeping", img: "photo-1581578731548-c64695cc6952" },
            ].map((service, i) => (
              <Link key={i} href="/services" className="group block h-72 rounded-2xl overflow-hidden relative shadow-md">
                {/* using unsplash industrial/water/cleaning placeholder */}
                <img 
                  src={`https://images.unsplash.com/${service.img}?w=600&h=800&fit=crop`} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h4 className="text-white text-xl font-bold group-hover:text-secondary transition-colors">{service.title}</h4>
                  <div className="mt-2 flex items-center text-white/80 text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <img src={`${import.meta.env.BASE_URL}images/abstract-wave.png`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to secure your family's health?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Book our professional tank cleaning service today. We operate across Coimbatore, Tirupur, Trichy, and Mettupalayam.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="h-14 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <a href="tel:9655933484">Call +91 96559 33484</a>
            </Button>
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-xl bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <Link href="/contact">Request Call Back</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
