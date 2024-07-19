import { useQuery } from '@tanstack/react-query'
import { Separator, XStack, YStack } from 'tamagui'
import { Fragment, useMemo } from 'react'
import { useForm } from 'react-hook-form'

import {
  Accordion,
  AccordionItem,
  Button,
  Carousel,
  Heading,
  Input,
  Radio,
  RadioItem,
  Rating,
  Text,
} from '@shared/components'
import { calculateDiscountPrice } from '@shared/utils'
import { getOffersQuery } from '@shared/queries'
import { TOffer, TReview } from '@shared/types'

import { findProductQuery } from '../../hooks'
import { Share } from '../../assets/images'
import { PRODUCT_LABELS, PRODUCT_SPECIFICATIONS_LABELS } from '../../constants'
import { renderSpecificationItem } from '../../utils'
import { Comment } from '../../components'

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

  const [firstCol, secondCol] = renderSpecificationItem(PRODUCT_SPECIFICATIONS_LABELS, product)
  const renderProductContent = (label: string) => {
    switch (label) {
      case 'product details':
        return <Text>{product.description}</Text>

      case 'specification':
        return (
          <XStack gap={55}>
            <YStack>{firstCol}</YStack>
            <YStack>{secondCol}</YStack>
          </XStack>
        )

      case 'ratings & reviews':
        return (
          <YStack gap={15}>
            <XStack alignItems="baseline" gap={16}>
              <Text fontSize={28}>{product.rating}</Text>
              <Rating defaultValue={product.rating} numberOfStarts={5} color="$black" isDisabled />
            </XStack>
            <Text color="$gray_100">
              {product.reviews.length}{' '}
              {product.reviews.length > 2 ? 'Verified Buyers' : 'Verified Buyer'}
            </Text>
            {product.reviews.map(({ date, ...itemProps }: TReview) => (
              <Comment
                key={date.toString()}
                date={date}
                {...itemProps}
                images={[
                  'https://picsum.photos/500/300',
                  'https://picsum.photos/501/300',
                  'https://picsum.photos/502/300',
                  'https://images.dog.ceo/breeds/husky/n02110185_14479.jpg',
                  'https://images.dog.ceo/breeds/setter-english/n02100735_4040.jpg',
                ]}
              />
            ))}
          </YStack>
        )

      case 'how this was made':
        return (
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus
            diam, metus sit. Quis venenatis, neque arcu accumsan sollicitudin aliquet nunc. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam,
            metus sit. Quis venenatis, neque arcu accumsan sollicitudin aliquet nunc. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam, metus sit.
            Quis venenatis, neque arcu
          </Text>
        )

      case 'manufacturing information':
        return (
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus
            diam, metus sit. Quis venenatis, neque arcu accumsan sollicitudin aliquet nunc. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam,
            metus sit. Quis venenatis, neque arcu accumsan sollicitudin aliquet nunc. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam, metus sit.
            Quis venenatis, neque arcu
          </Text>
        )

      default:
        return null
    }
  }
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
            <Separator borderColor="$separate" marginVertical={20} />
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
              {renderProductContent(label)}
            </AccordionItem>
          </Fragment>
        ))}
      </Accordion>
    </YStack>
  )
}

export default ProductDetail
