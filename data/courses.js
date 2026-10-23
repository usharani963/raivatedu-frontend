export const courses = [
  {
    slug: "python-for-everyone",
    title: "Python for Everyone",
    category: "Technology",
    level: "Beginner",
    duration: "6 weeks",
    price: 1499,
    oldPrice: 2499,
    rating: "4.9",
    students: "2.4k",
    emoji: "🐍",
    color: "#e5e2ff",
    summary: "Learn Python fundamentals and build useful projects from your very first week.",
    instructor: "Aarav Mehta",
    instructorRole: "Software Engineer & Educator",
    instructorEmoji: "👨🏽‍💻",
    description: "A practical introduction to programming for curious beginners. Learn by writing code, solving small challenges, and building projects you can explain with confidence.",
    syllabus: [
      { title: "Getting started with Python", lessons: ["Your first Python program", "Variables and data types", "Working with input and output"] },
      { title: "Logic and collections", lessons: ["Conditions and loops", "Lists, tuples, and dictionaries", "Writing reusable functions"] },
      { title: "Build real projects", lessons: ["Working with files", "Handling errors", "Build a mini project"] }
    ],
    reviews: [
      { name: "Nisha K.", text: "The lessons are easy to follow, and the mini projects helped me understand why each concept matters." },
      { name: "Rahul S.", text: "A friendly starting point. I went from being nervous about code to writing small programs on my own." }
    ]
  },
  {
    slug: "ui-ux-design-foundations",
    title: "UI/UX Design Foundations",
    category: "Design",
    level: "Beginner",
    duration: "4 weeks",
    price: 1299,
    oldPrice: 1999,
    rating: "4.8",
    students: "1.8k",
    emoji: "🎨",
    color: "#ffe5d9",
    summary: "Turn user problems into thoughtful, accessible digital experiences.",
    instructor: "Mira Shah",
    instructorRole: "Product Designer",
    instructorEmoji: "👩🏻‍🎨",
    description: "Explore the full design process, from understanding user needs to wireframes, prototypes, and usability testing. You will finish with a small portfolio-ready case study.",
    syllabus: [
      { title: "Understand the user", lessons: ["Design thinking basics", "Personas and user journeys", "Writing problem statements"] },
      { title: "Shape the experience", lessons: ["Information architecture", "Wireframes and visual hierarchy", "Accessible design foundations"] },
      { title: "Prototype and test", lessons: ["Interactive prototypes", "Usability testing", "Presenting a case study"] }
    ],
    reviews: [
      { name: "Priya R.", text: "I finally understand how research connects to the screens we design." },
      { name: "Aditi M.", text: "The feedback exercises made the process feel practical instead of theoretical." }
    ]
  },
  {
    slug: "data-analytics-starter",
    title: "Data Analytics Starter",
    category: "Business",
    level: "Intermediate",
    duration: "5 weeks",
    price: 1799,
    oldPrice: 2799,
    rating: "4.9",
    students: "3.1k",
    emoji: "📊",
    color: "#d9f5e8",
    summary: "Find the story in data with spreadsheets, SQL basics, and clear dashboards.",
    instructor: "Dev Malhotra",
    instructorRole: "Analytics Lead",
    instructorEmoji: "👨🏻‍🏫",
    description: "Build a reliable analytics workflow: ask a clear question, clean data, explore patterns, and communicate findings with simple visualisations and a final dashboard.",
    syllabus: [
      { title: "Ask better questions", lessons: ["Turning goals into metrics", "Data types and data quality", "Spreadsheet essentials"] },
      { title: "Explore and query", lessons: ["SQL filtering and grouping", "Summarising datasets", "Spotting misleading comparisons"] },
      { title: "Tell the story", lessons: ["Chart selection", "Dashboard layout", "Present a recommendation"] }
    ],
    reviews: [
      { name: "Karthik P.", text: "The examples made it easier to see how analysis supports business decisions." },
      { name: "Sneha V.", text: "I liked the focus on explaining the result, not just making charts." }
    ]
  },
  {
    slug: "digital-marketing-playbook",
    title: "Digital Marketing Playbook",
    category: "Marketing",
    level: "Beginner",
    duration: "3 weeks",
    price: 999,
    oldPrice: 1599,
    rating: "4.7",
    students: "1.2k",
    emoji: "📣",
    color: "#fff0bc",
    summary: "Plan content, understand audiences, and measure campaigns with confidence.",
    instructor: "Zoya Khan",
    instructorRole: "Growth Marketing Strategist",
    instructorEmoji: "👩🏽‍💼",
    description: "Learn how content, search, social, and measurement work together. Create a simple campaign plan and practise choosing metrics that reflect meaningful outcomes.",
    syllabus: [
      { title: "Know your audience", lessons: ["Audience research", "Positioning and messaging", "Setting campaign goals"] },
      { title: "Create and distribute", lessons: ["Content planning", "Search and social basics", "Campaign calendar"] },
      { title: "Measure what matters", lessons: ["Marketing metrics", "Reading campaign reports", "Improve your next campaign"] }
    ],
    reviews: [
      { name: "Ishita D.", text: "Clear explanations and a useful framework for planning my first campaign." },
      { name: "Arjun B.", text: "The measurement section helped me understand what to track and why." }
    ]
  },
  {
    slug: "communication-at-work",
    title: "Communication at Work",
    category: "Personal Growth",
    level: "All levels",
    duration: "2 weeks",
    price: 799,
    oldPrice: 1199,
    rating: "4.8",
    students: "950",
    emoji: "💬",
    color: "#dcecff",
    summary: "Write clearly, give useful feedback, and feel prepared for important conversations.",
    instructor: "Ananya Rao",
    instructorRole: "Leadership Coach",
    instructorEmoji: "👩🏽‍💼",
    description: "Practise the everyday communication skills that help teams work better: clear writing, active listening, constructive feedback, and confident presentations.",
    syllabus: [
      { title: "Communicate with clarity", lessons: ["Know your audience", "Writing concise messages", "Active listening"] },
      { title: "Work through conversations", lessons: ["Giving constructive feedback", "Handling disagreement", "Meeting participation"] },
      { title: "Present with confidence", lessons: ["Organising your message", "Presentation practice", "Personal action plan"] }
    ],
    reviews: [
      { name: "Megha N.", text: "Small exercises I could use immediately in team meetings." },
      { name: "Varun G.", text: "A useful course for anyone starting their first job." }
    ]
  },
  {
    slug: "web-development-with-react",
    title: "Web Development with React",
    category: "Technology",
    level: "Intermediate",
    duration: "8 weeks",
    price: 2499,
    oldPrice: 3499,
    rating: "4.9",
    students: "2.7k",
    emoji: "⚛️",
    color: "#d9f5fb",
    summary: "Build responsive interfaces with components, state, and modern React patterns.",
    instructor: "Ishan Verma",
    instructorRole: "Frontend Developer",
    instructorEmoji: "👨🏽‍💻",
    description: "Move from core web concepts to component-based interfaces. Build a responsive multi-page project and learn how to organise code for maintainability.",
    syllabus: [
      { title: "Web foundations", lessons: ["HTML and CSS refresh", "JavaScript essentials", "Responsive layouts"] },
      { title: "React essentials", lessons: ["Components and props", "State and events", "Rendering lists and forms"] },
      { title: "Build and refine", lessons: ["Routing concepts", "Reusable UI patterns", "Final portfolio project"] }
    ],
    reviews: [
      { name: "Sanjay T.", text: "A clear path from basic JavaScript into building real interfaces." },
      { name: "Pooja L.", text: "The final project helped me connect the individual lessons." }
    ]
  }
];

export const categories = [
  { name: "Technology", emoji: "💻", count: "12 courses", color: "#e5e2ff" },
  { name: "Design", emoji: "🎨", count: "8 courses", color: "#ffe5d9" },
  { name: "Business", emoji: "📊", count: "10 courses", color: "#d9f5e8" },
  { name: "Marketing", emoji: "📣", count: "7 courses", color: "#fff0bc" },
  { name: "Personal Growth", emoji: "🌱", count: "6 courses", color: "#dcecff" }
];

export const mentors = [
  { name: "Aarav Mehta", role: "Software Engineer", emoji: "👨🏽‍💻", detail: "8 years building products" },
  { name: "Mira Shah", role: "Product Designer", emoji: "👩🏻‍🎨", detail: "Designing for people first" },
  { name: "Dev Malhotra", role: "Analytics Lead", emoji: "👨🏻‍🏫", detail: "Turning data into decisions" },
  { name: "Zoya Khan", role: "Growth Strategist", emoji: "👩🏽‍💼", detail: "Helping ideas find an audience" }
];

export const faqs = [
  { question: "Do I need experience before starting a course?", answer: "Not for our beginner courses. Each course clearly shows its recommended level, so you can choose a comfortable starting point. Check the course outline before enrolling if you are unsure." },
  { question: "How long can I access a course?", answer: "For this demo website, course access is presented as self-paced. In a real launch, the exact access period and terms would be shown on each course before payment." },
  { question: "Will I receive a certificate?", answer: "The demo content is illustrative. A production version would specify certificate eligibility and completion requirements on each course page." },
  { question: "Can I learn at my own pace?", answer: "Yes. The courses are designed around short lessons that you can fit around your schedule. You can revisit the syllabus to plan your learning week by week." }
];
