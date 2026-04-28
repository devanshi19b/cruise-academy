'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { contactDetails } from '@/lib/contact';
import TermsModal from './TermsModal';

const footerLinks = {
  programs: [
    { name: "Engineering", href: "/programs/engineering" },
    { name: "Medical", href: "/programs/medical" },
    { name: "Career Guidance", href: "/programs/career-guidance" },
    { name: "Study Abroad", href: "/programs/study-abroad" },
    { name: "Seafarer Training", href: "/programs/seafarer" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" }
  ],
  support: [
    { name: "Terms and Conditions", href: "#", isModal: true },
    { name: "FAQ", href: "/faq", isModal: false }
  ]
};

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer className="bg-[#081121] text-white py-16 border-t border-white/[0.05] relative z-10 w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4">
          
          {/* Brand & Mission (Takes up 4 columns on desktop) */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <div className="bg-white p-3 rounded-2xl w-max shadow-lg shadow-cyan-500/10">
                <Image 
                  src="/images/footer-logo-new.jpg" 
                  alt="SGOI Logo" 
                  width={120} 
                  height={120} 
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
            <h3 className="text-cyan-400 text-sm font-bold tracking-wide mb-4">Shrivastava Group of Institute</h3>
            <p className="text-[#64748b] text-xs leading-relaxed max-w-[280px] mb-6">
              A premier coaching hub in Satara specializing in Class X, XII, NEET, and IIT-JEE preparation. We focus on individual attention through small batch sizes to ensure every student excels.
            </p>
            <div className="space-y-2 mb-8">
              <div className="flex items-center gap-2 text-[10px] text-cyan-500/80 font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                NEET & IIT-JEE Coaching
              </div>
              <div className="flex items-center gap-2 text-[10px] text-cyan-500/80 font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                Personalized Attention
              </div>
              <div className="flex items-center gap-2 text-[10px] text-cyan-500/80 font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                Expert Career Guidance
              </div>
            </div>
            <div className="flex space-x-5 text-[#64748b]">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              </a>
            </div>
          </motion.div>
          
          {/* spacer for grid */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Navigation (Takes up 2 columns) */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[10px] font-bold mb-6 text-white uppercase tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#64748b] hover:text-white text-xs transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Resources (Takes up 2 columns) */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[10px] font-bold mb-6 text-white uppercase tracking-[0.2em]">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  {link.isModal ? (
                    <button onClick={(e) => { e.preventDefault(); setIsTermsOpen(true); }} className="text-[#64748b] hover:text-white text-xs transition-colors">
                      {link.name}
                    </button>
                  ) : (
                    <a href={link.href} className="text-[#64748b] hover:text-white text-xs transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact (Takes up 2 columns) */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[10px] font-bold mb-6 text-white uppercase tracking-[0.2em]">Contact</h4>
            <div className="space-y-4 text-xs text-[#64748b]">
              <div className="flex items-center space-x-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href={`mailto:${contactDetails.email}`} className="hover:text-cyan-400 transition-colors truncate">
                  {contactDetails.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href={`tel:${contactDetails.phoneHref}`} className="hover:text-cyan-400 transition-colors">
                  {contactDetails.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <svg width="14" height="14" className="mt-[2px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="leading-tight">
                  {contactDetails.address}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <motion.div 
          className="mt-20 text-center text-[10px] text-[#64748b]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Shrivastava Group of Institute. Navigating the Future of Education.</p>
        </motion.div>
      </div>

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </footer>
  );
}
