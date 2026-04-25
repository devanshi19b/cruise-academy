'use client';

import { motion } from 'framer-motion';
import { contactDetails } from '@/lib/contact';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white relative overflow-hidden flex items-center justify-center py-20 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)]"></div>
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-cyan-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6 group">
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Get in touch with Shrivastava Group of Institute for expert career guidance and maritime education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all group">
              <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-slate-400 mb-4">Monday to Saturday, 9am to 6pm</p>
              <div className="space-y-2">
                <a href="tel:+918888060439" className="block text-2xl font-semibold hover:text-blue-400 transition-colors">888 806 0439</a>
                <a href="tel:+918484820157" className="block text-2xl font-semibold hover:text-blue-400 transition-colors">848 482 0157</a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all group">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-slate-400 mb-4">Send us your queries anytime</p>
              <a href={`mailto:${contactDetails.email}`} className="text-lg md:text-xl font-semibold hover:text-cyan-400 transition-colors break-all">
                {contactDetails.email}
              </a>
            </div>
          </motion.div>

          {/* Address & Website Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all group">
              <div className="w-12 h-12 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-slate-400 mb-4">Visit our main office</p>
              <p className="text-lg md:text-xl font-semibold leading-relaxed">
                Bashweshwar Bhavan, 466/A, Bhurke Colony,<br />
                Front of Bhurke Banglow, Sadar Bazar,<br />
                Satara (Pune) - 415001
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all group">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Website</h3>
              <p className="text-slate-400 mb-4">Explore our online presence</p>
              <a 
                href={contactDetails.websiteHref} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg md:text-xl font-semibold hover:text-indigo-400 transition-colors"
              >
                {contactDetails.websiteDisplay}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-slate-500 text-sm"
        >
          © 2026 {contactDetails.organizationName}. All rights reserved.
        </motion.div>
      </div>
    </main>
  );
}
