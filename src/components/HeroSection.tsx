import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Bot, Zap } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-32 right-[15%] hidden lg:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
          <Bot className="w-8 h-8 text-primary" />
        </div>
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-[10%] hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-orange-500/20 border border-accent/30 flex items-center justify-center backdrop-blur-sm">
          <Zap className="w-7 h-7 text-accent" />
        </div>
      </motion.div>
      <motion.div 
        className="absolute top-1/2 right-[8%] hidden xl:block"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-secondary/50 border border-border flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border/50 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Agence d'Intelligence Artificielle</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            Des{" "}
            <span className="gradient-text">Agents Intelligents</span>
            <br />
            au cœur de vos opérations
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Nous accompagnons les entreprises dans leur transformation digitale grâce à des agents IA 
            capables d'automatiser, d'assister et d'optimiser vos processus métier complexes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="xl" className="group">
              Découvrir nos solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl">
              Voir une démo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30"
          >
            <div className="text-center">
              <div className="font-heading text-3xl sm:text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction client</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl sm:text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Agents déployés</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl sm:text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Disponibilité</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
