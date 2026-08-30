import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'lime' | 'forest' | 'outline' | 'gold' | 'white'

const variants: Record<Variant, string> = {
  lime: 'bg-lime text-lime-foreground hover:bg-forest',
  forest: 'bg-forest text-forest-foreground hover:bg-lime hover:text-lime-foreground',
  gold: 'bg-gold text-forest hover:brightness-95',
  white: 'bg-background text-forest hover:bg-gold hover:text-forest',
  outline:
    'border border-forest text-forest hover:bg-forest hover:text-forest-foreground',
}

export function CtaButton({
  href,
  children,
  variant = 'lime',
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: Variant
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-7 py-3 text-center font-semibold transition-colors',
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  )
}
