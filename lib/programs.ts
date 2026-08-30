export type ProgramIcon =
  | 'school'
  | 'book'
  | 'flower'
  | 'users'
  | 'cart'

export type Program = {
  slug: string
  name: string
  tag: string
  icon: ProgramIcon
  short: string
  cta: string
  comingSoon?: boolean
  href: string
}

export const programs: Program[] = [
  {
    slug: 'learning-lodge',
    name: 'Learning Lodge',
    tag: 'Online Classes',
    icon: 'school',
    short:
      'Structured, engaging virtual classes that stretch thinking and deepen understanding.',
    cta: 'Enroll Now',
    comingSoon: true,
    href: '/programs/learning-lodge',
  },
  {
    slug: 'story-circle',
    name: 'Story Circle',
    tag: 'Workshops & Read-Alouds',
    icon: 'book',
    short:
      'Interactive literacy experiences that build identity, voice, and imagination.',
    cta: 'Reserve Your Spot',
    href: '/programs/story-circle',
  },
  {
    slug: 'curriculum-garden',
    name: 'Curriculum Garden',
    tag: 'Resources',
    icon: 'flower',
    short:
      'Ready-to-use lessons, stations, and tools for parents and educators.',
    cta: 'Browse Resources',
    href: '/programs/curriculum-garden',
  },
  {
    slug: 'community-partners',
    name: 'Community Partners',
    tag: 'Services',
    icon: 'users',
    short:
      'Workshops, PD, and collaborative programming for schools and organizations.',
    cta: 'Book a Consultation',
    href: '/programs/community-partners',
  },
  {
    slug: 'village-market',
    name: 'Village Market',
    tag: 'Shop',
    icon: 'cart',
    short:
      'Educational tools and culturally meaningful merchandise for curious minds.',
    cta: 'Shop Now',
    comingSoon: true,
    href: '/programs/village-market',
  },
]

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug)
}
