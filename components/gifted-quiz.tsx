'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Check, RotateCcw } from 'lucide-react'
import {
  questions,
  scoreProfile,
  type Choice,
  type Profile,
} from '@/lib/quiz'
import { cn } from '@/lib/utils'
import { CtaButton } from '@/components/cta-button'

type Stage = 'intro' | 'quiz' | 'gate' | 'results'

export function GiftedQuiz() {
  const [stage, setStage] = useState<Stage>('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<(Choice | null)[]>(
    Array(questions.length).fill(null),
  )
  const [email, setEmail] = useState('')
  const [result, setResult] = useState<Profile | null>(null)

  const total = questions.length
  const answered = answers.filter(Boolean).length
  const progress = Math.round((answered / total) * 100)

  const select = (choice: Choice) => {
    const next = [...answers]
    next[current] = choice
    setAnswers(next)
    setTimeout(() => {
      if (current < total - 1) setCurrent((c) => c + 1)
      else setStage('gate')
    }, 220)
  }

  const showResults = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setResult(scoreProfile(answers.filter(Boolean) as Choice[]))
    setStage('results')
  }

  const restart = () => {
    setStage('intro')
    setCurrent(0)
    setAnswers(Array(total).fill(null))
    setEmail('')
    setResult(null)
  }

  /* Intro */
  if (stage === 'intro') {
    return (
      <Shell>
        <p className="font-serif italic text-lime">
          So You Think Your Child is Gifted?
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-forest md:text-4xl">
          Let&apos;s Find Out.
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Take this quick 2-minute quiz to discover your child&apos;s learning
          profile&mdash;and how to best support their brilliance.
        </p>
        <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left">
          {[
            'Finishes work quickly but still seems bored',
            'Asks deep or unexpected questions',
            'Highly creative, sensitive, or intense',
            'Needs more challenge—or a different kind of learning',
          ].map((b) => (
            <li key={b} className="flex items-start gap-3">
              <Check className="mt-1 size-5 shrink-0 text-lime" />
              <span className="text-foreground/90">{b}</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setStage('quiz')}
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-lime px-8 py-3.5 font-semibold text-lime-foreground transition-colors hover:bg-forest hover:text-forest-foreground"
        >
          Take the Free Quiz
          <ArrowRight className="size-5" />
        </button>
      </Shell>
    )
  }

  /* Quiz */
  if (stage === 'quiz') {
    const q = questions[current]
    return (
      <Shell align="left">
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
            <span>
              Question {current + 1} of {total}
            </span>
            <span>{progress}%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-lime transition-all duration-300"
              style={{ width: `${((current + 1) / total) * 100}%` }}
            />
          </div>
        </div>

        <h2 className="font-serif text-2xl font-semibold text-forest">
          {q.prompt}
        </h2>

        <div className="mt-6 flex flex-col gap-3">
          {q.options.map((opt) => {
            const active = answers[current] === opt.key
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => select(opt.key)}
                className={cn(
                  'flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition-colors',
                  active
                    ? 'border-lime bg-lime/10'
                    : 'border-border bg-background hover:border-lime/60 hover:bg-secondary',
                )}
              >
                <span
                  className={cn(
                    'flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold',
                    active
                      ? 'bg-lime text-lime-foreground'
                      : 'bg-secondary text-forest',
                  )}
                >
                  {opt.key}
                </span>
                <span className="text-foreground/90">{opt.label}</span>
              </button>
            )
          })}
        </div>

        {current > 0 && (
          <button
            type="button"
            onClick={() => setCurrent((c) => c - 1)}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-forest"
          >
            <ArrowLeft className="size-4" />
            Previous
          </button>
        )}
      </Shell>
    )
  }

  /* Email gate */
  if (stage === 'gate') {
    return (
      <Shell>
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-lime/15 text-lime">
          <Check className="size-8" />
        </div>
        <h2 className="mt-6 font-serif text-3xl font-semibold text-forest">
          Enter Your Email to See Your Child&apos;s Results
        </h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Get your child&apos;s personalized learning profile plus recommended
          next steps.
        </p>
        <ul className="mx-auto mt-6 flex max-w-sm flex-col gap-2 text-left">
          {[
            'A free activity to spark your child’s thinking',
            'Parent tips for supporting gifted learners',
            'Early access to programs',
          ].map((b) => (
            <li key={b} className="flex items-start gap-3">
              <Check className="mt-1 size-4 shrink-0 text-lime" />
              <span className="text-sm text-foreground/90">{b}</span>
            </li>
          ))}
        </ul>
        <form
          onSubmit={showResults}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="quiz-email" className="sr-only">
            Email address
          </label>
          <input
            id="quiz-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full flex-1 rounded-full border border-border bg-background px-6 py-3 outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-lime"
          />
          <button
            type="submit"
            className="rounded-full bg-lime px-7 py-3 font-semibold text-lime-foreground transition-colors hover:bg-forest hover:text-forest-foreground"
          >
            Show My Results
          </button>
        </form>
      </Shell>
    )
  }

  /* Results */
  if (stage === 'results' && result) {
    return (
      <Shell align="left">
        <p className="font-serif italic text-lime">Your child&apos;s profile</p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-forest md:text-4xl">
          {result.name}
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-secondary p-5">
            <p className="text-sm font-semibold tracking-wide text-lime uppercase">
              Traits
            </p>
            <p className="mt-1 text-foreground/90">{result.traits}</p>
          </div>
          <div className="rounded-xl bg-secondary p-5">
            <p className="text-sm font-semibold tracking-wide text-lime uppercase">
              What they need
            </p>
            <p className="mt-1 text-foreground/90">{result.needs}</p>
          </div>
        </div>

        <h3 className="mt-8 font-serif text-xl font-semibold text-forest">
          Recommended next steps
        </h3>
        <div className="mt-4 flex flex-col gap-3">
          {result.recommendations.map((rec) => (
            <Link
              key={rec.label}
              href={rec.href}
              className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 font-medium text-forest transition-colors hover:border-lime hover:bg-secondary"
            >
              {rec.label}
              <ArrowRight className="size-4" />
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row">
          <CtaButton href="/contact" variant="lime">
            Join The Village
          </CtaButton>
          <button
            type="button"
            onClick={restart}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-forest px-7 py-3 font-semibold text-forest transition-colors hover:bg-forest hover:text-forest-foreground"
          >
            <RotateCcw className="size-4" />
            Retake Quiz
          </button>
        </div>
        <p className="mt-8 text-center font-serif italic text-muted-foreground">
          It takes a village to grow a gifted mind.
        </p>
      </Shell>
    )
  }

  return null
}

function Shell({
  children,
  align = 'center',
}: {
  children: React.ReactNode
  align?: 'center' | 'left'
}) {
  return (
    <div
      className={cn(
        'mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 shadow-sm md:p-12',
        align === 'center' ? 'text-center' : 'text-left',
      )}
    >
      {children}
    </div>
  )
}
