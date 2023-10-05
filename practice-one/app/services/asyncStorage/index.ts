import AsyncStorage from '@react-native-async-storage/async-storage'

import { TAsyncStoreReturnType } from '@types'

const save = async (key: string, value: string | object) => {
  try {
    const saveValue: string = JSON.stringify(value)

    await AsyncStorage.setItem(key, saveValue)
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message)
  }
}

const get = async (
  key: string,
  returnType: TAsyncStoreReturnType = 'string'
): Promise<string | object | Error> => {
  try {
    const value: string | null = await AsyncStorage.getItem(key)

    if (value === null) throw new Error('Null value')

    if (returnType === 'object') JSON.parse(value)

    return value
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message)

    throw new Error('Unidentified error')
  }
}

export default { save, get }
