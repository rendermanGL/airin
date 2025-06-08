import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projectImages = [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

export default function CustomerEngagement() {
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
              <span className="text-primary font-medium">Customer Experience & Community Engagement</span>
            </nav>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              Customer Experience & Community Engagement
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
                    alt={`Customer Engagement Project ${index + 1}`}
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
              
              {/* Community Workshops & Events */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Community Workshops & Events</h3>
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">Wild & The Moon</h4>
                <p className="text-lg text-gray-600 mb-6">
                  Designed and spearheaded a series of wellness-centric workshops and events, reinforcing the brand's position as a thought leader and a go-to hub for health-conscious communities.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Objectives:</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Strengthen brand loyalty by fostering community engagement</li>
                      <li>Boost visibility in the region through cross-marketing, digital channels, word-of-mouth, and other organic measures</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Results:</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Increased event <strong>attendance by 45% YoY</strong>, positioning the brand as a leader in health-conscious communities</li>
                      <li>Boosted <strong>social media engagement by 13%</strong> through event-related posts and interactive campaigns</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* In-store Experience */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">In-store Experience</h3>
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">Kava & Chai</h4>
                <p className="text-lg text-gray-600 mb-6">
                  Organized multiple PR campaigns and in-store activations, including collaboration with a local artist to draw portraits in-store.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Objectives:</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Elevate brand image and establish brand as a local go-to cafe chain</li>
                      <li>Generate a "digital buzz" to drive traffic in-store and boost online engagement</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Results:</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Secured organic media coverage in top publications, including Time Out Dubai and WhatsOn, enhancing brand credibility and reach</li>
                      <li>Boosted social media <strong>engagement by 45%</strong> through targeted digital strategies - UGC and organic PR</li>
                      <li>Increased <strong>in-store foot traffic by 65%</strong> during activations, driving both sales and customer engagement</li>
                      <li>Partnered with over <strong>50 local influencers</strong> on a barter basis, from food bloggers to lifestyle creators, significantly expanding brand exposure and created UGC</li>
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