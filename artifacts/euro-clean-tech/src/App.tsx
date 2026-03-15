import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { HelmetProvider, Helmet } from "react-helmet-async";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { FloatingWhatsApp, MobileCallBar } from "./components/layout/FloatingContact";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/not-found";

const queryClient = new QueryClient();

// Scroll to top on route change
function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/process" component={Process} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Euro Clean Tech",
          "description": "Professional water tank cleaning service in Coimbatore",
          "telephone": "+919655933484",
          "email": "info@eurocleantech.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "108, Pankaja Mill Road, Ramanathapuram",
            "addressLocality": "Coimbatore",
            "postalCode": "641045",
            "addressCountry": "IN"
          },
          "areaServed": ["Coimbatore", "Tirupur", "Trichy", "Mettupalayam"],
          "serviceType": ["Water Tank Cleaning", "Underground Tank Cleaning", "Overhead Tank Cleaning", "Industrial Tank Cleaning"]
        })}</script>
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen font-sans">
              <Navbar />
              <main className="flex-grow">
                <Router />
              </main>
              <Footer />
              <FloatingWhatsApp />
              <MobileCallBar />
            </div>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
