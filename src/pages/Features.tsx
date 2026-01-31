import Layout from "@/components/layout/Layout";
import { Briefcase, FileText, Timer, Clock, BarChart3, CheckSquare, Shield, Trophy, Ban } from "lucide-react";

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
        title: "Subject Analytics & Graphs",
        description: "Visual graphs and insights to track daily progress and hours spent on each subject",
    },
    {
        icon: CheckSquare,
        title: "Task Management",
        description: "Organize todos and events to stay on schedule",
    },
    {
        icon: Shield,
        title: "Focus Mode Protection",
        description: "Block distracting apps during study sessions to stay focused and improve productivity",
    },
    {
        icon: Trophy,
        title: "Top 10 Leaderboard",
        description: "Compete with other learners, track your rank, and stay motivated with healthy competition",
    },
];

const Features = () => {
    return (
        <Layout>
            {/* Features Hero */}
            <section className="pt-24 pb-10 bg-background relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 animate-fade-in">
                        <span className="text-gradient">Powerful Features</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto animate-fade-in-delay-1">
                        Everything you need to boost your productivity and ace your studies
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-12 sm:py-20 bg-background relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </Layout>
    );
};

export default Features;
