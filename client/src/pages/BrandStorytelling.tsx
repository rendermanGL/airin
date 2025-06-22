
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const campaigns = [
  {
    title: "Brand Campaign",
    subtitle: "Chin Chin",
    description: "Conceptualized and executed a vibrant marketing campaign featuring the tagline, \"Chin Chin, So Nice, You Gotta Say it Twice!\", brought to life through engaging content - brand video campaigns and curated brand jingle - and media strategies. <strong>To be launched in 2025</strong>.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
            {campaigns.map((campaign, index) => (
              <motion.div
                key={index}
                className="flex flex-col lg:flex-row gap-12 items-stretch"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Image */}
                <motion.div 
                  className={`flex-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                >
                  <div className="rounded-lg overflow-hidden shadow-lg h-full">
                    <img 
                      src={campaign.image}
                      alt={`${campaign.title} - ${campaign.subtitle}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className={`flex-1 bg-white p-8 rounded-lg shadow-md ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{campaign.title}</h3>
                  <h4 className="text-2xl font-semibold text-gray-700 mb-4">{campaign.subtitle}</h4>
                  <p className="text-lg text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: campaign.description }}></p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-gray-800 mb-2">Objectives:</h5>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {campaign.objectives.map((objective, objIndex) => (
                          <li key={objIndex}>{objective}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-gray-800 mb-2">Channels:</h5>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {campaign.channels.map((channel, channelIndex) => (
                          <li key={channelIndex}>{channel}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {campaign.results && (
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Results:</h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
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
