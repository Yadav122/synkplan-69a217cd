import Layout from "@/components/layout/Layout";
import UpcomingFeatures from "@/components/UpcomingFeatures";
import { Briefcase, FileText, Timer, Clock, BarChart3, CheckSquare } from "lucide-react";
import synkplanLogo from "@/assets/synkplan-logo.png";

const features = [
  {
    icon: Briefcase,
    title: "Latest Jobs",
    description: "Get the latest job updates and opportunities",
  },
  {
    icon: FileText,
    title: "Document Conversion",
    description: "Convert documents easily at no cost",
  },
  {
    icon: Timer,
    title: "Focus Mode",
    description: "Distraction-free timer with DND integration for deep work",
  },
  {
    icon: Clock,
    title: "Pomodoro Timer",
    description: "Customizable work and break intervals for balanced study sessions",
  },
  {
    icon: BarChart3,
    title: "Subject Analytics",
    description: "Track daily progress and hours spent on each subject",
  },
  {
    icon: CheckSquare,
    title: "Task Management",
    description: "Organize todos and events to stay on schedule",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="text-center">
            {/* App Logo */}
            <div className="animate-fade-in animate-float">
              <div className="inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-background shadow-2xl mb-8 p-2 card-glow">
                <img
                  src={synkplanLogo}
                  alt="SynkPlan Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* App Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 animate-fade-in-delay-1">
              <span className="text-gradient">SynkPlan</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
              SynkPlan is a productivity and study-focused app that helps users manage tasks, focus sessions, document conversion, and track academic progress.
            </p>

            {/* CTA Hint */}
            <div className="mt-10 animate-fade-in-delay-3">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Coming soon to Android
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-24 bg-background relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Powerful Features
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Everything you need to boost your productivity and ace your studies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon-box mb-5">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming AI Features Section */}
      <UpcomingFeatures />
    </Layout>
  );
};

export default Index;