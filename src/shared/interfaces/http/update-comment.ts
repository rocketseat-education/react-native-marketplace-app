export interface UpdateCommentRequest {
  content: string
  commentId: number
  rating: number
}

export interface UpdateCommentResponse {
  message: string
  ratingUpdated: boolean
  comment: {
    id: number
    content: string
    createdAt: string
    updatedAt: string
  }
}
