import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({ title: "Error", description: "Please enter your email address", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({ title: "Success!", description: "Thank you for subscribing to my newsletter." });
      setEmail("");
    } catch (error) {
      toast({ title: "Error", description: "There was an error subscribing. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 py-12"
      style={{ borderTop: '1px solid rgba(251,228,216,0.08)', background: 'transparent' }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <a
              href="mailto:elsa.airin@gmail.com"
              className="block transition-colors hover:opacity-80"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: '0.75rem',
                color: 'var(--col-blush)',
              }}
            >
              elsa.airin@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/airinjohn"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:opacity-80"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: '0.75rem',
                color: 'var(--col-blush)',
              }}
            >
              linkedin.com/in/airinjohn
            </a>
          </div>

          <div className="text-center">
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: '1.5rem',
                color: 'var(--col-cream)',
              }}
            >
              Airin John
            </span>
          </div>

          <div className="text-right">
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: '0.7rem',
                color: 'var(--col-blush)',
              }}
            >
              &copy; {currentYear} Airin John. All rights reserved.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: '0.65rem',
                color: 'var(--col-blush)',
                opacity: 0.6,
                marginTop: '4px',
              }}
            >
              Designed & Developed by{' '}
              <a
                href="http://4ndigitalsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--col-cream)' }}
              >
                4n Digital Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
