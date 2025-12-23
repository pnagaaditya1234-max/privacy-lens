import { AlertTriangle, Clock, Scale } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Accidental Data Leaks",
    description: "Sensitive information like phone numbers, emails, and ID numbers often slip through unnoticed in documents shared internally or externally, leading to costly breaches.",
  },
  {
    icon: Clock,
    title: "Manual Checking is Slow",
    description: "Reviewing documents manually for PII is time-consuming, error-prone, and doesn't scale. Human oversight can miss critical data points under pressure.",
  },
  {
    icon: Scale,
    title: "Compliance & Legal Risks",
    description: "GDPR, CCPA, and other regulations mandate strict data protection. Non-compliance can result in hefty fines and reputational damage.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">The Challenge</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Data Privacy is More Critical Than Ever
          </h2>
          <p className="text-lg text-muted-foreground">
            Organizations face increasing challenges in protecting sensitive information as data volumes grow exponentially.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
