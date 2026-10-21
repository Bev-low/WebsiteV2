// Edit portfolio content here. classYear and graduationYear are separate; planned project work belongs in nextSteps.
window.PORTFOLIO = {
  "profile": {
    "name": "Beverly Low",
    "resumePdf": "assets/documents/Low_Beverly_Resume_2026.pdf",
    "handle": "@beverlylow",
    "intro": "An engineer who cares about the people behind the problems.",
    "subtitle": "Hardware, software, filmmaking, and a little perspective.",
    "educationLine": "NUS Computer Engineering",
    "classYear": "2023",
    "location": "Singapore",
    "avatar": "assets/images/camera_images/Main.jpg",
    "banner": "assets/images/camera_images/Banner.jpg",
    "email": "low_beverly@u.nus.edu",
    "linkedin": "https://www.linkedin.com/in/beverly-low-bl/",
    "github": "https://github.com/Bev-low",
    "website": "https://www.beverlylow.site/",
    "summary": "Computer Engineering student at NUS, graduating in May 2027, with experience in digital IC verification, robotics integration, deployment automation, and sales. Seeking roles in solutions engineering, technology sales, and solutions architecture that combine technical problem-solving with understanding customer needs and communicating value.",
    "graduationYear": "2027",
    "careerFocus": "Looking for roles in solutions engineering, technology sales, and solutions architecture."
  },
  "projects": [
    {
      "id": "crazy-chess",
      "name": "Crazy Chess",
      "kind": "Hardware",
      "art": "chess",
      "status": "Completed",
      "tech": [
        "Verilog",
        "Vivado",
        "FPGA",
        "UART",
        "VGA"
      ],
      "short": "Two FPGA boards. One very competitive game of chess.",
      "context": "A team-built two-player chess game on Basys 3 FPGA boards using Verilog. UART links the boards, 640 × 480 VGA output displays the game, and an OLED display provides additional visual feedback.",
      "role": "Game logic, VGA graphics & audio integration",
      "contributions": [
        "Co-developed game logic including move tracking, real-time move validation, and pawn promotion.",
        "Integrated UART communication, 640 × 480 VGA output, and OLED feedback, adapting display coordinates and pixel alignment.",
        "Implemented event-triggered sounds for moves, captures, and promotions, with looping music on start and end screens.",
        "Created pixel art for the start and end screens and implemented screen transitions."
      ],
      "result": "A complete game with coordinated boards, timed turns, and visual and audio feedback.",
      "url": "https://github.com/Bev-low/EE2026_project/tree/FINAL",
      "image": "assets/images/projects/Crazy_Chess.jpg",
      "imageAlt": "My FPGA Chess Project",
      "label": "School project",
      "pinned": 1,
      "date": "January – May 2025"
    },
    {
      "id": "alex",
      "name": "Alex the Rescue Bot",
      "kind": "Hardware",
      "art": "robot",
      "status": "Completed",
      "tech": [
        "C/C++",
        "ROS 2",
        "Raspberry Pi",
        "Arduino",
        "SLAM"
      ],
      "short": "Mapping, navigation, and sensing for a rescue robot.",
      "context": "A team-built, remotely controlled search-and-rescue robot using Raspberry Pi 4, Arduino, and ROS 2. The system combines SLAM mapping, gyroscope-based turning, and colour detection for navigation and victim identification.",
      "role": "Colour detection & robotics integration",
      "contributions": [
        "Contributed to robot integration and debugging across Raspberry Pi 4, Arduino, sensors, and ROS 2 communication.",
        "Implemented ratio-based colour detection to support victim identification under varying lighting conditions.",
        "Supported remote navigation, SLAM mapping, and gyroscope-based turning as part of the integrated robot."
      ],
      "result": "An integrated rescue-robot project connecting perception, control, and physical hardware.",
      "url": "https://github.com/Bev-low/Alex-the-Rescue-Bot",
      "image": "assets/images/projects/Alex.png",
      "imageAlt": "",
      "label": "School project",
      "pinned": 2,
      "date": "January – May 2024"
    },
    {
      "id": "buffbuddy",
      "name": "BuffBuddy",
      "kind": "Software",
      "art": "terminal",
      "status": "Completed",
      "tech": [
        "Java",
        "OOP",
        "Gson",
        "JSON",
        "CLI"
      ],
      "short": "A command-line companion for a healthier everyday.",
      "context": "A team-built CLI application for tracking workouts, meals, and water intake. The focus was a simple interface and maintainable, well-encapsulated application logic.",
      "role": "Persistence, hydration tracking & documentation",
      "contributions": [
        "Implemented saving and loading with Gson, reading and writing custom data types in JSON.",
        "Designed and built the water-tracking feature.",
        "Helped debug application issues and proposed designs with minimal coupling.",
        "Created UML diagrams and Markdown documentation to explain structure and usage."
      ],
      "result": "A fitness-tracking application with persistent records and documented software architecture.",
      "url": "https://github.com/AY2425S1-CS2113-W10-3/tp",
      "video": "https://youtu.be/lOtPP37NJ2o",
      "image": "assets/images/projects/buffbuddy.png",
      "imageAlt": "",
      "label": "School project"
    },
    {
      "id": "rtos",
      "name": "CHILD #5 · RTOS Robot",
      "kind": "Hardware",
      "art": "rtos",
      "status": "Completed",
      "tech": [
        "C++",
        "RTOS",
        "PCB Design",
        "ESP32",
        "Interrupts",
        "3D Printing"
      ],
      "short": "Coordinating motion, light, and sound in real time.",
      "context": "A robotics challenge for CG2271, developed around a Freedom board with concurrent tasks and an interrupt service routine. Bluetooth commands arrive through an ESP32.",
      "role": "Task coordination, integration & PCB design",
      "contributions": [
        "Coordinated team tasks and integration for a C++ RTOS robotics system combining obstacle navigation, Bluetooth control, and audio feedback.",
        "Used concurrent tasks and interrupts to coordinate movement, LEDs, and buzzer audio under timing constraints.",
        "Debugged hardware issues and designed a custom PCB to address grounding problems and reduce weight."
      ],
      "result": "An integrated robotics system that finished in the top 10% of the project competition.",
      "url": "https://github.com/Bev-low/CG2271/tree/Test/Test",
      "image": "assets/images/projects/CHILD.jpg",
      "imageAlt": "",
      "label": "School project",
      "pinned": 3,
      "date": "January – May 2025"
    },
    {
      "id": "cooling",
      "name": "Vertical Immersion Cooling",
      "kind": "Ventures",
      "art": "cooling",
      "status": "Past startup venture",
      "tech": [
        "CAD",
        "3D Printing",
        "System Design",
        "Startathon"
      ],
      "short": "Exploring a modular approach to server cooling.",
      "context": "A past early-stage venture exploring immersion cooling for data centres, with the aim of reducing water and energy use. Design work considered vertical layouts, separate hot and cold chambers, and practical adoption barriers. The venture is no longer ongoing.",
      "role": "Lead engineer",
      "contributions": [
        "Led engineering design exploration during a startathon, developing sketches and CAD models.",
        "Explored separate hot and cold chambers, modular layouts, and access for server maintenance.",
        "Gathered feedback on adoption barriers through a visit to NUS’s STDCT facility and discussions with industry professionals at Data Centre World 2025."
      ],
      "result": "Developed design concepts and gathered industry feedback. The venture has ended; the work remains part of my experience connecting engineering ideas with practical adoption challenges.",
      "image": "assets/images/projects/bluehouse.png",
      "imageAlt": "",
      "label": "Past venture · Startathon",
      "date": "August 2024 – December 2025"
    },
    {
      "id": "e-mini-mart",
      "name": "E-Mini Mart",
      "kind": "Software",
      "art": "mart",
      "status": "Completed",
      "tech": [
        "React",
        "JavaScript",
        "Mantine",
        "Redux",
        "Hack4Good"
      ],
      "short": "A digital marketplace for shoppers and administrators.",
      "context": "A Hack4Good project providing a web marketplace, checkout flow, and an admin dashboard for managing stock and transactions.",
      "role": "Frontend development & UI/UX",
      "contributions": [
        "Led frontend development and interface design for the marketplace, checkout, and admin dashboard.",
        "Used Redux to coordinate application state and update the interface without page reloads.",
        "Designed an interface for both teenage users and administrators."
      ],
      "result": "A hackathon web application connecting shopping and administration workflows.",
      "url": "https://github.com/Bev-low/Hack4Good",
      "video": "https://youtu.be/eUklz55i0BY",
      "image": "assets/images/projects/E-Mart.png",
      "imageAlt": "",
      "label": "Hackathon"
    },
    {
      "id": "ryan",
      "name": "Ryan the Maze Runner",
      "kind": "Hardware",
      "art": "maze",
      "status": "Completed",
      "tech": [
        "Arduino",
        "C/C++",
        "mBot",
        "Sensors"
      ],
      "short": "Following lines, reading colour, finding a route.",
      "context": "An autonomous maze-solving robot built with Arduino and mBot sensors, combining line and colour detection with movement control.",
      "role": "Detection algorithms & hardware assembly",
      "contributions": [
        "Implemented and refined line- and colour-detection algorithms.",
        "Focused on colour detection across changing environmental conditions.",
        "Assembled the robot and integrated its sensors with software control."
      ],
      "result": "Finished in the top 10% of competition timings.",
      "url": "https://github.com/Bev-low/Ryan-The-Maze-Runner",
      "image": "assets/images/projects/Ryan.png",
      "imageAlt": "",
      "label": "School project"
    },
    {
      "id": "obstacle",
      "name": "Obstacle Robot",
      "kind": "Hardware",
      "art": "obstacle",
      "status": "Completed",
      "tech": [
        "Arduino",
        "C/C++",
        "Prototyping",
        "Video Editing"
      ],
      "short": "A lightweight robot made from everyday materials.",
      "context": "A robot built from materials including cardboard, popsicle sticks, and breadboards to take on a set of engineering obstacles.",
      "role": "Prototyping, movement control & video editing",
      "contributions": [
        "Proposed and implemented a rocket-launcher mechanism in place of a catapult.",
        "Wrote movement-control code using driver chips and assembled electrical components.",
        "Made weight-saving design choices, including cardboard wheels.",
        "Edited the project demonstration video."
      ],
      "result": "The lightest robot in the tutorial group, with cardboard wheels saving 5 g per wheel.",
      "video": "https://youtu.be/ShXf9cs_sNk",
      "image": "assets/images/projects/EG1311.png",
      "imageAlt": "",
      "label": "School project"
    },
    {
      "id": "Website",
      "name": "Portfolio Website",
      "kind": "Software",
      "art": "web",
      "status": "Ongoing improvements",
      "tech": [
        "HTML",
        "CSS",
        "JavaScript",
        "ChatGPT"
      ],
      "short": "A personal portfolio built through design iteration and AI-assisted development.",
      "context": "A home for my engineering work, films, and photography. I used ChatGPT to help create website components and iterated on the content, layout, and interactions. The current version uses HTML, CSS, and JavaScript, building on an earlier React portfolio.",
      "role": "Design direction, content & AI-assisted development",
      "contributions": [
        "Used ChatGPT to help build website components, turning design ideas into prompts and iterating on the generated code.",
        "Shaped the site’s content, navigation, responsive layouts, and project and media galleries.",
        "Refined search, project labels, pinned projects, and the viewing experience across mobile and larger screens."
      ],
      "result": "A working portfolio that I continue to improve as my projects and experience grow.",
      "url": "https://github.com/Bev-low/website/tree/master/WebsiteV2",
      "image": "assets/images/projects/website.png",
      "imageAlt": "",
      "label": "Website",
      "sourceLabel": "Earlier React version",
      "nextSteps": [
        "Explore cloud hosting for the portfolio, including how the site’s hosting resources are configured and managed.",
        "Write repeatable infrastructure and deployment scripts to automate setup and publishing, using the site as a practical cloud-learning project."
      ]
    },
    {
      "id": "riscv-processor",
      "name": "RISC-V Processor",
      "kind": "Hardware",
      "label": "School project",
      "art": "processor",
      "status": "In progress",
      "tech": [
        "RISC-V",
        "FPGA",
        "Processor Design"
      ],
      "short": "Building a RISC-V soft-core processor, from datapath to pipelining.",
      "context": "An FPGA-based RISC-V soft-core processor developed through coursework, now being extended to explore more advanced processor architecture.",
      "role": "Processor design & implementation",
      "contributions": [
        "Designed and implemented a RISC-V soft-core processor on FPGA, building core components including the datapath, ALU, control logic, and memory interfaces.",
        "Reviewed LUT and register utilisation and critical-path timing to explore implementation trade-offs between Booth and conventional multiplication algorithms.",
        "Currently extending the coursework to processor pipelining and hazard handling, branch prediction, instruction and data caches, and potentially more."
      ],
      "result": "Currently in progress: extending the processor beyond the initial coursework implementation.",
      "image": "",
      "imageAlt": "",
      "date": "August 2026 – Present"
    }
  ],
  "experience": [
    {
      "company": "Espressif Systems",
      "role": "Digital IC Verification Intern",
      "date": "July 2026 – Present",
      "place": "",
      "tags": [
        "SystemVerilog",
        "UVM",
        "C",
        "Verdi",
        "Python",
        "Claude AI"
      ],
      "points": [
        "Develop verification tests for clock/reset and security modules using SystemVerilog, UVM, and C, closing coverage gaps to achieve approximately 99–100% line, branch, and condition coverage in assigned modules.",
        "Developed 25+ directed tests across five module areas, investigating functional defects with designers and contributing to at least two confirmed design fixes.",
        "Debug simulation failures with Verdi, tracing signal behaviour and inspecting driver/load connectivity to investigate potential causes in the RTL and testbench.",
        "Used Claude AI to help build Python scripts for batch regression automation and a simulation-tracking dashboard, translating workflow requirements into tools and consolidating evidence for debugging."
      ],
      "id": "espressif"
    },
    {
      "company": "August Robotics",
      "role": "Software Engineering Intern",
      "date": "July – December 2025",
      "place": "Shenzhen, China",
      "tags": [
        "Python",
        "ROS",
        "Linux",
        "Bash",
        "CAN",
        "Modbus RS485"
      ],
      "points": [
        "Built an end-to-end deployment tool with a user interface and backend automation for ARM and x86 platforms, bringing setup across multiple software tools into a one-click workflow for 3–4 robot assembly engineers.",
        "Used Linux Bash to automate environment setup, testing, and configuration across the supported platforms.",
        "Developed Python test scripts and ROS drivers to automate validation of 9+ robotic components, troubleshooting serial, Modbus RS485, CAN, and Ethernet communications to resolve hardware–software integration issues."
      ],
      "id": "august-robotics"
    },
    {
      "company": "Bumblebee HornetX",
      "role": "Power Subteam · Electrical Team",
      "date": "August 2024 – May 2025",
      "place": "Autonomous Underwater Vehicle Competition Team",
      "tags": [
        "PCB Design",
        "Power Systems",
        "Integration"
      ],
      "points": [
        "Designed the AUV power architecture, including voltage regulation, current monitoring, and protection circuits.",
        "Integrated electrical components with mechanical, control, and propulsion subsystems, coordinating sensor, actuator, and motor interfaces.",
        "Engineered custom PCBs with attention to routing, thermal management, component placement, and durability."
      ],
      "id": "bumblebee"
    },
    {
      "company": "Pixta Vietnam",
      "role": "Business Incubation Intern",
      "date": "May – August 2024",
      "place": "Hanoi, Vietnam",
      "tags": [
        "Videography",
        "Content Strategy",
        "Creative Direction"
      ],
      "points": [
        "Created 30+ videos and marketing materials, contributing to a 28% increase in average video views and 100% growth in audience engagement.",
        "Improved production output from two to five videos weekly, with a 25% improvement in audience retention metrics.",
        "Led 7+ professional video shoots as primary videographer, managing stakeholders, timelines, and creative direction.",
        "Developed content formats and campaigns as followers grew from 200 to 4,000 across platforms."
      ],
      "id": "pixta"
    },
    {
      "company": "SMV Marketing Group",
      "role": "Sales Associate",
      "date": "February – April 2023",
      "place": "",
      "tags": [
        "Communication",
        "Sales",
        "Relationship Building"
      ],
      "points": [
        "Presented corporate social responsibility donation opportunities to businesses, securing S$23,000 in commitments to recurring donations supporting Sian Chay Medical Institution.",
        "Ranked among the top 10 of 300 salespeople within the second week of joining.",
        "Achieved a 20% sales conversion rate, compared with the team average of 5%."
      ],
      "id": "smv"
    }
  ],
  "media": [
    {
      "id": "the-world-is-beautiful",
      "type": "video",
      "category": "videos",
      "title": "The World Is Beautiful",
      "description": "Fun Trip to Iceland.",
      "url": "https://y2u.be/EWDm5ORr6tk",
      "thumbnail": "assets/images/others/TheWorldIsBeautiful.jpg",
      "alt": "",
      "art": "terminal",
      "label": "Fun films"
    },
    {
      "id": "Travel-thru-one-year",
      "type": "video",
      "category": "videos",
      "title": "5 Trips, 5 Stories",
      "description": "Summary of my 20th year.",
      "url": "https://y2u.be/tJEaiRzKYzM",
      "thumbnail": "assets/images/others/Travel.webp",
      "alt": "",
      "art": "terminal",
      "label": "Fun films"
    },
    {
      "id": "CHILD#5-demo",
      "type": "video",
      "category": "Project demo",
      "title": "CHILD #5",
      "description": "A CG2271 RTOS robot using a Freedom board to coordinate movement, LEDs, and audio, with Bluetooth commands received through an ESP32.",
      "url": "https://y2u.be/0y6Lkh7DaQw",
      "thumbnail": "assets/images/projects/CHILD.jpg",
      "alt": "",
      "art": "terminal",
      "label": "Project videos"
    },
    {
      "id": "buffbuddy-demo",
      "type": "video",
      "category": "Project demo",
      "title": "BuffBuddy",
      "description": "A CLI fitness app that lets gymgoers log workouts, meals, and water intake by typing commands in the terminal.",
      "url": "https://youtu.be/lOtPP37NJ2o",
      "thumbnail": "assets/images/projects/buffbuddy.png",
      "alt": "",
      "art": "terminal",
      "label": "Project videos"
    },
    {
      "id": "e-mini-mart-demo",
      "type": "video",
      "category": "Project demo",
      "title": "E-Mini Mart",
      "description": "Built for the Hack4Good hackathon: a digital marketplace with checkout and an admin dashboard for stock and transactions.",
      "url": "https://youtu.be/eUklz55i0BY",
      "thumbnail": "assets/images/projects/E-Mart.png",
      "alt": "",
      "art": "mart",
      "label": "Project videos"
    },
    {
      "id": "obstacle-demo",
      "type": "video",
      "category": "Project demo",
      "title": "Obstacle Robot",
      "description": "An EG1311 robot designed to complete multiple challenges with minimal weight, using cardboard wheels and a launcher.",
      "url": "https://youtu.be/ShXf9cs_sNk",
      "thumbnail": "assets/images/projects/EG1311.png",
      "alt": "",
      "art": "obstacle",
      "label": "Project videos"
    },
    {
      "id": "solo-camp",
      "type": "photo",
      "category": "photo",
      "title": "First Solo Camping",
      "description": "Alone on the peak of Storheia in Bymarka (565 m), Trondheim, Norway. An incredible experience with a 15 kg backpack, ukulele, tent, dinner, sleeping bag, and more.",
      "url": "assets/images/hobbies/SoloCamping.jpg",
      "thumbnail": "assets/images/hobbies/SoloCamping.jpg",
      "alt": "",
      "art": "terminal",
      "label": "Photo",
      "src": "assets/images/hobbies/SoloCamping.jpg",
      "photos": [
        {
          "src": "assets/images/hobbies/SoloCamping.jpg",
          "alt": "Tent pitched on a rocky summit overlooking the Norwegian landscape"
        },
        {
          "src": "assets/images/hobbies/camping2.jpg",
          "alt": "Cooking at camp above the water in the evening sun"
        },
        {
          "src": "assets/images/hobbies/camping3.jpg",
          "alt": "A jump silhouetted against the sunset above the water"
        },
        {
          "src": "assets/images/hobbies/camping4.jpg",
          "alt": "Taking in the summit view with a ukulele"
        },
        {
          "src": "assets/images/hobbies/camping5.jpg",
          "alt": "Resting beside a hiking backpack on the rocky summit"
        }
      ]
    },
    {
      "id": "harmonica",
      "type": "video",
      "category": "videos",
      "title": "Harmonica But Cinematic",
      "description": "Piano Man - Harmonica",
      "url": "https://y2u.be/tL_kSOIq-PE",
      "thumbnail": "assets/images/others/harmonica.webp",
      "alt": "",
      "art": "terminal",
      "label": "Fun films"
    },
    {
      "id": "oreo",
      "type": "video",
      "category": "videos",
      "title": "Oreo The Cat",
      "description": "Wes Anderson Inspired concept with my cats as the subject",
      "url": "https://y2u.be/Ysi90z-Fmco",
      "thumbnail": "assets/images/others/oreo.jpg",
      "alt": "",
      "art": "terminal",
      "label": "Fun films"
    }
  ],
  "about": {
    "paragraphsFile": "about.txt",
    "heading": [
      "Made to build.",
      "Here to connect."
    ],
    "lead": "I want the things I build to matter to someone. And I want to know the people I’m building them for.",
    "paragraphs": [
      "I’m studying Computer Engineering at NUS, graduating in May 2027. My experience spans chip verification, robotics integration, deployment automation, and content production. I like understanding how systems work and turning that understanding into useful tools.",
      "I’m looking for roles in solutions engineering, technology sales, or solutions architecture, where I can solve technical problems while working closely with people. My engineering and sales experience has taught me to ask questions early, understand requirements, and explain value clearly. I want to build on that foundation by developing demos and proofs of concept, learning from experienced engineers, and helping customers find solutions that fit their needs.",
      "I’m drawn to entrepreneurship and to the infrastructure behind useful products. I earned the AWS Certified Cloud Practitioner certification in November 2024, and I’m interested in cloud computing and long-term data storage. I also use tools such as Claude and ChatGPT to help build software, from engineering workflow tools to this portfolio.",
      "I build trust in myself by showing up. By trying the difficult thing, learning from rejection, and coming back even when the day is messy. I’m still figuring things out. I want to keep learning, be present, and make genuine connections along the way."
    ],
    "interests": [
      "Computer architecture",
      "Embedded systems",
      "Cloud computing",
      "Long-term data storage",
      "Filmmaking",
      "Hiking & mountains",
      "Surfing",
      "Entrepreneurship"
    ]
  },
  "education": {
    "institution": "National University of Singapore",
    "degree": "Bachelor of Engineering (Computer Engineering)",
    "dates": "August 2023 – May 2027",
    "gpa": "4.85 / 5.00",
    "achievement": "Dean’s List · AY24/25 Semester 2",
    "programmes": [
      "IEEE-HKN member",
      "NOC Vietnam · 3 months",
      "NOC Greater Bay Area · 6 months",
      "Exchange · Norwegian University of Science and Technology"
    ],
    "coursework": [
      "Computer Networks",
      "Computer Architecture",
      "Digital Design",
      "Data Structures and Algorithms",
      "Software Engineering",
      "Object-Oriented Programming"
    ]
  },
  "certifications": [
    {
      "name": "AWS Certified Cloud Practitioner",
      "date": "Earned November 2024"
    }
  ],
  "skillGroups": [
    {
      "name": "Verification & hardware",
      "items": [
        "SystemVerilog",
        "UVM",
        "Verilog",
        "Verdi",
        "Vivado",
        "FPGA",
        "PCB Design"
      ]
    },
    {
      "name": "Software & systems",
      "items": [
        "Python",
        "C",
        "C++",
        "Java",
        "Assembly",
        "Linux",
        "Bash",
        "ROS",
        "Git",
        "React",
        "JavaScript"
      ]
    },
    {
      "name": "Automation & AI tools",
      "items": [
        "Deployment automation",
        "Regression testing",
        "Claude AI",
        "ChatGPT",
        "AI-assisted development"
      ]
    },
    {
      "name": "Communication",
      "items": [
        "Technical presentations",
        "Relationship building",
        "English",
        "Mandarin"
      ]
    }
  ]
};
