import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ParticleSystem from "./ParticleSystem";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      <ParticleSystem />
      <div className="container mx-auto px-6 relative z-10">
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
              As a marketing strategist with over five years of experience, I have led multi-channel campaigns and shaped brand stories that connect. I work on activations, partnerships, and product rollouts for brands across F&B, lifestyle, and tech-enabled services. My approach blends strategy with soul – building marketing that’s insight-driven, purpose-led, and made to resonate.
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
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-accent/20 absolute top-3 left-3"></div>
              <img
                src="https://www.dropbox.com/scl/fi/n0yvq47kjbut8x5x9931m/airin-john-website.jpg?rlkey=aw7zepv90hq4wpkprpimp2g5a&st=0v4vpze4&raw=1"
                alt="Airin John"
                className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover relative z-10 border-4 border-white shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
