import { Star, Quote } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Directrice Innovation",
    company: "TechCorp",
    content: "L'agent IA déployé par AgentIA a révolutionné notre service client. Nous avons réduit nos temps de réponse de 80% tout en améliorant la satisfaction client.",
    rating: 5,
    image: "MD",
  },
  {
    name: "Thomas Bernard",
    role: "CEO",
    company: "StartupFlow",
    content: "Une approche vraiment sur mesure. L'équipe a compris nos enjeux métiers et a livré un agent parfaitement adapté à nos besoins. ROI visible dès le premier mois.",
    rating: 5,
    image: "TB",
  },
  {
    name: "Sophie Martin",
    role: "Responsable RH",
    company: "GroupeVision",
    content: "Notre assistant RH gère désormais 70% des demandes collaborateurs de manière autonome. Un gain de temps considérable pour nos équipes.",
    rating: 5,
    image: "SM",
  },
];

const partners = [
  { name: "TechCorp", initials: "TC" },
  { name: "StartupFlow", initials: "SF" },
  { name: "GroupeVision", initials: "GV" },
  { name: "InnoLab", initials: "IL" },
  { name: "DataPrime", initials: "DP" },
  { name: "CloudNex", initials: "CN" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Témoignages
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ils nous font{" "}
            <span className="gradient-text">confiance</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Découvrez comment nos agents intelligents transforment le quotidien de nos clients 
            et génèrent un impact mesurable sur leur activité.
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20" staggerDelay={0.15}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 card-glow h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-2 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/20 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6 pt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Partners Section */}
        <ScrollReveal className="text-center">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-8">
            Entreprises qui nous font confiance
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 lg:gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary/30 border border-border/30 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/20 flex items-center justify-center text-primary font-heading font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                  {partner.initials}
                </div>
                <span className="font-heading font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>

        {/* Stats Banner */}
        <ScrollReveal delay={0.2} className="mt-16">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-card via-secondary/30 to-card border border-border/50">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-heading text-4xl lg:text-5xl font-bold gradient-text mb-2">+150%</div>
                <div className="text-muted-foreground">Productivité moyenne</div>
              </div>
              <div>
                <div className="font-heading text-4xl lg:text-5xl font-bold gradient-text mb-2">-60%</div>
                <div className="text-muted-foreground">Temps de traitement</div>
              </div>
              <div>
                <div className="font-heading text-4xl lg:text-5xl font-bold gradient-text mb-2">98%</div>
                <div className="text-muted-foreground">Taux de satisfaction</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
