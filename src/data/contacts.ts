import type { Contact } from '../types/contact'

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

export default contacts
