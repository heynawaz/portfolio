import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Years of experience since December 2020 */
export function getYearsOfExperience(): number {
  const start = new Date(2020, 11, 1) // Dec 1, 2020
  const now = new Date()
  const diffMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())
  return Math.max(0, Math.floor(diffMonths / 12))
}
