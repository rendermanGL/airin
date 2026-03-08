import { motion } from "framer-motion";
import ParticleSystem from "./ParticleSystem";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      <ParticleSystem />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: 'clamp(4rem, 10vw, 9rem)',
                color: 'var(--col-cream)',
                letterSpacing: '-0.02em',
                lineHeight: 0.9,
              }}
            >
              Airin John
            </h1>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--col-blush)',
              }}
            >
              Brand Marketing Manager
            </h2>
            <div
              className="mb-6"
              style={{
                width: '40px',
                height: '1px',
                background: 'linear-gradient(to right, #854F6C, #DFB6B2)',
              }}
            />
            <p
              className="mb-8"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: '0.9rem',
                color: 'var(--col-blush)',
                maxWidth: '400px',
                lineHeight: 1.85,
              }}
            >
              Strategic marketer with over six years of experience building and scaling brands through multi-channel campaigns, performance marketing, and purpose-led storytelling.
            </p>
            <div className="flex space-x-4">
              <a
                href="/portfolio"
                className="px-6 py-3 transition-all duration-300 text-sm uppercase tracking-widest"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  border: '1px solid rgba(251,228,216,0.3)',
                  color: 'var(--col-cream)',
                  background: 'transparent',
                  borderRadius: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#854F6C';
                  e.currentTarget.style.color = '#854F6C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(251,228,216,0.3)';
                  e.currentTarget.style.color = 'var(--col-cream)';
                }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 transition-all duration-300 text-sm uppercase tracking-widest"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  border: '1px solid rgba(251,228,216,0.3)',
                  color: 'var(--col-cream)',
                  background: 'transparent',
                  borderRadius: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#DFB6B2';
                  e.currentTarget.style.color = '#DFB6B2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(251,228,216,0.3)';
                  e.currentTarget.style.color = 'var(--col-cream)';
                }}
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="https://www.dropbox.com/scl/fi/n0yvq47kjbut8x5x9931m/airin-john-website.jpg?rlkey=aw7zepv90hq4wpkprpimp2g5a&st=0v4vpze4&raw=1"
                alt="Airin John - Brand Marketing Manager"
                className="w-80 h-80 md:w-96 md:h-96 object-cover relative z-10"
                style={{ borderRadius: 0 }}
              />
              <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, transparent 60%, #190019 100%)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
