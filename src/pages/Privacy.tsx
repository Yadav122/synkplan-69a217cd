import Layout from "@/components/layout/Layout";
import { Shield, Mail, Lock, Eye, Database, Bell, FileText, UserCheck, Users, RefreshCw, ChevronRight, BarChart3, Trophy } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { List } from "lucide-react";
import synkplanLogo from "@/assets/synkplan-logo.png";

const sections = [
  { id: "intro", title: "Introduction", icon: Shield },
  { id: "collect", title: "Information We Collect", icon: Database },
  { id: "permissions", title: "Permissions We Use", icon: Lock },
  { id: "focus-mode", title: "Focus Mode & App Blocking", icon: Lock },
  { id: "analytics", title: "Analytics & Graphs", icon: BarChart3 },
  { id: "leaderboard", title: "Leaderboard Feature", icon: Trophy },
  { id: "no-collect", title: "What We Don't Collect", icon: Eye },
  { id: "usage", title: "How We Use Data", icon: FileText },
  { id: "sharing", title: "Data Sharing", icon: Users },
  { id: "security", title: "Data Security", icon: Shield },
  { id: "control", title: "User Control", icon: UserCheck },
  { id: "children", title: "Children's Privacy", icon: Users },
  { id: "changes", title: "Policy Changes", icon: RefreshCw },
  { id: "contact", title: "Contact Us", icon: Mail },
];

const Privacy = () => {
  const [activeSection, setActiveSection] = useState("intro");
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
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent to-background">
        {/* Light Background Gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-100/50 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-50/50 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Legal Document</span>
            </div>

            {/* Logo */}
            <div className="relative inline-flex items-center justify-center mb-8 animate-fade-in-delay-1">
              <div className="relative w-24 h-24 rounded-2xl bg-white p-2 border border-border/30" style={{ boxShadow: '0 4px 20px rgba(139, 92, 246, 0.1)' }}>
                <img src={synkplanLogo} alt="SynkPlan Logo" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-delay-2">
              <span className="text-gradient">Privacy Policy</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 animate-fade-in-delay-3">
              for SynkPlan
            </p>

            {/* Effective Date Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg animate-fade-in-delay-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500" />
              <span className="text-foreground font-semibold">Effective Date: 09 January 2026</span>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex gap-12">
          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24">
              <div className="relative rounded-3xl bg-card/50 backdrop-blur-md border border-border/50 p-6 shadow-xl">
                {/* Sidebar Glow */}
                <div className="absolute -inset-px bg-gradient-to-b from-primary/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left text-sm font-medium transition-all duration-200 group ${isActive
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                          }`}
                      >
                        <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "" : "group-hover:text-primary"}`} />
                        <span className="truncate">{section.title}</span>
                        {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            {/* Introduction */}
            <section id="intro" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="prose-content">
                  <p className="text-lg leading-relaxed">
                    SynkPlan ("we", "our", or "us") is a productivity and study-focused mobile application designed to help users manage tasks, focus sessions, document conversion, and track academic progress. We are committed to protecting your privacy and being transparent about how your data is handled.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 1 - Information We Collect */}
            <section id="collect" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 1</span>
                    <h2 className="section-title-modern">Information We Collect</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>We collect only the information required to provide the app's features.</p>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">a</span>
                      Personal Information
                    </h3>
                    <p>When you sign in using Google:</p>
                    <ul className="modern-list">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Profile photo (if provided by Google)</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3 italic">
                      This information is used only for authentication and account identification.
                    </p>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">b</span>
                      User-Generated Content
                    </h3>
                    <p>Data created by you inside the app, including:</p>
                    <ul className="modern-list">
                      <li>Tasks, schedules, and to-do items</li>
                      <li>Focus sessions and timer data</li>
                      <li>Productivity and study analytics</li>
                      <li>Documents, images, or PDFs you choose to convert</li>
                      <li>Profile photo selected or captured by the user</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3 italic">
                      This data is used solely to provide app functionality.
                    </p>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">c</span>
                      App Usage & Analytics Data
                    </h3>
                    <ul className="modern-list">
                      <li>Focus duration and session history</li>
                      <li>Subject-wise or task-wise productivity data</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3 italic">
                      This information is used only to generate graphs and insights within the app.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 - Permissions */}
            <section id="permissions" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 2</span>
                    <h2 className="section-title-modern">Permissions We Use & Why</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>SynkPlan requests the following permissions only when required for a feature:</p>

                  <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    <div className="permission-card">
                      <div className="permission-icon">
                        <Bell className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Notifications</h4>
                        <p className="text-sm text-muted-foreground mt-1">Used for focus timers, reminders, and alerts.</p>
                      </div>
                    </div>

                    <div className="permission-card">
                      <div className="permission-icon">
                        <Bell className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Do Not Disturb (DND)</h4>
                        <p className="text-sm text-muted-foreground mt-1">Used only during focus sessions. Optional and user-controlled.</p>
                      </div>
                    </div>

                    <div className="permission-card">
                      <div className="permission-icon">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Storage / Files Access</h4>
                        <p className="text-sm text-muted-foreground mt-1">Select documents or images, convert files (e.g., image to PDF).</p>
                      </div>
                    </div>

                    <div className="permission-card">
                      <div className="permission-icon">
                        <Eye className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Photos / Media Access</h4>
                        <p className="text-sm text-muted-foreground mt-1">Select images for conversion, choose a profile photo.</p>
                      </div>
                    </div>
                  </div>

                  <div className="subsection-card mt-6">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">e</span>
                      Camera Access
                    </h3>
                    <p>Used to:</p>
                    <ul className="modern-list">
                      <li>Capture images for document-to-PDF conversion</li>
                      <li>Take a photo for profile picture updates (optional)</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3 italic">
                      The camera is never accessed in the background and is used only when the user explicitly chooses to do so.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section - Focus Mode & App Blocking */}
            <section id="focus-mode" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper bg-gradient-to-br from-purple-500 to-violet-600">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Focus Mode Feature</span>
                    <h2 className="section-title-modern">Focus Mode & App Blocking (App Restrictions)</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-6">
                    <p className="font-semibold text-foreground flex items-center gap-2">
                      <Shield className="w-5 h-5 text-purple-600" />
                      This feature helps reduce distractions during study sessions
                    </p>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">a</span>
                      What is Focus Mode / App Blocking?
                    </h3>
                    <p>
                      SynkPlan includes an optional <strong>Focus Mode Protection</strong> feature that allows users to temporarily block access to selected distracting apps during study or focus sessions. This feature is designed to help students and users stay focused and avoid distractions from social media, games, and other applications.
                    </p>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">b</span>
                      Permissions Required
                    </h3>
                    <p>To enable this feature, SynkPlan may request:</p>
                    <ul className="modern-list">
                      <li><strong>Usage Access Permission (PACKAGE_USAGE_STATS)</strong> – To detect which apps are currently running so that blocked apps can be identified during focus sessions</li>
                      <li><strong>Display over other apps (SYSTEM_ALERT_WINDOW)</strong> – To show a blocking overlay when a user tries to open a blocked app</li>
                      <li><strong>Query All Packages (QUERY_ALL_PACKAGES)</strong> – To display the list of installed apps so users can select which apps to block</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3 italic">
                      These permissions are only requested when the user chooses to enable the Focus Mode feature and are never used in the background without user initiation.
                    </p>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">c</span>
                      Data Collection & Privacy
                    </h3>
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 mb-4">
                      <p className="font-semibold text-foreground flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        No App Usage Data is Collected, Stored, or Shared
                      </p>
                    </div>
                    <p>Important privacy guarantees for this feature:</p>
                    <ul className="modern-list">
                      <li>We do <strong>NOT</strong> collect any data about your app usage patterns</li>
                      <li>We do <strong>NOT</strong> track which apps you use or how often</li>
                      <li>We do <strong>NOT</strong> store any list of your installed apps on our servers</li>
                      <li>We do <strong>NOT</strong> share any app-related information with third parties</li>
                      <li>All app blocking functionality works <strong>entirely on your device</strong></li>
                      <li>The list of apps you choose to block is stored <strong>locally on your device only</strong></li>
                    </ul>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">d</span>
                      User Control
                    </h3>
                    <ul className="modern-list">
                      <li>Focus Mode is <strong>completely optional</strong> – you can use SynkPlan without enabling this feature</li>
                      <li>You have <strong>full control</strong> over which apps to block</li>
                      <li>You can <strong>enable or disable</strong> app blocking at any time from the app settings</li>
                      <li>You can <strong>revoke permissions</strong> from your device settings at any time</li>
                    </ul>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">e</span>
                      Purpose & Justification
                    </h3>
                    <p>
                      The sole purpose of this feature is to help users stay focused during study or work sessions by limiting access to distracting applications. This is a core functionality of SynkPlan as a productivity and study-focused application. The permissions are used exclusively for this purpose and not for any advertising, analytics, or data collection.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section - Analytics & Graphs */}
            <section id="analytics" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper bg-gradient-to-br from-blue-500 to-cyan-600">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Analytics Feature</span>
                    <h2 className="section-title-modern">Subject-wise Analytics & Graphs</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-6">
                    <p className="font-semibold text-foreground flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                      Track your study progress with visual insights
                    </p>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">a</span>
                      What is Subject-wise Analytics?
                    </h3>
                    <p>
                      SynkPlan provides <strong>visual graphs and analytics</strong> to help you understand your study patterns. You can view subject-wise breakdown of your study time, productivity trends, and progress over time.
                    </p>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">b</span>
                      Data Used for Analytics
                    </h3>
                    <p>The following data is used to generate your analytics:</p>
                    <ul className="modern-list">
                      <li>Focus session duration and completion status</li>
                      <li>Subject names you create and assign to sessions</li>
                      <li>Task completion rates</li>
                      <li>Study streaks and consistency patterns</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3 italic">
                      This data is created by you and used solely to provide personalized insights within the app.
                    </p>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">c</span>
                      Privacy Guarantees
                    </h3>
                    <ul className="modern-list">
                      <li>Analytics are generated for <strong>your personal use only</strong></li>
                      <li>Your study data is <strong>not shared</strong> with other users (unless you opt into Leaderboard)</li>
                      <li>We do <strong>not sell</strong> your analytics data to third parties</li>
                      <li>You can <strong>delete</strong> your data at any time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section - Leaderboard Feature */}
            <section id="leaderboard" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper bg-gradient-to-br from-yellow-500 to-orange-600">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Leaderboard Feature</span>
                    <h2 className="section-title-modern">Top 10 Leaderboard</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 mb-6">
                    <p className="font-semibold text-foreground flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-600" />
                      Compete with other learners and stay motivated!
                    </p>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">a</span>
                      What is the Leaderboard?
                    </h3>
                    <p>
                      SynkPlan includes an optional <strong>Top 10 Leaderboard</strong> feature that allows users to compare their study progress with others. This feature is designed to motivate users and create a healthy competitive environment.
                    </p>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">b</span>
                      Data Displayed on Leaderboard
                    </h3>
                    <p>If you choose to participate, the following may be visible to other users:</p>
                    <ul className="modern-list">
                      <li>Your display name or username</li>
                      <li>Your profile photo (if set)</li>
                      <li>Your total study time or points</li>
                      <li>Your rank position</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3 italic">
                      Only aggregated scores are shown. Your detailed study data, subjects, or personal information is never shared.
                    </p>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">c</span>
                      User Control & Consent
                    </h3>
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 mb-4">
                      <p className="font-semibold text-foreground flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        Leaderboard participation is completely OPTIONAL
                      </p>
                    </div>
                    <ul className="modern-list">
                      <li>You must <strong>opt-in</strong> to appear on the leaderboard</li>
                      <li>You can <strong>opt-out</strong> at any time and your data will be removed from the leaderboard</li>
                      <li>You can use the app fully without joining the leaderboard</li>
                      <li>You can choose what information to display (e.g., anonymous username)</li>
                    </ul>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">d</span>
                      Privacy Guarantees
                    </h3>
                    <ul className="modern-list">
                      <li>Your email address is <strong>never</strong> displayed publicly</li>
                      <li>Your detailed study sessions and subjects are <strong>private</strong></li>
                      <li>We <strong>do not</strong> share leaderboard data with advertisers</li>
                      <li>Leaderboard data is used <strong>only</strong> for ranking purposes within the app</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 - What We Don't Collect */}
            <section id="no-collect" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper bg-gradient-to-br from-red-500 to-red-600">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 3</span>
                    <h2 className="section-title-modern">Information We Do NOT Collect</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>We do not collect:</p>
                  <div className="grid sm:grid-cols-2 gap-3 mt-4">
                    {[
                      "Location data",
                      "Contacts",
                      "Call logs or SMS data",
                      "Audio recordings",
                      "Payment or financial information",
                      "Personal messages",
                      "Background photos or videos",
                      "App usage patterns or statistics",
                      "List of installed apps (not stored on servers)"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/5 border border-red-500/10">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 - How We Use */}
            <section id="usage" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 4</span>
                    <h2 className="section-title-modern">How We Use Your Information</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>Your data is used to:</p>
                  <ul className="modern-list">
                    <li>Authenticate users securely</li>
                    <li>Provide productivity, focus, and document conversion features</li>
                    <li>Generate analytics and insights for the user</li>
                    <li>Improve app reliability and performance</li>
                  </ul>
                  <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="font-semibold text-foreground flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      We do not sell, trade, or rent user data.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 - Data Sharing */}
            <section id="sharing" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 5</span>
                    <h2 className="section-title-modern">Data Sharing & Third-Party Services</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>SynkPlan uses trusted third-party services:</p>

                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-xl bg-accent/50 border border-border">
                      <h4 className="font-semibold text-foreground mb-2">Google Sign-In</h4>
                      <p className="text-sm text-muted-foreground">User authentication</p>
                    </div>
                    <div className="p-4 rounded-xl bg-accent/50 border border-border">
                      <h4 className="font-semibold text-foreground mb-2">Firebase (Google LLC)</h4>
                      <p className="text-sm text-muted-foreground">App functionality, analytics, and secure storage</p>
                    </div>
                  </div>

                  <p className="mt-4">These services comply with industry-standard privacy and security practices.</p>

                  <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="font-semibold text-foreground">
                      We do not share data with advertisers or unrelated third parties.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 - Security */}
            <section id="security" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper bg-gradient-to-br from-green-500 to-emerald-600">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 6</span>
                    <h2 className="section-title-modern">Data Storage & Security</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>We use reasonable security measures such as:</p>
                  <ul className="modern-list">
                    <li>Secure communication protocols</li>
                    <li>Authentication via Google</li>
                    <li>Controlled access to stored data</li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground italic">
                    No method of data transmission or storage is 100% secure, but we strive to protect user information.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 - User Control */}
            <section id="control" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper">
                    <UserCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 7</span>
                    <h2 className="section-title-modern">User Control & Data Deletion</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>Users have full control over their data:</p>
                  <ul className="modern-list">
                    <li>You may sign out at any time</li>
                    <li>You may request deletion of your account and associated data</li>
                  </ul>
                  <p className="mt-4">To request data deletion, contact us at the email addresses below.</p>
                </div>
              </div>
            </section>

            {/* Section 8 - Children's Privacy */}
            <section id="children" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 8</span>
                    <h2 className="section-title-modern">Children's Privacy</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>SynkPlan is not intended for children under the age of 13.</p>
                  <p>We do not knowingly collect personal data from children.</p>
                </div>
              </div>
            </section>

            {/* Section 9 - Changes */}
            <section id="changes" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper">
                    <RefreshCw className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 9</span>
                    <h2 className="section-title-modern">Changes to This Privacy Policy</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>We may update this policy occasionally.</p>
                  <p>Any changes will be reflected here with a revised effective date.</p>
                </div>
              </div>
            </section>

            {/* Section 10 - Contact */}
            <section id="contact" className="scroll-mt-24">
              <div className="modern-card group contact-section">
                <div className="section-header">
                  <div className="section-icon-wrapper">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 10</span>
                    <h2 className="section-title-modern">Contact Us</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>If you have questions or concerns about this Privacy Policy, contact us at:</p>

                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <a
                      href="mailto:kdahiya296@gmail.com"
                      className="contact-button group/btn"
                    >
                      <div className="contact-icon-wrapper">
                        <Mail className="w-5 h-5 text-primary group-hover/btn:text-white transition-colors" />
                      </div>
                      <span className="font-medium text-foreground">kdahiya296@gmail.com</span>
                    </a>
                    <a
                      href="mailto:kumarharsh74799@gmail.com"
                      className="contact-button group/btn"
                    >
                      <div className="contact-icon-wrapper">
                        <Mail className="w-5 h-5 text-primary group-hover/btn:text-white transition-colors" />
                      </div>
                      <span className="font-medium text-foreground">kumarharsh74799@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Mobile Floating TOC Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button size="icon" className="w-14 h-14 rounded-full shadow-2xl bg-primary hover:bg-primary/90 text-white">
              <List className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="rounded-t-[32px] h-[80vh] p-0 overflow-hidden border-t-0 bg-background/95 backdrop-blur-xl">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-muted rounded-full" />
            <div className="flex flex-col h-full bg-gradient-to-b from-primary/5 to-transparent">
              <SheetHeader className="p-8 pb-4">
                <SheetTitle className="text-2xl font-bold text-gradient">Table of Contents</SheetTitle>
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

export default Privacy;