import { useState } from "react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    id: "aiml",
    title: "AI / Machine Learning",
    skills: [
      "Logistic Regression", "Random Forest", "XGBoost", "SVM",
      "CNNs", "LSTMs", "GANs", "Autoencoders",
      "Tokenization", "Edit Distance", "Language Models", "Text Classification",
      "OCR–NLP Pipelines", "ROC-AUC", "F1 Score", "Precision-Recall",
      "Feature Engineering", "SMOTE", "Imbalanced Learning", "Explainability"
    ]
  },
  {
    id: "applied",
    title: "Applied AI Systems",
    skills: [
      "OCR-based Document Intelligence",
      "Model Routing & Inference Pipelines",
      "RAG Architectures",
      "Rule-based + ML Hybrid Systems",
      "Layout-aware Extraction",
      "Multi-stage Inference"
    ]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    skills: [
      "Python", "FastAPI", "REST APIs",
      "System Design", "Inference Optimization",
      "Database Integration", "PostgreSQL"
    ]
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      "HTML", "CSS", "JavaScript",
      "React", "TypeScript", "Tailwind CSS",
      "Responsive Design"
    ]
  },
  {
    id: "fundamentals",
    title: "CS Fundamentals",
    skills: [
      "Data Structures", "Algorithms",
      "Competitive Programming", "OOP",
      "Operating Systems", "DBMS",
      "Python", "Java"
    ]
  }
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("aiml");

  const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-24 bg-secondary/20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">
              Core competencies across the AI/ML and software development stack
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-lg font-display text-sm transition-all duration-200",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {activeSkills.map((skill, index) => (
              <span
                key={skill}
                className="skill-tag animate-fade-up"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* All categories overview */}
          <div className="mt-16 grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className={cn(
                  "p-4 rounded-lg border transition-all duration-200 cursor-pointer",
                  activeCategory === category.id
                    ? "border-primary bg-primary/5"
                    : "border-border/50 bg-card/50 hover:border-primary/30"
                )}
                onClick={() => setActiveCategory(category.id)}
              >
                <h4 className="font-display font-medium text-sm text-foreground mb-1">
                  {category.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {category.skills.length} skills
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
