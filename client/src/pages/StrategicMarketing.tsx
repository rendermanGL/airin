import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type KPI = { value: string; label: string };

type Campaign = {
  fileId: string;
  status: string;
  year: string;
  type: string;
  market: string;
  image: string;
  title: string;
  subtitle: string;
  context: string;
  products?: string;
  channel?: string;
  objectives: string[];
  measures?: string;
  results: string[];
  kpis: KPI[];
};

const campaigns: Campaign[] = [
  {
    fileId: 'FILE_2024_001',
    status: 'COMPLETE',
    year: '2024',
    type: 'Product Launch Campaign',
    market: 'UAE',
    image: '/portfolio-images/brand-product-campaign.jpeg',
    title: 'Brand Product Campaign',
    subtitle: 'Kava & Chai: Summer Matcha Bliss',
    context:
      'Developed and launched two limited-edition summer drinks — Iced Coco Matcha and Mango Matcha — to add new offerings and maintain customer excitement during off-peak season.',
    products: 'Iced Coco Matcha & Mango Matcha',
    objectives: [
      'Increase traffic during off-season with LTO offerings',
      'Uplift brand perception through trend-driven and innovative offerings that align with market dynamics and customer preferences',
    ],
    results: [
      'Contributed 6% of overall sales mix',
      'Performance marketing and influencer collaborations drove a 23% increase in digital engagement',
      'Enhanced the brand\'s reputation for innovation and trend alignment',
    ],
    kpis: [
      { value: '6%', label: 'Sales Mix' },
      { value: '+23%', label: 'Digital Engagement' },
      { value: 'LTO', label: 'Launch Format' },
    ],
  },
  {
    fileId: 'FILE_2024_002',
    status: 'COMPLETE',
    year: '2024',
    type: 'Seasonal Activation',
    market: 'UAE',
    image: '/portfolio-images/seasonal-product-campaign.jpeg',
    title: 'Seasonal Product Campaign',
    subtitle: 'Wild & The Moon: Hit Reset with the Best!',
    context:
      'Introduced a Summer Detox Range offered at a 20% discount for a limited period to increase engagement during the summer downtime and drive e-shop traffic.',
    products: 'Summer Detox Range — 20% off limited time',
    objectives: [
      'Support sales traffic during summer downtime',
      'Increase customer engagement on digital platforms and traffic on the website (e-shop)',
    ],
    results: [
      'Attained a striking ROAS of 38 through targeted performance marketing campaigns',
      'Increased website traffic by 27%, driving higher engagement and conversion',
    ],
    kpis: [
      { value: '38', label: 'ROAS' },
      { value: '+27%', label: 'Web Traffic' },
      { value: '20%', label: 'Offer' },
    ],
  },
  {
    fileId: 'FILE_2023_003',
    status: 'COMPLETE',
    year: '2023',
    type: 'Tactical Campaign',
    market: 'UAE',
    image: '/portfolio-images/tactical-campaining-methods-and-successes.jpeg',
    title: 'Tactical Campaigning Methods and Successes',
    subtitle: 'Chin Chin',
    context:
      'Utilized WhatsApp as a new communication medium for tactical campaigns to boost impact and drive sales through delivery platforms.',
    channel: 'WhatsApp',
    objectives: [
      'Introduce and test a new medium of communication to attain more impact around the campaign',
      'Support sales traffic during summer downtime',
      'Drive customer orders through delivery platforms and other aggregators',
    ],
    measures:
      'Customers are split into categories — First Time Users, Frequent Customers and Churned Customers — then targeted based on results during the trial phase.',
    results: [
      'Tactical campaigns acquired the highest ROAS, ranging from 27 and above per campaign',
      'Improved menu views by 42% across aggregators and delivery platforms',
      'Identified and implemented WhatsApp as an effective communication medium, setting a replicable model across brand campaigns',
    ],
    kpis: [
      { value: '27+', label: 'ROAS' },
      { value: '+42%', label: 'Menu Views' },
      { value: 'WA', label: 'Channel' },
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

export default function StrategicMarketing() {
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

      <main className="strat-page">
        <div className="hud-grid-bg" />

        <section className="strat-wrap">
          <header className="strat-head">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.05}>
              <nav className="strat-breadcrumb">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <Link href="/portfolio">Portfolio</Link>
                <span className="sep">/</span>
                <span style={{ color: '#0A0A0F' }}>Strategic Marketing</span>
              </nav>

              <div className="strat-label">Case Files · Strategic Marketing</div>
              <h1 className="strat-title">Strategic Marketing</h1>
              <p className="strat-sub">
                Selected campaign work across product launches, seasonal activations,
                tactical messaging, and performance-led marketing. Each file highlights
                the strategic objective, execution approach, and measurable outcome.
              </p>

              <div className="strat-meta">
                <div className="strat-meta-tile">
                  <span className="strat-meta-val" style={{ color: '#A378FF' }}>
                    {String(campaigns.length).padStart(2, '0')} Files
                  </span>
                  <span className="strat-meta-lbl">Campaigns</span>
                </div>
                <div className="strat-meta-tile">
                  <span className="strat-meta-val">F&B / Hospitality</span>
                  <span className="strat-meta-lbl">Sector</span>
                </div>
                <div className="strat-meta-tile">
                  <span className="strat-meta-val">UAE</span>
                  <span className="strat-meta-lbl">Market</span>
                </div>
                <div className="strat-meta-tile">
                  <span className="strat-meta-val">2023–2024</span>
                  <span className="strat-meta-lbl">Timeline</span>
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
                      <span className="case-pill featured">{c.year}</span>
                      <span className="case-pill featured">{c.type}</span>
                      <span className="case-pill">{c.market}</span>
                      {c.products && <span className="case-pill">{c.products}</span>}
                      {c.channel && <span className="case-pill">{c.channel}</span>}
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

                      {c.measures && (
                        <div className="case-block">
                          <div className="case-block-label">Method / Segmentation</div>
                          <p className="case-copy">{c.measures}</p>
                        </div>
                      )}

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
