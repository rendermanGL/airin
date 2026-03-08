import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const awards = {
  '2020': [
    'FACT Magazine — Favorite Vegan Friendly Cafe',
  ],
  '2021': [
    'FACT Magazine — Best Vegan Friendly Cafe Dubai',
    'WhatsOn Dubai — Favorite Healthy Eating Restaurant',
    'WhatsOn Abu Dhabi — Favorite Healthy Eating Restaurant',
    'Leaders F&B — Leading Cafe',
  ],
  '2022': [
    'Dubai Green Star Awards',
    'PETA Awards',
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

export default function AwardsRecognition() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.case-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <main className="awards-page">
        <div className="hud-grid-bg" />

        <section className="strat-wrap">
          <header className="strat-head">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.05}>
              <nav className="strat-breadcrumb">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <Link href="/portfolio">Portfolio</Link>
                <span className="sep">/</span>
                <span style={{ color: '#0A0A0F' }}>Awards & Recognition</span>
              </nav>

              <div className="strat-label">// Case Files · Recognition Archive</div>
              <h1 className="strat-title">Awards & Recognition</h1>
              <p className="strat-sub">
                A verified archive of awards, nominations, and recognition signals earned
                through strategic marketing, brand positioning, and community engagement
                across the GCC market.
              </p>

              <div className="strat-meta">
                <div className="strat-meta-tile">
                  <span className="strat-meta-val" style={{ color: '#A378FF' }}>07+ Awards</span>
                  <span className="strat-meta-lbl">Total</span>
                </div>
                <div className="strat-meta-tile">
                  <span className="strat-meta-val">2020–2022</span>
                  <span className="strat-meta-lbl">Timeline</span>
                </div>
                <div className="strat-meta-tile">
                  <span className="strat-meta-val">GCC</span>
                  <span className="strat-meta-lbl">Recognition</span>
                </div>
                <div className="strat-meta-tile">
                  <span className="strat-meta-val">Wild & The Moon</span>
                  <span className="strat-meta-lbl">Brand</span>
                </div>
              </div>
            </motion.div>
          </header>

          <section className="strat-list">
            <div className="case-file case-reveal">
              <div className="case-corner tl" />
              <div className="case-corner tr" />

              <div className="case-top">
                <span className="case-file-id">
                  <span className="fid">FILE_AW_001</span>
                </span>
                <span className="case-status">● VERIFIED</span>
              </div>

              <div className="case-grid">
                <div className="case-media">
                  <div className="case-image-wrap">
                    <img
                      src="/portfolio-images/awards-recognition.jpg"
                      alt="Awards & Recognition"
                      className="case-image"
                    />
                    <div className="case-scan" />
                  </div>
                  <div className="case-pills">
                    <span className="case-pill featured">Wild & The Moon</span>
                    <span className="case-pill featured">Recognition Archive</span>
                    <span className="case-pill">GCC</span>
                  </div>
                </div>

                <div className="case-body">
                  <div className="case-type">Recognition Archive</div>
                  <h3 className="case-title">Wild & The Moon</h3>
                  <p className="case-subtitle">Awards, Nominations & Industry Recognition</p>

                  <div className="case-sections">
                    <div className="case-block">
                      <div className="case-block-label">Context</div>
                      <p className="case-copy">
                        Played a pivotal role in winning multiple awards and secured PR
                        placements in leading publications, enhancing the brand's regional
                        credibility and positioning Wild & The Moon as a leader in sustainable
                        and health-conscious dining.
                      </p>
                    </div>

                    <div className="case-block">
                      <div className="case-block-label">Awards by Year</div>

                      {Object.entries(awards).map(([year, items]) => (
                        <div key={year} className="award-year-row">
                          <div className="case-block-label award-year-label">{year}</div>
                          <div className="case-list">
                            {items.map((item, i) => (
                              <div key={i} className="case-list-item">{item}</div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="case-block">
                      <div className="case-block-label">Impact & Recognition</div>
                      <div className="case-list">
                        <div className="case-list-item">Enhanced brand credibility and regional recognition across the GCC market</div>
                        <div className="case-list-item">Positioned Wild & The Moon as a leader in sustainable and health-conscious dining</div>
                        <div className="case-list-item">Generated significant organic media coverage and brand awareness</div>
                        <div className="case-list-item">Strengthened brand positioning in the competitive F&B landscape</div>
                      </div>
                    </div>
                  </div>

                  <div className="case-kpis">
                    <div className="case-kpi">
                      <span className="case-kpi-val">07+</span>
                      <span className="case-kpi-lbl">Awards</span>
                    </div>
                    <div className="case-kpi">
                      <span className="case-kpi-val">2020–2022</span>
                      <span className="case-kpi-lbl">Timeline</span>
                    </div>
                    <div className="case-kpi">
                      <span className="case-kpi-val">GCC</span>
                      <span className="case-kpi-lbl">Recognition</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
}
