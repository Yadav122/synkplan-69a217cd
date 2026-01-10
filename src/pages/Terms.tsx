import Layout from "@/components/layout/Layout";
import { FileText, Mail, Smartphone, FolderOpen, Shield, Scale, Copyright, RefreshCw, Gavel, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import synkplanLogo from "@/assets/synkplan-logo.png";

const sections = [
  { id: "intro", title: "Introduction", icon: FileText },
  { id: "use", title: "Use of the App", icon: Smartphone },
  { id: "content", title: "User Content", icon: FolderOpen },
  { id: "privacy", title: "Privacy", icon: Shield },
  { id: "permissions", title: "Permissions", icon: Shield },
  { id: "liability", title: "Limitation of Liability", icon: Scale },
  { id: "ip", title: "Intellectual Property", icon: Copyright },
  { id: "modifications", title: "Modifications", icon: RefreshCw },
  { id: "governing", title: "Governing Law", icon: Gavel },
  { id: "contact", title: "Contact Us", icon: Mail },
];

const Terms = () => {
  const [activeSection, setActiveSection] = useState("intro");

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
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent to-background">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
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
              <div className="absolute inset-0 w-28 h-28 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl blur-xl" />
              <div className="relative w-24 h-24 rounded-2xl bg-background shadow-2xl shadow-primary/30 p-2 border border-border/50">
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
    </Layout>
  );
};

export default Terms;