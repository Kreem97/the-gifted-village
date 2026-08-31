import Image from 'next/image'
import { cn } from '@/lib/utils'

export function ProgramIcon({
  image,
  alt,
  className,
}: {
  image: string
  alt: string
  className?: string
}) {
  return (
    <span
      className={cn(
        'relative block size-20 shrink-0 overflow-hidden rounded-full ring-1 ring-forest/10',
        className,
      )}
    >
      <Image src={image} alt={alt} fill sizes="80px" className="object-cover" />
    </span>
  )
}
