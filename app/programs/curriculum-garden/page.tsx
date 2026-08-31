import type { Metadata } from 'next'
import { Download, Flower2, Lock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaButton } from '@/components/cta-button'
import { freeResources } from '@/data/curriculum-garden'

export const metadata: Metadata = {
  title: 'Curriculum Garden | The Gifted Village',
  description:
    'Free and paid resources for parents, teachers, and homeschoolers to nurture gifted learners.',
}

export default function CurriculumGardenPage() {
  return (
    <>
      <PageHero
        eyebrow="Free & Paid Resources"
        title="Curriculum Garden"
        subtitle="Ready-to-use lessons, stations, and tools for parents and educators raising and teaching gifted learners."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="font-serif text-2xl font-semibold text-forest md:text-3xl">
            Free Resources
          </h2>

          {freeResources.length === 0 ? (
            <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-dashed border-border py-20 text-center">
              <Flower2 className="mx-auto size-10 text-lime" aria-hidden="true" />
              <p className="mt-4 font-serif text-xl font-semibold text-forest">
                New resources are being planted
              </p>
              <p className="mt-2 text-muted-foreground">
                Check back soon for free downloadable lessons and guides.
              </p>
            </div>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {freeResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl bg-secondary p-6 shadow-sm transition-colors hover:bg-lime/15"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-forest/70">
                    <span>{resource.gradeLevel}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{resource.subject}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-forest">
                    {resource.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                    <Download className="size-4" />
                    Download
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="font-serif text-2xl font-semibold text-forest md:text-3xl">
            Paid Resources
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-background p-10 text-center shadow-sm">
            <Lock className="size-8 text-gold" aria-hidden="true" />
            <p className="font-serif text-xl font-semibold text-forest">
              Coming Soon to the Village Marketplace
            </p>
            <p className="max-w-md text-muted-foreground">
              In-depth unit studies, educator guides, and grant-aligned materials
              will be available for purchase through the Village Marketplace.
            </p>
            <CtaButton href="/village-market" variant="gold">
              Visit the Village Marketplace
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  )
}
