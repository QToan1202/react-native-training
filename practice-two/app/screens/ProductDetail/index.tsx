import React, { useCallback, useMemo } from 'react'
import { ScrollView, XStack, YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Avatar, Button, Heading, IconButton, Paragraph, TabBar } from '@components'
import { CATEGORY } from '@constants'
import { RootStackParamList } from '@navigation/Stack'

import StyledImageBackground from './styles'

export type ProductDetailProps = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>

const ProductDetail = ({ navigation }: ProductDetailProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleBackPress = useCallback(() => navigation.goBack(), [])
  const handlePress = useCallback(() => undefined, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNavigateToCart = useCallback(() => navigation.navigate('Cart'), [])
  const Categories: React.JSX.Element[] = useMemo(
    () =>
      CATEGORY.map((item: string) => (
        <Paragraph
          key={item}
          content={item}
          color="$color.gray_50"
          lineHeight="$4"
          textTransform="capitalize"
        />
      )),
    []
  )

  return (
    <>
      <ScrollView
        backgroundColor="$color.bg_layer"
        space="$space.2"
        showsVerticalScrollIndicator={false}
      >
        <YStack>
          <StyledImageBackground source={require('@assets/cart/item.png')}>
            <IconButton icon={require('@assets/back.png')} onPress={handleBackPress} />
            <XStack alignItems="center" space="$space.1.5">
              <IconButton icon={require('@assets/share.png')} onPress={handlePress} />
              <IconButton icon={require('@assets/heart.png')} onPress={handlePress} />
              <IconButton icon={require('@assets/more.png')} onPress={handlePress} />
            </XStack>
          </StyledImageBackground>
          <YStack
            space="$space.2.5"
            backgroundColor="$color.white"
            paddingHorizontal="$space.3.5"
            paddingTop="$space.3.5"
            paddingBottom="$space.5"
          >
            <Heading content="Coca Cola" fontSize="$3" color="$color.gray_50" />
            <Heading content="$25" fontSize="$3" color="$color.primary" />
          </YStack>
        </YStack>
        <XStack
          alignItems="center"
          justifyContent="space-between"
          paddingVertical="$space.4.5"
          paddingHorizontal="$space.3"
          backgroundColor="$color.white"
        >
          <Avatar size="md" source={require('@assets/avatar.png')} name="tradly store" />
          <Button
            shrink
            title="follow"
            paddingVertical="$space.1.5"
            paddingHorizontal="$space.5"
            fontSize={12}
            onPress={handlePress}
          />
        </XStack>
        <YStack
          paddingBottom="$space.3"
          paddingHorizontal="$space.6"
          borderRadius="$radius.4"
          space="$space.3.5"
          backgroundColor="$color.white"
        >
          <Paragraph
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis cras placerat diam ipsum ut. Nisi vel adipiscing massa bibendum diam. Suspendisse mattis dui maecenas duis mattis. Mattis aliquam at arcu, semper nunc, venenatis et pellentesque eu. Id tristique maecenas tristique habitasse eu elementum sed. Aliquam eget lacus, arcu, adipiscing eget feugiat in dolor sagittis.
Non commodo, a justo massa porttitor sed placerat in. Orci tristique etiam tempus sed. Mi varius morbi egestas dictum tempor nisl. In "
            color="$color.gray_50"
            lineHeight="$4"
          />
        </YStack>
        <YStack
          paddingBottom="$space.3"
          paddingHorizontal="$space.6"
          borderRadius="$radius.4"
          space="$space.3.5"
          backgroundColor="$color.white"
        >
          <Heading
            content="Details"
            paddingVertical="$space.3"
            color="$color.black"
            fontSize="$3"
            fontWeight="$3"
            lineHeight="$4"
            textTransform="capitalize"
          />
          <XStack alignItems="center" space="$space.6">
            <YStack maxWidth={120} space="$space.3.5" opacity={0.7}>
              {Categories}
            </YStack>
            <YStack maxWidth={200} space="$space.3.5">
              <Paragraph
                content="organic"
                color="$color.gray_50"
                lineHeight="$4"
                textTransform="capitalize"
              />
              <Paragraph
                content="fixed"
                color="$color.gray_50"
                lineHeight="$4"
                textTransform="capitalize"
              />
              <Paragraph
                content="beverages"
                color="$color.gray_50"
                lineHeight="$4"
                textTransform="capitalize"
              />
              <Paragraph
                content="kualalumpur, malaysia"
                color="$color.gray_50"
                lineHeight="$4"
                textTransform="capitalize"
              />
            </YStack>
          </XStack>
        </YStack>
        <YStack
          paddingBottom="$space.3"
          paddingHorizontal="$space.6"
          borderRadius="$radius.4"
          space="$space.3.5"
          backgroundColor="$color.white"
        >
          <Heading
            content="Additional Details"
            paddingVertical="$space.3"
            color="$color.black"
            fontSize="$3"
            fontWeight="$3"
            lineHeight="$4"
            textTransform="capitalize"
          />
          <XStack alignItems="center" space="$space.6">
            <YStack maxWidth={120} space="$space.3.5" opacity={0.7}>
              <Paragraph
                content="delivery details"
                color="$color.gray_50"
                lineHeight="$4"
                textTransform="capitalize"
              />
            </YStack>
            <YStack maxWidth={200} space="$space.3.5">
              <Paragraph
                content="Home Delivery Available, Cash On Delivery"
                color="$color.gray_50"
                lineHeight="$4"
                textTransform="capitalize"
              />
            </YStack>
          </XStack>
        </YStack>
      </ScrollView>
      <TabBar title="Add To Cart" onPress={handleNavigateToCart} />
    </>
  )
}

export default ProductDetail
