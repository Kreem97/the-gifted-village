'use client'

import { useMemo, useState } from 'react'
import { BookOpen } from 'lucide-react'
import { storyCircleVideos } from '@/data/story-circle'
import { getYouTubeEmbedUrl } from '@/lib/youtube'
import { cn } from '@/lib/utils'

export function StoryCircleList() {
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    storyCircleVideos.forEach((v) => v.tags.forEach((t) => tags.add(t)))
    return Array.from(tags).sort()
  }, [])

  const [activeTag, setActiveTag] = useState<string | null>(null)

  const videos = useMemo(() => {
    if (!activeTag) return storyCircleVideos
    return storyCircleVideos.filter((v) => v.tags.includes(activeTag))
  }, [activeTag])

  if (storyCircleVideos.length === 0) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-dashed border-border py-20 text-center">
        <BookOpen className="mx-auto size-10 text-lime" aria-hidden="true" />
        <p className="mt-4 font-serif text-xl font-semibold text-forest">
          New stories are being added
        </p>
        <p className="mt-2 text-muted-foreground">
          Check back soon for read-alouds and workshops from Story Circle.
        </p>
      </div>
    )
  }

  return (
    <div>
      {allTags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium ring-1 ring-forest/15 transition-colors',
              activeTag === null
                ? 'bg-forest text-forest-foreground'
                : 'bg-background text-forest hover:bg-secondary',
            )}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium ring-1 ring-forest/15 transition-colors',
                activeTag === tag
                  ? 'bg-forest text-forest-foreground'
                  : 'bg-background text-forest hover:bg-secondary',
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {videos.map((video) => {
          const embedUrl = getYouTubeEmbedUrl(video.url)
          return (
            <div
              key={video.url}
              className="overflow-hidden rounded-2xl bg-secondary shadow-sm"
            >
              <div className="relative aspect-video w-full">
                {embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title={video.title}
                    className="absolute inset-0 size-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                    Video link couldn&apos;t be loaded
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-forest">
                  {video.title}
                </h3>
                {video.description && (
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {video.description}
                  </p>
                )}
                {video.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {video.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-background px-2.5 py-0.5 text-xs text-forest/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
