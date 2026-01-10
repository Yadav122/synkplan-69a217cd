import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import synkplanLogo from "@/assets/synkplan-logo.png";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
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

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
              <Link
                to="/features"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-violet-600 text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5" />
                Explore Features
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Coming soon to Android
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;