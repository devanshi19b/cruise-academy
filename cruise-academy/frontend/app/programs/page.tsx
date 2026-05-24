import Programs from '@/components/Programs';
import Footer from '@/components/Footer';

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20 pb-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Programs</h1>
          <p className="text-xl text-gray-600">
            Comprehensive education and career solutions tailored to your aspirations.
          </p>
        </div>
      </div>
      <Programs />
      <Footer />
    </div>
  );
}