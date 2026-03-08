
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, ExternalLink, Award, Mail, Newspaper } from "lucide-react";
import { Link } from "wouter";
import HudOverlay from "@/components/HudOverlay";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ContentSample {
  id: string;
  title: string;
  category: 'press_release' | 'award_submission' | 'email_marketing';
  pdfFile: string;
}

const contentSamples: ContentSample[] = [
  // Press Releases
  {
    id: 'pr-1',
    title: 'Wild Supper Club Iftar edition',
    category: 'press_release',
    pdfFile: 'WILD SUPPER CLUB_ IFTAR EDITION.pdf'
  },
  {
    id: 'pr-2',
    title: 'Wild Supper Club: Wild & The Moon x Claire Sharryn Roberto',
    category: 'press_release',
    pdfFile: 'WILD SUPPER CLUB_WILD_THE MOON_CLAIRE SHARRYN ROBERTO.pdf'
  },
  {
    id: 'pr-3',
    title: 'Superfood Workshop with Respect: Wild & The Moon x Comptoir102 x Respect Superfoods',
    category: 'press_release',
    pdfFile: 'WILD & THE MOON_COMPTOIR102_RESPECT_ Superfood Workshop with Respect.pdf'
  },
  {
    id: 'pr-4',
    title: 'A Shroom Boom with Dirtea: Wild & The Moon x Comptoir102 x Dirtea',
    category: 'press_release',
    pdfFile: 'WILD & THE MOON_COMPTOIR102_DIRTEA_ A Shroom Boom with Fungi.pdf'
  },
  // Award Submissions
  {
    id: 'award-1',
    title: 'F&B Entrepreneur(s) of the Year',
    category: 'award_submission',
    pdfFile: 'Wild_The Moon_F_B Entrepreneurs of the Year.pdf'
  },
  {
    id: 'award-2',
    title: 'Leading Cafe',
    category: 'award_submission',
    pdfFile: 'Wild_The Moon_ Leading Cafe.pdf'
  },
  {
    id: 'award-3',
    title: 'Leading Healthy Restaurant',
    category: 'award_submission',
    pdfFile: 'Wild_The Moon_Leading Healthy Restaurant.pdf'
  },
  {
    id: 'award-4',
    title: 'Leading Sustainable Restaurant Category',
    category: 'award_submission',
    pdfFile: 'Wild_The Moon_Leading Sustainable Restaurant Category.pdf'
  },
  // Email Marketing
  {
    id: 'email-1',
    title: 'The Wildest Iftars are coming your way this Ramadan',
    category: 'email_marketing',
    pdfFile: 'Wildest Iftars Ramadan.eml'
  },
  {
    id: 'email-2',
    title: 'Wild & The Moon x Claire Sharryn Roberto',
    category: 'email_marketing',
    pdfFile: 'wild-moon-claire-sharryn-roberto.eml'
  },
  {
    id: 'email-3',
    title: 'Self-care is Quintessential!',
    category: 'email_marketing',
    pdfFile: 'Self-care is Quintessential.eml'
  },
  {
    id: 'email-4',
    title: 'Enter superfood heaven with us! Wild & The Moon x Respect Health x Comptoir102',
    category: 'email_marketing',
    pdfFile: 'Superfood Heaven Collaboration.eml'
  },
  {
    id: 'email-5',
    title: 'Get Summer Ready with Wild!',
    category: 'email_marketing',
    pdfFile: 'Get Summer Ready with Wild.eml'
  },
  {
    id: 'email-6',
    title: 'Easter brings you the Wildest treats!',
    category: 'email_marketing',
    pdfFile: 'Easter Treats Email.eml'
  },
  {
    id: 'email-7',
    title: 'Summer brings new Wild flavors!',
    category: 'email_marketing',
    pdfFile: 'Summer Wild Flavors Menu.eml'
  }
];

const categories = [
  {
    id: 'press_release',
    title: 'Press Releases',
    description: 'Professional press releases for brand activations, collaborations, and events',
    icon: Newspaper,
    count: 4
  },
  {
    id: 'award_submission', 
    title: 'Award Submissions',
    description: 'Strategic award submissions for Wild & The Moon across multiple F&B industry categories',
    icon: Award,
    count: 4
  },
  {
    id: 'email_marketing',
    title: 'Email Marketing',
    description: 'Comprehensive email campaigns driving engagement and conversions',
    icon: Mail,
    count: 7
  }
];

export default function ContentWritingSamples() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <HudOverlay />
      <div className="container mx-auto px-6 py-[140px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12"
        >
          <Link href="/portfolio">
            <button className="cta-secondary mb-6 flex items-center gap-2 px-4 py-2 text-[0.75rem]">
              <ArrowLeft className="w-4 h-4" />
              BACK TO PORTFOLIO
            </button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="glass-panel px-4 py-2 text-[0.7rem] uppercase tracking-[0.15em] text-[#A378FF]">
              Content Writing Samples
            </span>
          </div>

          <p className="hud-label mb-4">// CONTENT WRITING</p>
          
          <h1 className="section-title mb-6">
            Content Writing Portfolio
          </h1>
          
          <div className="gradient-line mb-6" />
          
          <p className="text-[0.9rem] font-light text-[#4A4A56] max-w-3xl leading-[1.85]">
            A comprehensive collection of professional content writing across press releases, award submissions, 
            and email marketing campaigns. Each piece demonstrates strategic messaging, brand voice consistency, 
            and measurable impact in driving engagement and business results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3 mb-16"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="glass-panel text-center p-6">
                <IconComponent className="w-12 h-12 text-[#A378FF] mx-auto mb-4" />
                <h3 className="text-xl font-light text-[#0A0A0F] mb-2">{category.title}</h3>
                <p className="text-[#4A4A56] text-sm mb-4 font-light">{category.description}</p>
                <span className="glass-panel px-3 py-1 text-[0.7rem] text-[#A378FF] tracking-[0.05em]">
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
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 + categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-2">
                <p className="hud-label">// CATEGORY_{String(categoryIndex + 1).padStart(2, '0')}</p>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <IconComponent className="w-8 h-8 text-[#A378FF]" />
                <div>
                  <h2 className="font-light text-[clamp(1.5rem,3vw,2.5rem)] text-[#0A0A0F] tracking-[-0.02em]">
                    {category.title}
                  </h2>
                  <p className="text-[#4A4A56] font-light text-[0.85rem]">{category.description}</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {categorySamples.map((sample) => (
                  <div 
                    key={sample.id} 
                    className="glass-panel group h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_40px_rgba(163,120,255,0.15)]"
                  >
                    <div className="p-6 h-full flex flex-col justify-between">
                      <h3 className="font-light text-lg mb-4 text-[#0A0A0F] group-hover:text-[#A378FF] transition-colors flex-grow">
                        {sample.title}
                      </h3>
                      
                      <a 
                        href={`/pdfs/${encodeURIComponent(sample.pdfFile)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-primary block text-center mt-auto text-[0.7rem] py-2 px-4"
                      >
                        READ →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
