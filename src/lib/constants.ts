
import { Calendar, Trophy, MapPin, User, Users, Clock } from "lucide-react";

export const HACKATHON_NAME = "Hackastorm 2K25";
export const HACKATHON_TAGLINE = "EASA College of Engineering & Technology (ECET) - An Autonomous Institution";
export const HACKATHON_DATE = new Date("2025-03-15T09:00:00");
export const HACKATHON_END_DATE = new Date("2025-03-17T18:00:00");
export const HACKATHON_LOCATION = "EASA College of Engineering & Technology (ECET)";
export const HACKATHON_ADDRESS = "EASA College of Engineering & Technology (ECET), Navakkarai, Coimbatore, Tamil Nadu, India";
export const REGISTRATION_FEE = "Rs. 1200 per team";

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Prizes", href: "#prizes" },
  { label: "Venue", href: "#venue" },
  { label: "Contact", href: "#contact" },
];

export const PRIZE_CATEGORIES = [
  {
    title: "Grand Prize",
    value: "₹50,000",
    description: "Awarded to the overall best project that demonstrates technical excellence, innovation, and potential impact.",
    icon: Trophy
  },
  {
    title: "Runner-Up",
    value: "₹25,000",
    description: "For the second-best overall project that shows strong technical skills and creative problem-solving.",
    icon: Trophy
  },
  {
    title: "Best Technical Implementation",
    value: "₹15,000",
    description: "For the project with the most impressive technical complexity and execution.",
    icon: Trophy
  },
  {
    title: "Most Innovative Idea",
    value: "₹15,000",
    description: "For the most creative and original concept that addresses a unique problem.",
    icon: Trophy
  },
  {
    title: "Best UI/UX Design",
    value: "₹10,000",
    description: "For the project with the most intuitive, accessible, and visually appealing interface.",
    icon: Trophy
  },
  {
    title: "Audience Choice",
    value: "₹10,000",
    description: "Voted by fellow participants for the most popular project.",
    icon: Trophy
  }
];

export const TRACKS = [
  "Web Development",
  "Mobile App Development",
  "AI & Machine Learning",
  "Blockchain & Web3",
  "IoT & Hardware",
  "AR/VR",
  "Health Tech",
  "Fintech",
  "Social Impact",
  "Open Innovation"
];

export const CONTACT_INFO = {
  email: "hackastorm@eeetonline.com",
  phone: "+919842240290",
  socialMedia: [
    { name: "Instagram", url: "https://instagram.com/hackastorm" },
    { name: "Twitter", url: "https://twitter.com/hackastorm" },
    { name: "LinkedIn", url: "https://linkedin.com/company/hackastorm" },
    { name: "Facebook", url: "https://facebook.com/hackastorm" },
  ]
};

export const FAQ_ITEMS = [
  {
    question: "Who can participate in the hackathon?",
    answer: "The hackathon is open to all college students, regardless of their major or experience level. Whether you're a beginner or an experienced developer, everyone is welcome!"
  },
  {
    question: "How many members can be in a team?",
    answer: "Teams can consist of 1-4 members. You can register as a team or individually and form a team at the event."
  },
  {
    question: "What should I bring to the hackathon?",
    answer: "Bring your laptop, charger, any hardware you may need for your project, personal items for overnight stay, and your student ID."
  },
  {
    question: "Is there a registration fee?",
    answer: `Yes, the registration fee is ${REGISTRATION_FEE}. This covers meals, snacks, and beverages throughout the event.`
  },
  {
    question: "Will accommodation be provided?",
    answer: "We provide a resting area with bean bags and mats, but participants are expected to bring their own sleeping bags if they plan to stay overnight."
  },
  {
    question: "Do I need to have a project idea before registering?",
    answer: "No, you don't need to have an idea before registering. You can brainstorm with your team during the event, and we'll also provide some challenge statements to inspire you."
  }
];
