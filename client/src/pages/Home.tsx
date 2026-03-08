import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HudOverlay from "@/components/HudOverlay";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HudOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
