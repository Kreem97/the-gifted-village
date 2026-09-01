import {
  BookOpen,
  Brain,
  GraduationCap,
  Leaf,
  Sprout,
  Users,
  type LucideIcon,
} from 'lucide-react'

export type Program = {
  slug: string
  name: string
  tag: string
  icon: LucideIcon
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
    icon: GraduationCap,
    short:
      'Enrichment classes and academic adventures that go beyond the classroom.',
    cta: 'Join the Waitlist',
    comingSoon: true,
    href: '/programs/learning-lodge',
  },
  {
    slug: 'story-circle',
    name: 'Story Circle',
    tag: 'Free Video Library',
    icon: BookOpen,
    short:
      'Stories that inspire. Voices that lead. Creative storytelling, writing, and speaking experiences.',
    cta: 'Watch Now',
    href: '/programs/story-circle',
  },
  {
    slug: 'curriculum-garden',
    name: 'Curriculum Garden',
    tag: 'Free & Paid Resources',
    icon: Sprout,
    short:
      'Resources for parents, teachers, and homeschoolers to nurture gifted learners.',
    cta: 'Browse Resources',
    href: '/programs/curriculum-garden',
  },
  {
    slug: 'agri-steam',
    name: 'Agri-STEAM',
    tag: 'Hands-On Learning',
    icon: Leaf,
    short:
      'Grow. Explore. Innovate. Hands-on agriculture, science, and sustainability experiences.',
    cta: 'Book a Consultation',
    href: '/programs/agri-steam',
  },
  {
    slug: 'executive-function',
    name: 'Executive Function',
    tag: 'Skills for Success',
    icon: Brain,
    short:
      'Skills for success. Tools for life. Practical strategies that build focus, organization, and self-advocacy.',
    cta: 'Join the Waitlist',
    comingSoon: true,
    href: '/programs/executive-function',
  },
  {
    slug: 'growing-gifted-minds',
    name: 'Growing Gifted Minds',
    tag: 'Parent Workshops & Support',
    icon: Users,
    short:
      'Workshops & parent support. Empowering families with knowledge, strategies, and community.',
    cta: 'Join the Waitlist',
    comingSoon: true,
    href: '/programs/growing-gifted-minds',
  },
]

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug)
}
