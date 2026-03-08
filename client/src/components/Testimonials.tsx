import { motion } from "framer-motion";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-medium text-primary text-lg">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}