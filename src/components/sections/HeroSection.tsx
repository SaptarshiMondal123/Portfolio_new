import { Button } from "@/components/ui/button";
import { Github, Mail, ArrowDown, ExternalLink } from "lucide-react";
import portraitImage from "@/assets/saptarshi-portrait.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          {/* Left side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Status badge */}
            <div className="animate-fade-up mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Open to opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="animate-fade-up-delay-1 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              <span className="text-foreground">Saptarshi</span>{" "}
              <span className="text-gradient">Mondal</span>
            </h1>

            {/* Role */}
            <p className="animate-fade-up-delay-2 font-display text-lg md:text-xl text-primary mb-6 tracking-wide">
              AI/ML Engineer • Applied Deep Learning • Full-Stack Developer
            </p>

            {/* Tagline */}
            <p className="animate-fade-up-delay-3 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Building intelligent systems that work in the real world — from data to deployment.
              Focused on document intelligence, OCR–NLP pipelines, and scalable AI solutions.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://github.com/SaptarshiMondal123" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  <Mail className="mr-2 w-4 h-4" />
                  Contact
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Portrait */}
          <div className="animate-fade-up order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem]">
              {/* Image container with gradient overlay */}
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img 
                  src={portraitImage} 
                  alt="Saptarshi Mondal - AI/ML Engineer" 
                  className="w-full h-full object-cover object-top grayscale"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
              </div>
              {/* Subtle border glow */}
              <div className="absolute -inset-px rounded-lg bg-gradient-to-b from-primary/20 via-transparent to-primary/10 -z-10 blur-sm" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
