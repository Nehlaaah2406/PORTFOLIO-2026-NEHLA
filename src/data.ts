import { Project, Experience, SkillCategory, Certificate } from "./types";

export const projects: Project[] = [
  {
    id: "stopzap",
    title: "StopZap",
    subtitle: "Smart Commuting with Real-Time Safety",
    tagline: "A GPS-powered Progressive Web App providing a safer, more reliable daily transit experience with proximity alarms.",
    overview: "StopZap is an intelligent geolocation-based Progressive Web App designed to enhance daily commuting. It tracks device coordinates in real time, alerting passengers with high-volume acoustic and haptic proximity alarms before reaching their selected transit stop. It integrates emergency SOS signals, offline capability, and AI-assisted travel support to ensure a secure, stress-free travel experience.",
    problem: "Commuters frequently miss their stops on public buses or trains due to sleep, distraction, or unfamiliar routes, resulting in wasted time, anxiety, and safety vulnerabilities.",
    solution: "StopZap utilizes HTML5 Geolocation APIs and custom distance monitoring algorithms within an offline-capable Progressive Web App wrapper. It guarantees low-latency GPS wakeups, loud alerts, and custom geofencing triggers to alert commuters in advance.",
    features: [
      "Destination Proximity Alerts: High-accuracy acoustic and haptic warnings when approaching selected stops.",
      "Live GPS Tracking: Real-time coordinate and route visualization on lightweight interactive maps.",
      "Emergency SOS Support: Immediate alert links, location sharing, and emergency status panels.",
      "Progressive Web App (PWA): Full offline capability, home screen installation, and low-battery background tracking."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Leaflet.js", "PWA", "Geolocation API"],
    image: "/src/assets/images/stopzap_app_1783618190151.jpg",
    gallery: [
      "/src/assets/images/stopzap_app_1783618190151.jpg",
      "https://picsum.photos/seed/stopzap1/800/600"
    ],
    liveUrl: "https://stopzap.vercel.app",
    githubUrl: "https://github.com/Nehlaaah240"
  },
  {
    id: "kif-website",
    title: "Kerala Innovation Festival",
    subtitle: "Innovation Meets Digital Experience",
    tagline: "A modern, immersive, and responsive website developed for the Kerala Innovation Festival (KIF) showcasing tech spotlights.",
    overview: "Developed as the official web interface for the Kerala Innovation Festival, this modern, responsive web application showcases event highlights, innovation pillars, programs, and community engagement. Built to handle high traffic and multiple interactive sessions, it presents complex details in an immersive, high-performance layout.",
    problem: "Flagship technology festivals require highly engaging, dynamic digital touchpoints to capture registrations, present complex multi-track timetables, and spotlight startups without friction.",
    solution: "Designed a high-fidelity responsive interface in Figma and translated it into functional code. Features smooth event schedules, modular startup spotlights, and frictionless registration funnels developed with Next.js, React, and Framer Motion for premium, lag-free animations.",
    features: [
      "Interactive Program Schedules: Fluid tabbed schedules to browse workshops, speakers, panels, and timing blocks.",
      "Startup Spotlight Showcase: Immersive modular showcase grids highlighting top participating technological innovators.",
      "Community Engagement Portals: Rich, visual interactive highlights to foster user connection and registrations.",
      "Premium Design System: Symmetrical grid overlays, bold typography, and smooth transitions that reflect a forward-looking identity."
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: "/src/assets/images/kif_website_1783618212503.jpg",
    gallery: [
      "/src/assets/images/kif_website_1783618212503.jpg",
      "https://picsum.photos/seed/kif1/800/600"
    ],
    liveUrl: "https://kif-eight.vercel.app",
    githubUrl: "https://github.com/Nehlaaah240"
  },
  {
    id: "sset-lumina",
    title: "SSET Lumina",
    subtitle: "Transforming Academic Research Management",
    tagline: "A MERN-based faculty publication management platform centralizing research papers and departmental statistics.",
    overview: "SSET Lumina is a comprehensive MERN-based faculty publication management platform. It centralizes academic publications, streamlines research documentation, and provides secure search, detailed department analytics, and robust administrative tools for educational institutions.",
    problem: "Academic departments struggle with manual tracking of faculty research, leading to fragmented databases, disorganized archives, and slow report generation during audits.",
    solution: "SSET Lumina aggregates academic papers into a secure, searchable, and centralized MongoDB database. It includes a smart DOI-validated upload wizard, role-based access control with JWT authentication, and interactive analytics to view departmental research trends.",
    features: [
      "Centralized Research Registry: Ingestion and DOI indexing of publications, journals, and project grants.",
      "JWT Secured Multi-Role Access: Secure portal pages for standard faculty uploads and administrative approvals.",
      "Interactive Analytics Dashboard: Detailed charts and counts illustrating research outputs per department.",
      "Pre-Configured Guest Login: Instant testing using email: guest@college.edu and password: GuestPassword123!."
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT Authentication"],
    image: "/src/assets/images/faculty_research_1783618227116.jpg",
    gallery: [
      "/src/assets/images/faculty_research_1783618227116.jpg",
      "https://picsum.photos/seed/faculty1/800/600"
    ],
    liveUrl: "https://ssetlumina.vercel.app",
    githubUrl: "https://github.com/Nehlaaah240"
  },
  {
    id: "wakeup-warrior",
    title: "WakeUpWarrior",
    subtitle: "An Alarm That Keeps You Awake",
    tagline: "A creative web-based alarm application that forces users to clap or solve a keyboard challenge to dismiss.",
    overview: "WakeUpWarrior is a creative, gamified web-based alarm application. Unlike traditional alarms that are easily snoozed, it requires active cognitive or physical interaction — such as detecting loud handclaps or solving speed-reaction keyboard challenges — before it can be dismissed.",
    problem: "Traditional alarms fail to guarantee actual physical or mental wakefulness, leading to accidental snooze clicks and oversleeping.",
    solution: "By leveraging the Web Audio API to analyze audio input decibel peaks for clap recognition and building interactive quick-reaction typing challenges, WakeUpWarrior ensures the user is fully alert.",
    features: [
      "Acoustic Clap Recognition: Real-time decibel peak checking via Web Audio API to detect loud handclaps.",
      "Cognitive Quick-Type Challenges: Interactive speed-typing reaction puzzles that must be solved under time limits.",
      "MediaDevices Integration: Secure, browser-native microphone analysis with zero cloud server data transmission.",
      "Interactive Dashboard: A beautifully crafted game-like interface with dynamic audio frequency visualizers."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Web Audio API", "MediaDevices API"],
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800"
    ],
    liveUrl: "https://useless-alarm.vercel.app",
    githubUrl: "https://github.com/Nehlaaah240"
  },
  {
    id: "busify-kerala",
    title: "Busify Kerala",
    subtitle: "Simplifying Public Transportation",
    tagline: "A responsive web application helping users explore and navigate bus routes and travel schedules.",
    overview: "Busify Kerala is a responsive web application designed to simplify and improve the public transportation experience in Kerala. It provides a lightweight, zero-overhead directory helping users easily explore routes, timings, and schedules through a highly intuitive interface.",
    problem: "Public bus routes and timing sheets are often unavailable online or stored in scattered, non-responsive formats that are hard to read on mobile devices while traveling.",
    solution: "Created a mobile-first, high-performance web dashboard that indexes bus routes and timing tables into an instantly searchable format, requiring minimal data usage and zero native app downloads.",
    features: [
      "Instant Route Lookup: Instantly locate bus numbers, route stops, and destination points.",
      "Time Schedule Tables: Highly organized tables displaying arrival, departure, and frequency intervals.",
      "Mobile-First Layout: Optimized touch targets and compact layouts for seamless access on shaky buses.",
      "Zero-Overhead Interface: Lightweight HTML/CSS/JS with lightning-fast load times even under 2G networks."
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800"
    ],
    liveUrl: "https://busify-kerala.vercel.app",
    githubUrl: "https://github.com/Nehlaaah240"
  }
];

export const experiences: Experience[] = [
  {
    id: "ksum",
    role: "UI/UX Intern",
    company: "Kerala Startup Mission (KSUM), Kalamassery",
    duration: "1 Month",
    description: "Designed the user experience and interface blueprints for the Kerala Innovation Festival (KIF) official platform, ensuring accessibility and high aesthetic standards.",
    achievements: [
      "Designed UI/UX for the Kerala Innovation Festival (KIF) website using Figma.",
      "Created modular wireframes, interactive user flows, and responsive web interfaces."
    ]
  },
  {
    id: "nest",
    role: "Power BI Intern",
    company: "Nest Electronics, Kalamassery",
    duration: "Professional Internship",
    description: "Collaborated with business analysts to process corporate data feeds and build actionable interactive dashboards for reporting.",
    achievements: [
      "Analyzed dense business data streams and optimized visual reporting techniques in Power BI.",
      "Created highly customized reports with real-time data insights to aid strategic executive decisions."
    ]
  },
  {
    id: "icta",
    role: "MERN Full-Stack Intern",
    company: "ICT Academy, Infopark Koratty",
    duration: "Technical Training Internship",
    description: "Engaged in comprehensive full-stack development, building modern web architectures using MongoDB, Express.js, React, and Node.js.",
    achievements: [
      "Acquired hands-on proficiency in full-stack basics using MongoDB, Express.js, React, and Node.js.",
      "Developed, tested, and deployed a basic web application as part of the core graduation project."
    ]
  },
  {
    id: "cognifyz",
    role: "UI/UX Design Intern",
    company: "Cognifyz Technologies",
    duration: "Design Internship",
    description: "Learned product design lifecycles, user empathy mapping, and interactive component state guidelines.",
    achievements: [
      "Worked extensively on Figma, conducting user research and understanding interactive UI patterns.",
      "Developed a cohesive web application layout, validating layouts through high-fidelity interactive prototypes."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Technical Stack",
    skills: ["Power BI", "C++", "Python", "HTML", "Canva", "Express.js", "React.js", "Node.js", "Figma"]
  },
  {
    title: "People Skills",
    skills: ["Adaptability", "Team Work", "Time Management", "Problem Solving", "Collaboration", "Coordination"]
  }
];

export const certificates: Certificate[] = [
  {
    id: "iedc",
    title: "IEDC Bootcamp",
    issuer: "Innovation & Entrepreneurship Development Cell",
    date: "Participated",
    image: "https://picsum.photos/seed/iedc/600/400",
    credentialUrl: "https://github.com/Nehlaaah240"
  },
  {
    id: "icset",
    title: "Google Developers Workshop - ICSET",
    issuer: "Google Developers Workshop",
    date: "Gemini 3 Integration",
    image: "https://picsum.photos/seed/icset/600/400",
    credentialUrl: "https://github.com/Nehlaaah240"
  },
  {
    id: "hackathon",
    title: "Hackathon Participant",
    issuer: "Smart India Hackathon & ThinkerHub",
    date: "Multiple hackathons",
    image: "https://picsum.photos/seed/sihhack/600/400",
    credentialUrl: "https://github.com/Nehlaaah240"
  },
  {
    id: "nss",
    title: "NSS Volunteer",
    issuer: "National Service Scheme",
    date: "Active Service",
    image: "https://picsum.photos/seed/nssvolunteer/600/400",
    credentialUrl: "https://github.com/Nehlaaah240"
  },
  {
    id: "ima",
    title: "Volunteer & Event Coordinator",
    issuer: "Indian Medical Association (IMA)",
    date: "Event Coordination",
    image: "https://picsum.photos/seed/imavol/600/400",
    credentialUrl: "https://github.com/Nehlaaah240"
  }
];
