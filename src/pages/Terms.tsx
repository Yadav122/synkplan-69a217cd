import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="container-page animate-fade-in">
        <h1 className="section-title">Terms and Conditions for SynkPlan</h1>
        <p className="text-muted-foreground mb-8">
          <strong>Effective Date: 09 January 2026</strong>
        </p>

        <div className="prose-content">
          <p>
            Welcome to SynkPlan ("we", "our", or "us"). By downloading or using this app, you agree to these Terms and Conditions. Please read them carefully.
          </p>

          <div className="mt-8">
            <h2 className="section-subtitle">1. Use of the App</h2>
            <p>
              SynkPlan is a productivity and study-focused app that helps users manage tasks, focus sessions, and track academic progress.
            </p>
            <p>You may use the app for personal, non-commercial purposes only.</p>
            <p>
              You agree not to misuse the app or its services. Misuse includes, but is not limited to:
            </p>
            <ul>
              <li>Interfering with app operations</li>
              <li>Attempting unauthorized access</li>
              <li>Using the app for illegal purposes</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">2. User Content</h2>
            <p>
              Any tasks, documents, images, or data you input into SynkPlan are considered user-generated content.
            </p>
            <p>You are responsible for the content you upload or create.</p>
            <p>
              SynkPlan does not claim ownership of your content, but may store it securely to provide app features.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">3. Privacy</h2>
            <p>Your use of SynkPlan is also governed by our Privacy Policy.</p>
            <p>
              By using the app, you consent to data collection and usage as described in the Privacy Policy.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">4. Permissions</h2>
            <p>SynkPlan may request access to certain device features:</p>
            <ul>
              <li>Camera – for document conversion or profile photo updates</li>
              <li>Photos / Media / Files – to select documents or images</li>
              <li>Notifications – for timers and reminders</li>
              <li>Do Not Disturb (DND) – optional, during focus sessions</li>
            </ul>
            <p>These permissions are only used when initiated by the user.</p>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">5. Limitation of Liability</h2>
            <p>SynkPlan is provided "as is" and "as available."</p>
            <p>
              We do not guarantee the app will be error-free, uninterrupted, or free from viruses.
            </p>
            <p>
              We are not responsible for any data loss, device issues, or outcomes resulting from use of the app.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">6. Intellectual Property</h2>
            <p>
              All SynkPlan branding, logos, design, and app content are owned by the SynkPlan team.
            </p>
            <p>
              You may not reproduce, distribute, or modify app materials without permission.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">7. Modifications</h2>
            <p>We may update the app or these Terms at any time.</p>
            <p>
              Users will be notified of significant changes via the app or email.
            </p>
            <p>Continued use after updates constitutes acceptance of new Terms.</p>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">8. Governing Law</h2>
            <p>These Terms are governed by the laws of India.</p>
            <p>
              Any disputes will be handled in the local courts of your jurisdiction.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="section-subtitle">9. Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at:
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

export default Terms;
