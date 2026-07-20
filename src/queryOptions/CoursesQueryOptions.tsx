import { queryOptions } from '@tanstack/react-query'

interface Courses {
  id: string
  name: string
  code: string
  semester: string
  examsCount: number
  materialsCount: number
  gradeAverage: number
}

export function getCoursesQueryOptions() {
  return queryOptions({
    queryKey: ['courses'],
    queryFn: getCourses
  })
}

// NOTE: Needs to be changed to JWT Later on when backend is built.
async function getCourses(): Promise<Courses[]> {
  const data = await fetch('/v1/courses')
  return await data.json()
}
