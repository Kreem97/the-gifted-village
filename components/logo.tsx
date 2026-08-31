import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  variant = 'dark',
  layout = 'horizontal',
}: {
  className?: string
  variant?: 'dark' | 'light'
  layout?: 'horizontal' | 'stacked'
}) {
  const wordmark = (
    <span
      className={cn(
        'flex flex-col leading-none',
        layout === 'stacked' && 'items-center',
      )}
    >
      <span
        className={cn(
          'font-serif font-semibold tracking-[0.14em]',
          layout === 'stacked' ? 'text-sm' : 'text-base',
          variant === 'light' ? 'text-forest-foreground' : 'text-gold',
        )}
      >
        THE GIFTED VILLAGE
      </span>
      <span
        className={cn(
          'font-medium tracking-[0.28em] uppercase',
          layout === 'stacked' ? 'mt-0.5 text-[0.55rem]' : 'mt-1 text-[0.7rem]',
          variant === 'light' ? 'text-forest-foreground/70' : 'text-lime',
        )}
      >
        Reimagining Education
      </span>
    </span>
  )

  if (layout === 'stacked') {
    return (
      <Link
        href="/"
        className={cn('inline-flex flex-col items-center gap-1', className)}
        aria-label="The Gifted Village home"
      >
        <span className="relative block h-10 w-10">
          <Image src="/images/logo-icon-v4.png" alt="" fill className="object-contain" />
        </span>
        {wordmark}
      </Link>
    )
  }

  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center gap-3', className)}
      aria-label="The Gifted Village home"
    >
      <span className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/20 ring-1 ring-gold/40">
        <Image
          src="/images/logo-icon-v4.png"
          alt=""
          fill
          className="object-contain p-1.5"
        />
      </span>
      {wordmark}
    </Link>
  )
}
