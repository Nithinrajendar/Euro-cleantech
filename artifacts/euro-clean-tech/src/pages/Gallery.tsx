import { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Tank Cleaning", "Process", "Results"];

const IMAGES = [
  { id: 1, title: "Industrial Tank Cleaning", category: "Tank Cleaning", color: "bg-blue-100" },
  { id: 2, title: "High Pressure Jetting", category: "Process", color: "bg-emerald-100" },
  { id: 3, title: "Overhead Tank Setup", category: "Tank Cleaning", color: "bg-sky-100" },
  { id: 4, title: "Mechanized Dewatering", category: "Process", color: "bg-indigo-100" },
  { id: 5, title: "Crystal Clear Water", category: "Results", color: "bg-cyan-100" },
  { id: 6, title: "UV Sterilization", category: "Process", color: "bg-violet-100" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? IMAGES 
    : IMAGES.filter(img => img.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Helmet>
        <title>Gallery – Tank Cleaning Before & After | Euro Clean Tech</title>
        <meta name="description" content="See our water tank cleaning results. Before and after photos, equipment images, and work gallery from Euro Clean Tech Coimbatore." />
        <link rel="canonical" href="https://www.eurocleantech.in/gallery" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-muted/30 border-b border-border/50 text-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="inline-block mb-4">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Visual Evidence</span>
            <div className="h-1 w-1/2 bg-secondary mt-1 rounded-full mx-auto"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-black text-foreground mb-6">
            Our Work Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the difference our mechanized process makes. From dirty sumps to crystal clear water.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-white border border-border/50 text-foreground hover:border-primary/50 hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Before/After Highlight (Always visible) */}
          {activeCategory === "All" && (
            <div className="mb-20 bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-border/50">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-display font-bold">The Euro Clean Tech Difference</h3>
                <p className="text-muted-foreground mt-2">Swipe to see the transformation (Representative)</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before */}
                <div className="relative rounded-3xl overflow-hidden aspect-video bg-[#5C4033] flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYyMCIvPjwvc3ZnPg==')]"></div>
                  <span className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full font-bold text-sm shadow-md">BEFORE</span>
                  <div className="text-white/50 font-display font-bold text-2xl">Mud & Algae Buildup</div>
                </div>
                {/* After */}
                <div className="relative rounded-3xl overflow-hidden aspect-video bg-blue-500 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600"></div>
                  <span className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full font-bold text-sm shadow-md z-10">AFTER</span>
                  <div className="text-white font-display font-bold text-2xl relative z-10 drop-shadow-md">Crystal Clear Water</div>
                </div>
              </div>
            </div>
          )}

          {/* Masonry-style Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={img.id}
                  className={`group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer ${img.color} flex items-center justify-center border border-border/50`}
                >
                  {/* Placeholder Content since no images */}
                  <div className="text-center p-6 text-foreground/40 font-display font-bold text-xl group-hover:scale-110 transition-transform duration-500">
                    Image: {img.title}
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                      {img.category}
                    </span>
                    <h3 className="text-white text-2xl font-bold font-display leading-tight">
                      {img.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="mt-20 text-center bg-primary/5 rounded-[32px] p-10 border border-primary/10">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Want to see real photos of our work?</h3>
            <p className="text-muted-foreground mb-8 text-lg">We regularly post our daily transformations and process videos on WhatsApp.</p>
            <a 
              href="https://wa.me/919655933484" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center h-14 px-8 rounded-2xl bg-[#25D366] text-white font-bold text-lg hover:shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:-translate-y-1 transition-all"
            >
              Request Photos on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
