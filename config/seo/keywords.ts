export interface Keyword {
  term: string
  priority: "high" | "medium" | "low"
  type: "short" | "long"
  intent: "navigational" | "informational" | "transactional" | "commercial investigation"
}

export const keywords: Keyword[] = [
  // Core keywords
  { term: "LivPure", priority: "high", type: "short", intent: "navigational" },
  { term: "LivPure reviews 2025", priority: "high", type: "short", intent: "commercial investigation" },
  { term: "LivPure supplement", priority: "high", type: "short", intent: "navigational" },
  { term: "LivPure official website", priority: "high", type: "short", intent: "navigational" },

  // Health benefits keywords
  { term: "liver health supplement", priority: "high", type: "short", intent: "informational" },
  { term: "natural liver detox", priority: "high", type: "short", intent: "informational" },
  { term: "weight loss supplement", priority: "high", type: "short", intent: "informational" },
  { term: "metabolism booster", priority: "medium", type: "short", intent: "informational" },

  // Product specific
  { term: "LivPure ingredients", priority: "high", type: "short", intent: "informational" },
  { term: "LivPure side effects", priority: "medium", type: "short", intent: "informational" },
  { term: "LivPure dosage", priority: "medium", type: "short", intent: "informational" },
  { term: "LivPure benefits", priority: "high", type: "short", intent: "informational" },

  // Purchase related
  { term: "buy LivPure", priority: "high", type: "short", intent: "transactional" },
  { term: "LivPure price", priority: "high", type: "short", intent: "commercial investigation" },
  { term: "LivPure discount", priority: "medium", type: "short", intent: "transactional" },
  { term: "LivPure coupon", priority: "medium", type: "short", intent: "transactional" },

  // Long-tail keywords
  { term: "does LivPure really work", priority: "high", type: "long", intent: "commercial investigation" },
  { term: "LivPure before and after results", priority: "high", type: "long", intent: "commercial investigation" },
  { term: "how to use LivPure supplement", priority: "medium", type: "long", intent: "informational" },
  { term: "LivPure vs other liver supplements", priority: "medium", type: "long", intent: "commercial investigation" },

  // Location-based
  { term: "LivPure USA", priority: "high", type: "short", intent: "navigational" },
  { term: "where to buy LivPure", priority: "high", type: "short", intent: "transactional" },
  { term: "LivPure international shipping", priority: "medium", type: "short", intent: "transactional" },

  // Content specific
  { term: "LivPure podcast", priority: "high", type: "short", intent: "informational" },
  { term: "LivPure customer testimonials", priority: "high", type: "long", intent: "commercial investigation" },
  { term: "LivPure scientific research", priority: "medium", type: "long", intent: "informational" },
  { term: "LivPure fat burning breakthrough", priority: "high", type: "long", intent: "informational" },
  { term: "LivPure metabolism support", priority: "high", type: "long", intent: "informational" },
]

export const keywordGroups = {
  homepage: [
    "LivPure",
    "LivPure reviews 2025",
    "liver health supplement",
    "natural liver detox",
    "weight loss supplement",
  ],
  podcast: [
    "LivPure podcast",
    "LivPure fat burning breakthrough",
    "LivPure metabolism support",
    "liver health and weight loss podcast",
  ],
  reviews: [
    "LivPure reviews",
    "does LivPure really work",
    "LivPure before and after results",
    "LivPure customer testimonials",
  ],
  product: ["LivPure ingredients", "LivPure benefits", "LivPure side effects", "LivPure dosage"],
  purchase: ["buy LivPure", "LivPure price", "where to buy LivPure", "LivPure discount"],
  research: ["LivPure scientific research", "liver health studies", "weight loss research", "metabolism studies"],
}

