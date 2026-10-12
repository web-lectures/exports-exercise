import type { Contact } from '../types/contact'
import * as format from '../utils/format'
import { Avatar } from './Avatar'

interface ContactCardProps {
  contact: Contact
}

export function ContactCard({ contact }: ContactCardProps) {
  const { firstName, lastName, phone, email, address } = contact
  const phoneLabel = format.formatPhone(phone)
  return (
    <article className="contact-card">
      <Avatar contact={contact} />
      <div>
        <h2>
          {firstName} {lastName}
        </h2>
        <p>
          <a href={`tel:${phone}`}>{phoneLabel}</a> ·{' '}
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          {address.street}, {address.zip} {address.city}
        </p>
      </div>
    </article>
  )
}
