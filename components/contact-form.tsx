'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

const roles = ['Parent / Family', 'Educator', 'School / Organization', 'Community Partner']
const interests = [
  'Learning Lodge',
  'Story Circle',
  'Curriculum Garden',
  'Community Partners',
  'Agri-STEAM',
  'Just saying hello',
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-lime/15 text-lime">
          <Check className="size-8" />
        </span>
        <h2 className="mt-6 font-serif text-2xl font-semibold text-forest">
          Welcome to the village!
        </h2>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Thank you for reaching out. We&apos;ll be in touch within 1–2 business
          days.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" htmlFor="firstName">
          <input id="firstName" name="firstName" required className={inputCls} />
        </Field>
        <Field label="Last name" htmlFor="lastName">
          <input id="lastName" name="lastName" required className={inputCls} />
        </Field>
      </div>

      <Field label="Email" htmlFor="email">
        <input id="email" name="email" type="email" required className={inputCls} />
      </Field>

      <Field label="I am a..." htmlFor="role">
        <select id="role" name="role" required className={inputCls} defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </Field>

      <Field label="I'm interested in" htmlFor="interest">
        <select id="interest" name="interest" className={inputCls} defaultValue="">
          <option value="" disabled>
            Select a pathway
          </option>
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about your learner" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputCls} resize-none`}
          placeholder="What sparks their curiosity? What are you hoping for?"
        />
      </Field>

      <button
        type="submit"
        className="mt-1 rounded-full bg-lime px-7 py-3 font-semibold text-lime-foreground transition-colors hover:bg-forest hover:text-forest-foreground"
      >
        Join The Village
      </button>
    </form>
  )
}

const inputCls =
  'w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-lime focus-visible:ring-2 focus-visible:ring-lime/40'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-forest">
        {label}
      </label>
      {children}
    </div>
  )
}
