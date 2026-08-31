import type { Metadata } from 'next'
import { ComingSoonProgram } from '@/components/coming-soon-program'

export const metadata: Metadata = {
  title: 'Growing Gifted Minds | The Gifted Village',
  description:
    'Workshops and parent support, empowering families with knowledge, strategies, and community.',
}

export default function GrowingGiftedMindsPage() {
  return (
    <ComingSoonProgram
      eyebrow="Parent Workshops & Support"
      title="Growing Gifted Minds"
      subtitle="Workshops & parent support. Empowering families with knowledge, strategies, and community — because it takes a village to nurture giftedness."
      bullets={[
        'Parent workshops and professional development',
        'Practical strategies to support your child at home',
        'A community that understands your family',
      ]}
    />
  )
}
