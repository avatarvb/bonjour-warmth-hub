import { Shield, Lock, Gauge, Eye } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const features = [
  {
    icon: Shield,
    title: "Sécurité des données",
    description: "Protection avancée de vos données sensibles avec des protocoles de sécurité de niveau entreprise.",
  },
  {
    icon: Lock,
    title: "Confidentialité",
    description: "Respect strict des réglementations (RGPD) et garantie de confidentialité de vos informations.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Infrastructure optimisée pour des temps de réponse rapides et une disponibilité maximale.",
  },
  {
    icon: Eye,
    title: "Supervision",
    description: "Gardez le contrôle total sur vos agents avec des outils de monitoring et de supervision avancés.",
  },
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Fiabilité & Sécurité
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Vous gardez le{" "}
            <span className="gradient-text">contrôle</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nos solutions respectent les meilleures pratiques en matière de sécurité, confidentialité 
            et performance. Bénéficiez de la puissance de l'IA tout en gardant le contrôle total.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-500 text-center h-full">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust Banner */}
        <ScrollReveal delay={0.3} className="mt-16">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 border border-primary/20 text-center">
            <p className="text-lg text-foreground font-medium mb-2">
              🔐 Infrastructure certifiée et conforme aux standards internationaux
            </p>
            <p className="text-muted-foreground">
              Hébergement sécurisé • Chiffrement de bout en bout • Audits réguliers
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SecuritySection;
