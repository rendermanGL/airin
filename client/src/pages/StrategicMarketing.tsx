import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projectImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

export default function StrategicMarketing() {
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
              <span className="text-primary font-medium">Strategic Marketing</span>
            </nav>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              Strategic Marketing
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
                    alt={`Strategic Marketing Project ${index + 1}`}
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
              
              {/* Campaign 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Brand Product Campaign</h3>
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">Kava & Chai: Summer Matcha Bliss</h4>
                <p className="text-lg text-gray-600 mb-6">
                  Developed and launched two limited-edition summer drinks—Iced Coco Matcha and Mango Matcha—to add new offerings and maintain customer excitement.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Products:</h5>
                    <p className="text-gray-600">Iced Coco Matcha & Mango Matcha</p>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Objectives:</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Increase traffic during off-season with LTO offerings</li>
                      <li>Uplift brand perception through trend-driven and innovative offerings that align with market dynamics and customer preferences</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Results:</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Contributed <strong>6% of</strong> overall <strong>sales mix</strong></li>
                      <li>Performance marketing and influencer collaborations drove a <strong>23% increase in digital engagement</strong></li>
                      <li>Enhanced the brand's reputation for innovation and trend alignment, fostering a stronger connection with its target audience</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Campaign 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Seasonal Product Campaign</h3>
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">Wild & The Moon: Hit Reset with the Best!</h4>
                <p className="text-lg text-gray-600 mb-6">
                  Introduced a Summer Detox Range offered at a 20% discount for a limited period to increase engagement during the summer downtime.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Products:</h5>
                    <p className="text-gray-600">Summer Detox Range at 20% off for a limited time only!</p>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Objectives:</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Support sales traffic during summer downtime</li>
                      <li>Increased customer engagement on digital platforms and traffic on the website (e-shop)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Results:</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Attained a striking <strong>ROAS of 38</strong> through targeted performance marketing campaigns</li>
                      <li>Increased <strong>website traffic by 27%</strong>, driving higher engagement and conversion</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Campaign 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Tactical Campaigning Methods and Successes</h3>
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">Chin Chin</h4>
                <p className="text-lg text-gray-600 mb-6">
                  Utilized WhatsApp as a new communication medium for tactical campaigns to boost impact and drive sales.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Objectives:</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Introduce and test a new medium of communication to attain more impact around the campaign</li>
                      <li>Support sales traffic during summer downtime</li>
                      <li>Drive customer orders through delivery platforms and other aggregators</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Channel:</h5>
                    <p className="text-gray-600">WhatsApp</p>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Measures:</h5>
                    <p className="text-gray-600">Customers are split into categories - First Time Users, Frequent Customers and Churned Customers - then targeted based on results during the trial phase.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800 mb-2">Results:</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Tactical campaigns acquired the highest <strong>ROAS</strong>, ranging from <strong>27</strong> and above per campaign</li>
                      <li>Improved <strong>menu views by 42%</strong> across aggregators and delivery platforms</li>
                      <li>Identified and implemented WhatsApp as an effective communication medium, setting a replicable model across brand campaigns</li>
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