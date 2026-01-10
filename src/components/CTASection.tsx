import { Button } from "@/components/ui/button";
import { Coffee, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">
                Prêt à transformer votre entreprise ?
              </span>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Transformez votre vision en{" "}
              <span className="gradient-text">solutions intelligentes</span>
            </h2>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Que vous soyez une startup, une PME ou une grande entreprise, nous
              vous aidons à passer de l'idée à l'agent intelligent opérationnel,
              rapidement et efficacement.
            </p>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal delay={0.3}>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 mb-10 max-w-2xl mx-auto">
              <p className="text-foreground text-lg font-medium italic">
                "L'intelligence artificielle n'est plus un concept, c'est un
                levier stratégique."
              </p>
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/discuss"
                className="text-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
              >
                Discutons de votre projet
                <Coffee className="float-end ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Button variant="glass" className=" rounded-none px-5">
                Demander une démo
              </Button>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.5}>
            <div className="mt-12 pt-8 border-t border-border/30">
              <p className="text-muted-foreground mb-4">
                Ou contactez-nous directement
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
                <a
                  href="mailto:contact@ghali.cloud"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  contact@ghali.cloud
                </a>
                <span className="hidden sm:block text-border">•</span>
                <a
                  href="tel:+212610061591"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  +212 6 10 06 15 91
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
