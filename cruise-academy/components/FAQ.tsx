'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const faqData = [
  {
    question: "Which entrance exams do I need to take?",
    answer: "Our institute provides comprehensive preparation for a wide range of exams, including NEET for medical, IIT-JEE for engineering, and specialized maritime entrance tests for seafarer careers."
  },
  {
    question: "When should I start preparing for entrance exams?",
    answer: "We recommend starting preparation as early as Class XI to build a strong foundation, though we offer intensive crash courses for Class XII students as well."
  },
  {
    question: "What is your approach to the counseling process?",
    answer: "We take a personalized approach, assessing each student's strengths, interests, and career goals before recommending the most suitable path and program."
  },
  {
    question: "How do you help choose between colleges?",
    answer: "Our experts analyze college rankings, placement records, faculty quality, and infrastructure to help you make an informed decision that aligns with your aspirations."
  },
  {
    question: "What does the free consultation include?",
    answer: "The consultation includes a profile evaluation, career roadmap discussion, and a detailed Q&A session with our senior academic counselors."
  },
  {
    question: "Do you assist with scholarship and financial aid?",
    answer: "Yes, we guide students through various government and private scholarship applications and provide assistance with educational loan documentation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#0a0f1c] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Title & Info */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              FAQ
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
              Common <br />Questions
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-sm">
              Still have questions? Book a free consultation and speak directly with a senior counselor.
            </p>
            <Link 
              href="/contact"
              className="group inline-flex items-center gap-3 border border-white/20 bg-white/5 hover:bg-white hover:text-[#0a0f1c] px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-xl w-max"
            >
              Book a Call
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Right Side: Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg md:text-xl font-semibold transition-colors ${openIndex === index ? 'text-blue-400' : 'text-white group-hover:text-blue-300'}`}>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${openIndex === index ? 'bg-blue-600 border-blue-600 rotate-180' : 'group-hover:border-white/30'}`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-slate-400 leading-relaxed text-lg">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
