import { PageHeader } from "@/components/ui/PageHeader";
import { motion } from "framer-motion";
import { Search, Waves, Trash2, Droplets, Wind, ShieldPlus, Sun } from "lucide-react";

const STEPS = [
  {
    title: "Mechanized Dewatering",
    icon: <Waves className="w-6 h-6" />,
    desc: "We use heavy-duty submersible pumps to drain out the existing water and loose dirt rapidly, minimizing wastage of time.",
  },
  {
    title: "Sludge Removal",
    icon: <Trash2 className="w-6 h-6" />,
    desc: "Specialized sludge pumps extract deep-seated mud, sand, and heavy residues from the bottom of the tank.",
  },
  {
    title: "High Pressure Jet Cleaning",
    icon: <Droplets className="w-6 h-6" />,
    desc: "The walls and ceiling are blasted with a 150-bar high-pressure water jet. This strips away hard scale, algae, and calcification.",
  },
  {
    title: "Vacuum Cleaning",
    icon: <Wind className="w-6 h-6" />,
    desc: "An industrial wet-and-dry vacuum cleaner is used to suck out the final traces of dirt and dirty water, leaving the tank totally dry.",
  },
  {
    title: "Anti-Bacterial Spray",
    icon: <ShieldPlus className="w-6 h-6" />,
    desc: "We spray a completely safe, non-toxic, bio-degradable anti-bacterial agent onto the inner walls to kill any remaining pathogens.",
  },
  {
    title: "UV Sterilization",
    icon: <Sun className="w-6 h-6" />,
    desc: "A specially developed UV radiator is used to irradiate the tank. This final step kills suspended floating spores and guarantees 100% sterilization.",
  },
];

export default function Process() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Our 7-Step Cleaning Process" 
        description="A completely scientific, mechanized approach ensuring your water tank is 100% bacteria-free."
      />

      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Step 1: Inspection (Special highlighted step) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white rounded-3xl p-8 md:p-12 mb-16 shadow-xl relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Search className="w-40 h-40" />
            </div>
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm font-bold tracking-wider mb-6">
                STEP 01
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Tank Inspection</h2>
              <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
                Before beginning, our technicians inspect the surroundings, check the tank's condition, identify cracks or leaks, and determine the exact machinery and pressure required for your specific tank material.
              </p>
            </div>
          </motion.div>

          {/* Timeline Steps 2-7 */}
          <div className="relative border-l-4 border-primary/20 ml-6 md:ml-12 space-y-16 py-8">
            {STEPS.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10 md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[34px] md:-left-[34px] top-0 w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-lg text-primary z-10">
                  {step.icon}
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-shadow group">
                  <div className="text-secondary font-bold mb-2">STEP 0{index + 2}</div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
