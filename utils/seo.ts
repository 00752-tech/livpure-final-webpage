import { keywords, keywordGroups, type Keyword } from "@/config/seo/keywords"

export function getKeywordsByType(type: "short" | "long"): Keyword[] {
  return keywords.filter((keyword) => keyword.type === type)
}

export function getKeywordsByPriority(priority: "high" | "medium" | "low"): Keyword[] {
  return keywords.filter((keyword) => keyword.priority === priority)
}

export function getKeywordsForSection(section: keyof typeof keywordGroups): string[] {
  return keywordGroups[section]
}

export function generateMetaDescription(keywords: string[], maxLength = 160): string {
  // Implement your meta description generation logic here
  // This is just a basic example
  return keywords.slice(0, 3).join(", ").substring(0, maxLength)
}

export function generateMetaKeywords(): string {
  return keywords
    .filter((k) => k.priority === "high")
    .map((k) => k.term)
    .join(", ")
}

