import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { StoryCircleList } from '@/components/story-circle-list'

export const metadata: Metadata = {
  title: 'Story Circle | The Gifted Village',
  description:
    'Free read-alouds, storytelling, and workshops that build identity, voice, and imagination.',
}

export default function StoryCirclePage() {
  return (
    <>
      <PageHero
        eyebrow="Free Video Library"
        title="Story Circle"
        subtitle="Stories that inspire. Voices that lead. Free read-alouds and storytelling experiences for gifted and high-potential learners."
      />
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <StoryCircleList />
        </div>
      </section>
    </>
  )
}
