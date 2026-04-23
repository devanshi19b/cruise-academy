import About from '@/components/About';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20 pb-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About Shrivastava Group of Institute</h1>
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 text-center mb-12">
              Founded by Rohit Shrivastava, Shrivastava Group of Institute has been a beacon of educational excellence since 2014.
            </p>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
}