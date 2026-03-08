import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AwardsRecognition() {
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
              <span style={{ color: 'var(--col-cream)' }}>Awards & Recognition</span>
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
              Awards & Recognition
            </h1>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, #854F6C, #DFB6B2)', marginBottom: '24px' }} />
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-col lg:flex-row gap-12 items-stretch"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex-1 lg:order-1">
              <div className="overflow-hidden h-full" style={{ borderRadius: 0 }}>
                <img
                  src="/portfolio-images/awards-recognition.jpg"
                  alt="Awards & Recognition"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 lg:order-2">
              <div
                className="p-8 h-full"
                style={{
                  background: 'rgba(43,18,76,0.4)',
                  border: '1px solid rgba(251,228,216,0.08)',
                  borderRadius: 0,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <h3 className="text-2xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: 'var(--col-cream)' }}>Wild & The Moon</h3>
                <p className="mb-6" style={{ color: 'var(--col-blush)', fontSize: '0.9rem', lineHeight: 1.85 }}>
                  Played a pivotal role in winning multiple awards and secured PR placements in leading publications, enhancing the brand's regional credibility.
                </p>

                <div className="space-y-6">
                  <div>
                    <h5 className="mb-4" style={{ color: 'var(--col-cream)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Awards</h5>

                    <div className="space-y-4">
                      <div style={{ borderLeft: '2px solid #854F6C', paddingLeft: '16px' }}>
                        <h6 className="mb-2" style={{ color: 'var(--col-cream)', fontSize: '0.85rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>2020</h6>
                        <ul className="space-y-1" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>
                          <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>FACT Magazine - Favorite Vegan Friendly Cafe</li>
                        </ul>
                      </div>

                      <div style={{ borderLeft: '2px solid #854F6C', paddingLeft: '16px' }}>
                        <h6 className="mb-2" style={{ color: 'var(--col-cream)', fontSize: '0.85rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>2021</h6>
                        <ul className="space-y-1" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>
                          <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>FACT Magazine - Best Vegan Friendly Cafe Dubai</li>
                          <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>WhatsOn Dubai - Favorite Healthy Eating Restaurant</li>
                          <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>WhatsOn Abu Dhabi - Favorite Healthy Eating Restaurant</li>
                          <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>Leaders F&B - Leading Cafe</li>
                        </ul>
                      </div>

                      <div style={{ borderLeft: '2px solid #854F6C', paddingLeft: '16px' }}>
                        <h6 className="mb-2" style={{ color: 'var(--col-cream)', fontSize: '0.85rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>2022</h6>
                        <ul className="space-y-1" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>
                          <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>Dubai Green Star Awards</li>
                          <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>PETA Awards</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="p-6"
                    style={{
                      background: 'rgba(43,18,76,0.3)',
                      border: '1px solid rgba(251,228,216,0.06)',
                      borderRadius: 0,
                    }}
                  >
                    <h6 className="mb-3" style={{ color: 'var(--col-cream)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Impact & Recognition</h6>
                    <ul className="space-y-2" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>
                      <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>Enhanced brand credibility and regional recognition across the GCC market</li>
                      <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>Positioned Wild & The Moon as a leader in sustainable and health-conscious dining</li>
                      <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>Generated significant organic media coverage and brand awareness</li>
                      <li className="flex items-start"><span className="mr-2" style={{ color: 'var(--col-rose)' }}>&mdash;</span>Strengthened brand positioning in the competitive F&B landscape</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
