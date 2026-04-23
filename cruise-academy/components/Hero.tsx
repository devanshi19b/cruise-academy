'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { contactDetails } from '@/lib/contact';
import { useRef, useState } from 'react';
import AdmissionFormModal from './AdmissionFormModal';

export default function Hero() {
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoZoomed, setIsLogoZoomed] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} className="relative h-[120vh] flex items-center justify-center text-white overflow-hidden bg-black pb-[20vh]">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 h-[120vh]">
        <Image
          src="/real-ship.png"
          alt="3D cruise ship at sea background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/70 via-transparent to-[#0a0f1c]/20"></div>
      </motion.div>

      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 bg-[#0a0f1c]/30 backdrop-blur-xl border-b border-white/10 shadow-lg transition-all duration-300">
        <nav className="w-full">
          <div className="grid grid-cols-3 items-center">
            <div className="flex items-center gap-5 text-sm md:text-base font-medium text-white drop-shadow-md">
              <Link href="/" className="hover:text-blue-200 transition-colors duration-300">
                Home
              </Link>
              <a href="#about" className="hover:text-blue-200 transition-colors duration-300">
                About Us
              </a>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center gap-2">
                <Image
                  src={contactDetails.logoPath}
                  alt="Shrivastava Group logo"
                  width={34}
                  height={34}
                  className="h-8 w-8 rounded-sm cursor-pointer hover:scale-110 transition-transform duration-300"
                  onClick={() => setIsLogoZoomed(true)}
                />
                <span className="text-sm md:text-xl font-sans font-semibold tracking-[0.04em] text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                  {contactDetails.organizationName}
                </span>
              </div>
            </div>

            <div className="flex justify-end pr-2 md:pr-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg font-semibold shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 text-sm md:text-base border border-blue-400"
              >
                Apply Now
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl pt-20">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Shaping Futures Beyond the Horizon
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-blue-50 drop-shadow-md font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Education, global opportunities, and maritime careers
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg">
            Get Started
          </button>
          <button className="border border-white/50 bg-white/10 backdrop-blur-md hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Explore Programs
          </button>
        </motion.div>
      </div>

      <AdmissionFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Logo Zoom Modal */}
      {isLogoZoomed && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsLogoZoomed(false)}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-3xl max-h-[90vh] bg-white rounded-2xl p-4 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsLogoZoomed(false)}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors z-10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="flex items-center justify-center h-full overflow-hidden">
              <Image
                src={contactDetails.logoPath}
                alt="Shrivastava Group logo zoomed"
                width={800}
                height={800}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
