//NOTE: MATERIAL TYPES
export interface Materials {
  id: string
  filename: string
  pages: number
  createdAt: Date
}

//NOTE:  EXAMS TYPES
type Moed = 'A1' | 'A2' | 'B'

export interface Exams {
  id: string
  filename: string
  year: number
  moed: `${Moed}-${number}`
  createdAt: Date
}

// NOTE: SUBMISSION TYPES
type SubmissionStatus = 'Processing' | 'Uploaded'

export interface Submissions {
  examName: string
  id: string
  examYear: number
  score: number
  status: SubmissionStatus
  createdAt: Date
}

interface SubQuestion {
  id: string
  title: string
  content: string
}
type Questions = SubQuestion[]
export type SubmissionResult = Submissions & { questions: Questions[] }
