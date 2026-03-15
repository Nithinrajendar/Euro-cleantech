import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Ramesh Kumar",
    location: "Ramanathapuram, Coimbatore",
    rating: 5,
    text: "Extremely professional service. They arrived on time, brought all their own equipment, and cleaned our 10,000-liter underground sump thoroughly. The UV sterilization step is fantastic.",
  },
  {
    name: "Priya Senthil",
    location: "Peelamedu",
    rating: 5,
    text: "We used to hire local cleaners who just used bleaching powder. Euro Clean Tech's mechanized process is completely different. The water feels so much cleaner and safer now. Highly recommended!",
  },
  {
    name: "Tirupur Garments Mfg.",
    location: "Tirupur Industrial Estate",
    rating: 5,
    text: "Handling our factory's massive water reservoirs is tough, but these guys have the right high-pressure jets and industrial vacuums. They finished the job quickly without disrupting our operations.",
  },
  {
    name: "Karthik Rajan",
    location: "Saibaba Colony",
    rating: 4,
    text: "Very neat work. They cleaned our overhead syntax tanks. The staff was polite and explained the 7-step process clearly before starting. Will definitely use them annually.",
  },
  {
    name: "Lakshmi Apartments Association",
    location: "RS Puram",
    rating: 5,
    text: "As an apartment association, we are very careful about whom we hire. Euro Clean Tech provided an excellent invoice, followed all safety protocols, and left our main sump spotless.",
  },
  {
    name: "Manoj V.",
    location: "Trichy",
    rating: 5,
    text: "Glad they have a branch in Trichy now. Used their floor scrubbing service along with tank cleaning. The mosaic floors in our old house look brand new. Excellent machinery.",
  }
];

export default function Testimonials() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <PageHeader 
        title="Client Testimonials" 
        description="Don't just take our word for it. Here's what our 10,000+ satisfied customers have to say."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-border/50 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden group">
                  <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                    <Quote className="w-12 h-12" />
                  </div>
                  <CardContent className="p-8 flex flex-col h-full relative z-10">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, idx) => (
                        <Star 
                          key={idx} 
                          className={`w-5 h-5 ${idx < review.rating ? 'fill-secondary text-secondary' : 'text-muted'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-foreground/80 leading-relaxed mb-8 flex-grow italic">
                      "{review.text}"
                    </p>
                    <div className="mt-auto">
                      <h4 className="font-bold text-foreground font-display">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Google Review CTA */}
          <div className="mt-20 text-center bg-white p-10 rounded-3xl shadow-lg border border-border/50 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold font-display mb-4">Are you a happy customer?</h3>
            <p className="text-muted-foreground mb-8">We value your feedback! It helps us maintain our quality standards and helps others find reliable cleaning services.</p>
            <a 
              href="#" 
              className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Leave a Review on Google
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
