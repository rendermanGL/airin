
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const campaigns = [
  {
    image: "/attached_assets/Brand Product Compaign_1749429682985.jpeg",
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
    image: "/attached_assets/Seasonal Product Campaign_1749429682985.jpeg",
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
    image: "/attached_assets/Tactical Campaigning Methods and Successess_1749429682985.jpeg",
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
          <div className="space-y-16">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Image */}
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                >
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={campaign.image}
                      alt={`${campaign.title} - ${campaign.subtitle}`}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className={`bg-white p-8 rounded-lg shadow-md ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{campaign.title}</h3>
                  <h4 className="text-2xl font-semibold text-gray-700 mb-4">{campaign.subtitle}</h4>
                  <p className="text-lg text-gray-600 mb-6">
                    {campaign.description}
                  </p>
                  
                  <div className="space-y-4">
                    {campaign.products && (
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Products:</h5>
                        <p className="text-gray-600">{campaign.products}</p>
                      </div>
                    )}
                    
                    {campaign.channel && (
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Channel:</h5>
                        <p className="text-gray-600">{campaign.channel}</p>
                      </div>
                    )}
                    
                    <div>
                      <h5 className="font-bold text-gray-800 mb-2">Objectives:</h5>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {campaign.objectives.map((objective, objIndex) => (
                          <li key={objIndex}>{objective}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {campaign.measures && (
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">Measures:</h5>
                        <p className="text-gray-600">{campaign.measures}</p>
                      </div>
                    )}
                    
                    <div>
                      <h5 className="font-bold text-gray-800 mb-2">Results:</h5>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
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
