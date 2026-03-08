import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await apiRequest({
        url: '/api/contact',
        method: 'POST',
        body: data,
      });
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-[140px]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="hud-label block mb-4">// INITIATE CONTACT</span>
          <h2 className="section-title mb-6">Let's build something that moves people.</h2>
          <div className="gradient-line"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <div className="py-3 border-b border-[rgba(255,255,255,0.04)]">
                <span className="text-[#8B85A0] text-[0.8rem] font-light">
                  <span className="data-readout">CHANNEL_01</span> · LOCATION · Dubai, United Arab Emirates
                </span>
              </div>
              
              <div className="py-3 border-b border-[rgba(255,255,255,0.04)]">
                <span className="text-[#8B85A0] text-[0.8rem] font-light">
                  <span className="data-readout">CHANNEL_02</span> · EMAIL · <a href="mailto:elsa.airin@gmail.com" className="hover:text-[#A378FF] transition-colors">elsa.airin@gmail.com</a>
                </span>
              </div>
              
              <div className="py-3 border-b border-[rgba(255,255,255,0.04)]">
                <span className="text-[#8B85A0] text-[0.8rem] font-light">
                  <span className="data-readout">CHANNEL_03</span> · PHONE · (+971) 55 981 3969
                </span>
              </div>
              
              <div className="py-3 border-b border-[rgba(255,255,255,0.04)]">
                <span className="text-[#8B85A0] text-[0.8rem] font-light">
                  <span className="data-readout">CHANNEL_04</span> · LINKEDIN · <a href="https://www.linkedin.com/in/airinjohn" target="_blank" rel="noopener noreferrer" className="hover:text-[#A378FF] transition-colors">linkedin.com/in/airinjohn</a>
                </span>
              </div>
            </div>
            
            <div className="mt-12">
              <span className="hud-label block mb-4">// CONNECT</span>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/airinjohn" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="hud-label block mb-2">YOUR NAME</label>
                <Input 
                  id="name" 
                  placeholder="John Doe"
                  className="w-full p-3 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] text-[#F0ECFF] placeholder:text-[#4A4560] focus:ring-1 focus:ring-[#A378FF] focus:border-[rgba(163,120,255,0.4)] transition-colors"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="hud-label block mb-2">YOUR EMAIL</label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="john@example.com"
                  className="w-full p-3 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] text-[#F0ECFF] placeholder:text-[#4A4560] focus:ring-1 focus:ring-[#A378FF] focus:border-[rgba(163,120,255,0.4)] transition-colors"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="hud-label block mb-2">SUBJECT</label>
                <Input 
                  id="subject" 
                  placeholder="Project Inquiry"
                  className="w-full p-3 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] text-[#F0ECFF] placeholder:text-[#4A4560] focus:ring-1 focus:ring-[#A378FF] focus:border-[rgba(163,120,255,0.4)] transition-colors"
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="hud-label block mb-2">MESSAGE</label>
                <Textarea 
                  id="message" 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full p-3 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] text-[#F0ECFF] placeholder:text-[#4A4560] focus:ring-1 focus:ring-[#A378FF] focus:border-[rgba(163,120,255,0.4)] transition-colors"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full cta-gradient flex items-center justify-center"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? "TRANSMITTING..." : "OPEN CHANNEL"}</span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
