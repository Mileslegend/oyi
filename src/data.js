import {
  FaTools,
  FaLightbulb,
  FaHandsHelping,
  FaCheckCircle,
  FaClock,
  FaDraftingCompass,
  FaUserFriends,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaHome,
  FaBuilding,
} from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import {
  blog1,
  blog2,
  blog3,
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  user1,
  user2,
  user3,
  user4,
} from "./assets";

export const navigations = [
  {
    label: "About Us",
    to: "about",
  },
  {
    label: "Services",
    to: "services",
  },
  {
    label: "Portfolio",
    to: "portfolio",
  },
  {
    label: "Team",
    to: "team",
  },
  {
    label: "Testimonials",
    to: "testimonials",
  },
  {
    label: "Contact Us",
    to: "contact",
  },
];

export const keypoints = [
  {
    icon: <FaTools />,
    title: "Expert Craftsmanship",
  },
  {
    icon: <FaRegClock />,
    title: "On-Time, Within Budget",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Solutions",
  },
  {
    icon: <FaHandsHelping />,
    title: "Client-Centered Approach",
  },
];

export const whyChooseUs = [
  {
    title: "Unmatched Quality",
    icon: <FaCheckCircle />,
    description: "Craftsmanship guaranteed",
  },
  {
    title: "Timely Delivery",
    icon: <FaClock />,
    description: "Projects completed on schedule",
  },
  {
    title: "Innovative Designs",
    icon: <FaDraftingCompass />,
    description: "Creative and modern solutions",
  },
  {
    title: "Focused Service",
    icon: <FaUserFriends />,
    description: "Prioritizing client satisfaction always",
  },
];

export const services = [
  {
    title: "Sustainable Cooking",
    icon: <FaHome />,
    description: `Building modern, high-quality solar cookers tailored to your vision through sustainable cooking with renewable energy.`,
  },
  {
    title: "Community Trainings",
    icon: <FaBuilding />,
    description: `Empowering communities through hands-on training in sustainable cooking using renewable energy.`,
  },
  {
    title: "Data Analytics",
    icon: <FaTools />,
    description: `Transforming existing  data samples and sets into meaningful form.`,
  },
];

export const portfolio = [
  {
    title: "Earthen Solar Cooker",
    image: portfolio1,
    date: "May 15, 2023",
    category: "Solar Cooker",
    description: `A stunning earthen solar cooker featuring innovative design, ample cooking space, and an open-concept layout. Crafted with natural materials and sustainable finishes to create an efficient yet cozy cooking experience.`,
  },
  {
    title: "Solar dish Solar Cooker",
    image: portfolio2,
    date: "November 30, 2022",
    category: "Solar Cooker",
    description: `The cooker features a large, reflective parabolic dish, typically made of polished metal or reflective aluminum, shaped like a shallow bowl. `,
  },
  {
    title: "Complex Data Analysis",
    image: portfolio3,
    date: "July 12, 2024",
    category: "Data Analysis",
    description: ` It uses advanced techniques like statistical modeling, machine learning, and data mining to process structured and unstructured data.`,
  },
  {
    title: "Data Visualisation",
    image: portfolio4,
    date: "February 1, 2023",
    category: "Data Visualisation",
    description: `The goal is to make informed decisions, predict outcomes, and solve intricate problems in various fields such as business, science, and technology.`,
  },
  {
    title: "Project Management",
    image: portfolio5,
    date: "September 18, 2023",
    category: "Trainings",
    description: `Programs are designed to empower individuals and groups by providing education, skills development, and resources that address specific needs.`,
  },
  {
    title: "Comunity Outreach",
    image: portfolio6,
    date: "March 5, 2022",
    category: "Outreach",
    description: `Community outreach extends the impact by engaging with local populations directly, building relationships, and fostering collaboration.`,
  },
];

export const teamMembers = [
  {
    fullName: "Muhumuza Allan",
    image: member1,
    title: "Web Developer",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Doctor Oyirwoth",
    image: member2,
    title: "Senior Project Manager",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Abedigamba Patrick",
    image: member3,
    title: "Chief Engineer",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Mugisha Allen",
    image: member4,
    title: "Construction Planner",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Tunde Micheal",
    image: member5,
    title: "Site Supervisor",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Sonia Joan",
    image: member6,
    title: "Design Coordinator",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
];

export const testimonials = [
  {
    name: "Folake Adekunle",
    image: user1,
    review: `The team at Oyirwoth exceeded our expectations. Their attention to detail and professionalism made our home renovation a smooth and enjoyable process.`,
  },
  {
    name: "Jide Nakinwale",
    image: user2,
    review: `From start to finish, the project was handled with incredible skill and efficiency. I highly recommend Oyirwoth for any solar cooker construction needs.`,
  },
  {
    name: "Chiama Nagayi",
    image: user3,
    review: `Working with Oyirwoth was a fantastic experience. Their team was professional, creative, and committed to delivering exactly what we envisioned.`,
  },
  {
    name: "Micheal Balogun",
    image: user4,
    review: `Exceptional service and quality workmanship! Oyirwoth transformed our raw data samples efficiently and effectively. They are true professionals.`,
  },
];

export const blogs = [
  {
    title: "Innovative Construction Trends for 2024",
    content: `Discover the latest trends in construction of solar cookers for 2024, from sustainable building practices to cutting-edge technologies transforming the industry.`,
    image: blog1,
  },
  {
    title: "The Importance of Renewable energy",
    content: `Learn why using Renewable energy is crucial for environmental protection and how it benefits both the project and the community.`,
    image: blog2,
  },
  {
    title: "Top Tips for Effective Project Management",
    content: `Explore essential tips for managing construction projects efficiently, including scheduling, budgeting, and communication strategies.`,
    image: blog3,
  },
];

export const footer = [
  {
    title: "Company",
    routes: [
      {
        name: "About Us",
        href: "#",
      },
      {
        name: "Our Team",
        href: "#",
      },
      {
        name: "Careers",
        href: "#",
      },
      {
        name: "Contact Us",
        href: "#",
      },
    ],
  },
  {
    title: "Services",
    routes: [
      {
        name: "Sustainable Cooking",
        href: "#",
      },
      {
        name: "Community Trainings",
        href: "#",
      },
      {
        name: "Data Analytics",
        href: "#",
      },
      {
        name: "Project Management",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    routes: [
      {
        name: "Blog",
        href: "#",
      },
      {
        name: "Case Studies",
        href: "#",
      },
      {
        name: "FAQs",
        href: "#",
      },
      {
        name: "Privacy Policy",
        href: "#",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];
