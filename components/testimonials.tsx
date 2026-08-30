'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

const reviews = [
  {
    name: 'Pamela',
    date: '06-26-2026',
    text: 'The experience our family has had—and continues to have—is a direct testimony to how the right environment can unlock growth in anyone. My daughter was not only exposed to new academic challenges, but she was also given the essential social and emotional support she needed to truly flourish.',
  },
  {
    name: 'Renee',
    date: '07-02-2026',
    text: 'My son and I had a wonderful experience with The Gifted Village. After he was identified as gifted, their team helped me better understand his unique needs and strengths while also helping him learn more about himself. Their guidance strengthened his confidence and love of learning.',
  },
  {
    name: 'Sequoyah',
    date: '06-19-2026',
    text: 'We are incredibly grateful for The Gifted Village program and the amazing Arlene Cameron-Lloyd, who has made such a profound impact on both of our daughters. Although both are gifted, their strengths, personalities, and learning styles are completely different, and she met each of them exactly where they were.',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  const go = (dir: number) => {
    setActive((prev) => (prev + dir + reviews.length) % reviews.length)
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex items-center gap-3 sm:gap-5">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest-foreground/10 text-forest-foreground transition-colors hover:bg-gold hover:text-forest"
        >
          <ChevronLeft className="size-6" />
        </button>

        <div className="relative flex-1 rounded-2xl bg-background p-7 text-left shadow-lg">
          <Quote className="absolute right-6 top-6 size-8 text-gold/40" aria-hidden="true" />
          <div className="flex items-baseline justify-between gap-3">
            <p className="font-serif text-xl font-semibold text-forest">
              {reviews[active].name}
            </p>
            <span className="text-xs text-muted-foreground">
              {reviews[active].date}
            </span>
          </div>
          <div className="mt-2 flex gap-0.5" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-gold text-gold" />
            ))}
          </div>
          <p className="mt-4 leading-relaxed text-foreground/90">
            {reviews[active].text}
          </p>
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest-foreground/10 text-forest-foreground transition-colors hover:bg-gold hover:text-forest"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {reviews.map((r, i) => (
          <button
            key={r.name}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show testimonial from ${r.name}`}
            className={cn(
              'h-2.5 rounded-full transition-all',
              i === active
                ? 'w-8 bg-gold'
                : 'w-2.5 bg-forest-foreground/30 hover:bg-forest-foreground/50',
            )}
          />
        ))}
      </div>
    </div>
  )
}
