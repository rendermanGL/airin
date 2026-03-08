import { motion } from "framer-motion";
import { ArrowLeft, Download, Calendar, Building } from "lucide-react";
import { Link, useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import HudOverlay from "@/components/HudOverlay";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Document {
  id: number;
  title: string;
  description: string;
  filename: string;
  contentType: string;
  createdAt: string;
}

const documentContent: Record<number, any> = {
  1: {
    title: "Wild Supper Club: Wild & The Moon x Claire Sharryn Roberto",
    date: "November 2021",
    location: "Dubai, UAE",
    content: {
      subtitle: "Join us for the exclusive Wild Supper Club night with Guest Chef Claire Sharryn Roberto",
      description: "Wild & The Moon has invited renowned, plant-based Chef Claire Sharryn Roberto to curate a whole new wild-crafted culinary experience. Discover unique flavours with the palatable 5-course menu created by combining elements of adaptogenic tonic herbs and Ayurvedic wisdom that will make you glow inside out.",
      theme: "ADAPTOGENIC TONIC HERBS TO MAKE YOU GLOW FROM INSIDE TO OUT",
      menu: [
        "Sea Bone Broth, Cordycep Gomashio",
        "Kohlrabi Ravioli, Avocado Cremè, Preserved Lemon Eleuthero Tahini, Tree Nut Ricotta, Pine Pollen Dust",
        "Chaga Crusted Artichoke Croquette, Spirulina Tartare, Sea Buckthorn Kraut, Kimchi Kelp Cracker",
        "Flourless Reishi Brownie Cake, Beetroot & Cardamom Rhodiola Ice-Cream, Black Sesame Brittle, Schisandra Cardamom Cream",
        "Lavender Moon Milk, Heart Tonic He Shou Wu Cacao Bark"
      ],
      dates: [
        "Supper Club 1: Nov 23 (Tuesday)",
        "Supper Club 2: Nov 28 (Monday)", 
        "Supper Club 3: Dec 7 (Tuesday)",
        "Supper Club 4: Dec 14 (Tuesday)"
      ],
      details: {
        location: "Wild & The Moon, Alserkal Avenue",
        time: "From 7.30pm",
        price: "230 AED"
      }
    }
  },
  2: {
    title: "Wild Supper Club: Iftar Edition",
    date: "March 2022",
    location: "Dubai, UAE",
    content: {
      subtitle: "Bringing you the best plant-based vibes this Ramadan with a real Asian feast!",
      description: "Gracing this Ramadan with the wildest vibes yet, Wild & The Moon is proud to present the Wild Supper Club: Iftar Edition—a one-of-a-kind culinary experience that redefines traditional Iftar.",
      menu1: [
        "Starter: Wild Nori Chips – Seasoned yaki nori toasted in sesame seed oil",
        "Salad: Wakame Salad – Cucumber wakame salad tossed in creamy Wild sauce",
        "Soup: Wild Ramen – Rice noodles, corn, portobello mushrooms, pak choy, nori, bamboo shoots",
        "Main Course: Vegan Sushi – Sushi rice, vegan tuna, mushroom, cucumber",
        "Dessert: Mochi – Steamed mochigome with a red bean center, coated in grated coconut",
        "Drink: Infused Water – Filtered water infused with lemongrass and pandan"
      ],
      menu2: [
        "Starter: Wild Rice Paper Rolls – Red capsicum, carrot, mango, onion, basil, coriander",
        "Salad: Pomelo Salad – Pomelo, fried onions, coriander, lime leaves, lemongrass",
        "Main Course: Wild Peanut Curry – Pak choy, eggplant, rice, topped with peanut-based curry",
        "Dessert: Mango Sticky Rice – Sticky rice in creamy coconut base, topped with fresh mangoes",
        "Drink: Infused Water – Filtered water infused with lemongrass and pandan"
      ],
      details: {
        dates: "April 6th, 13th, 20th & 27th",
        time: "6:45 PM",
        price: "AED 210/- per person",
        location: "Wild & The Moon, Alserkal Avenue"
      }
    }
  },
  3: {
    title: "Wild & The Moon x Comptoir102 x Dirtea: A Shroom Boom with Fungi",
    date: "March 2023",
    location: "Dubai, UAE",
    content: {
      subtitle: "Tapping into new generations of wellness with fungi!",
      description: "An exclusive wellness experience curated with the next-generation wellness, health and biohacking brand DIRTEA. The fungi-loving brothers and founders of DIRTEA will join us to explore their magical product range of functional mushroom blends.",
      includes: [
        "Engaging and informative discussions on mushroom and supershroom blends",
        "Tasting and trying mushroom mixes and drinks, along with healthy bites",
        "Goodie bags to take away",
        "Relaxing post-event session at sundown"
      ],
      locations: [
        {
          venue: "Wild & The Moon",
          address: "H77, Alserkal Avenue, Al Quoz, UAE",
          date: "Monday, 3rd May",
          time: "10.30 am to 12 pm"
        },
        {
          venue: "Comptoir102", 
          address: "102 Beach Road, Jumeirah 1, Dubai, UAE",
          date: "Tuesday, 4th May",
          time: "10.30 am to 12 pm"
        }
      ],
      sundowner: {
        time: "7 pm to 8.30 pm",
        location: "Villa 16b (5 minutes from Comptoir102)",
        activities: ["Cacao Ceremony", "Yin class with Nitai", "Calming mushroom soup"]
      }
    }
  },
  4: {
    title: "Wild & The Moon x Comptoir102 x Respect: Superfood Workshop",
    date: "January 2022", 
    location: "Dubai, UAE",
    content: {
      subtitle: "Enter superfood heaven with Wild & The Moon & Comptoir 102",
      description: "An interactive and educational session led by Robin Morrison, CEO and founding member of Respect Health, diving into 100% plant-based and organic superfoods.",
      workshop_includes: [
        "Interactive discussions on nutrition tips and benefits",
        "Hands-on activity creating superfood dishes (Superfood Frozen bowl & Spirulina toast)",
        "Goodie bag (Respect Superfood + Tote Bag + Wild & The Moon cold-pressed juice)"
      ],
      for_you_if: [
        "Understand all about superfoods and different superfood blends",
        "Learn ways to incorporate superfoods into everyday life", 
        "Level up your breakfast game and flavour creating skills",
        "Learn to create nutritious meals like a superfood expert",
        "Connect with yourself and nature to improve your wellness journey"
      ],
      locations: [
        {
          venue: "Wild & The Moon",
          address: "H77, Alserkal Avenue, Al Quoz, UAE", 
          date: "Saturday, 12th February",
          time: "10 am to 12 pm"
        },
        {
          venue: "Comptoir102",
          address: "102 Beach Road, Jumeirah 1, Dubai, UAE",
          date: "Saturday, 19th February", 
          time: "10 am to 12 pm"
        }
      ],
      price: "AED 125"
    }
  }
};

export default function DocumentViewer() {
  const [match, params] = useRoute("/portfolio/content-writing/:id");
  const documentId = params?.id ? parseInt(params.id) : null;

  const { data: document, isLoading } = useQuery<Document>({
    queryKey: ['/api/documents', documentId],
    queryFn: async () => {
      const response = await fetch(`/api/documents/${documentId}`);
      if (!response.ok) throw new Error('Failed to fetch document');
      return response.json();
    },
    enabled: !!documentId
  });

  if (!match || !documentId) {
    return <div className="min-h-screen flex items-center justify-center text-[#8B85A0]">Document not found</div>;
  }

  const content = documentContent[documentId];

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <HudOverlay />
      <div className="container mx-auto px-6 max-w-4xl py-[140px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12"
        >
          <Link href="/portfolio/content-writing">
            <button className="cta-secondary mb-6 flex items-center gap-2 px-4 py-2 text-[0.75rem]">
              <ArrowLeft className="w-4 h-4" />
              BACK TO CONTENT WRITING SAMPLES
            </button>
          </Link>
        </motion.div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-2 text-[#8B85A0]">
              <div className="w-4 h-4 border-2 border-[#A378FF] border-t-transparent rounded-full animate-spin"></div>
              Loading document...
            </div>
          </div>
        ) : document && content ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="glass-panel mb-8 p-8">
              <div className="flex items-start justify-between mb-4">
                <span className="glass-panel px-4 py-2 text-[0.7rem] uppercase tracking-[0.15em] text-[#A378FF]">
                  Press Release
                </span>
                <a 
                  href={`/api/documents/${documentId}/file`} 
                  download
                  className="cta-secondary flex items-center gap-2 px-3 py-1.5 text-[0.7rem]"
                >
                  <Download className="w-4 h-4" />
                  DOWNLOAD PDF
                </a>
              </div>
              <h1 className="section-title mb-4">
                {content.title}
              </h1>
              <div className="flex items-center gap-6 text-[#8B85A0] text-[0.85rem]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#A378FF]" />
                  {content.date}
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#A378FF]" />
                  {content.location}
                </div>
              </div>
            </div>

            <div className="glass-panel p-8">
              <div className="max-w-none">
                {content.content.subtitle && (
                  <p className="text-xl font-light text-center mb-8 text-[#A378FF]">
                    {content.content.subtitle}
                  </p>
                )}
                
                <p className="mb-6 leading-[1.85] text-[#8B85A0] font-light text-[0.9rem]">
                  {content.content.description}
                </p>

                {content.content.theme && (
                  <div className="mb-8">
                    <h3 className="text-xl font-light text-[#F0ECFF] mb-4">Theme & Menu:</h3>
                    <p className="font-medium mb-4 text-[#A378FF]">"{content.content.theme}"</p>
                  </div>
                )}

                {content.content.menu && (
                  <div className="mb-8">
                    <h3 className="text-xl font-light text-[#F0ECFF] mb-4">The Menu:</h3>
                    <ol className="list-decimal list-inside space-y-2">
                      {content.content.menu.map((item: string, index: number) => (
                        <li key={index} className="leading-relaxed text-[#8B85A0] font-light marker:text-[#A378FF]">{item}</li>
                      ))}
                    </ol>
                  </div>
                )}

                {content.content.menu1 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-light text-[#F0ECFF] mb-4">Menu 1:</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {content.content.menu1.map((item: string, index: number) => (
                        <li key={index} className="leading-relaxed text-[#8B85A0] font-light marker:text-[#A378FF]">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {content.content.menu2 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-light text-[#F0ECFF] mb-4">Menu 2:</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {content.content.menu2.map((item: string, index: number) => (
                        <li key={index} className="leading-relaxed text-[#8B85A0] font-light marker:text-[#A378FF]">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {content.content.includes && (
                  <div className="mb-8">
                    <h3 className="text-xl font-light text-[#F0ECFF] mb-4">Event Includes:</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {content.content.includes.map((item: string, index: number) => (
                        <li key={index} className="leading-relaxed text-[#8B85A0] font-light marker:text-[#A378FF]">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {content.content.workshop_includes && (
                  <div className="mb-8">
                    <h3 className="text-xl font-light text-[#F0ECFF] mb-4">Workshop Includes:</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {content.content.workshop_includes.map((item: string, index: number) => (
                        <li key={index} className="leading-relaxed text-[#8B85A0] font-light marker:text-[#A378FF]">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {content.content.for_you_if && (
                  <div className="mb-8">
                    <h3 className="text-xl font-light text-[#F0ECFF] mb-4">This is for you if you want to:</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {content.content.for_you_if.map((item: string, index: number) => (
                        <li key={index} className="leading-relaxed text-[#8B85A0] font-light marker:text-[#A378FF]">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {content.content.locations && (
                  <div className="mb-8">
                    <h3 className="text-xl font-light text-[#F0ECFF] mb-4">Locations & Dates:</h3>
                    <div className="space-y-4">
                      {content.content.locations.map((location: any, index: number) => (
                        <div key={index} className="glass-panel p-4">
                          <h4 className="font-medium text-[#F0ECFF]">{location.venue}</h4>
                          <p className="text-sm text-[#8B85A0]">{location.address}</p>
                          <p className="text-sm text-[#8B85A0]">{location.date}</p>
                          <p className="text-sm text-[#8B85A0]">{location.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {content.content.details && (
                  <div className="mb-8">
                    <h3 className="text-xl font-light text-[#F0ECFF] mb-4">Event Details:</h3>
                    <div className="glass-panel p-6 space-y-2">
                      {Object.entries(content.content.details).map(([key, value]) => (
                        <div key={key} className="flex">
                          <span className="font-medium capitalize w-24 text-[#F0ECFF]">{key.replace('_', ' ')}:</span>
                          <span className="text-[#8B85A0]">{value as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.07)]">
                  <div className="glass-panel p-6">
                    <h3 className="text-xl font-light text-[#F0ECFF] mb-4">About Wild & The Moon:</h3>
                    <p className="leading-[1.85] text-[#8B85A0] font-light text-[0.9rem]">
                      Wild & The Moon is a homegrown premium plant-based, organic, ethical, casual quick service restaurant chain. 
                      We believe there is no better business than a business that does good, hence we are based on the simple belief 
                      that food should be good for you, good for the planet, and delicious.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[rgba(255,255,255,0.07)]">
                  <h3 className="text-xl font-light text-[#F0ECFF] mb-4">Contact:</h3>
                  <div className="space-y-2 text-[#8B85A0] font-light text-[0.9rem]">
                    <p><span className="text-[#F0ECFF]">Airin John</span></p>
                    <p>Brand & Communications Manager</p>
                    <p>Email: socialdxb@wildandthemoon.com</p>
                    <p>Phone: 056 581 0728</p>
                    <p>Website: https://www.wildandthemoon.ae</p>
                    <p>Social Media: @wildandthemoonuae</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-light text-[#F0ECFF] mb-2">Document not found</h3>
            <p className="text-[#8B85A0] font-light">
              The requested document could not be found.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}