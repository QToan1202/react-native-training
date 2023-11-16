import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { Dimensions } from 'react-native'
import { Separator, XStack, YStack, YStackProps } from 'tamagui'

import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import { IDetailInfo } from '@types'

import styles from './styles'

export type PriceProps = {
  data: IDetailInfo[]
  total: number
  header?: string
  footer?: string
} & YStackProps

const Price = ({
  data,
  total,
  header = 'price details',
  footer = 'total amount',
  ...rest
}: PriceProps) => {
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
        <YStack space={10}>
          {data.map(({ id, label }) => (
            <Paragraph key={id} style={styles.text} content={label} />
          ))}
        </YStack>
        <YStack space={10} alignItems="flex-end">
          {data.map(({ id, value }) => (
            <Paragraph key={id} style={styles.text} content={value} />
          ))}
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
        <Heading style={[styles.text, styles.title]} fontWeight="$4" content={`$${total}`} />
      </XStack>
    </YStack>
  )
}

export default memo(Price, isEqual)
