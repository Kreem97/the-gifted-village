// The 5 "village spaces" shown on the homepage — this matches the client-approved
// landing page mockup exactly (name, tag, copy, and the exact icon glyphs, cropped
// directly from the mockup). This is a different, smaller list than the fuller
// program catalog in lib/programs.ts — see the "Village Pathways" vs "Programs"
// distinction called out by the client.
export type VillagePathway = {
  slug: string
  name: string
  tag: string
  image: string
  short: string
  cta: string
  href: string
}

export const villagePathways: VillagePathway[] = [
  {
    slug: 'learning-lodge',
    name: 'Learning Lodge',
    tag: 'Online Classes',
    image: '/pathways/learning-lodge.png',
    short:
      'Structured, engaging virtual classes that stretch thinking and deepen understanding.',
    cta: 'Enroll Now',
    href: '/programs/learning-lodge',
  },
  {
    slug: 'story-circle',
    name: 'Story Circle',
    tag: 'Workshops & Read-Alouds',
    image: '/pathways/story-circle.png',
    short:
      'Interactive literacy experiences that build identity, voice, and imagination.',
    cta: 'Reserve Your Spot',
    href: '/programs/story-circle',
  },
  {
    slug: 'curriculum-garden',
    name: 'Curriculum Garden',
    tag: 'Resources',
    image: '/pathways/curriculum-garden.png',
    short:
      'Ready-to-use lessons, stations, and tools for parents and educators.',
    cta: 'Browse Resources',
    href: '/programs/curriculum-garden',
  },
  {
    slug: 'community-partners',
    name: 'Community Partners',
    tag: 'Services',
    image: '/pathways/community-partners.png',
    short:
      'Workshops, PD, and collaborative programming for schools and organizations.',
    cta: 'Book a Consultation',
    href: '/programs/community-partners',
  },
  {
    slug: 'village-market',
    name: 'Village Market',
    tag: 'Shop',
    image: '/pathways/village-market.png',
    short:
      'Educational tools and culturally meaningful merchandise for curious minds.',
    cta: 'Shop Now',
    href: '/village-market',
  },
]
