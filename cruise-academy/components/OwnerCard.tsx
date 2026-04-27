'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { contactDetails } from '@/lib/contact';

export default function OwnerCard() {
  return (
    <section className="py-20 bg-[#050b14] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0a0f1c] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Image Section */}
            <div className="md:w-1/2 relative min-h-[400px] md:min-h-[500px]">
              <Image
                src="/images/owner.png"
                alt={contactDetails.founderName}
                fill
                className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0f1c]/20"></div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4">The Visionary Behind</h4>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  {contactDetails.founderName}
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                  "Education is not just about learning facts, but training the mind to think and the heart to lead. Our mission is to bridge the gap between dreams and reality for every student."
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-white font-bold mb-1">Founder & Managing Director</h5>
                      <p className="text-slate-400 text-sm">Leading Shrivastava Group since 2014 with a focus on holistic student development.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-600/20 flex items-center justify-center shrink-0 border border-cyan-500/30">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-white font-bold mb-1">Academic Excellence</h5>
                      <p className="text-slate-400 text-sm">Empowering thousands of students in Satara and beyond to achieve their professional goals.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
