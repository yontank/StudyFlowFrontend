import { PlusCircle } from 'lucide-react'
import { Button } from '../ui/button'
import type { ComponentProps } from 'react'

export function CreateCourseButton(props: ComponentProps<typeof Button>) {
  return (
    <Button {...props} className='flex h-20 w-40 cursor-pointer items-center justify-center gap-2' variant='outline'>
      <PlusCircle className='inline size-4' /> Add Course
    </Button>
  )
}

export function CoursesInfoLink() {
  return (
    <Button className='flex h-20 w-40 cursor-pointer flex-col items-start justify-center gap-2' variant='outline'>
      <h3> asdsadasd</h3>
      <p>20213</p>
    </Button>
  )
}
