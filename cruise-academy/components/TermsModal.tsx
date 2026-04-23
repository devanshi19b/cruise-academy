'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[120] overflow-y-auto"
          data-lenis-prevent="true"
        >
          <div className="min-h-screen flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              
              {/* Sticky Header */}
              <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Terms & Conditions</h2>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="p-6 md:p-10 overflow-y-auto text-gray-700 space-y-10 custom-scrollbar" data-lenis-prevent="true">
                
                {/* SECTION 1 */}
                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">Terms & Conditions</h3>
                  <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
                    <li>Every student should comply with the set rules & regulations of shrivastava group of institutes.</li>
                    <li>Students are expected to maintain proper discipline and decorum in and outside the classroom and display decent behavior.</li>
                    <li>If any student fails to attend the class or discontinues the course in between, the institute will not refund fees.</li>
                    <li>All the rights to make any changes in the timetable, faculty members, and venue of the class are reserved with the institute.</li>
                    <li>There might be a change in class duration, timing/days of the regular classes due to special classes or events.</li>
                    <li>All decisions related to the institute, including class schedule, time table, faculty, admission, syllabus and other will be made by the director and will be final.</li>
                    <li>No candidate is allowed to re-attend the same class.</li>
                    <li>The institute can use photographs of candidates pasted in the admission form for advertisement, marketing/PR activities.</li>
                    <li>The institute will not postpone admission in the current year to next calender year in any circumstances.</li>
                    <li>All the disputes are subjected to Maharashtra Jurisdiction.</li>
                  </ol>
                </section>

                <hr className="border-gray-100" />

                {/* SECTION 2 */}
                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">DISCLAIMER</h3>
                  <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
                    <li>Shrivastava group of institutes is fully responsible for conducting the classes as per the current year syllabus.</li>
                    <li>Mobiles or any recording device is strictly prohibited during the class. If any student is found recording any lecture in the class, the institute will take strict action against the student in such a case, the institute will cancel the admission without a refund of the fees.</li>
                    <li>Attendance is not taken every day as we consider an SGOI aspirant to be punctual and regular in the coaching classes.</li>
                    <li>SGOI does not provide any trial classes.</li>
                  </ol>
                </section>

                <hr className="border-gray-100" />

                {/* SECTION 3 */}
                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">REFUND OF FEE</h3>
                  <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
                    <li>Students are advised to go through every detail before joining the classes to avoid disappointment and financial loss as the fees once paid cannot be refunded.</li>
                    <li>As per the decision taken on June 10th 2023 by national consumer redressed commission, the submitted fees minus the processing fees could be refunded in a condition of availability of a new student against the seat and before starting the course.</li>
                  </ol>
                </section>

                <hr className="border-gray-100" />

                {/* SECTION 4 */}
                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">Declaration</h3>
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-blue-900 font-medium shadow-inner leading-relaxed">
                    I certify that I am the parent/bonafide guardian of the child and information given in this form is true to the best of my knowledge. I have carefully read the prospectus and agree to abide by the rules, regulations and procedures laid down there in and accept that they may change from time to time at the directions of the our management and extend my full co-operation to keep things moving in a healthy manner.
                  </div>
                </section>

                <hr className="border-gray-100" />

                {/* SECTION 5 */}
                <section className="pb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider">Section 5: Optional Additional Fields</h3>
                  
                  {/* Fees Installments */}
                  <div className="mb-10">
                    <h4 className="font-semibold text-gray-800 mb-4">Fees Installment Schedule</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Installment I</span>
                        <div className="h-8 border-b-2 border-dotted border-gray-300"></div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Installment II</span>
                        <div className="h-8 border-b-2 border-dotted border-gray-300"></div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Installment III</span>
                        <div className="h-8 border-b-2 border-dotted border-gray-300"></div>
                      </div>
                    </div>
                  </div>

                  {/* Signatures */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-6">Signatures</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                      <div className="flex flex-col flex-1">
                        <div className="h-20 border-b-2 border-gray-300 mb-2"></div>
                        <span className="text-sm text-gray-600 text-center font-medium">Parent Signature</span>
                      </div>
                      <div className="flex flex-col flex-1">
                        <div className="h-20 border-b-2 border-gray-300 mb-2"></div>
                        <span className="text-sm text-gray-600 text-center font-medium">Student Signature</span>
                      </div>
                      <div className="flex flex-col flex-1">
                        <div className="h-20 border-b-2 border-gray-300 mb-2"></div>
                        <span className="text-sm text-gray-600 text-center font-medium">Authorized Signature</span>
                      </div>
                    </div>
                  </div>
                </section>

              </div>

              {/* Sticky Footer Action */}
              <div className="border-t border-gray-100 bg-gray-50 px-6 py-4 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors active:scale-95"
                >
                  I Understand and Close
                </button>
              </div>

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
