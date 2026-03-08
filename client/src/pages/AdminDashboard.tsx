import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";
import { LogOut, Mail, Calendar, User } from "lucide-react";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await apiRequest({
        url: '/api/admin/contacts',
        method: 'GET',
      });
      setContacts(response);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch contact messages",
        variant: "destructive",
      });
      setLocation('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await apiRequest({
        url: '/api/admin/logout',
        method: 'POST',
      });
      
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
      });
      
      setLocation('/admin/login');
    } catch (error) {
      setLocation('/admin/login');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-[#A378FF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#8B85A0] font-light">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-[rgba(255,255,255,0.06)] bg-[rgba(3,0,10,0.85)] backdrop-blur-[20px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <p className="hud-label mb-1">// ADMIN PANEL</p>
              <h1 className="text-2xl font-light text-[#F0ECFF] tracking-[-0.02em]">Admin Dashboard</h1>
            </div>
            <button onClick={handleLogout} className="cta-secondary flex items-center gap-2 px-4 py-2 text-[0.7rem]">
              <LogOut className="w-4 h-4" />
              LOGOUT
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="glass-panel p-6">
            <div className="flex items-center">
              <Mail className="w-8 h-8 text-[#A378FF] mr-3" />
              <div>
                <p className="text-2xl font-light text-[#F0ECFF]">{contacts.length}</p>
                <p className="text-[#8B85A0] text-[0.8rem] font-light">Total Messages</p>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-6">
            <div className="flex items-center">
              <Calendar className="w-8 h-8 text-[#A378FF] mr-3" />
              <div>
                <p className="text-2xl font-light text-[#F0ECFF]">
                  {contacts.filter(c => {
                    const today = new Date();
                    const msgDate = new Date(c.createdAt);
                    return msgDate.toDateString() === today.toDateString();
                  }).length}
                </p>
                <p className="text-[#8B85A0] text-[0.8rem] font-light">Today</p>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-6">
            <div className="flex items-center">
              <User className="w-8 h-8 text-[#A378FF] mr-3" />
              <div>
                <p className="text-2xl font-light text-[#F0ECFF]">
                  {new Set(contacts.map(c => c.email)).size}
                </p>
                <p className="text-[#8B85A0] text-[0.8rem] font-light">Unique Contacts</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="glass-panel-static">
            <div className="p-6 border-b border-[rgba(255,255,255,0.07)]">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#A378FF]" />
                <h2 className="text-lg font-light text-[#F0ECFF]">Contact Messages</h2>
                <span className="glass-panel px-3 py-1 text-[0.7rem] text-[#A378FF] tracking-[0.05em] ml-2">
                  {contacts.length}
                </span>
              </div>
            </div>
            <div className="p-6">
              {contacts.length === 0 ? (
                <div className="text-center py-8">
                  <Mail className="w-12 h-12 text-[#4A4560] mx-auto mb-4" />
                  <p className="text-[#8B85A0] font-light">No contact messages yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <motion.div
                      key={contact.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="glass-panel p-4 hover:bg-[rgba(255,255,255,0.06)] transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-[#F0ECFF]">{contact.name}</h3>
                          <p className="text-sm text-[#8B85A0]">{contact.email}</p>
                        </div>
                        <div className="text-right">
                          <span className="glass-panel px-3 py-1 text-[0.65rem] text-[#8B85A0] tracking-[0.05em]">
                            {formatDate(contact.createdAt)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <h4 className="font-medium mb-1 text-[#F0ECFF] text-[0.85rem]">Subject:</h4>
                        <p className="text-sm text-[#8B85A0]">{contact.subject}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-1 text-[#F0ECFF] text-[0.85rem]">Message:</h4>
                        <p className="text-sm text-[#8B85A0] whitespace-pre-wrap font-light">
                          {contact.message}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}