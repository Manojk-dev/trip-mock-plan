export interface TripPackage {
  id: string;
  destination: string;
  title: string;
  description: string;
  duration: number;
  budget: {
    min: number;
    max: number;
  };
  maxPeople: number;
  image: string;
  rating: number;
  totalReviews: number;
  highlights: string[];
  itinerary: DayItinerary[];
  included: string[];
  notIncluded: string[];
  bestTime: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  category: 'Adventure' | 'Relaxation' | 'Culture' | 'Nature' | 'City' | 'Beach';
}

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string[];
  accommodation?: string;
}

export interface SearchCriteria {
  destination: string;
  budget: number;
  people: number;
  duration: number;
  startDate?: Date;
}

export const mockTrips: TripPackage[] = [
  {
    id: "bali-paradise",
    destination: "Bali, Indonesia",
    title: "Tropical Paradise Getaway",
    description: "Experience the magic of Bali with pristine beaches, ancient temples, and vibrant culture in this unforgettable 7-day adventure.",
    duration: 7,
    budget: { min: 800, max: 1200 },
    maxPeople: 4,
    image: "/api/placeholder/400/300",
    rating: 4.8,
    totalReviews: 234,
    highlights: [
      "Visit iconic Tanah Lot Temple",
      "Sunrise trek to Mount Batur",
      "Traditional Balinese cooking class",
      "Relaxing spa treatments",
      "Ubud rice terraces exploration"
    ],
    category: "Beach",
    difficulty: "Easy",
    bestTime: "April - October",
    included: [
      "7 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Guided tours",
      "Cultural activities"
    ],
    notIncluded: [
      "International flights",
      "Lunch & dinner (except mentioned)",
      "Personal expenses",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali",
        description: "Welcome to the Island of Gods! Airport pickup and check-in to your beachfront resort.",
        activities: ["Airport transfer", "Hotel check-in", "Welcome dinner", "Beach sunset walk"],
        meals: ["Dinner"],
        accommodation: "Beachfront Resort in Seminyak"
      },
      {
        day: 2,
        title: "Temple & Cultural Tour",
        description: "Explore Bali's spiritual side with visits to ancient temples and traditional markets.",
        activities: ["Tanah Lot Temple visit", "Traditional market tour", "Balinese cooking class", "Cultural performance"],
        meals: ["Breakfast", "Lunch"]
      },
      {
        day: 3,
        title: "Mount Batur Sunrise Trek",
        description: "Early morning adventure to witness spectacular sunrise from Mount Batur volcano.",
        activities: ["Pre-dawn departure", "Mount Batur trek", "Sunrise viewing", "Natural hot springs", "Coffee plantation tour"],
        meals: ["Breakfast", "Lunch"]
      },
      {
        day: 4,
        title: "Ubud Nature & Arts",
        description: "Discover the artistic heart of Bali in Ubud with rice terraces and art villages.",
        activities: ["Tegallalang Rice Terraces", "Monkey Forest Sanctuary", "Art village tour", "Traditional handicraft workshop"],
        meals: ["Breakfast"]
      },
      {
        day: 5,
        title: "Beach & Water Sports",
        description: "Enjoy Bali's pristine beaches with exciting water activities.",
        activities: ["Snorkeling trip", "Beach relaxation", "Water sports", "Beachside lunch", "Sunset cocktails"],
        meals: ["Breakfast", "Lunch"]
      },
      {
        day: 6,
        title: "Spa & Leisure Day",
        description: "Pamper yourself with traditional Balinese treatments and explore local markets.",
        activities: ["Traditional Balinese spa", "Local market shopping", "Farewell dinner", "Beach time"],
        meals: ["Breakfast", "Dinner"]
      },
      {
        day: 7,
        title: "Departure",
        description: "Last-minute shopping and departure transfer to airport.",
        activities: ["Hotel check-out", "Souvenir shopping", "Airport transfer"],
        meals: ["Breakfast"]
      }
    ]
  },
  {
    id: "paris-romance",
    destination: "Paris, France",
    title: "Romantic Paris Escape",
    description: "Fall in love with the City of Light through romantic walks, world-class museums, and exquisite cuisine.",
    duration: 5,
    budget: { min: 1200, max: 1800 },
    maxPeople: 2,
    image: "/api/placeholder/400/300",
    rating: 4.9,
    totalReviews: 156,
    highlights: [
      "Eiffel Tower romantic dinner",
      "Louvre Museum private tour",
      "Seine River cruise",
      "Montmartre artistic quarter",
      "Versailles Palace day trip"
    ],
    category: "Culture",
    difficulty: "Easy",
    bestTime: "May - September",
    included: [
      "5 nights luxury hotel",
      "Daily breakfast",
      "Museum passes",
      "Romantic dinner",
      "Private transfers"
    ],
    notIncluded: [
      "International flights",
      "Most meals",
      "Personal shopping",
      "Optional activities"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bonjour Paris!",
        description: "Arrive in the magical City of Light and start your romantic adventure.",
        activities: ["Airport transfer", "Hotel check-in", "Champs-Élysées stroll", "Welcome dinner"],
        meals: ["Dinner"],
        accommodation: "Luxury Hotel in 1st Arrondissement"
      },
      {
        day: 2,
        title: "Classic Paris Icons",
        description: "Visit the most famous landmarks of Paris in style.",
        activities: ["Eiffel Tower visit", "Trocadéro gardens", "Arc de Triomphe", "Romantic Seine cruise"],
        meals: ["Breakfast"]
      },
      {
        day: 3,
        title: "Art & Culture",
        description: "Immerse yourself in world-renowned art and culture.",
        activities: ["Louvre Museum private tour", "Île de la Cité", "Notre-Dame area", "Latin Quarter exploration"],
        meals: ["Breakfast"]
      },
      {
        day: 4,
        title: "Montmartre & Versailles",
        description: "Artistic quarters and royal palace grandeur.",
        activities: ["Montmartre district", "Sacré-Cœur Basilica", "Artist studios", "Versailles Palace day trip"],
        meals: ["Breakfast"]
      },
      {
        day: 5,
        title: "Au Revoir Paris",
        description: "Last moments in Paris with shopping and departure.",
        activities: ["Le Marais district", "Shopping at Galeries Lafayette", "Farewell café", "Airport transfer"],
        meals: ["Breakfast"]
      }
    ]
  },
  {
    id: "tokyo-adventure",
    destination: "Tokyo, Japan",
    title: "Tokyo Urban Adventure",
    description: "Dive into the fascinating blend of traditional and modern Japan in this action-packed Tokyo experience.",
    duration: 6,
    budget: { min: 1000, max: 1500 },
    maxPeople: 6,
    image: "/api/placeholder/400/300",
    rating: 4.7,
    totalReviews: 189,
    highlights: [
      "Shibuya Crossing experience",
      "Traditional sushi making class",
      "Mount Fuji day trip",
      "Robot Restaurant show",
      "Cherry blossom viewing (seasonal)"
    ],
    category: "City",
    difficulty: "Moderate",
    bestTime: "March - May, September - November",
    included: [
      "6 nights centrally located hotel",
      "Daily breakfast",
      "JR Pass for transportation",
      "Cultural activities",
      "English-speaking guide"
    ],
    notIncluded: [
      "International flights",
      "Lunch & dinner",
      "Personal expenses",
      "Optional shopping"
    ],
    itinerary: [
      {
        day: 1,
        title: "Konnichiwa Tokyo!",
        description: "Arrival and first taste of Tokyo's energy.",
        activities: ["Airport transfer", "Hotel check-in", "Shibuya Crossing", "Harajuku district", "Welcome dinner"],
        meals: ["Dinner"],
        accommodation: "Modern Hotel in Shinjuku"
      },
      {
        day: 2,
        title: "Traditional Tokyo",
        description: "Experience Japan's rich cultural heritage.",
        activities: ["Senso-ji Temple", "Asakusa district", "Traditional craft workshop", "Sushi making class"],
        meals: ["Breakfast"]
      },
      {
        day: 3,
        title: "Modern Metropolis",
        description: "Explore Tokyo's cutting-edge technology and pop culture.",
        activities: ["Tokyo Skytree", "Akihabara electronics district", "Robot Restaurant show", "Ginza shopping"],
        meals: ["Breakfast"]
      },
      {
        day: 4,
        title: "Mount Fuji Excursion",
        description: "Day trip to Japan's most iconic mountain.",
        activities: ["Mount Fuji 5th Station", "Lake Kawaguchi", "Traditional ryokan lunch", "Hakone hot springs"],
        meals: ["Breakfast", "Lunch"]
      },
      {
        day: 5,
        title: "Imperial & Garden District",
        description: "Peaceful gardens and imperial history.",
        activities: ["Imperial Palace East Gardens", "Meiji Shrine", "Omotesando shopping", "Takeshita Street"],
        meals: ["Breakfast"]
      },
      {
        day: 6,
        title: "Sayonara Tokyo",
        description: "Final Tokyo experiences and departure.",
        activities: ["Tsukiji Outer Market", "Last-minute shopping", "Traditional tea ceremony", "Airport transfer"],
        meals: ["Breakfast"]
      }
    ]
  },
  {
    id: "iceland-nature",
    destination: "Iceland",
    title: "Iceland Natural Wonders",
    description: "Witness the raw beauty of Iceland with geysers, waterfalls, glaciers, and the magical Northern Lights.",
    duration: 8,
    budget: { min: 1500, max: 2200 },
    maxPeople: 8,
    image: "/api/placeholder/400/300",
    rating: 4.9,
    totalReviews: 98,
    highlights: [
      "Northern Lights hunting",
      "Blue Lagoon geothermal spa",
      "Golden Circle tour",
      "Glacier hiking adventure",
      "Black sand beaches"
    ],
    category: "Nature",
    difficulty: "Challenging",
    bestTime: "September - March (Northern Lights), June - August (Midnight Sun)",
    included: [
      "8 nights accommodation",
      "Daily breakfast",
      "All transportation",
      "Professional guides",
      "Winter gear rental"
    ],
    notIncluded: [
      "International flights",
      "Most meals",
      "Personal gear",
      "Optional helicopter tours"
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Iceland",
        description: "Land of fire and ice welcomes you.",
        activities: ["Keflavik airport pickup", "Blue Lagoon geothermal spa", "Reykjavik city tour", "Welcome dinner"],
        meals: ["Dinner"],
        accommodation: "Boutique Hotel in Reykjavik"
      },
      {
        day: 2,
        title: "Golden Circle Classic",
        description: "Iceland's most famous natural attractions.",
        activities: ["Thingvellir National Park", "Geysir geothermal area", "Gullfoss waterfall", "Northern Lights hunt"],
        meals: ["Breakfast"]
      },
      {
        day: 3,
        title: "South Coast Wonders",
        description: "Dramatic waterfalls and black sand beaches.",
        activities: ["Seljalandsfoss waterfall", "Skogafoss waterfall", "Reynisfjara black beach", "Vik village"],
        meals: ["Breakfast"]
      },
      {
        day: 4,
        title: "Glacier Adventure",
        description: "Get up close with Iceland's massive glaciers.",
        activities: ["Vatnajokull glacier hike", "Ice cave exploration", "Jokulsarlon glacier lagoon", "Diamond Beach"],
        meals: ["Breakfast", "Lunch"]
      },
      {
        day: 5,
        title: "Eastfjords Exploration",
        description: "Remote and stunning fjord landscapes.",
        activities: ["Scenic fjord drive", "Hallormsstadur forest", "Lagarfljot lake", "Local fishing village visit"],
        meals: ["Breakfast"]
      },
      {
        day: 6,
        title: "North Iceland Highlights",
        description: "Powerful waterfalls and whale watching.",
        activities: ["Dettifoss waterfall", "Asbyrgi canyon", "Husavik whale watching", "Myvatn nature baths"],
        meals: ["Breakfast"]
      },
      {
        day: 7,
        title: "Snæfellsnes Peninsula",
        description: "Iceland in miniature with diverse landscapes.",
        activities: ["Kirkjufell mountain", "Arnarstapi coastal cliffs", "Snæfellsjokull glacier", "Fishing village culture"],
        meals: ["Breakfast"]
      },
      {
        day: 8,
        title: "Farewell Iceland",
        description: "Last impressions and departure.",
        activities: ["Reykjavik harbor walk", "Souvenir shopping", "Final Northern Lights attempt", "Airport transfer"],
        meals: ["Breakfast"]
      }
    ]
  },
  {
    id: "thailand-budget",
    destination: "Thailand",
    title: "Budget Thailand Explorer",
    description: "Discover the best of Thailand without breaking the bank - temples, beaches, and street food adventures.",
    duration: 10,
    budget: { min: 400, max: 700 },
    maxPeople: 8,
    image: "/api/placeholder/400/300",
    rating: 4.6,
    totalReviews: 312,
    highlights: [
      "Bangkok temple hopping",
      "Floating market visit",
      "Thai cooking class",
      "Island hopping adventure",
      "Elephant sanctuary visit"
    ],
    category: "Adventure",
    difficulty: "Easy",
    bestTime: "November - March",
    included: [
      "10 nights mixed accommodation",
      "Some meals included",
      "Local transportation",
      "Group activities",
      "English-speaking guides"
    ],
    notIncluded: [
      "International flights",
      "Most meals",
      "Personal expenses",
      "Alcoholic beverages"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bangkok Arrival",
        description: "Welcome to the Land of Smiles!",
        activities: ["Airport pickup", "Hostel check-in", "Khao San Road exploration", "Street food tour"],
        meals: ["Dinner"],
        accommodation: "Backpacker Hostel in Bangkok"
      },
      {
        day: 2,
        title: "Bangkok Temples & Culture",
        description: "Explore Bangkok's spiritual and cultural heart.",
        activities: ["Grand Palace visit", "Wat Pho temple", "Wat Arun temple", "Chao Phraya river boat"],
        meals: ["Breakfast"]
      },
      {
        day: 3,
        title: "Markets & Cooking",
        description: "Taste and learn about Thai cuisine.",
        activities: ["Floating market tour", "Thai cooking class", "Chatuchak weekend market", "Thai massage"],
        meals: ["Breakfast", "Lunch"]
      },
      {
        day: 4,
        title: "Travel to Chiang Mai",
        description: "Journey to the cultural capital of northern Thailand.",
        activities: ["Train to Chiang Mai", "Old city exploration", "Night market visit", "Local dinner"],
        meals: ["Breakfast", "Dinner"]
      },
      {
        day: 5,
        title: "Chiang Mai Adventures",
        description: "Temples, culture, and nature around Chiang Mai.",
        activities: ["Doi Suthep temple", "Elephant sanctuary visit", "Hill tribe village", "Traditional crafts"],
        meals: ["Breakfast", "Lunch"]
      },
      {
        day: 6,
        title: "Journey to Islands",
        description: "Head south to Thailand's famous islands.",
        activities: ["Flight to Phuket", "Beach arrival", "Sunset viewing", "Beachfront accommodation"],
        meals: ["Breakfast"]
      },
      {
        day: 7,
        title: "Island Hopping Day 1",
        description: "Explore the stunning Phi Phi Islands.",
        activities: ["Phi Phi Island tour", "Snorkeling", "Maya Bay visit", "Beach relaxation"],
        meals: ["Breakfast", "Lunch"]
      },
      {
        day: 8,
        title: "Island Hopping Day 2",
        description: "Discover more tropical paradise islands.",
        activities: ["James Bond Island tour", "Sea kayaking", "Limestone caves", "Local fishing village"],
        meals: ["Breakfast", "Lunch"]
      },
      {
        day: 9,
        title: "Beach & Culture",
        description: "Relax and explore local island culture.",
        activities: ["Beach relaxation", "Thai massage", "Local market visit", "Sunset dinner"],
        meals: ["Breakfast", "Dinner"]
      },
      {
        day: 10,
        title: "Departure",
        description: "Last beach moments and departure.",
        activities: ["Final beach time", "Souvenir shopping", "Airport transfer"],
        meals: ["Breakfast"]
      }
    ]
  }
];

export const searchTrips = (criteria: SearchCriteria): TripPackage[] => {
  const { destination, budget, people, duration } = criteria;
  
  return mockTrips.filter(trip => {
    // Check destination (case insensitive, partial match)
    const destinationMatch = trip.destination.toLowerCase().includes(destination.toLowerCase()) ||
                            trip.title.toLowerCase().includes(destination.toLowerCase());
    
    // Check budget range
    const budgetMatch = budget >= trip.budget.min && budget <= trip.budget.max;
    
    // Check people capacity
    const peopleMatch = people <= trip.maxPeople;
    
    // Check duration (allow +/- 2 days flexibility)
    const durationMatch = Math.abs(duration - trip.duration) <= 2;
    
    return destinationMatch && budgetMatch && peopleMatch && durationMatch;
  });
};

export const destinations = [
  "Bali, Indonesia",
  "Paris, France", 
  "Tokyo, Japan",
  "Iceland",
  "Thailand",
  "New York, USA",
  "Rome, Italy",
  "London, England",
  "Barcelona, Spain",
  "Sydney, Australia"
];