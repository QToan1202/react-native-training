import { memo, useMemo } from 'react'
import isEqual from 'react-fast-compare'
import { Dimensions } from 'react-native'
import { Separator, XStack, YStack, YStackProps } from 'tamagui'

import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import { ICart } from '@types'

import styles from './styles'

export type PriceProps = {
  data: ICart[]
  deliveryFee: number
  header?: string
  footer?: string
} & YStackProps

const Price = ({
  data,
  deliveryFee,
  header = 'price details',
  footer = 'total amount',
  ...rest
}: PriceProps) => {
  const calculatePrice = useMemo(
    () =>
      data.reduce((previousValue: number, { price, discountPrice, quantity }: ICart) => {
        if (discountPrice !== 0) return previousValue + discountPrice * quantity

        return previousValue + price * quantity
      }, 0),
    [data]
  )

  return (
    <YStack
      paddingHorizontal="$space.3"
      paddingBottom="$space.5"
      backgroundColor="$color.white"
      {...rest}
    >
      <Heading
        fontWeight="$3"
        fontSize="$3"
        color="$color.black"
        textTransform="capitalize"
        content={header}
      />
      <XStack paddingTop="$space.3" alignItems="center" justifyContent="space-between">
        <YStack flex={1} space={10}>
          <XStack justifyContent="space-between">
            <Paragraph
              style={styles.text}
              content={`Price (${data.length} ${data.length > 1 ? 'items' : 'item'})`}
            />
            <Paragraph style={styles.text} content={`$${calculatePrice}`} />
          </XStack>
          <XStack justifyContent="space-between">
            <Paragraph style={styles.text} content="Delivery fee" />
            <Paragraph style={styles.text} content={`$${deliveryFee}`} />
          </XStack>
        </YStack>
      </XStack>
      <Separator
        alignSelf="stretch"
        marginTop="$space.5"
        marginLeft="$space.-3.5"
        borderBottomColor="$color.divider"
        width={Dimensions.get('window').width}
      />
      <XStack alignItems="center" justifyContent="space-between">
        <Heading style={[styles.text, styles.title]} content={footer} />
        <Heading
          style={[styles.text, styles.title]}
          fontWeight="$4"
          content={`$${calculatePrice + deliveryFee}`}
        />
      </XStack>
    </YStack>
  )
}

export default memo(Price, isEqual)
