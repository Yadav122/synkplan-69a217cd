import { Link } from "react-router-dom";
import synkplanLogo from "@/assets/synkplan-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
              <img
                src={synkplanLogo}
                alt="SynkPlan Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gradient whitespace-nowrap">SynkPlan</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
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
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SynkPlan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;