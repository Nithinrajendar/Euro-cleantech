import { PageHeader } from "@/components/ui/PageHeader";
import { motion } from "framer-motion";

const IMAGES = [
  { url: "https://images.unsplash.com/photo-1542013936693-884638332954?w=800&q=80", title: "Industrial Tank Cleaning", category: "Industrial" },
  { url: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&q=80", title: "High Pressure Jetting", category: "Process" },
  { url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80", title: "Overhead Tank Inspection", category: "Residential" },
  { url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", title: "Floor Scrubbing", category: "Housekeeping" },
  { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80", title: "Mechanized Dewatering", category: "Process" },
  { url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80", title: "Clean Water Output", category: "Result" },
];

export default function Gallery() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Our Work Gallery" 
        description="See our professional team and advanced equipment in action."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGES.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-muted"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-1 block">
                    {img.category}
                  </span>
                  <h3 className="text-white text-xl font-bold font-display">
                    {img.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Want to see the difference for yourself?</p>
            <a href="https://wa.me/919655933484" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-[#25D366] text-white font-bold hover:shadow-lg hover:-translate-y-1 transition-all">
              Request Before/After Photos on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
