import { useEffect, useRef } from 'react';

export default function HudCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
      if (spotRef.current) {
        spotRef.current.style.left = e.clientX + 'px';
        spotRef.current.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', onMove);

    const grow = () => cursorRef.current?.classList.add('big');
    const shrink = () => cursorRef.current?.classList.remove('big');

    const bindInteractives = () => {
      const els = document.querySelectorAll(
        'a, button, .hero-word, .stat-tile, .portrait-circle, .frame-b, .dos-card, .case-file, .portfolio-filter-btn'
      );
      els.forEach((el) => {
        el.addEventListener('mouseenter', grow);
        el.addEventListener('mouseleave', shrink);
      });
      return els;
    };

    let els = bindInteractives();

    const observer = new MutationObserver(() => {
      els.forEach((el) => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
      els = bindInteractives();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      observer.disconnect();
      els.forEach((el) => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, []);

  return (
    <>
      <div id="hud-cursor" ref={cursorRef} />
      <div className="hud-spotlight" ref={spotRef} />
    </>
  );
}
