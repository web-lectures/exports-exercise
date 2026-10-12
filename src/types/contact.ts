export interface Address {
  street: string
  zip: string
  city: string
}

export interface Contact {
  id: number
  firstName: string
  lastName: string
  phone: string
  email: string
  address: Address
  favorite: boolean
}
