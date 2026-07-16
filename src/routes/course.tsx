import ExamList from '@/components/courses/ExamList'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { createFileRoute } from '@tanstack/react-router'
import { PlusIcon, TrashIcon } from 'lucide-react'
import { v4 } from 'uuid'

export const Route = createFileRoute('/course')({
  component: RouteComponent
})

function CourseInformationCard() {
  return (
    <Card className='min-w-72 flex-1 px-6'>
      <CardHeader>
        <CardTitle>Course information</CardTitle>
      </CardHeader>

      <CardContent>
        <div className='grid gap-4 py-4'>
          <div>
            <h4>Exams Added: {5}</h4>
            <h4>Materials Added: {3}</h4>
            <h4>Current Grade Average: {85}%</h4>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function MaterialItem() {
  return (
    <Card className='mt-6'>
      <CardHeader>
        <CardTitle>
          <div className='flex items-center justify-between'>
            <h4>Material Name</h4>
            <Button variant={'outline'} size={'icon'}>
              <TrashIcon />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
    </Card>
  )
}

function MaterialCard() {
  const cards = Array.from({ length: 3 }).map(() => <MaterialItem key={v4()} />)
  return (
    <Card className='min-w-72 flex-1'>
      <CardHeader>
        <CardTitle>
          <div className='flex justify-between'>
            <h4>Course Materials</h4>{' '}
            <Button variant={'ghost'} size={'icon'}>
              <PlusIcon />
            </Button>{' '}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>{cards}</CardContent>
    </Card>
  )
}

function RouteComponent() {
  return (
    <div>
      <h1 className='mb-6 text-center text-2xl font-bold'>Linear Algebra 1</h1>
      <div className='flex flex-wrap gap-4'>
        <CourseInformationCard />
        <MaterialCard />
        <Card className='w-fit'>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent className='flex w-fit flex-col gap-2'>
            <Button>View Exams</Button>
            <Button>View Materials</Button>
            <Button>Practice Exam</Button>
            <Button disabled>Practice Topics</Button>
          </CardContent>
        </Card>
      </div>
      <ExamList />
    </div>
  )
}
