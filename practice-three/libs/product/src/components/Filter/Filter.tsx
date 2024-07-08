import { Fragment } from 'react'
import { H2, Separator, XStack, YStack, YStackProps } from 'tamagui'

import { Accordion, AccordionItem, Checkbox, Slider, Text } from '@shared/components'

import { FILTER_LABELS } from '../../constants'

export type FilterProps = YStackProps & {
  min: number
  max: number
  brandNames: string[]
  colors: string[]
  discountPercent: number[]
}

const Filter = ({ min, max, brandNames, colors, discountPercent, ...rest }: FilterProps) => {
  const renderFilterOps = (label: string) => {
    switch (label) {
      case 'brand':
        return brandNames.map((item: string) => <Checkbox key={item} label={item} />)

      case 'color':
        return colors.map((item: string) => <Checkbox key={item} label={item} />)

      case 'discount range':
        return discountPercent.map((item: number) => <Checkbox key={item} label={String(item)} />)

      default:
        return null
    }
  }

  return (
    <YStack {...rest}>
      <XStack justifyContent="space-between" alignItems="center">
        <H2 color="$black" fontSize="$6">
          Filters
        </H2>
        <Text
          color="$blue_200"
          fontSize="$3"
          hoverStyle={{
            cursor: 'pointer',
            textDecorationStyle: 'solid',
            textDecorationLine: 'underline',
          }}
        >
          Clear all
        </Text>
      </XStack>
      <Text>Price</Text>
      <Slider min={0} max={max} step={1} defaultValue={[0, min]} minStepsBetweenThumbs={10} />
      <XStack justifyContent="space-between">
        <YStack>
          <Text fontSize="$3" color="$gray_200">
            Min
          </Text>
          <Text fontSize={16}>Rs. {min}</Text>
        </YStack>
        <YStack>
          <Text fontSize="$3" color="$gray_200">
            Max
          </Text>
          <Text fontSize={16}>Rs. {max}</Text>
        </YStack>
      </XStack>
      <Accordion type="multiple">
        {FILTER_LABELS.map((label: string) => (
          <Fragment key={label}>
            <Separator marginVertical={20} />
            <AccordionItem
              label={
                <Text ellipse fontSize="$5" fontWeight="bold" textTransform="capitalize">
                  {label}
                </Text>
              }
              padding={5}
              borderWidth={0}
              backgroundColor="$pure_white"
              focusStyle={{
                backgroundColor: '$transparent',
              }}
              hoverStyle={{
                backgroundColor: '$transparent',
              }}
            >
              {renderFilterOps(label)}
            </AccordionItem>
          </Fragment>
        ))}
      </Accordion>
    </YStack>
  )
}

export default Filter
