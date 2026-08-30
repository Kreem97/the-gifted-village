export type Choice = 'A' | 'B' | 'C' | 'D'

export type Question = {
  id: number
  prompt: string
  options: { key: Choice; label: string }[]
}

export const questions: Question[] = [
  {
    id: 1,
    prompt: 'How does your child approach learning?',
    options: [
      { key: 'A', label: 'Quickly grasps concepts and moves on' },
      { key: 'B', label: 'Asks lots of “why” and “what if” questions' },
      { key: 'C', label: 'Prefers creative or hands-on exploration' },
      { key: 'D', label: 'Gets bored or disengaged easily' },
    ],
  },
  {
    id: 2,
    prompt: 'When given a task, your child…',
    options: [
      { key: 'A', label: 'Finishes early and wants more' },
      { key: 'B', label: 'Adds their own ideas or twists' },
      { key: 'C', label: 'Focuses deeply on topics they love' },
      { key: 'D', label: 'Struggles if not interested' },
    ],
  },
  {
    id: 3,
    prompt: 'Your child’s curiosity is best described as:',
    options: [
      { key: 'A', label: 'Constant and wide-ranging' },
      { key: 'B', label: 'Deep and focused on specific interests' },
      { key: 'C', label: 'Imaginative and creative' },
      { key: 'D', label: 'Inconsistent depending on the topic' },
    ],
  },
  {
    id: 4,
    prompt: 'How does your child interact socially?',
    options: [
      { key: 'A', label: 'Prefers older peers or adults' },
      { key: 'B', label: 'Leads or directs group activities' },
      { key: 'C', label: 'Observes before engaging' },
      { key: 'D', label: 'Feels misunderstood or different' },
    ],
  },
  {
    id: 5,
    prompt: 'When challenged, your child…',
    options: [
      { key: 'A', label: 'Thrives and wants more' },
      { key: 'B', label: 'Becomes frustrated if it’s not perfect' },
      { key: 'C', label: 'Tries unique or unconventional solutions' },
      { key: 'D', label: 'Avoids or shuts down' },
    ],
  },
  {
    id: 6,
    prompt: 'Your child’s interests are:',
    options: [
      { key: 'A', label: 'Advanced for their age' },
      { key: 'B', label: 'Intense and specific' },
      { key: 'C', label: 'Creative and expressive' },
      { key: 'D', label: 'Changing frequently' },
    ],
  },
  {
    id: 7,
    prompt: 'How does your child express themselves?',
    options: [
      { key: 'A', label: 'Through strong vocabulary or ideas' },
      { key: 'B', label: 'Through storytelling or imagination' },
      { key: 'C', label: 'Through art, movement, or building' },
      { key: 'D', label: 'Through questions or debate' },
    ],
  },
  {
    id: 8,
    prompt: 'In school, your child is most likely:',
    options: [
      { key: 'A', label: 'Under-challenged' },
      { key: 'B', label: 'Misunderstood' },
      { key: 'C', label: 'Highly creative but not always recognized' },
      { key: 'D', label: 'Performing well but not fully engaged' },
    ],
  },
  {
    id: 9,
    prompt: 'Your biggest concern is:',
    options: [
      { key: 'A', label: 'They aren’t being challenged enough' },
      { key: 'B', label: 'Their needs aren’t understood' },
      { key: 'C', label: 'Their creativity isn’t nurtured' },
      { key: 'D', label: 'They are losing interest in learning' },
    ],
  },
  {
    id: 10,
    prompt: 'What do you want most for your child?',
    options: [
      { key: 'A', label: 'Advanced academic growth' },
      { key: 'B', label: 'Confidence and belonging' },
      { key: 'C', label: 'Creative expression and exploration' },
      { key: 'D', label: 'Engagement and motivation' },
    ],
  },
]

export type Profile = {
  key: Choice
  name: string
  traits: string
  needs: string
  recommendations: { label: string; href: string }[]
}

export const profiles: Record<Choice, Profile> = {
  A: {
    key: 'A',
    name: 'The Advanced Thinker',
    traits: 'Fast learner, needs challenge, craves depth.',
    needs: 'Acceleration, critical thinking, and advanced content.',
    recommendations: [
      { label: 'Learning Lodge (Online Classes)', href: '/programs/learning-lodge' },
      { label: 'Curriculum Garden (Advanced Resources)', href: '/programs/curriculum-garden' },
    ],
  },
  B: {
    key: 'B',
    name: 'The Intense & Complex Learner',
    traits: 'Deep thinker, emotionally aware, perfectionist.',
    needs: 'Support, understanding, and safe challenge.',
    recommendations: [
      { label: 'Story Circle + Community Workshops', href: '/programs/story-circle' },
      { label: 'Community Partners (Parent Support)', href: '/programs/community-partners' },
    ],
  },
  C: {
    key: 'C',
    name: 'The Creative Explorer',
    traits: 'Imaginative, expressive, full of big ideas.',
    needs: 'Creative outlets paired with structured challenge.',
    recommendations: [
      { label: 'Story Circle', href: '/programs/story-circle' },
      { label: 'Village Market (Creative Tools)', href: '/programs/village-market' },
    ],
  },
  D: {
    key: 'D',
    name: 'The Under-Challenged Achiever',
    traits: 'Capable but bored, disengaged, and unmotivated.',
    needs: 'Engagement, relevance, and stimulation.',
    recommendations: [
      { label: 'Learning Lodge', href: '/programs/learning-lodge' },
      { label: 'Hands-on Workshops', href: '/programs/story-circle' },
    ],
  },
}

export function scoreProfile(answers: Choice[]): Profile {
  const counts: Record<Choice, number> = { A: 0, B: 0, C: 0, D: 0 }
  for (const a of answers) counts[a]++
  const winner = (Object.keys(counts) as Choice[]).reduce((best, key) =>
    counts[key] > counts[best] ? key : best,
  )
  return profiles[winner]
}
