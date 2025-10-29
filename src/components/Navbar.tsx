import { NavLink, Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/consultancy", label: "Consultancy" },
  { to: "/internship", label: "Internship" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    // Close mobile menu if open
    if (open) {
      setOpen(false);
    }
    // Navigate to the new route
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b border-border/60">
        <nav className="container max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo.jpeg" 
                alt="Zidi Digital Solutions Logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="text-lg font-bold tracking-tight bg-gradient-primary bg-clip-text text-transparent">
                Zidi Digital Solutions
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.to);
                    }}
                    className={({ isActive }) =>
                      `text-sm transition-colors story-link cursor-pointer ${
                        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-2">
              <Button asChild variant="secondary">
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button asChild>
                <Link to="/internship">Apply for Internship</Link>
              </Button>
            </div>

            {/* Mobile */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground focus:outline-none"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden pb-4 animate-fade-in">
              <ul className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.to);
                      }}
                      className={({ isActive }) =>
                        `block px-2 py-2 rounded-md transition-colors cursor-pointer ${
                          isActive ? "text-primary bg-secondary" : "text-muted-foreground hover:text-foreground"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
                <li className="flex gap-2 pt-2">
                  <Button asChild className="flex-1" variant="secondary">
                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                  <Button asChild className="flex-1">
                    <Link to="/internship">Apply</Link>
                  </Button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
      <div className="h-0.5 bg-gradient-primary" />
    </header>
  );
}
