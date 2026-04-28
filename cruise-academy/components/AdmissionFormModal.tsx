'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { contactDetails } from '@/lib/contact';
// Note: Requires installation if not present: npm install react-hook-form
// import { useForm } from 'react-hook-form'; 
// Using built-in state for zero-dependency seamless drop-in, while maintaining RHF-like structure.

interface AdmissionFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormValues {
  name: string;
  fatherName: string;
  motherName: string;
  dob: string;
  aadhar: string;
  category: string;
  caste: string;
  religion: string;
  sex: string;
  address: string;
  phoneOffice: string;
  phoneRes: string;
  motherTongue: string;
  nationality: string;
  hobbyA: string;
  hobbyB: string;
  specialInterest: string;
  acceptedTerms: boolean;
  photo: File | null;
}

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function AdmissionFormModal({ isOpen, onClose }: AdmissionFormModalProps) {
  const [formData, setFormData] = useState<FormValues>({
    name: '', fatherName: '', motherName: '', dob: '', aadhar: '',
    category: '', caste: '', religion: '', sex: '', address: '',
    phoneOffice: '', phoneRes: '', motherTongue: '', nationality: '',
    hobbyA: '', hobbyB: '', specialInterest: '', acceptedTerms: false,
    photo: null
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showScroll, setShowScroll] = useState(true);

  // Auto-prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setShowScroll(true);

    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      const files = (e.target as HTMLInputElement).files;
      setFormData(prev => ({ ...prev, [name]: files && files.length > 0 ? files[0] : null }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof FormValues]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.fatherName.trim()) newErrors.fatherName = 'Father\'s Name is required';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';

    if (!formData.aadhar.trim()) {
      newErrors.aadhar = 'Aadhaar is required';
    } else if (!/^\d{12}$/.test(formData.aadhar.trim())) {
      newErrors.aadhar = 'Aadhaar must be exactly 12 digits';
    }

    if (!formData.sex) newErrors.sex = 'Gender selection is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';

    if (!formData.phoneOffice.trim() && !formData.phoneRes.trim()) {
      newErrors.phoneOffice = 'At least one phone number is required';
    }

    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Small vibration or scroll to error conceptually
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      console.log('Form submission successful', formData);
      setIsSubmitting(false);
      setIsSuccess(true);

      // Auto close after showing success
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        // Reset form
        setFormData({
          name: '', fatherName: '', motherName: '', dob: '', aadhar: '',
          category: '', caste: '', religion: '', sex: '', address: '',
          phoneOffice: '', phoneRes: '', motherTongue: '', nationality: '',
          hobbyA: '', hobbyB: '', specialInterest: '', acceptedTerms: false, photo: null
        });
      }, 3000);
    }, 1500);
  };

  const inputClasses = (name: keyof FormValues) => `
    w-full bg-white border rounded-lg px-4 py-2.5 text-gray-800 
    focus:outline-none focus:ring-2 transition-all duration-200 placeholder:text-gray-400
    ${errors[name]
      ? 'border-red-400 focus:border-red-400 focus:ring-red-100 bg-red-50/30'
      : 'border-gray-200 hover:border-blue-300 focus:border-blue-500 focus:ring-blue-100'}
  `;

  const labelClasses = "block text-sm font-semibold text-gray-700 mb-1.5";

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="modal-scroll-container"
          className="fixed inset-0 z-[100] overflow-y-auto"
          data-lenis-prevent="true"
          onScroll={(e) => {
            const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop <= e.currentTarget.clientHeight + 100;
            setShowScroll(!bottom);
          }}
        >
          <div className="min-h-full flex items-center justify-center p-2 sm:p-4 py-8 relative">

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden"
            >

              {/* Header space */}
              <div className="h-4 bg-blue-900 w-full"></div>

              {/* Top Action Bar (Close button) */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200 p-2 rounded-full transition-colors"
                >
                  <CloseIcon />
                </button>
              </div>

              {isSuccess ? (
                <div className="p-16 flex flex-col items-center justify-center text-center h-full min-h-[500px]">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
                  <p className="text-gray-500">Thank you for applying to Shrivastava Group of Institutes.</p>
                </div>
              ) : (
                <div className="p-6 sm:p-10">

                  {/* HEADER SECTION - Simplified since logo moved to banner */}
                  <div className="flex flex-col md:flex-row items-center justify-between border-b pb-8 mb-8 gap-6 relative">

                    {/* Institute Details */}
                    <div className="flex-1 text-center md:text-left">
                      <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 uppercase tracking-wide">
                        Shrivastava Group of Institutes
                      </h1>
                      <div className="text-sm text-gray-600 flex flex-col gap-1">
                        <p className="flex items-center gap-2">
                          <span className="font-semibold text-blue-800">Phone:</span> {contactDetails.phoneDisplay}
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="font-semibold text-blue-800">Email:</span> {contactDetails.email}
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="font-semibold text-blue-800">Address:</span> {contactDetails.address}
                        </p>
                      </div>
                    </div>

                    {/* Logo area */}
                    <div className="shrink-0 mb-4 md:mb-0">
                      <Image
                        src="/images/logo-transparent.png"
                        alt="Institute Logo"
                        width={100}
                        height={100}
                        className="h-20 md:h-24 w-auto object-contain"
                      />
                    </div>

                  </div>

                  {/* FORM TITLE */}
                  <div className="flex justify-center mb-10">
                    <div className="inline-block border-2 border-blue-900 bg-white px-8 py-2">
                      <h2 className="text-2xl font-bold text-gray-900 tracking-wider">Admission Form</h2>
                    </div>
                  </div>

                  {/* MAIN FORM */}
                  <form id="traditional-admission" onSubmit={handleSubmit} className="space-y-8" noValidate>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                      <div className="md:col-span-2">
                        <label className={labelClasses}>1. Name (Master/Miss)</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClasses('name')} placeholder="Full Name" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>

                      <div className="md:col-span-1">
                        <label className={labelClasses}>2. Father&apos;s Name</label>
                        <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} className={inputClasses('fatherName')} placeholder="Father's Full Name" />
                        {errors.fatherName && <p className="text-red-500 text-xs mt-1">{errors.fatherName}</p>}
                      </div>

                      <div className="md:col-span-1">
                        <label className={labelClasses}>3. Mother&apos;s Name</label>
                        <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} className={inputClasses('motherName')} placeholder="Mother's Full Name" />
                      </div>

                      <div className="md:col-span-1">
                        <label className={labelClasses}>4. Date of Birth</label>
                        <input type="date" name="dob" value={formData.dob} onChange={handleChange} className={inputClasses('dob')} />
                        {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
                      </div>

                      <div className="md:col-span-1">
                        <label className={labelClasses}>5. Aadhar Card No.</label>
                        <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} className={inputClasses('aadhar')} placeholder="12-digit Number" maxLength={12} />
                        {errors.aadhar && <p className="text-red-500 text-xs mt-1">{errors.aadhar}</p>}
                      </div>

                      <div className="md:col-span-1">
                        <label className={labelClasses}>6. Category</label>
                        <select name="category" value={formData.category} onChange={handleChange} className={inputClasses('category')}>
                          <option value="">Select Category</option>
                          <option value="SC">SC</option>
                          <option value="ST">ST</option>
                          <option value="OBC">OBC</option>
                          <option value="General">General</option>
                        </select>
                      </div>

                      <div className="md:col-span-1">
                        <label className={labelClasses}>7. Caste</label>
                        <input type="text" name="caste" value={formData.caste} onChange={handleChange} className={inputClasses('caste')} placeholder="Your Caste" />
                      </div>

                      <div className="md:col-span-1">
                        <label className={labelClasses}>8. Religion</label>
                        <input type="text" name="religion" value={formData.religion} onChange={handleChange} className={inputClasses('religion')} placeholder="Your Religion" />
                      </div>

                      <div className="md:col-span-1">
                        <label className={labelClasses}>9. Sex</label>
                        <div className="flex items-center gap-6 mt-2 ml-2">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="sex" value="Male" checked={formData.sex === 'Male'} onChange={handleChange} className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <span className="text-gray-700">Male</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="sex" value="Female" checked={formData.sex === 'Female'} onChange={handleChange} className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <span className="text-gray-700">Female</span>
                          </label>
                        </div>
                        {errors.sex && <p className="text-red-500 text-xs mt-2">{errors.sex}</p>}
                      </div>

                      <div className="md:col-span-2">
                        <label className={labelClasses}>10. Permanent Address</label>
                        <textarea name="address" value={formData.address} onChange={handleChange} rows={3} className={`${inputClasses('address')} resize-none`} placeholder="Complete Address Details" />
                        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                      </div>

                      <div className="md:col-span-1">
                        <label className={labelClasses}>11. Phone/Mobile No. (Office)</label>
                        <input type="tel" name="phoneOffice" value={formData.phoneOffice} onChange={handleChange} className={inputClasses('phoneOffice')} placeholder="+91" />
                        {errors.phoneOffice && <p className="text-red-500 text-xs mt-1">{errors.phoneOffice}</p>}
                      </div>

                      <div className="md:col-span-1">
                        <label className={labelClasses}>Phone/Mobile No. (Res.)</label>
                        <input type="tel" name="phoneRes" value={formData.phoneRes} onChange={handleChange} className={inputClasses('phoneRes')} placeholder="+91" />
                      </div>

                      <div className="md:col-span-1">
                        <label className={labelClasses}>12. Mother Tongue</label>
                        <input type="text" name="motherTongue" value={formData.motherTongue} onChange={handleChange} className={inputClasses('motherTongue')} placeholder="Your Mother Tongue" />
                      </div>

                      <div className="md:col-span-1">
                        <label className={labelClasses}>Nationality</label>
                        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} className={inputClasses('nationality')} placeholder="Your Nationality" />
                      </div>

                      <div className="md:col-span-2">
                        <label className={labelClasses}>13. Any two hobbies of your child</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500 font-medium">(a)</span>
                            <input type="text" name="hobbyA" value={formData.hobbyA} onChange={handleChange} className={inputClasses('hobbyA')} placeholder="First Hobby" />
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500 font-medium">(b)</span>
                            <input type="text" name="hobbyB" value={formData.hobbyB} onChange={handleChange} className={inputClasses('hobbyB')} placeholder="Second Hobby" />
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label className={labelClasses}>14. Special Interest</label>
                        <textarea name="specialInterest" value={formData.specialInterest} onChange={handleChange} rows={2} className={`${inputClasses('specialInterest')} resize-none`} placeholder="Any specific areas of interest..." />
                      </div>

                    </div>

                    {/* FOOTER & CONSENT */}
                    <div className="mt-10 border-2 border-gray-200 rounded-xl p-5 bg-gray-50">
                      <label className="flex items-start gap-4 cursor-pointer">
                        <div className="flex items-center h-6 mt-0.5">
                          <input
                            type="checkbox"
                            name="acceptedTerms"
                            checked={formData.acceptedTerms}
                            onChange={handleChange}
                            className="w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
                          />
                        </div>
                        <div className="text-sm text-gray-700">
                          <p className="font-semibold text-gray-900 mb-1">Note:</p>
                          <div className="space-y-1">
                            <p>1) I accept all terms created by institute.</p>
                            <p>2) Fees not refundable.</p>
                            <p>3) Institute show your photo and result for advertisement.</p>
                          </div>
                          {errors.acceptedTerms && <p className="text-red-500 mt-2 font-medium">{errors.acceptedTerms}</p>}
                        </div>
                      </label>
                    </div>

                    {/* SUBMIT BUTTONS */}
                    <div className="flex justify-end gap-4 pt-6 mt-6 border-t border-gray-200">
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-2.5 rounded-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-2.5 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[200px]"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          'Submit Form'
                        )}
                      </button>
                    </div>

                  </form>
                </div>
              )}
            </motion.div>

            {/* Scroll Down Button */}
            {!isSuccess && showScroll && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('modal-scroll-container')?.scrollBy({ top: typeof window !== 'undefined' ? window.innerHeight * 0.6 : 500, behavior: 'smooth' });
                }}
                className="fixed bottom-6 lg:bottom-10 right-6 lg:right-10 z-[110] bg-blue-600/90 backdrop-blur text-white p-3 sm:px-5 sm:py-3 rounded-full shadow-2xl hover:bg-blue-700 transition-all active:scale-95 animate-bounce flex items-center justify-center gap-2 border border-blue-400"
              >
                <span className="hidden sm:inline font-semibold tracking-wide">Scroll for full form</span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
              </motion.button>
            )}

          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
