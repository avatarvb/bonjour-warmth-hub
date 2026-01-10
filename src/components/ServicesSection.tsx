import {
  Search,
  MessageSquare,
  Calendar,
  Cog,
  PencilRuler,
  ScanLine,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const services = [
  {
    icon: ScanLine,
    title: "OCR – Optical Character Recognition",
    description:
      "Transformez vos documents scannés en texte exploitable grâce à notre technologie OCR avancée.",
    features: ["Numérisation Documents", "Factures", "Contrats"],
  },
  {
    icon: Search,
    title: "RAG – Retrieval Augmented Generation",
    description:
      "Exploitez vos bases de connaissances internes pour fournir des réponses fiables, contextualisées et à jour.",
    features: ["Documents internes", "FAQ dynamiques", "Bases métiers"],
  },
  {
    icon: MessageSquare,
    title: "Agents d'assistance intelligente",
    description:
      "Des assistants IA capables de répondre aux questions, assister vos équipes et améliorer l'expérience utilisateur 24/7.",
    features: ["Support client", "Assistance RH/IT", "Commerce"],
  },
  {
    icon: Calendar,
    title: "Gestion intelligente des rendez-vous",
    description:
      "Automatisez la prise, la modification et le suivi des rendez-vous grâce à des agents capables de dialoguer naturellement.",
    features: ["Dialogue naturel", "Sync agendas", "Réduction tâches"],
  },
  {
    icon: Cog,
    title: "Automatisation de processus",
    description:
      "Orchestrez des workflows complets : collecte d'informations, analyse, prise de décision et action automatisée.",
    features: ["Workflows complets", "Supervision", "Sécurité"],
  },
  {
    icon: PencilRuler,
    title: "Solution adaptée à votre besoin",
    description:
      "Votre journée parfois semble très longue : des tâches répétitives, épuisantes, laissez des agents Intelligents rendre les choses plus simples et faciles.",
    features: [
      "Archivage",
      "Interprété des demandes",
      "Numérisation des dossiers",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Nos Solutions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Des solutions IA <span className="gradient-text">sur mesure</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nos agents intelligents sont conçus pour agir, comprendre et
            interagir de manière autonome. Chaque agent est pensé comme un
            collaborateur numérique intégré à vos outils existants.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          staggerDelay={0.15}
        >
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 card-glow hover:shadow-xl h-full">
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl lg:text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 text-sm bg-secondary/50 text-muted-foreground rounded-full border border-border/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
