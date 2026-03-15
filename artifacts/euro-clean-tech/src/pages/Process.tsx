import { Helmet } from 'react-helmet-async';
import { Search, Waves, Trash2, Droplets, Wind, ShieldPlus, Sun } from "lucide-react";

const STEPS = [
  {
    title: "Mechanized Dewatering",
    icon: <Waves className="w-8 h-8" />,
    desc: "We use heavy-duty submersible pumps to drain out the existing water and loose dirt rapidly, minimizing wastage of time.",
  },
  {
    title: "Sludge Removal",
    icon: <Trash2 className="w-8 h-8" />,
    desc: "Specialized sludge pumps extract deep-seated mud, sand, and heavy residues from the bottom of the tank.",
  },
  {
    title: "High Pressure Jet Cleaning",
    icon: <Droplets className="w-8 h-8" />,
    desc: "The walls and ceiling are blasted with a 150-bar high-pressure water jet. This strips away hard scale, algae, and calcification.",
  },
  {
    title: "Vacuum Cleaning",
    icon: <Wind className="w-8 h-8" />,
    desc: "An industrial wet-and-dry vacuum cleaner is used to suck out the final traces of dirt and dirty water, leaving the tank totally dry.",
  },
  {
    title: "Anti-Bacterial Spray",
    icon: <ShieldPlus className="w-8 h-8" />,
    desc: "We spray a completely safe, non-toxic, bio-degradable anti-bacterial agent onto the inner walls to kill any remaining pathogens.",
  },
  {
    title: "UV Sterilization",
    icon: <Sun className="w-8 h-8" />,
    desc: "A specially developed UV radiator is used to irradiate the tank. This final step kills suspended floating spores and guarantees 100% sterilization.",
  },
];

export default function Process() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Helmet>
        <title>7-Step Tank Cleaning Process – Chemical Free | Euro Clean Tech</title>
        <meta name="description" content="Our scientific 7-step water tank cleaning process: inspection, dewatering, sludge removal, high-pressure jetting, vacuum cleaning, anti-bacterial spray, UV sterilization." />
        <link rel="canonical" href="https://www.eurocleantech.in/process" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10 max-w-4xl">
          <div className="inline-block px-4 py-1.5 bg-secondary text-white rounded-full text-sm font-bold tracking-wider mb-6">
            100% SCIENTIFIC
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-black mb-6 drop-shadow-md">
            Our 7-Step Cleaning Process
          </h1>
          <p className="text-xl text-white/80 leading-relaxed font-medium">
            A completely mechanized approach ensuring your water tank is bacteria-free without the use of harmful chemicals.
          </p>
        </div>

        {/* Wave divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-px">
          <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-16 text-background fill-current" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">

          {/* Step 1: Special highlighted step */}
          <div className="bg-white rounded-[40px] p-8 md:p-14 mb-24 shadow-2xl border border-border/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-[32px] bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                <Search className="w-16 h-16 md:w-20 md:h-20" />
              </div>
              <div>
                <div className="inline-block px-4 py-1.5 bg-muted text-foreground rounded-full text-sm font-bold tracking-wider mb-4 border border-border">
                  STEP 01
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-black text-foreground mb-4">Site Inspection</h2>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Before beginning, our technicians thoroughly inspect the surroundings, check the tank's condition, identify cracks or leaks, and determine the exact machinery and pressure required for your specific tank material.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Steps 2-7 */}
          <div className="relative">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2"></div>
            {/* Mobile Left Line */}
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-border/50"></div>

            <div className="space-y-16 md:space-y-24">
              {STEPS.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Center Icon Node */}
                    <div className="absolute left-8 md:left-1/2 w-16 h-16 rounded-2xl bg-white border-4 border-primary flex items-center justify-center shadow-xl text-primary z-20 md:-translate-x-1/2 -translate-x-1/2">
                      {step.icon}
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                      <div className="bg-muted/30 p-8 rounded-3xl border border-border/50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                        <div className={`text-secondary font-bold text-lg mb-3 ${isEven ? 'md:text-right' : ''}`}>
                          STEP 0{index + 2}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
