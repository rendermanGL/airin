
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const campaigns = [
  {
    image: "/portfolio-images/brand-product-campaign.jpeg",
    title: "Brand Product Campaign",
    subtitle: "Kava & Chai: Summer Matcha Bliss",
    description: "Developed and launched two limited-edition summer drinks\u2014Iced Coco Matcha and Mango Matcha\u2014to add new offerings and maintain customer excitement.",
    products: "Iced Coco Matcha & Mango Matcha",
    objectives: [
      "Increase traffic during off-season with LTO offerings",
      "Uplift brand perception through trend-driven and innovative offerings that align with market dynamics and customer preferences"
    ],
    results: [
      "Contributed <strong>6% of</strong> overall <strong>sales mix</strong>",
      "Performance marketing and influencer collaborations drove a <strong>23% increase in digital engagement</strong>",
      "Enhanced the brand's reputation for innovation and trend alignment, fostering a stronger connection with its target audience"
    ]
  },
  {
    image: "/portfolio-images/seasonal-product-campaign.jpeg",
    title: "Seasonal Product Campaign",
    subtitle: "Wild & The Moon: Hit Reset with the Best!",
    description: "Introduced a Summer Detox Range offered at a 20% discount for a limited period to increase engagement during the summer downtime.",
    products: "Summer Detox Range at 20% off for a limited time only!",
    objectives: [
      "Support sales traffic during summer downtime",
      "Increased customer engagement on digital platforms and traffic on the website (e-shop)"
    ],
    results: [
      "Attained a striking <strong>ROAS of 38</strong> through targeted performance marketing campaigns",
      "Increased <strong>website traffic by 27%</strong>, driving higher engagement and conversion"
    ]
  },
  {
    image: "/portfolio-images/tactical-campaining-methods-and-successes.jpeg",
    title: "Tactical Campaigning Methods and Successes",
    subtitle: "Chin Chin",
    description: "Utilized WhatsApp as a new communication medium for tactical campaigns to boost impact and drive sales.",
    channel: "WhatsApp",
    objectives: [
      "Introduce and test a new medium of communication to attain more impact around the campaign",
      "Support sales traffic during summer downtime",
      "Drive customer orders through delivery platforms and other aggregators"
    ],
    measures: "Customers are split into categories - First Time Users, Frequent Customers and Churned Customers - then targeted based on results during the trial phase.",
    results: [
      "Tactical campaigns acquired the highest <strong>ROAS</strong>, ranging from <strong>27</strong> and above per campaign",
      "Improved <strong>menu views by 42%</strong> across aggregators and delivery platforms",
      "Identified and implemented WhatsApp as an effective communication medium, setting a replicable model across brand campaigns"
    ]
  }
];

export default function StrategicMarketing() {
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
              <span style={{ color: 'var(--col-cream)' }}>Strategic Marketing</span>
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
              Strategic Marketing
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
                    <p className="mb-6" style={{ color: 'var(--col-blush)', fontSize: '0.9rem', lineHeight: 1.85 }}>{campaign.description}</p>

                    <div className="space-y-4">
                      {campaign.products && (
                        <div>
                          <h5 className="mb-2" style={{ color: 'var(--col-cream)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Products</h5>
                          <p style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>{campaign.products}</p>
                        </div>
                      )}
                      {campaign.channel && (
                        <div>
                          <h5 className="mb-2" style={{ color: 'var(--col-cream)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Channel</h5>
                          <p style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>{campaign.channel}</p>
                        </div>
                      )}
                      <div>
                        <h5 className="mb-2" style={{ color: 'var(--col-cream)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Objectives</h5>
                        <ul className="space-y-1" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>
                          {campaign.objectives.map((obj, i) => <li key={i} className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>{obj}</li>)}
                        </ul>
                      </div>
                      {campaign.measures && (
                        <div>
                          <h5 className="mb-2" style={{ color: 'var(--col-cream)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Measures</h5>
                          <p style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>{campaign.measures}</p>
                        </div>
                      )}
                      <div>
                        <h5 className="mb-2" style={{ color: 'var(--col-cream)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Results</h5>
                        <ul className="space-y-1" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>
                          {campaign.results.map((res, i) => <li key={i} className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span><span dangerouslySetInnerHTML={{ __html: res }} /></li>)}
                        </ul>
                      </div>
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
