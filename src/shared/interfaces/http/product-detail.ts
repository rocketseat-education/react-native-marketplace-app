export interface GetProductDetailsInterface {
  id: number
  value: string
  name: string
  description: string
  photo: string
  height: string
  width: string
  weight: string
  averageRating: number
  views: number
  ratingCount: number
  categoryId: number
  category: {
    id: number
    name: string
  }
  createdAt: string
  updatedAt: string
  deletedAt: string
}
