import { useCallback, useRef } from 'react'
import { useForm } from 'react-hook-form'
import {
  Image,
  StyleProp,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native'

import { COLORS } from '@constants'
import Input from '@components/Input'
import { IForm } from '@types'

import styles from './styles'

export interface SearchProps extends TextInputProps {
  placeholder: string
  style?: StyleProp<ViewStyle>
}

const Search = ({ placeholder, style, ...rest }: SearchProps) => {
  const { control } = useForm<IForm>()
  const searchInput = useRef<TextInput>(null)

  /**
   * Provide a focus to input when user press on the touchable element
   * User may press on the icon
   * but it will focus in the input element though
   */
  const handlePress = useCallback(() => {
    searchInput.current?.focus()
  }, [])

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.container, style]}>
        <Image style={styles.icon} source={require('@assets/search.png')} />
        <Input
          ref={searchInput}
          name="search"
          control={control}
          style={styles.search}
          placeholder={placeholder}
          placeholderTextColor={COLORS.GRAY_50}
          {...rest}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Search
