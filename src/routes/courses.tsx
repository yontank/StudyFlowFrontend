import { createFileRoute } from '@tanstack/react-router'
import CourseInput from '@/components/courses/CoursesInput'
import { CreateCourseButton, CoursesInfoLink } from '@/components/courses/Buttons'
import DialogButton from '@/components/shared/ButtonDialog'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { digitsOnly } from '@/lib/utils'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getCoursesQueryOptions } from '@/queryOptions/CoursesQueryOptions'
import { v4 } from 'uuid'
export const Route = createFileRoute('/courses')({
  component: RouteComponent
})

const schema = z.object({
  name: z
    .string()
    .min(5, 'Course title must be at least 5 characters.')
    .max(32, 'Course title must be at most 32 characters.'),

  code: z.string().refine((v) => digitsOnly(v), { error: 'invalid number' })
})

function AddCourseForm() {
  const { control } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      code: '',
      name: ''
    }
  })

  return (
    <form className='flex flex-col'>
      <h1 className='text-center text-xl font-bold'>Add a course</h1>
      <Controller
        name='name'
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid} className='my-6'>
            <FieldLabel htmlFor={field.name}>Course name</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder='Linear algebra 1'
              autoComplete='off'
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name='code'
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid} className='mb-6'>
            <FieldLabel htmlFor={field.name}>Course code</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder='22142'
              autoComplete='off'
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Button type='submit'>Submit</Button>
    </form>
  )
}

function RouteComponent() {
  const { data } = useSuspenseQuery(getCoursesQueryOptions())

  const cards = data.map((e) => <CoursesInfoLink id={e.id} title={e.name} code={e.code} key={v4()} />)
  return (
    <div>
      <CourseInput />
      <div className='mt-6 grid w-4/5 grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]'>
        <DialogButton trigger={<CreateCourseButton />}>
          <AddCourseForm />
        </DialogButton>
        {cards}
      </div>
    </div>
  )
}
