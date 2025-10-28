import axios, { AxiosInstance } from 'axios'
import { Platform } from 'react-native'

const getBaseURL = () => {
  return Platform.select({
    ios: 'http://localhost:3001',
    android: 'http://10.0.2.2:3001',
  })
}

export const baseURL = getBaseURL()

export class MarketPlaceApiClient {
  private instance: AxiosInstance
  private isRefreshing = false

  constructor() {
    this.instance = axios.create({
      baseURL,
    })
  }

  getInstance() {
    return this.instance
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance()
