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
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
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
    { href: "/#about", label: "About", type: "anchor" },
    { href: "/#skills", label: "Skills", type: "anchor" },
    { href: "/portfolio", label: "Portfolio", type: "route" },
    // { href: "/#contact", label: "Contact", type: "anchor" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(255,255,255,0.92)] backdrop-blur-xl border-b border-[rgba(0,0,0,0.07)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <span
            className="text-[#0A0A0F] text-[0.9rem] font-medium tracking-[0.1em]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            AJ
          </span>
          <span className="w-px h-4 bg-[#E8E8EC]" />
          <span
            className="text-[#8A8A96] text-[0.65rem] uppercase tracking-[0.25em] font-light"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            AIRIN JOHN
          </span>
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-[#4A4A56]"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav className="hidden md:flex items-center gap-[52px]">
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
            ),
          )}
          <a
            href="#contact"
            className="border border-[rgba(0,0,0,0.12)] text-[#0A0A0F] px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.15em] font-medium hover:text-[#A378FF] hover:border-[rgba(163,120,255,0.4)] transition-all duration-300"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            CONTACT
          </a>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[rgba(255,255,255,0.95)] backdrop-blur-xl md:hidden w-full border-t border-[rgba(0,0,0,0.06)]"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
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
                ),
              )}
              <a
                href="#contact"
                onClick={closeMenu}
                className="border border-[rgba(0,0,0,0.12)] text-[#0A0A0F] px-4 py-2 text-[0.7rem] uppercase tracking-[0.15em] font-medium text-center hover:text-[#A378FF] hover:border-[rgba(163,120,255,0.4)] transition-all duration-300 w-fit"
              >
                CONTACT
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
