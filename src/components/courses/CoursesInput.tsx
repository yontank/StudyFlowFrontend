import { Field, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'

export default function CourseAddForm() {
  return (
    <Field orientation='vertical'>
      <FieldLabel htmlFor='input-id' className='flex justify-center'>
        Course Search{' '}
      </FieldLabel>
      <Input id='input-id' type='search' placeholder='Type course name' />
    </Field>
  )
}
