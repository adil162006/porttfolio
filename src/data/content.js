// Source content drawn from Mohd Adil Shaikh's resume.
// Update CONTACT.linkedin / CONTACT.github with real profile URLs.

export const PROFILE = {
  name: 'Mohammed Adil Shaikh',
  role: 'Full-Stack Engineer',
  location: 'Mumbai, India',
  education: 'B.Tech, Computer Engineering — VESIT',
  cgpa: '9.46',
  status: 'Open to internships & freelance work',
  bio: "I'm a full-stack engineer studying Computer Engineering at VESIT, Mumbai — building across mobile, web, and backend, and shipping production software for real clients in between lectures.",
}

export const CONTACT = {
  email: 'shaikhmdadil191@gmail.com',
  phone: '+91 8097069099',
  linkedin: 'https://www.linkedin.com/in/mohammad-adil-shaikh-8a43b3320/', 
  github: 'https://github.com/adil162006', 
}

export const TECH_STACK = [
  'React',
  'Next.js',
  'Node.js',
  'Gemini',
  'React Native',
  'PostgreSQL',
]

export const PROJECTS = [
  {
    index: '01',
    title: 'Full-Stack E-Commerce App',
    year: '2026',
    tags: ['React Native', 'Expo', 'Node.js', 'Stripe', 'Clerk'],
    description:
      'A cross-platform mobile e-commerce app paired with a full admin dashboard for managing products and orders. Stripe and Clerk power secure checkout and real-time order tracking, with background jobs via Inngest and production monitoring through Sentry.',
    link: '#',
  },
  {
    index: '02',
    title: 'AI Mock Interview Platform',
    year: '2025',
    tags: ['React.js', 'Google Gemini', 'Monaco Editor', 'Stream.io'],
    description:
      'A mock interview platform that uses Google Gemini to generate personalised technical questions and structured feedback from a candidate\u2019s resume. Monaco Editor and the Piston API handle secure, multi-language code execution shared live across participants.',
    link: '#',
  },
  {
    index: '03',
    title: 'RAG Document Analyzer',
    year: '2025',
    tags: ['RAG', 'Accessibility', 'Document AI'],
    description:
      'A retrieval-augmented document analyzer built to help illiterate and visually impaired users understand written documents. Placed Top 20 of 400+ teams at the Hacquinox Hackathon, CSI FRCIT.',
    link: '#',
  },
  {
    index: '04',
    title: 'Inventory Management System',
    year: '2025',
    tags: ['Real-time', 'Multi-user', 'Hackathon Build'],
    description:
      'A real-time inventory system with live stock tracking, low-stock alerts, and multi-user role management — designed and shipped within a 24-hour hackathon window. Placed Top 5 of 80+ teams at Invictus Hackathon, ISTE VESIT.',
    link: '#',
  },
]

export const EXPERIENCE = [
  

  {
    period: 'Apr 2026 — May 2026',
    role: 'Freelance Full-Stack Developer',
    org: 'Seashore Enterprises',
    location: 'Remote',
    description:
      'Designed and built a Site Management Web App on Next.js 16 for an HVAC contracting firm, digitising paper-based workflows into a centralised financial dashboard with payment tracking, project lifecycle management, and a daily work-log system. Deployed on Vercel.',
  },
  {
    period: 'Dec 2025 — Jan 2026',
    role: 'Software Development Intern',
    org: 'SR Counselling India',
    location: 'Ghatkopar, Mumbai',
    description:
      'Built admin dashboard features for a visa application system, enabling real-time tracking of registrations and bookings. Designed and optimised REST APIs for user, booking, and document records, and integrated Resend for direct admin-to-user email.',
  },
  {
    period: 'OCT 2025 — APR 2026',
    role: 'SE Co-ordinator',
    org: 'IEEE VESIT Student Chapter',
    location: 'Mumbai, India',
    description:
      'Developed and maintain the IEEE VESIT website, hackathon platform, and CTF competition site using React and modern web tooling.',
  },
]

export const ACHIEVEMENTS = [
  {
    label: 'CGPA',
    value: '9.46 / 10',
    detail: 'B.Tech Computer Engineering, VESIT',
  },
  {
    label: 'Invictus Hackathon',
    value: 'Top 5',
    detail: 'of 80+ teams — ISTE VESIT',
  },
  {
    label: 'Hacquinox Hackathon',
    value: 'Top 20',
    detail: 'of 400+ teams — CSI FRCIT',
  },
]

export const SKILLS = [
  {
    group: 'Languages',
    items: ['JavaScript', 'Python', 'Java', 'SQL'],
  },
  {
    group: 'Frontend',
    items: ['React', 'React Native', 'Next.js', 'Tailwind CSS', 'Expo', 'Lucide React'],
  },
  {
    group: 'Backend',
    items: [ 'Express.js', 'FASTAPI', 'REST APIs'],
  },
  {
    group: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    group: 'AI & Integrations',
    items: ['Gemini API', 'Stripe', 'Clerk', 'Inngest', 'Stream.io'],
  },
  {
    group: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'Sentry', 'TanStack Query', 'Vercel'],
  },
]
