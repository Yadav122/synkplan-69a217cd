import Layout from "@/components/layout/Layout";
import { Target, Users, Rocket, Heart, GraduationCap, BookOpen, Brain, Lightbulb, ChevronRight, List } from "lucide-react";
import education3d from "@/assets/education-3d.png";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const sections = [
    { id: "hero", title: "About SynkPlan", icon: Users },
    { id: "mission", title: "Our Mission", icon: Target },
    { id: "team", title: "Our Team", icon: Heart },
    { id: "values", title: "Core Values", icon: Lightbulb },
];

const About = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(s => document.getElementById(s.id));
            const scrollPosition = window.scrollY + 200;

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const element = sectionElements[i];
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setIsSheetOpen(false);
        }
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section id="hero" className="relative overflow-hidden py-16 sm:py-24 scroll-mt-20">
                {/* Light Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-cyan-50" />

                {/* Soft Orbs */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-100/50 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-50/50 rounded-full blur-3xl" />

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Content */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                                <Users className="w-4 h-4 text-primary" />
                                <span className="text-sm font-semibold text-primary">About Us</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
                                <span className="text-gradient">Empowering</span>
                                <br />
                                <span className="text-foreground">Student Success</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                                SynkPlan is a next-generation productivity app designed specifically for students.
                                We believe every student deserves tools that help them achieve their academic goals
                                without the stress.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                    <GraduationCap className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-medium">For Students</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                    <Brain className="w-5 h-5 text-cyan-500" />
                                    <span className="text-sm font-medium">AI Powered</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                                    <Heart className="w-5 h-5 text-pink-500" />
                                    <span className="text-sm font-medium">Made with Love</span>
                                </div>
                            </div>
                        </div>

                        {/* 3D Image with Animation */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="floating-3d-container">
                                <div className="floating-3d-image">
                                    <img
                                        src={education3d}
                                        alt="3D Education Illustration"
                                        className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                                    />
                                </div>
                                {/* Animated glow behind image */}
                                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-cyan-400/10 to-violet-400/20 rounded-full blur-3xl animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section id="mission" className="py-16 sm:py-24 bg-white scroll-mt-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Target className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">Our Mission</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            <span className="text-gradient">Why We Built SynkPlan</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We understand the challenges students face - juggling assignments, exams, projects, and personal life.
                            SynkPlan was created to be your ultimate study companion.
                        </p>
                    </div>

                    {/* Mission Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="mission-card group">
                            <div className="mission-icon bg-violet-100">
                                <BookOpen className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Smart Study Management</h3>
                            <p className="text-muted-foreground">
                                Organize your tasks, track deadlines, and manage your study schedule with ease.
                                Never miss an assignment again.
                            </p>
                        </div>

                        <div className="mission-card group">
                            <div className="mission-icon bg-cyan-100">
                                <Lightbulb className="w-6 h-6 text-cyan-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">AI-Powered Insights</h3>
                            <p className="text-muted-foreground">
                                Get personalized recommendations, track your productivity patterns, and improve
                                with intelligent analytics.
                            </p>
                        </div>

                        <div className="mission-card group">
                            <div className="mission-icon bg-pink-100">
                                <Rocket className="w-6 h-6 text-pink-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Boost Your Potential</h3>
                            <p className="text-muted-foreground">
                                Focus sessions, document conversion, progress tracking - everything you need
                                to excel in your academics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-16 sm:py-24 bg-gradient-to-br from-violet-50 via-white to-cyan-50 scroll-mt-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Heart className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">Our Team</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            <span className="text-gradient">Built by Students, for Students</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            SynkPlan is developed by a passionate team who understands the student journey firsthand.
                        </p>
                    </div>

                    {/* Team Cards */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        <div className="team-card">
                            <div className="team-avatar bg-gradient-to-br from-primary to-violet-600">
                                <span className="text-2xl font-bold text-white">K</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Khushbu Dahiya</h3>
                                <p className="text-primary font-medium">Co-Founder </p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Passionate about creating products that make student life easier.
                                </p>
                            </div>
                        </div>

                        <div className="team-card">
                            <div className="team-avatar bg-gradient-to-br from-cyan-500 to-blue-600">
                                <span className="text-2xl font-bold text-white">H</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Harsh Kumar</h3>
                                <p className="text-cyan-600 font-medium">Co-Founder </p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Focused on creating beautiful and intuitive user experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section id="values" className="py-16 sm:py-24 bg-white scroll-mt-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            <span className="text-gradient">Our Core Values</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: "🎯", title: "Student First", desc: "Every feature is designed with students in mind" },
                            { icon: "✨", title: "Simplicity", desc: "Powerful features, simple to use interface" },
                            { icon: "🔒", title: "Privacy", desc: "Your data belongs to you, always" },
                            { icon: "💡", title: "Innovation", desc: "Constantly improving with AI and new tech" },
                        ].map((value, idx) => (
                            <div
                                key={idx}
                                className="value-card"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <span className="text-4xl mb-4 block">{value.icon}</span>
                                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                                <p className="text-sm text-muted-foreground">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-24 bg-gradient-to-br from-primary via-violet-600 to-purple-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Study Routine?
                    </h2>
                    <p className="text-lg text-white/80 mb-8">
                        Join thousands of students who are already using SynkPlan to achieve their academic goals.
                    </p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full text-primary font-semibold">
                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        Coming Soon to Android & iOS
                    </div>
                </div>
            </section>
            {/* Mobile Floating TOC Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button size="icon" className="w-14 h-14 rounded-full shadow-2xl bg-primary hover:bg-primary/90 text-white">
                            <List className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="rounded-t-[32px] h-[60vh] p-0 overflow-hidden border-t-0 bg-background/95 backdrop-blur-xl">
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-muted rounded-full" />
                        <div className="flex flex-col h-full bg-gradient-to-b from-primary/5 to-transparent">
                            <SheetHeader className="p-8 pb-4">
                                <SheetTitle className="text-2xl font-bold text-gradient">About SynkPlan</SheetTitle>
                            </SheetHeader>
                            <div className="flex-1 overflow-y-auto px-6 pb-12">
                                <nav className="grid grid-cols-1 gap-2">
                                    {sections.map((section) => {
                                        const Icon = section.icon;
                                        const isActive = activeSection === section.id;
                                        return (
                                            <button
                                                key={section.id}
                                                onClick={() => scrollToSection(section.id)}
                                                className={`flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 ${isActive
                                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                                                    : "bg-card/50 border border-border/50 text-muted-foreground hover:bg-accent/50"
                                                    }`}
                                            >
                                                <div className={`p-2 rounded-lg ${isActive ? "bg-white/20" : "bg-primary/10 text-primary"}`}>
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <span className="font-semibold text-lg">{section.title}</span>
                                                {isActive && <ChevronRight className="w-5 h-5 ml-auto opacity-50" />}
                                            </button>
                                        );
                                    })}
                                </nav>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </Layout>
    );
};

export default About;
