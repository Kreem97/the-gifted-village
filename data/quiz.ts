export type ProfileKey = 'advanced' | 'creative' | 'curious' | 'deep'

export type QuizOption = {
  letter: 'A' | 'B' | 'C' | 'D'
  label: string
  profile: ProfileKey
}

export type QuizQuestion = {
  question: string
  options: QuizOption[]
}

export const quizLanding = {
  eyebrow: 'Free 2-Minute Quiz',
  headline: 'Every Gifted Child Is Different.',
  subhead:
    "Your child may be an advanced thinker, a creative innovator, a deep feeler, or a hidden achiever. Take this free 2-minute quiz to discover your child's learning profile and how to best support their growth.",
  cta: 'Get Personalized Results',
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: 'When your child has free time, they are most likely to:',
    options: [
      { letter: 'A', label: 'Read, research, or learn about something independently', profile: 'advanced' },
      { letter: 'B', label: 'Create stories, art, music, or inventions', profile: 'creative' },
      { letter: 'C', label: 'Ask questions about how things work', profile: 'curious' },
      { letter: 'D', label: 'Focus intensely on one favorite topic', profile: 'deep' },
    ],
  },
  {
    question: 'Teachers often describe your child as:',
    options: [
      { letter: 'A', label: 'Advanced', profile: 'advanced' },
      { letter: 'B', label: 'Creative', profile: 'creative' },
      { letter: 'C', label: 'Curious', profile: 'curious' },
      { letter: 'D', label: 'Intense', profile: 'deep' },
    ],
  },
  {
    question: 'Your biggest concern is:',
    options: [
      { letter: 'A', label: "They aren't challenged enough", profile: 'advanced' },
      { letter: 'B', label: "Their creativity isn't being nurtured", profile: 'creative' },
      { letter: 'C', label: 'They ask questions nobody seems able to answer', profile: 'curious' },
      { letter: 'D', label: 'They feel misunderstood', profile: 'deep' },
    ],
  },
  {
    question: 'Your child gets most excited when:',
    options: [
      { letter: 'A', label: 'Solving difficult problems', profile: 'advanced' },
      { letter: 'B', label: 'Designing or creating something new', profile: 'creative' },
      { letter: 'C', label: 'Exploring new ideas', profile: 'curious' },
      { letter: 'D', label: 'Talking about a passion or interest', profile: 'deep' },
    ],
  },
  {
    question: 'At home your child often:',
    options: [
      { letter: 'A', label: 'Finishes work quickly', profile: 'advanced' },
      { letter: 'B', label: 'Thinks outside the box', profile: 'creative' },
      { letter: 'C', label: 'Wants detailed explanations', profile: 'curious' },
      { letter: 'D', label: 'Becomes deeply absorbed in interests', profile: 'deep' },
    ],
  },
  {
    question: 'Your child learns best through:',
    options: [
      { letter: 'A', label: 'Challenge', profile: 'advanced' },
      { letter: 'B', label: 'Creativity', profile: 'creative' },
      { letter: 'C', label: 'Exploration', profile: 'curious' },
      { letter: 'D', label: 'Passion', profile: 'deep' },
    ],
  },
  {
    question: 'If your child could choose a weekend activity:',
    options: [
      { letter: 'A', label: 'Academic competition', profile: 'advanced' },
      { letter: 'B', label: 'Art, building, or creating', profile: 'creative' },
      { letter: 'C', label: 'Museum, science center, or nature adventure', profile: 'curious' },
      { letter: 'D', label: 'Deep dive into a favorite hobby', profile: 'deep' },
    ],
  },
  {
    question: 'What best describes your child?',
    options: [
      { letter: 'A', label: 'High Achiever', profile: 'advanced' },
      { letter: 'B', label: 'Creative Explorer', profile: 'creative' },
      { letter: 'C', label: 'Curious Investigator', profile: 'curious' },
      { letter: 'D', label: 'Deep Thinker', profile: 'deep' },
    ],
  },
]

export type QuizProfile = {
  key: ProfileKey
  emoji: string
  title: string
  blurb: string
  needs: string[]
  programSlugs: string[]
}

// Order also sets tie-break priority when two profiles score equally.
export const quizProfiles: QuizProfile[] = [
  {
    key: 'advanced',
    emoji: '🚀',
    title: 'The Advanced Thinker',
    blurb: 'Your child thrives on challenge, complexity, and opportunities to go deeper.',
    needs: ['Advanced learning', 'Higher-level questioning', 'Intellectual peers'],
    programSlugs: ['learning-lodge'],
  },
  {
    key: 'creative',
    emoji: '🎨',
    title: 'The Creative Explorer',
    blurb: 'Your child sees possibilities others miss and loves innovation.',
    needs: ['Creativity', 'Flexibility', 'Opportunities to express ideas'],
    programSlugs: ['story-circle'],
  },
  {
    key: 'curious',
    emoji: '🔍',
    title: 'The Curious Investigator',
    blurb: 'Your child is driven by questions, discovery, and exploration.',
    needs: ['Inquiry', 'Hands-on learning', 'Real-world experiences'],
    programSlugs: ['curriculum-garden'],
  },
  {
    key: 'deep',
    emoji: '🔥',
    title: 'The Deep Thinker',
    blurb: 'Your child experiences ideas, emotions, and interests with intensity.',
    needs: ['Understanding', 'Challenge', 'Opportunities to connect deeply'],
    programSlugs: ['growing-gifted-minds', 'learning-lodge'],
  },
]

export const quizBonus = {
  title: 'Get Your Free Gifted Learner Starter Kit',
  includes: [
    'Personalized learning profile',
    'Hidden Strengths Discovery Sheet',
    'Age-based enrichment activities',
    'Parent guide',
    'Access to future workshops',
  ],
  cta: 'Send My Free Starter Kit',
}
