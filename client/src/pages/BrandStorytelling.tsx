
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HudOverlay from "@/components/HudOverlay";

const campaigns = [
  {
    title: "Brand Campaign",
    subtitle: "Chin Chin",
    description: "Conceptualized and executed a vibrant marketing campaign featuring the tagline, \"Chin Chin, So Nice, You Gotta Say it Twice!\", brought to life through engaging content - brand video campaigns and curated brand jingle - and media strategies. <strong>To be launched in 2025</strong>.",
    image: "/multi-channel-marketing/chin-chin-brand-campaign.jpeg",
    objectives: [
      "Drive brand awareness and engagement through unique, memorable brand campaigns",
      "Elevate brand presence by using creative and media-driven strategies",
      "Improve reach and impact of the campaign through communication mediums that are new to the brand"
    ],
    channels: [
      "Radio Jingle",
      "Video Campaign & Paid Ads",
      "Social Media",
      "Influencer Marketing",
      "WhatsApp Campaign",
      "Press Release",
      "In-store Collaterals"
    ]
  },
  {
    title: "Chin Chin",
    subtitle: "CSR: Ramadan Campaign",
    description: "Launched a Ramadan initiative encouraging aimed at fostering community engagement, featuring a curated Ramadan Box accompanied with a voucher redeemable at select stores, integrating social impact with customer value.",
    image: "/portfolio-images/brand-storytelling.png",
    objectives: [
      "Align the brand with the spirit of the season through meaningful CSR activities",
      "Strengthen brand image and visibility through targeted social media campaigns, influencer partnerships, and robust PR efforts"
    ],
    channels: [
      "Video Campaign & Paid Ads",
      "Social Media",
      "Influencer Marketing",
      "WhatsApp Campaign",
      "Press Release",
      "In-store Collaterals"
    ],
    results: [
      "Over <strong>23k vouchers</strong> distributed, with over <strong>2% conversion</strong> (redemptions in-stores)",
      "More than <strong>9 million impressions</strong> across digital platforms",
      "Attained <strong>11</strong> press and <strong>media coverages</strong>",
      "Over <strong>600 stories</strong> on social media"
    ]
  }
];

export default function BrandStorytelling() {
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
              <span className="text-[#F0ECFF] font-medium">Brand Storytelling & Multi-Channel Marketing</span>
            </nav>
            <h1 className="section-title mb-4">
              Brand Storytelling & Multi-Channel Marketing
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
                  <p className="text-[0.9rem] text-[#8B85A0] mb-6 leading-[1.85] font-light" dangerouslySetInnerHTML={{ __html: campaign.description }}></p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-[#F0ECFF] mb-2">Objectives:</h5>
                      <ul className="list-disc list-inside text-[#8B85A0] space-y-1 text-[0.9rem] marker:text-[#A378FF]">
                        {campaign.objectives.map((objective, objIndex) => (
                          <li key={objIndex}>{objective}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-[#F0ECFF] mb-2">Channels:</h5>
                      <ul className="list-disc list-inside text-[#8B85A0] space-y-1 text-[0.9rem] marker:text-[#A378FF]">
                        {campaign.channels.map((channel, channelIndex) => (
                          <li key={channelIndex}>{channel}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {campaign.results && (
                      <div>
                        <h5 className="font-medium text-[#F0ECFF] mb-2">Results:</h5>
                        <ul className="list-disc list-inside text-[#8B85A0] space-y-1 text-[0.9rem] marker:text-[#A378FF]">
                          {campaign.results.map((result, resIndex) => (
                            <li key={resIndex} dangerouslySetInnerHTML={{ __html: result }}></li>
                          ))}
                        </ul>
                      </div>
                    )}
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
