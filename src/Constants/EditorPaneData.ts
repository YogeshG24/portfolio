import { EditorPaneProps } from "@/Interfaces/EditorPaneProps";
import { ActivityId } from "@/types/ActivityType";

export const EditorPaneData: Record<ActivityId, EditorPaneProps> = {
  UserProfile: {
    filename: "Profile.ts",
    content: `export const UserProfile = {
  name: 'Yogesh Gahlawat',
  role: 'Full Stack Developer',
  location: 'India',
  experience: '3+ Years',
  company: 'Tata Consultancy Services',
};`,
  },

  Skills: {
    filename: "Skills.ts",
    content: `export const Skills = {
  programmingLanguages: [
    'Java',
    'Python',
    'JavaScript',
    'TypeScript',
  ],
  reactEcosystem: [
    'React.js',
    'Next.js',
    'Redux',
    'Redux Toolkit',
  ],
  springEcosystem: [
    'Spring Framework',
    'Spring Core',
    'Spring Web',
    'Spring MVC',
    'Spring Data',
    'Spring JPA',
    'Spring Security',
    'Hibernate',
  ],
  webTechnologies: [
    'HTML',
    'CSS',
    'Bootstrap',
    'Tailwind CSS',
    'SASS',
  ],
  databases: [
    'Oracle',
    'MySQL',
  ],
  tools: [
    'Git',
    'GitHub',
    'GitLab',
    'Postman',
    'VS Code',
    'Redis Cache',
    'Redis Streams',
    'Apache Kafka',
  ],
};`,
  },

  Experience: {
    filename: "Experience.ts",
    content: `export const Experience = {
  company: 'Tata Consultancy Services',
  duration: 'September 2023 - Present',
  role: 'Full Stack Developer',
  designation: 'System Engineer',
  responsibilities: [
    'Developing enterprise-level applications',
    'Building backend services using Java and Spring',
    'Developing responsive interfaces using React.js & Next.js',
    'Working with relational databases and APIs',
  ],
  projects: [
    'Astroid - CCIL Trading Platform',
    'Bond Forward - CCIL Trading Platform'
  ]
};`,
  },

  Education: {
    filename: "Education.ts",
    content: `export const Education = [
  {
    degree: 'Master of Computer Applications',
    university: 'Amity University, Noida',
    period: '2019 - 2022',
  },
  {
    degree: 'Bachelor of Computer Applications',
    university: 'Hindu Institute of Management, Sonipat',
    period: '2016 - 2019',
  },
];`,
  },
};
