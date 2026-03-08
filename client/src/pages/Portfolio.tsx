
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const portfolioCategories = [
  {
    id: "strategic-marketing",
    title: "Strategic Marketing",
    description: "Multi-channel brand portfolio management and innovative marketing strategies that drive measurable business growth.",
    imageUrl: "/portfolio-images/strategic-marketing.jpg",
    route: "/portfolio/strategic-marketing"
  },
  {
    id: "customer-engagement",
    title: "Customer Experience & Community Engagement",
    description: "Building meaningful community connections and enhancing customer experiences through innovative engagement strategies.",
    imageUrl: "/portfolio-images/customer-engagement.png",
    route: "/portfolio/customer-engagement"
  },
  {
    id: "brand-storytelling",
    title: "Brand Storytelling & Multi-Channel Marketing",
    description: "Creating compelling brand narratives and executing integrated campaigns across multiple touchpoints.",
    imageUrl: "/portfolio-images/brand-storytelling.png",
    route: "/portfolio/brand-storytelling"
  },
  {
    id: "awards-recognition",
    title: "Awards & Recognition",
    description: "Industry recognition and award-winning campaigns that showcase excellence in brand marketing and communications.",
    imageUrl: "/portfolio-images/awards-recognition.jpg",
    route: "/portfolio/awards-recognition"
  },
  {
    id: "content-writing",
    title: "Content Writing Samples",
    description: "Professional content writing portfolio including press releases, event materials, and brand communications that generated significant media coverage.",
    imageUrl: "/portfolio-images/content-writing.jpg",
    route: "/portfolio/content-writing"
  }
];

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                color: 'var(--col-cream)',
                letterSpacing: '-0.02em',
                lineHeight: 0.9,
              }}
              className="mb-6"
            >
              Portfolio
            </h1>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, #854F6C, #DFB6B2)', margin: '0 auto 24px' }} />
            <p style={{ color: 'var(--col-blush)', fontSize: '0.9rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.85 }}>
              Explore my expertise across strategic marketing, customer engagement, brand storytelling, and award-winning campaigns that have driven measurable business results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={category.route}>
                  <div
                    className="overflow-hidden cursor-pointer transition-all duration-400"
                    style={{
                      background: 'rgba(43, 18, 76, 0.4)',
                      border: '1px solid rgba(251, 228, 216, 0.08)',
                      borderRadius: 0,
                      backdropFilter: 'blur(8px)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(82, 43, 91, 0.5)';
                      e.currentTarget.style.borderColor = 'rgba(133, 79, 108, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(43, 18, 76, 0.4)';
                      e.currentTarget.style.borderColor = 'rgba(251, 228, 216, 0.08)';
                    }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={category.imageUrl}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#190019]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                        <span
                          className="inline-flex items-center px-4 py-2"
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                            fontSize: '0.75rem',
                            color: 'var(--col-blush)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                          }}
                        >
                          Explore &rarr;
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <p
                        className="mb-2"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 300,
                          fontSize: '0.7rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.12em',
                          color: 'var(--col-rose)',
                        }}
                      >
                        Case Study
                      </p>
                      <h3
                        className="mb-4"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 400,
                          fontSize: '1.5rem',
                          color: 'var(--col-cream)',
                        }}
                      >
                        {category.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 300,
                          fontSize: '0.85rem',
                          color: 'var(--col-blush)',
                          lineHeight: 1.7,
                        }}
                      >
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
