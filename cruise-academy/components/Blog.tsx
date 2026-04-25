'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#081121] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Latest Insights</h2>
          <p className="text-xl text-slate-400">Stay updated with education and career trends</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <motion.article
                className="bg-[#121c2d] border border-white/5 rounded-2xl p-8 hover:shadow-2xl hover:border-cyan-500/30 transition-all duration-300 group h-full flex flex-col cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6">
                  <span className="inline-block bg-cyan-900/30 border border-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-slate-400 mb-8 text-sm leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-xs font-medium text-slate-500 mt-auto pt-4 border-t border-white/5">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/blog" className="inline-block bg-[#1a2333] border border-white/10 hover:border-cyan-400 hover:text-cyan-400 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-xl">
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  );
}