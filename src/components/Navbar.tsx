import { useState, useEffect } from "react";
import { Droplets, Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Before & After", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 z-50">
          <img src="https://i.imgur.com/EeV8WdJ.png" alt="The Pelican Pressure Washing" className="h-16 md:h-20 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-semibold text-sm uppercase tracking-widest transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-slate-500' : 'text-slate-500'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:5039972313" 
              className={`bg-white border-2 border-slate-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-slate-900 hover:text-white transition-all`}
            >
              (503) 997-2313
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden z-50 p-2 -mr-2 ${
            isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-slate-900'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40 pt-24 px-6 flex flex-col gap-6 h-dvh">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold tracking-tight text-slate-900 pb-4 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-auto pb-12 flex flex-col gap-4">
              <a 
                href="tel:5039972313" 
                className="flex items-center justify-center gap-3 w-full bg-slate-50 py-4 rounded-xl font-bold text-lg text-slate-900"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                (503) 997-2313
              </a>
              <Button size="lg" className="w-full text-lg" onClick={() => {
                setIsMobileMenuOpen(false)
                document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})
              }}>
                Get Your Free Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
