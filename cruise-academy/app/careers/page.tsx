'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

const positions = [
  {
    title: "NEET Biology Faculty",
    type: "Full-time",
    location: "Satara",
    description: "Looking for an experienced Biology teacher with a proven track record in NEET coaching."
  },
  {
    title: "IIT-JEE Mathematics Expert",
    type: "Full-time",
    location: "Satara",
    description: "Join our core team to mentor students for the most prestigious engineering entrance exams."
  },
  {
    title: "Career Counselor",
    type: "Part-time / Full-time",
    location: "Satara",
    description: "Help students navigate their educational paths and choose the right career streams."
  },
  {
    title: "Admin Executive",
    type: "Full-time",
    location: "Satara",
    description: "Manage institute operations and student registrations with efficiency and care."
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#050b14] text-white selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050b14]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <svg className="w-5 h-5 text-cyan-400 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-lg font-bold tracking-tight">Shrivastava Group</span>
          </Link>
          <Link href="/contact" className="bg-cyan-600 hover:bg-cyan-500 px-5 py-2 rounded-xl font-bold transition-all text-sm">
            Contact HR
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6 relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Join Our Mission
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Help us shape the future of education. We are always looking for passionate educators and professionals to join our growing team.
          </p>
        </motion.div>
      </header>

      {/* Careers Content */}
      <main className="max-w-4xl mx-auto px-6 pb-32">
        <div className="space-y-8">
          {positions.map((job, index) => (
            <motion.div
              key={job.title}
              className="bg-[#0a121f] border border-white/5 rounded-3xl p-8 hover:border-cyan-500/30 transition-all group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-400/10 px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="text-xs font-medium text-slate-500">{job.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-slate-400 mt-3 text-sm leading-relaxed max-w-xl">
                    {job.description}
                  </p>
                </div>
                <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-xl font-bold transition-all border border-white/10 shrink-0">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Application */}
        <motion.div 
          className="mt-16 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/20 rounded-3xl p-10 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Don't see a fit?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            We are always open to meeting talented individuals. Send your resume to our HR department and we'll keep you in mind for future openings.
          </p>
          <a href="mailto:hr@shrivastavagroup.in" className="inline-block text-cyan-400 font-bold hover:underline">
            hr@shrivastavagroup.in
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
