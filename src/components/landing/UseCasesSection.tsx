import { Users, Code, Building2, GraduationCap } from "lucide-react";

const useCases = [
  {
    icon: Users,
    title: "HR Resume Screening",
    description: "Screen resumes and candidate documents while automatically masking personal details to ensure unbiased hiring processes.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Code,
    title: "Developer Workflows",
    description: "Scan code logs, configuration files, and documentation to prevent accidental exposure of credentials and personal data.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Building2,
    title: "Enterprise Reports",
    description: "Share internal and external reports securely by masking sensitive client and employee information before distribution.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: GraduationCap,
    title: "Educational Use",
    description: "Students and researchers can learn about data privacy concepts while working with safely anonymized datasets.",
    color: "bg-orange-500/10 text-orange-600",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Use Cases</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Built for Every Industry
          </h2>
          <p className="text-lg text-muted-foreground">
            From startups to enterprises, PrivacyLens adapts to your data protection needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group flex gap-6 p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${useCase.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <useCase.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
