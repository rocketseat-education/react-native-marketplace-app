import { marketPlaceApiClient } from '../api/market-place'
import { AuthResponse } from '../interfaces/http/auth-response'
import { LoginHttpParams } from '../interfaces/http/login'
import { RegisterHttpParams } from '../interfaces/http/register'

export const register = async (userData: RegisterHttpParams) => {
  const { data } = await marketPlaceApiClient.post<AuthResponse>(
    '/auth/register',
    userData,
  )

  return data
}

export const login = async (userData: LoginHttpParams) => {
  const { data } = await marketPlaceApiClient.post<AuthResponse>(
    '/auth/login',
    userData,
  )

  return data
}
