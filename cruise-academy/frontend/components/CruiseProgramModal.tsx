'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AdmissionFormModal from './AdmissionFormModal';

interface CruiseProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyClick: () => void;
  categoryFilter?: string;
}

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
  </svg>
);

// Icon Helper Component to render SVGs cleanly
const ProgramIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'eligibility': // Graduation cap
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      );
    case 'graduation': // Book open
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'prep': // Ship steering / Compass / Cruise prep
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v3m0 12v3m-9-9h3m12 0h3m-2.12-6.88l-2.12 2.12m-5.66 5.66l-2.12 2.12m0-9.9l2.12 2.12m5.66 5.66l2.12 2.12" />
        </svg>
      );
    case 'personality': // Sparkles
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case 'interviews': // Speech bubbles
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case 'hospitality': // Food & beverage / Coffee
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'documentation': // File text
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case 'placement': // Briefcase / Job check
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'skills': // CPU / Lightning / Skills
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'growth': // Chart trending up
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case 'german': // German language flag / Translation
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 0c-.27 1.21-1.39 3.008-3.048 4.5m0 0a18.022 18.022 0 005.12 4.5M9 13.5l-3.048 4.5" />
        </svg>
      );
    case 'care': // Heart / Healthcare
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case 'calendar': // Duration/Time
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'visa': // Passport / Airplane
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
        </svg>
      );
  }
};

const programsData = [
  {
    title: "Cruise Career Development Programme",
    badge: "Flagship Academy Programme",
    selectorIcon: "eligibility",
    selectorTarget: "10th & 12th Pass",
    categories: ["seafarer"],
    tagline: "Designed for 10th & 12th pass students looking to combine graduation with direct entry into the cruise industry.",
    highlightsTitle: "Programme Highlights",
    highlightsSub: "Graduation & Marine Prep Syllabus",
    features: [
      { title: "Target Eligibility", desc: "Specially designed for 10th & 12th pass students.", icon: "eligibility" },
      { title: "Graduation Guidance", desc: "Complete guidance for graduation completion.", icon: "graduation" },
      { title: "Cruise Industry Prep", desc: "Professional preparation for the cruise industry.", icon: "prep" },
      { title: "Communication Skills", desc: "Personality development and communication training.", icon: "personality" },
      { title: "Mock Interviews", desc: "Interview preparation with mock interview sessions.", icon: "interviews" },
      { title: "Cruise Hospitality", desc: "Cruise hospitality and job-oriented training.", icon: "hospitality" },
      { title: "Career Documentation", desc: "Documentation and career guidance support.", icon: "documentation" },
      { title: "Placement Assistance", desc: "Placement assistance after programme completion.", icon: "placement" },
      { title: "Skill Development", desc: "Industry-ready skill development.", icon: "skills" },
      { title: "Sector Growth", desc: "Career growth opportunities in the cruise sector.", icon: "growth" }
    ],
    benefits: [
      "Graduation and career preparation together",
      "Professional interview support",
      "International cruise career opportunities",
      "Expert mentorship and guidance",
      "Placement-focused training model"
    ],
    stats: [
      { value: "100%", label: "Placement Support" },
      { value: "Grad + Job", label: "Dual Preparation" }
    ]
  },
  {
    title: "Cruise Placement Preparation Programme",
    badge: "Fast-Track Career Launcher",
    selectorIcon: "prep",
    selectorTarget: "Graduates",
    categories: ["engineering", "career_guidance"],
    tagline: "Tailored specially for graduate pass-out candidates seeking rapid placement inside top-tier international cruise liners.",
    highlightsTitle: "Career Accelerator",
    highlightsSub: "Placement Preparation Syllabus",
    features: [
      { title: "Target Eligibility", desc: "Designed specially for graduate pass-out candidates.", icon: "eligibility" },
      { title: "Cruise Job Training", desc: "Professional training for cruise industry careers.", icon: "prep" },
      { title: "Communication Prep", desc: "Personality development and communication enhancement.", icon: "personality" },
      { title: "Practical Mock Exams", desc: "Interview preparation with practical mock sessions.", icon: "interviews" },
      { title: "Hospitality & Grooming", desc: "Grooming and hospitality training.", icon: "hospitality" },
      { title: "Skill Development", desc: "Industry-focused skill development programme.", icon: "skills" },
      { title: "Career Counseling", desc: "Career counseling and professional guidance.", icon: "graduation" },
      { title: "Documentation Support", desc: "Resume building and documentation support.", icon: "documentation" },
      { title: "Placement Assistance", desc: "Placement assistance for cruise job opportunities.", icon: "placement" },
      { title: "International Standards", desc: "Preparation according to international cruise industry standards.", icon: "growth" }
    ],
    benefits: [
      "Fast-track cruise career preparation",
      "Professional interview coaching",
      "Improved confidence and communication skills",
      "International placement opportunities",
      "Job-oriented practical training approach"
    ],
    stats: [
      { value: "Fast-Track", label: "Duration Model" },
      { value: "Global", label: "Industry Standards" }
    ]
  },
  {
    title: "Cruise Career Upgrade Programme",
    badge: "Professional Career Upgrade",
    selectorIcon: "growth",
    selectorTarget: "Hospitality Pros",
    categories: ["study_abroad"],
    tagline: "Specially structured for professionals currently working in hospitality/service jobs looking to upgrade to higher international salaries.",
    highlightsTitle: "Professional Transition",
    highlightsSub: "Career Shift Syllabus",
    features: [
      { title: "Ideal Profile", desc: "For professionals already working in hospitality or service industry.", icon: "eligibility" },
      { title: "Salary Upgrade", desc: "Ideal for candidates looking for better salary opportunities.", icon: "growth" },
      { title: "Advanced Training", desc: "Advanced cruise industry training and skill enhancement.", icon: "prep" },
      { title: "Professional Grooming", desc: "Professional grooming and personality development.", icon: "personality" },
      { title: "Expert Interview Prep", desc: "Interview preparation with expert guidance.", icon: "interviews" },
      { title: "Customer Service", desc: "Communication and customer service improvement sessions.", icon: "hospitality" },
      { title: "Resume Optimization", desc: "Resume optimization and documentation support.", icon: "documentation" },
      { title: "Job Applications", desc: "Guidance for international cruise job applications.", icon: "graduation" },
      { title: "Upgrade Placements", desc: "Placement assistance for cruise industry opportunities.", icon: "placement" },
      { title: "Career Transition", desc: "Career transition support from local jobs to international cruise careers.", icon: "skills" }
    ],
    benefits: [
      "Opportunity for higher salary packages",
      "International career exposure",
      "Professional growth and career advancement",
      "Industry-standard training and preparation",
      "Better job opportunities in the cruise sector"
    ],
    stats: [
      { value: "2X-5X", label: "Salary Potential" },
      { value: "Global Shift", label: "Career Transition" }
    ]
  },
  {
    title: "Germany Nursing Placement Program",
    badge: "European Career Program",
    selectorIcon: "care",
    selectorTarget: "Nurses with Exp",
    categories: ["medical"],
    tagline: "Specifically designed for female nursing graduates looking to relocate and build a long-term medical career in Germany's healthcare sector.",
    highlightsTitle: "Global Health Placement",
    highlightsSub: "Training and Relocation Syllabus",
    features: [
      { title: "Target Profile", desc: "For girls who have completed nursing and have practical experience.", icon: "eligibility" },
      { title: "Dual Location Model", desc: "Professional training in India (approx 8 months) before relocation.", icon: "calendar" },
      { title: "German Language", desc: "German language training program (A1 to B2 proficiency).", icon: "german" },
      { title: "German Care Standards", desc: "Patient care standards and protocols for Europe.", icon: "care" },
      { title: "Interview Prep", desc: "Rigorous German hospital interview preparation.", icon: "interviews" },
      { title: "Documentation", desc: "Complete documentation and visa application guidance.", icon: "documentation" },
      { title: "Cultural Training", desc: "Cultural and workplace training for Germany.", icon: "hospitality" },
      { title: "Assisted Relocation", desc: "Assisted interviews, visa process, and relocation support.", icon: "visa" },
      { title: "German Placement", desc: "Placement opportunities in Germany's healthcare sector.", icon: "placement" },
      { title: "Career Growth", desc: "Global exposure and long-term residency prospects in Europe.", icon: "growth" }
    ],
    benefits: [
      "Build an international nursing career in Europe",
      "Significantly better salary packages and global benefits",
      "Relocation and document translation assistance",
      "Cultural adaptation and local support in Germany",
      "Long-term professional growth in European healthcare"
    ],
    stats: [
      { value: "8 Months", label: "Preparation in India" },
      { value: "B2 level", label: "German Language" }
    ]
  }
];

export default function CruiseProgramModal({ isOpen, onClose, onApplyClick, categoryFilter }: CruiseProgramModalProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [showScroll, setShowScroll] = useState(true);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);

  const detailsRef = useRef<HTMLDivElement>(null);

  // Compute filtered list of programs based on categoryFilter
  const filteredPrograms = categoryFilter
    ? programsData.filter((p) => p.categories.includes(categoryFilter))
    : programsData;

  // Sync activeTab when categoryFilter or isOpen changes
  useEffect(() => {
    if (isOpen && filteredPrograms.length > 0) {
      // Find the index of the first filtered program in the main programsData array
      const firstFilteredTitle = filteredPrograms[0].title;
      const originalIdx = programsData.findIndex((p) => p.title === firstFilteredTitle);
      setActiveTab(originalIdx !== -1 ? originalIdx : 0);
    }
  }, [isOpen, categoryFilter]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setShowScroll(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const selectProgram = (idx: number) => {
    setActiveTab(idx);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const isAtBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 120;
    setShowScroll(!isAtBottom);
  };

  const activeProgram = programsData[activeTab] || programsData[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="program-scroll-container"
          onScroll={handleScroll}
          className="fixed inset-0 z-[100] overflow-y-auto flex items-start justify-center p-2 sm:p-4 scroll-smooth"
          data-lenis-prevent="true"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
          />

          {/* Modal Content Container (scrolls naturally as page content) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-5xl bg-[#090f1d] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col my-8"
          >
            {/* Top Header (No Image Banner) - Enhanced Highlight with Gradient Text */}
            <div className="relative py-8 px-6 md:px-10 border-b border-white/10 bg-gradient-to-r from-[#0a1226] via-[#090f1d] to-[#0a1226] shrink-0">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-20 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white p-2.5 rounded-full border border-white/5 transition-colors cursor-pointer"
                aria-label="Close details modal"
              >
                <CloseIcon />
              </button>

              {/* Title & Badge */}
              <div className="space-y-2.5 max-w-[85%]">
                <span className="inline-block bg-blue-600/20 text-blue-300 text-[9px] md:text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-blue-500/30 shadow-sm shadow-blue-900/20">
                  Shrivastava Group of Institutes
                </span>
                <h1 className="text-2xl md:text-4xl font-black leading-tight font-sans tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
                  Explore Specialized Career Programs
                </h1>
              </div>
            </div>

            {/* Program Selector Section (Big Interactive Cards) */}
            <div className="p-5 md:p-8 bg-[#0b1223]/30 border-b border-white/5 space-y-4">
              <div className="text-center sm:text-left">
                <h2 className="text-xs font-black text-cyan-400 uppercase tracking-widest">Select a Pathway</h2>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {filteredPrograms.length > 1 
                    ? "Click a program option card below to instantly display its details." 
                    : "Displaying the program details below."}
                </p>
              </div>

              <div className={`grid gap-4 ${
                filteredPrograms.length === 1
                  ? 'grid-cols-1 max-w-sm mx-auto'
                  : filteredPrograms.length === 2
                  ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              }`}>
                {filteredPrograms.map((prog) => {
                  const idx = programsData.findIndex((p) => p.title === prog.title);
                  return (
                    <button
                      key={prog.title}
                      onClick={() => selectProgram(idx)}
                      className={`relative p-5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 group cursor-pointer h-full min-h-[140px] ${activeTab === idx
                          ? 'bg-blue-600/10 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.15)] scale-[1.02]'
                          : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.05] hover:scale-[1.01]'
                        }`}
                    >
                      <div className="space-y-3.5 w-full">
                        <div className="flex items-center justify-between gap-2">
                          <div className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${activeTab === idx
                              ? 'bg-blue-600 text-white border-blue-400/40 rotate-2'
                              : 'bg-white/5 text-slate-400 border-white/5 group-hover:text-white'
                            }`}>
                            <ProgramIcon name={prog.selectorIcon} />
                          </div>
                          <span className={`text-[8px] md:text-[9px] font-black uppercase px-2 py-0.5 rounded-full border text-center shrink-0 ${activeTab === idx
                              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                              : 'bg-white/5 text-slate-400 border-white/5'
                            }`}>
                            {prog.selectorTarget}
                          </span>
                        </div>
                        <h3 className="text-xs font-black text-white group-hover:text-blue-400 transition-colors leading-tight">
                          {prog.title}
                        </h3>
                      </div>

                      <div className="text-[10px] text-slate-400 group-hover:text-slate-200 mt-4 font-bold flex items-center gap-1.5 pt-2 border-t border-white/5 w-full font-sans">
                        <span>{activeTab === idx ? "Viewing Program" : "Select Program"}</span>
                        <svg className={`w-3.5 h-3.5 transform transition-transform ${activeTab === idx ? 'rotate-90 text-cyan-400' : 'group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Program Details Section - Highlighting the active program heading section */}
            <div
              ref={detailsRef}
              className="p-5 md:p-8 space-y-8 scroll-mt-2 border-t border-white/5 bg-[#090f1d]/50"
            >
              {/* Active Program Header - Enhanced styling with left accent border and gradient title */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-8 border-l-4 border-blue-500 pl-4 md:pl-6 bg-blue-950/10 py-4 rounded-r-2xl">
                <div className="space-y-2">
                  <span className="inline-block bg-blue-500 text-white text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-blue-400/30 shadow-md shadow-blue-900/20">
                    {activeProgram.badge}
                  </span>
                  <h2 className="text-xl md:text-3xl font-black leading-tight tracking-tight bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent">
                    {activeProgram.title}
                  </h2>
                </div>
                <button
                  onClick={() => setIsAdmissionOpen(true)}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-black tracking-wider uppercase px-5 py-2.5 rounded-xl border border-blue-400/50 hover:-translate-y-0.5 active:translate-y-0 transition-all shrink-0 cursor-pointer shadow-lg shadow-blue-600/30"
                >
                  Quick Apply
                </button>
              </div>

              {/* Program Overview / Tagline */}
              <div className="bg-blue-600/[0.02] border border-blue-500/10 p-5 rounded-2xl">
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium italic">
                  &ldquo;{activeProgram.tagline}&rdquo;
                </p>
              </div>

              {/* Split Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left Side: Program Features */}
                <div className="lg:col-span-7 space-y-5">
                  <div>
                    <h3 className="text-[10px] font-black text-cyan-400 tracking-[0.25em] uppercase mb-1">
                      {activeProgram.highlightsTitle}
                    </h3>
                    <h2 className="text-base md:text-lg font-bold text-white tracking-tight">
                      {activeProgram.highlightsSub}
                    </h2>
                  </div>

                  {/* Feature List Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProgram.features.map((feat, i) => (
                      <div
                        key={feat.title}
                        className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex gap-3 hover:border-white/10 hover:bg-white/[0.04] transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <ProgramIcon name={feat.icon} />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-xs font-bold text-white tracking-tight">{feat.title}</h4>
                          <p className="text-[11px] text-slate-400 leading-normal">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Benefits & Stats */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-gradient-to-b from-blue-950/40 to-slate-950/40 border border-cyan-500/25 rounded-3xl p-5 md:p-6 relative overflow-hidden shadow-2xl">
                    {/* Glowing Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <h3 className="text-[10px] font-black text-cyan-400 tracking-[0.25em] uppercase mb-3">
                      Core Advantages
                    </h3>
                    <h2 className="text-base md:text-lg font-bold text-white mb-5 tracking-tight">
                      Programme Benefits
                    </h2>

                    <div className="space-y-3.5">
                      {activeProgram.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5.5 h-5.5 rounded-full bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center shrink-0">
                            <CheckIcon />
                          </div>
                          <span className="text-xs text-slate-300 font-medium leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Dynamic Stats Section */}
                    <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-5 mt-6">
                      {activeProgram.stats.map((stat, sIdx) => (
                        <div key={sIdx}>
                          <div className="text-xl md:text-2xl font-black text-white">{stat.value}</div>
                          <div className="text-[9px] text-slate-400 uppercase tracking-widest font-bold leading-normal">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer Actions (flows naturally as bottom section) */}
            <div className="bg-[#070b14] border-t border-white/5 p-4 md:p-6 shrink-0 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-center sm:text-left space-y-0.5">
                <h4 className="text-xs md:text-sm font-bold text-white">Enroll in the {activeProgram.title.replace(" Programme", "").replace(" Program", "")}</h4>
                <p className="text-[11px] text-slate-400">Relocate internationally and accelerate your professional career trajectory.</p>
              </div>
              <div className="flex gap-3 w-full sm:w-auto shrink-0">
                <button
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/5 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => setIsAdmissionOpen(true)}
                  className="w-1/2 sm:w-auto px-7 py-2.5 rounded-xl text-xs font-black text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all border border-blue-400/50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* Floating Bouncing Scroll Indicator (fixed relative to viewport overlay) */}
          {showScroll && (
            <button
              onClick={() => {
                document.getElementById('program-scroll-container')?.scrollBy({ top: 350, behavior: 'smooth' });
              }}
              className="fixed bottom-6 right-6 md:right-10 z-[110] bg-blue-600/95 text-white px-4.5 py-2.5 rounded-full shadow-2xl hover:bg-blue-700 active:scale-95 transition-all animate-bounce flex items-center justify-center gap-1.5 border border-blue-400/50 cursor-pointer"
            >
              <span className="text-[9px] font-black tracking-wider uppercase">Scroll for details</span>
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </button>
          )}

          <AdmissionFormModal 
            isOpen={isAdmissionOpen} 
            onClose={() => setIsAdmissionOpen(false)} 
          />
        </div>
      )}
    </AnimatePresence>
  );
}

// Force redeployment update
