export interface CourseFeature {
  title: string;
  desc: string;
  icon: string;
}

export interface CourseStat {
  value: string;
  label: string;
}

export interface Course {
  id: string; // "course-1", "course-2", etc.
  slug: string; // "cruise-career-development", etc.
  title: string;
  badge: string;
  tagline: string;
  category: string;
  duration: string;
  features: CourseFeature[];
  benefits: string[];
  stats: CourseStat[];
  image: string; // for course icon/card decoration
  instructor: {
    name: string;
    role: string;
    bio: string;
    image: string;
  };
}

export const courses: Course[] = [
  {
    id: "course-1",
    slug: "cruise-career-development",
    title: "Cruise Career Development Programme",
    badge: "Flagship Academy Programme",
    category: "seafarer",
    duration: "3 Years",
    tagline: "Designed for 10th & 12th pass students looking to combine graduation with direct entry into the cruise industry.",
    image: "/images/real-ship.png",
    instructor: {
      name: "Mr. Rohit Shrivastava",
      role: "Founder & Managing Director",
      bio: "Leading Shrivastava Group since 2014 with a focus on holistic student development and global maritime career placement.",
      image: "/images/owner.png"
    },
    features: [
      { title: "Target Eligibility", desc: "Specially designed for 10th & 12th pass students.", icon: "eligibility" },
      { title: "Graduation Guidance", desc: "Complete guidance for graduation completion.", icon: "graduation" },
      { title: "Cruise Industry Prep", desc: "Professional preparation for the cruise industry.", icon: "prep" },
      { title: "Communication Skills", desc: "Personality development and communication training.", icon: "personality" },
      { title: "Mock Interviews", desc: "Interview preparation with mock interview sessions.", icon: "interviews" },
      { title: "Cruise Hospitality", desc: "Cruise hospitality and job-oriented training.", icon: "hospitality" },
      { title: "Career Documentation", desc: "Documentation and career guidance support.", icon: "documentation" },
      { title: "Placement Assistance", desc: "Placement assistance after programme completion.", icon: "placement" },
      { title: "Skill Development", desc: "Industry-ready skill development.", icon: "skills" },
      { title: "Sector Growth", desc: "Career growth opportunities in the cruise sector.", icon: "growth" }
    ],
    benefits: [
      "Graduation and career preparation together",
      "Professional interview support",
      "International cruise career opportunities",
      "Expert mentorship and guidance",
      "Placement-focused training model"
    ],
    stats: [
      { value: "100%", label: "Placement Support" },
      { value: "Grad + Job", label: "Dual Preparation" }
    ]
  },
  {
    id: "course-2",
    slug: "cruise-placement-preparation",
    title: "Cruise Placement Preparation Programme",
    badge: "Fast-Track Career Launcher",
    category: "engineering",
    duration: "6 Months",
    tagline: "Tailored specially for graduate pass-out candidates seeking rapid placement inside top-tier international cruise liners.",
    image: "/images/ship-3d.png",
    instructor: {
      name: "Mr. Rohit Shrivastava",
      role: "Founder & Managing Director",
      bio: "Leading Shrivastava Group since 2014 with a focus on holistic student development and global maritime career placement.",
      image: "/images/owner.png"
    },
    features: [
      { title: "Target Eligibility", desc: "Designed specially for graduate pass-out candidates.", icon: "eligibility" },
      { title: "Cruise Job Training", desc: "Professional training for cruise industry careers.", icon: "prep" },
      { title: "Communication Prep", desc: "Personality development and communication enhancement.", icon: "personality" },
      { title: "Practical Mock Exams", desc: "Interview preparation with practical mock sessions.", icon: "interviews" },
      { title: "Hospitality & Grooming", desc: "Grooming and hospitality training.", icon: "hospitality" },
      { title: "Skill Development", desc: "Industry-focused skill development programme.", icon: "skills" },
      { title: "Career Counseling", desc: "Career counseling and professional guidance.", icon: "graduation" },
      { title: "Documentation Support", desc: "Resume building and documentation support.", icon: "documentation" },
      { title: "Placement Assistance", desc: "Placement assistance for cruise job opportunities.", icon: "placement" },
      { title: "International Standards", desc: "Preparation according to international cruise industry standards.", icon: "growth" }
    ],
    benefits: [
      "Fast-track cruise career preparation",
      "Professional interview coaching",
      "Improved confidence and communication skills",
      "International placement opportunities",
      "Job-oriented practical training approach"
    ],
    stats: [
      { value: "6 Months", label: "Course Duration" },
      { value: "Global", label: "Industry Standards" }
    ]
  },
  {
    id: "course-3",
    slug: "cruise-career-upgrade",
    title: "Cruise Career Upgrade Programme",
    badge: "Professional Career Upgrade",
    category: "study_abroad",
    duration: "3 Months",
    tagline: "Specially structured for professionals currently working in hospitality/service jobs looking to upgrade to higher international salaries.",
    image: "/images/new-ship-3d.png",
    instructor: {
      name: "Mr. Rohit Shrivastava",
      role: "Founder & Managing Director",
      bio: "Leading Shrivastava Group since 2014 with a focus on holistic student development and global maritime career placement.",
      image: "/images/owner.png"
    },
    features: [
      { title: "Ideal Profile", desc: "For professionals already working in hospitality or service industry.", icon: "eligibility" },
      { title: "Salary Upgrade", desc: "Ideal for candidates looking for better salary opportunities.", icon: "growth" },
      { title: "Advanced Training", desc: "Advanced cruise industry training and skill enhancement.", icon: "prep" },
      { title: "Professional Grooming", desc: "Professional grooming and personality development.", icon: "personality" },
      { title: "Expert Interview Prep", desc: "Interview preparation with expert guidance.", icon: "interviews" },
      { title: "Customer Service", desc: "Communication and customer service improvement sessions.", icon: "hospitality" },
      { title: "Resume Optimization", desc: "Resume optimization and documentation support.", icon: "documentation" },
      { title: "Job Applications", desc: "Guidance for international cruise job applications.", icon: "graduation" },
      { title: "Upgrade Placements", desc: "Placement assistance for cruise industry opportunities.", icon: "placement" },
      { title: "Career Transition", desc: "Career transition support from local jobs to international cruise careers.", icon: "skills" }
    ],
    benefits: [
      "Opportunity for higher salary packages",
      "International career exposure",
      "Professional growth and career advancement",
      "Industry-standard training and preparation",
      "Better job opportunities in the cruise sector"
    ],
    stats: [
      { value: "2X-5X", label: "Salary Potential" },
      { value: "Global Shift", label: "Career Transition" }
    ]
  },
  {
    id: "course-4",
    slug: "germany-nursing-placement",
    title: "Germany Nursing Placement Program",
    badge: "European Career Program",
    category: "medical",
    duration: "8 Months",
    tagline: "Specifically designed for female nursing graduates looking to relocate and build a long-term medical career in Germany's healthcare sector.",
    image: "/images/cruise-hero.svg",
    instructor: {
      name: "Mr. Rohit Shrivastava",
      role: "Founder & Managing Director",
      bio: "Leading Shrivastava Group since 2014 with a focus on holistic student development and global career placements.",
      image: "/images/owner.png"
    },
    features: [
      { title: "Target Profile", desc: "For girls who have completed nursing and have practical experience.", icon: "eligibility" },
      { title: "Dual Location Model", desc: "Professional training in India (approx 8 months) before relocation.", icon: "calendar" },
      { title: "German Language", desc: "German language training program (A1 to B2 proficiency).", icon: "german" },
      { title: "German Care Standards", desc: "Patient care standards and protocols for Europe.", icon: "care" },
      { title: "Interview Prep", desc: "Rigorous German hospital interview preparation.", icon: "interviews" },
      { title: "Documentation", desc: "Complete documentation and visa application guidance.", icon: "documentation" },
      { title: "Cultural Training", desc: "Cultural and workplace training for Germany.", icon: "hospitality" },
      { title: "Assisted Relocation", desc: "Assisted interviews, visa process, and relocation support.", icon: "visa" },
      { title: "German Placement", desc: "Placement opportunities in Germany's healthcare sector.", icon: "placement" },
      { title: "Career Growth", desc: "Global exposure and long-term residency prospects in Europe.", icon: "growth" }
    ],
    benefits: [
      "Build an international nursing career in Europe",
      "Significantly better salary packages and global benefits",
      "Relocation and document translation assistance",
      "Cultural adaptation and local support in Germany",
      "Long-term professional growth in European healthcare"
    ],
    stats: [
      { value: "8 Months", label: "Preparation in India" },
      { value: "B2 level", label: "German Language" }
    ]
  }
];
