import type { Contact } from '../types/contact'

export function sortByLastName(list: Contact[]): Contact[] {
  const sorted = [...list].sort((a, b) => a.lastName.localeCompare(b.lastName))
  return sorted
}
