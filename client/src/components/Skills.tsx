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
    <section id="skills" className="py-[140px]" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="hud-label block mb-4">// CAPABILITIES</span>
          <h2 className="section-title mb-6">My Skills</h2>
          <div className="gradient-line mb-6"></div>
          <p className="max-w-2xl text-[0.9rem] font-light text-[#8B85A0] leading-[1.85]">A combination of marketing expertise and leadership skills that drives impactful brand strategies and successful multi-channel campaigns.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="font-light text-xl text-[#F0ECFF] mb-8">Marketing Expertise</h3>
            
            {marketingSkills.map((skill, index) => (
              <div className="py-4 border-b border-[rgba(255,255,255,0.04)]" key={skill.name}>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[0.85rem] text-[#8B85A0]">{skill.name}</span>
                  <span className="data-readout">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: shouldAnimate ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="font-light text-xl text-[#F0ECFF] mb-8">Leadership & Management</h3>
            
            {leadershipSkills.map((skill, index) => (
              <div className="py-4 border-b border-[rgba(255,255,255,0.04)]" key={skill.name}>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[0.85rem] text-[#8B85A0]">{skill.name}</span>
                  <span className="data-readout">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: shouldAnimate ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="font-light text-xl text-[#F0ECFF] mb-6">Tools & Technologies</h3>
          
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <motion.span 
                key={tool}
                className="glass-panel-static px-4 py-2 text-[0.8rem] text-[#8B85A0]"
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
