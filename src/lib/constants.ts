
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
  email: "hackastorm@ecetonline.com",
  phone: "+919842240290",
  coordinators: [
    { name: "M. Balaganesh", phone: "+916369133161" },
    { name: "M. Prern Kumar", phone: "+917092740814" }
  ],
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

export const SCHEDULE_ITEMS = [
  {
    day: "Day 1",
    date: "March 15, 2025",
    events: [
      {
        time: "09:00 AM",
        title: "Registration & Check-in",
        description: "Participants arrive, register, and set up their workstations."
      },
      {
        time: "10:00 AM",
        title: "Opening Ceremony",
        description: "Welcome address, introduction to judges, mentors, and sponsors."
      },
      {
        time: "11:00 AM",
        title: "Hackathon Kickoff",
        description: "Announcement of problem statements and rules."
      },
      {
        time: "12:00 PM",
        title: "Lunch Break",
        description: "Networking opportunity with fellow participants and mentors."
      },
      {
        time: "01:00 PM",
        title: "Hacking Begins",
        description: "Teams start working on their projects."
      },
      {
        time: "04:00 PM",
        title: "Mentor Sessions",
        description: "Mentors available for technical guidance and feedback."
      },
      {
        time: "08:00 PM",
        title: "Dinner",
        description: "Refuel and refresh."
      },
      {
        time: "09:00 PM",
        title: "Hacking Continues",
        description: "Teams continue working through the night."
      }
    ]
  },
  {
    day: "Day 2",
    date: "March 16, 2025",
    events: [
      {
        time: "08:00 AM",
        title: "Breakfast",
        description: "Morning fuel to kickstart the day."
      },
      {
        time: "09:00 AM",
        title: "Hacking Continues",
        description: "Teams resume work on their projects."
      },
      {
        time: "11:00 AM",
        title: "Workshop Session",
        description: "Interactive workshop on emerging technologies."
      },
      {
        time: "01:00 PM",
        title: "Lunch Break",
        description: "Time to recharge and network."
      },
      {
        time: "02:00 PM",
        title: "Mid-way Checkpoint",
        description: "Teams share progress and receive feedback."
      },
      {
        time: "03:00 PM",
        title: "Hacking Continues",
        description: "Teams continue development with renewed focus."
      },
      {
        time: "08:00 PM",
        title: "Dinner",
        description: "Evening meal and networking."
      },
      {
        time: "09:00 PM",
        title: "Gaming Break",
        description: "Fun activities to refresh minds."
      },
      {
        time: "10:00 PM",
        title: "Hacking Continues",
        description: "Final push through the night."
      }
    ]
  },
  {
    day: "Day 3",
    date: "March 17, 2025",
    events: [
      {
        time: "08:00 AM",
        title: "Breakfast",
        description: "Final day kickoff."
      },
      {
        time: "09:00 AM",
        title: "Last Minute Hacking",
        description: "Teams finalize their projects."
      },
      {
        time: "12:00 PM",
        title: "Hacking Ends",
        description: "All code submissions due."
      },
      {
        time: "12:30 PM",
        title: "Lunch",
        description: "Pre-presentation meal."
      },
      {
        time: "02:00 PM",
        title: "Project Presentations",
        description: "Teams present their solutions to judges and audience."
      },
      {
        time: "05:00 PM",
        title: "Judging Deliberation",
        description: "Judges evaluate projects based on innovation, technical complexity, design, and potential impact."
      },
      {
        time: "06:00 PM",
        title: "Awards Ceremony",
        description: "Announcement of winners and prize distribution."
      },
      {
        time: "07:00 PM",
        title: "Closing Ceremony",
        description: "Farewell address, acknowledgments, and networking."
      },
      {
        time: "08:00 PM",
        title: "Event Concludes",
        description: "End of Hackastorm 2K25."
      }
    ]
  }
];
