export function withBase(baseURL: string, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  const prefix = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL
  return `${prefix}${normalized}`
}
