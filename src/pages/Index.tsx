import { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Calendar, CheckSquare, Timer, BarChart3, Briefcase, FileText, Brain, Download } from "lucide-react";
import synkplanLogo from "@/assets/synkplan-logo.png";


const floatingIcons = [
  { icon: Calendar, position: "top-[18%] left-[12%]", color: "#8B5CF6", delay: 0 },
  { icon: CheckSquare, position: "top-[15%] right-[15%]", color: "#06B6D4", delay: 0.5 },
  { icon: Timer, position: "bottom-[25%] left-[10%]", color: "#10B981", delay: 1 },
  { icon: BarChart3, position: "bottom-[20%] right-[12%]", color: "#F59E0B", delay: 1.5 },
  { icon: Briefcase, position: "top-[45%] left-[6%]", color: "#EC4899", delay: 2 },
  { icon: FileText, position: "top-[40%] right-[8%]", color: "#3B82F6", delay: 2.5 },
];

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getParallaxStyle = (intensity: number) => ({
    transform: `translate(${(mousePosition.x - 0.5) * intensity}px, ${(mousePosition.y - 0.5) * intensity}px)`,
  });

  return (
    <Layout>
      <section
        ref={heroRef}
        className="clean-hero relative overflow-hidden min-h-[calc(100vh-64px)] flex items-center"
      >
        {/* Light Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-cyan-50" />

        {/* Soft Gradient Orbs */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full top-[-200px] left-[-200px] opacity-40"
          style={{
            background: "radial-gradient(circle, hsl(267 80% 85%) 0%, transparent 70%)",
            ...getParallaxStyle(-20),
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full bottom-[-150px] right-[-150px] opacity-30"
          style={{
            background: "radial-gradient(circle, hsl(200 80% 85%) 0%, transparent 70%)",
            ...getParallaxStyle(-15),
          }}
        />

        {/* Floating Icons */}
        {floatingIcons.map((item, idx) => (
          <div
            key={idx}
            className={`absolute ${item.position} floating-icon-clean`}
            style={{
              animationDelay: `${item.delay}s`,
              ...getParallaxStyle(30 + idx * 5),
            }}
          >
            <div className="icon-card-clean">
              <item.icon size={24} style={{ color: item.color }} />
            </div>
          </div>
        ))}

        {/* Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="text-center">
            {/* Interactive Logo */}
            <div
              className="inline-block mb-8"
              style={getParallaxStyle(10)}
            >
              <div className="logo-card-clean">
                <img
                  src={synkplanLogo}
                  alt="SynkPlan Logo"
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                  {...({ fetchPriority: "high" } as any)}
                  loading="eager"
                />
              </div>
            </div>

            {/* Title */}
            <h1
              className="text-3xl min-[380px]:text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tighter leading-tight"
              style={getParallaxStyle(5)}
            >
              <span className="text-gradient">SynkPlan</span>
            </h1>

            {/* Tagline */}
            <p
              className="text-xl sm:text-2xl font-medium text-violet-600 mb-4"
              style={getParallaxStyle(8)}
            >
              The Future of Productivity
            </p>

            {/* Description */}
            <p
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
              style={getParallaxStyle(6)}
            >
              A next-generation study companion powered by AI. Manage tasks, track progress,
              focus better, and achieve your academic goals.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              style={getParallaxStyle(4)}
            >
              <Link to="/test-series" className="btn-primary-clean group">
                <Sparkles className="w-5 h-5" />
                <span>Test Series Agent</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link to="/upcoming-ai" className="btn-ai-special group">
                <Brain className="w-5 h-5" />
                <span>AI Features</span>
                <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
              </Link>

              <Link to="/experience" className="btn-secondary-clean">
                View App Preview
              </Link>
            </div>

            {/* Status Badge */}
            <div className="flex flex-col items-center mb-10" style={getParallaxStyle(3)}>
              <a
                href="https://play.google.com/store/apps/details?id=com.khushbu.synkplan"
                target="_blank"
                rel="noopener noreferrer"
                className="status-badge-live group"
              >
                <span className="status-dot-clean" />
                <span>Live in Play Store</span>
                <Download className="w-5 h-5 ml-1 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3" style={getParallaxStyle(2)}>
              {["AI Powered", "Real-time Sync", "Smart Analytics", "Voice Agent"].map((feature, idx) => (
                <span
                  key={feature}
                  className="feature-pill-clean"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>


        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>
    </Layout>
  );
};

export default Index;