export type FreeResource = {
  title: string
  description: string
  gradeLevel: string
  subject: string
  downloadUrl: string
}

// Add a new free Curriculum Garden resource here. downloadUrl can point to a file
// in /public (e.g. '/downloads/soil-scientists-lab.pdf') or an external link.
//
// Example:
// {
//   title: 'Soil Scientists Lab',
//   description: 'A hands-on pH and nutrient investigation for young scientists.',
//   gradeLevel: 'K-2',
//   subject: 'Science',
//   downloadUrl: '/downloads/soil-scientists-lab.pdf',
// },
export const freeResources: FreeResource[] = []
