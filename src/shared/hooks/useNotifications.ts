import { useEffect } from 'react'
import { localNotificationsService } from '../services/local-notifications.service'

export const useNotifications = () => {
  useEffect(() => {
    localNotificationsService.requestPermissions()
    localNotificationsService.setupNotificationChannel()
  }, [])

  return {}
}
