import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type KPI = { value: string; label: string };

type Campaign = {
  fileId: string;
  status: string;
  type: string;
  image: string;
  title: string;
  subtitle: string;
  context: string;
  objectives: string[];
  channels: string[];
  results?: string[];
  kpis: KPI[];
};

const campaigns: Campaign[] = [
  {
    fileId: 'FILE_BS_001',
    status: 'IN DEVELOPMENT',
    type: 'Multi-Channel Brand Campaign',
    image: '/multi-channel-marketing/chin-chin-brand-campaign.jpeg',
    title: 'Brand Campaign',
    subtitle: 'Chin Chin',
    context:
      'Conceptualized and executed a vibrant marketing campaign featuring the tagline, "Chin Chin, So Nice, You Gotta Say it Twice!", brought to life through engaging content — brand video campaigns and curated brand jingle — and media strategies. To be launched in 2025.',
    objectives: [
      'Drive brand awareness and engagement through unique, memorable brand campaigns',
      'Elevate brand presence by using creative and media-driven strategies',
      'Improve reach and impact of the campaign through communication mediums that are new to the brand',
    ],
    channels: [
      'Radio Jingle',
      'Video Campaign & Paid Ads',
      'Social Media',
      'Influencer Marketing',
      'WhatsApp Campaign',
      'Press Release',
      'In-store Collaterals',
    ],
    kpis: [
      { value: '2025', label: 'Launch' },
      { value: '07', label: 'Channels' },
      { value: 'Brand', label: 'Campaign' },
    ],
  },
  {
    fileId: 'FILE_BS_002',
    status: 'COMPLETE',
    type: 'CSR Storytelling Campaign',
    image: '/portfolio-images/brand-storytelling.png',
    title: 'CSR: Ramadan Campaign',
    subtitle: 'Chin Chin',
    context:
      'Launched a Ramadan initiative encouraging community engagement, featuring a curated Ramadan Box accompanied with a voucher redeemable at select stores, integrating social impact with customer value.',
    objectives: [
      'Align the brand with the spirit of the season through meaningful CSR activities',
      'Strengthen brand image and visibility through targeted social media campaigns, influencer partnerships, and robust PR efforts',
    ],
    channels: [
      'Video Campaign & Paid Ads',
      'Social Media',
      'Influencer Marketing',
      'WhatsApp Campaign',
      'Press Release',
      'In-store Collaterals',
    ],
    results: [
      'Over 23k vouchers distributed, with over 2% conversion (redemptions in-stores)',
      'More than 9 million impressions across digital platforms',
      'Attained 11 press and media coverages',
      'Over 600 stories on social media',
    ],
    kpis: [
      { value: '23k+', label: 'Vouchers' },
      { value: '9M+', label: 'Impressions' },
      { value: '11', label: 'PR Hits' },
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

export default function BrandStorytelling() {
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

      <main className="strat-page story-page">
        <div className="hud-grid-bg" />

        <section className="strat-wrap">
          <header className="strat-head">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.05}>
              <nav className="strat-breadcrumb">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <Link href="/portfolio">Portfolio</Link>
                <span className="sep">/</span>
                <span style={{ color: '#0A0A0F' }}>Brand Storytelling</span>
              </nav>

              <div className="strat-label">// Case Files · Brand Storytelling</div>
              <h1 className="strat-title">Brand Storytelling & Multi-Channel Marketing</h1>
              <p className="strat-sub">
                Campaign narratives designed to build brand equity, drive community connection,
                and amplify reach across multiple channels. Each file documents the strategic
                framework, channel architecture, and measurable impact.
              </p>

              <div className="strat-meta">
                <div className="strat-meta-tile">
                  <span className="strat-meta-val" style={{ color: '#A378FF' }}>
                    02 Files
                  </span>
                  <span className="strat-meta-lbl">Campaigns</span>
                </div>
                <div className="strat-meta-tile">
                  <span className="strat-meta-val">Chin Chin</span>
                  <span className="strat-meta-lbl">Brand</span>
                </div>
                <div className="strat-meta-tile">
                  <span className="strat-meta-val">UAE</span>
                  <span className="strat-meta-lbl">Market</span>
                </div>
                <div className="strat-meta-tile">
                  <span className="strat-meta-val">Multi-Channel</span>
                  <span className="strat-meta-lbl">Approach</span>
                </div>
              </div>
            </motion.div>
          </header>

          <section className="strat-list">
            {campaigns.map((c, index) => (
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
                      <span className="case-pill">{c.subtitle}</span>
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
                        <div className="case-block-label">
                          {c.results ? 'Channel System' : 'Planned Channel System'}
                        </div>
                        <div className="case-pills-row">
                          {c.channels.map((ch, i) => (
                            <span key={i} className="case-pill">{ch}</span>
                          ))}
                        </div>
                      </div>

                      {c.results && (
                        <div className="case-block">
                          <div className="case-block-label">Results</div>
                          <div className="case-list">
                            {c.results.map((res, i) => (
                              <div key={i} className="case-list-item">{res}</div>
                            ))}
                          </div>
                        </div>
                      )}
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
