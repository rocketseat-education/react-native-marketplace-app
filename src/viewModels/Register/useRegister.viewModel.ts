import { useState } from 'react'

export const useRegisterViewModel = () => {
  const [userData, setUserData] = useState({
    name: 'Arthur',
  })
  return {
    userData,
    setUserData,
  }
}
