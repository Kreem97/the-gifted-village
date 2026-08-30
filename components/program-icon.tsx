import { School, BookOpen, Flower2, Users, ShoppingCart } from 'lucide-react'
import type { ProgramIcon as IconName } from '@/lib/programs'
import { cn } from '@/lib/utils'

const map = {
  school: School,
  book: BookOpen,
  flower: Flower2,
  users: Users,
  cart: ShoppingCart,
}

export function ProgramIcon({
  icon,
  className,
}: {
  icon: IconName
  className?: string
}) {
  const Icon = map[icon]
  return <Icon className={cn('size-8', className)} aria-hidden="true" />
}
