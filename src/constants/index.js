import {
  mobile,
  // backend,
  // creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  salesforce,
  cloud,
  netflixClone,
  googleClone,
  CustomPath,
  EventBooking,
  GoogleMap,
  PostOffice,
  YouTube,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "why",
  },
  {
    id: "contact",
    title: "Contact",
  },
  // {
  //   id: "cv",
  //   title: "Resume",
  // },
];

const services = [
  {
    title: "English to Arabic translator",
    icon: web,
  },
  {
    title: "English to German translator",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Salesforce",
    icon: salesforce,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Accuracy",
    company_name:
      "Every translation is meticulously crafted to ensure precise meaning and cultural relevance.",
    icon: cloud,
    iconBg: "#383E56",
    date: "",
    points: [],
  },
  {
    title: "Timeliness",
    company_name:
      "Your deadlines matter, and I strive to deliver within agreed timelines.",
    icon: cloud,
    iconBg: "#383E56",
    date: "",
    points: [],
  },
  {
    title: "Passion for Gaming and Technology",
    company_name:
      "My love for Technology and gaming drives me to provide translations that truly capture the essence of IT and the gaming worlds.",
    icon: cloud,
    iconBg: "#383E56",
    date: "",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Netflix Clone",
    description:
      "Fullstack Netflix Clone, A User can register and login through valid email and password and also login through their Gmail or gitHub. Play Movies, Add, Remove movies in fev section. For store movies I'm Using MongoDB.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
      {
        name: "Prisma & MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: netflixClone,
    source_code_link: "https://github.com/imtiyaj786/Netflix-Clone",
  },
  {
    name: "Google Clone",
    description:
      "A Google Search clone which is created by using Next JS and tailwind CSS. In this I am using google search api to show search results. User can see result is All and Images views both in any device.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: googleClone,
    source_code_link: "https://github.com/imtiyaj786/google-clone-v2",
  },
  {
    name: "Event Booking",
    description:
      "Seat booking is a Client project for booking Events through salesforce. User can book any events and all available and booked seat are showing with their price, User can drag drop and resized event and Pay amount through Razorpay Payment get way.",
    tags: [
      {
        name: "LWC",
        color: "blue-text-gradient",
      },
      {
        name: "Apex Class",
        color: "green-text-gradient",
      },
      {
        name: "FullCalendar JS",
        color: "pink-text-gradient",
      },
    ],
    image: EventBooking,
    source_code_link: "https://github.com/imtiyaj786?tab=repositories",
  },
  {
    name: "Google Map Marker",
    description:
      "A Google Map is used to see your company all employee address location with some details like phone number, You just need to select that checkbox which employee address you want to see.",
    tags: [
      {
        name: "LWC",
        color: "blue-text-gradient",
      },
      {
        name: "Apex",
        color: "green-text-gradient",
      },
      {
        name: "Geocoding APIs",
        color: "pink-text-gradient",
      },
    ],
    image: GoogleMap,
    source_code_link: "https://github.com/imtiyaj786?tab=repositories",
  },
  {
    name: "Custom Path",
    description:
      "Custom Path is developed in Lightning web component, Using this just edit your page layout and drag this component in any Objects and its working same as salesforce standard path with some Extra Features.",
    tags: [
      {
        name: "LWC",
        color: "blue-text-gradient",
      },
      {
        name: "Apex",
        color: "green-text-gradient",
      },
      {
        name: "Trigger",
        color: "pink-text-gradient",
      },
    ],
    image: CustomPath,
    source_code_link: "https://github.com/imtiyaj786?tab=repositories",
  },
  {
    name: "YouTube APIs",
    description:
      "A YouTube APIs app is used to play and watch any youtube videos in your Salesforce Org it's self, And In this app you can search and videos any results is coming with the help of YouTube APIs.",
    tags: [
      {
        name: "LWC",
        color: "blue-text-gradient",
      },
      {
        name: "Apex",
        color: "green-text-gradient",
      },
      {
        name: "Youtube APIs",
        color: "pink-text-gradient",
      },
    ],
    image: YouTube,
    source_code_link:
      "https://github.com/imtiyaj786/YouTube-with-Salesforce-Integration",
  },
  {
    name: "PostOffice APIs",
    description:
      "This PostOffice app is used for getting any Post Office all details in all over the India, To find all the details You can search with the help of PinCode or Area Name and all the records will shown below.",
    tags: [
      {
        name: "LWC",
        color: "blue-text-gradient",
      },
      {
        name: "Apex",
        color: "green-text-gradient",
      },
      {
        name: "Post Office APIs",
        color: "pink-text-gradient",
      },
    ],
    image: PostOffice,
    source_code_link: "https://github.com/imtiyaj786?tab=repositories",
  },
];

export { services, technologies, experiences, testimonials, projects };
