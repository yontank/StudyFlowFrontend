import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/course')({
  component: RouteComponent
})

function CourseInformationCard() {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle>Course information</CardTitle>
      </CardHeader>

      <CardContent>
        <div className='grid gap-4 py-4'>
          <div>
            <h4>Exams Added: {5}</h4>
            <h4>Materials Added: {3}</h4>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function RouteComponent() {
  return (
    <>
      <h1>Course Title</h1>
      <div className='flex justify-around gap-4'>
        <CourseInformationCard />

        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent className='flex w-fit flex-col gap-2'>
            <Button>View Exams</Button>
            <Button>View Materials</Button>
            <Button>Practice Exam</Button>
            <Button>Practice Topics</Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
