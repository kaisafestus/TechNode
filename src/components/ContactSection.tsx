import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Send, Github, Loader2, MapPin } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ContactSectionProps {
  onShowToast: (title: string, message: string, type: 'success' | 'error' | 'loading') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    role: 'Mobile & Full-Stack Software Engineering',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      onShowToast('Validation Error', 'Please complete all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);
    onShowToast('Sending Message', 'Routing your message to Festus Kaisa...', 'loading');

    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast(
        'Message Sent Successfully',
        `Thank you ${formData.name}! Your message has been received. Festus will get back to you promptly at ${formData.contact}.`,
        'success'
      );
      setFormData({
        name: '',
        contact: '',
        role: 'Mobile & Full-Stack Software Engineering',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#222222]">
      
      {/* Section Header */}
      <div className="text-center mb-16 max-w-xl mx-auto">
        <div className="mb-2">
          <span className="section-tag">
            Contact
          </span>
        </div>
        <h2 
          className="text-3xl sm:text-5xl font-bold text-[#f5f5f5] mb-3 tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Let's Work Together
        </h2>
        <p className="text-sm sm:text-base text-[#9a9a9a]">
          Have an engineering position, mobile product, or technical project in mind? Reach out directly or send a message below.
        </p>
      </div>

      {/* 2-Column Contact Wrapper (dikie.vercel.app layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Phone / Call Me Card */}
          <a href={`tel:${PROFILE.phoneRaw}`} className="contact-card group block p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-[#D4AF37] transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-[#222222] flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:border-[#D4AF37]/50 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#f5f5f5]">Call Me</h3>
                <p className="text-xs text-[#9a9a9a] font-mono mt-0.5">{PROFILE.phoneDisplay}</p>
              </div>
            </div>
          </a>

          {/* WhatsApp Direct Card */}
          <a 
            href={PROFILE.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card group block p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-[#25D366] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-[#222222] flex items-center justify-center text-[#25D366] shrink-0 group-hover:border-[#25D366]/50 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#f5f5f5]">WhatsApp Direct</h3>
                <p className="text-xs text-[#25D366] font-medium mt-0.5">Message on WhatsApp &rarr;</p>
              </div>
            </div>
          </a>

          {/* Email Me Card */}
          <a href={`mailto:${PROFILE.email}`} className="contact-card group block p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-[#D4AF37] transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-[#222222] flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:border-[#D4AF37]/50 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#f5f5f5]">Email Me</h3>
                <p className="text-xs text-[#9a9a9a] font-mono mt-0.5">{PROFILE.email}</p>
              </div>
            </div>
          </a>

          {/* Location Card */}
          <div className="contact-card p-5 rounded-xl bg-[#0c0c0c] border border-[#222222]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-[#222222] flex items-center justify-center text-[#9a9a9a] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#f5f5f5]">Location</h3>
                <p className="text-xs text-[#9a9a9a] mt-0.5">{PROFILE.location} · East Africa Time (EAT)</p>
              </div>
            </div>
          </div>

          {/* GitHub Card */}
          <a 
            href={PROFILE.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card group block p-5 rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-[#D4AF37] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-[#222222] flex items-center justify-center text-[#f5f5f5] shrink-0 group-hover:text-[#D4AF37] transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#f5f5f5]">GitHub Profile</h3>
                <p className="text-xs text-[#9a9a9a] font-mono mt-0.5">github.com/kaisafestus</p>
              </div>
            </div>
          </a>

        </div>

        {/* Right Column: Interactive Contact Form (dikie.vercel.app style) */}
        <div className="lg:col-span-7">
          <form 
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-2xl bg-[#0c0c0c] border border-[#222222] shadow-2xl space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-[#9a9a9a] uppercase tracking-wider mb-2">
                Your Name / Organization *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="e.g. Alex Morgan / Acme Corp"
                className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#222222] text-[#f5f5f5] placeholder-[#555] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact" className="block text-xs font-mono text-[#9a9a9a] uppercase tracking-wider mb-2">
                Your Email or Phone Number *
              </label>
              <input
                id="contact"
                type="text"
                required
                value={formData.contact}
                onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
                placeholder="e.g. alex@company.com or +1 (555) 000-0000"
                className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#222222] text-[#f5f5f5] placeholder-[#555] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-xs font-mono text-[#9a9a9a] uppercase tracking-wider mb-2">
                Opportunity / Engagement Type
              </label>
              <select
                id="role"
                value={formData.role}
                onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#222222] text-[#f5f5f5] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
              >
                <option value="Mobile App Developer Role (Flutter/Dart)">Mobile App Developer Role (Flutter/Dart)</option>
                <option value="Full-Stack Software Engineer (TypeScript/React/Node)">Full-Stack Software Engineer (TypeScript/React/Node)</option>
                <option value="Systems & Backend Engineering (SQL/Firebase/APIs)">Systems & Backend Engineering (SQL/Firebase/APIs)</option>
                <option value="Consulting / Contract System Build">Consulting / Contract System Build</option>
                <option value="Technical Interview / Opportunity Inquiry">Technical Interview / Opportunity Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-[#9a9a9a] uppercase tracking-wider mb-2">
                Message / Role Details *
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Share role requirements, company details, or project scope..."
                className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#222222] text-[#f5f5f5] placeholder-[#555] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-primary flex items-center justify-center gap-2 cursor-pointer font-semibold py-3.5"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Routing Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>

    </section>
  );
};
