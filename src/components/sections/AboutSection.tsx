import { Brain, Code2, Layers, Target } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI/ML Focus",
    description: "Deep expertise in machine learning, neural networks, and applied AI systems"
  },
  {
    icon: Layers,
    title: "End-to-End Builder",
    description: "From data pipelines to production deployment, building complete solutions"
  },
  {
    icon: Code2,
    title: "Full-Stack Capable",
    description: "Python, FastAPI backends with React frontends for technical products"
  },
  {
    icon: Target,
    title: "Research-Driven",
    description: "Focus on explainability, responsible AI, and real-world impact"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Computer Science Engineering student with a deep focus on building intelligent systems
            </p>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-foreground/90 text-lg leading-relaxed">
                I'm a Computer Science Engineering student deeply focused on <span className="text-primary font-medium">AI/ML and Deep Learning</span>. 
                My work centers on building practical, production-grade systems that solve real problems — not just toy models or demos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My core interests include <span className="text-foreground">document intelligence</span>, OCR–NLP pipelines, 
                RAG architectures, anomaly detection systems, and responsible AI practices. I believe in the builder mindset: 
                taking projects from initial concept through data engineering, model development, and finally to deployment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Long-term, I'm working toward contributing to impactful research, building scalable AI systems, 
                and participating in national and global-level innovation. I'm particularly drawn to applications in 
                healthcare, safety systems, and civic technology.
              </p>
              
              {/* Quick stats */}
              <div className="flex flex-wrap gap-8 pt-6 border-t border-border">
                <div>
                  <p className="text-3xl font-display font-bold text-primary">6+</p>
                  <p className="text-sm text-muted-foreground">Major Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">2</p>
                  <p className="text-sm text-muted-foreground">AI Internships</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Hackathon Finals</p>
                </div>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="card-elevated p-6 rounded-lg border border-border/50 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
