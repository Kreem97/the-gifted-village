import type { Metadata } from 'next'
import { GiftedQuiz } from '@/components/gifted-quiz'

export const metadata: Metadata = {
  title: 'Is Your Child Gifted? Take the Quiz | The Gifted Village',
  description:
    'Take our free 2-minute quiz to discover your child’s learning profile and the best next step in The Gifted Village.',
}

export default function QuizPage() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <GiftedQuiz />
      </div>
    </section>
  )
}
