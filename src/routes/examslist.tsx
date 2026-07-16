import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className='flex w-full flex-col gap-2'>
      <div className='flex items-center justify-between gap-4 px-4'>
        <h4 className='text-sm font-semibold'>2026</h4>
        <CollapsibleTrigger asChild>
          <Button variant='ghost' size='icon' className='size-8'>
            <ChevronsUpDown />
            <span className='sr-only'>Toggle details</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <div className='flex items-center justify-between rounded-md border px-4 py-2 text-sm'>
        <span className='text-muted-foreground'>Total exams</span>
        <span className='font-medium'>5</span>
      </div>

      <CollapsibleContent className='flex flex-col gap-2'>
        <div className='rounded-md border px-4 py-2 text-sm'>
          <p className='font-medium'>Exam 1</p>
          <p className='text-muted-foreground'>Description for Exam 1</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export const Route = createFileRoute('/examslist')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className='mt-12 flex flex-col items-center gap-4'>
      <h1>Exams List for {'Course name'}</h1>
      <CollapsibleDemo />
    </div>
  )
}
