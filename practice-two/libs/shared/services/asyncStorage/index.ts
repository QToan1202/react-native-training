import AsyncStorage from '@react-native-async-storage/async-storage'
import { Callback } from '@react-native-async-storage/async-storage/lib/typescript/types'

import { TAsyncStoreReturnType } from '../../types'

const save = async <T>(
  key: string,
  value: T extends object ? T : string,
  onComplete?: Callback
) => {
  try {
    const saveValue: string = JSON.stringify(value)

    await AsyncStorage.setItem(key, saveValue, onComplete)
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message)
  }
}

const get = async <T>(
  key: string,
  onComplete?: () => void,
  returnType: TAsyncStoreReturnType = 'string'
): Promise<T> => {
  try {
    const value: string | null = await AsyncStorage.getItem(key, onComplete)

    if (value === null) throw new Error('Null value')

    if (returnType === 'object') return JSON.parse(value)

    return value as T
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message)

    throw new Error('Unidentified error')
  }
}

export default { save, get }
