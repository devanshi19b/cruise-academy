import Footer from '@/components/Footer';
import Image from 'next/image';
import { contactDetails } from '@/lib/contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20 pb-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-4">
            <Image
              src={contactDetails.logoPath}
              alt="Shrivastava Group logo"
              width={120}
              height={164}
              className="h-auto w-24 rounded-md"
            />
          </div>
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📧</span>
                  <a href={`mailto:${contactDetails.email}`} className="break-all hover:text-blue-700 transition-colors">
                    {contactDetails.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📞</span>
                  <a href={`tel:${contactDetails.phoneHref}`} className="hover:text-blue-700 transition-colors">
                    {contactDetails.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">📍</span>
                  <span>{contactDetails.address}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">🌐</span>
                  <a href={contactDetails.websiteHref} target="_blank" rel="noreferrer" className="break-all hover:text-blue-700 transition-colors">
                    {contactDetails.websiteDisplay}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
