import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { EmailSignup } from '@/components/email-signup'

export const metadata: Metadata = {
  title: 'Village Marketplace | The Gifted Village',
  description:
    'Educational tools and culturally meaningful merchandise for curious minds — coming soon.',
}

const comingSoon = [
  "Children's books",
  'Digital downloads & unit studies',
]

export default function VillageMarketPage() {
  return (
    <>
      <PageHero
        eyebrow="Coming Soon"
        title="Village Marketplace"
        subtitle="Educational tools and culturally meaningful merchandise for curious minds. We're building the shop — here's what's on the way."
      />
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-5 py-16 text-center md:py-24">
          <ul className="mx-auto inline-flex flex-col gap-2 text-left">
            {comingSoon.map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg text-foreground">
                <span className="text-lime">✔</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted-foreground">
            Want first access when we launch? Leave your email below.
          </p>
          <EmailSignup
            className="mx-auto mt-6 max-w-md"
            buttonLabel="Notify Me When We Launch"
          />
        </div>
      </section>
    </>
  )
}
