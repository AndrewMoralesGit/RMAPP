export type UserRole = "CREATOR" | "CONSUMER" | "ADMIN"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  image?: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  creatorId: string
  creator: User
  createdAt: Date
  updatedAt: Date
}

export interface Service {
  id: string
  name: string
  description: string
  price: number
  duration: number
  category: string
  creatorId: string
  creator: User
  createdAt: Date
  updatedAt: Date
}

