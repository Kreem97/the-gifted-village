import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CtaButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'Agri-STEAM | The Gifted Village',
  description:
    'Hands-on Agri-STEAM programs for gifted students combining agriculture, sustainability, technology, and entrepreneurship through real-world learning.',
}

const focusAreas = [
  'Sustainability & Environmental Literacy',
  'Innovation & Agricultural Technology',
  'Systems Thinking & Design Challenges',
  'Entrepreneurship & Financial Literacy',
  'Nutrition & Food Systems',
]

const pathways = [
  {
    title: 'Agri-STEAM Enrichment Modules',
    description:
      'Short, engaging modules connecting agriculture with STEAM through experiments, design challenges, and creative reflection.',
  },
  {
    title: 'School & Community Micro-Farm Projects',
    description:
      'Students design, test, and manage raised beds, container gardens, and hydroponic systems.',
  },
  {
    title: 'Environmental Sustainability Lessons',
    description:
      'Composting, soil regeneration, water cycles, and climate-smart agriculture.',
  },
  {
    title: 'Agricultural Technology Exploration',
    description:
      'Sensors, data logging, automation, and precision agriculture for advanced thinkers.',
  },
  {
    title: 'Entrepreneurship Through Agriculture',
    description:
      'Students grow herbs, microgreens, or seedlings and build a mini business — pricing, branding, and budgeting.',
  },
  {
    title: 'Nutrition & Food Systems Education',
    description:
      'Food systems, food security, cultural food traditions, and farm-to-table thinking.',
  },
]

const whoItsFor = [
  'Gifted and high-potential learners',
  'Curious, hands-on learners who need challenge and meaning',
  'Homeschool pods and enrichment groups',
  'Schools, districts, nonprofits, and community partners',
]

export default function AgriSteamPage() {
  return (
    <>
      <PageHero
        eyebrow="Hands-On Learning"
        title="Agri-STEAM"
        subtitle="Where learning grows and gifts flourish. Agri-STEAM blends agriculture with Science, Technology, Engineering, Arts, and Math into joyful, rigorous, hands-on learning for gifted and high-potential learners."
      />

      <section className="bg-lime text-lime-foreground">
        <div className="mx-auto max-w-4xl px-5 py-6 text-center">
          <p className="font-medium">
            Currently available for schools and community partners — individual
            enrollment is opening soon.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
          <p className="text-lg leading-relaxed text-foreground/90">
            Here, students don&apos;t just study systems — they build them,
            test them, improve them, and share what they learn. In The Gifted
            Village, acceleration means no competition: students learn deeply
            and collaboratively.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
          <h2 className="text-center font-serif text-2xl font-semibold text-forest md:text-3xl">
            Primary Focus Areas
          </h2>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <li
                key={item}
                className="rounded-xl bg-background px-5 py-3 text-center font-medium text-forest shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="text-center font-serif text-2xl font-semibold text-forest md:text-3xl">
            Agri-STEAM Learning Experiences
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Choose one pathway or combine them into a full program.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.map((p) => (
              <div key={p.title} className="rounded-2xl bg-secondary p-6 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-forest">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
          <h2 className="font-serif text-2xl font-semibold md:text-3xl">
            Who This Is For
          </h2>
          <ul className="mx-auto mt-6 inline-flex flex-col gap-2 text-left">
            {whoItsFor.map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg">
                <span className="text-gold">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CtaButton href="/contact" variant="white">
              Book a Consultation
            </CtaButton>
            <CtaButton href="/contact" variant="lime">
              Partner With Us
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  )
}
