import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Brain, Shield, Train, Eye, Vote, BarChart3 } from "lucide-react";

const projects = [
  {
    id: "sanavicare",
    title: "SanaviCare",
    tagline: "AI-based Health Diagnosis & Document Intelligence",
    description: "OCR-driven medical report parsing with layout-aware extraction. Multi-stage inference pipeline with focus on explainability and responsible AI for healthcare applications.",
    icon: Brain,
    technologies: ["Python", "OCR", "NLP", "Deep Learning", "FastAPI"],
    github: "https://github.com/SaptarshiMondal123/Sanavicare",
    featured: true
  },
  {
    id: "prismiq",
    title: "Prismiq",
    tagline: "Intelligent Anomaly Detection & Prediction System",
    description: "Hybrid rule-based + ML validation pipeline with sanity-check driven correctness verification. Built for production-grade anomaly detection in complex systems.",
    icon: Shield,
    technologies: ["Machine Learning", "Anomaly Detection", "Python", "Validation Pipelines"],
    github: "https://github.com/SaptarshiMondal123/Prismiq",
    featured: true
  },
  {
    id: "trackguard",
    title: "TrackGuard",
    tagline: "AI-Powered Railway Safety System",
    description: "Vision + ML-based safety analysis for railway hazard detection. Runner-up at HackOdisha 5 among 500+ teams. Real-time obstacle and track-fault detection.",
    icon: Train,
    technologies: ["Computer Vision", "YOLO", "Python", "Real-time Detection"],
    github: "https://github.com/SaptarshiMondal123/TrackGuard",
    featured: true,
    achievement: "🏆 Runner-up, HackOdisha 5"
  },
  {
    id: "copsight",
    title: "CopSight",
    tagline: "Police Assistance & Monitoring Application",
    description: "Safety-centric system design for law enforcement assistance. Focus on reliable monitoring and communication systems.",
    icon: Eye,
    technologies: ["System Design", "Mobile", "Safety Systems"],
    github: "https://github.com/SaptarshiMondal123/copsight-police-app",
    featured: false
  },
  {
    id: "echodao",
    title: "EchoDAO",
    tagline: "Decentralized Verified Social Issue Reporting",
    description: "AI verification + DAO governance for transparent social issue reporting. Transparency-first design with blockchain-based verification.",
    icon: Vote,
    technologies: ["Blockchain", "AI Verification", "DAO", "Web3"],
    github: "https://github.com/SaptarshiMondal123/Echo-DAO",
    featured: false
  },
  {
    id: "microeda",
    title: "MicroEDA",
    tagline: "Open-Source Python Library for Fast Data Profiling",
    description: "Published on PyPI with comprehensive documentation. Enables rapid exploratory data analysis with minimal code. Includes Medium technical guide.",
    icon: BarChart3,
    technologies: ["Python", "PyPI", "Data Analysis", "Open Source"],
    github: "https://github.com/SaptarshiMondal123/microeda",
    featured: true,
    achievement: "📦 Published on PyPI"
  }
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              End-to-end AI systems built for real-world impact
            </p>
          </div>

          {/* Featured projects grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group card-elevated rounded-xl border border-border/50 overflow-hidden hover-lift"
              >
                {/* Project header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <project.icon className="w-6 h-6" />
                    </div>
                    {project.achievement && (
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                        {project.achievement}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="px-6 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="px-6 pb-6 pt-2 border-t border-border/30">
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                      <ExternalLink className="w-3 h-3 ml-auto" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Other projects */}
          <div className="mt-12">
            <h3 className="font-display text-lg font-medium text-foreground mb-6 text-center">
              More Projects
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-secondary text-secondary-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <project.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-medium text-foreground">{project.title}</h4>
                    <p className="text-sm text-muted-foreground truncate">{project.tagline}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
