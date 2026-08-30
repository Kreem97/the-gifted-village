'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export function EmailSignup({
  className,
  buttonLabel = 'Join the Village',
}: {
  className?: string
  buttonLabel?: string
}) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
  }

  if (done) {
    return (
      <div
        className={cn(
          'flex items-center gap-3 rounded-full bg-lime/15 px-6 py-4 text-forest',
          className,
        )}
      >
        <Check className="size-5 shrink-0 text-lime" />
        <p className="font-medium">
          You&apos;re in! Look out for a warm welcome in your inbox.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={submit}
      className={cn('flex flex-col gap-3 sm:flex-row', className)}
    >
      <label htmlFor="email-signup" className="sr-only">
        Email address
      </label>
      <input
        id="email-signup"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full flex-1 rounded-full border border-border bg-background px-6 py-3 text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-lime"
      />
      <button
        type="submit"
        className="rounded-full bg-forest px-7 py-3 font-semibold text-forest-foreground transition-colors hover:bg-lime hover:text-lime-foreground"
      >
        {buttonLabel}
      </button>
    </form>
  )
}
