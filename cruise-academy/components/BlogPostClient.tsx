'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

interface Post {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
}

export default function BlogPostClient({ post }: { post: Post }) {
  return (
    <div className="min-h-screen bg-[#050b14] text-white selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050b14]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-semibold tracking-wide uppercase">Back to Insights</span>
          </Link>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/60 hover:text-cyan-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-cyan-900/30 border border-cyan-500/20 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-white drop-shadow-sm">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Content Section */}
      <main className="pb-24 px-6">
        <motion.div 
          className="max-w-3xl mx-auto bg-[#0a121f] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
          
          <article 
            className="prose prose-invert prose-cyan max-w-none 
              prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
              prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-lg
              prose-li:text-slate-300 prose-li:text-lg
              prose-strong:text-cyan-400 prose-strong:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h2:pb-4 prose-h2:border-b prose-h2:border-white/5
              prose-ul:my-8 prose-li:my-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Post Footer */}
          <div className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-900/30 flex items-center justify-center border border-cyan-500/20">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Written by</p>
                <p className="text-lg font-bold text-white">{post.author}</p>
              </div>
            </div>
            
            <Link 
              href="/" 
              className="px-8 py-3 bg-[#161f2e] hover:bg-[#1c283b] text-white rounded-xl font-bold transition-all border border-white/5 hover:border-cyan-500/30 flex items-center gap-3 group"
            >
              Explore More Insights
              <svg className="w-5 h-5 transform rotate-180 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
