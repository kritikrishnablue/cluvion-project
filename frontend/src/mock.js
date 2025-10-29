// Mock data for Video Editor Portfolio

export const heroData = {
  name: "Alex Rivera",
  tagline: "Cinematic Video Editor & Visual Storyteller",
  description: "Transforming raw footage into compelling visual narratives that captivate audiences and elevate brands.",
  showreelUrl: "https://www.youtube.com/embed/8lsB-P8nGSM",
  backgroundImage: "https://images.unsplash.com/photo-1759647323656-8b6de2c839fa"
};

export const aboutData = {
  image: "https://images.unsplash.com/photo-1758553026412-bc1da0ebd366",
  title: "About Me",
  bio: "I'm a passionate video editor with over 8 years of experience crafting stories that resonate. Specializing in commercial content, music videos, and documentary work, I bring a unique blend of technical expertise and creative vision to every project.",
  stats: [
    { label: "Projects Completed", value: "150+" },
    { label: "Years Experience", value: "8+" },
    { label: "Awards Won", value: "12" },
    { label: "Happy Clients", value: "80+" }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "Nike Athletes Campaign",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1638961837480-5aee8a8f90cd",
    videoUrl: "https://www.youtube.com/embed/8lsB-P8nGSM",
    description: "High-energy commercial showcasing athlete stories and brand values through dynamic editing and color grading.",
    client: "Nike",
    duration: "2:30",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"]
  },
  {
    id: 2,
    title: "Midnight Drive - Music Video",
    category: "Music Video",
    thumbnail: "https://images.unsplash.com/photo-1638961862991-bd7ee1c9ecfc",
    videoUrl: "https://www.youtube.com/embed/8lsB-P8nGSM",
    description: "Moody, cinematic music video with creative transitions and visual effects synced to the beat.",
    client: "Independent Artist",
    duration: "3:45",
    tools: ["Premiere Pro", "After Effects"]
  },
  {
    id: 3,
    title: "Tech Startup Explainer",
    category: "Corporate",
    thumbnail: "https://images.unsplash.com/photo-1611540881474-bf7c8731bfd2",
    videoUrl: "https://www.youtube.com/embed/8lsB-P8nGSM",
    description: "Clean, professional explainer video breaking down complex technology into digestible visual content.",
    client: "TechFlow Inc.",
    duration: "1:45",
    tools: ["Premiere Pro", "Motion Graphics"]
  },
  {
    id: 4,
    title: "Urban Stories Documentary",
    category: "Documentary",
    thumbnail: "https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg",
    videoUrl: "https://www.youtube.com/embed/8lsB-P8nGSM",
    description: "Emotional documentary piece exploring city life through intimate interviews and b-roll storytelling.",
    client: "Local Film Festival",
    duration: "12:00",
    tools: ["Premiere Pro", "DaVinci Resolve"]
  },
  {
    id: 5,
    title: "Fashion Week Highlights",
    category: "Fashion",
    thumbnail: "https://images.pexels.com/photos/1051544/pexels-photo-1051544.jpeg",
    videoUrl: "https://www.youtube.com/embed/8lsB-P8nGSM",
    description: "Fast-paced fashion reel capturing runway moments with stylish cuts and color correction.",
    client: "Fashion Magazine",
    duration: "2:15",
    tools: ["Premiere Pro", "After Effects"]
  },
  {
    id: 6,
    title: "Adventure Travel Vlog",
    category: "Travel",
    thumbnail: "https://images.unsplash.com/photo-1603400938371-d030ad03505b",
    videoUrl: "https://www.youtube.com/embed/8lsB-P8nGSM",
    description: "Cinematic travel content with drone footage, time-lapses, and immersive sound design.",
    client: "Travel Channel",
    duration: "8:30",
    tools: ["Premiere Pro", "DaVinci Resolve"]
  }
];

export const skillsData = [
  { name: "Adobe Premiere Pro", level: 95 },
  { name: "After Effects", level: 90 },
  { name: "DaVinci Resolve", level: 85 },
  { name: "Final Cut Pro", level: 80 },
  { name: "Color Grading", level: 90 },
  { name: "Motion Graphics", level: 85 },
  { name: "Sound Design", level: 75 },
  { name: "VFX Compositing", level: 80 }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, Nike",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=ff6b6b&color=fff&size=80",
    content: "Alex transformed our raw campaign footage into something truly spectacular. The attention to detail and creative vision exceeded our expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Independent Music Artist",
    avatar: "https://ui-avatars.com/api/?name=Marcus+Chen&background=00d9ff&color=fff&size=80",
    content: "Working with Alex was an absolute pleasure. They understood my artistic vision and brought it to life with stunning visuals and perfect pacing.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "CEO, TechFlow Inc.",
    avatar: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=ff9f43&color=fff&size=80",
    content: "Our explainer video has become our most powerful marketing asset. Alex's ability to simplify complex concepts visually is remarkable.",
    rating: 5
  },
  {
    id: 4,
    name: "David Park",
    role: "Documentary Producer",
    avatar: "https://ui-avatars.com/api/?name=David+Park&background=1a1a1a&color=fff&size=80",
    content: "Alex has an incredible talent for storytelling. The documentary piece they edited captured emotions perfectly and won multiple festival awards.",
    rating: 5
  }
];

export const contactData = {
  email: "alex.rivera@videoeditor.com",
  phone: "+1 (555) 123-4567",
  location: "Los Angeles, CA",
  social: {
    instagram: "https://instagram.com/alexrivera",
    linkedin: "https://linkedin.com/in/alexrivera",
    youtube: "https://youtube.com/@alexrivera",
    vimeo: "https://vimeo.com/alexrivera"
  }
};

export const categories = ["All", "Commercial", "Music Video", "Corporate", "Documentary", "Fashion", "Travel"];