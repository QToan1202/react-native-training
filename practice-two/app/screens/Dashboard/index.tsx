import { useCallback } from 'react'
import { FlatList, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView, XStack, YStack } from 'tamagui'

import { RootStackParamList } from '@navigation/Stack'
import { Button, Heading, MenuCard, ProductCard, SliderItem, StoreCard } from '@components'
import { DASHBOARD } from '@constants'
import { ICategoryItem, IProductItem, ISliderItem, IStoreItem } from '@constants/screens/dashboard'
import { renderItem } from '@utils'

import styles from './styles'

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Dashboard = ({ navigation }: HomeScreenProps) => {
  const handleSeeAllProducts = useCallback(() => undefined, []) // TODO: Replacing with navigate to another screen
  const handleMoveToCategoryScreen = useCallback(({ id, name }: ICategoryItem) => {
    navigation.navigate('CategoryDetail', { id, name })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleMoveToProduct = useCallback(({ id }: IProductItem) => {
    navigation.navigate('ProductDetail', { id })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const renderProducts = <T extends IProductItem[]>(title: string, data: T) => (
    <>
      <XStack
        alignItems="center"
        justifyContent="space-between"
        space="$space.1.5"
        marginVertical="$space.3.5"
        paddingHorizontal="$space.4.5"
      >
        <Heading content={title} color="$color.gray_50" fontSize="$3" />
        <Button
          shrink
          title="see all"
          paddingHorizontal="$space.5"
          paddingVertical="$space.1.5"
          fontSize={12}
          onPress={handleSeeAllProducts}
        />
      </XStack>
      <FlatList
        keyExtractor={({ id }: IProductItem): string => id}
        data={data}
        renderItem={renderItem(ProductCard, handleMoveToProduct)}
        horizontal
        contentContainerStyle={styles.itemSpacing}
        showsHorizontalScrollIndicator={false}
      />
    </>
  )

  return (
    <ScrollView flex={1} backgroundColor="$color.white">
      <FlatList
        keyExtractor={({ id }: ISliderItem): string => id}
        data={DASHBOARD.SLIDER_DATA}
        renderItem={renderItem(SliderItem)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.sliderItem}
      />
      <FlatList
        keyExtractor={({ id }: ICategoryItem): string => id}
        data={DASHBOARD.CATEGORY_DATA}
        renderItem={renderItem(MenuCard, handleMoveToCategoryScreen)}
        numColumns={4}
        columnWrapperStyle={styles.menuItem}
        scrollEnabled={false}
      />
      <YStack marginVertical="$space.3">
        {renderProducts('New Product', DASHBOARD.PRODUCT_DATA)}
        {renderProducts('Popular Product', DASHBOARD.PRODUCT_DATA)}
      </YStack>
      <YStack>
        <View style={styles.bgStore} />
        <XStack
          alignItems="center"
          justifyContent="space-between"
          space="$space.1.5"
          marginVertical="$space.3.5"
          paddingHorizontal="$space.4.5"
        >
          <Heading content="Store to follow" color="$color.white" fontSize="$3" />
          <Button
            shrink
            paddingHorizontal="$space.5"
            paddingVertical="$space.1.5"
            fontSize={12}
            title="view all"
            variant="secondary"
            onPress={handleSeeAllProducts}
          />
        </XStack>
        <FlatList
          keyExtractor={({ id }: IStoreItem): string => id}
          data={DASHBOARD.STORE_DATA}
          renderItem={renderItem(StoreCard)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.itemSpacing}
        />
      </YStack>
    </ScrollView>
  )
}

export default Dashboard
