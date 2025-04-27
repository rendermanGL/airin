import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Hi, I'm Airin John
            </h1>
            <h2 className="text-xl md:text-2xl text-secondary font-medium mb-6">
              Brand Marketing Manager
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-xl leading-relaxed">
              Passionate marketing professional with over 5 years of experience in digital strategy, multi-channel marketing, and brand storytelling across F&B, wellness, and hospitality sectors.
            </p>
            <div className="flex space-x-4">
              <Button 
                asChild
                className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6"
              >
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-6"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-accent/20 absolute top-4 left-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80" 
                alt="Airin John" 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover relative z-10 border-4 border-white shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
