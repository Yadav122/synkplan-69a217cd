import Layout from "@/components/layout/Layout";
import { FileText, Mail, Smartphone, FolderOpen, Shield, Scale, Copyright, RefreshCw, Gavel, ChevronRight, Lock, BarChart3, Trophy } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { List } from "lucide-react";
import synkplanLogo from "@/assets/synkplan-logo.png";

const sections = [
  { id: "intro", title: "Introduction", icon: FileText },
  { id: "use", title: "Use of the App", icon: Smartphone },
  { id: "content", title: "User Content", icon: FolderOpen },
  { id: "privacy", title: "Privacy", icon: Shield },
  { id: "permissions", title: "Permissions", icon: Shield },
  { id: "focus-mode", title: "Focus Mode & App Blocking", icon: Lock },
  { id: "analytics", title: "Analytics & Graphs", icon: BarChart3 },
  { id: "leaderboard", title: "Leaderboard", icon: Trophy },
  { id: "liability", title: "Limitation of Liability", icon: Scale },
  { id: "ip", title: "Intellectual Property", icon: Copyright },
  { id: "modifications", title: "Modifications", icon: RefreshCw },
  { id: "governing", title: "Governing Law", icon: Gavel },
  { id: "contact", title: "Contact Us", icon: Mail },
];

const Terms = () => {
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
              <span className="text-gradient">Terms and Conditions</span>
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
                    Welcome to SynkPlan ("we", "our", or "us"). By downloading or using this app, you agree to these Terms and Conditions. Please read them carefully.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 1 - Use of the App */}
            <section id="use" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 1</span>
                    <h2 className="section-title-modern">Use of the App</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>
                    SynkPlan is a productivity and study-focused app that helps users manage tasks, focus sessions, and track academic progress.
                  </p>
                  <p>You may use the app for personal, non-commercial purposes only.</p>
                  <p>
                    You agree not to misuse the app or its services. Misuse includes, but is not limited to:
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 mt-4">
                    {[
                      "Interfering with app operations",
                      "Attempting unauthorized access",
                      "Using the app for illegal purposes"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/5 border border-red-500/10">
                        <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                        <span className="text-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 - User Content */}
            <section id="content" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper">
                    <FolderOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 2</span>
                    <h2 className="section-title-modern">User Content</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>
                    Any tasks, documents, images, or data you input into SynkPlan are considered user-generated content.
                  </p>
                  <p>You are responsible for the content you upload or create.</p>
                  <p>
                    SynkPlan does not claim ownership of your content, but may store it securely to provide app features.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 - Privacy */}
            <section id="privacy" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 3</span>
                    <h2 className="section-title-modern">Privacy</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>Your use of SynkPlan is also governed by our Privacy Policy.</p>
                  <p>
                    By using the app, you consent to data collection and usage as described in the Privacy Policy.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 - Permissions */}
            <section id="permissions" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 4</span>
                    <h2 className="section-title-modern">Permissions</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>SynkPlan may request access to certain device features:</p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div className="permission-card">
                      <h4 className="font-semibold text-foreground">Camera</h4>
                      <p className="text-sm text-muted-foreground mt-1">For document conversion or profile photo updates</p>
                    </div>
                    <div className="permission-card">
                      <h4 className="font-semibold text-foreground">Photos / Media / Files</h4>
                      <p className="text-sm text-muted-foreground mt-1">To select documents or images</p>
                    </div>
                    <div className="permission-card">
                      <h4 className="font-semibold text-foreground">Notifications</h4>
                      <p className="text-sm text-muted-foreground mt-1">For timers and reminders</p>
                    </div>
                    <div className="permission-card">
                      <h4 className="font-semibold text-foreground">Do Not Disturb (DND)</h4>
                      <p className="text-sm text-muted-foreground mt-1">Optional, during focus sessions</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground italic">
                    These permissions are only used when initiated by the user.
                  </p>
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
                    <span className="section-label">Focus Feature</span>
                    <h2 className="section-title-modern">Focus Mode & App Blocking (App Restrictions)</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">a</span>
                      Feature Description
                    </h3>
                    <p>
                      SynkPlan includes an optional <strong>Focus Mode Protection</strong> feature that helps users block distracting applications during study or focus sessions. This feature is designed to reduce distractions and improve productivity.
                    </p>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">b</span>
                      Required Permissions
                    </h3>
                    <p>To use this feature, users may need to grant the following permissions:</p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                      <div className="permission-card">
                        <h4 className="font-semibold text-foreground">Usage Access</h4>
                        <p className="text-sm text-muted-foreground mt-1">To detect running apps during focus sessions</p>
                      </div>
                      <div className="permission-card">
                        <h4 className="font-semibold text-foreground">Display Over Apps</h4>
                        <p className="text-sm text-muted-foreground mt-1">To show blocking overlay on restricted apps</p>
                      </div>
                      <div className="permission-card">
                        <h4 className="font-semibold text-foreground">Query Installed Apps</h4>
                        <p className="text-sm text-muted-foreground mt-1">To show list of apps for user selection</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground italic">
                      These permissions are optional and only requested when the user enables Focus Mode.
                    </p>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">c</span>
                      User Control & Consent
                    </h3>
                    <ul className="modern-list">
                      <li>Focus Mode is <strong>entirely optional</strong> – the app works without this feature</li>
                      <li>Users have <strong>full control</strong> over which apps to block</li>
                      <li>Users can <strong>enable or disable</strong> app blocking at any time</li>
                      <li>Users can <strong>revoke permissions</strong> from device settings</li>
                      <li>No app usage data is collected, stored, or shared</li>
                    </ul>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">d</span>
                      Acceptable Use
                    </h3>
                    <p>By using Focus Mode, you agree to:</p>
                    <ul className="modern-list">
                      <li>Use this feature only for personal productivity purposes</li>
                      <li>Not use this feature to block essential system applications</li>
                      <li>Understand that blocking apps is temporary and under your control</li>
                      <li>Accept responsibility for managing your own app restrictions</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 mt-4">
                    <p className="font-semibold text-foreground flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      This feature does not collect, store, or transmit any data about your apps or usage patterns.
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
                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">a</span>
                      Feature Description
                    </h3>
                    <p>
                      SynkPlan provides <strong>visual analytics and graphs</strong> to help you track your study progress across different subjects. This includes study time distribution, productivity trends, and performance insights.
                    </p>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">b</span>
                      Your Responsibilities
                    </h3>
                    <ul className="modern-list">
                      <li>Analytics are based on the data you input into the app</li>
                      <li>You are responsible for the accuracy of subject names and session data</li>
                      <li>Analytics are for personal reference only and should not be used for official academic records</li>
                    </ul>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">c</span>
                      Data Ownership
                    </h3>
                    <p>
                      Your study analytics data belongs to you. We use this data only to provide the analytics feature and do not share it with third parties for marketing or advertising purposes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section - Leaderboard */}
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
                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">a</span>
                      Feature Description
                    </h3>
                    <p>
                      SynkPlan offers an optional <strong>Top 10 Leaderboard</strong> where users can compare their study progress with others. This feature is designed to encourage healthy competition and motivation among learners.
                    </p>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">b</span>
                      Participation Terms
                    </h3>
                    <ul className="modern-list">
                      <li>Leaderboard participation is <strong>completely optional</strong></li>
                      <li>You must <strong>opt-in</strong> to appear on the leaderboard</li>
                      <li>By opting in, you consent to your display name, profile picture, and score being visible to other users</li>
                      <li>You can <strong>opt-out</strong> at any time</li>
                    </ul>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">c</span>
                      User Conduct on Leaderboard
                    </h3>
                    <p>By participating in the leaderboard, you agree to:</p>
                    <ul className="modern-list">
                      <li>Use an appropriate and non-offensive display name</li>
                      <li>Not manipulate or artificially inflate your scores</li>
                      <li>Respect other users and maintain fair competition</li>
                      <li>Not engage in any activity that could compromise the integrity of the leaderboard</li>
                    </ul>
                  </div>

                  <div className="subsection-card">
                    <h3 className="subsection-title">
                      <span className="subsection-letter">d</span>
                      Our Rights
                    </h3>
                    <ul className="modern-list">
                      <li>We reserve the right to remove users from the leaderboard for inappropriate conduct</li>
                      <li>We may reset or modify leaderboard rankings at our discretion</li>
                      <li>Leaderboard features may be modified or discontinued at any time</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 mt-4">
                    <p className="font-semibold text-foreground flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Your email and detailed study data are never displayed publicly on the leaderboard.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 - Limitation of Liability */}
            <section id="liability" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper bg-gradient-to-br from-amber-500 to-orange-600">
                    <Scale className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 5</span>
                    <h2 className="section-title-modern">Limitation of Liability</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 mb-4">
                    <p className="font-semibold text-foreground">
                      SynkPlan is provided "as is" and "as available."
                    </p>
                  </div>
                  <p>
                    We do not guarantee the app will be error-free, uninterrupted, or free from viruses.
                  </p>
                  <p>
                    We are not responsible for any data loss, device issues, or outcomes resulting from use of the app.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 - Intellectual Property */}
            <section id="ip" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper">
                    <Copyright className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 6</span>
                    <h2 className="section-title-modern">Intellectual Property</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>
                    All SynkPlan branding, logos, design, and app content are owned by the SynkPlan team.
                  </p>
                  <p>
                    You may not reproduce, distribute, or modify app materials without permission.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 - Modifications */}
            <section id="modifications" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper">
                    <RefreshCw className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 7</span>
                    <h2 className="section-title-modern">Modifications</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>We may update the app or these Terms at any time.</p>
                  <p>
                    Users will be notified of significant changes via the app or email.
                  </p>
                  <p>Continued use after updates constitutes acceptance of new Terms.</p>
                </div>
              </div>
            </section>

            {/* Section 8 - Governing Law */}
            <section id="governing" className="mb-10 scroll-mt-24">
              <div className="modern-card group">
                <div className="section-header">
                  <div className="section-icon-wrapper">
                    <Gavel className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 8</span>
                    <h2 className="section-title-modern">Governing Law</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>These Terms are governed by the laws of India.</p>
                  <p>
                    Any disputes will be handled in the local courts of your jurisdiction.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 - Contact */}
            <section id="contact" className="scroll-mt-24">
              <div className="modern-card group contact-section">
                <div className="section-header">
                  <div className="section-icon-wrapper">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="section-label">Section 9</span>
                    <h2 className="section-title-modern">Contact Us</h2>
                  </div>
                </div>

                <div className="prose-content mt-6">
                  <p>If you have questions about these Terms, please contact us at:</p>

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

export default Terms;