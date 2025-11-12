import { useEffect, useState } from 'react'
import { Toast } from 'toastify-react-native'
import { useCreateCommentMutation } from '../../../../shared/queries/comments/use-create-comment.mutation'
import { useGetUserCommentQuery } from '../../../../shared/queries/comments/use-get-user-comment.query'
import { useUpdateCommentMutation } from '../../../../shared/queries/comments/use-update-comment.mutation'

interface RatingFormInterface {
  content: string
  rating: number
  isEditing: boolean
  commentId?: number
}

const initialRatingForm: RatingFormInterface = {
  content: '',
  rating: 0,
  isEditing: false,
  commentId: undefined,
}

export const useReviewBottomSheetViewModel = (productId: number) => {
  const [ratingForm, setRatingForm] =
    useState<RatingFormInterface>(initialRatingForm)
  const { data: userComment, isLoading: isLoadingUserComment } =
    useGetUserCommentQuery(productId)

  const createCommentMutation = useCreateCommentMutation(productId)

  const updateCommentMutation = useUpdateCommentMutation(productId)

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

  const handleFormSubmit = async () => {
    if (ratingForm.rating === 0) {
      Toast.warn('Por favor, selecione uma nota.', 'top')
    }

    if (!ratingForm.content.trim()) {
      Toast.warn('Por favor, escreva um comentário.', 'top')
    }

    const { isEditing, ...formData } = ratingForm

    if (isEditing) {
      updateCommentMutation.mutate({
        ...formData,
        commentId: formData.commentId!,
      })
    } else {
      createCommentMutation.mutate({
        ...formData,
        productId,
        rating: formData.rating,
      })
    }
  }

  useEffect(() => {
    if (userComment && userComment.comment) {
      setRatingForm({
        content: userComment.comment.content,
        rating: userComment.rating,
        isEditing: true,
        commentId: userComment.comment.id,
      })
    } else {
      setRatingForm(initialRatingForm)
    }
  }, [userComment])

  const isLoading =
    createCommentMutation.isPending || updateCommentMutation.isPending

  return {
    handleContentChange,
    handleRatingChange,
    ratingForm,
    handleFormSubmit,
    isLoading,
  }
}
