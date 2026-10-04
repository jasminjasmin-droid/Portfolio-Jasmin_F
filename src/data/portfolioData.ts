export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  highlight?: string;
  status?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  focusAreas: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  subtitle: string;
  event: string;
  badge: string;
  description?: string;
}

export interface InternshipItem {
  id: string;
  role: string;
  company: string;
  type: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  details?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  role: string;
  description: string;
  tag: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Jasmin F.",
    fullName: "Jasmin F.",
    shortName: "Jasmin",
    tagline: "LEARNING • BUILDING • GROWING",
    heroSubtitle: "Learning. Building. Growing.",
    heroSummary:
      "Computer Science undergraduate with a strong foundation in technology, AI exploration, and hands-on leadership. IEEE Student Branch Chairperson passionate about building products, organizing technical initiatives, and creating solutions that matter.",
    profileImage: "/images/profile.jpg",
    resumeUrl: "/resume.pdf",
    email: "jasminmalliha@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/jasmin-f",
    linkedinHandle: "linkedin.com/in/jasmin-f",
    githubUrl: "https://github.com/jasminjasmin-droid",
    githubHandle: "jasminjasmin-droid",
    statusBadge: "IEEE Chairperson • Student Builder",
  },

  about: {
    heading: "A little about me",
    paragraphs: [
      "I am a Computer Science undergraduate at DMI Engineering College with a strong technical foundation and hands-on experience in leadership, community engagement, and presentations. My journey is driven by learning through building—transforming ideas into practical full-stack and AI applications.",
      "As IEEE Student Branch Chairperson and Petition Initiator (STB1139A), NexBuildOn Community Manager for Tamil Nadu, and GeeksforGeeks Campus Mantri, I lead cross-functional teams, coordinate technical symposiums, and foster collaborative environments for aspiring developers.",
      "I am deeply curious about AI/ML, local LLMs, and software engineering, as well as client relationship building and understanding user needs to contribute to technology-driven growth.",
    ],
    attributes: [
      {
        title: "Hands-on Builder",
        desc: "Architecting software like SkillMesh, CivicPulse, and Minizo-Chatbot with clean code and modern frameworks.",
      },
      {
        title: "AI & Tech Explorer",
        desc: "Exploring local LLM pipelines, prompt security, and practical machine learning applications.",
      },
      {
        title: "Leadership & Community",
        desc: "Chairperson of IEEE Student Branch, GFG Campus Mantri, and organizer of tech hackathons and workshops.",
      },
    ],
  },

  education: [
    {
      institution: "DMI Engineering College",
      degree: "B.E. Computer Science and Engineering",
      details: "Undergraduate Program",
    },
    {
      institution: "SAV Balakrishna Matriculation Higher Secondary School",
      degree: "Higher Secondary & Secondary Education",
      details: "HSC: 92.1% | SSLC: 86.9%",
    },
  ] as EducationItem[],

  internships: [
    {
      id: "agile",
      role: "Staff Engineer Intern",
      company: "Agile Tribers",
      type: "Engineering Internship",
    },
    {
      id: "jclick",
      role: "Data Analytics Intern",
      company: "JClick Solutions",
      type: "Analytics Internship",
    },
    {
      id: "cognifyz",
      role: "Data Visualization Intern",
      company: "Cognifyz Technologies",
      type: "Visualization Internship",
    },
  ] as InternshipItem[],

  projects: [
    {
      id: "skillmesh",
      title: "Skill Mesh",
      tagline: "Peer-to-Peer Skill Matching & Exchange",
      description:
        "Built a platform connecting users based on skills, interests, and collaboration needs, with features focused on seamless communication and trust.",
      tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/jasminjasmin-droid/skillmesh",
      demoUrl: "https://skill-mesh.ai.studio/",
      highlight: "Peer-to-Peer Exchange",
    },
    {
      id: "civicpulse",
      title: "CivicPulse",
      tagline: "Civic Engagement Platform",
      description:
        "Developed a platform connecting citizens and authorities through structured digital workflows and role-based access for community issue resolution.",
      tags: ["React", "TypeScript", "Python", "SQL", "REST API"],
      githubUrl: "https://github.com/jasminjasmin-droid/civicpulse",
      highlight: "Civic Workflows",
    },
    {
      id: "minizo-chatbot",
      title: "Minizo-Chatbot",
      tagline: "AI Chatbot",
      description:
        "An intuitive conversational AI chatbot built with Python, Streamlit, and Google Gemini API, delivering responsive and context-aware conversational assistance for user queries.",
      tags: ["Python", "Streamlit", "Google Gemini API", "Generative AI", "LLMs"],
      githubUrl: "https://github.com/jasminjasmin-droid/minizo-chatbot",
      highlight: "Google Gemini API • Streamlit",
    },
    {
      id: "smart-parking",
      title: "Smart Vehicle Parking System",
      tagline: "Smart Parking / Vehicle Management Solution (Hardware)",
      description:
        "A practical hardware and sensor-driven vehicle management solution engineered for automated parking slot detection, real-time space monitoring, and streamlined parking flow.",
      tags: ["Hardware", "IoT", "Sensors", "Embedded Systems", "Automation"],
      githubUrl: "https://github.com/jasminjasmin-droid/smart-vehicle-parking",
      highlight: "Hardware & IoT",
    },
    {
      id: "nexora",
      title: "Nexora",
      tagline: "Skill Development & Collaboration Project Concept",
      description:
        "A forward-looking skill development and project collaboration platform concept designed to empower students and developer communities to learn by building together.",
      tags: ["React", "TypeScript", "Skill Development", "Collaboration", "Concept"],
      githubUrl: "https://github.com/jasminjasmin-droid/nexora",
      highlight: "Concept Roadmap",
      status: "In Progress",
    },
  ] as Project[],

  skills: [
    {
      category: "Technical Skills",
      items: ["Python", "C Programming", "SQL", "Generative AI & LLMs", "Google Gemini API", "Streamlit", "Git & GitHub", "React", "TypeScript", "FastAPI", "PostgreSQL", "HTML", "CSS", "Flutter", "Ollama"],
    },
    {
      category: "Professional & Interpersonal",
      items: ["Communication & Presentation", "Client Relationship Building", "Stakeholder Management", "Negotiation & Persuasion", "Team Leadership"],
    },
  ] as SkillCategory[],

  allSkills: [
    "Python",
    "C Programming",
    "SQL",
    "Generative AI & LLMs",
    "Google Gemini API",
    "Streamlit",
    "Git & GitHub",
    "React",
    "TypeScript",
    "FastAPI",
    "PostgreSQL",
    "Flutter",
    "Ollama / Local LLMs",
    "Team Leadership",
    "Communication & Presentation",
    "Client Relationship Building",
    "Stakeholder Management",
  ],

  journey: [
    {
      year: "2024",
      title: "Engineering Foundations & First Competitive Win",
      description:
        "Began Computer Science engineering journey at DMI Engineering College, building strong fundamentals in C programming, computational logic, and winning 1st Prize in Hack-A-Math 2024.",
      focusAreas: [
        "C Programming & Core Logic",
        "Hack-A-Math 2024 (1st Prize)",
        "Data Structures Fundamentals",
        "Campus Technical Participation",
      ],
    },
    {
      year: "2025",
      title: "Ideathons, Public Speaking & Community Initiatives",
      description:
        "Expanded into software projects, full-stack concepts, and leadership. Secured 2nd Place in Ideathon ’25, won Voice of DMI ’25, and presented technical research papers.",
      focusAreas: [
        "Ideathon ’25 (2nd Place)",
        "Voice of DMI ’25 (Winner)",
        "3rd Prize Paper Presentation (Arunachala College)",
        "NexBuildOn & Early Internships",
      ],
    },
    {
      year: "2026",
      title: "IEEE Branch Leadership, Generative AI & Global Hackathons",
      description:
        "Spearheading IEEE Student Branch (STB1139A) as Chairperson, GFG Campus Mantri, competing globally in DoraHacks (Top 100), and winning 1st Prize at Innovate ’26 24-hour hackathon.",
      focusAreas: [
        "DoraHacks International (Top 100 Product)",
        "Innovate ’26 24h Hackathon (1st Prize)",
        "Kerala Police Hackathon Hack'P 26 (Selected)",
        "IEEE Student Branch Chairperson & Petition Initiator",
      ],
    },
  ] as JourneyMilestone[],

  // Hackathons & Competition Recognitions
  competitionsAndAwards: [
    {
      id: "dorahacks",
      title: "Top 100 Product",
      subtitle: "DoraHacks International Hackathon",
      event: "DoraHacks International",
      badge: "Global Top 100",
      description: "Selected from 500+ submitted products globally in international Web3/AI hackathon.",
    },
    {
      id: "innovate26",
      title: "1st Prize",
      subtitle: "Innovate ’26, 24-Hour Hackathon",
      event: "KCG College of Technology",
      badge: "1st Prize",
      description: "Won 1st prize in high-intensity 24-hour hackathon for building a functional tech solution.",
    },
    {
      id: "hackamath",
      title: "1st Prize",
      subtitle: "Hack-A-Math 2024",
      event: "DMI Engineering College",
      badge: "1st Prize",
      description: "Secured 1st place in algorithmic problem solving and computational math challenge.",
    },
    {
      id: "ideathon25",
      title: "2nd Place",
      subtitle: "Ideathon ’25",
      event: "DMI Engineering College",
      badge: "2nd Place",
      description: "Awarded 2nd place for innovative concept design, feasibility, and technical presentation.",
    },
    {
      id: "hackp26",
      title: "Selected Participant",
      subtitle: "Kerala Police Hackathon Hack'P 26",
      event: "Kerala Police Cyberdome",
      badge: "Shortlisted",
      description: "Shortlisted and selected participant for premier state cyber & police tech hackathon.",
    },
    {
      id: "voice-dmi",
      title: "Winner",
      subtitle: "Voice of DMI ’25",
      event: "DMI Engineering College",
      badge: "Winner",
      description: "Recognized as Winner for public speaking, communication, and persuasive presentation.",
    },
    {
      id: "paper-pres",
      title: "3rd Prize",
      subtitle: "Paper Presentation",
      event: "Arunachala College of Engineering",
      badge: "3rd Prize",
      description: "Awarded 3rd prize for research paper presentation at technical conference.",
    },
  ] as AwardItem[],

  // Leadership & Community Involvement
  leadershipExperience: [
    {
      id: "ieee-chair",
      title: "IEEE Student Branch Chairperson & Petition Initiator",
      role: "STB1139A — Organizer of Technical Events",
      description:
        "Initiated the petition for branch revival, leading branch operations, team coordination, workshops, and student engineering initiatives.",
      tag: "IEEE Leadership",
    },
    {
      id: "nexbuildon",
      title: "NexBuildOn",
      role: "Community Manager, for Tamil Nadu",
      description:
        "Directing developer community engagement, regional events, and student outreach across Tamil Nadu.",
      tag: "Community Manager",
    },
    {
      id: "gfg",
      title: "GeeksforGeeks Campus Mantri",
      role: "DMI Engineering College",
      description:
        "Campus ambassador fostering coding culture, competitive programming contests, and data structure workshops.",
      tag: "Campus Mantri",
    },
    {
      id: "internshala",
      title: "Internshala Student Partner",
      role: "Student Partner",
      description:
        "Guiding students through professional skill development, internship opportunities, and career roadmaps.",
      tag: "Student Partner",
    },
    {
      id: "ieee-ambassador",
      title: "IEEE Day 2026 Ambassador",
      role: "Ambassador",
      description:
        "Representing international IEEE Day celebrations, promoting STEM values, and rallying student participation.",
      tag: "Ambassador",
    },
  ],
};
