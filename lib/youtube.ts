/**
 * Accepts a pasted YouTube URL in any common form (watch, youtu.be, shorts, embed)
 * and returns the video id, or null if it couldn't be parsed.
 */
export function getYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url)
    if (parsed.hostname === 'youtu.be') {
      return parsed.pathname.slice(1) || null
    }
    if (parsed.hostname.includes('youtube.com')) {
      if (parsed.pathname === '/watch') {
        return parsed.searchParams.get('v')
      }
      const match = parsed.pathname.match(/^\/(embed|shorts)\/([^/]+)/)
      if (match) return match[2]
    }
    return null
  } catch {
    return null
  }
}

export function getYouTubeEmbedUrl(url: string): string | null {
  const id = getYouTubeId(url)
  return id ? `https://www.youtube.com/embed/${id}` : null
}

export function getYouTubeThumbnail(url: string): string | null {
  const id = getYouTubeId(url)
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null
}
