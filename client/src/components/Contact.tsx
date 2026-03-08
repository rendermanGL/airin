import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await apiRequest({ url: '/api/contact', method: 'POST', body: data });
      toast({ title: "Message sent!", description: "Thank you for your message. I'll get back to you soon." });
      reset();
    } catch (error) {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    }
  };

  const inputStyle = {
    background: 'rgba(43,18,76,0.4)',
    border: '1px solid rgba(251,228,216,0.1)',
    color: 'var(--col-cream)',
    borderRadius: 0,
    padding: '12px 16px',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300,
    fontSize: '0.9rem',
    outline: 'none',
    width: '100%',
    transition: 'border-color 300ms ease',
  };

  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--col-cream)',
              lineHeight: 1.1,
            }}
            className="max-w-2xl"
          >
            Let's build something that moves people.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: '1.5rem',
                color: 'var(--col-cream)',
              }}
            >
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4" style={{ color: 'var(--col-rose)' }}>
                  <i className="fas fa-map-marker-alt text-lg"></i>
                </div>
                <div>
                  <h4 style={{ color: 'var(--col-cream)', fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: '0.85rem' }}>Location</h4>
                  <p style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>Dubai, United Arab Emirates</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4" style={{ color: 'var(--col-rose)' }}>
                  <i className="fas fa-envelope text-lg"></i>
                </div>
                <div>
                  <h4 style={{ color: 'var(--col-cream)', fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: '0.85rem' }}>Email</h4>
                  <a href="mailto:elsa.airin@gmail.com" className="transition-colors hover:opacity-80" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>elsa.airin@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4" style={{ color: 'var(--col-rose)' }}>
                  <i className="fas fa-phone-alt text-lg"></i>
                </div>
                <div>
                  <h4 style={{ color: 'var(--col-cream)', fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: '0.85rem' }}>Phone</h4>
                  <p style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>(+971) 55 981 3969</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4" style={{ color: 'var(--col-rose)' }}>
                  <i className="fas fa-globe text-lg"></i>
                </div>
                <div>
                  <h4 style={{ color: 'var(--col-cream)', fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: '0.85rem' }}>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/airinjohn" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-80" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>linkedin.com/in/airinjohn</a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="mb-4" style={{ color: 'var(--col-cream)', fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: '0.85rem' }}>Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/airinjohn" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: '1.5rem',
                color: 'var(--col-cream)',
              }}
            >
              Send Me a Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block mb-1" style={{ color: 'var(--col-blush)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif" }}>Your Name</label>
                <input
                  {...register("name")}
                  placeholder="Jane Doe"
                  style={inputStyle}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(133,79,108,0.5)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(251,228,216,0.1)'}
                />
                {errors.name && <p className="mt-1 text-sm" style={{ color: '#ef4444' }}>{errors.name.message}</p>}
              </div>

              <div>
                <label className="block mb-1" style={{ color: 'var(--col-blush)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif" }}>Your Email</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="jane@example.com"
                  style={inputStyle}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(133,79,108,0.5)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(251,228,216,0.1)'}
                />
                {errors.email && <p className="mt-1 text-sm" style={{ color: '#ef4444' }}>{errors.email.message}</p>}
              </div>

              <div>
                <label className="block mb-1" style={{ color: 'var(--col-blush)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif" }}>Subject</label>
                <input
                  {...register("subject")}
                  placeholder="Project Inquiry"
                  style={inputStyle}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(133,79,108,0.5)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(251,228,216,0.1)'}
                />
                {errors.subject && <p className="mt-1 text-sm" style={{ color: '#ef4444' }}>{errors.subject.message}</p>}
              </div>

              <div>
                <label className="block mb-1" style={{ color: 'var(--col-blush)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Sans', sans-serif" }}>Message</label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(133,79,108,0.5)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(251,228,216,0.1)'}
                />
                {errors.message && <p className="mt-1 text-sm" style={{ color: '#ef4444' }}>{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-9 transition-all duration-300 uppercase tracking-widest text-sm"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  background: 'linear-gradient(135deg, #522B5B, #854F6C)',
                  color: 'var(--col-cream)',
                  border: 'none',
                  borderRadius: 0,
                  letterSpacing: '0.1em',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #854F6C, #DFB6B2)';
                    e.currentTarget.style.color = '#190019';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #522B5B, #854F6C)';
                  e.currentTarget.style.color = 'var(--col-cream)';
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
