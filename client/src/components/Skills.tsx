import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const capabilities = [
  {
    id: "CAP_01",
    title: "Strategic Brand Management",
    proof:
      "Built and scaled brand identity for Black Sheep Coffee across UAE, aligning multi-channel campaigns with business growth goals.",
    tags: ["Brand Strategy", "Positioning", "Identity"],
  },
  {
    id: "CAP_02",
    title: "Integrated Campaign Execution",
    proof:
      "Led end-to-end campaign delivery across digital, social, OOH and PR — driving measurable reach and engagement for F&B brands in GCC.",
    tags: ["Campaign Management", "Multi-Channel"],
  },
  {
    id: "CAP_03",
    title: "Performance Marketing & ROI",
    proof:
      "Managed paid media budgets and reported performance against KPIs to C-suite stakeholders, optimising spend for maximum returns.",
    tags: ["Paid Media", "KPI Reporting", "Analytics"],
  },
  {
    id: "CAP_04",
    title: "Influencer & Creator Strategy",
    proof:
      "Sourced, negotiated and managed creator partnerships across key UAE lifestyle and food verticals to amplify brand storytelling.",
    tags: ["Influencer Relations", "Content Strategy"],
  },
  {
    id: "CAP_05",
    title: "Stakeholder & Budget Management",
    proof:
      "Cross-functional collaborator working with operations, product, and senior leadership to align marketing with commercial objectives.",
    tags: ["Leadership", "Budget Planning", "Partnerships"],
  },
  {
    id: "CAP_06",
    title: "Brand Storytelling & Content",
    proof:
      "Crafted purpose-led brand narratives across copy, social, and long-form content — building emotional resonance with target audiences.",
    tags: ["Copywriting", "Content Strategy", "Narrative"],
  },
];

const tools = [
  "Meta Business Suite",
  "Power BI",
  "Salesforce",
  "Mailchimp",
  "Asana",
  "Google Business Profile",
  "CRM Systems",
  "Canva",
  "Figma",
  "Microsoft Office",
  "Social Media Management Tools",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="skills"
      style={{
        padding: "140px 0",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 300,
              color: "#8A8A96",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            // CAPABILITIES
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              color: "#0A0A0F",
              letterSpacing: "-0.02em",
              marginBottom: "64px",
            }}
          >
            What I bring to the table
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "2px",
          }}
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.id}
              variants={cardVariants}
              style={{
                background: "rgba(0, 0, 0, 0.02)",
                border: "1px solid rgba(0, 0, 0, 0.07)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: 0,
                boxShadow: "inset 0 1px 0 rgba(255,255,255,1)",
                padding: "28px 32px",
                display: "flex",
                flexDirection: "column" as const,
                gap: "10px",
                transition: "all 400ms ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(0, 0, 0, 0.04)";
                el.style.borderColor = "rgba(163, 120, 255, 0.3)";
                el.style.boxShadow = "0 0 40px rgba(163, 120, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(0, 0, 0, 0.02)";
                el.style.borderColor = "rgba(0, 0, 0, 0.07)";
                el.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,1)";
              }}
            >
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 300,
                  color: "#8A8A96",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                {cap.id}
              </p>

              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#0A0A0F",
                  letterSpacing: "0.02em",
                }}
              >
                {cap.title}
              </p>

              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  color: "#4A4A56",
                  lineHeight: 1.75,
                  borderLeft: "2px solid rgba(163, 120, 255, 0.3)",
                  paddingLeft: "12px",
                  marginTop: "4px",
                }}
              >
                {cap.proof}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  flexWrap: "wrap" as const,
                  marginTop: "6px",
                }}
              >
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.6rem",
                      fontWeight: 400,
                      color: "#A378FF",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase" as const,
                      opacity: 0.7,
                    }}
                  >
                    · {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          style={{
            marginTop: "48px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(0, 0, 0, 0.07)",
          }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 300,
              color: "#8A8A96",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            // TOOLS & TECHNOLOGIES
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {tools.map((tool) => (
              <span
                key={tool}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  padding: "5px 14px",
                  background: "transparent",
                  border: "1px solid rgba(0, 0, 0, 0.07)",
                  fontSize: "0.65rem",
                  fontWeight: 300,
                  color: "#8A8A96",
                  letterSpacing: "0.08em",
                  borderRadius: 0,
                  transition: "all 250ms ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(163, 120, 255, 0.3)";
                  el.style.color = "#4A4A56";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(0, 0, 0, 0.07)";
                  el.style.color = "#8A8A96";
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
