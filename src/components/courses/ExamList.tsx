import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

function ExamItem() {
  return (
    <Card className='mb-4'>
      <CardHeader>
        <CardTitle>Exam 1</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex items-center justify-between'>
          <h4>Exam Score: {85}%</h4>
          <Button>Review Exam</Button>
        </div>
      </CardContent>
    </Card>
  )
}

function ExamList() {
  const cards = Array.from({ length: 5 }, (_, index) => <ExamItem key={index} />)
  return (
    <Card className='mt-6'>
      <CardHeader>
        <CardTitle>Exams taken information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='max-h-120 overflow-x-hidden overflow-y-scroll pr-2'>{cards}</div>
      </CardContent>
    </Card>
  )
}

export default ExamList
