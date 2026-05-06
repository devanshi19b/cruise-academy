'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.04, // This gives the extremely buttery drag/swipe effect
      wheelMultiplier: 1,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });

    resizeObserver.observe(document.body);
    resizeObserver.observe(document.documentElement);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      resizeObserver.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
}
