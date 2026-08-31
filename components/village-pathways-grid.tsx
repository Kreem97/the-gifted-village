import Link from 'next/link'
import { PathwayIcon } from '@/components/pathway-icon'
import { villagePathways } from '@/lib/village-pathways'

export function VillagePathwaysGrid() {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-5">
      {villagePathways.map((p) => (
        <li key={p.slug}>
          <Link
            href={p.href}
            className="group flex flex-col items-center text-center"
          >
            <span className="transition-transform group-hover:scale-105">
              <PathwayIcon image={p.image} alt={p.name} />
            </span>
            <span className="mt-4 font-serif text-lg font-semibold text-forest">
              {p.name}
            </span>
            <span className="mt-1 text-sm italic text-muted-foreground">
              {p.tag}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
