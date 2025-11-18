export interface GetCreditCardsResponse {
  id: number
  userId: number
  titularName: string
  number: string
  CVV: number
  expirationDate: Date
  createdAt: Date
  updatedAt: Date
  deletedAt: string
}
