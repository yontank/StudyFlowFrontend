import { createFileRoute } from '@tanstack/react-router'
import CourseInput from '@/components/courses/CoursesInput'
import { CreateCourseButton, CoursesInfoLink } from '@/components/courses/Buttons'

export const Route = createFileRoute('/courses')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div>
      <CourseInput />
      <div className='mt-6 grid w-4/5 grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]'>
        <CreateCourseButton />
        <CoursesInfoLink />
      </div>
    </div>
  )
}
