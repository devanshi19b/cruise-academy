'use client';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { contactDetails } from '@/lib/contact';
import { useRef, useState } from 'react';
import AdmissionFormModal from './AdmissionFormModal';

export default function Hero() {
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-black">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 h-full">
        <Image
          src="/hero-bg.png"
          alt="Majestic cruise ship on the ocean"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
      </motion.div>

      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 py-4 px-4 md:px-8 bg-[#0a0f1c]"
      >
        <nav className="w-full">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-lg md:text-xl font-bold tracking-tight text-white">
                {contactDetails.organizationName}
              </span>
            </div>

            {/* Navigation Links (Right) */}
            <div className="flex items-center gap-6 md:gap-10">
              <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-white/80">
                <Link href="/" className="hover:text-blue-400 transition-colors duration-300">
                  Home
                </Link>
                <a href="#about" className="hover:text-blue-400 transition-colors duration-300">
                  About Us
                </a>
                <Link href="/contact" className="hover:text-blue-400 transition-colors duration-300">
                  Contact Us
                </Link>
              </div>

              <div className="flex-shrink-0">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 text-sm md:text-base border border-blue-400/50"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </nav>
      </motion.header>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl pt-20">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Shaping Futures Beyond the Horizon
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-white font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
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
          <button className="border border-white/50 bg-white/10 backdrop-blur-md hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Explore Programs
          </button>
        </motion.div>
      </div>

      <AdmissionFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />


    </section>
  );
}
