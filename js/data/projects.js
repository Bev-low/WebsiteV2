// Edit projects here. Asset paths are relative to index.html.
const projects = [
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
    "context": "A team project building a two-player chess game on two synchronised FPGA boards. Moves travel over UART, the game runs on a VGA display, and captured pieces appear on an OLED screen.",
    "role": "VGA graphics, audio logic & visual design",
    "contributions": [
      "Scaled an OLED-based layout for VGA, working through display coordinates and pixel alignment.",
      "Implemented distinct sounds for moves, captures, and promotions, with looping music on start and end screens.",
      "Created pixel art for the start and end screens and implemented the logic for screen transitions."
    ],
    "result": "A complete game with coordinated boards, timed turns, and visual and audio feedback.",
    "url": "https://github.com/Bev-low/EE2026_project/tree/FINAL",
    "image": "assets/images/projects/Crazy_Chess.jpg",
    "imageAlt": "My FPGA Chess Project"
  },
  {
    "id": "alex",
    "name": "Alex the Rescue Bot",
    "kind": "Hardware",
    "art": "robot",
    "status": "Completed",
    "tech": [
      "C/C++",
      "ROS",
      "Raspberry Pi",
      "Arduino",
      "SLAM"
    ],
    "short": "Mapping, navigation, and sensing for a rescue robot.",
    "context": "A team-built robot using Raspberry Pi 4 and Arduino to navigate a search-and-rescue maze. The project combined SLAM, ROS, motion control, and colour detection.",
    "role": "Colour detection & robotics integration",
    "contributions": [
      "Focused on colour-detection code using ratios between colour channels to improve consistency across lighting conditions.",
      "Worked within a robot integrating sensors, actuators, navigation, and modular ROS communication.",
      "The team incorporated gyroscope-based turning to improve movement precision."
    ],
    "result": "An integrated rescue-robot project connecting perception, control, and physical hardware.",
    "url": "https://github.com/Bev-low/Alex-the-Rescue-Bot",
    "image": "assets/images/projects/Alex.png",
    "imageAlt": ""
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
    "imageAlt": ""
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
      "ESP32",
      "Interrupts",
      "3D Printing"
    ],
    "short": "Coordinating motion, light, and sound in real time.",
    "context": "A robotics challenge for CG2271, developed around a Freedom board with concurrent tasks and an interrupt service routine. Bluetooth commands arrive through an ESP32.",
    "role": "Team robotics project",
    "contributions": [
      "Implemented robot behaviour combining wireless commands, movement, LEDs, and buzzer audio.",
      "Used concurrent tasks and interrupts to coordinate components under timing constraints.",
      "Integrated components on a custom protoboard circuit with a 3D-printed front plate."
    ],
    "result": "A robot with directional and curved movement, state-based lighting, and responsive audio.",
    "url": "https://github.com/Bev-low/CG2271/tree/Test/Test",
    "image": "assets/images/projects/CHILD.jpg",
    "imageAlt": ""
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
    "context": "A past startup venture that explored vertical immersion cooling for servers. The design considered access, maintenance, load capacity, coolant use, and modularity. The venture is no longer ongoing.",
    "role": "Lead engineer",
    "contributions": [
      "Led the engineering design effort during a startathon.",
      "Explored a vertical layout and the load and maintenance challenges that come with it.",
      "Applied modular design thinking to improve accessibility and flexibility.",
      "Investigated more compact server layouts and ways to reduce coolant requirements."
    ],
    "result": "The venture has ended. It remains part of my experience exploring a product idea through engineering design.",
    "image": "assets/images/projects/bluehouse.png",
    "imageAlt": ""
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
    "imageAlt": ""
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
    "imageAlt": ""
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
    "imageAlt": ""
  },
  {
    "id": "Website",
    "name": "Portfolio",
    "kind": "Software",
    "art": "web",
    "status": "Completed",
    "tech": [
      "React",
      "JavaScript",
      "CSS",
      "Vercel"
    ],
    "short": "My first attempt at making a home for my work.",
    "context": "The earlier version of this portfolio, built as a personal challenge to create a responsive website in under 24 hours.",
    "role": "Design, development & deployment",
    "contributions": [
      "Built the portfolio using React, JavaScript, and CSS.",
      "Created responsive layouts and interactive sections for projects and experience.",
      "Deployed the site on Vercel."
    ],
    "result": "A first portfolio bringing my work together online. This redesign is its next chapter.",
    "url": "https://github.com/Bev-low/website/tree/master/WebsiteV2",
    "image": "",
    "imageAlt": ""
  }
];

export default projects;
