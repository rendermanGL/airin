import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => { fetchContacts(); }, []);

  const fetchContacts = async () => {
    try {
      const response = await apiRequest({ url: '/api/admin/contacts', method: 'GET' });
      setContacts(response);
    } catch (error) {
      toast({ title: "Error", description: "Failed to fetch contact messages", variant: "destructive" });
      setLocation('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await apiRequest({ url: '/api/admin/logout', method: 'POST' });
      toast({ title: "Logged out", description: "You have been successfully logged out" });
      setLocation('/admin/login');
    } catch (error) {
      setLocation('/admin/login');
    }
  };

  const formatDate = (dateString: string) => new Date(dateString).toLocaleString();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: 'var(--col-rose)' }} />
          <p style={{ color: 'var(--col-blush)' }}>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const cardStyle = {
    background: 'rgba(43,18,76,0.4)',
    border: '1px solid rgba(251,228,216,0.08)',
    borderRadius: 0,
    backdropFilter: 'blur(8px)',
  };

  return (
    <div className="min-h-screen relative z-10">
      <header className="py-4" style={{ borderBottom: '1px solid rgba(251,228,216,0.08)', background: 'rgba(25,0,25,0.75)', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.5rem', color: 'var(--col-cream)' }}>Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 transition-all duration-300 text-xs uppercase tracking-widest"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                border: '1px solid rgba(251,228,216,0.2)',
                color: 'var(--col-blush)',
                background: 'transparent',
                borderRadius: 0,
              }}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {[
            { icon: Mail, label: 'Total Messages', value: contacts.length },
            { icon: Calendar, label: 'Today', value: contacts.filter(c => new Date(c.createdAt).toDateString() === new Date().toDateString()).length },
            { icon: User, label: 'Unique Contacts', value: new Set(contacts.map(c => c.email)).size },
          ].map((stat, i) => (
            <div key={i} className="p-6" style={cardStyle}>
              <div className="flex items-center">
                <stat.icon className="w-8 h-8 mr-3" style={{ color: 'var(--col-rose)' }} />
                <div>
                  <p className="text-2xl font-bold" style={{ color: 'var(--col-cream)' }}>{stat.value}</p>
                  <p style={{ color: 'var(--col-blush)', fontSize: '0.8rem' }}>{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div style={cardStyle}>
            <div className="p-6" style={{ borderBottom: '1px solid rgba(251,228,216,0.08)' }}>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" style={{ color: 'var(--col-rose)' }} />
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.3rem', color: 'var(--col-cream)' }}>Contact Messages</h2>
                <span className="px-2 py-0.5 text-xs" style={{ background: 'rgba(133,79,108,0.2)', border: '1px solid rgba(133,79,108,0.3)', color: 'var(--col-blush)', borderRadius: 0 }}>{contacts.length}</span>
              </div>
            </div>
            <div className="p-6">
              {contacts.length === 0 ? (
                <div className="text-center py-8">
                  <Mail className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--col-rose)', opacity: 0.5 }} />
                  <p style={{ color: 'var(--col-blush)' }}>No contact messages yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <motion.div
                      key={contact.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 transition-all duration-300"
                      style={{ border: '1px solid rgba(251,228,216,0.06)', background: 'rgba(43,18,76,0.2)', borderRadius: 0 }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 style={{ color: 'var(--col-cream)', fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: '0.9rem' }}>{contact.name}</h3>
                          <p style={{ color: 'var(--col-blush)', fontSize: '0.8rem' }}>{contact.email}</p>
                        </div>
                        <span className="px-2 py-0.5 text-xs" style={{ border: '1px solid rgba(251,228,216,0.1)', color: 'var(--col-blush)', borderRadius: 0 }}>{formatDate(contact.createdAt)}</span>
                      </div>
                      <div className="mb-3">
                        <h4 className="mb-1" style={{ color: 'var(--col-cream)', fontSize: '0.8rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Subject:</h4>
                        <p style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>{contact.subject}</p>
                      </div>
                      <div>
                        <h4 className="mb-1" style={{ color: 'var(--col-cream)', fontSize: '0.8rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>Message:</h4>
                        <p className="whitespace-pre-wrap" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>{contact.message}</p>
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
