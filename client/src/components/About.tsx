import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-[140px]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="hud-label block mb-4">// ABOUT</span>
          <h2 className="section-title mb-6">About Me</h2>
          <div className="gradient-line"></div>
        </motion.div>
        
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="font-light text-xl text-[#F0ECFF] mb-4">My Journey</h3>
            <p className="font-light text-[0.9rem] text-[#8B85A0] leading-[1.85] mb-6">
              With over six years of experience in brand marketing and communications, I've helped scale emerging and established brands across sectors including Law, F&B, and tech-enabled services. My work spans integrated multi-channel campaigns, high-impact activations, PR planning, and creative development – l always work with the focus on aligning marketing efforts to clear business outcomes.
            </p>
            <p className="font-light text-[0.9rem] text-[#8B85A0] leading-[1.85] mb-6">
              Raised in Dubai, I bring both regional fluency and global perspective to the way I build brands. From branded content and in-store collaterals to influencer strategy and digital rollouts, I've consistently led campaigns that drive customer loyalty, boost retail footfall, and strengthen market positioning.
            </p>
            <p className="font-light text-[0.9rem] text-[#8B85A0] leading-[1.85] mb-6">
              I specialize in 360-degree marketing, with expertise across digital, social, PR & media, in-store activations, and influencer marketing. I've collaborated closely with cross-functional teams and external partners to deliver cohesive brand experiences, and bring the same energy whether I'm managing a campaign calendar or reporting KPIs to leadership.
            </p>
            <p className="font-light text-[0.9rem] text-[#8B85A0] leading-[1.85] mb-6">
              What drives me is building marketing that moves the brand forward – with creativity, clarity, and commercial impact. I thrive in environments where collaboration, accountability, and insight-led decision-making shape how brands grow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
