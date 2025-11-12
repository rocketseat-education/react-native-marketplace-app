import { useEffect, useState } from 'react'
import { useGetUserCommentQuery } from '../../../../shared/queries/comments/use-get-user-comment.query'

interface RatingFormInterface {
  content: string
  rating: number
  isEditing: boolean
}

const initialRatingForm: RatingFormInterface = {
  content: '',
  rating: 0,
  isEditing: false,
}

export const useReviewBottomSheetViewModel = (productId: number) => {
  const [ratingForm, setRatingForm] =
    useState<RatingFormInterface>(initialRatingForm)
  const { data: userComment, isLoading: isLoadingUserComment } =
    useGetUserCommentQuery(productId)
  console.log(userComment)

  const handleRatingChange = (rating: number) => {
    setRatingForm((prevData) => ({
      ...prevData,
      rating,
    }))
  }

  const handleContentChange = (content: string) => {
    setRatingForm((prevData) => ({
      ...prevData,
      content,
    }))
  }

  useEffect(() => {
    if (userComment && userComment.content && userComment.rating) {
      setRatingForm({
        content: userComment.content,
        rating: userComment.rating,
        isEditing: true,
      })
    } else {
      setRatingForm(initialRatingForm)
    }
  }, [userComment])

  return {
    handleContentChange,
    handleRatingChange,
    ratingForm,
  }
}
