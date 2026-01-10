import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Cherry } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <Cherry className="mx-auto mb-4 text-primary size-12" />
        <h1 className="mb-4 text-4xl font-bold text-primary">404</h1>
        <p className="mb-4 text-2xl text-muted-foreground">
          Oops! Page introuvable
        </p>
        <a href="/" className="hover:text-primary/90 size-lg text-primary">
          Retour à la page d'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
