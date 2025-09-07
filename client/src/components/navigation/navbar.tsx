import { useState } from "react";
import { Video, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onJoinCommunity?: () => void;
}

export default function Navbar({ onJoinCommunity }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" data-testid="link-home">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Video className="text-background font-bold" size={16} />
            </div>
            <span className="text-xl font-display font-bold gradient-text">Viral Vault</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-case-studies">
              Case Studies
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-about">
              About
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact">
              Contact
            </Link>
            <a href="/api/login" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-login">
              Login
            </a>
            {onJoinCommunity && (
              <Button 
                onClick={onJoinCommunity}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                data-testid="button-join-community"
              >
                Join Community
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/case-studies" 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-case-studies"
              >
                Case Studies
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-about"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-contact"
              >
                Contact
              </Link>
              <a 
                href="/api/login" 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-mobile-login"
              >
                Login
              </a>
              {onJoinCommunity && (
                <div className="px-3 py-2">
                  <Button 
                    onClick={() => {
                      onJoinCommunity();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    data-testid="button-mobile-join-community"
                  >
                    Join Community
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
