'use client';

import { motion } from 'framer-motion';

const BUBBLES = [
  { left: "12%", size: "18px", delay: "1.2s", duration: "11s" },
  { left: "45%", size: "25px", delay: "0.5s", duration: "9s" },
  { left: "78%", size: "14px", delay: "3.2s", duration: "12s" },
  { left: "23%", size: "32px", delay: "2.1s", duration: "10s" },
  { left: "89%", size: "22px", delay: "4.5s", duration: "13s" },
  { left: "56%", size: "16px", delay: "1.8s", duration: "8s" },
  { left: "34%", size: "28px", delay: "5.2s", duration: "11s" },
  { left: "67%", size: "12px", delay: "0.2s", duration: "14s" },
  { left: "5%",  size: "30px", delay: "6.1s", duration: "10s" },
  { left: "92%", size: "15px", delay: "2.8s", duration: "12s" },
  { left: "71%", size: "24px", delay: "7.0s", duration: "9s" },
  { left: "39%", size: "20px", delay: "3.9s", duration: "13s" },
  { left: "83%", size: "17px", delay: "1.0s", duration: "11s" },
  { left: "19%", size: "26px", delay: "5.8s", duration: "10s" },
  { left: "50%", size: "35px", delay: "0.0s", duration: "12s" }
];

export default function SeafarerSection() {
  const features = [
    "Cruise & cargo ship training programs",
    "Comprehensive placement support",
    "Global exposure and career opportunities",
    "Industry-standard safety training",
    "International maritime certifications"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-navy-900 text-white relative overflow-hidden">
      {/* Background pattern & Floating Bubbles */}
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.6)_0%,_transparent_70%)] rounded-full mix-blend-screen animate-float transform-gpu"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[radial-gradient(circle_at_center,_rgba(8,145,178,0.6)_0%,_transparent_70%)] rounded-full mix-blend-screen animate-float-delayed transform-gpu"></div>
        
        {BUBBLES.map((bubble, i) => (
          <div 
            key={`bubble-${i}`} 
            className="absolute rounded-full border border-white/20 bg-white/10 backdrop-blur-sm animate-bubble"
            style={{
              left: bubble.left,
              width: bubble.size,
              height: bubble.size,
              animationDelay: bubble.delay,
              animationDuration: bubble.duration
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Launch Your Career at Sea</h2>
          <p className="text-xl text-blue-100">Discover the world of maritime careers with our specialized seafarer training</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Why Choose Maritime Careers?</h3>
            <div className="space-y-4 text-blue-100">
              <p>Experience the freedom of the open sea while building a rewarding career in the global shipping industry.</p>
              <p>Our comprehensive training prepares you for both luxury cruise liners and commercial cargo vessels.</p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">95%</div>
                  <div className="text-sm">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm">Partner Ships</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}