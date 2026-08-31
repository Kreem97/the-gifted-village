'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check, RotateCcw } from 'lucide-react'
import {
  quizLanding,
  quizQuestions,
  quizProfiles,
  quizBonus,
  type ProfileKey,
} from '@/data/quiz'
import { getProgram } from '@/lib/programs'
import { CtaButton } from '@/components/cta-button'
import { cn } from '@/lib/utils'

type Stage = 'landing' | number | 'gate' | 'result'

function computeProfile(answers: (ProfileKey | undefined)[]) {
  const tally: Record<ProfileKey, number> = {
    advanced: 0,
    creative: 0,
    curious: 0,
    deep: 0,
  }
  for (const a of answers) {
    if (a) tally[a] += 1
  }
  return quizProfiles.reduce((winner, profile) =>
    tally[profile.key] > tally[winner.key] ? profile : winner,
  )
}

export function QuizFlow() {
  const [stage, setStage] = useState<Stage>('landing')
  const [answers, setAnswers] = useState<(ProfileKey | undefined)[]>(
    Array(quizQuestions.length).fill(undefined),
  )
  const [email, setEmail] = useState('')

  const selectOption = (index: number, profile: ProfileKey) => {
    const next = [...answers]
    next[index] = profile
    setAnswers(next)
    if (index === quizQuestions.length - 1) {
      setStage('gate')
    } else {
      setStage(index + 1)
    }
  }

  const unlockResults = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStage('result')
  }

  const retake = () => {
    setAnswers(Array(quizQuestions.length).fill(undefined))
    setEmail('')
    setStage('landing')
  }

  if (stage === 'landing') {
    return (
      <Shell>
        <p className="font-serif italic text-gold">{quizLanding.eyebrow}</p>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-forest md:text-4xl">
          {quizLanding.headline}
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          {quizLanding.subhead}
        </p>
        <button
          type="button"
          onClick={() => setStage(0)}
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-lime px-8 py-3.5 font-semibold text-lime-foreground transition-colors hover:bg-forest hover:text-forest-foreground"
        >
          {quizLanding.cta}
          <ArrowRight className="size-5" />
        </button>
      </Shell>
    )
  }

  if (stage === 'gate') {
    return (
      <Shell>
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-lime/15 text-lime">
          <Check className="size-8" />
        </div>
        <h2 className="mt-6 font-serif text-3xl font-semibold text-forest">
          {quizBonus.title}
        </h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Enter your email to see your child&apos;s personalized learning
          profile and get:
        </p>
        <ul className="mx-auto mt-6 flex max-w-sm flex-col gap-2 text-left">
          {quizBonus.includes.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="mt-1 size-4 shrink-0 text-lime" />
              <span className="text-sm text-foreground/90">{item}</span>
            </li>
          ))}
        </ul>
        <form
          onSubmit={unlockResults}
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

  if (stage === 'result') {
    const profile = computeProfile(answers)
    return (
      <Shell align="left">
        <p className="text-center font-serif italic text-gold">
          Your child&apos;s learning profile
        </p>
        <p className="mt-3 text-center text-5xl">{profile.emoji}</p>
        <h2 className="mt-2 text-center font-serif text-3xl font-semibold text-forest md:text-4xl">
          {profile.title}
        </h2>
        <p className="mt-3 text-center leading-relaxed text-foreground/90">
          {profile.blurb}
        </p>

        <p className="mt-8 text-center text-sm font-semibold uppercase tracking-wide text-forest/70">
          They Need
        </p>
        <ul className="mt-2 flex flex-wrap justify-center gap-2">
          {profile.needs.map((need) => (
            <li
              key={need}
              className="rounded-full bg-secondary px-4 py-1.5 text-sm text-forest ring-1 ring-forest/10"
            >
              {need}
            </li>
          ))}
        </ul>

        <h3 className="mt-8 text-center font-serif text-xl font-semibold text-forest">
          Recommended next steps
        </h3>
        <div className="mx-auto mt-4 flex max-w-md flex-col gap-3">
          {profile.programSlugs.map((slug) => {
            const program = getProgram(slug)
            if (!program) return null
            return (
              <a
                key={slug}
                href={program.href}
                className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 font-medium text-forest transition-colors hover:border-lime hover:bg-secondary"
              >
                {program.name}
                <ArrowRight className="size-4" />
              </a>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col flex-wrap justify-center gap-3 sm:flex-row">
          <CtaButton href="/contact" variant="lime">
            Join The Village
          </CtaButton>
          <button
            type="button"
            onClick={retake}
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

  const index = stage
  const current = quizQuestions[index]

  return (
    <Shell align="left">
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
          <span>
            Question {index + 1} of {quizQuestions.length}
          </span>
          {index > 0 && (
            <button
              type="button"
              onClick={() => setStage(index - 1)}
              className="inline-flex items-center gap-1 hover:text-forest"
            >
              <ArrowLeft className="size-3.5" />
              Back
            </button>
          )}
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-lime transition-all duration-300"
            style={{ width: `${((index + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="font-serif text-2xl font-semibold text-forest">
        {current.question}
      </h2>

      <div className="mt-6 flex flex-col gap-3">
        {current.options.map((option) => {
          const active = answers[index] === option.profile
          return (
            <button
              key={option.letter}
              type="button"
              onClick={() => selectOption(index, option.profile)}
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
                  active ? 'bg-lime text-lime-foreground' : 'bg-secondary text-forest',
                )}
              >
                {option.letter}
              </span>
              <span className="text-foreground/90">{option.label}</span>
            </button>
          )
        })}
      </div>
    </Shell>
  )
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
