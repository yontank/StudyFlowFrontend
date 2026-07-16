import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// zod utility function to check if a string value is all numbers
export function digitsOnly<T extends string>(v: T): boolean {
  const n = Number(v)
  return !isNaN(n) && v?.length > 0 && n > 0
}
