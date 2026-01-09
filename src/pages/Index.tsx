import Layout from "@/components/layout/Layout";
import { CheckCircle, Clock, FileText, BarChart3 } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Task Management",
    description: "Organize and track your tasks efficiently",
  },
  {
    icon: Clock,
    title: "Focus Sessions",
    description: "Stay focused with timed productivity sessions",
  },
  {
    icon: FileText,
    title: "Document Conversion",
    description: "Convert documents with ease",
  },
  {
    icon: BarChart3,
    title: "Academic Progress",
    description: "Track and visualize your academic achievements",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center animate-fade-in">
            {/* App Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary shadow-lg mb-8">
              <span className="text-primary-foreground font-bold text-3xl">S</span>
            </div>

            {/* App Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">SynkPlan</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              SynkPlan is a productivity and study-focused app that helps users manage tasks, focus sessions, document conversion, and track academic progress.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-foreground">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border card-elevated hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
