
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HudOverlay from "@/components/HudOverlay";

export default function CustomerEngagement() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HudOverlay />
      <Navbar />
      
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <nav className="text-sm mb-4">
              <Link href="/" className="text-[#8B85A0] hover:text-[#A378FF] transition-colors">Home</Link>
              <span className="mx-2 text-[#4A4560]">/</span>
              <Link href="/portfolio" className="text-[#8B85A0] hover:text-[#A378FF] transition-colors">Portfolio</Link>
              <span className="mx-2 text-[#4A4560]">/</span>
              <span className="text-[#F0ECFF] font-medium">Customer Experience & Community Engagement</span>
            </nav>
            <h1 className="section-title mb-4">
              Customer Experience & Community Engagement
            </h1>
            <div className="gradient-line mb-6"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-[140px] pt-12">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            
            <motion.div 
              className="flex flex-col lg:flex-row gap-12 items-stretch"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="overflow-hidden h-full"
                >
                  <img 
                    src="/community-engagement-images/community-workshops-events.jpg"
                    alt="Community Workshops & Events"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <div className="flex-1">
                <div className="glass-panel p-8 h-full">
                  <h3 className="text-2xl font-light text-[#F0ECFF] mb-4">Community Workshops & Events</h3>
                  <h4 className="text-xl text-[#8B85A0] mb-4">Wild & The Moon</h4>
                  <p className="text-[0.9rem] text-[#8B85A0] mb-6 leading-[1.85] font-light">
                    Designed and spearheaded a series of wellness-centric workshops and events, reinforcing the brand's position as a thought leader and a go-to hub for health-conscious communities.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-[#F0ECFF] mb-2">Objectives:</h5>
                      <ul className="list-disc list-inside text-[#8B85A0] space-y-1 text-[0.9rem] marker:text-[#A378FF]">
                        <li>Strengthen brand loyalty by fostering community engagement</li>
                        <li>Boost visibility in the region through cross-marketing, digital channels, word-of-mouth, and other organic measures</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-[#F0ECFF] mb-2">Results:</h5>
                      <ul className="list-disc list-inside text-[#8B85A0] space-y-1 text-[0.9rem] marker:text-[#A378FF]">
                        <li>Increased event <strong>attendance by 45% YoY</strong>, positioning the brand as a leader in health-conscious communities</li>
                        <li>Boosted <strong>social media engagement by 13%</strong> through event-related posts and interactive campaigns</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col lg:flex-row gap-12 items-stretch"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <div className="flex-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  className="overflow-hidden h-full"
                >
                  <img 
                    src="/community-engagement-images/in-store-experience.png"
                    alt="In-store Experience"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <div className="flex-1 lg:order-1">
                <div className="glass-panel p-8 h-full">
                  <h3 className="text-2xl font-light text-[#F0ECFF] mb-4">In-store Experience</h3>
                  <h4 className="text-xl text-[#8B85A0] mb-4">Kava & Chai</h4>
                  <p className="text-[0.9rem] text-[#8B85A0] mb-6 leading-[1.85] font-light">
                    Organized multiple PR campaigns and in-store activations, including collaboration with a local artist to draw portraits in-store.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-[#F0ECFF] mb-2">Objectives:</h5>
                      <ul className="list-disc list-inside text-[#8B85A0] space-y-1 text-[0.9rem] marker:text-[#A378FF]">
                        <li>Elevate brand image and establish brand as a local go-to cafe chain</li>
                        <li>Generate a "digital buzz" to drive traffic in-store and boost online engagement</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-[#F0ECFF] mb-2">Results:</h5>
                      <ul className="list-disc list-inside text-[#8B85A0] space-y-1 text-[0.9rem] marker:text-[#A378FF]">
                        <li>Secured organic media coverage in top publications, including Time Out Dubai and WhatsOn, enhancing brand credibility and reach</li>
                        <li>Boosted social media <strong>engagement by 45%</strong> through targeted digital strategies - UGC and organic PR</li>
                        <li>Increased <strong>in-store foot traffic by 65%</strong> during activations, driving both sales and customer engagement</li>
                        <li>Partnered with over <strong>50 local influencers</strong> on a barter basis, from food bloggers to lifestyle creators, significantly expanding brand exposure and created UGC</li>
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
