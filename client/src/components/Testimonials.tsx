import { motion } from "framer-motion";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: 'var(--col-cream)',
            }}
            className="mb-4"
          >
            Client Testimonials
          </h2>
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, #854F6C, #DFB6B2)', margin: '0 auto' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="p-8"
              style={{
                background: 'rgba(43,18,76,0.3)',
                borderLeft: '2px solid #854F6C',
                borderRadius: 0,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p
                className="mb-6 leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: '1.1rem',
                  color: 'var(--col-cream)',
                }}
              >
                "{testimonial.content}"
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--col-blush)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {testimonial.author}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.7rem',
                    color: 'var(--col-rose)',
                  }}
                >
                  {testimonial.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
