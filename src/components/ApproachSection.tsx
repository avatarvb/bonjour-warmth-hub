import { Puzzle, GitBranch, TrendingUp } from "lucide-react";
import { ScrollReveal, ScaleReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

const approaches = [
  {
    icon: Puzzle,
    title: "Personnalisé",
    description: "Chaque projet est conçu selon vos enjeux métiers spécifiques et vos objectifs stratégiques.",
  },
  {
    icon: GitBranch,
    title: "Intégré",
    description: "Nos solutions s'intègrent parfaitement à votre écosystème existant : CRM, ERP, outils internes.",
  },
  {
    icon: TrendingUp,
    title: "Évolutif",
    description: "Une architecture pensée pour accompagner votre croissance et s'adapter à vos besoins futurs.",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <ScrollReveal direction="left">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Notre Approche
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Une approche{" "}
              <span className="gradient-text">sur mesure</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nous ne proposons pas de solutions génériques. Chaque projet est unique et mérite 
              une attention particulière pour garantir un impact réel et mesurable sur votre activité.
            </p>

            <div className="space-y-6">
              {approaches.map((approach, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary border border-border/50 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                    <approach.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1 text-foreground">
                      {approach.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {approach.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Visual */}
          <ScaleReveal delay={0.2}>
            <div className="relative">
              {/* Main Card */}
              <div className="relative z-10 p-8 rounded-3xl bg-gradient-to-br from-card to-secondary/30 border border-border/50 card-glow">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="relative z-10">
                  <div className="w-full h-64 rounded-2xl bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/5 flex items-center justify-center border border-primary/10">
                    <div className="text-center">
                      <motion.div 
                        className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center glow-effect"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </motion.div>
                      <p className="text-muted-foreground font-medium">Agent IA personnalisé</p>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 rounded-xl bg-secondary/50 border border-border/30">
                      <div className="font-heading text-2xl font-bold text-primary">3x</div>
                      <div className="text-xs text-muted-foreground">Plus rapide</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-secondary/50 border border-border/30">
                      <div className="font-heading text-2xl font-bold text-primary">-40%</div>
                      <div className="text-xs text-muted-foreground">Coûts réduits</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-secondary/50 border border-border/30">
                      <div className="font-heading text-2xl font-bold text-primary">100%</div>
                      <div className="text-xs text-muted-foreground">Personnalisé</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            </div>
          </ScaleReveal>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
