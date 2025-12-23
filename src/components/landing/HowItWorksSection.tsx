import { Upload, Scan, Download, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your File",
    description: "Upload text content or documents (PDF, Word, Excel) that you want to scan for sensitive information.",
  },
  {
    icon: Scan,
    number: "02",
    title: "AI Scans & Identifies",
    description: "Our AI engine analyzes your content and identifies all types of PII including emails, phone numbers, and ID numbers.",
  },
  {
    icon: Download,
    number: "03",
    title: "Download Safe Output",
    description: "Get your masked document with all sensitive data securely hidden, ready for safe sharing or storage.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Three Simple Steps to Secure Data
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes with our streamlined workflow designed for efficiency and ease of use.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-16 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary/30 to-primary/30" />
            <div className="hidden md:block absolute top-16 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary/30 to-primary/30" />

            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step number circle */}
                <div className="relative mx-auto w-32 h-32 mb-8">
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="absolute inset-2 rounded-full bg-card border-2 border-primary/20 group-hover:border-primary/40 flex items-center justify-center transition-colors duration-300">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground font-bold text-sm">{step.number}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <ArrowRight className="w-6 h-6 text-primary/40 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
