import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sprout } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ProgramIcon } from '@/components/program-icon'
import { CtaButton } from '@/components/cta-button'
import { programs } from '@/lib/programs'

export const metadata: Metadata = {
  title: 'Programs | The Gifted Village',
  description:
    'Explore The Gifted Village pathways: Learning Lodge, Story Circle, Curriculum Garden, Community Partners, Village Market, and signature Agri-STEAM.',
}

const agriFocus = [
  'Sustainability + Environmental Literacy',
  'Innovation + Agricultural Technology',
  'Systems Thinking + Design Challenges',
  'Entrepreneurship + Financial Literacy',
  'Nutrition + Food Systems',
]

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Choose Your Path in the Village"
        title="Program Pathways"
        subtitle="Each space in the village is designed to help gifted and high-potential learners grow deeply, creatively, and in community."
      />

      {/* Pathway cards */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <div
                key={p.slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-14 items-center justify-center rounded-xl bg-secondary text-forest">
                    <ProgramIcon icon={p.icon} className="size-7" />
                  </span>
                  {p.comingSoon && (
                    <span className="rounded-full bg-gold/25 px-3 py-1 text-xs font-semibold tracking-wide text-forest uppercase">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h2 className="mt-5 font-serif text-2xl font-semibold text-forest">
                  {p.name}
                </h2>
                <p className="text-sm italic text-lime">{p.tag}</p>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                  {p.short}
                </p>
                <Link
                  href={p.href}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-forest transition-colors hover:text-lime"
                >
                  {p.comingSoon ? 'Learn More' : p.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agri-STEAM signature */}
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="flex flex-col items-start gap-4">
            <span className="flex size-14 items-center justify-center rounded-xl bg-gold/20 text-gold">
              <Sprout className="size-7" />
            </span>
            <p className="font-serif italic text-gold">
              Where Learning Grows and Gifts Flourish
            </p>
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">
              Agri-STEAM at The Gifted Village
            </h2>
            <p className="max-w-3xl leading-relaxed text-forest-foreground/85">
              A signature pathway that blends agriculture with Science,
              Technology, Engineering, Arts, and Math into joyful, rigorous,
              hands-on learning. Students don&apos;t just study systems&mdash;they
              build them, test them, improve them, and share what they learn.
              Available now for schools, and coming soon for individual learners.
            </p>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {agriFocus.map((f) => (
              <li
                key={f}
                className="rounded-xl bg-forest-foreground/5 px-5 py-4 ring-1 ring-forest-foreground/10"
              >
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col flex-wrap gap-3 sm:flex-row">
            <CtaButton href="/contact" variant="gold">
              Partner With Us
            </CtaButton>
            <CtaButton
              href="/contact"
              variant="lime"
              className="ring-1 ring-forest-foreground/30"
            >
              Book a Workshop
            </CtaButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <h2 className="font-serif text-3xl font-semibold text-forest">
            Not Sure Which Path Fits?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Take our quick 2-minute quiz to discover your child&apos;s learning
            profile and the best next step.
          </p>
          <CtaButton href="/quiz" variant="lime" className="mt-8">
            Take the Free Quiz
          </CtaButton>
        </div>
      </section>
    </>
  )
}
