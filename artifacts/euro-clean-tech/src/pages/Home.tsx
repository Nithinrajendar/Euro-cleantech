import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Droplets, Clock, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-48 lg:pt-40 lg:pb-56 overflow-hidden bg-[#0a1628]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-[#0a1628] to-[#0a1628]"></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          
          {/* Animated Glow Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[120px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/30 blur-[100px]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-secondary font-medium mb-8 backdrop-blur-sm">
                  <ShieldCheck className="w-5 h-5" />
                  <span>#1 Professional Tank Cleaning in Coimbatore</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-white mb-6">
                  Pure Water <br className="hidden md:block" />
                  Begins With a <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Clean Tank.</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
                  Mechanized, 7-step scientific cleaning process without harmful chemicals. Keep your family safe with Euro Clean Tech's imported equipment and expert technicians.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5">
                  <Button asChild size="lg" className="h-14 px-8 text-lg rounded-xl bg-secondary hover:bg-secondary/90 text-white shadow-[0_0_20px_rgba(0,180,216,0.4)] hover:shadow-[0_0_30px_rgba(0,180,216,0.6)] hover:-translate-y-1 transition-all border-0">
                    <Link href="/contact">Get Free Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white/10 hover:text-white hover:-translate-y-1 transition-all">
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </div>

                <div className="mt-12 flex items-center gap-8 text-sm font-medium text-white/80">
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

            {/* Right Content - SVG Illustration */}
            <div className="relative flex justify-center items-center h-[500px] mt-10 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[400px]"
              >
                {/* SVG Water Drop Illustration */}
                <div className="relative w-full aspect-square flex items-center justify-center">
                  {/* Orbiting Rings */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-white/10 border-t-secondary/50 border-r-secondary/50"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full border border-white/5 border-b-primary/50"
                  />
                  
                  {/* Glowing Core */}
                  <div className="absolute inset-1/4 bg-secondary/20 rounded-full blur-2xl" />

                  {/* Main Water Drop SVG */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-20 drop-shadow-[0_0_30px_rgba(0,180,216,0.5)]"
                  >
                    <svg width="240" height="240" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="dropGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00B4D8" />
                          <stop offset="1" stopColor="#0A3D91" />
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="2" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="url(#dropGrad)" filter="url(#glow)" />
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="url(#dropGrad)" />
                      {/* Shine detail */}
                      <path d="M10 8c-1.5 2-1 5 1 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                      <circle cx="14" cy="16" r="1.5" fill="white" opacity="0.8" />
                      <circle cx="9" cy="18" r="1" fill="white" opacity="0.6" />
                    </svg>
                  </motion.div>

                  {/* Floating Elements / Particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-secondary/80 shadow-[0_0_10px_rgba(0,180,216,0.8)]"
                      animate={{
                        y: [-20, -100],
                        x: Math.sin(i) * 50,
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeOut"
                      }}
                      style={{
                        left: `${40 + Math.random() * 20}%`,
                        bottom: `${20 + Math.random() * 20}%`
                      }}
                    />
                  ))}

                  {/* Floating Glass Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute -right-4 md:-right-12 bottom-12 z-30 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Bacteria-Free</div>
                      <div className="text-white/70 text-sm">100% Guaranteed</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Row integrated into Hero */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#050b14] to-transparent pt-32 pb-8">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { number: "10k+", label: "Happy Customers" },
                { number: "15+", label: "Years Experience" },
                { number: "100%", label: "Safe Chemicals" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center hover:bg-white/10 transition-colors shadow-xl"
                >
                  <div className="text-3xl md:text-4xl font-bold font-display text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-white/60 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
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
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-2xl"></div>
          <div className="absolute bottom-0 -left-10 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-32 bg-white/3 rounded-full blur-3xl"></div>
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
