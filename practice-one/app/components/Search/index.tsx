import { useCallback, useRef } from 'react'
import { Image, TextInput, TextInputProps, TouchableWithoutFeedback, View } from 'react-native'

import { COLORS } from '@constants'
import styles from './styles'

export interface SearchProps extends TextInputProps {
  value: string
  placeholder: string
  onChangeText: (text: string) => void
}

const Search = ({ value, placeholder, onChangeText, ...rest }: SearchProps) => {
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
      <View style={styles.container}>
        <Image style={styles.icon} source={require('@assets/search.png')} />
        <TextInput
          ref={searchInput}
          style={styles.search}
          placeholder={placeholder}
          placeholderTextColor={COLORS.GRAY_50}
          value={value}
          onChangeText={onChangeText}
          {...rest}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Search
