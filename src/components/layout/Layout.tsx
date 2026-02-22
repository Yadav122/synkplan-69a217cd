import { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div vaul-drawer-wrapper="" className="flex-1 flex flex-col bg-background">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
