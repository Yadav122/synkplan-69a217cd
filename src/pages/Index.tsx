import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Calendar, CheckSquare, Timer, BarChart3, Briefcase, FileText } from "lucide-react";
import synkplanLogo from "@/assets/synkplan-logo.png";

const floatingIcons = [
  { icon: Calendar, delay: "0s", position: "top-[15%] left-[10%]", size: "w-12 h-12", color: "text-violet-400" },
  { icon: CheckSquare, delay: "0.5s", position: "top-[20%] right-[15%]", size: "w-10 h-10", color: "text-cyan-400" },
  { icon: Timer, delay: "1s", position: "bottom-[30%] left-[8%]", size: "w-14 h-14", color: "text-emerald-400" },
  { icon: BarChart3, delay: "1.5s", position: "bottom-[25%] right-[10%]", size: "w-11 h-11", color: "text-orange-400" },
  { icon: Briefcase, delay: "2s", position: "top-[40%] left-[5%]", size: "w-10 h-10", color: "text-pink-400" },
  { icon: FileText, delay: "2.5s", position: "top-[35%] right-[8%]", size: "w-12 h-12", color: "text-blue-400" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with 3D Interactive Elements */}
      <section className="hero-section-3d relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        {/* 3D Floating Orbs */}
        <div className="floating-orb orb-1" />
        <div className="floating-orb orb-2" />
        <div className="floating-orb orb-3" />

        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className={`floating-icon absolute ${item.position} ${item.size} ${item.color}`}
            style={{ animationDelay: item.delay }}
          >
            <div className="icon-3d-container">
              <item.icon className="w-full h-full" />
            </div>
          </div>
        ))}

        {/* Particle Effects */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full z-10">
          <div className="text-center">
            {/* 3D App Logo */}
            <div className="animate-fade-in mb-10">
              <div className="logo-3d-container inline-block">
                <div className="logo-3d-wrapper">
                  <div className="logo-3d inline-flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-background shadow-2xl p-3">
                    <img
                      src={synkplanLogo}
                      alt="SynkPlan Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Logo Glow */}
                  <div className="logo-glow" />
                </div>
              </div>
            </div>

            {/* Animated App Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in-delay-1">
              <span className="text-gradient-animated">SynkPlan</span>
            </h1>

            {/* Tagline with Typewriter effect */}
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2 mb-4">
              Your Ultimate Productivity & Study Companion
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
              Manage tasks, focus sessions, document conversion, and track your academic progress — all in one powerful app.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
              <Link
                to="/features"
                className="cta-button-primary group"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Explore Features
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/experience"
                className="cta-button-secondary"
              >
                View App Preview
              </Link>
            </div>

            {/* Status Badge */}
            <div className="mt-10 animate-fade-in-delay-3">
              <div className="status-badge">
                <span className="status-dot" />
                Coming soon to Android & iOS
              </div>
            </div>

            {/* Feature Pills */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3 animate-fade-in-delay-3">
              {["Task Management", "Focus Timer", "Analytics", "AI Agents"].map((feature, idx) => (
                <span
                  key={feature}
                  className="feature-pill"
                  style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
    </Layout>
  );
};

export default Index;