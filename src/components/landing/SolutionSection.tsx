import { Brain, Cpu, Fingerprint, Sparkles } from "lucide-react";

const technologies = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Cpu, label: "Natural Language Processing" },
  { icon: Fingerprint, label: "Pattern Matching" },
  { icon: Sparkles, label: "Smart Detection" },
];

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">The Solution</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
              Intelligent PII Detection & Masking
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              PrivacyLens automatically scans your documents and text to identify sensitive personal information. 
              Our AI-powered engine detects patterns across multiple PII types and instantly masks them 
              to ensure your data remains protected.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <tech.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{tech.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12 border border-border">
              {/* Mock document visualization */}
              <div className="bg-card rounded-xl p-6 shadow-lg mb-6">
                <div className="space-y-3">
                  <div className="h-3 bg-muted rounded w-3/4" />
                  <div className="h-3 bg-muted rounded w-full" />
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Email:</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-md text-sm font-mono">
                      ████@████.com
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded w-5/6" />
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Phone:</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-md text-sm font-mono">
                      +91 ████████89
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded w-2/3" />
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Aadhaar:</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-md text-sm font-mono">
                      ████ ████ ████
                    </span>
                  </div>
                </div>
              </div>

              {/* Detection badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-success text-success-foreground rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                3 PII Detected & Masked
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
