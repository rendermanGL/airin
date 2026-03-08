import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Metric = {
  value: string;
  label: string;
};

type PortfolioItem = {
  id: string;
  fileId: string;
  status: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  year: string;
  href: string;
  image?: string;
  metrics: Metric[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay }
  })
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 'strategic-marketing',
    fileId: 'FILE_2025_001',
    status: 'COMPLETE',
    title: 'Strategic Marketing',
    description:
      'Campaign strategy, go-to-market planning, product launches, and integrated multi-channel work designed to build brand visibility and commercial impact.',
    category: 'Brand Strategy · Campaign Systems',
    tags: ['Featured', 'UAE', 'GCC'],
    year: '2019–2025',
    href: '/portfolio/strategic-marketing',
    image: '/portfolio-images/strategic-marketing.jpg',
    metrics: [
      { value: 'Multi', label: 'Channels' },
      { value: 'UAE', label: 'Market' },
      { value: '6+ Yrs', label: 'Timeline' }
    ]
  },
  {
    id: 'customer-engagement',
    fileId: 'FILE_2024_007',
    status: 'COMPLETE',
    title: 'Customer Engagement',
    description:
      'Community-led campaigns, engagement mechanics, creator activations, and audience participation systems designed to deepen brand interaction.',
    category: 'Community · Engagement',
    tags: ['Engagement', 'Activation', 'Audience'],
    year: '2020–2025',
    href: '/portfolio/customer-engagement',
    image: '/portfolio-images/customer-engagement.png',
    metrics: [
      { value: 'CRM', label: 'Touchpoints' },
      { value: 'Social', label: 'Channels' },
      { value: 'Live', label: 'Activation' }
    ]
  },
  {
    id: 'brand-storytelling',
    fileId: 'FILE_2024_003',
    status: 'COMPLETE',
    title: 'Brand Storytelling',
    description:
      'Narrative systems, brand voice, social storytelling, campaign copy, and editorial-style messaging built to sharpen positioning and emotional resonance.',
    category: 'Content · Narrative',
    tags: ['Copy', 'Voice', 'Story'],
    year: '2019–2025',
    href: '/portfolio/brand-storytelling',
    image: '/portfolio-images/brand-storytelling.png',
    metrics: [
      { value: 'Voice', label: 'System' },
      { value: 'Social', label: 'Content' },
      { value: 'Brand', label: 'Narrative' }
    ]
  },
  {
    id: 'awards-recognition',
    fileId: 'FILE_2023_011',
    status: 'COMPLETE',
    title: 'Awards & Recognition',
    description:
      'Industry recognition, shortlisted work, awards entries, and credibility signals that support strategic and creative marketing capability.',
    category: 'Credentials · Industry Recognition',
    tags: ['Awards', 'Recognition', 'Proof'],
    year: 'Selected',
    href: '/portfolio/awards-recognition',
    image: '/portfolio-images/awards-recognition.jpg',
    metrics: [
      { value: 'Cred.', label: 'Signal' },
      { value: 'Brand', label: 'Trust' },
      { value: 'Case', label: 'Proof' }
    ]
  },
  {
    id: 'content-writing',
    fileId: 'FILE_2023_005',
    status: 'COMPLETE',
    title: 'Content Writing Samples',
    description:
      'Selected writing samples spanning marketing copy, editorial content, structured messaging, and branded writing across formats.',
    category: 'Writing · Copy Samples',
    tags: ['Writing', 'Samples', 'Editorial'],
    year: 'Selected',
    href: '/portfolio/content-writing',
    image: '/portfolio-images/content-writing.jpg',
    metrics: [
      { value: 'Docs', label: 'Viewer' },
      { value: 'Copy', label: 'Formats' },
      { value: 'Brand', label: 'Voice' }
    ]
  }
];

const filterOptions = ['All', 'Brand', 'Growth', 'Content'];

function matchesFilter(item: PortfolioItem, filter: string) {
  if (filter === 'All') return true;

  const haystack = [
    item.title,
    item.description,
    item.category,
    ...item.tags
  ].join(' ').toLowerCase();

  if (filter === 'Brand') {
    return haystack.includes('brand') || haystack.includes('strategy') || haystack.includes('story');
  }

  if (filter === 'Growth') {
    return haystack.includes('engagement') || haystack.includes('audience') || haystack.includes('activation');
  }

  if (filter === 'Content') {
    return haystack.includes('content') || haystack.includes('copy') || haystack.includes('writing') || haystack.includes('editorial');
  }

  return true;
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => matchesFilter(item, activeFilter));
  }, [activeFilter]);

  useEffect(() => {
    const reveals = document.querySelectorAll('.portfolio-reveal');

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
  }, [activeFilter]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <section className="portfolio-dossier-page">
        <div className="hud-grid-bg" />

        <div className="portfolio-dossier-wrap">
          <motion.div
            className="portfolio-sec-head"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.06}
          >
            <div className="portfolio-sec-left">
              <div className="portfolio-sec-label">Case Files · Active Portfolio</div>
              <h1 className="portfolio-sec-title">Mission Dossiers</h1>
              <p className="portfolio-sec-sub">
                A structured archive of strategic marketing, engagement, storytelling,
                awards, and writing work across the UAE and GCC. Each file opens into
                a deeper layer of portfolio content.
              </p>
            </div>

            <div className="portfolio-sec-right">
              <span className="portfolio-count">
                {String(filteredItems.length).padStart(2, '0')} FILES
              </span>

              <div className="portfolio-filter" role="tablist" aria-label="Portfolio filters">
                {filterOptions.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={`portfolio-filter-btn ${activeFilter === filter ? 'active' : ''}`}
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={activeFilter === filter}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {filteredItems.length === 0 ? (
            <div className="portfolio-empty">
              No matching files found for this filter.
            </div>
          ) : (
            <div className="dos-grid">
              {filteredItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="dos-card portfolio-reveal"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="dos-corner dcc-tl" />
                  <div className="dos-corner dcc-tr" />

                  <div className="dos-file-id">
                    <span>
                      <span className="fid-num">{item.fileId}</span>
                    </span>
                    <span className="dos-status">● {item.status}</span>
                  </div>

                  <div className="dos-thumb">
                    <div className="dos-thumb-inner">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="dos-thumb-img"
                          onError={(e) => {
                            const img = e.currentTarget;
                            img.style.display = 'none';
                            const fallback = img.nextElementSibling as HTMLElement | null;
                            if (fallback) fallback.style.display = 'block';
                          }}
                        />
                      ) : null}

                      <div
                        className="dos-thumb-placeholder"
                        style={{ display: item.image ? 'none' : 'block' }}
                        aria-hidden={item.image ? 'true' : 'false'}
                      />
                    </div>

                    <div className="dos-thumb-scan" />
                  </div>

                  <div className="dos-cat">{item.category}</div>
                  <div className="dos-title">{item.title}</div>
                  <div className="dos-desc">{item.description}</div>

                  <div className="dos-meta-line">
                    <span className="dos-meta-pill featured">{item.year}</span>
                    {item.tags.map((tag) => (
                      <span key={tag} className="dos-meta-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="dos-metrics">
                    {item.metrics.map((metric) => (
                      <div key={`${item.id}-${metric.label}`} className="dos-metric">
                        <span className="dos-m-val">{metric.value}</span>
                        <span className="dos-m-lbl">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  <span className="dos-arrow">Open File →</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
