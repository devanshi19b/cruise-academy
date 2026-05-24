'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "Schedule a free consultation to discuss your goals and interests."
  },
  {
    step: 2,
    title: "Assessment & Guidance",
    description: "Complete our assessment to identify the best program for you."
  },
  {
    step: 3,
    title: "Program Enrollment",
    description: "Enroll in your chosen program and begin your journey."
  },
  {
    step: 4,
    title: "Ongoing Support",
    description: "Receive continuous guidance and support throughout your program."
  }
];

export default function AdmissionProcess() {
  return (
    <section className="py-24 bg-[#081121] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Admission Process</h2>
          <p className="text-xl text-slate-400">Simple steps to start your educational journey</p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-800"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} text-center md:text-left`}>
                  <div className="bg-[#121c2d] border border-white/10 shadow-lg text-cyan-400 w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto md:mx-0 mb-6 group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>
                
                <div className="hidden md:block w-4 h-4 bg-cyan-500 rounded-full border-4 border-[#081121] shadow-[0_0_15px_rgba(6,182,212,0.5)] z-10"></div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}