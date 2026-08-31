import type { Metadata } from 'next'
import { QuizFlow } from '@/components/quiz-flow'

export const metadata: Metadata = {
  title: 'Gifted Quiz | The Gifted Village',
  description:
    "Take the free 2-minute quiz to discover your child's gifted learning profile and how to best support their growth.",
}

export default function QuizPage() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <QuizFlow />
      </div>
    </section>
  )
}
