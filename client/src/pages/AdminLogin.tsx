import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
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
      const response = await apiRequest({
        url: '/api/admin/login',
        method: 'POST',
        body: data,
      });
      
      console.log('Login response:', response);
      
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      });
      
      setLocation('/admin/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-md w-full"
      >
        <div className="glass-panel p-8">
          <div className="text-center mb-8">
            <p className="hud-label mb-3">// SYSTEM ACCESS</p>
            <h1 className="text-2xl font-light text-[#F0ECFF] tracking-[-0.02em]">Admin Login</h1>
            <div className="gradient-line mx-auto mt-3" />
            <p className="text-[#8B85A0] mt-4 text-[0.85rem] font-light">Sign in to access the dashboard</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="hud-label block mb-2">USERNAME</label>
              <input
                {...register("username")}
                type="text"
                placeholder="Username"
                className={`w-full bg-[rgba(255,255,255,0.04)] border ${errors.username ? 'border-red-500' : 'border-[rgba(255,255,255,0.07)]'} text-[#F0ECFF] placeholder:text-[#4A4560] px-4 py-3 text-[0.9rem] font-light focus:outline-none focus:border-[rgba(163,120,255,0.4)] transition-colors`}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
              )}
            </div>
            
            <div>
              <label className="hud-label block mb-2">PASSWORD</label>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className={`w-full bg-[rgba(255,255,255,0.04)] border ${errors.password ? 'border-red-500' : 'border-[rgba(255,255,255,0.07)]'} text-[#F0ECFF] placeholder:text-[#4A4560] px-4 py-3 text-[0.9rem] font-light focus:outline-none focus:border-[rgba(163,120,255,0.4)] transition-colors`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>
            
            <button 
              type="submit" 
              className="cta-gradient w-full py-3 mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SIGNING IN..." : "SIGN IN"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}