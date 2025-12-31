import { Button } from "@/components/ui/button";
import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center glow-effect">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              AgentIA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              Solutions
            </a>
            <a href="#approach" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              Approche
            </a>
            <a href="#security" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              Sécurité
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg">
              Discutons de votre projet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Solutions
              </a>
              <a href="#approach" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Approche
              </a>
              <a href="#security" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Sécurité
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Contact
              </a>
              <Button variant="hero" className="mt-2">
                Discutons de votre projet
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
