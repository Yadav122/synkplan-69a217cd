import Layout from "@/components/layout/Layout";
import { Shield, Mail } from "lucide-react";

const Privacy = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-accent/50 to-background">
        <div className="container-page animate-fade-in">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Privacy Policy</span>
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
              SynkPlan ("we", "our", or "us") is a productivity and study-focused mobile application designed to help users manage tasks, focus sessions, document conversion, and track academic progress. We are committed to protecting your privacy and being transparent about how your data is handled.
            </p>
          </div>

          {/* Section 1 */}
          <div className="policy-section animate-fade-in-delay-2">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">1</span>
              Information We Collect
            </h2>
            <div className="prose-content pl-11">
              <p>We collect only the information required to provide the app's features.</p>

              <h3 className="font-semibold mt-5 mb-3 text-foreground text-base">a) Personal Information</h3>
              <p>When you sign in using Google:</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Name
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Email address
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Profile photo (if provided by Google)
                </li>
              </ul>
              <p className="mt-3">This information is used only for authentication and account identification.</p>

              <h3 className="font-semibold mt-5 mb-3 text-foreground text-base">b) User-Generated Content</h3>
              <p>Data created by you inside the app, including:</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Tasks, schedules, and to-do items
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Focus sessions and timer data
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Productivity and study analytics
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Documents, images, or PDFs you choose to convert
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Profile photo selected or captured by the user
                </li>
              </ul>
              <p className="mt-3">This data is used solely to provide app functionality.</p>

              <h3 className="font-semibold mt-5 mb-3 text-foreground text-base">c) App Usage & Analytics Data</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Focus duration and session history
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Subject-wise or task-wise productivity data
                </li>
              </ul>
              <p className="mt-3">This information is used only to generate graphs and insights within the app.</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="policy-section">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">2</span>
              Permissions We Use & Why
            </h2>
            <div className="prose-content pl-11">
              <p>SynkPlan requests the following permissions only when required for a feature:</p>

              <h3 className="font-semibold mt-5 mb-3 text-foreground text-base">a) Notifications</h3>
              <p>Used for focus timers, reminders, and alerts.</p>

              <h3 className="font-semibold mt-5 mb-3 text-foreground text-base">b) Do Not Disturb (DND) Access</h3>
              <p>Used only during focus sessions, if the user enables it.</p>
              <p>Helps minimize distractions.</p>
              <p>This permission is optional and fully user-controlled.</p>

              <h3 className="font-semibold mt-5 mb-3 text-foreground text-base">c) Storage / Files Access</h3>
              <p>Used to:</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Select documents or images from the device
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Convert files (e.g., image to PDF)
                </li>
              </ul>
              <p className="mt-3">Files are accessed only when the user initiates a conversion.</p>

              <h3 className="font-semibold mt-5 mb-3 text-foreground text-base">d) Photos / Media Access</h3>
              <p>Used to:</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Select images for document conversion
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Choose a profile photo from the device gallery
                </li>
              </ul>

              <h3 className="font-semibold mt-5 mb-3 text-foreground text-base">e) Camera Access</h3>
              <p>Used to:</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Capture images for document-to-PDF conversion
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Take a photo for profile picture updates (optional)
                </li>
              </ul>
              <p className="mt-3">
                The camera is never accessed in the background and is used only when the user explicitly chooses to do so.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="policy-section">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">3</span>
              Information We Do NOT Collect
            </h2>
            <div className="prose-content pl-11">
              <p>We do not collect:</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                  Location data
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                  Contacts
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                  Call logs or SMS data
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                  Audio recordings
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                  Payment or financial information
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                  Personal messages
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                  Background photos or videos
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="policy-section">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">4</span>
              How We Use Your Information
            </h2>
            <div className="prose-content pl-11">
              <p>Your data is used to:</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Authenticate users securely
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Provide productivity, focus, and document conversion features
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Generate analytics and insights for the user
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Improve app reliability and performance
                </li>
              </ul>
              <p className="mt-4 font-medium text-foreground">We do not sell, trade, or rent user data.</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="policy-section">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">5</span>
              Data Sharing & Third-Party Services
            </h2>
            <div className="prose-content pl-11">
              <p>SynkPlan uses trusted third-party services:</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Google Sign-In – user authentication
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Firebase (Google LLC) – app functionality, analytics, and secure storage
                </li>
              </ul>
              <p className="mt-3">These services comply with industry-standard privacy and security practices.</p>
              <p className="font-medium text-foreground">We do not share data with advertisers or unrelated third parties.</p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="policy-section">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">6</span>
              Data Storage & Security
            </h2>
            <div className="prose-content pl-11">
              <p>We use reasonable security measures such as:</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Secure communication protocols
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Authentication via Google
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  Controlled access to stored data
                </li>
              </ul>
              <p className="mt-3">
                No method of data transmission or storage is 100% secure, but we strive to protect user information.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="policy-section">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">7</span>
              User Control & Data Deletion
            </h2>
            <div className="prose-content pl-11">
              <p>Users have full control over their data:</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  You may sign out at any time
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  You may request deletion of your account and associated data
                </li>
              </ul>
              <p className="mt-4">To request data deletion, contact us at the email addresses below.</p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="policy-section">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">8</span>
              Children's Privacy
            </h2>
            <div className="prose-content pl-11">
              <p>SynkPlan is not intended for children under the age of 13.</p>
              <p>We do not knowingly collect personal data from children.</p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="policy-section">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">9</span>
              Changes to This Privacy Policy
            </h2>
            <div className="prose-content pl-11">
              <p>We may update this policy occasionally.</p>
              <p>Any changes will be reflected here with a revised effective date.</p>
            </div>
          </div>

          {/* Section 10 - Contact */}
          <div className="policy-section border-primary/20 bg-accent/30">
            <h2 className="flex items-center text-xl font-semibold mb-4 text-foreground">
              <span className="section-number">10</span>
              Contact Us
            </h2>
            <div className="prose-content pl-11">
              <p>
                If you have questions or concerns about this Privacy Policy, contact us at:
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

export default Privacy;