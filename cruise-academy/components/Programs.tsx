'use client';

import { motion } from 'framer-motion';

const programs = [
  {
    title: "Engineering",
    description: "Next-gen AI, Robotics, and Civil Engineering modules.",
    iconColor: "bg-blue-900",
    iconBorder: "border-blue-700",
    icon: (
      <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
    )
  },
  {
    title: "Medical",
    description: "Advanced clinical research and nursing excellence programs.",
    iconColor: "bg-red-900",
    iconBorder: "border-red-700",
    icon: (
      <svg className="w-5 h-5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    )
  },
  {
    title: "Study Abroad",
    description: "Global immersion programs with partnered universities.",
    iconColor: "bg-[#7c3aed]", // Purple
    iconBorder: "border-[#8b5cf6]",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    )
  },
  {
    title: "Career Guidance",
    description: "Personalized mentoring from industry veterans.",
    iconColor: "bg-[#10b981]", // Green
    iconBorder: "border-[#34d399]",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    )
  }
];

export default function Programs() {
  return (
    <section className="py-24 bg-[#081121] relative overflow-hidden">
      
      {/* Ambient Glow For Glass Refraction */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-1/4 -left-1/4 w-[40rem] h-[40rem] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[40rem] h-[40rem] bg-cyan-500 rounded-full mix-blend-screen filter blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col xl:flex-row gap-6">
        
        {/* Left Card: Seafarer Training */}
        <motion.div 
          className="xl:w-[45%] bg-white/[0.04] backdrop-blur-2xl rounded-3xl p-10 flex flex-col justify-center relative shadow-2xl overflow-hidden border border-white/10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Faint Abstract Ship Watermark */}
          <div className="absolute top-10 right-0 opacity-10 pointer-events-none transform translate-x-1/4">
            <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M21 15.999c0 .774-.469 1.488-1.127 1.776l-7.445 3.3c-.274.122-.584.122-.858 0l-7.445-3.3C3.468 17.487 3 16.772 3 15.999V6c0-.986.744-1.859 1.714-2.023l6.5-1.083c.518-.086 1.054-.086 1.572 0l6.5 1.083C20.256 4.141 21 5.014 21 6v9.999zm-2 0V6.657l-6-1V17.37L19 15.999zm-8-10.342l-6 1V15.99l6 2.66V5.657z"/>
              <path d="M3 20h18v2H3z" />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight relative font-sans tracking-tight drop-shadow-sm">
            Seafarer Training & <br />Maritime Excellence
          </h2>
          <p className="text-blue-100/80 text-lg mb-10 max-w-sm relative leading-relaxed">
            Join our elite maritime academy. We don&apos;t just teach navigation; we build masters of the sea with 100% placement assurance.
          </p>
          
          <div className="relative inline-block w-max">
            <div className="absolute inset-[-4px] rounded-full border border-blue-400 border-dashed animate-[spin_10s_linear_infinite]"></div>
            <button className="relative bg-white text-[#0a0f1c] hover:bg-transparent hover:text-white hover:border hover:border-white px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap">
              Start Your Voyage
            </button>
          </div>
        </motion.div>

        {/* Right Grid: Other Programs */}
        <div className="xl:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.08] hover:border-white/20 transition-all hover:-translate-y-1 hover:bg-white/[0.05] shadow-2xl group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className={`w-14 h-14 ${program.iconColor} border ${program.iconBorder} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10`}
              >
                {program.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{program.title}</h3>
              <p className="text-[#94a3b8] leading-relaxed text-sm">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}