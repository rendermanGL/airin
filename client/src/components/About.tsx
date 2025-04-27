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
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
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
              With over 8 years of experience in UX design and frontend development, I've helped companies across various industries create user-centered digital products that drive business growth.
            </p>
            <p className="text-foreground mb-6 leading-relaxed">
              My approach combines strategic thinking with technical execution. I believe in starting with user needs, crafting intuitive experiences, and implementing them with clean, efficient code.
            </p>
            <p className="text-foreground mb-8 leading-relaxed">
              When I'm not designing or coding, you can find me exploring hiking trails, experimenting with new recipes, or contributing to open-source projects.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-primary mb-2">Education</h4>
                <p className="text-sm">MFA in Interaction Design<br/>Rhode Island School of Design</p>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">Location</h4>
                <p className="text-sm">San Francisco, California<br/>Available for remote work</p>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">Languages</h4>
                <p className="text-sm">English (Native)<br/>Spanish (Conversational)</p>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">Interests</h4>
                <p className="text-sm">Hiking, Photography<br/>Open Source, Cooking</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
