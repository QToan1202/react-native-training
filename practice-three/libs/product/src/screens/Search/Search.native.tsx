import { View, XStack, YStack } from 'tamagui'
import { useForm } from 'react-hook-form'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { ProductStack, TSearchField } from '@shared/types'
import { Button, Text } from '@shared/components'

import { Bell } from '../../assets/images'
import { Search as SearchBar } from '../../components'
import { CLOTH_CATEGORIES, TYPES } from '../../constants'

export type SearchProps = Partial<NativeStackScreenProps<ProductStack, 'Search'>>

const Search = (props: SearchProps) => {
  const { control } = useForm<TSearchField>()
  const renderListOfSearchCategory = (title: string, data: string[]) => (
    <>
      <Text color="$blue_100">{title}</Text>
      <XStack gap={20} flexWrap="wrap">
        {data.map((category: string) => (
          <Button
            key={category}
            title={category}
            variant="outlined"
            padding={16}
            borderRadius={5}
            borderColor="$border"
          />
        ))}
      </XStack>
    </>
  )

  return (
    <View padding={12}>
      <XStack gap={22} alignItems="center" marginBottom={10}>
        <SearchBar containerStyle={{ flex: 1 }} label="search" control={control} />
        <Bell />
      </XStack>
      <YStack gap={20} marginVertical={32}>
        {renderListOfSearchCategory('Cloth', CLOTH_CATEGORIES)}
      </YStack>
      <YStack gap={20}>{renderListOfSearchCategory('Type', TYPES)}</YStack>
    </View>
  )
}

export default Search
