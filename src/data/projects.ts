export const projects = [
  {
    title: "DART",
    subtitle: "Dynamic Animation and Robotics Toolkit",
    status: "Lead developer, Nov 2012 - present",
    image: "/assets/dart-logo.jpg",
    imageAlt: "DART project logo",
    description:
      "Research-focused C++ physics engine for robotics, animation, and machine learning, with Python bindings and long-running use in robotics simulation research.",
    impact: [
      "Kinematics, dynamics, collision detection, optimization, and articulated rigid-body simulation.",
      "JOSS publication and Grand Prize, OSS World Challenge 2016.",
      "Integrated into Gazebo workflows for DARPA Robotics Challenge research.",
    ],
    links: [
      { label: "Website", href: "https://dart.readthedocs.io/en/latest/" },
      { label: "GitHub", href: "https://github.com/dartsim/dart" },
      { label: "Paper", href: "https://doi.org/10.21105/joss.00500" },
    ],
    tags: ["C++", "Python", "Physics engine", "Robotics"],
    featured: true,
  },
  {
    title: "MHR",
    subtitle: "Momentum Human Rig",
    status: "Research software, Meta",
    image: "/assets/mhr-teaser.jpg",
    imageAlt: "Momentum Human Rig teaser image",
    description:
      "An anatomically inspired parametric full-body digital human model for computer graphics and computer vision research.",
    impact: [
      "Includes a skeletal model, skinned mesh levels of detail, body blendshapes, pose correctives, and facial blendshape model.",
      "Connects Jeongseok's simulation background to current work on digital humans and avatars.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/facebookresearch/MHR" },
      { label: "arXiv", href: "https://arxiv.org/pdf/2511.15586" },
    ],
    tags: ["Digital humans", "Avatars", "Meta", "Research"],
    featured: true,
  },
  {
    title: "Momentum",
    subtitle: "Human kinematics and optimization",
    status: "Research software, Meta",
    image: "/assets/momentum-viewer.webp",
    imageAlt: "Momentum viewer screenshot",
    description:
      "A library for human kinematic motion and numerical optimization solvers for applying and analyzing human motion.",
    impact: [
      "Public software around kinematic motion, numerical optimization, and practical tooling.",
      "Complements MHR as part of a broader digital-human research stack.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/facebookresearch/momentum" },
    ],
    tags: ["Kinematics", "Optimization", "Human motion", "Meta"],
    featured: true,
  },
  {
    title: "Awesome Robotics Libraries",
    subtitle: "Curated software map for robotics developers",
    status: "Maintainer",
    image: "/assets/robotics-libraries.svg",
    imageAlt: "Abstract map of connected robotics software libraries",
    description:
      "A high-signal index of robotics software libraries and resources, maintained alongside related collections for collision detection, graphics, GPGPU, and ECS.",
    impact: [
      "Helps robotics developers discover practical libraries across planning, dynamics, perception, control, and tooling.",
      "One of several maintained public lists that make Jeongseok's software taste visible beyond individual projects.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jslee02/awesome-robotics-libraries",
      },
    ],
    tags: ["Robotics", "Open source", "Curation"],
    featured: false,
  },
  {
    title: "AIKIDO",
    subtitle: "Motion planning and decision making",
    status: "Contributor, 2016 - 2018",
    image: "/assets/dart-logo.jpg",
    imageAlt: "DART logo, representing robotics software work",
    description:
      "Robotic manipulation framework used by the Personal Robotics Lab, with work spanning inverse kinematics, collision detection, and robot dynamics.",
    impact: [
      "Deployed to lab robot platforms including HERB and ADA.",
      "Connected planning, dynamics, and system integration in manipulation workflows.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/personalrobotics/aikido" },
    ],
    tags: ["Motion planning", "Manipulation", "C++"],
    featured: false,
  },
  {
    title: "FCL and Gazebo",
    subtitle: "Collision detection and robot simulation ecosystem",
    status: "Contributor",
    image: "/assets/dart-logo.jpg",
    imageAlt: "DART logo, representing simulation ecosystem work",
    description:
      "Contributions across widely used robotics simulation infrastructure, including collision detection and GUI-based robot simulation.",
    impact: [
      "FCL work focused on collision detection infrastructure.",
      "Gazebo integration helped bring DART into established robotics simulation workflows.",
    ],
    links: [
      { label: "FCL", href: "https://github.com/flexible-collision-library/fcl" },
      { label: "Gazebo", href: "https://gazebosim.org/" },
    ],
    tags: ["Collision detection", "Gazebo", "Simulation"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
