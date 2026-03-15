import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
  imagePath?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* CSS gradient background — no external image needed */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 -left-10 w-64 h-64 rounded-full bg-secondary/10 blur-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
        >
          {title}
        </motion.h1>
        
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
