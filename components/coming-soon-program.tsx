import { Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { EmailSignup } from '@/components/email-signup'

export function ComingSoonProgram({
  eyebrow,
  title,
  subtitle,
  bullets,
}: {
  eyebrow: string
  title: string
  subtitle: string
  bullets: string[]
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="bg-background">
        <div className="mx-auto max-w-2xl px-5 py-16 text-center md:py-24">
          <span className="inline-flex rounded-full bg-gold/25 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-forest">
            Coming Soon
          </span>
          <ul className="mx-auto mt-6 inline-flex flex-col gap-2 text-left">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg text-foreground">
                <Check className="size-5 shrink-0 text-lime" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted-foreground">
            Be the first to know when it&apos;s ready — join the waitlist.
          </p>
          <EmailSignup
            className="mx-auto mt-6 max-w-md"
            buttonLabel="Join the Waitlist"
          />
        </div>
      </section>
    </>
  )
}
