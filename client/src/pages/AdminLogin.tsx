import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      console.log('Attempting login with:', data);
      const response = await apiRequest({ url: '/api/admin/login', method: 'POST', body: data });
      console.log('Login response:', response);
      toast({ title: "Login successful", description: "Welcome to the admin dashboard" });
      setLocation('/admin/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      toast({ title: "Login failed", description: "Invalid username or password", variant: "destructive" });
    }
  };

  const inputStyle = {
    background: 'rgba(43,18,76,0.4)',
    border: '1px solid rgba(251,228,216,0.1)',
    color: 'var(--col-cream)',
    borderRadius: 0,
    padding: '12px 16px',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300 as const,
    fontSize: '0.9rem',
    outline: 'none',
    width: '100%',
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <div
          className="p-8"
          style={{
            background: 'rgba(43,18,76,0.4)',
            border: '1px solid rgba(251,228,216,0.08)',
            borderRadius: 0,
            backdropFilter: 'blur(8px)',
          }}
        >
          <h2 className="text-center mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.8rem', color: 'var(--col-cream)' }}>
            Admin Login
          </h2>
          <p className="text-center mb-6" style={{ color: 'var(--col-blush)', fontSize: '0.8rem' }}>Sign in to access the dashboard</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input {...register("username")} type="text" placeholder="Username" style={inputStyle} />
              {errors.username && <p className="text-sm mt-1" style={{ color: '#ef4444' }}>{errors.username.message}</p>}
            </div>
            <div>
              <input {...register("password")} type="password" placeholder="Password" style={inputStyle} />
              {errors.password && <p className="text-sm mt-1" style={{ color: '#ef4444' }}>{errors.password.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 uppercase tracking-widest text-sm transition-all duration-300"
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
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
