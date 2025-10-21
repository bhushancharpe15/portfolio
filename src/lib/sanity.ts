// Static functions for local data (no server-side code)
export function urlFor(source: any) {
  // Return the source as-is for static export
  return source
}

export function getProjects() {
  // Return empty array - we use local data in components
  return []
}

export function getFeaturedProjects() {
  // Return empty array - we use local data in components
  return []
}

export function getProjectBySlug(slug: string) {
  // Return null - we use local data in components
  return null
}
