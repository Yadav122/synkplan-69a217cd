import { Sparkles, Brain, BookOpen, ChevronRight, Zap, Map, Target, Clock, Phone, ListChecks, Focus, ShieldCheck } from "lucide-react";
import careerAgentImg from "@/assets/career-agent.png";
import testAgentImg from "@/assets/test-agent.png";
import voiceAgentImg from "@/assets/voice-agent.png";

const upcomingAgents = [
    {
        id: "career-agent",
        title: "Career Prediction Agent",
        subtitle: "AI-Powered Career Guidance",
        description: "Answer 12 intelligent questions and let our AI analyze your personality, interests, and skills to suggest 4 best career options with detailed topic-wise learning roadmaps.",
        image: careerAgentImg,
        features: [
            { icon: Brain, text: "12 Smart Questions" },
            { icon: Target, text: "4 Job Suggestions" },
            { icon: Map, text: "Topic-wise Roadmap" },
            { icon: Zap, text: "AI Analysis" },
        ],
        gradient: "from-violet-600 via-purple-600 to-indigo-600",
        glowColor: "violet",
        status: "Live in Play Store",
    },
    {
        id: "test-agent",
        title: "Test Series Agent",
        subtitle: "AI-Powered Practice Tests",
        description: "Get personalized test series that identify your weak areas and provide targeted practice questions with real-time performance analytics and improvement tracking.",
        image: testAgentImg,
        features: [
            { icon: BookOpen, text: "Smart Question Bank" },
            { icon: Target, text: "Weak Area Analysis" },
            { icon: Clock, text: "Timed Practice" },
            { icon: Zap, text: "Performance Tracking" },
        ],
        gradient: "from-blue-600 via-cyan-600 to-teal-600",
        glowColor: "cyan",
        status: "Coming Soon",
    },
    {
        id: "voice-agent",
        title: "Voice Focus Agent",
        subtitle: "AI-Powered Distraction Manager",
        description: "When you lose focus, this AI agent will call you, ask what's distracting you, and create a smart sheet to help you avoid those distractions and stay focused on your studies.",
        image: voiceAgentImg,
        features: [
            { icon: Phone, text: "Voice Call Support" },
            { icon: ListChecks, text: "Distraction Sheet" },
            { icon: Focus, text: "Focus Tracker" },
            { icon: ShieldCheck, text: "Smart Reminders" },
        ],
        gradient: "from-emerald-600 via-green-600 to-teal-600",
        glowColor: "emerald",
        status: "Coming Soon",
    },
];


const UpcomingFeatures = () => {
    return (
        <section className="upcoming-section relative overflow-hidden py-24 sm:py-32">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-upcoming-gradient" />
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />

            {/* Floating Orbs */}
            <div className="floating-orb orb-1" />
            <div className="floating-orb orb-2" />
            <div className="floating-orb orb-3" />

            {/* Particle Effect */}
            <div className="particles">
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

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 sm:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-sm font-semibold text-primary">Premium AI Features</span>
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 animate-fade-in-delay-1">
                        <span className="text-gradient">Next-Gen AI Agents</span>
                    </h2>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-2">
                        Experience revolutionary AI-powered features designed to supercharge your learning journey.
                    </p>
                </div>

                {/* Agent Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {upcomingAgents.map((agent, index) => (
                        <div
                            key={agent.id}
                            className={`agent-card agent-card-${agent.glowColor}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Status Badge */}
                            <div className="absolute top-4 right-4 z-10">
                                <div className={`status-badge bg-gradient-to-r ${agent.gradient}`}>
                                    <span className="status-pulse" />
                                    {agent.status}
                                </div>
                            </div>

                            {/* Image Container */}
                            <div className="agent-image-container">
                                <div className={`agent-image-glow agent-glow-${agent.glowColor}`} />
                                <img
                                    src={agent.image}
                                    alt={agent.title}
                                    className="agent-image"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            {/* Content */}
                            <div className="agent-content">
                                <span className="agent-subtitle">{agent.subtitle}</span>
                                <h3 className="agent-title">{agent.title}</h3>
                                <p className="agent-description">{agent.description}</p>

                                {/* Features Grid */}
                                <div className="agent-features">
                                    {agent.features.map((feature, fIndex) => (
                                        <div key={fIndex} className="agent-feature">
                                            <div className={`agent-feature-icon bg-gradient-to-br ${agent.gradient}`}>
                                                <feature.icon className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="agent-feature-text">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.khushbu.synkplan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`agent-cta group bg-gradient-to-r ${agent.gradient} flex items-center justify-center gap-2`}
                                >
                                    <span>{agent.status === "Live in Play Store" ? "Download Now" : "Notify Me"}</span>
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16 animate-fade-in-delay-3">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 backdrop-blur-xl border border-border">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">AI</div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">+</div>
                        </div>
                        <span className="text-muted-foreground">More AI agents coming soon...</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingFeatures;
