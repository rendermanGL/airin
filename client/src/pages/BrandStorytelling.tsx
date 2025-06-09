
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BrandStorytelling() {
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
              <span className="text-primary font-medium">Brand Storytelling & Multi-Channel Marketing</span>
            </nav>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              Brand Storytelling & Multi-Channel Marketing
            </h1>
            <div className="w-24 h-1 bg-accent mb-6"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            
            {/* Brand Campaign */}
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Brand Campaign"
                    className="w-full h-80 object-cover"
                  />
                </motion.div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Brand Campaign</h3>
                  <h4 className="text-2xl font-semibold text-gray-700 mb-4">Chin Chin</h4>
                  <p className="text-lg text-gray-600 mb-6">
                    Conceptualized and executed a vibrant marketing campaign featuring the tagline, "Chin Chin, So Nice, You Gotta Say it Twice!", brought to life through engaging content - brand video campaigns and curated brand jingle - and media strategies. <strong>To be launched in 2025</strong>.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-gray-800 mb-2">Objectives:</h5>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Drive brand awareness and engagement through unique, memorable brand campaigns</li>
                        <li>Elevate brand presence by using creative and media-driven strategies</li>
                        <li>Improve reach and impact of the campaign through communication mediums that are new to the brand</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-gray-800 mb-2">Channels:</h5>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Radio Jingle</li>
                        <li>Video Campaign & Paid Ads</li>
                        <li>Social Media</li>
                        <li>Influencer Marketing</li>
                        <li>WhatsApp Campaign</li>
                        <li>Press Release</li>
                        <li>In-store Collaterals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CSR Campaign */}
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="CSR Ramadan Campaign"
                    className="w-full h-80 object-cover"
                  />
                </motion.div>
              </div>

              <div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Chin Chin</h3>
                  <h4 className="text-2xl font-semibold text-gray-700 mb-4">CSR: Ramadan Campaign</h4>
                  <p className="text-lg text-gray-600 mb-6">
                    Launched a Ramadan initiative encouraging aimed at fostering community engagement, featuring a curated Ramadan Box accompanied with a voucher redeemable at select stores, integrating social impact with customer value.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-gray-800 mb-2">Objectives:</h5>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Align the brand with the spirit of the season through meaningful CSR activities</li>
                        <li>Strengthen brand image and visibility through targeted social media campaigns, influencer partnerships, and robust PR efforts</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-gray-800 mb-2">Channels:</h5>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Video Campaign & Paid Ads</li>
                        <li>Social Media</li>
                        <li>Influencer Marketing</li>
                        <li>WhatsApp Campaign</li>
                        <li>Press Release</li>
                        <li>In-store Collaterals</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-gray-800 mb-2">Results:</h5>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Over <strong>23k vouchers</strong> distributed, with over <strong>2% conversion</strong> (redemptions in-stores)</li>
                        <li>More than <strong>9 million impressions</strong> across digital platforms</li>
                        <li>Attained <strong>11</strong> press and <strong>media coverages</strong></li>
                        <li>Over <strong>600 stories</strong> on social media</li>
                      </ul>
                    </div>
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
