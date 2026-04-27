'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  
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
    </section>
  );
}
