import { Button } from "@/components/ui/button";
import { Bot, BotMessageSquare, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center ">
              <BotMessageSquare className="w-8 h-8 decoration-amber-100" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              <Link to={"/"}>ghali.cloud</Link>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to={"/solutions"}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Solutions
            </Link>
            {/* <a
              href="/solutions"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            > 
              Solutions
            </a>*/}
            <a
              href="#approach"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Approche
            </a>
            <a
              href="#security"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Sécurité
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              to="/solutions"
              className="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Découvrir nos solutions
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {/* <a
                href="#services"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
              >Solutions</a> */}
              <Link to={"/solutions"}>Solutions</Link>
              <a
                href="#approach"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Approche
              </a>
              <a
                href="#security"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Sécurité
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Contact
              </a>
              <Link
                to="/discuss"
                className="text-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
              >
                Discutons de votre projet
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
