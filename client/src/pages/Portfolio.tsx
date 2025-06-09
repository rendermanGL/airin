
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Portfolio
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my expertise across strategic marketing, customer engagement, brand storytelling, and award-winning campaigns that have driven measurable business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Categories Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={category.route}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={category.imageUrl}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                        <div className="inline-flex items-center text-white font-medium bg-secondary/90 px-4 py-2 rounded-full">
                          <span>Explore Projects</span>
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8">
                      <h3 className="font-playfair text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {category.description}
                      </p>
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
