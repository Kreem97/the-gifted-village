import { cn } from '@/lib/utils'

export function PathwayIcon({
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
      role="img"
      aria-label={alt}
      className={cn(
        'block size-16 bg-forest transition-colors group-hover:bg-lime',
        className,
      )}
      style={{
        maskImage: `url(${image})`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskImage: `url(${image})`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
      }}
    />
  )
}
