'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useState } from 'react';

const faqs = [
  {
    question: "What courses does Shrivastava Group of Institute offer?",
    answer: "We specialize in coaching for Class X, XII (Science), and competitive entrance exams like NEET and IIT-JEE. We also provide expert career guidance and vocational training."
  },
  {
    question: "How do I take admission?",
    answer: "The process is simple: Fill out the online admission form, visit our Satara campus for a counselor meeting, and complete the registration formalities."
  },
  {
    question: "Do you provide study materials?",
    answer: "Yes, we provide comprehensive, updated study materials tailored for NEET and JEE preparation, along with regular practice tests and mock exams."
  },
  {
    question: "What is the average batch size?",
    answer: "We believe in personalized attention. Our batch sizes are kept small (typically 15-20 students) to ensure every student can interact directly with the faculty."
  },
  {
    question: "Where is the institute located?",
    answer: "We are located at Bashweshwar Bhavan, Sadar Bazar, Satara. You can find our full address and map link on the Contact Us page."
  }
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
          <Link href="/contact" className="text-sm font-semibold hover:text-cyan-400 transition-colors">
            Ask a Question
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
            How can we help?
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about admissions, courses, and life at Shrivastava Group of Institute.
          </p>
        </motion.div>
      </header>

      {/* FAQ Accordion */}
      <main className="max-w-3xl mx-auto px-6 pb-32">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-white/5 rounded-2xl overflow-hidden bg-[#0a121f] transition-all"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group"
              >
                <span className={`text-lg font-bold transition-colors ${activeIndex === index ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'}`}>
                  {faq.question}
                </span>
                <svg 
                  className={`w-6 h-6 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-cyan-400' : 'text-slate-500'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-8 pb-6 text-slate-400 leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 mb-6 font-medium text-lg">Still have questions?</p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-[#161f2e] hover:bg-[#1c283b] text-white px-10 py-4 rounded-2xl font-bold transition-all border border-white/5 hover:border-cyan-500/30 group"
          >
            Contact Support Team
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
