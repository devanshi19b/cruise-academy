'use client';

import { motion } from 'framer-motion';

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
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl animate-float-delayed"></div>
        
        {[...Array(15)].map((_, i) => (
          <div 
            key={`bubble-${i}`} 
            className="absolute rounded-full border border-white/20 bg-white/10 backdrop-blur-sm animate-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 5 + 8}s`
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