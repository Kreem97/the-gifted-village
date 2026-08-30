import Link from 'next/link'
import { ProgramIcon } from '@/components/program-icon'
import { programs } from '@/lib/programs'

export function PathwaysGrid() {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-5">
      {programs.map((p) => (
        <li key={p.slug}>
          <Link
            href={p.href}
            className="group flex flex-col items-center text-center"
          >
            <span className="flex size-20 items-center justify-center rounded-2xl bg-secondary text-forest ring-1 ring-forest/10 transition-colors group-hover:bg-forest group-hover:text-forest-foreground">
              <ProgramIcon icon={p.icon} className="size-9" />
            </span>
            <span className="mt-4 font-serif text-lg font-semibold text-forest">
              {p.name}
            </span>
            <span className="mt-1 text-sm italic text-muted-foreground">
              {p.tag}
            </span>
            {p.comingSoon && (
              <span className="mt-2 rounded-full bg-gold/25 px-3 py-0.5 text-xs font-semibold tracking-wide text-forest uppercase">
                Coming Soon
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
