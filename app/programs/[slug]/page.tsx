import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Check, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ProgramIcon } from '@/components/program-icon'
import { CtaButton } from '@/components/cta-button'
import { EmailSignup } from '@/components/email-signup'
import { programs, getProgram } from '@/lib/programs'

type Params = { params: Promise<{ slug: string }> }

const details: Record<
  string,
  { intro: string; features: string[] }
> = {
  'learning-lodge': {
    intro:
      'A calm, welcoming space for structured, engaging virtual classes that stretch thinking and deepen understanding&mdash;never an overwhelming LMS.',
    features: [
      'Age bands: K–2, 3–5, 6–8, and Teens',
      'Focus areas: STEAM, Literacy, Identity, and Leadership',
      'Clear, growth-based outcomes instead of grades',
      'Live, interactive, project-based sessions',
    ],
  },
  'story-circle': {
    intro:
      'Interactive literacy experiences&mdash;live and recorded&mdash;that build identity, voice, and imagination for children and families.',
    features: [
      'Live and recorded workshops',
      'Family sessions to learn together',
      'School and organization bookings',
      'Warm, welcoming read-aloud circle time with Auntie Amara',
    ],
  },
  'curriculum-garden': {
    intro:
      'Ready-to-use, culturally responsive lessons, stations, and tools for parents and educators to plant and grow deep learning.',
    features: [
      'Downloadable curriculum and unit studies',
      'Educator guides and grant-aligned materials',
      'Filter by grade level, subject, and setting',
      'Designed for home, school, and pod settings',
    ],
  },
  'community-partners': {
    intro:
      'Collaborative programming, professional development, and services that bring the village to schools and organizations.',
    features: [
      'Partner organizations and shared services',
      'Enrichment, arts, STEAM, and advocacy',
      'Workshops and professional development',
      'Collaborative, community-centered programs',
    ],
  },
  'village-market': {
    intro:
      'A boutique shop of educational tools and culturally meaningful merchandise, with soft affirmations woven throughout.',
    features: [
      'Calendars with monthly affirmations',
      'Postcards, stationery, and children’s books',
      'Digital downloads and learning kits',
      'Clean, boutique product experience',
    ],
  },
}

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { slug } = await params
  const program = getProgram(slug)
  if (!program) return { title: 'Program | The Gifted Village' }
  return {
    title: `${program.name} | The Gifted Village`,
    description: program.short,
  }
}

export default async function ProgramDetailPage({ params }: Params) {
  const { slug } = await params
  const program = getProgram(slug)
  if (!program) notFound()

  const detail = details[slug]

  return (
    <>
      <PageHero eyebrow={program.tag} title={program.name} />

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-forest"
          >
            <ArrowLeft className="size-4" />
            All Programs
          </Link>

          <div className="mt-8 flex items-center gap-4">
            <span className="flex size-16 items-center justify-center rounded-2xl bg-secondary text-forest">
              <ProgramIcon icon={program.icon} className="size-8" />
            </span>
            {program.comingSoon && (
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/25 px-4 py-1.5 text-sm font-semibold text-forest">
                <Clock className="size-4" />
                Coming Soon
              </span>
            )}
          </div>

          <p
            className="mt-6 text-lg leading-relaxed text-foreground/90"
            dangerouslySetInnerHTML={{ __html: detail.intro }}
          />

          <ul className="mt-8 space-y-3">
            {detail.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check className="mt-1 size-5 shrink-0 text-lime" />
                <span className="text-foreground/90">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl bg-secondary p-8">
            {program.comingSoon ? (
              <>
                <h2 className="font-serif text-2xl font-semibold text-forest">
                  Be the first to know
                </h2>
                <p className="mt-2 text-muted-foreground">
                  {program.name} is opening soon. Join the list and we&apos;ll
                  make sure you&apos;re first through the door.
                </p>
                <EmailSignup className="mt-6" buttonLabel="Notify Me" />
              </>
            ) : (
              <>
                <h2 className="font-serif text-2xl font-semibold text-forest">
                  Ready to begin?
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Reach out and we&apos;ll help you find the right fit for your
                  learner.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <CtaButton href="/contact" variant="lime">
                    {program.cta}
                  </CtaButton>
                  <CtaButton href="/quiz" variant="outline">
                    Take the Quiz
                  </CtaButton>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
