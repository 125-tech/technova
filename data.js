// Initial mock/dummy data for TECHNOVA 2026

const INITIAL_EVENTS = [
  {
    id: "robo-wars",
    name: "Robo Wars",
    tagline: "Unleash metal mayhem in the battle arena",
    category: "robotics",
    type: "Team",
    minTeam: 2,
    maxTeam: 4,
    deadline: "2026-03-24",
    prize: "₹18,000",
    venue: "Robotics Arena, Open Ground",
    date: "March 28, 2026 - 10:00 AM",
    image: "🤖",
    description: "Design and build your wired or wireless combat robot within the 15kg or 30kg weight category. Face off against rival bots in a double-elimination arena tournament loaded with hazards, pits, and spinners.",
    rules: [
      "Maximum robot weight: 15 kg (featherweight) or 30 kg (middleweight).",
      "Power source must not exceed 24V DC onboard.",
      "No liquid projectiles, jamming signals, or EMP devices allowed.",
      "Each round consists of 3 minutes of combat.",
      "Points awarded for aggression, damage inflicted, and arena hazard control."
    ],
    coordinators: "Aarav Sharma (+91 98765 43210), Priya Verma (+91 98765 43211)"
  },
  {
    id: "circuitrix",
    name: "Circuitrix",
    tagline: "Decode, debug, and design the silicon future",
    category: "circuits",
    type: "Individual or Team",
    minTeam: 1,
    maxTeam: 2,
    deadline: "2026-03-25",
    prize: "₹12,000",
    venue: "VLSI & Hardware Lab 3",
    date: "March 27, 2026 - 02:00 PM",
    image: "⚡",
    description: "The ultimate circuit design and troubleshooting marathon. Put your analog and digital electronics knowledge to the test through breadboard prototyping, oscilloscope debugging, and PCB layout challenges.",
    rules: [
      "Round 1: Rapid-fire theoretical circuit debugging and component identification.",
      "Round 2: Hands-on breadboard wiring to match a secret black-box specification.",
      "Round 3: High-speed PCB layout design using KiCAD or Proteus.",
      "Standard test gear (DSO, Multimeter, Function Generator) provided on-site.",
      "Short-circuit penalties apply for damaged silicon components."
    ],
    coordinators: "Rohan Patel (+91 98765 43212), Ananya Das (+91 98765 43213)"
  },
  {
    id: "code-clash",
    name: "Code Clash",
    tagline: "Speed, algorithms, and micro-controller wizardry",
    category: "software",
    type: "Individual",
    minTeam: 1,
    maxTeam: 1,
    deadline: "2026-03-25",
    prize: "₹12,000",
    venue: "Central Computing Facility - Lab A",
    date: "March 28, 2026 - 11:30 AM",
    image: "💻",
    description: "A fast-paced competitive programming and embedded systems coding battle. Solve algorithmic problems, bitwise optimizations, and firmware logic puzzles using C, C++, or Python under strict time limits.",
    rules: [
      "Round 1: 5 Data structures and algorithm problems (60 mins).",
      "Round 2: Low-level firmware debugging and bit manipulation challenges (45 mins).",
      "Plagiarism detection will result in immediate disqualification.",
      "Allowed languages: C, C++, Python, Embedded C.",
      "Leaderboard is ranked by accuracy first, then submission timestamp."
    ],
    coordinators: "Devansh Mehra (+91 98765 43214), Sneha Nair (+91 98765 43215)"
  },
  {
    id: "tech-quiz",
    name: "Tech Quiz",
    tagline: "Battle of the Sharpest Tech Brains",
    category: "trivia",
    type: "Team",
    minTeam: 2,
    maxTeam: 2,
    deadline: "2026-03-26",
    prize: "₹8,000",
    venue: "Seminar Hall 1",
    date: "March 27, 2026 - 11:00 AM",
    image: "🧠",
    description: "Test your intellect across semiconductor history, modern IoT advancements, quantum breakthroughs, consumer tech milestones, and pop culture tech easter eggs.",
    rules: [
      "Teams of strictly 2 members.",
      "Round 1: Written prelims (30 questions in 25 minutes). Top 6 teams qualify.",
      "Round 2: Interactive buzzer round, audio-visual clues, and infinite pounce rounds.",
      "Negative marking applies on incorrect buzzer attempts.",
      "Quizmaster's ruling is final and binding."
    ],
    coordinators: "Aditya Kulkarni (+91 98765 43216), Tanvi Roy (+91 98765 43217)"
  },
  {
    id: "drone-rush",
    name: "Drone Rush",
    tagline: "Precision flight through neon obstacle rings",
    category: "robotics",
    type: "Individual or Team",
    minTeam: 1,
    maxTeam: 3,
    deadline: "2026-03-24",
    prize: "₹15,000",
    venue: "Indoor Sports Complex",
    date: "March 29, 2026 - 01:00 PM",
    image: "🚁",
    description: "Pilot your quadcopter or micro-drone through an intricate indoor obstacle course featuring laser rings, speed straightaways, and precision landing pads.",
    rules: [
      "Maximum drone diagonal size: 350 mm.",
      "Propeller guards are mandatory for all drone categories.",
      "Each team gets 2 practice laps and 2 timed scoring runs.",
      "Ring misses incur a 5-second penalty each.",
      "FPV and line-of-sight categories judged separately."
    ],
    coordinators: "Karthik Iyer (+91 98765 43218)"
  }
];

const INITIAL_REGISTRATIONS = [
  {
    id: "TN26-RBW-1042",
    name: "Arjun Singhania",
    email: "arjun.singhania@college.edu",
    phone: "9876543290",
    dept: "ECE",
    year: "3rd Year",
    eventId: "robo-wars",
    eventName: "Robo Wars",
    participationType: "Team",
    teamName: "Spark Brawlers",
    teamSize: 3,
    members: ["Arjun Singhania", "Vikas Reddy", "Sameer Khan"],
    timestamp: "2026-03-10T14:22:00"
  },
  {
    id: "TN26-CKT-8819",
    name: "Meera Krishnan",
    email: "meera.k@college.edu",
    phone: "9123456780",
    dept: "EEE",
    year: "2nd Year",
    eventId: "circuitrix",
    eventName: "Circuitrix",
    participationType: "Team",
    teamName: "Ohm's Disciples",
    teamSize: 2,
    members: ["Meera Krishnan", "Rahul Joshi"],
    timestamp: "2026-03-11T09:45:00"
  },
  {
    id: "TN26-CDC-3204",
    name: "Siddharth Jain",
    email: "sid.jain@college.edu",
    phone: "9988776655",
    dept: "CSE",
    year: "1st Year",
    eventId: "code-clash",
    eventName: "Code Clash",
    participationType: "Individual",
    teamName: "Solo",
    teamSize: 1,
    members: ["Siddharth Jain"],
    timestamp: "2026-03-12T16:10:00"
  },
  {
    id: "TN26-TQZ-7112",
    name: "Rhea Sen",
    email: "rhea.sen@college.edu",
    phone: "9456123478",
    dept: "ECE",
    year: "2nd Year",
    eventId: "tech-quiz",
    eventName: "Tech Quiz",
    participationType: "Team",
    teamName: "Quantum Quizzers",
    teamSize: 2,
    members: ["Rhea Sen", "Aditi Sharma"],
    timestamp: "2026-03-13T11:05:00"
  },
  {
    id: "TN26-DRN-5501",
    name: "Kabir Malhotra",
    email: "kabir.m@college.edu",
    phone: "9811223344",
    dept: "Mechanical",
    year: "4th Year",
    eventId: "drone-rush",
    eventName: "Drone Rush",
    participationType: "Team",
    teamName: "AeroVipers",
    teamSize: 3,
    members: ["Kabir Malhotra", "Nikhil Rao", "Farhan Akhtar"],
    timestamp: "2026-03-14T17:30:00"
  }
];

const INITIAL_SCHEDULE = [
  {
    day: "Day 1 - March 27, 2026",
    tag: "Kickoff & Core Electronics",
    events: [
      { time: "09:30 AM - 10:30 AM", title: "Grand Inauguration & Keynote by ISRO Scientist", venue: "Main Auditorium", track: "General" },
      { time: "11:00 AM - 01:00 PM", title: "Tech Quiz (Prelims & Buzzer Stage)", venue: "Seminar Hall 1", track: "Trivia" },
      { time: "01:00 PM - 02:00 PM", title: "Networking Lunch & Project Expo", venue: "Club Lounge", track: "Networking" },
      { time: "02:00 PM - 05:30 PM", title: "Circuitrix: Round 1 & Round 2 (Breadboard Arena)", venue: "VLSI Lab 3", track: "Circuits" }
    ]
  },
  {
    day: "Day 2 - March 28, 2026",
    tag: "High Energy & Combat Day",
    events: [
      { time: "09:30 AM - 01:00 PM", title: "Robo Wars: Pool Stages & Qualifier Bouts", venue: "Open Arena", track: "Robotics" },
      { time: "11:30 AM - 02:30 PM", title: "Code Clash: Competitive Algorithmic Battle", venue: "Computing Lab A", track: "Software" },
      { time: "02:30 PM - 05:00 PM", title: "Circuitrix: Final PCB Layout & Fabrication Sprint", venue: "VLSI Lab 3", track: "Circuits" },
      { time: "05:00 PM - 07:00 PM", title: "Robo Wars: Semifinals & Weapon Testing", venue: "Open Arena", track: "Robotics" }
    ]
  },
  {
    day: "Day 3 - March 29, 2026",
    tag: "Grand Championship & Awards",
    events: [
      { time: "10:00 AM - 12:30 PM", title: "Drone Rush: Obstacle Navigation Finals", venue: "Indoor Complex", track: "Robotics" },
      { time: "01:30 PM - 03:30 PM", title: "Robo Wars: Grand Finale & Destructive Showcase", venue: "Open Arena", track: "Robotics" },
      { time: "04:00 PM - 06:00 PM", title: "Valedictory Ceremony, Trophy Distribution & Live Band", venue: "Main Auditorium", track: "Ceremony" }
    ]
  }
];

const INITIAL_FAQS = [
  {
    q: "Who is eligible to participate in TECHNOVA 2026?",
    a: "All undergraduate and diploma engineering students from any recognized college or university are eligible. We welcome students from all years and branches!"
  },
  {
    q: "Is there any registration fee?",
    a: "No! Registration for TECHNOVA 2026 is completely FREE of cost, sponsored by the Electronics Club and industry partners."
  },
  {
    q: "Can I register for multiple events?",
    a: "Yes, you can register for multiple events as long as their scheduled timings do not clash. Please submit a separate registration for each event."
  },
  {
    q: "How will I receive my registration confirmation?",
    a: "Immediately upon form submission, a unique Registration ID and digital entry pass will be generated. You can also view or print your pass anytime in the 'My Registrations' section using your registered college email or ID."
  },
  {
    q: "Will hardware/components be provided for Circuitrix and Robo Wars?",
    a: "For Circuitrix, all breadboards, passives, ICs, and testing equipment (oscilloscopes, power supplies) are provided. For Robo Wars and Drone Rush, teams must bring their own custom-built bots and spare battery packs."
  },
  {
    q: "Do all participants receive certificates?",
    a: "Yes! All verified participants receive an official Certificate of Participation from the Electronics Club. Winners receive cash prizes, trophies, and merit certificates."
  }
];
