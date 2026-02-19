"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ตรวจจับการเลื่อนจอเพื่อใส่ Effect พื้นหลังเบลอ (Glassmorphism)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tighter hover:text-primary transition-colors"
        >
          Dev<span className="text-primary">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/#projects" 
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="/#about" 
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
          <nav className="flex flex-col p-4 space-y-4 container mx-auto px-4">
            <Link 
              href="/#projects" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}