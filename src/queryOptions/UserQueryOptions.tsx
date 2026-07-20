import { queryOptions } from '@tanstack/react-query'

interface UserType {
  id: string
  name: string
  email: string
}

export function getUserQueryOptions() {
  return queryOptions({
    queryKey: ['user'],
    queryFn: getUser
  })
}

// NOTE: Needs to be changed to JWT Later on when backend is built.
async function getUser(): Promise<UserType> {
  const data = await fetch('/v1/user')
  return await data.json()
}
