import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to my newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error subscribing. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl font-bold mb-6">Airin John</h3>
            <p className="text-gray-300 mb-6 max-w-xs">
              Creating thoughtful digital experiences through design and development, helping brands connect with their audience.
            </p>
            <p className="text-gray-300">
              © {currentYear} Airin John. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-medium text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-medium text-xl mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to my newsletter to get updates on my latest work and thoughts on design.
            </p>
            <form className="flex" onSubmit={handleSubscribe}>
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="p-3 rounded-l-lg w-full bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-white p-3 rounded-r-lg transition-colors"
                disabled={isSubmitting}
              >
                <i className="fas fa-arrow-right"></i>
              </Button>
            </form>
          </motion.div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-white hover:text-accent transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-white hover:text-accent transition-colors">
              <i className="fab fa-dribbble"></i>
            </a>
            <a href="#" className="text-white hover:text-accent transition-colors">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-white hover:text-accent transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-accent transition-colors">
              <i className="fab fa-behance"></i>
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            Designed & Developed with <i className="fas fa-heart text-accent"></i>
          </p>
        </div>
      </div>
    </footer>
  );
}
