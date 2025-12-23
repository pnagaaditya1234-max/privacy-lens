import { ServerOff, Lock, ShieldCheck } from "lucide-react";

const trustPoints = [
  {
    icon: ServerOff,
    title: "No Data Stored",
    description: "Your files and data are processed in real-time and never stored on our servers permanently. Once processed, all data is immediately deleted.",
  },
  {
    icon: Lock,
    title: "Encrypted Processing",
    description: "All data transmission and processing happens over encrypted channels using industry-standard TLS/SSL protocols.",
  },
  {
    icon: ShieldCheck,
    title: "GDPR Compliant",
    description: "Our platform is designed with privacy-by-design principles, ensuring compliance with GDPR, CCPA, and other privacy regulations.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Trust & Security</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Your Security is Our Priority
          </h2>
          <p className="text-lg opacity-70">
            Built with enterprise-grade security measures to ensure your data remains protected at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="group text-center p-8"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                <point.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {point.title}
              </h3>
              <p className="opacity-70 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 pt-8 border-t border-background/10">
          <div className="px-6 py-3 rounded-full border border-background/20 text-sm font-medium opacity-70">
            GDPR Compliant
          </div>
          <div className="px-6 py-3 rounded-full border border-background/20 text-sm font-medium opacity-70">
            CCPA Ready
          </div>
          <div className="px-6 py-3 rounded-full border border-background/20 text-sm font-medium opacity-70">
            SOC 2 Type II
          </div>
          <div className="px-6 py-3 rounded-full border border-background/20 text-sm font-medium opacity-70">
            ISO 27001
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
