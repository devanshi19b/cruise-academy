'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { contactDetails } from '@/lib/contact';
import TermsModal from './TermsModal';

const footerLinks = {
  programs: [
    { name: "Engineering", href: "/courses/course-2" },
    { name: "Medical", href: "/courses/course-4" },
    { name: "Career Guidance", href: "/courses/course-2" },
    { name: "Study Abroad", href: "/courses/course-3" },
    { name: "Seafarer Training", href: "/courses/course-1" }
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
    <footer className="bg-[#081121] text-white py-16 border-t border-white/[0.05] relative z-10 w-full overflow-hidden">
      {/* Animated Ocean & Cruise Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Ambient Horizon Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[80rem] h-[15rem] bg-[radial-gradient(ellipse_at_bottom,_rgba(6,182,212,0.06)_0%,_rgba(2,132,199,0.02)_50%,_transparent_75%)] rounded-b-full pointer-events-none transform-gpu" />

        {/* Distant Stars / Floating Particles */}
        <div className="absolute inset-0 opacity-40">
          <div className="star star-1"></div>
          <div className="star star-2"></div>
          <div className="star star-3"></div>
          <div className="star star-4"></div>
        </div>

        {/* Distant Cruise Ship Silhouette */}
        <div className="absolute bottom-[60px] left-[15%] sm:left-[25%] md:left-[35%] w-[240px] sm:w-[320px] md:w-[380px] h-auto z-10 opacity-75 animate-ship-float pointer-events-none transform-gpu">
          <svg viewBox="0 0 300 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Ship Hull */}
            <path d="M15 55 L245 55 L262 38 L285 38 L270 60 L250 68 L25 68 Z" fill="#040b18" />
            {/* Superstructure / Decks */}
            <path d="M35 55 L35 40 L75 40 L75 35 L125 35 L125 30 L210 30 L215 40 L240 40 L245 55 Z" fill="#0c162b" />
            <path d="M45 40 L45 32 L115 32 L115 40 Z" fill="#132342" />
            <path d="M125 30 L125 24 L190 24 L190 30 Z" fill="#132342" />
            {/* Funnel/exhaust */}
            <path d="M165 24 L170 14 L180 14 L177 24 Z" fill="#1e293b" />
            <path d="M170 14 L172 10 L178 10 L176 14 Z" fill="#ef4444" />
            {/* Glass Bridge Front */}
            <path d="M220 40 L235 40 L230 46 L220 46 Z" fill="#22d3ee" opacity="0.6" />
            {/* Warm Cabin Lights */}
            <circle cx="55" cy="48" r="1.5" fill="#fef08a" className="animate-window-blink" />
            <circle cx="70" cy="48" r="1.5" fill="#fef08a" />
            <circle cx="85" cy="48" r="1.5" fill="#fef08a" className="animate-window-blink" style={{ animationDelay: '1s' }} />
            <circle cx="100" cy="48" r="1.5" fill="#fef08a" />
            <circle cx="115" cy="48" r="1.5" fill="#fef08a" className="animate-window-blink" style={{ animationDelay: '0.5s' }} />
            <circle cx="135" cy="43" r="1.2" fill="#22d3ee" />
            <circle cx="150" cy="43" r="1.2" fill="#22d3ee" />
            <circle cx="165" cy="43" r="1.2" fill="#22d3ee" />
            <circle cx="180" cy="43" r="1.2" fill="#22d3ee" />
            {/* Masts */}
            <line x1="205" y1="24" x2="205" y2="12" stroke="#040b18" strokeWidth="1.5" />
            <line x1="200" y1="15" x2="210" y2="15" stroke="#040b18" strokeWidth="1" />
          </svg>
        </div>

        {/* Wave Layers */}
        <div className="absolute bottom-0 left-0 w-full h-[100px] pointer-events-none">
          {/* Background Wave - Moves Slowest */}
          <div className="absolute bottom-[-2px] left-0 w-[200%] h-full opacity-35 animate-wave-slowest z-0 transform-gpu">
            <svg className="w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 25 Q 150 15, 300 25 T 600 25 T 900 25 T 1200 25 L 1200 60 L 0 60 Z" fill="#0c1d3a" />
            </svg>
          </div>

          {/* Middle Wave - Moves Medium Speed */}
          <div className="absolute bottom-[-1px] left-0 w-[200%] h-full opacity-60 animate-wave-medium z-10 transform-gpu">
            <svg className="w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 30 Q 150 10, 300 30 T 600 30 T 900 30 T 1200 30 L 1200 60 L 0 60 Z" fill="#09182d" />
            </svg>
          </div>

          {/* Foreground Wave - Moves Fastest & brightest */}
          <div className="absolute bottom-0 left-0 w-[200%] h-full opacity-90 animate-wave-fastest z-20 transform-gpu">
            <svg className="w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 35 Q 150 15, 300 35 T 600 35 T 900 35 T 1200 35 L 1200 60 L 0 60 Z" fill="url(#ocean-gradient)" />
              <defs>
                <linearGradient id="ocean-gradient" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#081121" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#040b18" />
                  <stop offset="100%" stopColor="#020710" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Self-contained CSS Animations */}
        <style>{`
          @keyframes wave-move-slowest {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes wave-move-medium {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes wave-move-fastest {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes ship-sway {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            33% { transform: translateY(2px) rotate(0.5deg); }
            66% { transform: translateY(-1px) rotate(-0.5deg); }
          }
          @keyframes star-glow {
            0%, 100% { opacity: 0.2; transform: translateY(0) scale(1); }
            50% { opacity: 0.8; transform: translateY(-5px) scale(1.2); }
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }

          .animate-wave-slowest {
            animation: wave-move-slowest 35s linear infinite;
          }
          .animate-wave-medium {
            animation: wave-move-medium 25s linear infinite;
          }
          .animate-wave-fastest {
            animation: wave-move-fastest 18s linear infinite;
          }
          .animate-ship-float {
            animation: ship-sway 12s ease-in-out infinite;
          }
          .animate-window-blink {
            animation: blink 4s infinite ease-in-out;
          }

          .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            opacity: 0.3;
          }
          .star-1 { width: 2px; height: 2px; top: 20%; left: 10%; animation: star-glow 6s infinite ease-in-out; }
          .star-2 { width: 1.5px; height: 1.5px; top: 40%; left: 45%; animation: star-glow 8s infinite ease-in-out 1.5s; }
          .star-3 { width: 2.5px; height: 2.5px; top: 15%; left: 75%; animation: star-glow 7s infinite ease-in-out 3s; }
          .star-4 { width: 2px; height: 2px; top: 30%; left: 90%; animation: star-glow 9s infinite ease-in-out 4.5s; }
        `}</style>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4">

          {/* Brand & Mission (Takes up 4 columns on desktop) */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-max">
                <Image
                  src="/images/logo-transparent.png"
                  alt="SGOI Logo"
                  width={48}
                  height={48}
                  style={{ height: '48px', width: 'auto' }}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-white text-lg font-bold tracking-wide leading-tight">Shrivastava Group of Institutes</h3>
                <span className="text-[10px] text-[#64748b] font-medium tracking-[0.05em] mt-1">
                  License No: {contactDetails.licenseNo}
                </span>
              </div>
            </div>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
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
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                <a href={`mailto:${contactDetails.email}`} className="hover:text-cyan-400 transition-colors truncate">
                  {contactDetails.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <a href={`tel:${contactDetails.phoneHref}`} className="hover:text-cyan-400 transition-colors">
                  {contactDetails.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <svg width="14" height="14" className="mt-[2px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
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
