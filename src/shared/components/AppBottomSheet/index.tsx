import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { colors } from '../../../styles/colors'
import { useBottomSheetStore } from '../../store/bottomsheet-store'

export const AppBottomSheet = () => {
  const { content, close, isOpen, config } = useBottomSheetStore()

  const bottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = useMemo(
    () => config?.snapPoints || ['80%', '90%'],
    [config?.snapPoints],
  )

  useEffect(() => {
    if (isOpen && content) {
      requestAnimationFrame(() => {
        bottomSheetRef.current?.snapToIndex(0)
      })
    } else {
      bottomSheetRef.current?.close()
    }
  }, [isOpen, content])

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        close()
      }
    },
    [close],
  )

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
    return (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.7}
        pressBehavior="close"
      />
    )
  }, [])

  return (
    <BottomSheet
      ref={bottomSheetRef}
      backgroundStyle={{
        backgroundColor: colors.background,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
      }}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={config?.enablePanDownToClose ?? true}
      index={-1}
      animateOnMount
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <BottomSheetScrollView>{content}</BottomSheetScrollView>
    </BottomSheet>
  )
}
