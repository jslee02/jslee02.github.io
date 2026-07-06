import { career, education, profile, skills } from "@/data/profile";
import { projects } from "@/data/projects";
import {
  awards,
  patents,
  publications,
  service,
  talks,
} from "@/data/research";

export const locales = ["en", "ko"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function localizedPath(locale: Locale, path: string) {
  if (locale === defaultLocale) {
    return path;
  }

  return path === "/" ? `/${locale}/` : `/${locale}${path}`;
}

export function singlePagePath(locale: Locale, path: string) {
  const root = localizedPath(locale, "/");
  const basePath = canonicalBasePath(path);

  if (basePath === "/") {
    return root;
  }

  const section = basePath.replace(/^\/|\/$/g, "");
  return `${root}#${section}`;
}

export function basePathFromPathname(pathname: string) {
  if (pathname === "/ko" || pathname === "/ko/") {
    return "/";
  }

  if (pathname.startsWith("/ko/")) {
    return pathname.slice(3) || "/";
  }

  return pathname;
}

export function canonicalBasePath(path: string) {
  return path === "/work/" ? "/software/" : path;
}

const nav = {
  en: [
    { href: "/", label: "Home" },
    { href: "/software/", label: "Software", aliases: ["/work/"] },
    { href: "/research/", label: "Research" },
    { href: "/cv/", label: "CV" },
    { href: "/contact/", label: "Contact" },
  ],
  ko: [
    { href: "/", label: "홈" },
    { href: "/software/", label: "소프트웨어", aliases: ["/work/"] },
    { href: "/research/", label: "연구" },
    { href: "/cv/", label: "CV" },
    { href: "/contact/", label: "연락처" },
  ],
};

const common = {
  en: {
    languageName: "English",
    languageSwitch: "한국어",
    siteDescription:
      "Jeongseok Lee is a robotics software engineer building physics simulation systems for robotics, digital humans, and AR/VR.",
    footer: "Built with Astro and deployed as a static site for",
  },
  ko: {
    languageName: "한국어",
    languageSwitch: "English",
    siteDescription:
      "이정석은 로보틱스, 디지털 휴먼, AR/VR을 위한 물리 시뮬레이션 시스템을 만드는 로보틱스 소프트웨어 엔지니어입니다.",
    footer: "Astro로 제작하고 정적 사이트로 배포합니다:",
  },
};

const pages = {
  en: {
    home: {
      eyebrow: "Physics simulation / robotics / digital humans",
      softwareCta: "Software",
      cvCta: "CV",
      portraitAlt: "Portrait of Jeongseok Lee",
      currentEyebrow: "Current direction",
      currentTitle:
        "Simulation systems that bridge research and real-time platforms.",
      throughline:
        "The throughline is practical physics software: robust enough for research, maintainable enough for production teams, and clear enough to serve open communities.",
      featuredEyebrow: "Featured work",
      featuredTitle: "Selected public projects",
      viewAllSoftware: "View all software",
      focusEyebrow: "Focus areas",
      focusTitle: "Robotics software with a simulation-first center of gravity.",
    },
    software: {
      title: "Software",
      description:
        "Selected robotics software, physics simulation systems, digital-human tooling, and open-source work by Jeongseok Lee.",
      eyebrow: "Software",
      heading:
        "Robotics software, simulation infrastructure, and digital-human systems.",
      lead: "Public engineering work organized around durable robotics libraries, research-facing simulation systems, and tools that make implementation judgment visible.",
    },
    research: {
      title: "Research",
      description:
        "Publications, patents, awards, invited talks, and research service by Jeongseok Lee.",
      eyebrow: "Research",
      heading: "Physics simulation, motion planning, and robotics systems.",
      lead: "Publications and research outputs spanning multibody dynamics, contact, differentiable physics, robotic manipulation, and digital humans.",
      publicationsEyebrow: "Publications",
      publicationsTitle: "Selected papers",
      patentsEyebrow: "Patents",
      awardsServiceEyebrow: "Awards and service",
      awardsTitle: "Awards",
      talksTitle: "Talks",
      serviceTitle: "Peer review",
    },
    cv: {
      title: "CV",
      description:
        "Web CV for Jeongseok Lee, robotics software engineer in physics simulation, robotics, digital humans, and humanoid robots.",
      eyebrow: "CV",
      heading: "Jeongseok Lee",
      lead: "Robotics software engineer focused on physics simulation for robotics, humanoid robots, digital humans, and AR/VR systems.",
      download: "Download PDF CV",
      experienceEyebrow: "Technical experience",
      careerTitle: "Career",
      educationEyebrow: "Education",
      skillsEyebrow: "Skills",
    },
    contact: {
      title: "Contact",
      description: "Contact links for Jeongseok Lee.",
      eyebrow: "Contact",
      heading:
        "Reach out about robotics, simulation, digital humans, or open-source software.",
      lead: "The fastest public links are GitHub, LinkedIn, Google Scholar, and email.",
    },
  },
  ko: {
    home: {
      eyebrow: "물리 시뮬레이션 / 로보틱스 / 디지털 휴먼",
      softwareCta: "소프트웨어",
      cvCta: "CV",
      portraitAlt: "이정석 프로필 사진",
      currentEyebrow: "현재 방향",
      currentTitle:
        "연구와 실시간 플랫폼을 연결하는 시뮬레이션 시스템.",
      throughline:
        "핵심 축은 실용적인 물리 소프트웨어입니다. 연구에 충분히 견고하고, 프로덕션 팀이 유지보수할 수 있으며, 오픈 커뮤니티에도 이해하기 쉬운 시스템을 지향합니다.",
      featuredEyebrow: "주요 작업",
      featuredTitle: "대표 공개 프로젝트",
      viewAllSoftware: "전체 소프트웨어 보기",
      focusEyebrow: "관심 분야",
      focusTitle: "시뮬레이션을 중심에 둔 로보틱스 소프트웨어.",
    },
    software: {
      title: "소프트웨어",
      description:
        "이정석의 로보틱스 소프트웨어, 물리 시뮬레이션 시스템, 디지털 휴먼 도구, 오픈소스 작업.",
      eyebrow: "소프트웨어",
      heading:
        "로보틱스 소프트웨어, 시뮬레이션 인프라, 디지털 휴먼 시스템.",
      lead: "오래 유지되는 로보틱스 라이브러리, 연구용 시뮬레이션 시스템, 구현 역량을 보여주는 도구를 중심으로 정리한 공개 엔지니어링 작업입니다.",
    },
    research: {
      title: "연구",
      description:
        "이정석의 논문, 특허, 수상, 초청 발표, 연구 서비스.",
      eyebrow: "연구",
      heading: "물리 시뮬레이션, 모션 플래닝, 로보틱스 시스템.",
      lead: "다물체 동역학, 접촉, 미분 가능한 물리, 로봇 조작, 디지털 휴먼에 관한 연구 결과입니다.",
      publicationsEyebrow: "논문",
      publicationsTitle: "선별 논문",
      patentsEyebrow: "특허",
      awardsServiceEyebrow: "수상 및 서비스",
      awardsTitle: "수상",
      talksTitle: "발표",
      serviceTitle: "리뷰 활동",
    },
    cv: {
      title: "CV",
      description:
        "물리 시뮬레이션, 로보틱스, 디지털 휴먼, 휴머노이드 로봇 분야의 로보틱스 소프트웨어 엔지니어 이정석의 웹 CV.",
      eyebrow: "CV",
      heading: "이정석",
      lead: "로보틱스, 휴머노이드 로봇, 디지털 휴먼, AR/VR 시스템을 위한 물리 시뮬레이션에 집중하는 로보틱스 소프트웨어 엔지니어입니다.",
      download: "PDF CV 다운로드",
      experienceEyebrow: "기술 경력",
      careerTitle: "경력",
      educationEyebrow: "학력",
      skillsEyebrow: "기술",
    },
    contact: {
      title: "연락처",
      description: "이정석 연락처 링크.",
      eyebrow: "연락처",
      heading:
        "로보틱스, 시뮬레이션, 디지털 휴먼, 오픈소스 소프트웨어에 관해 연락해 주세요.",
      lead: "가장 빠른 공개 링크는 GitHub, LinkedIn, Google Scholar, 이메일입니다.",
    },
  },
};

const koProfile = {
  ...profile,
  name: "이정석",
  shortName: "이정석",
  role: "로보틱스 소프트웨어 엔지니어",
  focus:
    "로보틱스, 디지털 휴먼, AR/VR을 위한 물리 시뮬레이션 시스템을 만듭니다. 다물체 동역학, 접촉, 휴머노이드 로봇 시뮬레이션, 실용적인 오픈소스 소프트웨어에 집중합니다.",
  summary:
    "시뮬레이션 연구와 프로덕션 시스템의 경계에서 일하는 소프트웨어 엔지니어이자 로보틱스 연구자입니다. 현재는 아바타를 위한 물리 기반 시뮬레이션과 휴머노이드 로봇을 위한 풀스택 시뮬레이션 프레임워크를 다룹니다. 장기적인 오픈소스 작업으로는 DART, Dynamic Animation and Robotics Toolkit을 이끌고 있습니다.",
  tags: [
    "물리 시뮬레이션",
    "로보틱스",
    "디지털 휴먼",
    "휴머노이드 로봇",
    "다물체 동역학",
    "모션 플래닝",
    "오픈소스",
  ],
  proofPoints: [
    { value: "Meta", label: "Reality Labs Research | Meta Robotics Studio" },
    { value: "DART", label: "2012년부터 리드 개발자" },
    { value: "RSS / ICLR / IROS", label: "로보틱스 및 ML 논문" },
    { value: "특허 2건", label: "로봇 워크셀 및 그리핑" },
  ],
};

const koCareer = [
  {
    ...career[0],
    role: "스태프 리서치 엔지니어 | 스태프 소프트웨어 엔지니어",
    highlights: [
      "AR/VR 경험의 몰입감과 현실감을 높이기 위해 아바타용 물리 기반 시뮬레이션을 개발했습니다.",
      "물리 엔진, 렌더링, 센서 시뮬레이션, sim-to-real 전이를 포함하는 휴머노이드 로봇용 풀스택 시뮬레이션 프레임워크를 만들고 있습니다.",
    ],
  },
  {
    ...career[1],
    role: "로보틱스 소프트웨어 엔지니어 | 응용 과학자",
    highlights: [
      "로봇 워크셀을 위한 확장 가능한 시뮬레이션 인프라를 개발했습니다.",
      "관절형 로봇 시스템을 위한 물리 기반 시뮬레이션을 개발했습니다.",
    ],
  },
  {
    ...career[2],
    role: "소프트웨어 엔지니어링 인턴",
    highlights: [
      "접촉이 많은 환경에서 병렬 메커니즘 시스템을 위한 효율적인 로봇 시뮬레이션 소프트웨어를 개발했습니다.",
    ],
  },
  {
    ...career[3],
    role: "방문 연구원",
    highlights: [
      "로봇 조작, 복잡한 동역학 시스템, 모션 플래닝, 시스템 통합을 다뤘습니다.",
    ],
  },
  {
    ...career[4],
    role: "시니어 소프트웨어 엔지니어",
    highlights: [
      "로봇 조작을 위한 모션 플래닝 및 의사결정 라이브러리 AIKIDO를 개발하고 관리했습니다.",
      "역기구학, 충돌 검출, 로봇 동역학, 에너지 보존 적분 기법을 다뤘습니다.",
    ],
  },
  {
    ...career[5],
    role: "리서치 사이언티스트",
    highlights: [
      "기구학, 동역학, 충돌 검출, 최적화를 포함하는 DART를 개발했습니다.",
      "DARPA Robotics Challenge 연구 워크플로를 위해 DART를 Gazebo에 통합했습니다.",
    ],
  },
];

const koEducation = [
  {
    ...education[0],
    degree: "컴퓨터공학 석사",
    note: "지도교수: Siddhartha S. Srinivasa",
  },
  {
    ...education[1],
    degree: "기계항공공학 박사과정 수료",
    note: "지도교수: Frank C. Park",
  },
  {
    ...education[2],
    degree: "조선해양공학 학사",
    note: "지도교수: Kyu-Yeul Lee",
  },
];

const koSkills = [
  { ...skills[0], group: "언어" },
  { ...skills[1], group: "시뮬레이션" },
  { ...skills[2], group: "시스템" },
];

const projectKo = {
  DART: {
    status: "리드 개발자, 2012년 11월 - 현재",
    description:
      "로보틱스, 애니메이션, 머신러닝 연구를 위한 C++ 물리 엔진입니다. Python 바인딩을 제공하며 로보틱스 시뮬레이션 연구에서 장기간 사용되어 왔습니다.",
    impact: [
      "기구학, 동역학, 충돌 검출, 최적화, 관절형 강체 시뮬레이션을 지원합니다.",
      "JOSS 논문으로 출판되었고 OSS World Challenge 2016에서 대상을 수상했습니다.",
      "DARPA Robotics Challenge 연구를 위한 Gazebo 워크플로에 통합되었습니다.",
    ],
    tags: ["C++", "Python", "물리 엔진", "로보틱스"],
  },
  MHR: {
    status: "연구 소프트웨어, Meta",
    subtitle: "Momentum Human Rig",
    description:
      "컴퓨터 그래픽스와 컴퓨터 비전 연구를 위한 해부학 기반 파라메트릭 전신 디지털 휴먼 모델입니다.",
    impact: [
      "골격 모델, 여러 단계의 스킨드 메시 LOD, 바디 블렌드셰이프, 포즈 보정, 얼굴 블렌드셰이프 모델을 포함합니다.",
      "시뮬레이션 배경을 현재의 디지털 휴먼 및 아바타 연구와 연결합니다.",
    ],
    tags: ["디지털 휴먼", "아바타", "Meta", "연구"],
  },
  Momentum: {
    status: "연구 소프트웨어, Meta",
    subtitle: "휴먼 기구학 및 최적화",
    description:
      "인체 운동을 적용하고 분석하기 위한 휴먼 기구학 모션 및 수치 최적화 솔버 라이브러리입니다.",
    impact: [
      "기구학 모션, 수치 최적화, 실용적인 도구를 공개 소프트웨어로 제공합니다.",
      "MHR과 함께 더 넓은 디지털 휴먼 연구 스택을 구성합니다.",
    ],
    tags: ["기구학", "최적화", "인체 모션", "Meta"],
  },
  "Awesome Robotics Libraries": {
    status: "유지보수자",
    subtitle: "로보틱스 개발자를 위한 소프트웨어 지도",
    description:
      "플래닝, 동역학, 인식, 제어, 도구 등 로보틱스 소프트웨어 라이브러리와 리소스를 정리한 고신호 큐레이션 목록입니다.",
    impact: [
      "로보틱스 개발자가 실용적인 라이브러리를 빠르게 찾을 수 있도록 돕습니다.",
      "개별 프로젝트를 넘어 소프트웨어 선택과 설계 감각을 보여주는 공개 목록입니다.",
    ],
    tags: ["로보틱스", "오픈소스", "큐레이션"],
  },
  AIKIDO: {
    status: "기여자, 2016년 - 2018년",
    subtitle: "모션 플래닝 및 의사결정",
    description:
      "Personal Robotics Lab에서 사용한 로봇 조작 프레임워크로, 역기구학, 충돌 검출, 로봇 동역학 작업을 포함합니다.",
    impact: [
      "HERB, ADA를 포함한 연구실 로봇 플랫폼에 배포되었습니다.",
      "조작 워크플로에서 플래닝, 동역학, 시스템 통합을 연결했습니다.",
    ],
    tags: ["모션 플래닝", "조작", "C++"],
  },
  FCL: {
    status: "기여자",
    subtitle: "Flexible Collision Library",
    description:
      "로보틱스, 모션 플래닝, 시뮬레이션 워크플로에서 사용되는 충돌 검출 인프라에 기여했습니다.",
    impact: [
      "실용적인 로보틱스 소프트웨어 스택을 위한 충돌 검출 인프라를 다뤘습니다.",
      "플래닝과 동역학 워크플로에서 필요한 기하, 접촉, 시뮬레이션 요구를 연결했습니다.",
    ],
    tags: ["충돌 검출", "기하", "시뮬레이션"],
  },
  Gazebo: {
    status: "기여자",
    subtitle: "로봇 시뮬레이션 생태계",
    description:
      "로보틱스 연구자와 개발자가 사용하는 GUI 기반 로봇 시뮬레이션 생태계의 통합 작업을 수행했습니다.",
    impact: [
      "DART가 기존 Gazebo 시뮬레이션 워크플로에 연결되도록 기여했습니다.",
      "물리 엔진 작업을 연구팀이 사용하는 로봇 시뮬레이션 도구와 연결했습니다.",
    ],
    tags: ["로봇 시뮬레이션", "Gazebo", "물리 엔진"],
  },
};

const koProjects = projects.map((project) => ({
  ...project,
  ...(projectKo[project.title as keyof typeof projectKo] ?? {}),
}));

const koPublications = publications.map((paper) => ({
  ...paper,
  tags: paper.tags.map((tag) => {
    const tags: Record<string, string> = {
      "Digital humans": "디지털 휴먼",
      Avatars: "아바타",
      "Differentiable physics": "미분 가능한 물리",
      Contact: "접촉",
      "Machine learning": "머신러닝",
      Robotics: "로보틱스",
      "Open source": "오픈소스",
      Simulation: "시뮬레이션",
      "Motion planning": "모션 플래닝",
      "Multibody dynamics": "다물체 동역학",
      Dynamics: "동역학",
      "Legged robots": "다리형 로봇",
      "Physics engine": "물리 엔진",
    };
    return tags[tag] ?? tag;
  }),
}));

const koAwards = [
  "DART로 OSS World Challenge 2016 대상 수상, 대한민국 미래창조과학부",
  "srLib으로 URAI 2009 우수 비디오 논문상 수상",
];

const koTalks = ["Amazon Machine Learning Conference 초청 발표, 2018년 4월"];

const koService = [
  "Journal of Mechanisms and Robotics 리뷰어, 2012",
  "IEEE Robotics and Automation Letters 리뷰어, 2018",
  "IEEE International Conference on Robotics and Automation 리뷰어, 2015, 2017-2018",
  "IEEE/RSJ International Conference on Intelligent Robots and Systems 리뷰어, 2017-2018",
  "Journal of Open Source Software 리뷰어, 2017",
];

export function getContent(locale: Locale) {
  if (locale === "ko") {
    return {
      locale,
      common: common.ko,
      nav: nav.ko,
      pages: pages.ko,
      profile: koProfile,
      career: koCareer,
      education: koEducation,
      skills: koSkills,
      projects: koProjects,
      featuredProjects: koProjects.filter((project) => project.featured),
      publications: koPublications,
      patents,
      awards: koAwards,
      talks: koTalks,
      service: koService,
    };
  }

  return {
    locale,
    common: common.en,
    nav: nav.en,
    pages: pages.en,
    profile,
    career,
    education,
    skills,
    projects,
    featuredProjects: projects.filter((project) => project.featured),
    publications,
    patents,
    awards,
    talks,
    service,
  };
}
