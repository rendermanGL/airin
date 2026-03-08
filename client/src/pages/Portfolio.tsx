
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HudOverlay from "@/components/HudOverlay";

const portfolioCategories = [
  {
    id: "strategic-marketing",
    title: "Strategic Marketing",
    description: "Multi-channel brand portfolio management and innovative marketing strategies that drive measurable business growth.",
    imageUrl: "/portfolio-images/strategic-marketing.jpg",
    route: "/portfolio/strategic-marketing"
  },
  {
    id: "customer-engagement",
    title: "Customer Experience & Community Engagement",
    description: "Building meaningful community connections and enhancing customer experiences through innovative engagement strategies.",
    imageUrl: "/portfolio-images/customer-engagement.png",
    route: "/portfolio/customer-engagement"
  },
  {
    id: "brand-storytelling",
    title: "Brand Storytelling & Multi-Channel Marketing",
    description: "Creating compelling brand narratives and executing integrated campaigns across multiple touchpoints.",
    imageUrl: "/portfolio-images/brand-storytelling.png",
    route: "/portfolio/brand-storytelling"
  },
  {
    id: "awards-recognition",
    title: "Awards & Recognition",
    description: "Industry recognition and award-winning campaigns that showcase excellence in brand marketing and communications.",
    imageUrl: "/portfolio-images/awards-recognition.jpg",
    route: "/portfolio/awards-recognition"
  },
  {
    id: "content-writing",
    title: "Content Writing Samples",
    description: "Professional content writing portfolio including press releases, event materials, and brand communications that generated significant media coverage.",
    imageUrl: "/portfolio-images/content-writing.jpg",
    route: "/portfolio/content-writing"
  }
];

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HudOverlay />
      <Navbar />
      
      <section className="pt-32 pb-[140px]">
        <div className="container mx-auto px-6">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="hud-label block mb-4">// PORTFOLIO</span>
            <h1 className="section-title mb-4">
              Portfolio
            </h1>
            <div className="gradient-line mb-6"></div>
            <p className="text-[0.9rem] text-[#8B85A0] max-w-3xl leading-[1.85] font-light">
              Explore my expertise across strategic marketing, customer engagement, brand storytelling, and award-winning campaigns that have driven measurable business results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                className="group"
              >
                <Link href={category.route}>
                  <div className="glass-panel overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_rgba(123,94,167,0.15)]">
                    <div className="px-4 pt-4">
                      <span className="data-readout">PROJECT_{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="relative h-64 overflow-hidden mt-2">
                      <img 
                        src={category.imageUrl}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#03000A]/80 via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-light text-[1.4rem] text-[#F0ECFF] mb-3 tracking-[-0.01em]">
                        {category.title}
                      </h3>
                      <p className="text-[0.85rem] text-[#8B85A0] leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <div className="border-t border-[rgba(255,255,255,0.07)] pt-4">
                        <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#4A4560] group-hover:text-[#A378FF] transition-colors duration-300">
                          EXPLORE →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
