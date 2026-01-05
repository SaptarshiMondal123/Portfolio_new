import { Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 Saptarshi Mondal</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-destructive" /> for impact
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SaptarshiMondal123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@saptarshi.dev"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
