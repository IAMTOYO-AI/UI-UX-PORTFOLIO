export interface Skill {
  name: string;
  category: "technical" | "soft";
  icon?: string;
}

export const SKILLS: Skill[] = [
  { name: "Figma Expertise", category: "technical" },
  { name: "AI-Assisted Design Workflow", category: "technical" },
  { name: "Visual Branding & Identity Integration", category: "technical" },
  { name: "Webflow", category: "technical" },
  { name: "React", category: "technical" },
  { name: "Cross-Platform Design Thinking", category: "technical" },
  { name: "Accessibility Design (WCAG)", category: "technical" },
  { name: "UI Design Mastery", category: "technical" },
  { name: "UX Research & User Flows", category: "technical" },
  { name: "Design Systems", category: "technical" },
  { name: "Prototyping & Microinteractions", category: "technical" },
  { name: "Responsive & Mobile-First Design", category: "technical" },
  { name: "Frontend Understanding", category: "technical" },
  { name: "Product Thinking", category: "technical" },
  { name: "UX Analytics & Testing", category: "technical" },
  { name: "Information Architecture", category: "technical" },
  { name: "Developer Handoff Skills", category: "technical" },
  { name: "Collaboration Tools & Workflow Management", category: "technical" },
  { name: "Communication", category: "soft" },
  { name: "Leadership", category: "soft" },
  { name: "Problem Solving", category: "soft" },
  { name: "Empathy", category: "soft" },
  { name: "Creativity", category: "soft" },
  { name: "Critical Thinking", category: "soft" },
  { name: "Attention to Detail", category: "soft" },
  { name: "Adaptability", category: "soft" },
  { name: "Time Management", category: "soft" },
  { name: "Storytelling", category: "soft" },
  { name: "Emotional Intelligence", category: "soft" },
  { name: "Confidence", category: "soft" },
  { name: "Curiosity", category: "soft" },
  { name: "Patience", category: "soft" },
  { name: "Ownership Mentality", category: "soft" },
  { name: "Strategic Thinking", category: "soft" },
  { name: "Open-mindedness", category: "soft" },
  { name: "Resilience", category: "soft" }
];

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    outcome: string;
    stats?: { label: string; value: string }[];
    gallery?: string[];
    screens?: string[];
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO at EcoSphere",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    content: "Working with this designer was a game-changer for our platform. They didn't just design a UI; they crafted an entire ecosystem that our users love using every day."
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Product Lead at Nova Bank",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1740&auto=format&fit=crop",
    content: "The level of detail and intuition brought to the Nova Bank project was incredible. They have a rare ability to simplify complex financial logic into beautiful, accessible interfaces."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder of Lumina",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
    content: "Our smart home app feels decades ahead of the competition thanks to the innovative design work. Intuitive, fast, and visually stunning."
  }
];

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/designer",
  linkedin: "https://linkedin.com/in/designer",
  github: "https://github.com/designer",
  dribbble: "https://dribbble.com/designer",
  behance: "https://behance.net/designer"
};
export const PROJECTS: Project[] = [
  {
    id: "ecosphere",
    title: "FitNova",
    category: "Fitness App",
    description: "A comprehensive platform for tracking personal fitness progress, health goals, workouts, and community wellness challenges.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
    tags: ["UI/UX", "Fitness", "iOS",  "Health",  "Wellness",  "Excercise"],
    details: {
      challenge: "Users often feel overwhelmed by inconsistent fitness routines, complex workout planning, and lack of motivation to stay consistent due to minimal immediate feedback on their progress.",
      solution: "We designed a gamified fitness experience with real-time progress visualization through a 'Fit Arena' where users unlock levels, grow their avatar strength, and build streaks by completing workouts and health goals.",
      outcome: "Successfully increased user retention by 45% over the first three months of the beta launch, with over 75,000 workouts completed and a significant boost in daily active engagement through community challenges.",
      stats: [
        { label: "Retention", value: "+40%" },
        { label: "Active Users", value: "3k+" },
        { label: "Workouts Completed", value: "8k+" }
      ],
      screens: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1740&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1522542550221-31fd19255a7a?q=80&w=1740&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1715&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1740&auto=format&fit=crop"
      ]
    }
  },
  {
    id: "nova-bank",
    title: "Nova Bank",
    category: "Fintech Solution",
    description: "Redefining the digital banking experience for Gen-Z with intuitive budgeting and investment tools.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1740&auto=format&fit=crop",
    tags: ["UX Research", "Visual Design", "Web"],
    details: {
      challenge: "Traditional banking apps are often cluttered, intimidating, and lack features that resonate with younger users who prioritize speed and social features.",
      solution: "Simplified the entire banking interface into three core pillars: Pay, Save, and Social. Integrated AI-driven budget whispers that provide friendly insights.",
      outcome: "Nova Bank became the #1 trending fintech app on the App Store within two weeks of launch, processing over $2M in peer-to-peer transactions.",
      stats: [
        { label: "Tx Volume", value: "$2M+" },
        { label: "App Store Rank", value: "#1" },
        { label: "CSAT Score", value: "4.8" }
      ],
      screens: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1740&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1616077168079-7e09ad6ca31b?q=80&w=1740&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1740&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554672408-730436b60dde?q=80&w=1740&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1740&auto=format&fit=crop"
      ]
    }
  },
  {
    id: "lumina",
    title: "Lumina",
    category: "Smart Home Control",
    description: "A minimalist interface for managing smart lighting and environment settings with adaptive AI.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df8d7?q=80&w=1740&auto=format&fit=crop",
    tags: ["Interface", "Motion Design"],
    details: {
      challenge: "Smart home systems suffer from 'latency of intent'—users often have to navigate through too many menus just to turn on a single light.",
      solution: "Developed an adaptive widget-based system that surfaces the most used controls based on time of day, location, and user patterns.",
      outcome: "Reduced daily app interactions by 60% while increasing overall smart home automation utility metrics for the pilot group of 1,200 households.",
      stats: [
        { label: "Interaction reduction", value: "60%" },
        { label: "Households", value: "1.2k" },
        { label: "Latency", value: "<10ms" }
      ],
      screens: [
        "https://images.unsplash.com/photo-1558655118-d883f3e5f29c?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1545235617-946f02a58998?q=80&w=1760&auto=format&fit=crop"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551650975-470de2398402?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558655146-9f1e145789f2?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558655146-5e580e07172f?q=80&w=1964&auto=format&fit=crop"
      ]
    }
  }
];
