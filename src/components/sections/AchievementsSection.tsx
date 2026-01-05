import { Trophy, Award, Package, Users, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Runner-up, HackOdisha 5",
    description: "2nd place among 500+ teams with TrackGuard railway safety system",
    category: "Hackathon"
  },
  {
    icon: Award,
    title: "Top 30 Finalist, Hack4Safety",
    description: "National-level safety hackathon at NIT Rourkela",
    category: "Hackathon"
  },
  {
    icon: Package,
    title: "Published Open-Source Library",
    description: "MicroEDA — Python library for fast data profiling, available on PyPI",
    category: "Open Source"
  },
  {
    icon: Star,
    title: "Smart India Hackathon Finalist",
    description: "Selected for SIH 2024-25 national-level innovation challenge",
    category: "Hackathon"
  },
  {
    icon: Star,
    title: "IIT Kharagpur Kshitij Finalist",
    description: "Technical fest hackathon finalist (2023-24)",
    category: "Hackathon"
  },
  {
    icon: Users,
    title: "Open Source Contributor",
    description: "Active contributor at Open Source Connect India 2025 & GSSOC 2025",
    category: "Open Source"
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="section-title">Achievements & Recognition</h2>
            <p className="section-subtitle">
              Hackathon wins, publications, and community contributions
            </p>
          </div>

          {/* Achievements grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="group card-elevated rounded-xl border border-border/50 p-6 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <achievement.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      {achievement.category}
                    </span>
                    <h3 className="font-display font-semibold text-foreground mt-1 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
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

export default AchievementsSection;
