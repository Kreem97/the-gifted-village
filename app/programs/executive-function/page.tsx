import type { Metadata } from 'next'
import { ComingSoonProgram } from '@/components/coming-soon-program'

export const metadata: Metadata = {
  title: 'Executive Function | The Gifted Village',
  description:
    'Practical strategies that build focus, organization, and self-advocacy.',
}

export default function ExecutiveFunctionPage() {
  return (
    <ComingSoonProgram
      eyebrow="Skills for Success"
      title="Executive Function"
      subtitle="Skills for success. Tools for life. Practical strategies that build focus, organization, and self-advocacy."
      bullets={[
        'Focus and attention strategies',
        'Organization and planning systems',
        'Self-advocacy skills for gifted learners',
      ]}
    />
  )
}
