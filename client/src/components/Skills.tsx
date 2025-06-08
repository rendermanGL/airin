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
    <section id="skills" className="py-20 bg-primary/5" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">🧠 My Skills</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-foreground">A combination of marketing expertise and leadership skills that drives impactful brand strategies and successful multi-channel campaigns.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Marketing Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl text-primary font-semibold mb-6">💼 Marketing Expertise</h3>
            
            {marketingSkills.map((skill, index) => (
              <div className="mb-6" key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
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
          
          {/* Leadership Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl text-primary font-semibold mb-6">🧩 Leadership & Management</h3>
            
            {leadershipSkills.map((skill, index) => (
              <div className="mb-6" key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
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
        
        {/* Tools & Technologies */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-playfair text-xl text-primary font-semibold mb-6">Tools & Technologies</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <motion.span 
                key={tool}
                className="px-4 py-2 bg-white rounded-full shadow-sm"
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
