import { useState } from "react";
import { Smartphone, ChevronLeft, ChevronRight } from "lucide-react";

// Import app screenshots
import screenshotHome from "@/assets/app-screenshot-home.jpg";
import screenshotTasks from "@/assets/app-screenshot-tasks.jpg";
import screenshotEvents from "@/assets/app-screenshot-events.jpg";
import screenshotAnalytics from "@/assets/app-screenshot-analytics.jpg";
import screenshotLogin from "@/assets/app-screenshot-login.jpg";

const appScreenshots = [
    {
        id: "home",
        title: "Home Dashboard",
        description: "Get a quick overview of your day with study progress, calendar, and quick actions",
        image: screenshotHome,
    },
    {
        id: "tasks",
        title: "Task Management",
        description: "Organize your tasks by categories with due dates and priority levels",
        image: screenshotTasks,
    },
    {
        id: "events",
        title: "Events Calendar",
        description: "Plan and schedule your events with a beautiful calendar view",
        image: screenshotEvents,
    },
    {
        id: "analytics",
        title: "Study Analytics",
        description: "Track your study progress with detailed subject-wise analytics",
        image: screenshotAnalytics,
    },
    {
        id: "login",
        title: "Secure Login",
        description: "Sign in securely with email or Google authentication",
        image: screenshotLogin,
    },
];

const AppPreview = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % appScreenshots.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length);
    };

    return (
        <section className="app-preview-section relative overflow-hidden py-24 sm:py-32">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
                        <Smartphone className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">App Preview</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 animate-fade-in-delay-1">
                        <span className="text-gradient">Experience SynkPlan</span>
                    </h2>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-2">
                        A beautiful and intuitive interface designed to boost your productivity
                    </p>
                </div>

                {/* Phone Mockup Carousel */}
                <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                    {/* Navigation - Left */}
                    <button
                        onClick={prevSlide}
                        className="preview-nav-btn hidden lg:flex"
                        aria-label="Previous screenshot"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Phone Frame */}
                    <div className="phone-mockup-container">
                        <div className="phone-mockup">
                            {/* Phone Frame */}
                            <div className="phone-frame">
                                {/* Notch */}
                                <div className="phone-notch" />

                                {/* Screen */}
                                <div className="phone-screen">
                                    <img
                                        src={appScreenshots[activeIndex].image}
                                        alt={appScreenshots[activeIndex].title}
                                        className="w-full h-full object-cover transition-opacity duration-500"
                                    />
                                </div>
                            </div>

                            {/* Glow Effect */}
                            <div className="phone-glow" />
                        </div>

                        {/* Mobile Navigation */}
                        <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
                            <button
                                onClick={prevSlide}
                                className="preview-nav-btn"
                                aria-label="Previous screenshot"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div className="flex gap-2">
                                {appScreenshots.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex
                                                ? "bg-primary w-8"
                                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                            }`}
                                        aria-label={`Go to screenshot ${idx + 1}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={nextSlide}
                                className="preview-nav-btn"
                                aria-label="Next screenshot"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Info Panel */}
                    <div className="preview-info-panel">
                        <div className="preview-info-content">
                            <span className="preview-info-badge">
                                {activeIndex + 1} / {appScreenshots.length}
                            </span>
                            <h3 className="preview-info-title">
                                {appScreenshots[activeIndex].title}
                            </h3>
                            <p className="preview-info-description">
                                {appScreenshots[activeIndex].description}
                            </p>

                            {/* Thumbnail Navigation */}
                            <div className="preview-thumbnails">
                                {appScreenshots.map((screenshot, idx) => (
                                    <button
                                        key={screenshot.id}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`preview-thumbnail ${idx === activeIndex ? "active" : ""
                                            }`}
                                    >
                                        <img
                                            src={screenshot.image}
                                            alt={screenshot.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation - Right */}
                    <button
                        onClick={nextSlide}
                        className="preview-nav-btn hidden lg:flex"
                        aria-label="Next screenshot"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Desktop Dots Navigation */}
                <div className="hidden lg:flex items-center justify-center gap-3 mt-12">
                    {appScreenshots.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIndex
                                    ? "bg-primary w-10"
                                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                }`}
                            aria-label={`Go to screenshot ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AppPreview;
