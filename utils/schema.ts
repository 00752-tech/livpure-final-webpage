function generateProductSchema() {
  const currentDate = new Date()
  const oneYearFromNow = new Date(currentDate.setFullYear(currentDate.getFullYear() + 1))

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "LivPure",
    description: "LivPure is a natural supplement designed to support liver health and overall wellness.",
    brand: {
      "@type": "Brand",
      name: "LivPure",
    },
    offers: {
      "@type": "Offer",
      url: "https://livpurereview2025.com",
      priceCurrency: "USD",
      price: "49",
      availability: "https://schema.org/InStock",
      priceValidUntil: oneYearFromNow.toISOString().split("T")[0],
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "USD",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: "0",
            maxValue: "1",
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: "1",
            maxValue: "5",
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "US",
        returnPolicyCategory: "https://schema.org/MoneyBackGuarantee",
        merchantReturnDays: "60",
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/livpure%20girl%20in%20bikini.jpg-7QurKOop1UFgA57MI64g7kECp8NGXN.png",
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.8",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Sarah Johnson",
      },
      reviewBody:
        "After 2 months of using LivPure, I've noticed a significant improvement in my energy levels and I've lost 15 pounds!",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "1247",
      bestRating: "5",
      worstRating: "1",
    },
  }
}

function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LivPure Review 2025",
    url: "https://livpurereview2025.com",
    description:
      "Comprehensive review and information about LivPure, a natural supplement for liver health and wellness.",
    publisher: {
      "@type": "Organization",
      name: "LivPure",
      logo: {
        "@type": "ImageObject",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/O%20(1)-KhR1uRHPCivZGREMOVO8rhpxd5Pq41.png",
      },
    },
  }
}

function generateArticleSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "LivPure Review 2025: Complete Guide to Natural Liver Support",
    description:
      "Comprehensive review of LivPure supplement, including benefits, ingredients, and real user experiences.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/livpure%20girl%20in%20bikini.jpg-7QurKOop1UFgA57MI64g7kECp8NGXN.png",
    datePublished: "2024-01-24T00:00:00.000Z",
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "LivPure Review",
      url: "https://livpurereview2025.com",
    },
  }
}

function generateVideoSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "LivPure Review - Honest Customer Review",
    description:
      "Watch this comprehensive review of LivPure supplement, featuring real customer testimonials and results.",
    thumbnailUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/livpure%20girl%20in%20bikini.jpg-7QurKOop1UFgA57MI64g7kECp8NGXN.png",
    uploadDate: "2024-01-24T00:00:00.000Z",
    duration: "PT5M",
    embedUrl: "https://www.youtube.com/embed/QXQWc92hDq8",
  }
}

function generateBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://livpurereview2025.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Reviews",
        item: "https://livpurereview2025.com#reviews",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Podcast",
        item: "https://livpurereview2025.com#podcast",
      },
    ],
  }
}

function generateHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use LivPure for Optimal Results",
    description: "Step-by-step guide on how to use LivPure supplement for the best results.",
    step: [
      {
        "@type": "HowToStep",
        name: "Take Daily",
        text: "Take one LivPure capsule daily with water",
      },
      {
        "@type": "HowToStep",
        name: "Consistency",
        text: "Maintain consistent daily use for optimal results",
      },
      {
        "@type": "HowToStep",
        name: "Healthy Diet",
        text: "Combine with a balanced diet and regular exercise",
      },
    ],
  }
}

function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "LivPure Official Store",
    description: "Official online store for LivPure supplements",
    url: "https://livpurereview2025.com",
    telephone: "+1-800-123-4567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Health Avenue",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90001",
      addressCountry: "US",
    },
  }
}

function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is LivPure and what are its claimed benefits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LivPure is marketed as a natural supplement designed to support liver health and overall wellness. The company claims it may contribute to healthy weight management and improved energy levels when used as part of a balanced lifestyle.",
        },
      },
      {
        "@type": "Question",
        name: "Where can consumers purchase LivPure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "According to the company, LivPure is primarily available through their official website. They state that this is to ensure customers receive the authentic product. LivPure offers shipping to locations across the USA, including major cities.",
        },
      },
      {
        "@type": "Question",
        name: "What is LivPure's return policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "According to LivPure's website, they offer a 60-day return policy on purchases. They state that if a customer is not completely satisfied with their purchase, they can return it within 60 days for a refund. It's recommended to check their official website for full details on the return process.",
        },
      },
    ],
  }
}

function generatePodcastSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: "Fat Burning Breakthrough: How LivPure Supports Metabolism",
    description:
      "Discover the science-backed ingredients in LivPure and how they support liver health and weight loss. This podcast explores how LivPure's blend of Silymarin, Berberine, and other key compounds helps detoxify the liver, boost metabolism, and promote fat burning.",
    datePublished: "2024-01-24",
    duration: "PT16M19S",
    associatedMedia: {
      "@type": "AudioObject",
      contentUrl: "https://drive.google.com/file/d/1oNWpA4_A8wCaFcN2JE9ubhcHrW5mTMl_/preview",
      encodingFormat: "audio/mpeg",
    },
  }
}

function generateTranscriptSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    articleBody:
      "Full transcript of the LivPure podcast episode discussing how LivPure supports metabolism and promotes fat burning.",
    about: {
      "@type": "PodcastEpisode",
      name: "Fat Burning Breakthrough: How LivPure Supports Metabolism",
    },
  }
}

function generateCombinedSchema() {
  return [
    generateProductSchema(),
    generateWebsiteSchema(),
    generateArticleSchema(),
    generateVideoSchema(),
    generateBreadcrumbSchema(),
    generateHowToSchema(),
    generateLocalBusinessSchema(),
    generateFAQSchema(),
    generatePodcastSchema(),
    generateTranscriptSchema(),
  ]
}

export {
  generateProductSchema,
  generateWebsiteSchema,
  generateArticleSchema,
  generateVideoSchema,
  generateBreadcrumbSchema,
  generateHowToSchema,
  generateLocalBusinessSchema,
  generateFAQSchema,
  generatePodcastSchema,
  generateTranscriptSchema,
  generateCombinedSchema,
}

