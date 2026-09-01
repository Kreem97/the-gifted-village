import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ProgramIcon({
  icon: Icon,
  alt,
  className,
}: {
  icon: LucideIcon
  alt: string
  className?: string
}) {
  return (
    <span
      role="img"
      aria-label={alt}
      className={cn(
        'flex size-20 shrink-0 items-center justify-center rounded-full bg-forest text-cream ring-1 ring-forest/10',
        className,
      )}
    >
      <Icon className="h-1/2 w-1/2" strokeWidth={1.75} aria-hidden="true" />
    </span>
  )
}
