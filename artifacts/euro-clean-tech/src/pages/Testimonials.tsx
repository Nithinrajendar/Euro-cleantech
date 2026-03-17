import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MapPin } from "lucide-react";
import { useState } from "react";

const REVIEWS = [
  {
    name: "Ramesh Kumar",
    location: "Ramanathapuram, Coimbatore",
    date: "Oct 2023",
    rating: 5,
    city: "Coimbatore",
    text: "Extremely professional service. They arrived on time, brought all their own equipment, and cleaned our 10,000-liter underground sump thoroughly. The UV sterilization step is fantastic.",
  },
  {
    name: "Priya Senthil",
    location: "Peelamedu",
    date: "Nov 2023",
    rating: 5,
    city: "Coimbatore",
    text: "We used to hire local cleaners who just used bleaching powder. Euro Clean Tech's mechanized process is completely different. The water feels so much cleaner and safer now. Highly recommended!",
  },
  {
    name: "Tirupur Garments Mfg.",
    location: "Industrial Estate",
    date: "Dec 2023",
    rating: 5,
    city: "Tirupur",
    text: "Handling our factory's massive water reservoirs is tough, but these guys have the right high-pressure jets and industrial vacuums. They finished the job quickly without disrupting our operations.",
  },
  {
    name: "Karthik Rajan",
    location: "Saibaba Colony",
    date: "Jan 2024",
    rating: 4,
    city: "Coimbatore",
    text: "Very neat work. They cleaned our overhead syntax tanks. The staff was polite and explained the 7-step process clearly before starting. Will definitely use them annually.",
  },
  {
    name: "Lakshmi Apartments Assoc.",
    location: "RS Puram",
    date: "Feb 2024",
    rating: 5,
    city: "Coimbatore",
    text: "As an apartment association, we are very careful about whom we hire. Euro Clean Tech provided an excellent invoice, followed all safety protocols, and left our main sump spotless.",
  },
  {
    name: "Manoj V.",
    location: "Trichy Center",
    date: "Mar 2024",
    rating: 5,
    city: "Trichy",
    text: "Glad they have a branch in Trichy now. Used their floor scrubbing service along with tank cleaning. The mosaic floors in our old house look brand new. Excellent machinery.",
  }
];

const CITIES = ["All", "Coimbatore", "Tirupur", "Trichy"];

export default function Testimonials() {
  const [activeCity, setActiveCity] = useState("All");

  const filteredReviews = activeCity === "All"
    ? REVIEWS
    : REVIEWS.filter(r => r.city === activeCity);

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Helmet>
        <title>Customer Reviews – Euro Clean Tech Water Tank Cleaning Coimbatore</title>
        <meta name="description" content="Read verified customer reviews for Euro Clean Tech. 10,000+ happy customers across Coimbatore, Tirupur, Trichy & Mettupalayam." />
        <link rel="canonical" href="https://www.eurocleantech.in/testimonials" />
      </Helmet>

      {/* Hero Quote */}
      <section className="pt-40 pb-24 text-white text-center relative overflow-hidden bg-gradient-to-br from-[#1a3a6e] via-primary to-[#1a6e5a]">
        {/* Radial glow centers */}
        <div className="absolute top-0 left-1/2 w-[700px] h-[400px] bg-white/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/25 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        {/* Concentric rings */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 w-[750px] h-[750px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] border border-white/[0.03] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        {/* Floating dots */}
        <div className="absolute top-20 left-16 w-3 h-3 bg-white/20 rounded-full pointer-events-none"></div>
        <div className="absolute top-36 left-32 w-2 h-2 bg-secondary/40 rounded-full pointer-events-none"></div>
        <div className="absolute top-24 right-20 w-4 h-4 bg-white/15 rounded-full pointer-events-none"></div>
        <div className="absolute top-44 right-36 w-2 h-2 bg-secondary/30 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-16 left-1/4 w-3 h-3 bg-white/10 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-24 right-1/4 w-2 h-2 bg-secondary/25 rounded-full pointer-events-none"></div>
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-px pointer-events-none">
          <svg viewBox="0 0 1440 80" className="w-full h-10 fill-current text-[#f8f9ff]" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <Quote className="w-16 h-16 mx-auto mb-8 text-secondary opacity-80" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-8 leading-tight drop-shadow-sm">
            "The water feels so much cleaner and safer now."
          </h1>
          <p className="text-xl text-white/80 font-medium">
            Join over 10,000 satisfied families and businesses who trust us with their health.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CITIES.map(city => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCity === city
                    ? "bg-foreground text-white shadow-md"
                    : "bg-white border border-border text-foreground hover:border-foreground/50"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review, i) => (
              <Card key={i} className="h-full border-0 shadow-lg rounded-[32px] overflow-hidden group bg-white hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300">
                <div className="h-2 w-full bg-gradient-to-r from-primary to-secondary opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-8 flex flex-col h-full relative">
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-muted/50 group-hover:text-primary/10 transition-colors" />

                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-5 h-5 ${idx < review.rating ? 'fill-amber-400 text-amber-400' : 'text-muted'}`}
                      />
                    ))}
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-8 flex-grow text-lg relative z-10">
                    "{review.text}"
                  </p>

                  <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-foreground font-display text-lg">{review.name}</h4>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3 mr-1" /> {review.location}
                      </div>
                    </div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      {review.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Google Review CTA */}
          <div className="mt-24 text-center bg-white p-12 rounded-[40px] shadow-2xl border border-border/50 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black font-display mb-4">Are you a happy customer?</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
                Your feedback helps us maintain our high quality standards and helps others find reliable cleaning services.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center h-14 px-10 rounded-2xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Leave a Review on Google
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
