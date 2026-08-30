import type { Metadata } from 'next'
import { Mail, MapPin, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact | The Gifted Village',
  description:
    'Join The Gifted Village or reach out about classes, workshops, curriculum, and partnerships. You belong here.',
}

const infoItems = [
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['hello@thegiftedvillage.org'],
  },
  {
    icon: Clock,
    title: 'Response Time',
    lines: ['We reply within 1–2 business days'],
  },
  {
    icon: MapPin,
    title: 'Where We Serve',
    lines: ['Online worldwide', 'In-person for schools & partners'],
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="You belong here."
        title="Join The Village"
        subtitle="Whether you're a parent, educator, or community partner, we'd love to hear from you. Tell us about your learner and we'll help you find the right path."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.4fr] md:py-20">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-forest">
              Let&apos;s Connect
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Spots are limited to maintain high-quality, personalized
              experiences. Reach out and we&apos;ll be in touch soon.
            </p>

            <ul className="mt-8 space-y-6">
              {infoItems.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-lime/15 text-lime">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-serif text-lg font-semibold text-forest">
                      {item.title}
                    </p>
                    {item.lines.map((line) => (
                      <p key={line} className="text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-10 font-serif text-lg italic text-forest">
              &ldquo;It takes a village to grow a gifted mind.&rdquo;
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm md:p-9">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
