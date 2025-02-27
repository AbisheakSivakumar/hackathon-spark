
import { Calendar, Trophy, MapPin, User, Users, Clock } from "lucide-react";

export const HACKATHON_NAME = "TechSpark 2024";
export const HACKATHON_TAGLINE = "Ignite Your Innovation";
export const HACKATHON_DATE = new Date("2024-09-15T09:00:00");
export const HACKATHON_END_DATE = new Date("2024-09-17T18:00:00");
export const HACKATHON_LOCATION = "Tech Innovation Center, MIT Campus";
export const HACKATHON_ADDRESS = "123 Innovation Street, Cambridge, MA 02142";

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Prizes", href: "#prizes" },
  { label: "Venue", href: "#venue" },
  { label: "Contact", href: "#contact" },
];

export const SCHEDULE_ITEMS = [
  {
    day: "Day 1",
    date: "September 15, 2024",
    events: [
      { time: "09:00 AM", title: "Registration & Check-in", description: "Sign in at the welcome desk and receive your welcome kit" },
      { time: "10:30 AM", title: "Opening Ceremony", description: "Kickoff presentation and introduction to the hackathon" },
      { time: "11:30 AM", title: "Team Formation", description: "Meet other participants and form teams" },
      { time: "12:30 PM", title: "Lunch Break", description: "Catered lunch for all participants" },
      { time: "01:30 PM", title: "Hacking Begins", description: "Start working on your projects" },
      { time: "06:00 PM", title: "Dinner", description: "Food provided for all participants" },
      { time: "10:00 PM", title: "Day 1 Wrap-up", description: "Brief progress check and announcements" },
    ]
  },
  {
    day: "Day 2",
    date: "September 16, 2024",
    events: [
      { time: "08:00 AM", title: "Breakfast", description: "Morning meal to fuel your coding" },
      { time: "09:00 AM", title: "Hacking Continues", description: "Keep building your innovative solutions" },
      { time: "12:00 PM", title: "Lunch Break", description: "Catered lunch for all participants" },
      { time: "03:00 PM", title: "Mentor Sessions", description: "Get advice from industry experts" },
      { time: "06:00 PM", title: "Dinner", description: "Food provided for all participants" },
      { time: "08:00 PM", title: "Mini-Challenges", description: "Fun activities to break the coding monotony" },
    ]
  },
  {
    day: "Day 3",
    date: "September 17, 2024",
    events: [
      { time: "08:00 AM", title: "Breakfast", description: "Final day breakfast" },
      { time: "10:00 AM", title: "Hacking Ends", description: "Time to finalize your projects" },
      { time: "11:00 AM", title: "Preparation for Demos", description: "Set up your presentation for the judges" },
      { time: "12:00 PM", title: "Lunch Break", description: "Last meal before presentations" },
      { time: "01:00 PM", title: "Project Presentations", description: "Showcase what you've built to the judges" },
      { time: "04:00 PM", title: "Judging & Deliberation", description: "Judges evaluate all projects" },
      { time: "05:30 PM", title: "Awards Ceremony", description: "Winners announced and prizes distributed" },
      { time: "06:30 PM", title: "Closing Remarks", description: "Thank you and farewell" },
    ]
  }
];

export const PRIZE_CATEGORIES = [
  {
    title: "Grand Prize",
    value: "$5,000",
    description: "Awarded to the overall best project that demonstrates technical excellence, innovation, and potential impact.",
    icon: Trophy
  },
  {
    title: "Runner-Up",
    value: "$2,500",
    description: "For the second-best overall project that shows strong technical skills and creative problem-solving.",
    icon: Trophy
  },
  {
    title: "Best Technical Implementation",
    value: "$1,500",
    description: "For the project with the most impressive technical complexity and execution.",
    icon: Trophy
  },
  {
    title: "Most Innovative Idea",
    value: "$1,500",
    description: "For the most creative and original concept that addresses a unique problem.",
    icon: Trophy
  },
  {
    title: "Best UI/UX Design",
    value: "$1,000",
    description: "For the project with the most intuitive, accessible, and visually appealing interface.",
    icon: Trophy
  },
  {
    title: "Audience Choice",
    value: "$1,000",
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
  email: "contact@techspark2024.com",
  phone: "+1 (123) 456-7890",
  socialMedia: [
    { name: "Instagram", url: "https://instagram.com/techspark" },
    { name: "Twitter", url: "https://twitter.com/techspark" },
    { name: "LinkedIn", url: "https://linkedin.com/company/techspark" },
    { name: "Facebook", url: "https://facebook.com/techspark" },
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
    answer: "No, participation in the hackathon is completely free. We provide meals, snacks, and beverages throughout the event."
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
