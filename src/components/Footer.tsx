import { Bot, BotMessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center ">
              <BotMessageSquare className="w-8 h-8 animate-pulse decoration-amber-100" />
            </div>
          </div>
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            <Link
              to={"/solutions"}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Solutions
            </Link>
            <a
              href="/#approach"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Approche
            </a>
            <a
              href="/#security"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Sécurité
            </a>
            <a
              href="/#contact"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2024 ghali.cloud . Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
