
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Award, Mail, Newspaper } from "lucide-react";
import { Link } from "wouter";

interface ContentSample {
  id: string;
  title: string;
  category: 'press_release' | 'award_submission' | 'email_marketing';
  pdfFile: string;
}

const contentSamples: ContentSample[] = [
  { id: 'pr-1', title: 'Wild Supper Club Iftar edition', category: 'press_release', pdfFile: 'WILD SUPPER CLUB_ IFTAR EDITION.pdf' },
  { id: 'pr-2', title: 'Wild Supper Club: Wild & The Moon x Claire Sharryn Roberto', category: 'press_release', pdfFile: 'WILD SUPPER CLUB_WILD_THE MOON_CLAIRE SHARRYN ROBERTO.pdf' },
  { id: 'pr-3', title: 'Superfood Workshop with Respect: Wild & The Moon x Comptoir102 x Respect Superfoods', category: 'press_release', pdfFile: 'WILD & THE MOON_COMPTOIR102_RESPECT_ Superfood Workshop with Respect.pdf' },
  { id: 'pr-4', title: 'A Shroom Boom with Dirtea: Wild & The Moon x Comptoir102 x Dirtea', category: 'press_release', pdfFile: 'WILD & THE MOON_COMPTOIR102_DIRTEA_ A Shroom Boom with Fungi.pdf' },
  { id: 'award-1', title: 'F&B Entrepreneur(s) of the Year', category: 'award_submission', pdfFile: 'Wild_The Moon_F_B Entrepreneurs of the Year.pdf' },
  { id: 'award-2', title: 'Leading Cafe', category: 'award_submission', pdfFile: 'Wild_The Moon_ Leading Cafe.pdf' },
  { id: 'award-3', title: 'Leading Healthy Restaurant', category: 'award_submission', pdfFile: 'Wild_The Moon_Leading Healthy Restaurant.pdf' },
  { id: 'award-4', title: 'Leading Sustainable Restaurant Category', category: 'award_submission', pdfFile: 'Wild_The Moon_Leading Sustainable Restaurant Category.pdf' },
  { id: 'email-1', title: 'The Wildest Iftars are coming your way this Ramadan', category: 'email_marketing', pdfFile: 'Wildest Iftars Ramadan.eml' },
  { id: 'email-2', title: 'Wild & The Moon x Claire Sharryn Roberto', category: 'email_marketing', pdfFile: 'wild-moon-claire-sharryn-roberto.eml' },
  { id: 'email-3', title: 'Self-care is Quintessential!', category: 'email_marketing', pdfFile: 'Self-care is Quintessential.eml' },
  { id: 'email-4', title: 'Enter superfood heaven with us! Wild & The Moon x Respect Health x Comptoir102', category: 'email_marketing', pdfFile: 'Superfood Heaven Collaboration.eml' },
  { id: 'email-5', title: 'Get Summer Ready with Wild!', category: 'email_marketing', pdfFile: 'Get Summer Ready with Wild.eml' },
  { id: 'email-6', title: 'Easter brings you the Wildest treats!', category: 'email_marketing', pdfFile: 'Easter Treats Email.eml' },
  { id: 'email-7', title: 'Summer brings new Wild flavors!', category: 'email_marketing', pdfFile: 'Summer Wild Flavors Menu.eml' }
];

const categories = [
  { id: 'press_release', title: 'Press Releases', description: 'Professional press releases for brand activations, collaborations, and events', icon: Newspaper, count: 4 },
  { id: 'award_submission', title: 'Award Submissions', description: 'Strategic award submissions for Wild & The Moon across multiple F&B industry categories', icon: Award, count: 4 },
  { id: 'email_marketing', title: 'Email Marketing', description: 'Comprehensive email campaigns driving engagement and conversions', icon: Mail, count: 7 }
];

export default function ContentWritingSamples() {
  return (
    <div className="min-h-screen py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link href="/portfolio">
            <button
              className="mb-6 flex items-center gap-2 px-4 py-2 transition-all duration-300"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--col-blush)',
                background: 'transparent',
                border: '1px solid rgba(251,228,216,0.1)',
                borderRadius: 0,
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </button>
          </Link>

          <span
            className="inline-block px-4 py-1.5 mb-6"
            style={{
              background: 'rgba(133,79,108,0.2)',
              border: '1px solid rgba(133,79,108,0.3)',
              color: 'var(--col-blush)',
              borderRadius: 0,
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Content Writing Samples
          </span>

          <h1
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: 'var(--col-cream)',
            }}
          >
            Content Writing Portfolio
          </h1>

          <p style={{ color: 'var(--col-blush)', fontSize: '0.9rem', maxWidth: '700px', lineHeight: 1.85 }}>
            A comprehensive collection of professional content writing across press releases, award submissions,
            and email marketing campaigns. Each piece demonstrates strategic messaging, brand voice consistency,
            and measurable impact in driving engagement and business results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3 mb-16"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="text-center p-6"
                style={{
                  background: 'rgba(43,18,76,0.4)',
                  border: '1px solid rgba(251,228,216,0.08)',
                  borderRadius: 0,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <IconComponent className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--col-rose)' }} />
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: 'var(--col-cream)' }}>{category.title}</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--col-blush)', fontSize: '0.8rem' }}>{category.description}</p>
                <span
                  className="inline-block px-3 py-1"
                  style={{
                    background: 'rgba(133,79,108,0.2)',
                    border: '1px solid rgba(133,79,108,0.3)',
                    color: 'var(--col-blush)',
                    borderRadius: 0,
                    fontSize: '0.7rem',
                  }}
                >
                  {category.count} samples
                </span>
              </div>
            );
          })}
        </motion.div>

        {categories.map((category, categoryIndex) => {
          const categorySamples = contentSamples.filter(sample => sample.category === category.id);
          const IconComponent = category.icon;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <IconComponent className="w-6 h-6" style={{ color: 'var(--col-rose)' }} />
                <div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.8rem', color: 'var(--col-cream)' }}>
                    {category.title}
                  </h2>
                  <p style={{ color: 'var(--col-blush)', fontSize: '0.8rem' }}>{category.description}</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {categorySamples.map((sample) => (
                  <div
                    key={sample.id}
                    className="group h-full transition-all duration-400"
                    style={{
                      background: 'rgba(43,18,76,0.4)',
                      border: '1px solid rgba(251,228,216,0.08)',
                      borderRadius: 0,
                      backdropFilter: 'blur(8px)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(82,43,91,0.5)';
                      e.currentTarget.style.borderColor = 'rgba(133,79,108,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(43,18,76,0.4)';
                      e.currentTarget.style.borderColor = 'rgba(251,228,216,0.08)';
                    }}
                  >
                    <div className="p-6 h-full flex flex-col justify-between">
                      <h3
                        className="mb-4 flex-grow"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 400,
                          fontSize: '1.1rem',
                          color: 'var(--col-cream)',
                          lineHeight: 1.4,
                        }}
                      >
                        {sample.title}
                      </h3>

                      <a
                        href={`/pdfs/${encodeURIComponent(sample.pdfFile)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-2.5 mt-auto transition-all duration-300 uppercase tracking-widest text-xs"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 400,
                          border: '1px solid rgba(251,228,216,0.2)',
                          color: 'var(--col-blush)',
                          background: 'transparent',
                          borderRadius: 0,
                          letterSpacing: '0.12em',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#854F6C';
                          e.currentTarget.style.color = 'var(--col-cream)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(251,228,216,0.2)';
                          e.currentTarget.style.color = 'var(--col-blush)';
                        }}
                      >
                        Read
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
