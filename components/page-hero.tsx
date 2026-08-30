export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <section className="bg-forest text-forest-foreground">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
        {eyebrow && (
          <p className="mb-3 font-serif italic text-gold">{eyebrow}</p>
        )}
        <h1 className="text-balance font-serif text-4xl font-semibold leading-tight md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-forest-foreground/85">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
