'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 bg-[#0a0f1c] text-white border-t border-white/[0.02]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#121c2d] p-12 md:p-16 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight relative z-10 drop-shadow-sm">Start Your Journey Today</h2>
          <p className="text-xl text-slate-400 mb-10 relative z-10 max-w-2xl mx-auto">
            Take the first step towards your dream career. Contact us for personalized guidance and support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/50 px-8 py-3 rounded-full font-bold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}