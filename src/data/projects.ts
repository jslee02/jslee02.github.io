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
      { label: "PDF", href: "https://arxiv.org/pdf/2511.15586" },
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
    title: "AIKIDO",
    subtitle: "Motion planning and decision making",
    status: "Contributor, 2016 - 2018",
    image: "/assets/aikido-project.svg",
    imageAlt: "Abstract AIKIDO motion planning graphic",
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
    title: "FCL",
    subtitle: "Flexible Collision Library",
    status: "Contributor",
    image: "/assets/fcl-project.svg",
    imageAlt: "Abstract FCL collision detection graphic",
    description:
      "Contributions to collision detection infrastructure used across robotics, motion planning, and simulation workflows.",
    impact: [
      "Worked on collision detection infrastructure for practical robotics software stacks.",
      "Connected geometry, contact, and simulation needs across planning and dynamics workflows.",
    ],
    links: [
      { label: "FCL", href: "https://github.com/flexible-collision-library/fcl" },
    ],
    tags: ["Collision detection", "Geometry", "Simulation"],
    featured: false,
  },
  {
    title: "Gazebo",
    subtitle: "Robot simulation ecosystem",
    status: "Contributor",
    image: "/assets/gazebo-sim.webp",
    imageAlt: "Gazebo simulator screenshot from the upstream Gazebo website",
    description:
      "Integration work in the GUI-based robot simulation ecosystem used by robotics researchers and developers.",
    impact: [
      "Helped bring DART into established Gazebo simulation workflows.",
      "Connected physics engine work to robot simulation tools used by research teams.",
    ],
    links: [
      { label: "Gazebo", href: "https://gazebosim.org/" },
    ],
    tags: ["Robot simulation", "Gazebo", "Physics engines"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const metaProjects = [
  {
    title: "jeongseok-meta",
    subtitle: "Meta-specific public GitHub account",
    status: "Meta public ecosystem",
    description:
      "Public forks, package recipes, and Meta-related open-source maintenance around digital humans, simulation, visualization, and research tooling.",
    impact: [
      "Keeps work-specific public maintenance separate from the personal jslee02 account.",
      "Includes public work around MHR, Momentum, DART, viser, and supporting C++/Python infrastructure.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/jeongseok-meta" },
    ],
    tags: ["Meta", "Open source", "Research tooling"],
  },
  {
    title: "conda-forge feedstock maintenance",
    subtitle: "Packaging infrastructure for research software",
    status: "Packaging / ecosystem",
    description:
      "Tracked conda-forge inventory for robotics, vision, geometry, visualization, ML, and simulation-adjacent packages.",
    impact: [
      "58 feedstocks created, 11 co-maintained, 1 additional feedstock contributed to, and 70 total feedstocks listed.",
      "Includes packages such as MHR, Momentum, DART, viser, nerfstudio, gpytoolbox, mmpose, and AdaptiveCpp.",
    ],
    links: [
      {
        label: "Inventory",
        href: "https://github.com/jeongseok-meta/conda-forge-dashboard/wiki/Feedstock-Inventory",
      },
      {
        label: "Dashboard",
        href: "https://github.com/jeongseok-meta/conda-forge-dashboard",
      },
    ],
    tags: ["conda-forge", "Packaging", "Research infrastructure"],
  },
];

export const curatedLists = [
  {
    title: "Awesome Robotics Libraries",
    subtitle: "Robotics software map",
    status: "Maintainer",
    description:
      "Curated robotics libraries and software across planning, dynamics, perception, control, simulation, and tooling.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jslee02/awesome-robotics-libraries",
      },
    ],
    tags: ["Robotics", "Libraries", "Open source"],
  },
  {
    title: "Awesome Collision Detection",
    subtitle: "Geometry and proximity queries",
    status: "Maintainer",
    description:
      "Curated collision detection libraries and resources for robotics, simulation, motion planning, and graphics.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jslee02/awesome-collision-detection",
      },
    ],
    tags: ["Collision detection", "Geometry", "Simulation"],
  },
  {
    title: "Awesome Graphics Libraries",
    subtitle: "3D graphics resources",
    status: "Maintainer",
    description:
      "Curated 3D graphics libraries and resources relevant to simulation, visualization, rendering, and tooling.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jslee02/awesome-graphics-libraries",
      },
    ],
    tags: ["Graphics", "Visualization", "Rendering"],
  },
  {
    title: "Awesome Entity Component System",
    subtitle: "ECS libraries and resources",
    status: "Maintainer",
    description:
      "Curated Entity-Component-System libraries and resources for scalable simulation, game, and tool architectures.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jslee02/awesome-entity-component-system",
      },
    ],
    tags: ["ECS", "Architecture", "C++"],
  },
  {
    title: "Awesome GPGPU",
    subtitle: "CUDA, OpenCL, Vulkan, and compute",
    status: "Maintainer",
    description:
      "Curated GPGPU resources for heterogeneous compute work spanning CUDA, OpenCL, Vulkan, and related tooling.",
    links: [
      { label: "GitHub", href: "https://github.com/jslee02/awesome-gpgpu" },
    ],
    tags: ["GPGPU", "CUDA", "Compute"],
  },
  {
    title: "Awesome Robotics Simulation",
    subtitle: "Multibody dynamics papers",
    status: "Maintainer",
    description:
      "Curated resources for multibody dynamics simulation papers and robotics simulation research context.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jslee02/awesome-robotics-simulation",
      },
    ],
    tags: ["Robotics simulation", "Multibody dynamics", "Papers"],
  },
  {
    title: "Awesome C++ Python Binding Generators",
    subtitle: "Binding generator survey",
    status: "Maintainer",
    description:
      "Curated automatic Python binding generators for C++ projects, useful for simulation and robotics libraries with Python APIs.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jslee02/awesome-cpp-python-binding-generator",
      },
    ],
    tags: ["C++", "Python", "Bindings"],
  },
];
