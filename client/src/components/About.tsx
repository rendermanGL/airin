import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 relative z-10">
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
            About Me
          </h2>
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, #854F6C, #DFB6B2)', margin: '0 auto' }} />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: '1.8rem',
                color: 'var(--col-cream)',
              }}
            >
              My Journey
            </h3>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--col-blush)' }}>
              With over six years of experience in brand marketing and communications, I've helped scale emerging and established brands across sectors including Law, F&B, and tech-enabled services. My work spans integrated multi-channel campaigns, high-impact activations, PR planning, and creative development – l always work with the focus on aligning marketing efforts to clear business outcomes.
            </p>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--col-blush)' }}>
              Raised in Dubai, I bring both regional fluency and global perspective to the way I build brands. From branded content and in-store collaterals to influencer strategy and digital rollouts, I've consistently led campaigns that drive customer loyalty, boost retail footfall, and strengthen market positioning.
            </p>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--col-blush)' }}>
              I specialize in 360-degree marketing, with expertise across digital, social, PR & media, in-store activations, and influencer marketing. I've collaborated closely with cross-functional teams and external partners to deliver cohesive brand experiences, and bring the same energy whether I'm managing a campaign calendar or reporting KPIs to leadership.
            </p>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--col-blush)' }}>
              What drives me is building marketing that moves the brand forward – with creativity, clarity, and commercial impact. I thrive in environments where collaboration, accountability, and insight-led decision-making shape how brands grow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
