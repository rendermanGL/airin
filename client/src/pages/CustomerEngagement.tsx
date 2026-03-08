
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CustomerEngagement() {
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
              <span style={{ color: 'var(--col-cream)' }}>Customer Experience & Community Engagement</span>
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
              Customer Experience & Community Engagement
            </h1>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, #854F6C, #DFB6B2)', marginBottom: '24px' }} />
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="space-y-16">

            <motion.div
              className="flex flex-col lg:flex-row gap-12 items-stretch"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-1">
                <div className="overflow-hidden h-full" style={{ borderRadius: 0 }}>
                  <img
                    src="/public/community-engagement-images/community-workshops-events.jpg"
                    alt="Community Workshops & Events"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div
                  className="p-8 h-full"
                  style={{
                    background: 'rgba(43,18,76,0.4)',
                    border: '1px solid rgba(251,228,216,0.08)',
                    borderRadius: 0,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <h3 className="text-2xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: 'var(--col-cream)' }}>Community Workshops & Events</h3>
                  <h4 className="text-lg mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: 'var(--col-rose)' }}>Wild & The Moon</h4>
                  <p className="mb-6" style={{ color: 'var(--col-blush)', fontSize: '0.9rem', lineHeight: 1.85 }}>
                    Designed and spearheaded a series of wellness-centric workshops and events, reinforcing the brand's position as a thought leader and a go-to hub for health-conscious communities.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="mb-2" style={{ color: 'var(--col-cream)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Objectives</h5>
                      <ul className="space-y-1" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>
                        <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>Strengthen brand loyalty by fostering community engagement</li>
                        <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>Boost visibility in the region through cross-marketing, digital channels, word-of-mouth, and other organic measures</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="mb-2" style={{ color: 'var(--col-cream)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Results</h5>
                      <ul className="space-y-1" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>
                        <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span><span>Increased event <strong style={{ color: 'var(--col-cream)' }}>attendance by 45% YoY</strong>, positioning the brand as a leader in health-conscious communities</span></li>
                        <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span><span>Boosted <strong style={{ color: 'var(--col-cream)' }}>social media engagement by 13%</strong> through event-related posts and interactive campaigns</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col lg:flex-row gap-12 items-stretch"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex-1 lg:order-2">
                <div className="overflow-hidden h-full" style={{ borderRadius: 0 }}>
                  <img
                    src="/public/community-engagement-images/in-store-experience.png"
                    alt="In-store Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 lg:order-1">
                <div
                  className="p-8 h-full"
                  style={{
                    background: 'rgba(43,18,76,0.4)',
                    border: '1px solid rgba(251,228,216,0.08)',
                    borderRadius: 0,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <h3 className="text-2xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: 'var(--col-cream)' }}>In-store Experience</h3>
                  <h4 className="text-lg mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: 'var(--col-rose)' }}>Kava & Chai</h4>
                  <p className="mb-6" style={{ color: 'var(--col-blush)', fontSize: '0.9rem', lineHeight: 1.85 }}>
                    Organized multiple PR campaigns and in-store activations, including collaboration with a local artist to draw portraits in-store.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="mb-2" style={{ color: 'var(--col-cream)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Objectives</h5>
                      <ul className="space-y-1" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>
                        <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>Elevate brand image and establish brand as a local go-to cafe chain</li>
                        <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>Generate a "digital buzz" to drive traffic in-store and boost online engagement</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="mb-2" style={{ color: 'var(--col-cream)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Results</h5>
                      <ul className="space-y-1" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>
                        <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span><span>Secured organic media coverage in top publications, including Time Out Dubai and WhatsOn, enhancing brand credibility and reach</span></li>
                        <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span><span>Boosted social media <strong style={{ color: 'var(--col-cream)' }}>engagement by 45%</strong> through targeted digital strategies - UGC and organic PR</span></li>
                        <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span><span>Increased <strong style={{ color: 'var(--col-cream)' }}>in-store foot traffic by 65%</strong> during activations, driving both sales and customer engagement</span></li>
                        <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span><span>Partnered with over <strong style={{ color: 'var(--col-cream)' }}>50 local influencers</strong> on a barter basis, from food bloggers to lifestyle creators, significantly expanding brand exposure and created UGC</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
