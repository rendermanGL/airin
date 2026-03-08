import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { href: "/#about", label: "About", type: "anchor" },
    { href: "/#skills", label: "Skills", type: "anchor" },
    { href: "/portfolio", label: "Portfolio", type: "route" },
    { href: "/#contact", label: "Contact", type: "anchor" },
  ];

  return (
    <header
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(25, 0, 25, 0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(251, 228, 216, 0.08)' : '1px solid transparent',
      }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="tracking-[0.14em] uppercase text-sm"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, color: 'var(--col-cream)' }}
        >
          Airin John
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="var(--col-cream)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) =>
            item.type === "route" ? (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${location === item.href ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${activeSection === item.href.substring(2) ? "active" : ""}`}
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full"
            style={{
              background: 'rgba(25, 0, 25, 0.9)',
              backdropFilter: 'blur(16px)',
              borderTop: '1px solid rgba(251, 228, 216, 0.08)',
            }}
          >
            <div className="container mx-auto px-6 py-3 flex flex-col space-y-3">
              {navItems.map((item) =>
                item.type === "route" ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="nav-link py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="nav-link py-2"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
