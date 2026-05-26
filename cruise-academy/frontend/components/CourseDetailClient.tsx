'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Course, courses } from '@/lib/courses-data';
import AdmissionFormModal from './AdmissionFormModal';
import Footer from './Footer';

interface CourseDetailClientProps {
  course: Course;
}

// Icon Helper Component (consistent with CruiseProgramModal but polished)
const ProgramIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'eligibility':
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      );
    case 'graduation':
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'prep':
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v3m0 12v3m-9-9h3m12 0h3m-2.12-6.88l-2.12 2.12m-5.66 5.66l-2.12 2.12m0-9.9l2.12 2.12m5.66 5.66l2.12 2.12" />
        </svg>
      );
    case 'personality':
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case 'interviews':
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case 'hospitality':
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'documentation':
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case 'placement':
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'skills':
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'growth':
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case 'german':
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 0c-.27 1.21-1.39 3.008-3.048 4.5m0 0a18.022 18.022 0 005.12 4.5M9 13.5l-3.048 4.5" />
        </svg>
      );
    case 'care':
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case 'calendar':
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'visa':
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
        </svg>
      );
  }
};

const CheckIcon = () => (
  <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
  </svg>
);

export default function CourseDetailClient({ course }: CourseDetailClientProps) {
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);

  // Filter out the current course to list related ones
  const relatedCourses = courses.filter((c) => c.id !== course.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white pt-24">
      {/* Background Decorative Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.6)_0%,_transparent_70%)] rounded-full mix-blend-screen transform-gpu"></div>
        <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.6)_0%,_transparent_70%)] rounded-full mix-blend-screen transform-gpu"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 pb-20">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-white/50 mb-8 uppercase tracking-widest">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-cyan-400 transition-colors">Courses</Link>
          <span>/</span>
          <span className="text-cyan-400 truncate max-w-[200px] md:max-w-none">{course.title}</span>
        </nav>

        {/* Hero Section Banner */}
        <motion.div 
          className="bg-white/[0.02] border border-white/10 rounded-[32px] p-6 sm:p-10 md:p-12 mb-12 shadow-2xl relative overflow-hidden bg-gradient-to-r from-[#0a1226] via-[#090f1d] to-[#0a1226]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="max-w-3xl space-y-4">
            <span className="inline-block bg-blue-600/20 text-blue-300 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-blue-500/30 shadow-sm">
              {course.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              {course.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-medium italic border-l-4 border-cyan-500 pl-4 py-1">
              &ldquo;{course.tagline}&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (Main details) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Key Topics / Syllabus Modules */}
            <section className="space-y-6">
              <div>
                <h3 className="text-xs font-black text-cyan-400 tracking-[0.25em] uppercase mb-1">Syllabus Highlights</h3>
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Key Training Modules & Topics</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.features.map((feat) => (
                  <div
                    key={feat.title}
                    className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 flex gap-4 hover:border-white/10 hover:bg-white/[0.04] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <ProgramIcon name={feat.icon} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white tracking-tight">{feat.title}</h4>
                      <p className="text-xs text-slate-400 leading-normal">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Benefits & Core Advantages */}
            <section className="space-y-6">
              <div>
                <h3 className="text-xs font-black text-cyan-400 tracking-[0.25em] uppercase mb-1">Outcomes</h3>
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Core Course Benefits</h2>
              </div>

              <div className="bg-gradient-to-b from-blue-950/20 to-slate-950/20 border border-cyan-500/15 rounded-3xl p-6 sm:p-8 space-y-4">
                {course.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center shrink-0">
                      <CheckIcon />
                    </div>
                    <span className="text-sm text-slate-300 font-medium leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Instructor Details */}
            <section className="space-y-6">
              <div>
                <h3 className="text-xs font-black text-cyan-400 tracking-[0.25em] uppercase mb-1">Faculty & Mentors</h3>
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Meet the Instructor</h2>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                  <Image
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3 text-center sm:text-left">
                  <div>
                    <h4 className="text-lg font-black text-white">{course.instructor.name}</h4>
                    <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider">{course.instructor.role}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                    {course.instructor.bio}
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column (Sticky Enrollment Card) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="bg-gradient-to-b from-[#0a1122] to-[#060b14] border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-xs font-black text-cyan-400 tracking-widest uppercase mb-4">Enrollment details</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <span className="block text-[10px] uppercase text-white/30 tracking-wider">Duration</span>
                  <span className="text-lg font-bold text-white tracking-wide">{course.duration}</span>
                </div>
                
                {course.stats.map((stat, i) => (
                  <div key={i}>
                    <span className="block text-[10px] uppercase text-white/30 tracking-wider">{stat.label}</span>
                    <span className="text-lg font-bold text-white tracking-wide">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/5 pt-6 space-y-3">
                <button
                  onClick={() => setIsAdmissionOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-black tracking-wider uppercase py-3.5 rounded-xl border border-blue-400/50 shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
                >
                  Apply / Enroll Now
                </button>
                <Link
                  href="/contact"
                  className="block w-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold py-3.5 rounded-xl border border-white/5 transition-colors text-center"
                >
                  Contact Advisor
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Courses Section */}
        <section className="mt-20 border-t border-white/5 pt-16 space-y-8">
          <div>
            <h3 className="text-xs font-black text-cyan-400 tracking-[0.25em] uppercase mb-1">Next Steps</h3>
            <h2 className="text-xl md:text-3xl font-black text-white tracking-tight">Related Career Pathways</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCourses.map((rc) => (
              <div
                key={rc.id}
                className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-white/15 hover:bg-white/[0.04] transition-all group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-2">
                    <span className="inline-block bg-blue-600/10 text-blue-300 text-[8px] font-black uppercase px-2 py-0.5 rounded border border-blue-500/20">
                      {rc.badge}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{rc.duration}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                    {rc.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {rc.tagline}
                  </p>
                </div>

                <Link
                  href={`/courses/${rc.id}`}
                  className="text-cyan-400 hover:text-cyan-300 text-xs font-black tracking-wider uppercase flex items-center gap-1.5 mt-6 transition-colors group/link"
                >
                  View Details
                  <svg className="w-3.5 h-3.5 transform transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />

      <AdmissionFormModal 
        isOpen={isAdmissionOpen} 
        onClose={() => setIsAdmissionOpen(false)} 
      />
    </div>
  );
}
