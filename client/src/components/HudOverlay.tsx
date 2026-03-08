import { useState, useEffect } from "react";

export default function HudOverlay() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="hud-grid" />
      <div className="corner-bracket corner-tl" />
      <div className="corner-bracket corner-tr" />
      <div className="corner-bracket corner-bl" />
      <div className="corner-bracket corner-br" />
      <div className="status-indicator">
        <div className="status-dot" />
        <span className="status-text">SYSTEM ONLINE</span>
      </div>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
    </>
  );
}
