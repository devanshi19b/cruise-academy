'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Medical Student",
    content: "Shrivastava Group of Institute helped me achieve my dream of becoming a doctor. Their NEET preparation was exceptional.",
    rating: 5
  },
  {
    name: "Rahul Kumar",
    role: "Engineering Graduate",
    content: "The career guidance I received was life-changing. Now working at a top tech company in Silicon Valley.",
    rating: 5
  },
  {
    name: "Ananya Patel",
    role: "Seafarer",
    content: "Thanks to the seafarer training program, I'm now working on luxury cruise ships around the world.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Study Abroad Student",
    content: "Their support for international education was outstanding. Got into my dream university in Canada.",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#0a0f1c] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">What Our Students Say</h2>
          <p className="text-xl text-slate-400">Success stories from our community</p>
        </motion.div>
        
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-[#121c2d] rounded-2xl p-8 shadow-2xl border border-white/5 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">★</span>
                    ))}
                  </div>
                  <blockquote className="text-lg text-slate-300 mb-6 italic leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm mt-1">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-cyan-400 w-8' : 'bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}