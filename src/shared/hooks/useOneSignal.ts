import { useEffect } from 'react'
import { OneSignal } from 'react-native-onesignal'

const ONESIGNAL_APP_ID = process.env.EXPO_PUBLIC_ONESIGNAL_APP_ID

export const useOneSignal = () => {
  useEffect(() => {
    if (!ONESIGNAL_APP_ID) return
    OneSignal.initialize(ONESIGNAL_APP_ID)
    ;(async () => {
      const playerId = await OneSignal.User.pushSubscription.getIdAsync()
      console.log({ playerId })
    })()
  }, [])
  return {}
}
