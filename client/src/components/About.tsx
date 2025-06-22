import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl text-primary font-semibold mb-4">My Journey</h3>
            <p className="text-foreground mb-6 leading-relaxed">
              With over 5 years of experience in brand marketing and communications, I’ve partnered with leading brands across the F&B and hospitality sectors to develop impactful strategies that drive business growth and elevate brand visibility.
            </p>
            <p className="text-foreground mb-6 leading-relaxed">
              My approach combines strategic thinking with creative execution. I specialize in developing brand messaging and executing multi-channel campaigns across digital, social, PR, and brand partnerships. I’m adept at leveraging data-driven insights to strengthen brand equity and deepen customer engagement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-primary mb-2">Education</h4>
                <p className="text-sm">M.A. Honors in International Business Management with Marketing<br/>Heriot-Watt University, Dubai</p>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">Location</h4>
                <p className="text-sm">Dubai, United Arab Emirates<br/>Available for remote work</p>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">Contact</h4>
                <p className="text-sm">elsa.airin@gmail.com<br/>(+971) 55 981 3969</p>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">Professional Focus</h4>
                <p className="text-sm">Multi-Channel Marketing<br/>Digital Strategy<br/>Brand Storytelling</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
