import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: "#about", label: "About", type: "anchor" },
    { href: "#skills", label: "Skills", type: "anchor" },
    { href: "/portfolio", label: "Portfolio", type: "route" },
    { href: "#contact", label: "Contact", type: "anchor" },
  ];

  return (
    <header className="fixed w-full bg-background/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-primary font-playfair text-2xl font-bold tracking-tight">
          Airin John
        </Link>

        <button 
          onClick={toggleMenu} 
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            item.type === "route" ? (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-primary hover:text-secondary font-medium ${
                  location === item.href ? "text-secondary" : ""
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-primary hover:text-secondary font-medium ${
                  activeSection === item.href.substring(1) ? "active" : ""
                }`}
              >
                {item.label}
              </a>
            )
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white md:hidden w-full border-t border-gray-100"
          >
            <div className="container mx-auto px-6 py-3 flex flex-col space-y-3">
              {navItems.map((item) => (
                item.type === "route" ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="py-2 text-primary hover:text-secondary font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="py-2 text-primary hover:text-secondary font-medium"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
