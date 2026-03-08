import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HudOverlay from "@/components/HudOverlay";

export default function AwardsRecognition() {
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
              <span className="text-[#F0ECFF] font-medium">Awards & Recognition</span>
            </nav>
            <h1 className="section-title mb-4">
              Awards & Recognition
            </h1>
            <div className="gradient-line mb-6"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-[140px] pt-12">
        <div className="container mx-auto px-6">

          <motion.div 
            className="flex flex-col lg:flex-row gap-12 items-stretch"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex-1 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="overflow-hidden h-full"
              >
                <img 
                  src="/portfolio-images/awards-recognition.jpg"
                  alt="Awards & Recognition"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <div className="flex-1 lg:order-2">
              <div className="glass-panel p-8 h-full">
                <h3 className="text-2xl font-light text-[#F0ECFF] mb-4">Wild & The Moon</h3>
                <p className="text-[0.9rem] text-[#8B85A0] mb-6 leading-[1.85] font-light">
                  Played a pivotal role in winning multiple awards and secured PR placements in leading publications, enhancing the brand's regional credibility.
                </p>

                <div className="space-y-6">
                  <div>
                    <h5 className="font-medium text-[#F0ECFF] mb-4 text-xl">Awards:</h5>

                    <div className="space-y-4">
                      <div className="border-l-2 border-[#A378FF] pl-4">
                        <h6 className="font-medium text-[#A378FF] mb-2">2020:</h6>
                        <ul className="list-disc list-inside text-[#8B85A0] space-y-1 text-[0.9rem] marker:text-[#A378FF]">
                          <li>FACT Magazine - Favorite Vegan Friendly Cafe</li>
                        </ul>
                      </div>

                      <div className="border-l-2 border-[#A378FF] pl-4">
                        <h6 className="font-medium text-[#A378FF] mb-2">2021:</h6>
                        <ul className="list-disc list-inside text-[#8B85A0] space-y-1 text-[0.9rem] marker:text-[#A378FF]">
                          <li>FACT Magazine - Best Vegan Friendly Cafe Dubai</li>
                          <li>WhatsOn Dubai - Favorite Healthy Eating Restaurant</li>
                          <li>WhatsOn Abu Dhabi - Favorite Healthy Eating Restaurant</li>
                          <li>Leaders F&B - Leading Cafe</li>
                        </ul>
                      </div>

                      <div className="border-l-2 border-[#A378FF] pl-4">
                        <h6 className="font-medium text-[#A378FF] mb-2">2022:</h6>
                        <ul className="list-disc list-inside text-[#8B85A0] space-y-1 text-[0.9rem] marker:text-[#A378FF]">
                          <li>Dubai Green Star Awards</li>
                          <li>PETA Awards</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel p-6">
                    <h6 className="font-medium text-[#F0ECFF] mb-3">Impact & Recognition:</h6>
                    <ul className="list-disc list-inside text-[#8B85A0] space-y-2 text-[0.9rem] marker:text-[#A378FF]">
                      <li>Enhanced brand credibility and regional recognition across the GCC market</li>
                      <li>Positioned Wild & The Moon as a leader in sustainable and health-conscious dining</li>
                      <li>Generated significant organic media coverage and brand awareness</li>
                      <li>Strengthened brand positioning in the competitive F&B landscape</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
