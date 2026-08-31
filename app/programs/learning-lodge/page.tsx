import type { Metadata } from 'next'
import { ComingSoonProgram } from '@/components/coming-soon-program'

export const metadata: Metadata = {
  title: 'Learning Lodge | The Gifted Village',
  description:
    'Structured, engaging virtual classes that stretch thinking and deepen understanding.',
}

export default function LearningLodgePage() {
  return (
    <ComingSoonProgram
      eyebrow="Online Classes"
      title="Learning Lodge"
      subtitle="Enrichment classes and academic adventures that go beyond the classroom — structured, engaging virtual classes that stretch thinking and deepen understanding."
      bullets={[
        'Age bands: K–2, 3–5, 6–8, and Teens',
        'Focus areas in STEAM, literacy, identity, and leadership',
        'Clear outcomes, not grades or competition',
      ]}
    />
  )
}
