import { motion } from "framer-motion";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section className="py-[140px]">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="hud-label block mb-4">// TESTIMONIALS</span>
          <h2 className="section-title mb-6">Recommendations</h2>
          <div className="gradient-line"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="glass-panel p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <p
                className="text-[#0A0A0F] italic mb-6 text-[0.9rem] leading-[1.85] font-light"
                style={{ fontWeight: 300 }}
              >
                "{testimonial.content}"
              </p>
              <div>
                <p
                  className="text-[#1C1C24] text-[0.9rem]"
                  style={{ fontWeight: 500 }}
                >
                  {testimonial.author}
                </p>
                <p
                  className="text-[0.8rem] text-[#8A8A96]"
                  style={{ fontWeight: 300 }}
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
