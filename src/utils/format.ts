import type { Contact } from '../types/contact'

export function getInitials(contact: Contact): string {
  const initials = `${contact.firstName[0]}${contact.lastName[0]}`
  const upperCased = initials.toUpperCase()
  return upperCased
}

// Formatiert '0791234567' als '079 123 45 67'
export function formatPhone(phone: string): string {
  const parts = [
    phone.slice(0, 3),
    phone.slice(3, 6),
    phone.slice(6, 8),
    phone.slice(8, 10),
  ]
  const formatted = parts.join(' ')
  return formatted
}
