import './App.css'

// TODO: Types auslagern nach src/types/contact.ts
interface Address {
  street: string
  zip: string
  city: string
}

interface Contact {
  id: number
  firstName: string
  lastName: string
  phone: string
  email: string
  address: Address
  favorite: boolean
}

// TODO: Daten auslagern nach src/data/contacts.ts (als default export)
const contacts: Contact[] = [
  {
    id: 1,
    firstName: 'Lea',
    lastName: 'Meier',
    phone: '0791234567',
    email: 'lea.meier@example.ch',
    address: { street: 'Bahnhofstrasse 12', zip: '8001', city: 'Zürich' },
    favorite: true,
  },
  {
    id: 2,
    firstName: 'Noah',
    lastName: 'Keller',
    phone: '0769876543',
    email: 'noah.keller@example.ch',
    address: { street: 'Marktgasse 3', zip: '3011', city: 'Bern' },
    favorite: false,
  },
  {
    id: 3,
    firstName: 'Mia',
    lastName: 'Brunner',
    phone: '0784561230',
    email: 'mia.brunner@example.ch',
    address: { street: 'Rheinweg 7', zip: '4058', city: 'Basel' },
    favorite: false,
  },
  {
    id: 4,
    firstName: 'Luca',
    lastName: 'Huber',
    phone: '0793216549',
    email: 'luca.huber@example.ch',
    address: { street: 'Seeplatz 1', zip: '6005', city: 'Luzern' },
    favorite: true,
  },
  {
    id: 5,
    firstName: 'Elena',
    lastName: 'Schmid',
    phone: '0771472583',
    email: 'elena.schmid@example.ch',
    address: { street: 'Via Nassa 20', zip: '6900', city: 'Lugano' },
    favorite: false,
  },
  {
    id: 6,
    firstName: 'Jan',
    lastName: 'Frei',
    phone: '0753692581',
    email: 'jan.frei@example.ch',
    address: { street: 'Kornhausstrasse 5', zip: '9000', city: 'St. Gallen' },
    favorite: false,
  },
]

// TODO: Hilfsfunktionen auslagern nach src/utils/format.ts
function getInitials(contact: Contact): string {
  const initials = `${contact.firstName[0]}${contact.lastName[0]}`
  const upperCased = initials.toUpperCase()
  return upperCased
}

// Formatiert '0791234567' als '079 123 45 67'
function formatPhone(phone: string): string {
  const parts = [
    phone.slice(0, 3),
    phone.slice(3, 6),
    phone.slice(6, 8),
    phone.slice(8, 10),
  ]
  const formatted = parts.join(' ')
  return formatted
}

// TODO: Hilfsfunktion auslagern nach src/utils/sort.ts
function sortByLastName(list: Contact[]): Contact[] {
  const sorted = [...list].sort((a, b) => a.lastName.localeCompare(b.lastName))
  return sorted
}

// TODO: Komponente auslagern nach src/components/Avatar.tsx
interface AvatarProps {
  contact: Contact
}

function Avatar({ contact }: AvatarProps) {
  const className = contact.favorite ? 'avatar avatar--favorite' : 'avatar'
  const initials = getInitials(contact)
  return <div className={className}>{initials}</div>
}

// TODO: Komponente auslagern nach src/components/ContactCard.tsx
interface ContactCardProps {
  contact: Contact
}

function ContactCard({ contact }: ContactCardProps) {
  const { firstName, lastName, phone, email, address } = contact
  const phoneLabel = formatPhone(phone)
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

// TODO: Komponente auslagern nach src/components/ContactList.tsx
interface ContactListProps {
  contacts: Contact[]
}

function ContactList({ contacts }: ContactListProps) {
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

export function App() {
  const favoriteCount = contacts.filter((contact) => contact.favorite).length
  return (
    <main className="layout">
      <h1>Kontakte</h1>
      <p>
        {contacts.length} Kontakte, davon {favoriteCount} Favoriten
      </p>
      <ContactList contacts={contacts} />
    </main>
  )
}
