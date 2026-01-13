import Constants from 'expo-constants'
import { Platform } from 'react-native'
import { baseURL } from '../api/market-place'

export const buildImageUrl = (originalUrl: string) => {
  if (!originalUrl) return originalUrl

  if (Constants.expoConfig?.extra?.isProduction) {
    // In production, if it's a relative path, we still need to prepend the base URL
    // Assuming production uses absolute URLs, but handle relative paths just in case
    const fullUrl = originalUrl.startsWith('/')
      ? `${baseURL}${originalUrl}`
      : originalUrl
    return fullUrl
  }

  // If originalUrl is a relative path, prepend baseURL
  const fullUrl = originalUrl.startsWith('/')
    ? `${baseURL}${originalUrl}`
    : originalUrl

  // Handle localhost replacement for Android (in case URL is already absolute with localhost)
  return Platform.select({
    android: fullUrl.replace('localhost', '10.0.2.2'),
    ios: fullUrl,
  })
}
