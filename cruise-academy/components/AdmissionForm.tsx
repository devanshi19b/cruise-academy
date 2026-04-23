'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
interface FormValues {
  // Personal
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  
  // Academic
  currentClass: string;
  stream: string;
  percentage: string;
  targetField: string;
  
  // Program
  program: string;
  mode: string;
  
  // Seafarer
  passport: string;
  travelAbroad: string;
  fitness: string;

  // Address
  city: string;
  state: string;
  country: string;

  // Additional
  message: string;
  document: File | null;

  // Consent
  consent: boolean;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

export default function AdmissionForm() {
  const [values, setValues] = useState<FormValues>({
    fullName: '', email: '', phone: '', dob: '', gender: '',
    currentClass: '', stream: '', percentage: '', targetField: '',
    program: '', mode: '',
    passport: '', travelAbroad: '', fitness: '',
    city: '', state: '', country: '',
    message: '', document: null,
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- Handlers ---
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setValues(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      const files = (e.target as HTMLInputElement).files;
      setValues(prev => ({ ...prev, [name]: files && files.length > 0 ? files[0] : null }));
    } else {
      setValues(prev => ({ ...prev, [name]: value }));
    }

    // Clear error for this field on change
    if (errors[name as keyof FormValues]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // 1. Personal
    if (!values.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!values.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!values.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(values.phone.replace(/[-+()\s]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit number';
    }

    // 7. Consent
    if (!values.consent) {
      newErrors.consent = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      // Scroll to top or first error
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form Submitted Successfully!', values);
      setIsSuccess(true);
      
      // Reset form
      setValues({
        fullName: '', email: '', phone: '', dob: '', gender: '',
        currentClass: '', stream: '', percentage: '', targetField: '',
        program: '', mode: '',
        passport: '', travelAbroad: '', fitness: '',
        city: '', state: '', country: '',
        message: '', document: null,
        consent: false,
      });
      setErrors({});
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- UI Reusables ---
  const inputClass = (name: keyof FormValues) => `
    w-full bg-[#0a0f1c]/50 border rounded-xl px-4 py-3 text-blue-50 
    focus:outline-none focus:ring-1 transition-all duration-300 placeholder:text-blue-300/30 backdrop-blur-sm shadow-inner
    ${errors[name] 
      ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400' 
      : 'border-blue-500/20 focus:border-blue-400 focus:ring-blue-400 hover:border-blue-500/40'}
  `;

  const labelClass = "block text-sm font-medium text-blue-200 mb-2";
  
  const ErrorMsg = ({ name }: { name: keyof FormValues }) => (
    <AnimatePresence>
      {errors[name] && (
        <motion.p 
          initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
          className="text-red-400 text-xs mt-1.5 flex items-center gap-1"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {errors[name]}
        </motion.p>
      )}
    </AnimatePresence>
  );

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-b from-[#0f172a] to-[#0a0f1c] border border-blue-500/20 rounded-2xl shadow-2xl p-6 sm:p-10 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-800"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 border border-blue-400/30">
                <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
                Application Submitted!
              </h2>
              <p className="text-blue-300 max-w-md mx-auto">
                Thank you for applying. We have received your details and our admission team will be in touch with you shortly.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 px-8 py-3 bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 hover:text-white rounded-xl font-medium transition-all border border-blue-500/30 shadow-lg"
              >
                Submit another application
              </button>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-10 lg:text-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-3">
                  Admission Application
                </h2>
                <p className="text-blue-300/80">Begin your journey of excellence by filling out the form below.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10" noValidate>
                
                {/* 1. PERSONAL DETAILS */}
                <section>
                  <h3 className="text-xl font-semibold text-blue-100 mb-6 flex items-center gap-3 border-b border-blue-500/10 pb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 text-cyan-400 text-sm">1</span>
                    Personal Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className={labelClass}>Full Name *</label>
                      <input type="text" name="fullName" value={values.fullName} onChange={handleChange} className={inputClass('fullName')} placeholder="John Doe" />
                      <ErrorMsg name="fullName" />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input type="email" name="email" value={values.email} onChange={handleChange} className={inputClass('email')} placeholder="john@example.com" />
                      <ErrorMsg name="email" />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <input type="tel" name="phone" value={values.phone} onChange={handleChange} className={inputClass('phone')} placeholder="+1 (555) 000-0000" />
                      <ErrorMsg name="phone" />
                    </div>
                    <div>
                      <label className={labelClass}>Date of Birth</label>
                      <input type="date" name="dob" value={values.dob} onChange={handleChange} className={inputClass('dob')} />
                    </div>
                    <div>
                      <label className={labelClass}>Gender</label>
                      <select name="gender" value={values.gender} onChange={handleChange} className={inputClass('gender')}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </section>

                {/* 2. ACADEMIC DETAILS */}
                <section>
                  <h3 className="text-xl font-semibold text-blue-100 mb-6 flex items-center gap-3 border-b border-blue-500/10 pb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 text-cyan-400 text-sm">2</span>
                    Academic Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Current Class</label>
                      <select name="currentClass" value={values.currentClass} onChange={handleChange} className={inputClass('currentClass')}>
                        <option value="">Select Class</option>
                        <option value="9">9th Grade</option>
                        <option value="10">10th Grade</option>
                        <option value="11">11th Grade</option>
                        <option value="12">12th Grade</option>
                        <option value="Graduate">Graduate</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Stream</label>
                      <select name="stream" value={values.stream} onChange={handleChange} className={inputClass('stream')}>
                        <option value="">Select Stream</option>
                        <option value="Science">Science</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Arts">Arts</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Last Exam Percentage (%)</label>
                      <input type="number" step="0.01" min="0" max="100" name="percentage" value={values.percentage} onChange={handleChange} className={inputClass('percentage')} placeholder="e.g. 85.5" />
                    </div>
                    <div>
                      <label className={labelClass}>Target Field</label>
                      <select name="targetField" value={values.targetField} onChange={handleChange} className={inputClass('targetField')}>
                        <option value="">Select Target</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Medical">Medical</option>
                        <option value="Study Abroad">Study Abroad</option>
                        <option value="Seafarer">Seafarer</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </section>

                {/* 3. PROGRAM SELECTION */}
                <section>
                  <h3 className="text-xl font-semibold text-blue-100 mb-6 flex items-center gap-3 border-b border-blue-500/10 pb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 text-cyan-400 text-sm">3</span>
                    Program Selection
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Program Interested In</label>
                      <select name="program" value={values.program} onChange={handleChange} className={inputClass('program')}>
                        <option value="">Select Program</option>
                        <option value="Engineering Prep">Engineering Prep</option>
                        <option value="Medical Prep">Medical Prep</option>
                        <option value="Career Guidance">Career Guidance</option>
                        <option value="Study Abroad">Study Abroad</option>
                        <option value="Seafarer Training">Seafarer Training</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Preferred Mode</label>
                      <select name="mode" value={values.mode} onChange={handleChange} className={inputClass('mode')}>
                        <option value="">Select Mode</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                        <option value="Hybrid">Hybrid</option>
                      </select>
                    </div>
                  </div>
                </section>

                {/* 4. SEAFARER SPECIFIC (CONDITIONAL) */}
                <AnimatePresence>
                  {values.program === 'Seafarer Training' && (
                    <motion.section 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2">
                        <h3 className="text-xl font-semibold text-blue-100 mb-6 flex items-center gap-3 border-b border-blue-500/10 pb-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 text-sm">4</span>
                          Seafarer Requirements
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-blue-900/10 p-6 rounded-2xl border border-blue-500/10">
                          <div>
                            <label className={labelClass}>Passport Available</label>
                            <select name="passport" value={values.passport} onChange={handleChange} className={inputClass('passport')}>
                              <option value="">Select</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass}>Willing to Travel Abroad</label>
                            <select name="travelAbroad" value={values.travelAbroad} onChange={handleChange} className={inputClass('travelAbroad')}>
                              <option value="">Select</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass}>Physical Fitness Level</label>
                            <select name="fitness" value={values.fitness} onChange={handleChange} className={inputClass('fitness')}>
                              <option value="">Select Level</option>
                              <option value="Excellent">Excellent</option>
                              <option value="Good">Good</option>
                              <option value="Average">Average</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </motion.section>
                  )}
                </AnimatePresence>

                {/* 5. ADDRESS DETAILS */}
                <section>
                  <h3 className="text-xl font-semibold text-blue-100 mb-6 flex items-center gap-3 border-b border-blue-500/10 pb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 text-cyan-400 text-sm">{values.program === 'Seafarer Training' ? '5' : '4'}</span>
                    Address Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className={labelClass}>City</label>
                      <input type="text" name="city" value={values.city} onChange={handleChange} className={inputClass('city')} placeholder="Your City" />
                    </div>
                    <div>
                      <label className={labelClass}>State</label>
                      <input type="text" name="state" value={values.state} onChange={handleChange} className={inputClass('state')} placeholder="Your State" />
                    </div>
                    <div>
                      <label className={labelClass}>Country</label>
                      <input type="text" name="country" value={values.country} onChange={handleChange} className={inputClass('country')} placeholder="Your Country" />
                    </div>
                  </div>
                </section>

                {/* 6. ADDITIONAL */}
                <section>
                  <h3 className="text-xl font-semibold text-blue-100 mb-6 flex items-center gap-3 border-b border-blue-500/10 pb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 text-cyan-400 text-sm">{values.program === 'Seafarer Training' ? '6' : '5'}</span>
                    Additional Info
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className={labelClass}>Message / Notes</label>
                      <textarea 
                        name="message" value={values.message} onChange={handleChange} rows={4} 
                        className={`${inputClass('message')} resize-none`} placeholder="Any specific questions or details you'd like to share..." 
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Upload Documents (Optional)</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-blue-500/20 border-dashed rounded-xl hover:bg-blue-500/5 hover:border-blue-500/40 transition-colors">
                        <div className="space-y-2 text-center flex flex-col items-center">
                          <svg className="mx-auto h-12 w-12 text-blue-300/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                          </svg>
                          <div className="flex text-sm text-blue-300 justify-center">
                            <label className="relative cursor-pointer rounded-md font-medium text-cyan-400 hover:text-cyan-300 focus-within:outline-none">
                              <span>Upload a file</span>
                              <input type="file" name="document" onChange={handleChange} className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-blue-300/60">PDF, PNG, JPG up to 10MB</p>
                          {values.document && <p className="text-sm text-cyan-300 mt-2">Selected: {values.document.name}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 7. CONSENT */}
                <section className="bg-blue-950/30 p-5 rounded-2xl border border-blue-500/10">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="flex items-center h-6 mt-0.5">
                      <input
                        type="checkbox" name="consent" checked={values.consent} onChange={handleChange}
                        className="w-5 h-5 border-2 border-blue-500/50 rounded bg-[#0a0f1c] text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0 focus:ring-2 cursor-pointer transition-all group-hover:border-cyan-400"
                      />
                    </div>
                    <div className="text-sm text-blue-200/90">
                      I agree to the <span className="text-cyan-400 hover:underline">Terms and Conditions</span> and <span className="text-cyan-400 hover:underline">Privacy Policy</span>. I certify that the information provided is correct to the best of my knowledge.
                      <ErrorMsg name="consent" />
                    </div>
                  </label>
                </section>

                {/* SUBMIT BUTTON */}
                <div className="pt-6 border-t border-blue-500/20">
                  <button
                    type="submit"
                    disabled={isSubmitting || Object.keys(errors).length > 0}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing Application...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
