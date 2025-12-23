import { 
  Phone, 
  Mail, 
  CreditCard, 
  FileText, 
  Zap, 
  MousePointer, 
  ShieldCheck, 
  FileSpreadsheet 
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Phone Numbers",
    description: "Detect and mask mobile & landline numbers across all formats",
  },
  {
    icon: Mail,
    title: "Email Addresses",
    description: "Identify personal and professional email patterns instantly",
  },
  {
    icon: CreditCard,
    title: "ID Numbers",
    description: "Detect Aadhaar, PAN, Passport, and other ID formats",
  },
  {
    icon: FileText,
    title: "Multi-Format Support",
    description: "Process Text, PDF, Word, and Excel files seamlessly",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get scan results in seconds with real-time processing",
  },
  {
    icon: MousePointer,
    title: "One-Click Masking",
    description: "Mask all detected PII with a single click action",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-First",
    description: "Your data is processed securely without permanent storage",
  },
  {
    icon: FileSpreadsheet,
    title: "Batch Processing",
    description: "Upload and process multiple files simultaneously",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Features</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Everything You Need for Data Protection
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive PII detection and masking capabilities to keep your sensitive data secure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default FeaturesSection;


/* this is comment */