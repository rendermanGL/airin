
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const campaigns = [
  {
    title: "Brand Campaign",
    subtitle: "Chin Chin",
    description: "Conceptualized and executed a vibrant marketing campaign featuring the tagline, \"Chin Chin, So Nice, You Gotta Say it Twice!\", brought to life through engaging content - brand video campaigns and curated brand jingle - and media strategies. <strong>To be launched in 2025</strong>.",
    image: "/public/multi-channel-marketing/chin-chin-brand-campaign.jpeg",
    objectives: [
      "Drive brand awareness and engagement through unique, memorable brand campaigns",
      "Elevate brand presence by using creative and media-driven strategies",
      "Improve reach and impact of the campaign through communication mediums that are new to the brand"
    ],
    channels: [
      "Radio Jingle",
      "Video Campaign & Paid Ads",
      "Social Media",
      "Influencer Marketing",
      "WhatsApp Campaign",
      "Press Release",
      "In-store Collaterals"
    ]
  },
  {
    title: "Chin Chin",
    subtitle: "CSR: Ramadan Campaign",
    description: "Launched a Ramadan initiative encouraging aimed at fostering community engagement, featuring a curated Ramadan Box accompanied with a voucher redeemable at select stores, integrating social impact with customer value.",
    image: "/public/portfolio-images/brand-storytelling.png",
    objectives: [
      "Align the brand with the spirit of the season through meaningful CSR activities",
      "Strengthen brand image and visibility through targeted social media campaigns, influencer partnerships, and robust PR efforts"
    ],
    channels: [
      "Video Campaign & Paid Ads",
      "Social Media",
      "Influencer Marketing",
      "WhatsApp Campaign",
      "Press Release",
      "In-store Collaterals"
    ],
    results: [
      "Over <strong>23k vouchers</strong> distributed, with over <strong>2% conversion</strong> (redemptions in-stores)",
      "More than <strong>9 million impressions</strong> across digital platforms",
      "Attained <strong>11</strong> press and <strong>media coverages</strong>",
      "Over <strong>600 stories</strong> on social media"
    ]
  }
];

export default function BrandStorytelling() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      <Navbar />

      <section className="pt-24 pb-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="text-sm mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: 'var(--col-blush)' }}>
              <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/portfolio" className="hover:opacity-80 transition-opacity">Portfolio</Link>
              <span className="mx-2">/</span>
              <span style={{ color: 'var(--col-cream)' }}>Brand Storytelling & Multi-Channel Marketing</span>
            </nav>
            <h1
              className="mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'var(--col-cream)',
              }}
            >
              Brand Storytelling & Multi-Channel Marketing
            </h1>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, #854F6C, #DFB6B2)', marginBottom: '24px' }} />
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={index}
                className="flex flex-col lg:flex-row gap-12 items-stretch"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className={`flex-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                >
                  <div className="overflow-hidden h-full" style={{ borderRadius: 0 }}>
                    <img
                      src={campaign.image}
                      alt={`${campaign.title} - ${campaign.subtitle}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className={`flex-1 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                >
                  <div
                    className="p-8 h-full"
                    style={{
                      background: 'rgba(43,18,76,0.4)',
                      border: '1px solid rgba(251,228,216,0.08)',
                      borderRadius: 0,
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <h3 className="text-2xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: 'var(--col-cream)' }}>{campaign.title}</h3>
                    <h4 className="text-lg mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: 'var(--col-rose)' }}>{campaign.subtitle}</h4>
                    <p className="mb-6" style={{ color: 'var(--col-blush)', fontSize: '0.9rem', lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: campaign.description }} />

                    <div className="space-y-4">
                      <div>
                        <h5 className="mb-2" style={{ color: 'var(--col-cream)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Objectives</h5>
                        <ul className="space-y-1" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>
                          {campaign.objectives.map((obj, i) => <li key={i} className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>{obj}</li>)}
                        </ul>
                      </div>

                      <div>
                        <h5 className="mb-2" style={{ color: 'var(--col-cream)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Channels</h5>
                        <ul className="space-y-1" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>
                          {campaign.channels.map((ch, i) => <li key={i} className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>{ch}</li>)}
                        </ul>
                      </div>

                      {campaign.results && (
                        <div>
                          <h5 className="mb-2" style={{ color: 'var(--col-cream)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Results</h5>
                          <ul className="space-y-1" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>
                            {campaign.results.map((res, i) => <li key={i} className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span><span dangerouslySetInnerHTML={{ __html: res }} /></li>)}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
