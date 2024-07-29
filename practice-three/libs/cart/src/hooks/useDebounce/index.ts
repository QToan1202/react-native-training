import { useEffect, useState } from 'react'

const useDebounce = <T>(value: T, delay: number): T => {
  const [currentValue, setCurrentValue] = useState<T>(value)

  useEffect(() => {
    const delayValue = setTimeout(() => {
      setCurrentValue(value)
    }, delay)

    return () => {
      clearTimeout(delayValue)
    }
  }, [value, delay])

  return currentValue
}

export default useDebounce
