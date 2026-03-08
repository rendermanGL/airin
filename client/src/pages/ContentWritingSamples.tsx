import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Newspaper, Award, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ContentSample {
  id: string;
  docId: string;
  title: string;
  category: 'press_release' | 'award_submission' | 'email_marketing';
  categoryLabel: string;
  pdfFile: string;
}

const contentSamples: ContentSample[] = [
  {
    id: 'pr-1',
    docId: 'DOC_PR_001',
    title: 'Wild Supper Club Iftar edition',
    category: 'press_release',
    categoryLabel: 'Press Release',
    pdfFile: 'WILD SUPPER CLUB_ IFTAR EDITION.pdf'
  },
  {
    id: 'pr-2',
    docId: 'DOC_PR_002',
    title: 'Wild Supper Club: Wild & The Moon x Claire Sharryn Roberto',
    category: 'press_release',
    categoryLabel: 'Press Release',
    pdfFile: 'WILD SUPPER CLUB_WILD_THE MOON_CLAIRE SHARRYN ROBERTO.pdf'
  },
  {
    id: 'pr-3',
    docId: 'DOC_PR_003',
    title: 'Superfood Workshop with Respect: Wild & The Moon x Comptoir102 x Respect Superfoods',
    category: 'press_release',
    categoryLabel: 'Press Release',
    pdfFile: 'WILD & THE MOON_COMPTOIR102_RESPECT_ Superfood Workshop with Respect.pdf'
  },
  {
    id: 'pr-4',
    docId: 'DOC_PR_004',
    title: 'A Shroom Boom with Dirtea: Wild & The Moon x Comptoir102 x Dirtea',
    category: 'press_release',
    categoryLabel: 'Press Release',
    pdfFile: 'WILD & THE MOON_COMPTOIR102_DIRTEA_ A Shroom Boom with Fungi.pdf'
  },
  {
    id: 'award-1',
    docId: 'DOC_AW_001',
    title: 'F&B Entrepreneur(s) of the Year',
    category: 'award_submission',
    categoryLabel: 'Award Submission',
    pdfFile: 'Wild_The Moon_F_B Entrepreneurs of the Year.pdf'
  },
  {
    id: 'award-2',
    docId: 'DOC_AW_002',
    title: 'Leading Cafe',
    category: 'award_submission',
    categoryLabel: 'Award Submission',
    pdfFile: 'Wild_The Moon_ Leading Cafe.pdf'
  },
  {
    id: 'award-3',
    docId: 'DOC_AW_003',
    title: 'Leading Healthy Restaurant',
    category: 'award_submission',
    categoryLabel: 'Award Submission',
    pdfFile: 'Wild_The Moon_Leading Healthy Restaurant.pdf'
  },
  {
    id: 'award-4',
    docId: 'DOC_AW_004',
    title: 'Leading Sustainable Restaurant Category',
    category: 'award_submission',
    categoryLabel: 'Award Submission',
    pdfFile: 'Wild_The Moon_Leading Sustainable Restaurant Category.pdf'
  },
  {
    id: 'email-1',
    docId: 'DOC_EM_001',
    title: 'The Wildest Iftars are coming your way this Ramadan',
    category: 'email_marketing',
    categoryLabel: 'Email Marketing',
    pdfFile: 'Wildest Iftars Ramadan.eml'
  },
  {
    id: 'email-2',
    docId: 'DOC_EM_002',
    title: 'Wild & The Moon x Claire Sharryn Roberto',
    category: 'email_marketing',
    categoryLabel: 'Email Marketing',
    pdfFile: 'wild-moon-claire-sharryn-roberto.eml'
  },
  {
    id: 'email-3',
    docId: 'DOC_EM_003',
    title: 'Self-care is Quintessential!',
    category: 'email_marketing',
    categoryLabel: 'Email Marketing',
    pdfFile: 'Self-care is Quintessential.eml'
  },
  {
    id: 'email-4',
    docId: 'DOC_EM_004',
    title: 'Enter superfood heaven with us! Wild & The Moon x Respect Health x Comptoir102',
    category: 'email_marketing',
    categoryLabel: 'Email Marketing',
    pdfFile: 'Superfood Heaven Collaboration.eml'
  },
  {
    id: 'email-5',
    docId: 'DOC_EM_005',
    title: 'Get Summer Ready with Wild!',
    category: 'email_marketing',
    categoryLabel: 'Email Marketing',
    pdfFile: 'Get Summer Ready with Wild.eml'
  },
  {
    id: 'email-6',
    docId: 'DOC_EM_006',
    title: 'Easter brings you the Wildest treats!',
    category: 'email_marketing',
    categoryLabel: 'Email Marketing',
    pdfFile: 'Easter Treats Email.eml'
  },
  {
    id: 'email-7',
    docId: 'DOC_EM_007',
    title: 'Summer brings new Wild flavors!',
    category: 'email_marketing',
    categoryLabel: 'Email Marketing',
    pdfFile: 'Summer Wild Flavors Menu.eml'
  }
];

const categories = [
  {
    id: 'press_release' as const,
    title: 'Press Releases',
    icon: Newspaper,
  },
  {
    id: 'award_submission' as const,
    title: 'Award Submissions',
    icon: Award,
  },
  {
    id: 'email_marketing' as const,
    title: 'Email Marketing',
    icon: Mail,
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

export default function ContentWritingSamples() {
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

      <main className="writing-page">
        <div className="hud-grid-bg" />

        <section className="strat-wrap">
          <header className="strat-head">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.05}>
              <nav className="strat-breadcrumb">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <Link href="/portfolio">Portfolio</Link>
                <span className="sep">/</span>
                <span style={{ color: '#0A0A0F' }}>Content Writing</span>
              </nav>

              <div className="strat-label">// Document Archive · Writing Samples</div>
              <h1 className="strat-title">Content Writing Portfolio</h1>
              <p className="strat-sub">
                A comprehensive archive of professional writing across press releases,
                award submissions, and email marketing campaigns. Each document demonstrates
                strategic messaging, brand voice consistency, and measurable impact.
              </p>

              <div className="strat-meta">
                <div className="strat-meta-tile">
                  <span className="strat-meta-val" style={{ color: '#A378FF' }}>15 Files</span>
                  <span className="strat-meta-lbl">Documents</span>
                </div>
                <div className="strat-meta-tile">
                  <span className="strat-meta-val">03 Categories</span>
                  <span className="strat-meta-lbl">Sections</span>
                </div>
                <div className="strat-meta-tile">
                  <span className="strat-meta-val">Docs</span>
                  <span className="strat-meta-lbl">Format</span>
                </div>
                <div className="strat-meta-tile">
                  <span className="strat-meta-val">Writing Archive</span>
                  <span className="strat-meta-lbl">Type</span>
                </div>
              </div>
            </motion.div>
          </header>

          <section className="strat-list">
            {categories.map((category, catIdx) => {
              const catSamples = contentSamples.filter(s => s.category === category.id);
              const IconComponent = category.icon;

              return (
                <div key={category.id} className="case-file case-reveal" style={{ animationDelay: `${catIdx * 100}ms` }}>
                  <div className="case-corner tl" />
                  <div className="case-corner tr" />

                  <div className="case-top">
                    <span className="case-file-id">
                      <span className="fid">ARCHIVE_{String(catIdx + 1).padStart(2, '0')}</span>
                    </span>
                    <span className="case-status">● {catSamples.length} FILES</span>
                  </div>

                  <div className="case-body" style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                      <IconComponent style={{ width: '1.25rem', height: '1.25rem', color: '#A378FF' }} />
                      <div className="case-type">{category.title}</div>
                    </div>
                    <h3 className="case-title">{category.title}</h3>

                    <div className="doc-tile-grid">
                      {catSamples.map((sample) => (
                        <a
                          key={sample.id}
                          href={`/pdfs/${encodeURIComponent(sample.pdfFile)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="doc-tile"
                        >
                          <div className="doc-tile-id">{sample.docId}</div>
                          <div className="doc-tile-cat">{sample.categoryLabel}</div>
                          <div className="doc-tile-title">{sample.title}</div>
                          <div className="doc-tile-cta">Read File →</div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
}
