import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { marketingSkills, leadershipSkills, tools } from "@/lib/skills";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    }
  }, [isInView]);

  return (
    <section id="skills" className="py-32 relative z-10" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: 'var(--col-cream)',
            }}
            className="mb-4"
          >
            My Skills
          </h2>
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, #854F6C, #DFB6B2)', margin: '0 auto' }} />
          <p className="mt-6 max-w-2xl mx-auto" style={{ color: 'var(--col-blush)', fontSize: '0.9rem' }}>
            A combination of marketing expertise and leadership skills that drives impactful brand strategies and successful multi-channel campaigns.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
            style={{ borderRight: '1px solid rgba(251,228,216,0.08)' }}
          >
            <h3
              className="mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: '1.8rem',
                color: 'var(--col-cream)',
              }}
            >
              Marketing Expertise
            </h3>

            {marketingSkills.map((skill, index) => (
              <div className="mb-6 pr-8" key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '0.85rem', color: 'var(--col-blush)', lineHeight: 2.2 }}>
                    {skill.name}
                  </span>
                  <span style={{ color: 'var(--col-rose)', fontSize: '0.85rem' }}>{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: shouldAnimate ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: '1.8rem',
                color: 'var(--col-cream)',
              }}
            >
              Leadership & Management
            </h3>

            {leadershipSkills.map((skill, index) => (
              <div className="mb-6" key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '0.85rem', color: 'var(--col-blush)', lineHeight: 2.2 }}>
                    {skill.name}
                  </span>
                  <span style={{ color: 'var(--col-rose)', fontSize: '0.85rem' }}>{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: shouldAnimate ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: '1.5rem',
              color: 'var(--col-cream)',
            }}
          >
            Tools & Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <motion.span
                key={tool}
                className="px-3 py-1"
                style={{
                  background: 'rgba(133,79,108,0.2)',
                  border: '1px solid rgba(133,79,108,0.3)',
                  color: 'var(--col-blush)',
                  borderRadius: 0,
                  fontSize: '0.8rem',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
