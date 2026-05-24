'use client';

import About from '@/components/About';
import Footer from '@/components/Footer';
import OwnerCard from '@/components/OwnerCard';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050b14]">
      {/* Spacer for fixed Navbar */}
      <div className="h-20"></div>
      
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Legacy of <span className="text-blue-500">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
              Founded in 2014, Shrivastava Group of Institute has been at the forefront of educational transformation, guiding thousands towards their dreams.
            </p>
          </motion.div>
        </div>
      </div>

      <OwnerCard />
      <About />
      <Footer />
    </div>
  );
}