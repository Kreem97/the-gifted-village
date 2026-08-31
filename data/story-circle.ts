export type StoryVideo = {
  title: string
  url: string
  tags: string[]
  description?: string
}

// Add a new Story Circle video by pasting a YouTube link here — any format works
// (youtube.com/watch?v=..., youtu.be/..., or /shorts/...). Tags power the filter
// chips on the page, so keep them short and reuse existing ones where it makes sense.
//
// Example:
// {
//   title: 'The Story of the Sankofa Bird',
//   url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX',
//   tags: ['Read-Aloud', 'Identity', 'K-2'],
//   description: 'A read-aloud exploring the West African symbol of Sankofa.',
// },
export const storyCircleVideos: StoryVideo[] = []
