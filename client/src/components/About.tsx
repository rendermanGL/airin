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
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://www.dropbox.com/scl/fi/ydqnkmb163f58u9lb92la/DSC_7759-copy.jpg?rlkey=fx3anq9bl42xxpgsa4u7xxfpf&st=5inc7vlo&dl=0&raw=1" 
              alt="Airin working"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl text-primary font-semibold mb-4">My Journey</h3>
            <p className="text-foreground mb-6 leading-relaxed">
              With over 5 years of experience in brand marketing and communications, I've helped companies across F&B, wellness, and hospitality sectors create impactful marketing strategies that drive business growth and enhance brand visibility.
            </p>
            <p className="text-foreground mb-6 leading-relaxed">
              My approach combines strategic thinking with creative execution. I specialize in developing brand messaging and executing multi-channel campaigns, including digital, social media, PR, and influencer partnerships. I'm adept at leveraging data-driven insights to boost brand equity and enhance customer engagement.
            </p>
            <p className="text-foreground mb-8 leading-relaxed">
              Currently managing a $20 million brand portfolio, I've led campaigns resulting in significant growth, including a 30% year-over-year increase in sales and strategic collaborations that increased brand visibility by 33%.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
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
                <p className="text-sm">Digital Strategy<br/>Multi-Channel Marketing<br/>Brand Storytelling</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
