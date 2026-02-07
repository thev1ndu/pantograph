"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Features", action: () => scrollToSection("features") },
    { name: "Pricing", action: () => scrollToSection("pricing") },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`z-50 transition-all duration-300 w-full ${
          isScrolled
            ? "fixed top-0 left-0 right-0 mx-auto max-w-[1440px] bg-background/60 backdrop-blur-xl border-b border-white/10"
            : "absolute top-0 bg-transparent border-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => scrollToSection("hero")}
          >
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              Pantograph
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                onClick={link.action}
                className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/0 transition-colors"
              >
                {link.name}
              </Button>
            ))}

            <div className="h-6 w-px bg-white/10 mx-4" />

            <Button
              variant="default"
              size="sm"
              onClick={() =>
                session?.user ? scrollToSection("editor") : signIn("google")
              }
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 shadow-[0_0_15px_-3px_hsl(200_100%_50%/0.5)] hover:shadow-[0_0_20px_-3px_hsl(200_100%_50%/0.7)] transition-all duration-300 ml-4"
            >
              {session?.user ? "Launch App" : "Start Editing"}
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-2 hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  onClick={link.action}
                  className="w-full justify-start text-sm font-medium h-10 text-muted-foreground hover:text-foreground hover:bg-white/5 px-4"
                >
                  {link.name}
                </Button>
              ))}
              <div className="h-px w-full bg-white/10 my-2" />
              <Button
                variant="default"
                size="default"
                onClick={() => {
                  session?.user ? scrollToSection("editor") : signIn("google");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-sm font-semibold h-10 shadow-lg"
              >
                {session?.user ? "Launch App" : "Start Editing"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
