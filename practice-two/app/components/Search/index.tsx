import { useCallback, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Image, TextInput } from 'react-native'
import { Stack, XStack, getTokenValue } from 'tamagui'

import Input from '@components/Input'
import { IForm } from '@types'

import { StyledInputProps } from '@components/Input/styles'
import styles from './styles'

export type SearchProps = {
  placeholder: string
} & Omit<StyledInputProps, 'label'>

const Search = ({ placeholder, ...rest }: SearchProps) => {
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
    <XStack>
      <XStack
        flex={1}
        alignItems="center"
        space="$space.4"
        paddingHorizontal="$space.4"
        borderRadius="$radius.12"
        backgroundColor="$color.white"
        onPress={handlePress}
      >
        <Stack width="$icon.width" height="$icon.height">
          <Image source={require('@assets/search.png')} resizeMode="cover" />
        </Stack>
        <Input
          containerStyle={{ flex: 1 }}
          ref={searchInput}
          name="search"
          control={control}
          style={styles.search}
          placeholder={placeholder}
          placeholderTextColor={getTokenValue('$color.gray_50')}
          {...rest}
        />
      </XStack>
    </XStack>
  )
}

export default Search
