'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { contactDetails } from '@/lib/contact';

export default function OwnerCard() {
  return (
    <section className="py-20 bg-[#050b14] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.1)_0%,_transparent_70%)] rounded-full -translate-x-1/2 -translate-y-1/2 transform-gpu"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,_rgba(8,145,178,0.1)_0%,_transparent_70%)] rounded-full translate-x-1/2 translate-y-1/2 transform-gpu"></div>

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
            <div className="md:w-[40%] relative min-h-[400px] md:min-h-[550px]">
              <Image
                src="/images/owner.png"
                alt={contactDetails.founderName}
                fill
                className="object-cover object-center transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0f1c]/40 pointer-events-none"></div>
            </div>

            {/* Content Section */}
            <div className="md:w-[60%] p-8 md:p-12 flex flex-col justify-center bg-[#0a0f1c] relative">
              {/* Logo in top right corner */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-30">
                <Image
                  src="/images/logo-transparent.png"
                  alt="SGOI Logo"
                  width={100}
                  height={100}
                  style={{ width: 'auto', height: 'auto' }}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">The Visionary Behind</h4>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  {contactDetails.founderName}
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-10 italic max-w-2xl">
                  "Education is not just about learning facts, but training the mind to think and the heart to lead. Our mission is to bridge the gap between dreams and reality for every student."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Left Column: Roles */}
                  <div className="space-y-8">
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:bg-blue-600/20 transition-colors">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-white font-bold mb-1">Founder & Managing Director</h5>
                        <p className="text-slate-400 text-xs leading-relaxed">Leading Shrivastava Group since 2014 with a focus on holistic student development.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-cyan-600/10 flex items-center justify-center shrink-0 border border-cyan-500/20 group-hover:bg-cyan-600/20 transition-colors">
                        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-white font-bold mb-1">Academic Excellence</h5>
                        <p className="text-slate-400 text-xs leading-relaxed">Empowering thousands of students in Satara and beyond to achieve their professional goals.</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Licensing (Minimalist) */}
                  <div className="md:pl-10 md:border-l border-white/5 flex flex-col">
                    <h5 className="text-white/60 text-xs font-bold tracking-[0.3em] uppercase mb-10">Licensing & Accreditations</h5>

                    <div className="space-y-8">
                      <div className="group">
                        <span className="block text-[9px] uppercase tracking-[0.2em] text-white/30 mb-2 group-hover:text-blue-500/40 transition-colors">Registration Number</span>
                        <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors tracking-widest">{contactDetails.registrationNo}</span>
                      </div>
                      <div className="group">
                        <span className="block text-[9px] uppercase tracking-[0.2em] text-white/30 mb-2 group-hover:text-blue-500/40 transition-colors">License Number</span>
                        <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors tracking-widest">{contactDetails.licenseNo}</span>
                      </div>
                      <div className="group">
                        <span className="block text-[9px] uppercase tracking-[0.2em] text-white/20 mb-2 group-hover:text-blue-500/40 transition-colors">Aadhar Udyog</span>
                        <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors tracking-widest">{contactDetails.aadharUdyog}</span>
                      </div>
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
