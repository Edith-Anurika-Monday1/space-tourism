export type Destination = {
    name: string;
    slug: string;
    images: { png: string; webp?: string };
    description: string;
    distance: string;
    travel: string;
  };
  
  export type CrewMember = {
    name: string;
    role: string;
    images: { png: string; webp?: string };
    bio: string;
    slug: string;
  };
  
  export type TechItem = {
    name: string;
    slug: string;
    images: { portrait: string; landscape: string };
    description: string;
  };
  
  export const destinations: Destination[] = [
    {
      name: "Moon",
      slug: "moon",
      images: {
        png: "/src/assets/destination/image-moon.png",
        webp: "/src/assets/destination/image-moon.webp"
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed.",
      distance: "384,400 km",
      travel: "3 days"
    },
    {
      name: "Mars",
      slug: "mars",
      images: {
        png: "/src/assets/destination/image-mars.png",
        webp: "/src/assets/destination/image-mars.webp"
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system.",
      distance: "225 mil. km",
      travel: "9 months"
    },
    {
      name: "Europa",
      slug: "europa",
      images: {
        png: "/src/assets/destination/image-europa.png",
        webp: "/src/assets/destination/image-europa.webp"
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream with its beautiful icy surface.",
      distance: "628 mil. km",
      travel: "3 years"
    },
    {
      name: "Titan",
      slug: "titan",
      images: {
        png: "/src/assets/destination/image-titan.png",
        webp: "/src/assets/destination/image-titan.webp"
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth — Titan is a place of orange vistas and methane lakes.",
      distance: "1.6 bil. km",
      travel: "7 years"
    }
  ];
  
  export const crew: CrewMember[] = [
    {
      name: "Douglas Hurley",
      slug: "commander",
      role: "Commander",
      images: { png: "/src/assets/crew/image-douglas-hurley.png", webp: "/src/assets/crew/image-douglas-hurley.webp" },
      bio:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut."
    },
    {
      name: "Mark Shuttleworth",
      slug: "mission-specialist",
      role: "Mission Specialist",
      images: { png: "/src/assets/crew/image-mark-shuttleworth.png", webp: "/src/assets/crew/image-mark-shuttleworth.webp" },
      bio:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system."
    },
    {
      name: "Victor Glover",
      slug: "pilot",
      role: "Pilot",
      images: { png: "/src/assets/crew/image-victor-glover.png", webp: "/src/assets/crew/image-victor-glover.webp" },
      bio:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station."
    },
    {
      name: "Anousheh Ansari",
      slug: "flight-engineer",
      role: "Flight Engineer",
      images: { png: "/src/assets/crew/image-anousheh-ansari.png", webp: "/src/assets/crew/image-anousheh-ansari.webp" },
      bio:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems."
    }
  ];
  
  export const technology: TechItem[] = [
    {
      name: "Launch vehicle",
      slug: "vehicle",
      images: {
        portrait: "/src/assets/technology/image-launch-vehicle-portrait.jpg",
        landscape: "/src/assets/technology/image-launch-vehicle-landscape.jpg"
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space."
    },
    {
      name: "Spaceport",
      slug: "spaceport",
      images: {
        portrait: "/src/assets/technology/image-spaceport-portrait.jpg",
        landscape: "/src/assets/technology/image-spaceport-landscape.jpg"
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to seaport for ships or airport for aircraft."
    },
    {
      name: "Space capsule",
      slug: "capsule",
      images: {
        portrait: "/src/assets/technology/image-space-capsule-portrait.jpg",
        landscape: "/src/assets/technology/image-space-capsule-landscape.jpg"
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to re-enter the Earth's atmosphere."
    }
  ];
  