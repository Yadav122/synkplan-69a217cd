import Layout from "@/components/layout/Layout";
import { FileText, Mail } from "lucide-react";

const Terms = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-accent/50 to-background">
        <div className="container-page animate-fade-in">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Terms and Conditions</span>
            </h1>
            <p className="text-muted-foreground">for SynkPlan</p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Effective Date: 09 January 2026
            </div>
          </div>

          {/* Intro */}
          <div className="policy-section animate-fade-in-delay-1">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Welcome to SynkPlan ("we", "our", or "us"). By downloading or using this app, you agree to these Terms and Conditions. Please read them carefully.
            </p>
          </div>

          {/* Section 1 */}
          <div className="policy-section animate-fade-in-delay-2">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">1</span>
              Use of the App
            </h2>
            <div className="prose-content pl-11">
              <p>
                SynkPlan is a productivity and study-focused app that helps users manage tasks, focus sessions, and track academic progress.
              </p>
              <p>You may use the app for personal, non-commercial purposes only.</p>
              <p>
                You agree not to misuse the app or its services. Misuse includes, but is not limited to:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Interfering with app operations
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Attempting unauthorized access
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Using the app for illegal purposes
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="policy-section">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">2</span>
              User Content
            </h2>
            <div className="prose-content pl-11">
              <p>
                Any tasks, documents, images, or data you input into SynkPlan are considered user-generated content.
              </p>
              <p>You are responsible for the content you upload or create.</p>
              <p>
                SynkPlan does not claim ownership of your content, but may store it securely to provide app features.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="policy-section">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">3</span>
              Privacy
            </h2>
            <div className="prose-content pl-11">
              <p>Your use of SynkPlan is also governed by our Privacy Policy.</p>
              <p>
                By using the app, you consent to data collection and usage as described in the Privacy Policy.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="policy-section">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">4</span>
              Permissions
            </h2>
            <div className="prose-content pl-11">
              <p>SynkPlan may request access to certain device features:</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Camera – for document conversion or profile photo updates
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Photos / Media / Files – to select documents or images
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Notifications – for timers and reminders
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Do Not Disturb (DND) – optional, during focus sessions
                </li>
              </ul>
              <p className="mt-3">These permissions are only used when initiated by the user.</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="policy-section">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">5</span>
              Limitation of Liability
            </h2>
            <div className="prose-content pl-11">
              <p>SynkPlan is provided "as is" and "as available."</p>
              <p>
                We do not guarantee the app will be error-free, uninterrupted, or free from viruses.
              </p>
              <p>
                We are not responsible for any data loss, device issues, or outcomes resulting from use of the app.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="policy-section">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">6</span>
              Intellectual Property
            </h2>
            <div className="prose-content pl-11">
              <p>
                All SynkPlan branding, logos, design, and app content are owned by the SynkPlan team.
              </p>
              <p>
                You may not reproduce, distribute, or modify app materials without permission.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="policy-section">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">7</span>
              Modifications
            </h2>
            <div className="prose-content pl-11">
              <p>We may update the app or these Terms at any time.</p>
              <p>
                Users will be notified of significant changes via the app or email.
              </p>
              <p>Continued use after updates constitutes acceptance of new Terms.</p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="policy-section">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">8</span>
              Governing Law
            </h2>
            <div className="prose-content pl-11">
              <p>These Terms are governed by the laws of India.</p>
              <p>
                Any disputes will be handled in the local courts of your jurisdiction.
              </p>
            </div>
          </div>

          {/* Section 9 - Contact */}
          <div className="policy-section border-primary/20 bg-accent/30">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">9</span>
              Contact Us
            </h2>
            <div className="prose-content pl-11">
              <p>
                If you have questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a 
                  href="mailto:kdahiya296@gmail.com" 
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background border border-border hover:border-primary/40 transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">kdahiya296@gmail.com</span>
                </a>
                <a 
                  href="mailto:kumarharsh74799@gmail.com" 
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background border border-border hover:border-primary/40 transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium text-sm">kumarharsh74799@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;