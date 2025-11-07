import type { PortfolioData } from './types';

export const data: PortfolioData = {
  name: "Mahir Faisal",
  tagline: "CO-FOUNDER & CEO | AR/VR PIONEER | PROBLEM SOLVER",
  heroImageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
  showHeroImage: false,
  contact: {
    phone: "(+45) 91957801",
    email: "mahirdfaisal@gmail.com",
    linkedin: "https://linkedin.com/in/mahirDfaisal",
    website: "https://www.rrad.ltd",
    address: "Apt.61, Langagervej 4, 9220 Aalborg, Denmark"
  },
  careerObjective: "Dedicated and adaptable professional with extensive experience in managing diverse projects and leading teams in high-pressure environments, seeking a position as a kitchen assistant, dishwasher, or similar entry-level role in Denmark. Leveraging a solid foundation in project management and problem-solving, gained through years of managing technical projects and a leadership role as CEO, I aim to contribute effectively in a fast-paced work setting. Known for a strong work ethic, reliability, and attention to detail, I am eager to support daily operations, maintain high standards of cleanliness and efficiency, and contribute positively to the team culture.",
  portfolioLink: "https://youtu.be/h5AeulUMg94",
  skills: [
    { id: 1, title: "XR Development", items: ["Augmented Reality", "Virtual Reality", "Game Development", "Simulation", "Unity 3d", "Unreal Engine"] },
    { id: 2, title: "Hardware & Platforms", items: ["Meta Quest", "Htc Vive", "SteamVR", "IoT", "3d Scanning", "360 Video production"] },
    { id: 3, title: "Programming", items: ["C# Programming", "Python Programming", "Visualization"] }
  ],
  academicBackground: [
    { id: 1, degree: "BSc. in SOFTWARE ENGINEERING", details: "CGPA 3.00/4.00", institution: "American International University of Bangladesh", period: "2016 - 2021" },
    { id: 2, degree: "HIGHER SECONDARY CERTIFICATE", details: "GPA 4.83/5.00", institution: "Cambrian School & College", period: "2014 - 2016" },
    { id: 3, degree: "SECONDARY SCHOOL CERTIFICATE", details: "GPA 4.69/5.00", institution: "Cambrian School & College", period: "2012 - 2014" }
  ],
  workExperiences: [
    { id: 1, role: "CO-FOUNDER AND CEO", company: "Robust Research and Development Ltd.", period: "January 2019 - Running", description: "Creating immersive and interactive experiences to change how we interact with the world." },
    { id: 2, role: "LOCAL MENTOR", company: "Nasa Space Apps Challenge - Bangladesh", period: "October 2023 - Running", description: "Mentored national champion and Global Honorable Mention team for the NASA Space Apps Challenge, guiding them to success on both national and international stages." },
    { id: 3, role: "UNITY DEVELOPER", company: "Bangla Puzzle", period: "September 2018 - November 2018", description: "Developed educational puzzles tailored for children, combining interactive learning with engaging gameplay experiences." },
    { id: 4, role: "AR/VR DEVELOPER", company: "Rise Up Labs", period: "November 2017 - April 2018", description: "Developed virtual reality and augmented reality solutions such as 7th March Speech VR." },
    { id: 5, role: "TEAM LEAD", company: "Glitch Games", period: "January 2016 - December 2018", description: "Led a team of developers in developing mobile applications, games and won several national competitions." },
    { id: 6, role: "STUDENT AMBASSADOR", company: "Unity", period: "November 2017 - 2019", description: "Conducted training and marketing for products and services of Unity in Bangladesh." }
  ],
  achievements: [
    { id: 1, title: "Champion", event: "Bangladesh Gaming Expo 2017, 48-Hour Game jam" },
    { id: 2, title: "Champion", event: "AIUB Cs Fest 2016 Mobile App showcasing" },
    { id: 3, title: "1st Runner up", event: "AIUB Cs Fest 2018 Mobile App showcasing" },
    { id: 4, title: "2nd Runner-up", event: "IUT ICT Fest 2016 Game Development Contest" },
    { id: 5, title: "Finalist", event: "Cisco IoT Hackathon 2018" }
  ],
  projects: [
    { id: 1, title: "i-Meducation", period: "2022-2023", description: "Created a VR training and educational simulation for practicing Mechanical Thrombectomy Treatment in Acute Ischemic Stroke procedures. Developed in collaboration with the Faculty of Medicine, Chulalongkorn University.", tags: ["VR", "Simulation", "Medical Training"], imageUrl: "https://images.unsplash.com/photo-1581093450021-4a7360aa9a2f?q=80&w=800" },
    { id: 2, title: "Virtual Museum Bangladesh", period: "2020 - 2022", description: "Designed an immersive experience to explore the rich heritage and history of Bangladesh in Virtual Reality.", tags: ["VR", "Culture", "History"], imageUrl: "https://images.unsplash.com/photo-1509224729542-a81d5961e612?q=80&w=800" },
    { id: 3, title: "Ship Driving Simulator", period: "2021-2022", description: "Engineered a simulation application tailored for the Bangladesh Army, facilitating ship driving training.", tags: ["Simulation", "Military"], imageUrl: "https://images.unsplash.com/photo-1599493356238-2a8a5f417865?q=80&w=800" },
    { id: 4, title: "Boats Of Bengal", period: "2021", description: "Crafted an engaging puzzle game for the Bangladesh Maritime Museum, showcasing the maritime culture of Bengal.", tags: ["Game Dev", "Culture"] },
    { id: 5, title: "IED Simulator", period: "2019 - 2020", description: "Created a training simulation for the Bangladesh Army to simulate scenarios involving Improvised Explosive Devices (IEDs).", tags: ["Simulation", "Military", "Training"] },
    { id: 6, title: "7th March Speech VR", period: "2017", description: "Immersed users in the historic \"Father of the Nation\" 7th March speech through a virtual reality experience, providing a unique perspective on Bangladesh's history.", tags: ["VR", "History", "Immersive"], imageUrl: "https://images.unsplash.com/photo-1620912189835-4a6f6f3938e2?q=80&w=800" }
  ],
  references: [
    { id: 1, name: "Abhijit Bhowmik", title: "Professor & Special Assistant [OSA]", organization: "American International University of Bangladesh", phone: "+880 1926836045", email: "abhijit@aiub.edu" },
    { id: 2, name: "Ariful Hasan Opu", title: "Chief Executive Officer", organization: "E-soft", phone: "+880 1713230461", email: "info@ahopu.com" }
  ]
};