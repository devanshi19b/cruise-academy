'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const timelineData = [
  {
    year: "2014",
    title: "The Foundation",
    description: "Rohit Shrivastava begins mentoring students for medical and engineering entrance exams, planting the seeds of a future academic empire.",
    yearColor: "text-white/[0.05]",
    dotColor: "bg-blue-500 ring-[#0a0f1c]"
  },
  {
    year: "2016",
    title: "Scaling Success",
    description: "Expanding the team and infrastructure to support more students, transitioning from a localized tuition center to a recognized educational hub.",
    yearColor: "text-cyan-500/[0.05]",
    dotColor: "bg-cyan-400 ring-[#0a0f1c]"
  },
  {
    year: "2018",
    title: "Beyond the Classroom",
    description: "Launching dedicated career guidance and counseling services to provide a holistic framework for professional development.",
    yearColor: "text-white/[0.05]",
    dotColor: "bg-blue-500 ring-[#0a0f1c]"
  },
  {
    year: "2022",
    title: "Global Horizons",
    description: "Expanding services to support international students and launching specialized seafarer training programs for maritime careers.",
    yearColor: "text-cyan-500/[0.05]",
    dotColor: "bg-cyan-400 ring-[#0a0f1c]"
  }
];

export default function About() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Prevent scrolling on document body when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0a0f1c]">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Our Story</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">The journey of building a legacy of excellence in education and career guidance.</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-slate-800 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between md:h-64">

                  {/* Left Section */}
                  <div className={`md:w-1/2 w-full flex ${isEven ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'} justify-center mb-8 md:mb-0 relative order-2 md:order-1`}>
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`text-6xl md:text-8xl font-black ${item.yearColor} tracking-tighter`}
                      >
                        {item.year}
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-[#121c2d] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-white/5 max-w-md w-full relative z-10"
                      >
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base">{item.description}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Center Dot for Desktop */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex top-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
                      viewport={{ once: true }}
                      className={`w-4 h-4 rounded-full ${item.dotColor} ring-4 shadow-sm`}
                    />
                  </div>

                  {/* Right Section */}
                  <div className={`md:w-1/2 w-full flex ${isEven ? 'md:justify-start md:pl-16' : 'md:justify-end md:pr-16'} justify-center order-1 md:order-2 mb-4 md:mb-0`}>
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-[#121c2d] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-white/5 max-w-md w-full relative z-10"
                      >
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base">{item.description}</p>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`text-6xl md:text-8xl font-black ${item.yearColor} tracking-tighter`}
                      >
                        {item.year}
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Placement Program Callout */}
        <motion.div
          className="mt-24 max-w-5xl mx-auto bg-[#121c2d] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden backdrop-blur-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex-1 text-center md:text-left relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full inline-block mb-4">
              Placement Opportunities
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Your Journey to Global Success
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Learn locally, intern globally, and succeed internationally. Shrivastava Group of Institutes offers international internship and placement programs in major countries across the globe, preparing you for successful careers in hotel, hospitality, cruise lines, and resort operations.
            </p>
          </div>

          <div 
            onClick={() => setIsLightboxOpen(true)}
            className="w-full md:w-[350px] aspect-[3/4] relative cursor-pointer rounded-2xl overflow-hidden shadow-2xl border border-white/10 group flex-shrink-0 z-10"
          >
            <Image
              src="/images/global-success-poster.png"
              alt="Global Placement and Internship Opportunities Poster"
              fill
              sizes="(max-width: 768px) 100vw, 350px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8" data-lenis-prevent="true">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md cursor-pointer"
            />
            {/* Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-3xl max-h-[85vh] aspect-[3/4] w-full z-[160] flex flex-col items-center justify-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-[-50px] right-0 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer"
                aria-label="Close lightbox"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Poster Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                <Image
                  src="/images/global-success-poster.png"
                  alt="Global Success - Placement and Internship Opportunities Poster"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
