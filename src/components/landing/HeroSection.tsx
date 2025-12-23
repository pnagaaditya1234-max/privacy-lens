import { Shield, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-in">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Privacy Protection</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Detect. Protect.</span>
            <br />
            <span className="text-gradient">Prevent Data Leaks.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            PrivacyLens uses advanced AI to automatically detect and mask sensitive personal information 
            in your documents, protecting your organization from data breaches and compliance violations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow transition-all duration-300 group">
              Scan Your Data
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5 group">
              <Play className="mr-2 w-4 h-4" />
              Try Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-muted-foreground mb-4">Trusted by enterprises worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="text-xl font-display font-semibold text-foreground/60">Enterprise Co.</div>
              <div className="text-xl font-display font-semibold text-foreground/60">TechCorp</div>
              <div className="text-xl font-display font-semibold text-foreground/60">SecureBank</div>
              <div className="text-xl font-display font-semibold text-foreground/60">DataSafe Inc.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
