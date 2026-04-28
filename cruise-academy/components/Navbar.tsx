'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { contactDetails } from '@/lib/contact';
import AdmissionFormModal from './AdmissionFormModal';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 py-4 px-4 md:px-8 bg-[#0a0f1c]/80 backdrop-blur-md border-b border-white/5"
      >
        <nav className="max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <Image 
                src="/images/logo-transparent.png" 
                alt="Institute Logo" 
                width={40} 
                height={40} 
                className="h-10 w-auto object-contain" 
              />
              <span className="text-lg md:text-xl font-bold tracking-tight text-white">
                {contactDetails.organizationName}
              </span>
            </Link>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-6 text-sm font-semibold text-white/80">
                <Link href="/" className="hover:text-blue-400 transition-colors duration-300">
                  Home
                </Link>
                <Link href="/about" className="hover:text-blue-400 transition-colors duration-300">
                  About Us
                </Link>
                <Link href="/contact" className="hover:text-blue-400 transition-colors duration-300">
                  Contact Us
                </Link>
              </div>

              <div className="flex-shrink-0">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 text-sm border border-blue-400/50"
                >
                  Apply Now
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold text-xs border border-blue-400/50"
              >
                Apply
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-1"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div 
            initial={false}
            animate={isMobileMenuOpen ? { height: 'auto', opacity: 1, marginTop: 16 } : { height: 0, opacity: 0, marginTop: 0 }}
            className="md:hidden overflow-hidden bg-[#0a0f1c] rounded-2xl border border-white/5"
          >
            <div className="flex flex-col gap-4 p-4 text-sm font-semibold text-white/80">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-400 py-2 transition-colors">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-400 py-2 transition-colors">
                About Us
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-400 py-2 transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </nav>
      </motion.header>

      <AdmissionFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
