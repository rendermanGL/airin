import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "@/lib/portfolio";

type FilterCategory = "all" | "design" | "development" | "branding";

export default function Portfolio() {
  const [filter, setFilter] = useState<FilterCategory>("all");

  const filteredItems = portfolioItems.filter(item => 
    filter === "all" || item.category === filter
  );

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">My Portfolio</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-foreground">A selection of my recent projects showcasing my skills in design and development.</p>
        </motion.div>
        
        {/* Portfolio Filter */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex flex-wrap justify-center space-x-2 bg-gray-100 rounded-lg p-1">
            <button 
              className={`px-4 py-2 rounded-md font-medium focus:outline-none transition-colors ${
                filter === "all" ? "bg-secondary text-white" : "text-primary hover:bg-gray-200"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-md font-medium focus:outline-none transition-colors ${
                filter === "design" ? "bg-secondary text-white" : "text-primary hover:bg-gray-200"
              }`}
              onClick={() => setFilter("design")}
            >
              Design
            </button>
            <button 
              className={`px-4 py-2 rounded-md font-medium focus:outline-none transition-colors ${
                filter === "development" ? "bg-secondary text-white" : "text-primary hover:bg-gray-200"
              }`}
              onClick={() => setFilter("development")}
            >
              Development
            </button>
            <button 
              className={`px-4 py-2 rounded-md font-medium focus:outline-none transition-colors ${
                filter === "branding" ? "bg-secondary text-white" : "text-primary hover:bg-gray-200"
              }`}
              onClick={() => setFilter("branding")}
            >
              Branding
            </button>
          </div>
        </motion.div>
        
        {/* Portfolio Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                className="portfolio-item rounded-lg overflow-hidden shadow-md bg-white"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative overflow-hidden group h-64">
                  <img 
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={item.projectUrl} className="text-white font-medium px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-primary transition-colors">
                      View Project
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-secondary uppercase tracking-wider">{item.categoryLabel}</span>
                  <h3 className="font-playfair text-xl font-semibold mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-secondary font-medium hover:text-accent transition-colors">
            View All Projects
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
