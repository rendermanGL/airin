import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timelineEntries = [
  { year: "2023 – PRESENT", role: "Marketing & Communications Manager", company: "Black Sheep Coffee" },
  { year: "2023", role: "Brand Marketing Manager", company: "Kitopi LLC" },
  { year: "2020 – 2023", role: "Brand & Communications Manager", company: "Wild & The Moon" },
  { year: "2020", role: "Community Manager", company: "Letswork" },
  { year: "2019 – 2020", role: "Management Trainee", company: "Al Tamimi & Company" },
  { year: "2017 – 2019", role: "Events Intern", company: "Fitze" },
];

export default function About() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 });

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

        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            className="lg:w-[45%]"
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

          <div className="lg:w-[55%]" ref={timelineRef}>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="hud-label block mb-2">// CAREER TRAJECTORY</span>
              <span
                className="block text-[0.65rem] uppercase tracking-[0.15em] text-[#4A4560]"
                style={{ fontWeight: 300 }}
              >
                PROFESSIONAL CHRONOLOGY · 2017 – PRESENT
              </span>
            </motion.div>

            <div className="relative pl-8 md:pl-12">
              <div
                className="absolute left-[11px] md:left-[19px] top-0 w-px bg-[rgba(163,120,255,0.2)]"
                style={{ height: "100%" }}
              >
                <div
                  className="w-full bg-gradient-to-b from-[#A378FF] to-[rgba(163,120,255,0.05)]"
                  style={{
                    height: isInView ? "100%" : "0%",
                    transition: "height 1.5s ease-out",
                  }}
                />
              </div>

              <div className="space-y-6">
                {timelineEntries.map((entry, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      delay: index * 0.15,
                    }}
                  >
                    <div
                      className="absolute top-5 bg-[#A378FF]"
                      style={{
                        left: "-21px",
                        width: "8px",
                        height: "8px",
                        transform: "rotate(45deg)",
                      }}
                    />

                    <div
                      className="absolute top-[23px] h-px bg-[rgba(163,120,255,0.15)]"
                      style={{
                        left: "-13px",
                        width: "13px",
                      }}
                    />

                    <div
                      className="glass-panel-static p-5"
                      style={{
                        boxShadow: "inset 2px 0 0 rgba(163,120,255,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
                      }}
                    >
                      <span
                        className="inline-block mb-3 text-[0.65rem] uppercase tracking-[0.05em] text-[#A378FF] border border-[rgba(163,120,255,0.3)] px-2 py-[2px]"
                        style={{ fontWeight: 500 }}
                      >
                        {entry.year}
                      </span>
                      <h4
                        className="text-[0.95rem] text-[#F0ECFF] mb-1"
                        style={{ fontWeight: 300 }}
                      >
                        {entry.role}
                      </h4>
                      <p
                        className="text-[0.8rem] text-[#8B85A0] uppercase tracking-[0.15em]"
                        style={{ fontWeight: 300 }}
                      >
                        {entry.company}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
