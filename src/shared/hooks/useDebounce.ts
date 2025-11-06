import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setDebouncedValue(value)
    }, delay)
    return () => clearTimeout(timeoutId)
  }, [value, delay])
  return debouncedValue
}
