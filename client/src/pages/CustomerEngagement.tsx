import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type KPI = { value: string; label: string };

type CaseFile = {
  fileId: string;
  status: string;
  type: string;
  brand: string;
  image: string;
  title: string;
  subtitle: string;
  context: string;
  objectives: string[];
  results: string[];
  kpis: KPI[];
};

const caseFiles: CaseFile[] = [
  {
    fileId: 'FILE_CE_001',
    status: 'COMPLETE',
    type: 'Community Activation',
    brand: 'Wild & The Moon',
    image: '/community-engagement-images/community-workshops-events.jpg',
    title: 'Community Workshops & Events',
    subtitle: 'Wild & The Moon',
    context:
      'Designed and spearheaded a series of wellness-centric workshops and events, reinforcing the brand\'s position as a thought leader and a go-to hub for health-conscious communities.',
    objectives: [
      'Strengthen brand loyalty by fostering community engagement',
      'Boost visibility in the region through cross-marketing, digital channels, word-of-mouth, and other organic measures',
    ],
    results: [
      'Increased event attendance by 45% YoY, positioning the brand as a leader in health-conscious communities',
      'Boosted social media engagement by 13% through event-related posts and interactive campaigns',
    ],
    kpis: [
      { value: '+45%', label: 'Event Attendance' },
      { value: '+13%', label: 'Social Engagement' },
      { value: 'IRL', label: 'Activation Format' },
    ],
  },
  {
    fileId: 'FILE_CE_002',
    status: 'COMPLETE',
    type: 'Experience Marketing',
    brand: 'Kava & Chai',
    image: '/community-engagement-images/in-store-experience.png',
    title: 'In-store Experience',
    subtitle: 'Kava & Chai',
    context:
      'Organized multiple PR campaigns and in-store activations, including collaboration with a local artist to draw portraits in-store.',
    objectives: [
      'Elevate brand image and establish brand as a local go-to cafe chain',
      'Generate a "digital buzz" to drive traffic in-store and boost online engagement',
    ],
    results: [
      'Secured organic media coverage in top publications, including Time Out Dubai and WhatsOn, enhancing brand credibility and reach',
      'Boosted social media engagement by 45% through targeted digital strategies — UGC and organic PR',
      'Increased in-store foot traffic by 65% during activations, driving both sales and customer engagement',
      'Partnered with over 50 local influencers on a barter basis, from food bloggers to lifestyle creators, significantly expanding brand exposure and created UGC',
    ],
    kpis: [
      { value: '+45%', label: 'Social Engagement' },
      { value: '+65%', label: 'Foot Traffic' },
      { value: '50+', label: 'Influencers' },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

export default function CustomerEngagement() {
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

      <main className="engage-page">
        <div className="hud-grid-bg" />

        <section className="strat-wrap">
          <header className="strat-head">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.05}>
              <nav className="strat-breadcrumb">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <Link href="/portfolio">Portfolio</Link>
                <span className="sep">/</span>
                <span style={{ color: '#0A0A0F' }}>Customer Experience & Community Engagement</span>
              </nav>

              <div className="strat-label">// Case Files · Customer Engagement</div>
              <h1 className="strat-title">Customer Experience & Community Engagement</h1>
              <p className="strat-sub">
                Community-driven activations and experience-led marketing that build brand loyalty,
                drive foot traffic, and create lasting connections with health-conscious audiences
                across the UAE.
              </p>

              <div className="strat-meta">
                <div className="strat-meta-tile">
                  <span className="strat-meta-val" style={{ color: '#A378FF' }}>
                    02 Files
                  </span>
                  <span className="strat-meta-lbl">Campaigns</span>
                </div>
                <div className="strat-meta-tile">
                  <span className="strat-meta-val">Community</span>
                  <span className="strat-meta-lbl">Focus</span>
                </div>
                <div className="strat-meta-tile">
                  <span className="strat-meta-val">UAE</span>
                  <span className="strat-meta-lbl">Market</span>
                </div>
                <div className="strat-meta-tile">
                  <span className="strat-meta-val">Experience-Led</span>
                  <span className="strat-meta-lbl">Approach</span>
                </div>
              </div>
            </motion.div>
          </header>

          <section className="strat-list">
            {caseFiles.map((c, index) => (
              <div
                key={c.fileId}
                className="case-file case-reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="case-corner tl" />
                <div className="case-corner tr" />

                <div className="case-top">
                  <span className="case-file-id">
                    <span className="fid">{c.fileId}</span>
                  </span>
                  <span className="case-status">● {c.status}</span>
                </div>

                <div className={`case-grid ${index % 2 === 1 ? 'reverse' : ''}`}>
                  <div className="case-media">
                    <div className="case-image-wrap">
                      <img src={c.image} alt={c.title} className="case-image" />
                      <div className="case-scan" />
                    </div>
                    <div className="case-pills">
                      <span className="case-pill featured">{c.type}</span>
                      <span className="case-pill featured">{c.brand}</span>
                    </div>
                  </div>

                  <div className="case-body">
                    <div className="case-type">{c.type}</div>
                    <h3 className="case-title">{c.title}</h3>
                    <p className="case-subtitle">{c.subtitle}</p>

                    <div className="case-sections">
                      <div className="case-block">
                        <div className="case-block-label">Context</div>
                        <p className="case-copy">{c.context}</p>
                      </div>

                      <div className="case-block">
                        <div className="case-block-label">Strategic Objectives</div>
                        <div className="case-list">
                          {c.objectives.map((obj, i) => (
                            <div key={i} className="case-list-item">{obj}</div>
                          ))}
                        </div>
                      </div>

                      <div className="case-block">
                        <div className="case-block-label">Results</div>
                        <div className="case-list">
                          {c.results.map((res, i) => (
                            <div key={i} className="case-list-item">{res}</div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="case-kpis">
                      {c.kpis.map((kpi) => (
                        <div key={kpi.label} className="case-kpi">
                          <span className="case-kpi-val">{kpi.value}</span>
                          <span className="case-kpi-lbl">{kpi.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
}
