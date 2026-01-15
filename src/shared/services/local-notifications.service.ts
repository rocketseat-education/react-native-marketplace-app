import * as Notifications from 'expo-notifications'
import { Platform } from 'react-native'
import { colors } from '../../styles/colors'

const DEFAULT_CHANNEL = 'default'

const NOTIFICATION_IDS = {
  CART_REMINDER: 'cart-reminder',
  PURCHASE_FEEDBACK: 'purchase-feedback',
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldShowBanner: true,
    shouldSetBadge: false,
    shouldShowList: true,
  }),
})

const setupNotificationChannel = async () => {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync(DEFAULT_CHANNEL, {
      name: 'Notificações do Marketplace',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: colors['purple-base'],
    })
  }
}
