import type { Contact } from '../types/contact'
import { sortByLastName } from '../utils/sort'
import { ContactCard } from './ContactCard'

interface ContactListProps {
  contacts: Contact[]
}

export function ContactList({ contacts }: ContactListProps) {
  const sorted = sortByLastName(contacts)
  return (
    <ul className="contact-list">
      {sorted.map((contact) => (
        <li key={contact.id}>
          <ContactCard contact={contact} />
        </li>
      ))}
    </ul>
  )
}
