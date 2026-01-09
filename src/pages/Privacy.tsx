import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="container-page animate-fade-in">
        <h1 className="section-title">Privacy Policy for SynkPlan</h1>
        <p className="text-muted-foreground mb-8">
          <strong>Effective Date: 09 January 2026</strong>
        </p>

        <div className="prose-content">
          <p>
            SynkPlan ("we", "our", or "us") is a productivity and study-focused mobile application designed to help users manage tasks, focus sessions, document conversion, and track academic progress. We are committed to protecting your privacy and being transparent about how your data is handled.
          </p>

          <div className="mt-8">
            <h2 className="section-subtitle">1. Information We Collect</h2>
            <p>We collect only the information required to provide the app's features.</p>

            <h3 className="font-semibold mt-4 mb-2 text-foreground">a) Personal Information</h3>
            <p>When you sign in using Google:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Profile photo (if provided by Google)</li>
            </ul>
            <p>This information is used only for authentication and account identification.</p>

            <h3 className="font-semibold mt-4 mb-2 text-foreground">b) User-Generated Content</h3>
            <p>Data created by you inside the app, including:</p>
            <ul>
              <li>Tasks, schedules, and to-do items</li>
              <li>Focus sessions and timer data</li>
              <li>Productivity and study analytics</li>
              <li>Documents, images, or PDFs you choose to convert</li>
              <li>Profile photo selected or captured by the user</li>
            </ul>
            <p>This data is used solely to provide app functionality.</p>

            <h3 className="font-semibold mt-4 mb-2 text-foreground">c) App Usage & Analytics Data</h3>
            <ul>
              <li>Focus duration and session history</li>
              <li>Subject-wise or task-wise productivity data</li>
            </ul>
            <p>This information is used only to generate graphs and insights within the app.</p>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">2. Permissions We Use & Why</h2>
            <p>SynkPlan requests the following permissions only when required for a feature:</p>

            <h3 className="font-semibold mt-4 mb-2 text-foreground">a) Notifications</h3>
            <p>Used for focus timers, reminders, and alerts.</p>

            <h3 className="font-semibold mt-4 mb-2 text-foreground">b) Do Not Disturb (DND) Access</h3>
            <p>Used only during focus sessions, if the user enables it.</p>
            <p>Helps minimize distractions.</p>
            <p>This permission is optional and fully user-controlled.</p>

            <h3 className="font-semibold mt-4 mb-2 text-foreground">c) Storage / Files Access</h3>
            <p>Used to:</p>
            <ul>
              <li>Select documents or images from the device</li>
              <li>Convert files (e.g., image to PDF)</li>
            </ul>
            <p>Files are accessed only when the user initiates a conversion.</p>

            <h3 className="font-semibold mt-4 mb-2 text-foreground">d) Photos / Media Access</h3>
            <p>Used to:</p>
            <ul>
              <li>Select images for document conversion</li>
              <li>Choose a profile photo from the device gallery</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-2 text-foreground">e) Camera Access</h3>
            <p>Used to:</p>
            <ul>
              <li>Capture images for document-to-PDF conversion</li>
              <li>Take a photo for profile picture updates (optional)</li>
            </ul>
            <p>
              The camera is never accessed in the background and is used only when the user explicitly chooses to do so.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">3. Information We Do NOT Collect</h2>
            <p>We do not collect:</p>
            <ul>
              <li>Location data</li>
              <li>Contacts</li>
              <li>Call logs or SMS data</li>
              <li>Audio recordings</li>
              <li>Payment or financial information</li>
              <li>Personal messages</li>
              <li>Background photos or videos</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">4. How We Use Your Information</h2>
            <p>Your data is used to:</p>
            <ul>
              <li>Authenticate users securely</li>
              <li>Provide productivity, focus, and document conversion features</li>
              <li>Generate analytics and insights for the user</li>
              <li>Improve app reliability and performance</li>
            </ul>
            <p>We do not sell, trade, or rent user data.</p>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">5. Data Sharing & Third-Party Services</h2>
            <p>SynkPlan uses trusted third-party services:</p>
            <ul>
              <li>Google Sign-In – user authentication</li>
              <li>Firebase (Google LLC) – app functionality, analytics, and secure storage</li>
            </ul>
            <p>These services comply with industry-standard privacy and security practices.</p>
            <p>We do not share data with advertisers or unrelated third parties.</p>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">6. Data Storage & Security</h2>
            <p>We use reasonable security measures such as:</p>
            <ul>
              <li>Secure communication protocols</li>
              <li>Authentication via Google</li>
              <li>Controlled access to stored data</li>
            </ul>
            <p>
              No method of data transmission or storage is 100% secure, but we strive to protect user information.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">7. User Control & Data Deletion</h2>
            <p>Users have full control over their data:</p>
            <ul>
              <li>You may sign out at any time</li>
              <li>You may request deletion of your account and associated data</li>
            </ul>
            <p>To request data deletion, contact us at:</p>
            <p className="font-medium text-foreground">
              📧 kdahiya296@gmail.com || kumarharsh74799@gmail.com
            </p>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">8. Children's Privacy</h2>
            <p>SynkPlan is not intended for children under the age of 13.</p>
            <p>We do not knowingly collect personal data from children.</p>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">9. Changes to This Privacy Policy</h2>
            <p>We may update this policy occasionally.</p>
            <p>Any changes will be reflected here with a revised effective date.</p>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">10. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, contact us at:
            </p>
            <p className="font-medium text-foreground">
              📧 kdahiya296@gmail.com || kumarharsh74799@gmail.com
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
