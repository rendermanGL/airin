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
      // This would typically connect to a backend API
      // For now, we'll just simulate a success response
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-foreground">Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl text-primary font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-secondary mt-1 mr-4">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-primary">Location</h4>
                  <p className="text-gray-600">San Francisco, California</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-secondary mt-1 mr-4">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-primary">Email</h4>
                  <p className="text-gray-600">hello@airinjohn.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-secondary mt-1 mr-4">
                  <i className="fas fa-phone-alt text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-primary">Phone</h4>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-secondary mt-1 mr-4">
                  <i className="fas fa-globe text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-primary">Website</h4>
                  <p className="text-gray-600">www.airinjohn.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-medium text-primary mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-accent social-icon">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a href="#" className="text-primary hover:text-accent social-icon">
                  <i className="fab fa-dribbble text-xl"></i>
                </a>
                <a href="#" className="text-primary hover:text-accent social-icon">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="#" className="text-primary hover:text-accent social-icon">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-primary hover:text-accent social-icon">
                  <i className="fab fa-behance text-xl"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl text-primary font-semibold mb-6">Send Me a Message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">Your Name</label>
                <Input 
                  id="name" 
                  placeholder="John Doe"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">Your Email</label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="john@example.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary mb-1">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="Project Inquiry"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">Message</label>
                <Textarea 
                  id="message" 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6 flex items-center justify-center"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <i className="fas fa-paper-plane ml-2"></i>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
