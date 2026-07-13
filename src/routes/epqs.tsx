import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'

export const Route = createFileRoute('/epqs')({
  component: RouteComponent
})

export function PaginationSimple() {
  return (
    <Pagination className='w-fit px-6'>
      <PaginationContent className='flex flex-col'>
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>5</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

function RouteComponent() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex w-4/5 items-center justify-between gap-2'>
        {/* Solution  */}
        <Button variant='destructive'>End exam</Button>
        <Button>Submit</Button>
      </div>

      {/* Question */}
      <div className='flex w-4/5 justify-around'>
        <div className='w-full'>
          <Card className='mb-4'>
            <CardHeader>
              <CardTitle>Question</CardTitle>
              <CardDescription>Question Description</CardDescription>
            </CardHeader>
            <CardContent>Question content</CardContent>
            <CardFooter>
              <Textarea placeholder='Type your answer here...' />
            </CardFooter>
          </Card>{' '}
          <Card className='w-full'>
            <CardHeader>
              <CardTitle>Question</CardTitle>
              <CardDescription>Question Description</CardDescription>
            </CardHeader>
            <CardContent>Question content</CardContent>
            <CardFooter>
              <Textarea placeholder='Type your answer here...' />
            </CardFooter>
          </Card>
        </div>

        <PaginationSimple />
      </div>
    </div>
  )
}
