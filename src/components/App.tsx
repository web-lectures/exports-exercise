import contacts from '../data/contacts'
import './App.css'
import { ContactList } from './ContactList'

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
