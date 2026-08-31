import type { Metadata } from 'next'
import Image from 'next/image'
import { Heart, Compass, Layers, Globe } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'About | The Gifted Village',
  description:
    'The Gifted Village reimagines education through culturally grounded, hands-on learning that grows giftedness in community.',
}

const values = [
  {
    icon: Heart,
    title: 'Belonging',
    body: 'Every learner is seen, valued, and welcomed exactly as they are. You belong here.',
  },
  {
    icon: Compass,
    title: 'Curiosity',
    body: 'Big questions are honored. Wonder is the starting point for deep learning.',
  },
  {
    icon: Layers,
    title: 'Depth',
    body: 'We move beyond surface work toward meaningful, complex, and lasting understanding.',
  },
  {
    icon: Globe,
    title: 'Culture',
    body: 'Learning is rooted in identity, community, land, and real-world impact.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Where Gifts Grow in Community"
        title="About The Gifted Village"
        subtitle="A digital village square where families, educators, and children feel seen and supported. Not a corporate platform, but a welcoming learning village."
      />

      {/* Origin story + Auntie Amara */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-20">
          <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/auntie-amara.jpg"
              alt="Auntie Amara, warm guide and gifted education specialist at The Gifted Village"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-serif text-sm tracking-widest text-lime uppercase">
              Our Story
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-forest md:text-4xl">
              Guided by Purpose, Rooted in Learning
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/90">
              The Gifted Village was created by a gifted education specialist
              with more than 25 years of experience walking alongside curious,
              creative, high-potential learners and the families who love them.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/90">
              Meet Auntie Amara, the warm guide who welcomes every family into
              the village. Her presence is a reminder that giftedness grows best
              when learning is joyful, culturally responsive, and deeply
              connected to community.
            </p>
            <p className="mt-4 font-serif text-lg italic text-forest">
              &ldquo;It takes a village to grow a gifted mind.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="text-center font-serif text-3xl font-semibold text-forest md:text-4xl">
            Our Values
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-background p-7 shadow-sm ring-1 ring-forest/5"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-lime/15 text-lime">
                  <v.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-forest">
                  {v.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2 md:py-20">
          <div className="rounded-2xl bg-forest p-9 text-forest-foreground">
            <h2 className="font-serif text-2xl font-semibold text-gold">
              Our Mission
            </h2>
            <p className="mt-4 leading-relaxed text-forest-foreground/90">
              The Gifted Village LLC reimagines education by creating culturally
              grounded, engaging learning experiences that nurture curiosity,
              creativity, and leadership. Through innovative programs, resources,
              and partnerships, we empower learners, families, and educators to
              grow, connect, and thrive.
            </p>
            <p className="mt-4 leading-relaxed text-forest-foreground/90">
              We grow giftedness by connecting children to knowledge, culture,
              land, and community through meaningful, hands-on learning
              experiences.
            </p>
          </div>
          <div className="rounded-2xl bg-lime p-9 text-lime-foreground">
            <h2 className="font-serif text-2xl font-semibold">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-lime-foreground/90">
              We envision a vibrant global village where every learner is seen,
              valued, and inspired; where education is joyful, culturally
              responsive, and deeply connected to community, creativity, and
              real-world impact.
            </p>
            <p className="mt-4 leading-relaxed text-lime-foreground/90">
              We see generations of learners who understand their gifts, honor
              their roots, and use their knowledge to strengthen communities and
              sustain the future.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <h2 className="font-serif text-3xl font-semibold text-forest">
            Come Grow With Us
          </h2>
          <p className="mt-3 text-muted-foreground">
            Curiosity is welcome. Learning happens at your own pace. There&apos;s
            a place for your family in the village.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton href="/programs" variant="lime">
              Explore Programs
            </CtaButton>
            <CtaButton href="/contact" variant="outline">
              Join The Village
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  )
}
