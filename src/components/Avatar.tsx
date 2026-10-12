import type { Contact } from '../types/contact'
import { getInitials } from '../utils/format'

interface AvatarProps {
  contact: Contact
}

export function Avatar({ contact }: AvatarProps) {
  const className = contact.favorite ? 'avatar avatar--favorite' : 'avatar'
  const initials = getInitials(contact)
  return <div className={className}>{initials}</div>
}
