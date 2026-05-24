export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-maritime-careers",
    title: "The Future of Maritime Careers",
    excerpt: "Explore the growing opportunities in the seafaring industry and how to prepare for a career at sea.",
    author: "Capt. Rajesh Sharma",
    content: `
      <p>The maritime industry is undergoing a massive transformation. From autonomous ships to green propulsion technologies, the future of seafaring is both exciting and challenging. At Shrivastava Group of Institute, we stay ahead of these trends to ensure our students are ready for the global maritime landscape.</p>
      
      <h2>Why Choose a Maritime Career?</h2>
      <p>A career at sea offers more than just travel. it's a path to financial independence, professional growth, and global exposure. With the rising demand for skilled officers and crew, the industry offers some of the most competitive compensation packages globally.</p>
      
      <h2>Key Emerging Technologies</h2>
      <ul>
        <li><strong>Autonomous Vessels:</strong> Understanding AI and remote monitoring systems.</li>
        <li><strong>Sustainable Energy:</strong> Shift from fossil fuels to hydrogen and ammonia.</li>
        <li><strong>Digital Navigation:</strong> Advanced ECDIS and real-time data analytics.</li>
      </ul>
      
      <h2>Preparation is Key</h2>
      <p>Success in this field requires rigorous training and certification. Our programs are designed to meet international standards (STCW) while providing hands-on experience in modern simulators.</p>
    `,
    date: "April 15, 2026",
    readTime: "5 min read",
    category: "Careers"
  },
  {
    slug: "study-abroad-guide",
    title: "Study Abroad: A Complete Guide",
    excerpt: "Everything you need to know about pursuing higher education abroad, from visa processes to university selection.",
    author: "Ms. Anjali Verma",
    content: `
      <p>Dreaming of studying in the UK, USA, or Canada? The journey starts with the right information. This guide breaks down the essential steps to make your international education dreams a reality.</p>
      
      <h2>Step 1: Choosing the Right Destination</h2>
      <p>Different countries offer different advantages. While the USA is known for its research-intensive universities, Germany offers world-class technical education often at zero tuition fees.</p>
      
      <h2>Step 2: Entrance Exams</h2>
      <p>Depending on your course, you might need to take IELTS, TOEFL, GRE, or GMAT. We offer specialized coaching for all these exams at SGI.</p>
      
      <h2>Step 3: Financial Planning</h2>
      <p>Scholarships are available for deserving students. Understanding your budget and available funding options is crucial for a smooth experience.</p>
    `,
    date: "April 10, 2026",
    readTime: "8 min read",
    category: "Education"
  },
  {
    slug: "neet-2026-strategies",
    title: "NEET 2026: Preparation Strategies",
    excerpt: "Proven strategies and tips to excel in the National Eligibility cum Entrance Test.",
    author: "Dr. Vikram Shrivastava",
    content: `
      <p>The National Eligibility cum Entrance Test (NEET) is one of the most competitive exams in India. To succeed, you need a disciplined approach and a clear understanding of the core concepts.</p>
      
      <h2>The Importance of NCERT</h2>
      <p>Over 80% of biology questions in NEET are directly or indirectly linked to NCERT textbooks. Mastering these books is your first step to a top rank.</p>
      
      <h2>Time Management Tips</h2>
      <ul>
        <li>Solve at least 50 MCQs every day.</li>
        <li>Take full-length mock tests every weekend.</li>
        <li>Focus on Physics numericals to gain an edge over others.</li>
      </ul>
      
      <h2>Mental Wellbeing</h2>
      <p>Don't burn out. Take regular breaks and maintain a healthy sleep cycle. A refreshed mind retains information better.</p>
    `,
    date: "April 5, 2026",
    readTime: "6 min read",
    category: "Exams"
  }
];
