import Layout from "@/components/layout/Layout";
import { Shield, Mail, Lock, Eye, Database, Bell, FileText, UserCheck, Users, RefreshCw, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import synkplanLogo from "@/assets/synkplan-logo.png";

const sections = [
  { id: "intro", title: "Introduction", icon: Shield },
  { id: "collect", title: "Information We Collect", icon: Database },
  { id: "permissions", title: "Permissions We Use", icon: Lock },
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
                      "Background photos or videos"
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
    </Layout>
  );
};

export default Privacy;