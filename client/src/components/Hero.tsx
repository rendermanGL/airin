import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden:  { opacity: 0, y: 26 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: 'easeOut', delay }
  })
};

export default function Hero() {
  const cursorRef  = useRef<HTMLDivElement>(null);
  const spotRef    = useRef<HTMLDivElement>(null);
  const scrollBarRef = useRef<HTMLDivElement>(null);
  const fbPx1Ref   = useRef<HTMLDivElement>(null);
  const fbPx2Ref   = useRef<HTMLDivElement>(null);
  const fbPortRef  = useRef<HTMLDivElement>(null);
  const btn1Ref    = useRef<HTMLAnchorElement>(null);
  const btn2Ref    = useRef<HTMLAnchorElement>(null);

  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const layers = useRef([
    { ref: fbPx1Ref,  sx: 0, sy: 0, speedX: 0.025, speedY: 0.020 },
    { ref: fbPx2Ref,  sx: 0, sy: 0, speedX: 0.015, speedY: 0.012 },
    { ref: fbPortRef, sx: 0, sy: 0, speedX: 0.007, speedY: 0.006 },
  ]);

  const mouse  = useRef({ x: 0, y: 0 });
  const rafId  = useRef<number>(0);
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = window.matchMedia('(hover: none)').matches;

    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollBarRef.current) scrollBarRef.current.style.width = pct + '%';

      wordRefs.current.forEach(el => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) el.classList.add('line-drawn');
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    if (!isTouch.current) {
      const onMove = (e: MouseEvent) => {
        mouse.current = { x: e.clientX, y: e.clientY };
        if (cursorRef.current) {
          cursorRef.current.style.left = e.clientX + 'px';
          cursorRef.current.style.top  = e.clientY + 'px';
        }
      };
      document.addEventListener('mousemove', onMove);

      const interactives = document.querySelectorAll(
        'a, button, .hero-word, .stat-tile, .portrait-circle, .frame-b'
      );
      const grow   = () => cursorRef.current?.classList.add('big');
      const shrink = () => cursorRef.current?.classList.remove('big');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', grow);
        el.addEventListener('mouseleave', shrink);
      });

      const tick = () => {
        const { x: mx, y: my } = mouse.current;
        const cx = window.innerWidth  / 2;
        const cy = window.innerHeight / 2;
        const dx = mx - cx, dy = my - cy;

        if (spotRef.current) {
          spotRef.current.style.left = mx + 'px';
          spotRef.current.style.top  = my + 'px';
        }

        layers.current.forEach(l => {
          l.sx += (dx * l.speedX - l.sx) * 0.08;
          l.sy += (dy * l.speedY - l.sy) * 0.08;
          if (l.ref.current) {
            l.ref.current.style.transform = `translate(${l.sx}px, ${l.sy}px)`;
          }
        });

        [btn1Ref, btn2Ref].forEach(bRef => {
          const btn = bRef.current;
          if (!btn) return;
          const r  = btn.getBoundingClientRect();
          const bx = r.left + r.width  / 2;
          const by = r.top  + r.height / 2;
          const dist = Math.sqrt((mx - bx) ** 2 + (my - by) ** 2);
          btn.style.transform = dist < 90
            ? `translate(${(mx-bx)*((90-dist)/90)*0.38}px,${(my-by)*((90-dist)/90)*0.38}px)`
            : '';
        });

        rafId.current = requestAnimationFrame(tick);
      };
      rafId.current = requestAnimationFrame(tick);

      return () => {
        document.removeEventListener('mousemove', onMove);
        window.removeEventListener('scroll', onScroll);
        cancelAnimationFrame(rafId.current);
        interactives.forEach(el => {
          el.removeEventListener('mouseenter', grow);
          el.removeEventListener('mouseleave', shrink);
        });
      };
    }

    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section className="hero-section">

      <div className="scroll-bar" ref={scrollBarRef} />

      <div className="hud-corner hud-corner-tl" />
      <div className="hud-corner hud-corner-tr" />
      <div className="hud-corner hud-corner-bl" />
      <div className="hud-corner hud-corner-br" />

      <div className="hud-grid-bg" />

      <div id="hud-cursor" ref={cursorRef} />
      <div className="hud-spotlight" ref={spotRef} />


      {/* MOBILE LAYOUT */}
      <div className="hero-mobile-layout">

        <motion.div className="hero-m-label"
          variants={fadeUp} initial="hidden" animate="visible" custom={0.05}>
          // Brand Marketing Manager
        </motion.div>

        <motion.div className="hero-m-portrait-zone"
          variants={fadeUp} initial="hidden" animate="visible" custom={0.15}>
          <div className="frame-b-mobile">

            <div className="pulse-ring-m" />
            <div className="pulse-ring-m" />
            <div className="pulse-ring-m" />

            <svg className="hud-svg" viewBox="0 0 260 260" style={{ position: 'absolute', inset: 0, zIndex: 20, pointerEvents: 'none' }}>
              <g className="rot-cw18">
                <path className="arc-seg arc-seg-iris" d="M 130,7 A 123,123 0 0 1 253,130" />
                <path className="arc-seg arc-seg-dim"  d="M 253,130 A 123,123 0 0 1 130,253" />
                <path className="arc-seg arc-seg-iris" d="M 130,253 A 123,123 0 0 1 7,130" />
                <path className="arc-seg arc-seg-dim"  d="M 7,130 A 123,123 0 0 1 130,7" />
              </g>
              <circle className="arc-seg-thin rot-ccw30" cx="130" cy="130" r="106" />
            </svg>

            <svg className="hud-svg" viewBox="0 0 260 260" style={{ position: 'absolute', inset: 0, zIndex: 20, pointerEvents: 'none' }}>
              <path className="t-bracket" d="M 34,48 L 34,34 L 48,34" />
              <path className="t-bracket" d="M 212,34 L 226,34 L 226,48" />
              <path className="t-bracket" d="M 34,212 L 34,226 L 48,226" />
              <path className="t-bracket" d="M 212,226 L 226,226 L 226,212" />
              <circle className="arc-seg arc-seg-dim" cx="130" cy="130" r="85" strokeDasharray="10 4" />
              <line stroke="rgba(163,120,255,0.35)" strokeWidth="0.7" x1="130" y1="40"  x2="130" y2="50" />
              <line stroke="rgba(163,120,255,0.35)" strokeWidth="0.7" x1="130" y1="210" x2="130" y2="220" />
              <line stroke="rgba(163,120,255,0.35)" strokeWidth="0.7" x1="40"  y1="130" x2="50"  y2="130" />
              <line stroke="rgba(163,120,255,0.35)" strokeWidth="0.7" x1="210" y1="130" x2="220" y2="130" />
            </svg>

            <div className="mobile-scan" />

            <div className="portrait-circle">
              <img
                src="/airin-portrait.jpg"
                alt="Airin John"
                onError={(e) => {
                  const img = e.currentTarget;
                  img.style.display = 'none';
                  const fb = img.nextElementSibling as HTMLElement;
                  if (fb) fb.style.display = 'flex';
                }}
              />
              <div className="portrait-fallback" style={{ display: 'none' }}>
                <span>AJ</span>
              </div>
            </div>

            <svg style={{ position: 'absolute', inset: 0, zIndex: 21, pointerEvents: 'none' }} viewBox="0 0 260 260">
              <circle cx="130" cy="130" r="80" fill="none" stroke="rgba(163,120,255,0.3)"  strokeWidth="1" />
              <circle cx="130" cy="130" r="83" fill="none" stroke="rgba(163,120,255,0.08)" strokeWidth="0.5" strokeDasharray="4 8" />
            </svg>

            <div className="mobile-chips">
              <div className="m-chip m-chip-tl">
                <span className="chip-cat">Role</span>
                <span className="chip-val">Brand Marketing</span>
              </div>
              <div className="m-chip m-chip-br">
                <span className="chip-cat">Market</span>
                <span className="chip-val">UAE · GCC</span>
              </div>
            </div>

          </div>
        </motion.div>

        <motion.div className="hero-m-name"
          variants={fadeUp} initial="hidden" animate="visible" custom={0.28}>
          <span className="hero-m-word"
            ref={el => { wordRefs.current[0] = el; }}>
            Airin
          </span>
          <span className="hero-m-word"
            ref={el => { wordRefs.current[1] = el; }}>
            John
          </span>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.42}>
          <div className="sep-iris-m" />

          <div className="stat-strip-m">
            <div className="stat-tile-m">
              <span className="stat-val-m" style={{ color: '#A378FF' }}>6+</span>
              <span className="stat-lbl-m">Years</span>
            </div>
            <div className="stat-tile-m">
              <span className="stat-val-m">UAE</span>
              <span className="stat-lbl-m">Market</span>
            </div>
            <div className="stat-tile-m">
              <span className="stat-val-m">GCC</span>
              <span className="stat-lbl-m">Region</span>
            </div>
            <div className="stat-tile-m">
              <span className="stat-val-m" style={{ fontSize: '0.62rem' }}>F&amp;B+</span>
              <span className="stat-lbl-m">Sectors</span>
            </div>
          </div>

          <div className="cta-row-m">
            <a href="/portfolio" className="btn-primary-m">View Work</a>
            <a href="#contact"   className="btn-ghost-m">Contact</a>
          </div>
        </motion.div>

        <div className="status-m">
          <span className="dot-online" />
          <span style={{ fontSize: '0.52rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8A8A96', fontFamily: "'Space Grotesk', sans-serif" }}>
            Available
          </span>
        </div>

      </div>


      {/* DESKTOP LAYOUT */}
      <div className="hero-desktop-layout">

        <div className="hero-text-col">

          <motion.div className="hud-label" style={{ marginBottom: '20px' }}
            variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>
            // Brand Marketing Manager
          </motion.div>

          <motion.div className="word-hero-wrap"
            variants={fadeUp} initial="hidden" animate="visible" custom={0.22}>
            <span className="hero-word">
              Airin
              <span className="word-tag">// Strategist</span>
            </span>
            <span className="hero-word">
              John
              <span className="word-tag">// Brand Builder</span>
            </span>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.34}>
            <div className="sep-iris" />
            <div className="stat-strip">
              <div className="stat-tile">
                <span className="stat-val" style={{ color: '#A378FF' }}>6+</span>
                <span className="stat-lbl">Years</span>
              </div>
              <div className="stat-tile">
                <span className="stat-val">UAE</span>
                <span className="stat-lbl">Market</span>
              </div>
              <div className="stat-tile">
                <span className="stat-val">GCC</span>
                <span className="stat-lbl">Region</span>
              </div>
              <div className="stat-tile">
                <span className="stat-val" style={{ fontSize: '0.68rem' }}>F&amp;B · Life · Tech</span>
                <span className="stat-lbl">Sectors</span>
              </div>
            </div>
            <div className="cta-row">
              <a href="/portfolio" className="btn-primary" ref={btn1Ref}>View Work</a>
              <a href="#contact"   className="btn-ghost"   ref={btn2Ref}>Contact</a>
            </div>
          </motion.div>

        </div>

        <div className="portrait-zone-desktop">
          <div className="frame-b" id="frame-b-el">

            <div className="pulse-ring" />
            <div className="pulse-ring" />
            <div className="pulse-ring" />

            <div className="px-layer" ref={fbPx1Ref} style={{ position: 'absolute', inset: 0 }}>
              <svg className="hud-svg" viewBox="0 0 380 380">
                <g className="rot-cw18">
                  <path className="arc-seg arc-seg-iris" d="M 190,10 A 180,180 0 0 1 370,190" />
                  <path className="arc-seg arc-seg-dim"  d="M 370,190 A 180,180 0 0 1 190,370" />
                  <path className="arc-seg arc-seg-iris" d="M 190,370 A 180,180 0 0 1 10,190" />
                  <path className="arc-seg arc-seg-dim"  d="M 10,190 A 180,180 0 0 1 190,10" />
                </g>
                <circle className="arc-seg-thin rot-ccw30" cx="190" cy="190" r="155" />
              </svg>
            </div>

            <div className="px-layer" ref={fbPx2Ref} style={{ position: 'absolute', inset: 0 }}>
              <svg className="hud-svg" viewBox="0 0 380 380">
                <path className="t-bracket" d="M 50,70 L 50,50 L 70,50" />
                <path className="t-bracket" d="M 310,50 L 330,50 L 330,70" />
                <path className="t-bracket" d="M 50,310 L 50,330 L 70,330" />
                <path className="t-bracket" d="M 310,330 L 330,330 L 330,310" />
                <circle className="arc-seg arc-seg-dim" cx="190" cy="190" r="125" strokeDasharray="12 5" />
                <line stroke="rgba(163,120,255,0.4)" strokeWidth="0.7" x1="190" y1="60"  x2="190" y2="72" />
                <line stroke="rgba(163,120,255,0.4)" strokeWidth="0.7" x1="190" y1="308" x2="190" y2="320" />
                <line stroke="rgba(163,120,255,0.4)" strokeWidth="0.7" x1="60"  y1="190" x2="72"  y2="190" />
                <line stroke="rgba(163,120,255,0.4)" strokeWidth="0.7" x1="308" y1="190" x2="320" y2="190" />
              </svg>
            </div>

            <div className="portrait-circle" ref={fbPortRef}>
              <img
                src="/airin-portrait.jpg"
                alt="Airin John"
                onError={(e) => {
                  const img = e.currentTarget;
                  img.style.display = 'none';
                  const fb = img.nextElementSibling as HTMLElement;
                  if (fb) fb.style.display = 'flex';
                }}
              />
              <div className="portrait-fallback" style={{ display: 'none' }}>
                <span>AJ</span>
              </div>
            </div>

            <svg style={{ position: 'absolute', inset: 0, zIndex: 21, pointerEvents: 'none' }} viewBox="0 0 380 380">
              <circle cx="190" cy="190" r="117" fill="none" stroke="rgba(163,120,255,0.35)" strokeWidth="1" />
              <circle cx="190" cy="190" r="120" fill="none" stroke="rgba(163,120,255,0.1)"  strokeWidth="0.5" strokeDasharray="4 8" />
            </svg>

            <div className="callout-b cb-1" style={{ position: 'absolute', top: '63px', left: '63px', width: 0, height: 0, overflow: 'visible' }}>
              <svg style={{ position: 'absolute', top: '-70px', left: '-155px', overflow: 'visible', display: 'block' }} width="160" height="75">
                <polyline points="155,70 55,0 0,0" />
              </svg>
              <div className="cb-terminus" style={{ position: 'absolute', top: 'calc(-70px - 2px)', left: '-157px' }} />
              <div className="cb-label" style={{ position: 'absolute', top: 'calc(-70px - 24px)', left: '-157px', transform: 'translateX(-100%)', textAlign: 'right' }}>
                <span className="cb-cat">ROLE</span>Brand Marketing Mgr
              </div>
            </div>
            <div className="callout-b cb-2" style={{ position: 'absolute', top: '140px', left: '63px', width: 0, height: 0, overflow: 'visible' }}>
              <svg style={{ position: 'absolute', top: '-40px', left: '-155px', overflow: 'visible', display: 'block' }} width="160" height="50">
                <polyline points="155,40 55,0 0,0" />
              </svg>
              <div className="cb-terminus" style={{ position: 'absolute', top: 'calc(-40px - 2px)', left: '-157px' }} />
              <div className="cb-label" style={{ position: 'absolute', top: 'calc(-40px - 24px)', left: '-157px', transform: 'translateX(-100%)', textAlign: 'right' }}>
                <span className="cb-cat">COMPANY</span>Black Sheep Coffee
              </div>
            </div>
            <div className="callout-b cb-3" style={{ position: 'absolute', bottom: '140px', left: '63px', width: 0, height: 0, overflow: 'visible' }}>
              <svg style={{ position: 'absolute', bottom: '-40px', left: '-155px', overflow: 'visible', display: 'block' }} width="160" height="50">
                <polyline points="155,0 55,40 0,40" />
              </svg>
              <div className="cb-terminus" style={{ position: 'absolute', bottom: 'calc(-40px - 2px)', left: '-157px' }} />
              <div className="cb-label" style={{ position: 'absolute', bottom: 'calc(-40px - 24px)', left: '-157px', transform: 'translateX(-100%)', textAlign: 'right' }}>
                <span className="cb-cat">MARKET</span>UAE · GCC
              </div>
            </div>
            <div className="callout-b cb-4" style={{ position: 'absolute', bottom: '63px', left: '63px', width: 0, height: 0, overflow: 'visible' }}>
              <svg style={{ position: 'absolute', bottom: '-70px', left: '-155px', overflow: 'visible', display: 'block' }} width="160" height="75">
                <polyline points="155,0 55,70 0,70" />
              </svg>
              <div className="cb-terminus" style={{ position: 'absolute', bottom: 'calc(-70px - 2px)', left: '-157px' }} />
              <div className="cb-label" style={{ position: 'absolute', bottom: 'calc(-70px - 24px)', left: '-157px', transform: 'translateX(-100%)', textAlign: 'right' }}>
                <span className="cb-cat">EXP</span>6+ Years
              </div>
            </div>

          </div>
        </div>

      </div>

      <div style={{
        position: 'absolute', bottom: '48px', right: '7%',
        textAlign: 'right', zIndex: 10,
        display: 'none',
      }}
        className="desktop-available"
      >
        <div className="hud-label" style={{ justifyContent: 'flex-end', marginBottom: '8px' }}>
          // Open to new roles
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end' }}>
          <span className="dot-online" />
          <span style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8A8A96', fontFamily: "'Space Grotesk', sans-serif" }}>
            Available
          </span>
        </div>
      </div>

    </section>
  );
}
