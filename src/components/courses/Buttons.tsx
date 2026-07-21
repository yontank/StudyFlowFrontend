import { PlusCircle } from 'lucide-react'
import { Button } from '../ui/button'
import type { ComponentProps } from 'react'
import { useNavigate } from '@tanstack/react-router'

export function CreateCourseButton(props: ComponentProps<typeof Button>) {
  return (
    <Button {...props} className='flex h-20 w-40 cursor-pointer items-center justify-center gap-2' variant='outline'>
      <PlusCircle className='inline size-4' /> Add Course
    </Button>
  )
}

interface CoursesInfoProps {
  title: string
  code: string
  id: string
}

export function CoursesInfoLink({ title, code, id }: Readonly<CoursesInfoProps>) {
  const navigate = useNavigate()
  return (
    <Button
      onClick={() => navigate({ to: `/courses/${id}` })}
      className='flex h-20 w-40 cursor-pointer flex-col items-start justify-center gap-2'
      variant='outline'
    >
      <h3>{title}</h3>
      <p>{code}</p>
    </Button>
  )
}
