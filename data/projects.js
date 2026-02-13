export const PROJECTS = [
  {
    id: "vr-training-simulation",
    company: "Refense AG",
    title: "VR Training Platform",
    media: [
      {
        type: "image",
        src: "assets/Refense/thumb-refense.png",
        role: "thumbnail",
      },
      {
        type: "image",
        src: "assets/Refense/refense-police-vr.png",
        description: "Zurich Police training in VR for de-escalating hostage taking situations."
      },
      {
        type: "image",
        src: "assets/Refense/refense-IITSEC-2023.png",
        description: "USA Military trying out a training scenario during I/ITSEC 2023."
      },
    ],
    roles: ["Programmer"],
    languages: ["C#", ".NET"],
    projectType: ["Professional"],
    tags: [
      "Unity",
      "Multiplayer Networking",
      "Virtual Reality",
      "Client-Server Architecture",
      "Internal Tools",
      "Asset Pipeline Management",
      "Spectator View",
      "UI/UX",
      "Training",
      "Asset Bundles / Addressables",
      "Professional",
    ],
    teaser: "Train for high-stakes situations without real-world consequences.",
    description: [
      "VR training platform tailored for police and security forces. Enables realistic, scenario-based training for de-escalation, tactical movement, and use-of-force decision making.",
      "Supports up to 10 simultaneous users and integrates real-world equipment such as weapons or other equipment. Trainers can also use a level editor to create or edit their own scenarios.",
    ],
    coreTechnicalContributions: [
      "Redesigned and developed the legacy system into a multi-project architecture enabling scalability for future emergency-situation trainings.",
      "Developed further the Level Editor for internal and external users.",
      "Created a custom asset pipeline using Unity Addressables and Scriptable Build Pipeline.",
      "Implemented networked VR interaction features allowing multiplayer participation.",
      "Designed and implemented UI for interacting with virtual screens in VR.",
      "Built a framework for easier scenario control by operators during trainings.",
    ],
    videos: [
      {
        title: "Promotional video",
        href: "https://www.youtube.com/watch?v=68S332mk8vg",
      },
    ],
    links: [
      {
        title: "Website",
        href: "https://www.refense.com/",
      },
      {
        title: "I/ITSEC USA 2023 - hosted by OptiTrack",
        href: "https://www.optitrack.com/news/iitsec-2023-highlights"
      },
      {
        title: "VR Training for the Zurich Police Department",
        href: "https://tv.telezueri.ch/zuerinews/vr-training-fuer-stadtpolizei-zuerich-138425867"
      }
    ],
  },
  {
    id: "med1stmr",
    company: "Refense AG",
    title: "MED1stMR",
    media: [
      {
        type: "image",
        src: "assets/Refense/thumb-med1stmr.png",
        role: "thumbnail",
      },
      {
        type: "image",
        src: "assets/Refense/med1stmr-trials-1.png",
        description: "Medical first responder trainee during mass casualty incident (MCI) training in VR.",
      },
      {
        type: "image",
        src: "assets/Refense/med1stmr-final-review.png",
        description: "From the Final Review Conference held in Belgium (April 2024)",
      }
    ],
    roles: ["Programmer"],
    languages: ["C#", ".NET"],
    projectType: ["Professional", "Research Project"],
    tags: [
      "Unity",
      "Virtual Reality",
      "MedTech",
      "Client-Server Architecture",
      "Multiplayer Networking",
      "Spectator View",
      "UI/UX",
      "Training",
      "Research",
      "Professional",
    ],
    teaser: "Preparing first responders for mass-casualty incidents, safely in VR.",
    description: [
      "MED1stMR is an EU Horizon 2020 research project focused on developing a mixed-reality training system for medical first responders. The project combines virtual reality, physiological monitoring and medical manikin haptics to simulate high-stress emergency situations. Its goal is to improve decision-making, situational awareness, and response time in critical incidents such as mass-casualty events.",
      "Refense as a core technology partner, was responsible for providing the VR simulation platform used for the medical training scenarios, collecting training and biosignals data via sensors, and provide the After-Action Review platform for the teams to assess their trainings later. The project was used in field trials in several participant European countries."
    ],
    coreTechnicalContributions: [
      "Developed VR interaction features such as pulse examination, triage-card assignment, and tourniquet application.",
      "Integrated communication with medical-manikin hardware via WebSocket.",
      "Created particle-effect systems to simulate bleeding and other trainee stressors.",
    ],
    videos: [
      {
        title: "Promotional video",
        href: "https://www.youtube.com/watch?v=mdu_TjMSekw",
      },
    ],
    links: [
      {
        title: "MED1stMR Website",
        href: "https://www.med1stmr.eu/",
      },
      {
        title: "Refense Website",
        href: "https://www.refense.com/",
      },

    ],
    publications: [
      {
        citation:
          "Wespi, R., Neher, A.N., Birrenbach, T. et al. Physiological team dynamics explored: physiological synchrony in medical simulation training. Adv Simul 10, 5 (2025).",
        doi: "10.1186/s41077-025-00335-5",
      },
      {
        citation:
          "Zechner, O., Garcia Guirao, D., Schrom-Feiertag, H.G., et al. NextGen training for medical first responders: advancing mass-casualty incident preparedness through mixed reality technology. Multimodal Technologies and Interaction 7, 113 (2023).",
        doi: "10.3390/mti7120113",
      },
    ],
  },
  {
    id: "inspacion",
    company: "Inspacion",
    title: "Inspacion VR Platform",
    media: [
      {
        type: "image",
        src: "assets/Inspacion/thumb.png",
        role: "thumbnail",
      },
      {
        type: "image",
        src: "assets/Inspacion/inspacion-KSA.jpeg",
        description: "Doctors using the VR Platform to evaluate a new hospital."
      },
      {
        type: "image",
        src: "assets/Inspacion/InspacionVR_office.png",
        description: "Evaluating future warehouse pathways and workflows."
      },
    ],
    roles: ["Programmer"],
    languages: ["C#", ".NET"],
    projectType: ["Professional"],
    tags: [
      "Unity",
      "Virtual Reality",
      "SteamVR",
      "Multiplayer Networking",
      "Client-Server Architecture",
      "Spectator View",
      "UI/UX",
      "UI",
      "Professional",
    ],
    teaser: "Experience new buildings before they get built.",
    description: ["Collaborative VR platform that lets teams explore full-scale building models before construction. Used by hospitals, factories, and warehouses to gather early feedback on layout and workflow."],
    coreTechnicalContributions: [
      "Developed core VR features for full-scale architectural simulation.",
      "Built and maintained multiplayer systems (Netcode for GameObjects).",
      "Created a spectator mode for non-VR participants with switchable camera angles and floor-specific views.",
      "Integrated spatial tools for measurement, annotation, and collaborative review.",
      "Implemented an efficient large-document streaming pipeline to view massive architectural files in VR without GPU bottlenecks.",
      "Designed custom UI/UX tailored to VR workflows.",
    ],
    videos: [
      {
        title: "Promotional video",
        href: "https://youtu.be/Ossx9FkihD0",
      },
    ],
    links: [
      {
        title: "Inspacion Website",
        href: "https://www.inspacion.com/",
      },
      {
        title: "Use case: USZ - Universitätsspital Zürich",
        href: "https://www.usz.ch/en/reality-check-in-virtual-space/",
      },
      {
        title: "Use case: Charité - Universitätsmedizin Berlin",
        href: "https://www.bsdplus.de/fachartikel/neubau-deutsches-herzzentrum-der-charite-dhzc.html",
      },
    ],
  },
  {
    id: "lire-lire",
    company: "Manzalab Group",
    title: "Lire-lire",
    media: [
      { type: "image", src: "assets/Lire-Lire/thumb_gimp.png", role: "thumbnail" },
      { type: "image", src: "assets/Lire-Lire/1.webp" },
      { type: "image", src: "assets/Lire-Lire/2.webp" },
      { type: "image", src: "assets/Lire-Lire/3.webp" },
    ],
    roles: ["Lead Developer"],
    languages: ["C#", ".NET", "Python"],
    projectType: ["Professional"],
    tags: [
      "Unity",
      "Mobile",
      "iOS",
      "UI",
      "Educational",
      "Asset Bundles / Addressables",
      "Professional",
    ],
    teaser: "Making book reading fun for young learners.",
    description: [
      "Interactive reading app for Jeannine Manuel school that engages young children with immersive storytelling, quizzes, collectible rewards, and teacher dashboards."],
    coreTechnicalContributions: [
      "Scaled the app from a single experience into a full educational platform.",
      "Implemented quizzes, reward systems, and progression tracking.",
      "Developed the synchronized narration feature with text highlighting.",
      "Created Teacher Mode with dashboard for class overview, student progress monitoring, and in-app messaging.",
    ],
    videos: [
      {
        title: "Promotional video",
        href: "https://youtu.be/yNqv5i8WH24",
      },
    ],
    links: [
      {
        title: "Website",
        href: "https://ecolejeanninemanuel.org/plateforme-lire-lire/",
      },
      {
        title: "App Store",
        href: "https://apps.apple.com/us/app/lire-lire/id1483432469",
      },
    ],
  },
  {
    id: "i-love-dior",
    company: "Manzalab Group",
    title: "I LOVE DIOR",
    media: [
      {
        type: "image",
        src: "assets/I-LOVE-DIOR/thumb.webp",
        role: "thumbnail",
      },
      {
        type: "image",
        src: "assets/I-LOVE-DIOR/1.webp",
      },
      {
        type: "image",
        src: "assets/I-LOVE-DIOR/2.webp",
      },
      {
        type: "image",
        src: "assets/I-LOVE-DIOR/3.webp",
      },
    ],
    roles: ["Developer"],
    languages: ["C#", ".NET"],
    projectType: ["Professional"],
    tags: [
      "Unity",
      "Mobile",
      "iOS",
      "Mini-games",
      "Asset Bundles / Addressables",
      "UI",
      "Educational",
      "Training",
      "Professional",
    ],
    teaser: "Gamified training for employees on Dior products.",
    description: [
      "I Love Dior is an interactive mobile app designed to educate beauty professionals on Christian Dior’s products. The app features mini-games, collectibles, and visual design tailored for a luxury audience. "
    ],
    coreTechnicalContributions: [
      "Implemented Dior-aligned UI and visual design.",
      "Built two mini-games to support interactive learning and engagement.",
      "Managed store builds and deployment processes for iOS distribution.",
    ],
    links: [
      {
        title: "Archived version",
        href: "https://apkcombo.com/i-love-dior/com.Manzalab.ILOVEDIOR/",
      },
    ],
  },
  {
    id: "smart-platform",
    company: "Manzalab Group",
    title: "SMART - Customizable Training Platform",
    media: [
      {
        type: "image",
        src: "assets/SMART/thumb.webp",
        role: "thumbnail",
      },
      { type: "image",
        src: "assets/SMART/SMART-SFR.webp",
        description: "In-app screenshot from SFR project.",
      },
      {
        type: "image",
        src: "assets/SMART/4murs2.webp",
        description: "In-app screenshot from 4MURS project.",
      },
      { type: "image",
        src: "assets/SMART/teemewlab2.webp",
        description: "In-app screenshot from Manzalab employee onboarding.",
      },
    ],
    roles: ["Main Developer"],
    languages: ["C#", ".NET"],
    projectType: ["Professional"],
    tags: [
      "Unity",
      "Mobile",
      "Android",
      "iOS",
      "White Label Product",
      "UI",
      "Mini-games",
      "Asset Bundles / Addressables",
      "Educational",
      "Training",
      "Professional",
    ],
    teaser: "One platform, many brands: white-label training application.",
    description: [
      "White-label modular platform that powers multiple training apps (SFR, Manzalab, 4MURS, AFPA, UPS, bioMérieux, etc.). Enables rapid configuration of content, branding, and login methods for enterprise clients.",
      "Building on the I Love Dior codebase, I was one of the main developers behind its evolution into a modular white-label platform initially known as SMART."
    ],
    coreTechnicalContributions: [
      "Build a modular app framework for rapid white-label deployments.",
      "Implemented dynamic content integration and UI theming.",
      "Built flexible authentication (OAuth, email, etc.).",
    ],

    derivedProjects: [
      {
        title: "4MURS",
        href: "https://apkcombo.com/smart-4murs/com.Manzalab.QuatreMurs/",
        icon: "assets/SMART/4murs1.webp",
      },
      {
        title: "AFPA",
        href: "https://apkcombo.com/afpa-game-le-meilleur-allie/com.manzalab.afpagame/",
        icon: "assets/SMART/afpa1.webp",
      },
      {
        title: "Teemew Lab",
        href: "https://apkcombo.com/teemew-lab/com.manzalab.Onboarding/",
        icon: "assets/SMART/teemewlab1.webp",
      },
      {
        title: "SFR",
        href: "https://apkcombo.com/smart-vad/com.vad.smartvad/",
        icon: "assets/SMART/1.webp",
      },
      {
        title: "SMART bioMérieux",
        href: "https://apkcombo.com/smart-biomerieux/com.manzalab.TeemewBiomerieux/",
        icon: "assets/SMART/biomerieux1.webp",
      },
      {
        title: "UPS",
        href: "https://apkcombo.com/upsvision/com.manzalab.teemewups/",
        icon: "assets/SMART/ups-1.webp",
      }
    ],
  },
  {
    id: "kalulu",
    company: "Manzalab Group",
    title: "Kalulu",
    media: [
      {
        type: "image",
        src: "assets/Kalulu/thumb.jpg",
        role: "thumbnail",
      },
      {
        type: "image",
        src: "assets/Kalulu/kalulu_images-042.png",
        description: "Penguin mini-game teaches \"silent letters\", which are written but not pronounced in French.",
      },
      {
        type: "image",
        src: "assets/Kalulu/kalulu_images-038.png",
        description: "Jellyfish mini-game trains sound-letter matching as players pick the right jellyfish.",
      },
      {
        type: "image",
        src: "assets/Kalulu/App-scaled.jpg",
      },
    ],
    roles: ["Programmer"],
    languages: ["GDScript (Python variant)"],
    projectType: ["Professional", "Research Project"],
    tags: [
      "Godot Engine",
      "Python",
      "Mobile",
      "Android",
      "Mini-games",
      "UI",
      "Gameplay",
      "Professional",
      "Educational",
      "Research",
    ],
    teaser: "Teaching natural languages to pre-schoolers through mini-games.",
    description: [
      "Kalulu is a research-based educational game aiming to teach phonetics and numbers to pre-school kids. Guided by Kalulu the rabbit, children explore a garden-themed brain map. Each garden contains a path of letters and numbers, with nodes that unlock lessons and interactive mini-games.",
      "As an intern, I integrated the teaching module, two mini-games, and parameterizing mini-game content to support A/B testing and experimental design in classroom trials.",
      "Kalulu has been used in thousands of classrooms and cited in cognitive science research. It is now available nationwide in France with additional features for dyslexia and math learning."
    ],
    coreTechnicalContributions: [
      "Implemented the Jellyfish and Penguin mini-games",
      "Integrated phonetics teaching modules",
      "Parameterized content for A/B testing in classroom trials.",
    ],
    links: [
      {
        title: "Official site",
        href: "https://kalulu.excellolab.org/",
      },
      {
        title: "Education portal",
        href: "https://e-fran.education.gouv.fr/kalulu/",
      },
      {
        title: "Related publication",
        href: "https://www.unicog.org/biblio/Author/WATKINS-CP.html",
      }
    ],
    publications: [
      {
        citation: "Potier Watkins, C., Caporal, J., Merville, C. et al. Accelerating reading acquisition and boosting comprehension with a cognitive science-based tablet training. J. Comput. Educ. 7, 183–212 (2020).",
        doi: "10.1007/s40692-019-00152-6",
      }
    ]
  },
  {
    id: "lost-in-nanoworld",
    company: "Other Projects",
    title: "Lost in Nanoworld",
    media: [
      { type: "image", src: "/assets/Lost-in-nanoworld/lost-in-nanoworld-intro.jpg" },
      { type: "image", src: "/assets/Lost-in-nanoworld/lost-in-nanoworld-gameplay-1.png" },
      { type: "image", src: "/assets/Lost-in-nanoworld/lost-in-nanoworld-gameplay-2.png" },
      { type: "image", src: "/assets/Lost-in-nanoworld/lost-in-nanoworld-gameplay-3.png" },
      { type: "image", src: "assets/Lost-in-nanoworld/thumb2.jpg", role: "thumbnail", },
    ],
    roles: ["Programmer"],
    languages: ["C#"],
    projectType: ["Professional", "Internship Project"],
    tags: ["Unity", "Windows", "Gameplay", "UI", "Educational", "2D", "Platformer"],
    teaser: "Discover the strange laws of the nanoworld.",
    description: [
      "Lost In Nanoworld is a 2D adventure platform game about a lost nanorobot trying to find his way among dangers, introducing player to nanophysics rules.",
      "It was developed during my two-month internship in Game Lab Summer School hosted by Centre de Recherches Interdisciplinaires (now Learning Planet Institute) with the goal to make a scientific game that is also fun to play.",
    ],
    coreTechnicalContributions: [
      "Implemented enemy AI and player checkpoint logic.",
      "Designed and built in-game UI (health/status displays, menus, educational overlays).",
    ],
    links: [
      {
        title: "Playground (itch.io)",
        href: "https://david-birge-cotte.itch.io/lost-in-nanoworld",
      },

    ],
  },
  {
    id: "piece-of-cake",
    company: "Other Projects",
    title: "Piece of Cake",
    media: [
      { type: "image", src: "assets/Piece-of-Cake/thumb.png", role: "thumbnail" },
      { type: "image", src: "assets/Piece-of-Cake/in-game.png" },
    ],
    roles: ["Programmer"],
    languages: ["C#"],
    projectType: ["University Coursework Project"],
    tags: ["Unity", "Windows", "Gameplay", "Tower Defense"],
    teaser: "Defend your dessert from waves of hungry critters.",
    description: [
      "Light-hearted tower-defense game where players protect a picnic dessert from waves of ants and bees using ecological defenses."],
    coreTechnicalContributions: [
      "Programmed core gameplay loops and enemy path-finding.",
      "Added health overlays as in-world UI elements.",
    ],
    links: [
      {
        title: "Playground (itch.io)",
        href: "https://vkirtsou.itch.io/piece-of-cake",
      },
    ],
  },
  {
    id: "movenator",
    company: "Other Projects",
    title: "Movenator",
    media: [
      { type: "image", src: "assets/Movenator/movenator-thumb.png", role: "thumbnail"},
      { type: "image", src: "assets/Movenator/match3.webp", description: "Match-3 game" },
      { type: "image", src: "assets/Movenator/city-building-gameplay.jpg", description: "City builder mode: Build and gather resources" },
      { type: "image", src: "assets/Movenator/tournament.jpg", description: "Draft the perfect penguin team to send to the tournament" },
    ],
    roles: ["Programmer"],
    languages: ["C#", "PHP", "MySQL"],
    projectType: ["Research Project"],
    tags: [
      "Unity",
      "Mobile",
      "Android",
      "Mini-games",
      "Physical Activity",
      "Research",
      "PHP Backend",
    ],
    teaser: "A game where premium currency is earned with physical exercise.",
    description: [
      "Mobile game developed in Unity that promotes physical activity through playful incentives. Players earn diamonds when they are physically active in the real world, which they can spend to build structures, form teams, and play match-3 games.",
      "While designed for audiences of 10-13 years old in mind, the game can be enjoyed by anyone of any age.",
      "It was developed for adolescents as part of a research project in University of Turku, Department of Nursing science, Finland."
    ],
    coreTechnicalContributions: [
      "Developed the Match-3 mini-game.",
      "Implemented backend services (PHP) for player progress, statistics, and cloud saves.",
    ],
    publications: [
      {
        citation:
        "Kubota K, Säteri E, Joelsson TN, Mäkilä T, Sanna Salanterä S, Pakarinen A. 2022. Pilot Study and Gamification Analysis of a Theory-based Exergame. Int J Serious Games 9(3):63-79.",
        doi: "10.17083/ijsg.v9i3.506",
      },
      {
        citation:
          "Pakarinen A, Parisod H, Smed J, Salanterä S. 2017. Health game interventions to enhance physical activity self-efficacy of children: a quantitative systematic review. Journal of Advanced Nursing 73(4), 794-811.",
        doi: "10.1111/jan.13160",
      },
    ],
    videos: [ {
      title: "Game Trailer Video",
      href: "https://www.youtube.com/watch?v=l-_g8A11TxU",
    },]
  },
];
