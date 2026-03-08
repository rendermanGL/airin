
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HudOverlay from "@/components/HudOverlay";

const campaigns = [
  {
    image: "/portfolio-images/brand-product-campaign.jpeg",
    title: "Brand Product Campaign",
    subtitle: "Kava & Chai: Summer Matcha Bliss",
    description: "Developed and launched two limited-edition summer drinks—Iced Coco Matcha and Mango Matcha—to add new offerings and maintain customer excitement.",
    products: "Iced Coco Matcha & Mango Matcha",
    objectives: [
      "Increase traffic during off-season with LTO offerings",
      "Uplift brand perception through trend-driven and innovative offerings that align with market dynamics and customer preferences"
    ],
    results: [
      "Contributed <strong>6% of</strong> overall <strong>sales mix</strong>",
      "Performance marketing and influencer collaborations drove a <strong>23% increase in digital engagement</strong>",
      "Enhanced the brand's reputation for innovation and trend alignment, fostering a stronger connection with its target audience"
    ]
  },
  {
    image: "/portfolio-images/seasonal-product-campaign.jpeg",
    title: "Seasonal Product Campaign",
    subtitle: "Wild & The Moon: Hit Reset with the Best!",
    description: "Introduced a Summer Detox Range offered at a 20% discount for a limited period to increase engagement during the summer downtime.",
    products: "Summer Detox Range at 20% off for a limited time only!",
    objectives: [
      "Support sales traffic during summer downtime",
      "Increased customer engagement on digital platforms and traffic on the website (e-shop)"
    ],
    results: [
      "Attained a striking <strong>ROAS of 38</strong> through targeted performance marketing campaigns",
      "Increased <strong>website traffic by 27%</strong>, driving higher engagement and conversion"
    ]
  },
  {
    image: "/portfolio-images/tactical-campaining-methods-and-successes.jpeg",
    title: "Tactical Campaigning Methods and Successes",
    subtitle: "Chin Chin",
    description: "Utilized WhatsApp as a new communication medium for tactical campaigns to boost impact and drive sales.",
    channel: "WhatsApp",
    objectives: [
      "Introduce and test a new medium of communication to attain more impact around the campaign",
      "Support sales traffic during summer downtime",
      "Drive customer orders through delivery platforms and other aggregators"
    ],
    measures: "Customers are split into categories - First Time Users, Frequent Customers and Churned Customers - then targeted based on results during the trial phase.",
    results: [
      "Tactical campaigns acquired the highest <strong>ROAS</strong>, ranging from <strong>27</strong> and above per campaign",
      "Improved <strong>menu views by 42%</strong> across aggregators and delivery platforms",
      "Identified and implemented WhatsApp as an effective communication medium, setting a replicable model across brand campaigns"
    ]
  }
];

export default function StrategicMarketing() {
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
              <span className="text-[#F0ECFF] font-medium">Strategic Marketing</span>
            </nav>
            <h1 className="section-title mb-4">
              Strategic Marketing
            </h1>
            <div className="gradient-line mb-6"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-[140px] pt-12">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={index}
                className="flex flex-col lg:flex-row gap-12 items-stretch"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
              >
                <motion.div 
                  className={`flex-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 + 0.1 }}
                >
                  <div className="overflow-hidden h-full">
                    <img 
                      src={campaign.image}
                      alt={`${campaign.title} - ${campaign.subtitle}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className={`flex-1 glass-panel p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 + 0.2 }}
                >
                  <h3 className="text-2xl font-light text-[#F0ECFF] mb-4">{campaign.title}</h3>
                  <h4 className="text-xl text-[#8B85A0] mb-4">{campaign.subtitle}</h4>
                  <p className="text-[0.9rem] text-[#8B85A0] mb-6 leading-[1.85] font-light">
                    {campaign.description}
                  </p>
                  
                  <div className="space-y-4">
                    {campaign.products && (
                      <div>
                        <h5 className="font-medium text-[#F0ECFF] mb-2">Products:</h5>
                        <p className="text-[#8B85A0] text-[0.9rem]">{campaign.products}</p>
                      </div>
                    )}
                    
                    {campaign.channel && (
                      <div>
                        <h5 className="font-medium text-[#F0ECFF] mb-2">Channel:</h5>
                        <p className="text-[#8B85A0] text-[0.9rem]">{campaign.channel}</p>
                      </div>
                    )}
                    
                    <div>
                      <h5 className="font-medium text-[#F0ECFF] mb-2">Objectives:</h5>
                      <ul className="list-disc list-inside text-[#8B85A0] space-y-1 text-[0.9rem] marker:text-[#A378FF]">
                        {campaign.objectives.map((objective, objIndex) => (
                          <li key={objIndex}>{objective}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {campaign.measures && (
                      <div>
                        <h5 className="font-medium text-[#F0ECFF] mb-2">Measures:</h5>
                        <p className="text-[#8B85A0] text-[0.9rem]">{campaign.measures}</p>
                      </div>
                    )}
                    
                    <div>
                      <h5 className="font-medium text-[#F0ECFF] mb-2">Results:</h5>
                      <ul className="list-disc list-inside text-[#8B85A0] space-y-1 text-[0.9rem] marker:text-[#A378FF]">
                        {campaign.results.map((result, resIndex) => (
                          <li key={resIndex} dangerouslySetInnerHTML={{ __html: result }}></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
