import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: "shadowfox",
    role: "AI/ML Intern",
    company: "ShadowFOX",
    period: "September 2025",
    location: "Remote",
    description: [
      "Built supervised ML models for credit risk assessment using ensemble methods",
      "Applied feature engineering techniques and SMOTE for handling imbalanced datasets",
      "Achieved ROC-AUC score of 0.81 and F1-score of 0.77 on production data",
      "Developed a real-time NLP-based autocorrect system with edit distance algorithms"
    ],
    technologies: ["Python", "Scikit-learn", "XGBoost", "NLP", "SMOTE"]
  },
  {
    id: "edunet",
    role: "AI Research Intern",
    company: "Edunet Foundation",
    subtitle: "Microsoft & SAP CSR Initiative",
    period: "February 2025 – March 2025",
    location: "Remote",
    description: [
      "Designed OCR-based document intelligence pipelines for automated data extraction",
      "Improved structured extraction accuracy by 10-15% through layout-aware processing",
      "Implemented dynamic model-routing with explainability checks for enterprise use",
      "Collaborated with research team on responsible AI practices in document processing"
    ],
    technologies: ["OCR", "Document AI", "Python", "Model Routing", "Explainability"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              Professional experience in AI/ML research and development
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                
                {/* Content card */}
                <div className="card-elevated rounded-xl border border-border/50 p-6 ml-4">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">
                        {exp.company}
                        {exp.subtitle && (
                          <span className="text-muted-foreground font-normal"> — {exp.subtitle}</span>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
