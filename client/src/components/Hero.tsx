import { motion } from "framer-motion";
import ParticleSystem from "./ParticleSystem";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden flex items-end pb-[12%]">
      <ParticleSystem />

      <div className="orb-a" />
      <div className="orb-b" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end lg:items-end justify-between">
          <motion.div
            className="lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="hud-label block mb-4">// BRAND MARKETING MANAGER</span>

            <h1
              className="font-light text-[#F0ECFF] tracking-[-0.03em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
            >
              Airin John
            </h1>

            <div className="gradient-line mb-6" />

            <p className="font-light text-[0.9rem] text-[#8B85A0] mb-8">
              Strategic marketer. Brand builder. Multi-channel architect.
            </p>

            <div className="flex items-center gap-6 mb-10 flex-wrap">
              <div className="flex flex-col">
                <span className="hud-label mb-1">EXPERIENCE</span>
                <span className="data-readout">6+ YRS</span>
              </div>
              <div className="w-px h-8 bg-[rgba(255,255,255,0.1)]" />
              <div className="flex flex-col">
                <span className="hud-label mb-1">MARKET</span>
                <span className="data-readout">UAE & GCC</span>
              </div>
              <div className="w-px h-8 bg-[rgba(255,255,255,0.1)]" />
              <div className="flex flex-col">
                <span className="hud-label mb-1">SECTORS</span>
                <span className="data-readout">F&B · LIFESTYLE · TECH</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="/portfolio" className="cta-primary inline-block">
                VIEW WORK
              </a>
              <a href="#contact" className="cta-secondary inline-block">
                CONTACT
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-5/12 order-1 lg:order-2 mb-12 lg:mb-0 flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-[280px] md:w-[340px] lg:w-[380px]" style={{ aspectRatio: "3/4" }}>
              <img
                src="https://www.dropbox.com/scl/fi/n0yvq47kjbut8x5x9931m/airin-john-website.jpg?rlkey=aw7zepv90hq4wpkprpimp2g5a&st=0v4vpze4&raw=1"
                alt="Airin John"
                className="w-full h-full object-cover"
                style={{
                  filter: "contrast(1.05) brightness(0.95) saturate(0.85)",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right, rgba(3,0,10,0.6) 0%, transparent 30%), linear-gradient(to top, rgba(3,0,10,0.7) 0%, transparent 40%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
