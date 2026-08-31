import type { Metadata } from 'next'
import { ComingSoonProgram } from '@/components/coming-soon-program'

export const metadata: Metadata = {
  title: 'Community Partners | The Gifted Village',
  description:
    'Workshops, professional development, and collaborative programming for schools and organizations.',
}

export default function CommunityPartnersPage() {
  return (
    <ComingSoonProgram
      eyebrow="Services"
      title="Community Partners"
      subtitle="It takes a village to nurture giftedness. Workshops, PD, and collaborative programming for schools and organizations."
      bullets={[
        'Partnerships with schools, districts, and nonprofits',
        'Professional development and staff workshops',
        'Collaborative enrichment, arts, and STEAM programming',
      ]}
    />
  )
}
