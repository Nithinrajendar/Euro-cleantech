import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
  imagePath?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  const [location] = useLocation();
  const pathSegments = location.split("/").filter(Boolean);

  return (
    <div className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-primary">
      {/* Deep sapphire blue background with subtle grid and waves */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
        
        {/* Wave SVG Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto text-background fill-current drop-shadow-sm" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Breadcrumb Navigation */}
        <nav className="flex justify-center mb-6">
          <ol className="flex items-center space-x-2 text-sm text-white/70 font-medium">
            <li>
              <Link href="/" className="hover:text-white transition-colors flex items-center">
                <Home className="w-4 h-4 mr-1" /> Home
              </Link>
            </li>
            {pathSegments.map((segment, index) => {
              const isLast = index === pathSegments.length - 1;
              const formattedSegment = segment.charAt(0).toUpperCase() + segment.slice(1);
              const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

              return (
                <li key={segment} className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1" />
                  {isLast ? (
                    <span className="text-secondary">{formattedSegment}</span>
                  ) : (
                    <Link href={path} className="hover:text-white transition-colors">
                      {formattedSegment}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight drop-shadow-sm"
        >
          {title}
        </motion.h1>
        
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
