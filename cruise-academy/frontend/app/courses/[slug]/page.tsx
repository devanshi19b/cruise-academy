import { courses } from '@/lib/courses-data';
import CourseDetailClient from '@/components/CourseDetailClient';
import Link from 'next/link';

export async function generateStaticParams() {
  const paths: { slug: string }[] = [];
  courses.forEach(course => {
    paths.push({ slug: course.id });
    paths.push({ slug: course.slug });
  });
  return paths;
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((c) => c.id === slug || c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-[#050b14] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-cyan-400 hover:underline flex items-center gap-2 justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Explore Programs
          </Link>
        </div>
      </div>
    );
  }

  return <CourseDetailClient course={course} />;
}
