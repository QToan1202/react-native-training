import { useQuery } from '@tanstack/react-query'
import { Accordion, Separator, XStack, YStack } from 'tamagui'
import { Fragment, useMemo } from 'react'

import {
  AccordionItem,
  Button,
  Carousel,
  Heading,
  Input,
  Radio,
  RadioItem,
  Text,
} from '@shared/components'
import { calculateDiscountPrice } from '@shared/utils'
import { getOffersQuery } from '@shared/queries'
import { TOffer } from '@shared/types'

import { findProductQuery } from '../../hooks'
import { Share } from '../../assets/images'
import { useForm } from 'react-hook-form'
import { PRODUCT_LABELS } from '../../constants'

const ProductDetail = () => {
  const { data: product, isPending, error } = useQuery(findProductQuery('/products', 'p002'))
  const { data: offers, isSuccess } = useQuery(getOffersQuery('/offers'))
  const { control } = useForm<{
    pinCode: string
  }>({
    defaultValues: {
      pinCode: '',
    },
  })
  const renderOffers = useMemo(() => {
    if (!isSuccess) return

    return offers.map(({ id, name, discount }: TOffer) => (
      <XStack key={id} gap={10}>
        <Text>
          {name} offer get {discount}&#37; off
        </Text>
        <Text color="$primary" hoverStyle={{ textDecorationLine: 'underline' }}>
          T&#38;C
        </Text>
      </XStack>
    ))
  }, [isSuccess, offers])

  if (isPending) return <Text>Loading...</Text>
  if (error) return <Text>An error has occurred: {error.message}</Text>

  return (
    <YStack gap={15}>
      <Carousel
        {...{
          data: [
            'https://picsum.photos/500/300',
            'https://picsum.photos/501/300',
            'https://picsum.photos/502/300',
            'https://images.dog.ceo/breeds/husky/n02110185_14479.jpg',
            'https://images.dog.ceo/breeds/setter-english/n02100735_4040.jpg',
          ],
        }}
      />
      <XStack justifyContent="space-between">
        <YStack gap={6}>
          <Heading color="$black" fontSize="$4" fontWeight="500">
            {product.name}
          </Heading>
          <Text fontSize="$3">{product.brandName}</Text>
          <XStack alignItems="center" gap={14}>
            {!!product.discountPercent && (
              <Text textDecorationLine="line-through" fontSize="$1">
                Rs.{product.price}
              </Text>
            )}
            <Text fontSize="$3">
              Rs.
              {product.discountPercent
                ? calculateDiscountPrice(product.price, product.discountPercent)
                : product.price}
            </Text>
            {!!product.discountPercent && (
              <Text color="$green_50" fontSize="$1">
                ({product.discountPercent}% off)
              </Text>
            )}
          </XStack>
        </YStack>
        <Share />
      </XStack>
      <YStack>
        <Heading color="black" fontSize="$3">
          Color
        </Heading>
      </YStack>
      <XStack justifyContent="space-between">
        <YStack gap={6}>
          <Heading color="black" fontSize="$3" fontWeight="500">
            Select Size
          </Heading>
          <Radio>
            <XStack gap={16}>
              {product.sizes.map((size: string) => (
                <RadioItem
                  key={size}
                  value={size}
                  padding={18}
                  borderRadius={0}
                  backgroundColor="$transparent"
                  hoverStyle={{
                    borderColor: '$gray_50',
                  }}
                  $platform-android={{
                    elevation: 5,
                  }}
                  $platform-ios={{
                    shadowColor: '$pure_black',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                  }}
                  elevation={5}
                >
                  <Text>{size}</Text>
                </RadioItem>
              ))}
            </XStack>
          </Radio>
        </YStack>
        <Text color="$primary" fontSize="$1">
          Size Chart
        </Text>
      </XStack>
      <YStack gap={6}>
        <Heading color="black" fontSize="$3" fontWeight="500">
          Best Offers
        </Heading>
        {renderOffers}
      </YStack>
      <YStack gap={6}>
        <Heading color="black" fontSize="$3" fontWeight="500">
          Delivery Details
        </Heading>
        <Input
          label="pinCode"
          containerStyle={{
            borderRadius: 10,
            maxWidth: 300,
          }}
          placeholder="Enter Pincode"
          placeholderTextColor="$black"
          paddingHorizontal={22}
          control={control}
          endIcon={<Button title="Check" variant="text" color="$white" />}
        />
      </YStack>
      <Accordion type="multiple">
        {PRODUCT_LABELS.map((label: string) => (
          <Fragment key={label}>
            <Separator marginVertical={20} />
            <AccordionItem
              label={
                <Text ellipse fontSize="$3" fontWeight="500" textTransform="capitalize">
                  {label}
                </Text>
              }
              padding={5}
              borderWidth={0}
              backgroundColor="$transparent"
              focusStyle={{
                backgroundColor: '$transparent',
              }}
              hoverStyle={{
                backgroundColor: '$transparent',
              }}
            >
              <Text>{product.description}</Text>
            </AccordionItem>
          </Fragment>
        ))}
      </Accordion>
    </YStack>
  )
}

export default ProductDetail
