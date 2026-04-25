'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import Footer from '@/components/Footer';

export default function BlogListingPage() {
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
            Contact Support
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
            Knowledge Hub
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Explore the latest trends in maritime education, career guidance, and academic excellence.
          </p>
        </motion.div>
      </header>

      {/* Search / Filters (Placeholder for aesthetic) */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {['All Posts', 'Careers', 'Education', 'Exams', 'Campus Life'].map((filter) => (
            <button 
              key={filter}
              className={`px-6 py-2 rounded-full text-sm font-bold border transition-all ${
                filter === 'All Posts' 
                  ? 'bg-cyan-600 border-cyan-500 text-white' 
                  : 'bg-white/5 border-white/10 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <main className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <motion.article
                className="bg-[#0a121f] border border-white/5 rounded-3xl p-8 hover:shadow-2xl hover:border-cyan-500/30 transition-all duration-300 group h-full flex flex-col cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-block bg-cyan-900/30 border border-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                    {post.category}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{post.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-slate-400 mb-8 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-white/70">{post.author}</span>
                  </div>
                  <span className="text-xs font-medium text-slate-500">{post.date}</span>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
