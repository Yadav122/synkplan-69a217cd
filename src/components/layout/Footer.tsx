import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="text-lg font-bold text-foreground">SynkPlan</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/terms" className="nav-link">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="nav-link">
              Privacy Policy
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SynkPlan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
