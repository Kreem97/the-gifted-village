import Link from 'next/link'
import { Sprout } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  variant = 'dark',
}: {
  className?: string
  variant?: 'dark' | 'light'
}) {
  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center gap-3', className)}
      aria-label="The Gifted Village home"
    >
      <span className="flex size-10 items-center justify-center rounded-full bg-gold/20 ring-1 ring-gold/40">
        <Sprout className="size-6 text-gold" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-serif text-base font-semibold tracking-[0.14em]',
            variant === 'light' ? 'text-forest-foreground' : 'text-gold',
          )}
        >
          THE GIFTED VILLAGE
        </span>
        <span
          className={cn(
            'mt-1 text-[0.7rem] font-medium tracking-[0.28em] uppercase',
            variant === 'light' ? 'text-forest-foreground/70' : 'text-lime',
          )}
        >
          Reimagining Education
        </span>
      </span>
    </Link>
  )
}
