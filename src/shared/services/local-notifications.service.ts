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

const requestPermissions = async (): Promise<boolean> => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync()

  let finalStatus = existingStatus

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync()
    finalStatus = status
  }

  return finalStatus === 'granted'
}

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

interface ScheduleCartReminderInterface {
  productName: string
  productId: number
  delayInMinutes: number
}

const scheduleCartReminder = async ({
  productName,
  productId,
  delayInMinutes,
}: ScheduleCartReminderInterface) => {
  const hasPermission = await requestPermissions()

  if (!hasPermission) {
    console.log('[LocalNotifications] - Permission not granted')
    return
  }

  const notification = await Notifications.scheduleNotificationAsync({
    identifier: NOTIFICATION_IDS.CART_REMINDER,
    content: {
      title: 'Você esqueceu algo no carrinho!',
      body: `O produto ${productName} está esperando por você. Finalize sua compra agora!`,
      data: {
        type: 'cart_reminder',
        productId: String(productId),
      },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: delayInMinutes,
    },
  })

  return notification
}

export const localNotificationsService = {
  scheduleCartReminder,
  requestPermissions,
  setupNotificationChannel,
}
