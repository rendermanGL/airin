import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projectImages = [
  "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1569905502668-8c8b4e0b0b4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

export default function AwardsRecognition() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-8 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-secondary">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/portfolio" className="hover:text-secondary">Portfolio</Link>
              <span className="mx-2">/</span>
              <span className="text-primary font-medium">Awards & Recognition</span>
            </nav>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              Awards & Recognition
            </h1>
            <div className="w-24 h-1 bg-accent mb-6"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Images Column */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {projectImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <img 
                    src={image}
                    alt={`Awards & Recognition ${index + 1}`}
                    className="w-full h-80 object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Content Column */}
            <motion.div 
              className="space-y-12"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              
              {/* Awards Section */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Wild & The Moon</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Played a pivotal role in winning multiple awards and secured PR placements in leading publications, enhancing the brand's regional credibility.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-4 text-xl">Awards:</h5>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-secondary pl-4">
                        <h6 className="font-bold text-gray-800 mb-2">2020:</h6>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>FACT Magazine - Favorite Vegan Friendly Cafe</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-secondary pl-4">
                        <h6 className="font-bold text-gray-800 mb-2">2021:</h6>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>FACT Magazine - Best Vegan Friendly Cafe Dubai</li>
                          <li>WhatsOn Dubai - Favorite Healthy Eating Restaurant</li>
                          <li>WhatsOn Abu Dhabi - Favorite Healthy Eating Restaurant</li>
                          <li>Leaders F&B - Leading Cafe</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-secondary pl-4">
                        <h6 className="font-bold text-gray-800 mb-2">2022:</h6>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>Dubai Green Star Awards</li>
                          <li>PETA Awards</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h6 className="font-bold text-gray-800 mb-3">Impact & Recognition:</h6>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Enhanced brand credibility and regional recognition across the GCC market</li>
                      <li>Positioned Wild & The Moon as a leader in sustainable and health-conscious dining</li>
                      <li>Generated significant organic media coverage and brand awareness</li>
                      <li>Strengthened brand positioning in the competitive F&B landscape</li>
                    </ul>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}