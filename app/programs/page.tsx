import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ProgramIcon } from '@/components/program-icon'
import { CtaButton } from '@/components/cta-button'
import { programs } from '@/lib/programs'

export const metadata: Metadata = {
  title: 'Programs | The Gifted Village',
  description:
    'Enrichment classes, storytelling, curriculum resources, hands-on Agri-STEAM, executive function coaching, and parent workshops for gifted and high-potential learners.',
}

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Our Programs"
        subtitle="Enrichment, resources, and support designed to help gifted and high-potential learners — and the families who support them — grow."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <div
                key={p.slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <ProgramIcon image={p.image} alt={p.name} className="size-14" />
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

          <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-secondary p-10 text-center">
            <p className="font-serif text-xl font-semibold text-forest">
              Looking for the Village Marketplace?
            </p>
            <p className="max-w-md text-muted-foreground">
              Educational tools and culturally meaningful merchandise are on
              the way.
            </p>
            <CtaButton href="/village-market" variant="gold">
              Visit the Village Marketplace
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
