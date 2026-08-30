import Image from 'next/image'
import { Check } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { PathwaysGrid } from '@/components/pathways-grid'
import { Testimonials } from '@/components/testimonials'
import { EmailSignup } from '@/components/email-signup'

const partners = [
  'Sage Defense Systems',
  'Plant Klub',
  'Krown Level Enterprises',
  'Botanically Yours',
  'Sow Society',
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/hero-learners.png"
          alt="Curious children collaborating and creating together"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/80" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center text-forest-foreground md:py-32">
          <p className="mb-4 font-serif italic text-gold">
            Where Brilliant Minds Grow Together
          </p>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-tight md:text-6xl">
            Is Your Child Ready for More Than the Classroom Can Offer?
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-forest-foreground/90">
            At The Gifted Village, we nurture curious, creative, and
            high-potential learners through culturally grounded, engaging
            experiences that build confidence, leadership, and real-world
            skills.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="/contact" variant="white">
              Join the Village Today
            </CtaButton>
            <CtaButton
              href="/programs"
              variant="lime"
              className="ring-1 ring-forest-foreground/30"
            >
              Explore Programs
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Welcome / Problem + Solution */}
      <section className="bg-lime text-lime-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="text-center font-serif text-3xl font-semibold md:text-4xl">
            Welcome to The Gifted Village
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl font-semibold">
                You Know Your Child Needs More...
              </h3>
              <p className="mt-4 leading-relaxed text-lime-foreground/90">
                They finish work quickly but aren&apos;t truly challenged. They
                ask big questions that go unanswered. They&apos;re creative,
                curious, and think differently. Most importantly, they need an
                environment that values and nurtures their unique potential.
              </p>
              <p className="mt-4 font-serif text-lg italic">
                We see them. We understand them. We serve them.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold">
                We are reimagining education by creating a learning community
                where gifted and high-potential learners are:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  'Challenged academically',
                  'Inspired creatively',
                  'Connected culturally',
                  'Supported by community',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="size-5 shrink-0 text-gold" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-serif text-lg italic">
                This is where gifted and high-potential learners thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Pathways */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="text-center font-serif text-3xl font-semibold text-forest md:text-4xl">
            Program Pathways
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Choose your path in the village. Each space is designed to help
            gifts grow in community.
          </p>
          <div className="mt-14">
            <PathwaysGrid />
          </div>
        </div>
      </section>

      {/* Why Choose + testimonials */}
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
          <h2 className="text-center font-serif text-3xl font-semibold md:text-4xl">
            Why Families &amp; Educators Choose The Gifted Village
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center leading-relaxed text-forest-foreground/85">
            Designed by a gifted education specialist with more than 25 years of
            experience, our approach is rooted in culture, creativity, and
            real-world learning. The Gifted Village has a proven track record of
            increasing confidence, engagement, and leadership and is trusted by
            families, schools, and community partners alike.
          </p>
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Free gift */}
      <section className="bg-lime text-lime-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
          <div className="order-2 md:order-1">
            <div className="relative mx-auto aspect-4/3 w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/free-guide.png"
                alt="Free printable gifted learner activity guide"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="font-serif text-sm tracking-widest text-gold uppercase">
              Start Here
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold md:text-4xl">
              Free Gifted Learner Mini Experience
            </h2>
            <p className="mt-4 text-lg font-semibold">
              Not sure where to begin?
            </p>
            <p className="mt-2 leading-relaxed text-lime-foreground/90">
              Download a FREE activity guide designed to spark your child&apos;s
              thinking and creativity.
            </p>
            <CtaButton href="/quiz" variant="white" className="mt-6">
              Get Your Free Gift
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Transformation + final CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
          <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
            Ready to Join The Gifted Village?
          </h2>
          <p className="mt-8 font-serif text-xl font-semibold text-forest">
            Imagine your child...
          </p>
          <ul className="mx-auto mt-4 inline-flex flex-col gap-2 text-left">
            {[
              'Confident in who they are',
              'Excited about learning again',
              'Thinking deeply and creatively',
              'Surrounded by a community that understands them',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Check className="size-5 shrink-0 text-lime" />
                <span className="text-lg text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-serif text-lg font-semibold text-forest">
            That&apos;s the power of The Gifted Village.
          </p>
          <p className="mt-3 italic text-muted-foreground">
            Spots are limited to maintain high-quality, personalized
            experiences.
          </p>
          <div className="mt-8 flex flex-col flex-wrap justify-center gap-3 sm:flex-row">
            <CtaButton href="/contact" variant="lime">
              Join The Village
            </CtaButton>
            <CtaButton href="/programs" variant="outline">
              Explore Programs
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Stay connected */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <h2 className="font-serif text-3xl font-semibold text-forest">
            Stay Connected
          </h2>
          <p className="mt-3 text-muted-foreground">
            Get exclusive access to new programs, parent resources, events &amp;
            workshops, and special offers.
          </p>
          <EmailSignup className="mx-auto mt-8 max-w-xl" />
        </div>
      </section>

      {/* Partners */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-center font-serif text-xl italic text-muted-foreground">
            Special Thanks to Our Partners
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {partners.map((p) => (
              <li
                key={p}
                className="font-serif text-lg font-semibold text-forest/70"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
