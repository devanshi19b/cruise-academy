'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { courses } from '@/lib/courses-data';
import Footer from '@/components/Footer';

// Icons based on categories (consistent with existing theme)
const ProgramIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'seafarer':
      return (
        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      );
    case 'engineering':
      return (
        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      );
    case 'medical':
      return (
        <svg className="w-6 h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      );
    case 'study_abroad':
      return (
        <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      );
  }
};

const iconColors = {
  seafarer: "bg-blue-900/40 border-blue-700/50",
  engineering: "bg-blue-900/40 border-blue-700/50",
  medical: "bg-red-900/40 border-red-700/50",
  study_abroad: "bg-[#7c3aed]/30 border-[#8b5cf6]/50",
};

export default function ExploreProgramsPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white pt-24">
      {/* Glow Refraction */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.6)_0%,_transparent_70%)] rounded-full mix-blend-screen transform-gpu"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.6)_0%,_transparent_70%)] rounded-full mix-blend-screen transform-gpu"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-white/50 mb-8 uppercase tracking-widest">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-cyan-400">Courses</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="inline-block bg-blue-600/20 text-cyan-400 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-blue-500/30 shadow-sm">
            Professional Education Pathways
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
            Explore Programs
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Relocate internationally and accelerate your professional career trajectory. We focus on individual attention through small batch sizes to ensure every student excels in global maritime and nursing placements.
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => {
            const colorClass = iconColors[course.category as keyof typeof iconColors] || "bg-cyan-900/40 border-cyan-700/50";
            return (
              <motion.div
                key={course.id}
                className="bg-white/[0.02] backdrop-blur-xl rounded-[28px] border border-white/[0.08] p-6 sm:p-8 hover:border-white/20 transition-all hover:-translate-y-1 hover:bg-white/[0.04] shadow-2xl group flex flex-col justify-between relative overflow-hidden"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Glowing Subtle Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors"></div>

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-lg group-hover:scale-110 transition-transform ${colorClass}`}>
                      <ProgramIcon category={course.category} />
                    </div>
                    <span className="bg-white/5 text-slate-300 text-[9px] font-black uppercase px-2.5 py-1 rounded-full border border-white/5 tracking-wider">
                      {course.duration}
                    </span>
                  </div>

                  <span className="text-[10px] font-black text-cyan-400 tracking-[0.2em] uppercase block mb-2">
                    {course.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm mb-6">
                    {course.tagline}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-6 flex justify-between items-center mt-6">
                  <div className="flex gap-2">
                    {course.stats.slice(0, 1).map((stat, i) => (
                      <div key={i} className="text-left">
                        <span className="block text-[8px] uppercase tracking-wider text-slate-500 font-bold leading-normal">{stat.label}</span>
                        <span className="text-sm font-black text-white">{stat.value}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/courses/${course.id}`}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black tracking-wider uppercase px-5 py-2.5 rounded-xl border border-blue-400/50 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-blue-600/10 transition-all cursor-pointer"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
