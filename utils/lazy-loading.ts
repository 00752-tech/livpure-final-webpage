export const lazyLoadOptions = {
  threshold: 0.1,
  rootMargin: "50px",
}

export const imageLoadingStrategy = (index: number) => {
  if (index <= 2) return "eager" // Load first 3 images eagerly
  return "lazy"
}

