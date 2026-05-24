'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { label: "ALUMNI GLOBALLY", value: 15, suffix: "K+" },
  { label: "PLACEMENT RATE", value: 98, suffix: "%" },
  { label: "GLOBAL PARTNERS", value: 50, suffix: "+" },
  { label: "EXPERT FACULTY", value: 120, suffix: "+" }
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-[#0a0f1c] text-white relative overflow-hidden flex items-center justify-center min-h-[400px]">
      
      {/* Interlocking Rings Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-96 h-96 rounded-full border-[1px] border-cyan-500/20 translate-x-1/2 absolute"></div>
        <div className="w-96 h-96 rounded-full border-[1px] border-cyan-500/30 absolute"></div>
        <div className="w-96 h-96 rounded-full border-[1px] border-cyan-500/20 -translate-x-1/2 absolute"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl md:text-7xl font-black mb-4 tracking-tighter text-white drop-shadow-md relative">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[#06b6d4] text-xs font-bold tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}