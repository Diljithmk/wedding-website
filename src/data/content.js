// Luxury Wedding Studio Brand Data & Content

export const BRAND = {
  name: "LUMIÈRE & CO.",
  tagline: "Every Love Story Deserves to Be Remembered.",
  subtitle: "Capturing timeless moments through photography and cinema.",
  description: "Bespoke wedding photography and cinematic films for discerning couples worldwide. Based in New York and Paris, available across Europe, the Americas, and global destinations.",
  foundedYear: "2014",
  email: "concierge@lumiereweddings.com",
  phone: "+1 (800) 492-3810",
  whatsappNumber: "+18004923810",
  whatsapp: "https://wa.me/18004923810?text=Hello%20Lumi%C3%A8re%20%26%20Co.%2C%20we%20would%20love%20to%20inquire%20about%20our%20wedding%20date.",
  instagram: "https://instagram.com/lumiereweddings",
  instagramHandle: "@lumiereweddings",
  locations: ["New York", "Paris", "Lake Como", "Amalfi Coast", "Tokyo"],
  stats: [
    { value: "180+", label: "Weddings Preserved" },
    { value: "16", label: "Countries Documented" },
    { value: "10+", label: "Years of Artistry" },
    { value: "34", label: "International Honors" },
  ],
};

// Curated high-resolution editorial wedding photography
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2560&q=85",
  heroVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  aboutImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
  aboutSecondary: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&w=1200&q=85",
  filmThumbnail: "https://images.unsplash.com/photo-1519225447740-1d6a77e5c48d?auto=format&fit=crop&w=2400&q=85",
  filmSampleVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
};

// 6 Core Services as specified
export const SERVICES = [
  {
    id: "photography",
    number: "01",
    title: "Wedding Photography",
    tagline: "Fine Art Documentation",
    description: "Complete bespoke coverage honoring every silent breath, tender glance, and grand celebration from morning preparations to late evening revelry.",
    details: [
      "Principal fine-art lead photographer & second shooter",
      "Curated heirloom gallery of 700+ color-graded images",
      "Full printing rights & private client archival portal",
      "Complimentary timeline consultation & scouting"
    ],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    ratio: "aspect-[4/5]",
  },
  {
    id: "cinematography",
    number: "02",
    title: "Wedding Cinematography",
    tagline: "Editorial 4K Motion Picture",
    description: "Immersive cinematic motion pictures captured with cinema-grade prime optics, ambient sound recording, and an orchestral musical score.",
    details: [
      "Dual cinematic filmmakers with multi-camera setup",
      "Feature-length documentary film (45-60 minutes)",
      "High-fidelity crystal-clear audio vows recording",
      "Licensed cinematic score and archival 4K digital master"
    ],
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b016b?auto=format&fit=crop&w=1200&q=80",
    ratio: "aspect-[4/5]",
  },
  {
    id: "pre-wedding",
    number: "03",
    title: "Pre-Wedding Shoots",
    tagline: "Romantic Editorial Portraits",
    description: "An intimate, unhurried session at an architectural haven or natural vista, capturing the electric anticipation leading to your vows.",
    details: [
      "Half-day destination portrait session",
      "Art direction, mood board & styling curation",
      "50 fine-art retouched high-resolution images",
      "Same-day preview selection for wedding invitations"
    ],
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
    ratio: "aspect-[4/5]",
  },
  {
    id: "engagement",
    number: "04",
    title: "Engagement Photography",
    tagline: "Intimate Storytelling",
    description: "Sun-drenched, editorial imagery capturing the unscripted romance and effortless intimacy of your newly embarked chapter.",
    details: [
      "2-3 hour session at curated iconic locations",
      "Multiple wardrobe changes & natural lighting direction",
      "Online interactive gallery ready in 14 days",
      "Credits applicable toward full wedding collection"
    ],
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
    ratio: "aspect-[4/5]",
  },
  {
    id: "destination",
    number: "05",
    title: "Destination Weddings",
    tagline: "Worldwide Editorial Journeys",
    description: "Seamless international coverage tailored for multi-day celebrations from Lake Como villas to Parisian châteaux and Mediterranean cliffs.",
    details: [
      "Complete multi-day wedding weekend coverage",
      "Welcome dinner, rehearsal & farewell brunch",
      "All crew logistics & worldwide travel included",
      "Drone aerial cinematography & landscape documentation"
    ],
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80",
    ratio: "aspect-[4/5]",
  },
  {
    id: "films-highlights",
    number: "06",
    title: "Wedding Films & Highlights",
    tagline: "Poetic Short-Form Cinema",
    description: "Emotional 3 to 5-minute cinematic highlight films crafted for intimate sharing, capturing the spirit and soul of your day in poetic brevity.",
    details: [
      "Bespoke poetic edit set to bespoke musical score",
      "Optimized 4K cinematic delivery for mobile & display",
      "Delivered within 21 days following your wedding",
      "Social teaser delivered within 72 hours"
    ],
    image: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&w=1200&q=80",
    ratio: "aspect-[4/5]",
  },
];

// Rich Portfolio Items with categories, metadata, and lightbox info
export const PORTFOLIO_ITEMS = [
  {
    id: "p1",
    title: "Elena & Matteo",
    category: "weddings",
    location: "Villa Balbianello, Lake Como",
    aspect: "tall", // tall, wide, square
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    tag: "Lake Como • Black Tie",
    filmUrl: null,
  },
  {
    id: "p2",
    title: "Camille & Antoine",
    category: "cinematic",
    location: "Château de Villette, France",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1519225447740-1d6a77e5c48d?auto=format&fit=crop&w=1600&q=85",
    tag: "Paris • 4K Film",
    isVideo: true,
    videoDuration: "4:15",
  },
  {
    id: "p3",
    title: "Sienna & Julian",
    category: "preWedding",
    location: "Santorini, Greece",
    aspect: "square",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1400&q=85",
    tag: "Aegean Sunset",
    filmUrl: null,
  },
  {
    id: "p4",
    title: "Genevieve & Nicholas",
    category: "weddings",
    location: "The Pierre, New York",
    aspect: "tall",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85",
    tag: "Manhattan Luxury",
    filmUrl: null,
  },
  {
    id: "p5",
    title: "Aria & Callum",
    category: "engagement",
    location: "Big Sur, California",
    aspect: "tall",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1400&q=85",
    tag: "Pacific Coastline",
    filmUrl: null,
  },
  {
    id: "p6",
    title: "Isla & Sebastian",
    category: "cinematic",
    location: "Capri, Italy",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&w=1600&q=85",
    tag: "Capri • Film Highlight",
    isVideo: true,
    videoDuration: "3:45",
  },
  {
    id: "p7",
    title: "Astrid & Henrik",
    category: "weddings",
    location: "Stockholm Archipelago",
    aspect: "square",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1400&q=85",
    tag: "Nordic Minimalist",
    filmUrl: null,
  },
  {
    id: "p8",
    title: "Margaux & Olivier",
    category: "preWedding",
    location: "Palais-Royal, Paris",
    aspect: "tall",
    image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&w=1400&q=85",
    tag: "Editorial Couture",
    filmUrl: null,
  },
  {
    id: "p9",
    title: "Harper & David",
    category: "engagement",
    location: "Cotswolds, England",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?auto=format&fit=crop&w=1400&q=85",
    tag: "English Countryside",
    filmUrl: null,
  },
  {
    id: "p10",
    title: "Valentina & Luca",
    category: "cinematic",
    location: "Tuscany, Italy",
    aspect: "tall",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b016b?auto=format&fit=crop&w=1400&q=85",
    tag: "Val d'Orcia • 4K Reel",
    isVideo: true,
    videoDuration: "5:10",
  },
  {
    id: "p11",
    title: "Sophia & Benjamin",
    category: "weddings",
    location: "Villa Ephrussi de Rothschild",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1600&q=85",
    tag: "French Riviera",
    filmUrl: null,
  },
  {
    id: "p12",
    title: "Chloe & Liam",
    category: "preWedding",
    location: "Kyoto, Japan",
    aspect: "square",
    image: "https://images.unsplash.com/photo-1574355848046-8a40982dff25?auto=format&fit=crop&w=1400&q=85",
    tag: "Bamboo Grove",
    filmUrl: null,
  },
];

// About Us narrative
export const ABOUT = {
  subtitle: "ESTABLISHED 2014 • FINE ART WEDDINGS",
  heading: "We Capture Moments. We Preserve Memories.",
  paragraph1:
    "We believe a wedding is not a performance; it is a sacred gathering of souls, a tapestry woven of unhurried glances, trembling vows, and quiet tears of transcendent joy.",
  paragraph2:
    "Founded with a singular artistic conviction, Lumière & Co. approaches every celebration with the gentle discretion of documentary photography and the evocative depth of cinematic film. We seek the unscripted truth of your day — the hand quietly slipped into another, the gentle sway of silk in twilight breeze, the quiet reverence before forever begins.",
  philosophy:
    "Our signature aesthetic is rooted in natural golden light, genuine emotion, and timeless color grading. We reject fleeting social media trends in favor of refined, heirloom compositions that will evoke the same electric emotion fifty years from today.",
  accolades: [
    "Featured in Vogue Weddings & Harper's Bazaar",
    "Martha Stewart Weddings Top International Artists",
    "Rangefinder 30 Rising Stars of Wedding Photography",
  ],
};

// 4 Strategic Approach Steps as specified
export const APPROACH_STEPS = [
  {
    number: "01",
    title: "Understanding Your Story",
    headline: "Listening to the quiet rhythms of your love",
    description:
      "Before a lens is ever focused, we immerse ourselves in your world. Through an intimate creative consultation, we uncover the memories that shaped you, your shared aesthetic sensibilities, and the subtle nuances that make your connection singular.",
    focus: "Intimate Creative Consultation • Vision Boarding • Narrative Exploration",
  },
  {
    number: "02",
    title: "Capturing Genuine Emotions",
    headline: "Unobtrusive presence, authentic intimacy",
    description:
      "We operate with gentle, observant grace. By creating an atmosphere of effortless ease, you remain entirely present in your celebration while we document the authentic laughter, stolen glances, and tearful embraces as they naturally unfold.",
    focus: "Documentary Discretion • Natural Emotion • Unposed Elegance",
  },
  {
    number: "03",
    title: "Cinematic Storytelling",
    headline: "Direction imbued with poetry and golden light",
    description:
      "Every frame is treated as a master canvas. Utilizing cinema-grade prime lenses, delicate 35mm film emulation, and sensitive audio capture, we construct a cohesive visual symphony where light, shadow, and movement harmonize.",
    focus: "35mm Film & Digital Master • Ambient Audio Design • Architectural Framing",
  },
  {
    number: "04",
    title: "Delivering Timeless Memories",
    headline: "Handcrafted heirlooms for generations to come",
    description:
      "Your legacy is preserved with meticulous artisan craftsmanship. From archival Italian leather-bound albums to private cinematic 4K streaming portals, your memories are presented as timeless treasures for your children and descendants.",
    focus: "Handcrafted Archival Albums • 4K HDR Digital Vault • Museum-Grade Prints",
  },
];

// Featured Film Section Data
export const FEATURED_FILM = {
  badge: "CINEMATIC MASTERPIECE",
  title: "Stories That Last Forever.",
  subtitle: "A cinematic testament to devotion, filmed on location in Lake Como, Italy. Experience how movement, breath, and sound coalesce into enduring art.",
  couple: "Elena & Matteo",
  date: "September 24, 2024",
  location: "Villa Balbianello • Lake Como, Italy",
  duration: "4:32 MIN",
  resolution: "4K ULTRA HD / 2.39:1 CINEMASCOPE",
  thumbnail: "https://images.unsplash.com/photo-1519225447740-1d6a77e5c48d?auto=format&fit=crop&w=2400&q=85",
  videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
};

// Client Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Looking through our wedding gallery and film felt like stepping back into a dream we never wanted to wake from. Lumière didn't just take pictures; they bottled the entire atmosphere, the tears in my father's eyes, and the quiet reverence of our vows.",
    couple: "Isabella & Marcus Sterling",
    date: "October 14, 2024",
    location: "Villa d'Este, Lake Como",
    highlight: "Full Weekend Destination Collection",
  },
  {
    id: 2,
    quote:
      "The cinematic highlight film brings us to tears every single time we watch it. Their eye for subtle, unscripted moments is unparalleled. Having them by our side felt like having trusted old friends who happen to be world-class artists.",
    couple: "Sophia & Daniel Vance",
    date: "August 28, 2024",
    location: "Château de Chantilly, France",
    highlight: "Photography & Feature Film",
  },
  {
    id: 3,
    quote:
      "Our heirloom album arrived last week in a linen presentation box, and the print quality is breathtaking. Every guest who sees our photographs remarks that they look like they were pulled straight from the pages of Vogue Weddings.",
    couple: "Amelia & James Kensington",
    date: "May 19, 2024",
    location: "Amalfi Coast, Italy",
    highlight: "Elopement & Archival Album",
  },
  {
    id: 4,
    quote:
      "From our initial Zoom call in London to our sunset pre-wedding shoot in Kyoto, the entire journey was seamless, calming, and profoundly artistic. We could not have entrusted our once-in-a-lifetime memories to anyone else.",
    couple: "Camilla & Harrison Brooks",
    date: "November 08, 2024",
    location: "Highline Manor, New York",
    highlight: "Multi-Day Photography & Cinema",
  },
];

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Approach", href: "#approach" },
  { name: "Films", href: "#film" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

// Contact Section Content
export const CONTACT = {
  heading: "Let's Create Something Beautiful Together.",
  subtitle:
    "We accept a limited number of bespoke commissions each season to ensure every couple receives our full artistic devotion. Tell us about your story.",
};

